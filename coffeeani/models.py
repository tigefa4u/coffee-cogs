from redbot.core.commands import Context
from redbot.core.utils.views import SimpleMenu
import discord

import logging
logger = logging.getLogger(__name__)

class ExtendedSimpleMenu(SimpleMenu):
    """A simple Button menu, extended."""

    async def replace(self, ctx: Context, msg: discord.Message, *, ephemeral: bool = False):
        """
        Used to replace the menu displaying the first page requested.

        Parameters
        ----------
            ctx: `commands.Context`
                The context to start the menu in.
            msg: `discord.Message`
                A message object to edit.
        """
        self.author = ctx.author
        self.ctx = ctx
        kwargs = await self.get_page(self.current_page)
        try:
            self.message = await msg.edit(**kwargs)
            return self.message
        # Invalid embed, ie. title too long
        except discord.HTTPException as err:
            logger.error(err, exc_info=True)
            try:
                await ctx.send("Error: "+str(err))
            except Exception:
                pass
        # Search results message was deleted
        except discord.NotFound as err:
            try:
                await ctx.send("Search was cancelled.")
            except Exception:
                pass
