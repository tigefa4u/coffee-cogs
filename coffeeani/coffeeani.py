from redbot.core import Config, app_commands, commands, checks
from redbot.core.utils.views import SimpleMenu
import asyncio
import datetime
import json
import re
import aiohttp
import discord

SEARCH_ANIME_MANGA_QUERY = """
query ($id: Int, $page: Int, $search: String, $type: MediaType) {
    Page (page: $page, perPage: 10) {
        media (id: $id, search: $search, type: $type) {
            id
            idMal
            description(asHtml: false)
            title {
                english
                romaji
                native
            }
            coverImage {
                medium
                color
            }
            bannerImage
            averageScore
            meanScore
            status
            episodes
            chapters
            externalLinks {
                url
                site
            }
            nextAiringEpisode {
                timeUntilAiring
            }
            countryOfOrigin
            format
            synonyms
            tags {
                name
                isMediaSpoiler
            }
            genres
        }
    }
}
"""

SEARCH_CHARACTER_QUERY = """
query ($id: Int, $page: Int, $search: String) {
  Page(page: $page, perPage: 10) {
    characters(id: $id, search: $search) {
      id
      description (asHtml: true),
      name {
        first
        last
        native
      }
      image {
        large
      }
      media {
        nodes {
          id
          type
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
  }
}
"""

SEARCH_USER_QUERY = """
query ($id: Int, $page: Int, $search: String) {
    Page (page: $page, perPage: 10) {
        users (id: $id, search: $search) {
            id
            name
            siteUrl
            avatar {
                    large
            }
            about (asHtml: true),
            stats {
                watchedTime
                chaptersRead
            }
            favourites {
            manga {
              nodes {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
              }
            }
            characters {
              nodes {
                id
                name {
                  first
                  last
                  native
                }
              }
            }
            anime {
              nodes {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
              }
            }
            }
        }
    }
}
"""

class Coffeeani(commands.Cog):
    """Search anime, manga (manhwa/manhua/light novels), users, and characters from Anilist. See series info, status, episodes/chapters, and tags."""

    def __init__(self):
        self.url = "https://graphql.anilist.co"

    async def red_delete_data_for_user(self, **kwargs):
        """Nothing to delete."""
        return

    def format_name(self, first_name, last_name):  # Combines first_name and last_name and/or shows either of the two
        if first_name and last_name:
            return first_name + " " + last_name
        elif first_name:
            return first_name
        elif last_name:
            return last_name
        else:
            return "No name"

    def clean_html(self, description):  # Removes html tags
        if not description:
            return ""
        cleanr = re.compile("<.*?>")
        cleantext = re.sub(cleanr, "", description)
        return cleantext

    def clean_spoilers(self, description):  # Removes spoilers using the html tag given by AniList
        if not description:
            return ""
        cleanr = re.compile("/<span[^>]*>.*</span>/g")
        cleantext = re.sub(cleanr, "", description)
        return cleantext

    def description_parser(self, description):  # Limits text to characters and 5 lines and adds "..." at the end
        description = self.clean_spoilers(description)
        description = self.clean_html(description)
        description = "\n".join(description.split("\n")[:5])
        if len(description) > 500:
            return description[:500] + "..."
        else:
            return description

    def list_maximum(self, items):  # Limits to 5 strings than adds "+X more"
        if len(items) > 5:
            return items[:5] + ["+ " + str(len(items) - 5) + " more"]
        else:
            return items

    async def _request(self, query, variables=None):

        if variables is None:
            variables = {}

        request_json = {"query": query, "variables": variables}

        headers = {"content-type": "application/json"}

        async with aiohttp.ClientSession() as session:
            async with session.post(self.url, data=json.dumps(request_json), headers=headers) as response:
                return await response.json()

    async def _search_anime_manga(self, ctx, cmd, entered_title):
        variables = {"search": entered_title, "page": 1, "type": cmd}

        data = (await self._request(SEARCH_ANIME_MANGA_QUERY, variables))["data"]["Page"]["media"]

        if data is not None and len(data) > 0:

            # a list of embeds
            embeds = []
            idx_total = len(data)

            for idx, anime_manga in enumerate(data):
                # Sets up various variables for Embed
                link = f"https://anilist.co/{cmd.lower()}/{anime_manga['id']}"
                description = anime_manga["description"]
                title = anime_manga["title"]["english"] or anime_manga["title"]["romaji"]
                if anime_manga.get("nextAiringEpisode"):
                    seconds = anime_manga["nextAiringEpisode"]["timeUntilAiring"]
                    time_left = "Next episode in "+str(datetime.timedelta(seconds=seconds))
                else:
                    time_left = None

                embed = discord.Embed(title=title)
                embed.url = link
                embed.color = 3447003
                embed.description = self.description_parser(description)
                embed.set_image(url=f"https://img.anili.st/media/{anime_manga['id']}")

                external_links = ""
                for i in range(0, len(anime_manga["externalLinks"])):
                    ext_link = anime_manga["externalLinks"][i]
                    external_links += f"[{ext_link['site']}]({ext_link['url']}), "
                    if i + 1 == len(anime_manga["externalLinks"]):
                        external_links = external_links[:-2]

                info_format = str(anime_manga.get("format", cmd)).replace("_", " ")
                info_status = "Status: "+str(anime_manga.get("status", None)).lower().replace("_", " ").capitalize()
                info_epschaps = None
                if cmd == "ANIME" and anime_manga.get("episodes", None) not in [None, "None"]:
                    info_epschaps = "Episodes: "+str(anime_manga.get("episodes", None))
                if cmd == "MANGA" and anime_manga.get("chapters", None) not in [None, "None"]:
                    info_epschaps = "Chapters: "+str(anime_manga.get("chapters", None))
                info_links = f"[Anilist]({link})"
                if anime_manga.get("idMal", None):
                    info_links += f", [MAL](https://myanimelist.net/{cmd.lower()}/{anime_manga.get('idMal', None)})"
                info = "\n".join(filter(None, [info_epschaps, info_links]))

                country_of_origin = ""
                if anime_manga.get("countryOfOrigin", None) is not None:
                    country_of_origin += ":flag_"+str(anime_manga.get("countryOfOrigin", None)).lower()+": "

                if info is not None:
                    embed.add_field(name=str(info_status), value=str(info), inline=True)
                if external_links:
                    embed.add_field(name="Links", value=external_links)
                if anime_manga["bannerImage"]:
                    embed.set_image(url=anime_manga["bannerImage"])
                am_name_native = []
                am_name_native.append(anime_manga['title'].get('native', None))
                am_name_native.append(anime_manga['title'].get('romaji', None))
                am_names = am_name_native
                if len(am_names) > 0:
                    embed.add_field(name="Names", value=country_of_origin+self.description_parser(', '.join(am_names)), inline=True)
                if len(anime_manga.get("tags", [])) > 0:
                    am_tags = [str(t.get("name", None)) for t in anime_manga.get("tags", []) if t.get("isMediaSpoiler", None) is not True]
                    am_tags_spoilers = ["||"+str(t.get("name", None))+"||" for t in anime_manga.get("tags", []) if t.get("isMediaSpoiler", None) is True]
                    embed.add_field(name="Tags", value=", ".join(am_tags+am_tags_spoilers), inline=True)

                if cmd == "ANIME":
                    embed.set_footer(text=" ・ ".join(filter(None, [info_format, time_left, "Powered by Anilist", str(idx+1)+"/"+str(idx_total)])))
                else:
                    embed.set_footer(text=" ・ ".join(filter(None, [info_format, "Powered by Anilist", str(idx+1)+"/"+str(idx_total)])))
                embeds.append({"embed": embed})

            return embeds, data

        else:
            return None

    async def _search_character(self, ctx, entered_title):

        variables = {"search": entered_title, "page": 1}

        data = (await self._request(SEARCH_CHARACTER_QUERY, variables))["data"]["Page"]["characters"]

        if data is not None and len(data) > 0:

            # a list of embeds
            embeds = []

            for character in data:
                # Sets up various variables for Embed
                link = f"https://anilist.co/character/{character['id']}"
                character_anime = [f'[{anime["title"]["userPreferred"]}]({"https://anilist.co/anime/" + str(anime["id"])})' for anime in character["media"]["nodes"] if anime["type"] == "ANIME"]
                character_manga = [f'[{manga["title"]["userPreferred"]}]({"https://anilist.co/manga/" + str(manga["id"])})' for manga in character["media"]["nodes"] if manga["type"] == "MANGA"]
                embed = discord.Embed(title=self.format_name(character["name"]["first"], character["name"]["last"]))
                embed.url = link
                embed.color = 3447003
                embed.description = self.description_parser(character["description"])
                embed.set_thumbnail(url=character["image"]["large"])
                if len(character_anime) > 0:
                    embed.add_field(name="Anime", value="\n".join(self.list_maximum(character_anime)))
                if len(character_manga) > 0:
                    embed.add_field(name="Manga", value="\n".join(self.list_maximum(character_manga)))
                embed.set_footer(text="Powered by Anilist")
                embeds.append(embed)

            return embeds, data

        else:
            return None

    async def _search_user(self, ctx, entered_title):

        variables = {"search": entered_title, "page": 1}

        data = (await self._request(SEARCH_USER_QUERY, variables))["data"]["Page"]["users"]

        if data is not None and len(data) > 0:

            # a list of embeds
            embeds = []

            for user in data:
                # Sets up various variables for Embed
                link = f"https://anilist.co/user/{user['id']}"
                title = f"[{user['name']}]({link})"
                title = user["name"]

                embed = discord.Embed(title=title)
                embed.url = link
                embed.color = 3447003
                embed.description = self.description_parser(user["about"])
                embed.set_thumbnail(url=user["avatar"]["large"])
                embed.add_field(name="Watched time", value=datetime.timedelta(minutes=int(user["stats"]["watchedTime"])))
                embed.add_field(name="Chapters read", value=user["stats"].get("chaptersRead", "N/A"))
                for category in "anime", "manga", "characters":
                    fav = []
                    for node in user["favourites"][category]["nodes"]:
                        url_path = category
                        if category == "characters":
                            name = node["name"]
                            title = self.format_name(name["first"], name["last"])
                            url_path = "character"  # without the s
                        else:
                            title = node["title"]["userPreferred"]

                        fav.append(f'[{title}](https://anilist.co/{url_path}/{node["id"]})')

                    if fav:
                        embed.add_field(name=f"Favorite {category}", value="\n".join(self.list_maximum(fav)))
                embed.set_footer(text="Powered by Anilist")
                embeds.append(embed)

            return embeds, data

        else:
            return None

    @commands.hybrid_command()
    @app_commands.describe(title="Search for anime")
    @commands.bot_has_permissions(embed_links=True, add_reactions=True)
    async def anime(self, ctx, *, title):
        """Searches for anime using Anilist"""
        entered_title = title

        try:
            cmd = "ANIME"
            embeds, data = await self._search_anime_manga(ctx, cmd, entered_title)

            if embeds is not None:
                await SimpleMenu(pages=embeds, timeout=90).start(ctx)
            else:
                await ctx.send("No anime was found or there was an error in the process")

        except TypeError:
            await ctx.send("No anime was found or there was an error in the process")

    @commands.hybrid_command(aliases=["manhwa", "manhua", "lightnovel"])
    @app_commands.describe(title="Search for manga/manhwa/manhua and light novels")
    @commands.bot_has_permissions(embed_links=True, add_reactions=True)
    async def manga(self, ctx, *, title):
        """Searches for manga, manhwa, manhua, and light novels using Anilist"""
        entered_title = title

        try:
            cmd = "MANGA"
            embeds, data = await self._search_anime_manga(ctx, cmd, entered_title)

            if embeds is not None:
                await SimpleMenu(pages=embeds, timeout=90).start(ctx)
            else:
                await ctx.send("No mangas, manhwas, or manhuas were found or there was an error in the process")

        except TypeError:
            await ctx.send("No mangas, manhwas, or manhuas were found or there was an error in the process")

    @commands.hybrid_command(name="animecharacter", aliases=["animechar"])
    @app_commands.describe(name="Search for an anime/manga character")
    async def character(self, ctx, *, name):
        """Searches for characters using Anilist"""
        entered_title = name

        try:
            embeds, data = await self._search_character(ctx, entered_title)

            if embeds is not None:
                await SimpleMenu(pages=embeds, timeout=90).start(ctx)
            else:
                await ctx.send("No characters were found or there was an error in the process")

        except TypeError:
            await ctx.send("No characters were found or there was an error in the process")

    @commands.hybrid_group(name="anilist")
    async def anilist(self, ctx: commands.Context):
        """Search Anilist"""
        if not ctx.invoked_subcommand:
            pass

    @anilist.command(name="user")
    @app_commands.describe(username="Search Anilist for a user")
    async def user(self, ctx, *, username: str):
        """Searches users using Anilist"""
        entered_title = username

        try:
            embeds, data = await self._search_user(ctx, entered_title)

            if embeds is not None:
                await SimpleMenu(pages=embeds, timeout=90).start(ctx)
            else:
                await ctx.send("No users were found or there was an error in the process")

        except TypeError:
            await ctx.send("No users were found or there was an error in the process")
