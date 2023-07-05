import discord
import urllib.parse

import aiohttp
import asyncio
from korean_romanizer.romanizer import Romanizer
import lxml

import kodict.krdict as krdict

parts_of_speech_blocks = {
  "명사": "Noun",
  "대명사": "Pronoun",
  "수사": "Number",
  "조사": "Particle",
  "동사": "Verb",
  "형용사": "Adjective",
  "관형사": "Modifier",
  "부사": "Adverb",
  "감탄사": "Interjection",
  "접사": "Prefix/Suffix",
  "의존 명사": "Dependent Noun",
  "보조 동사": "Auxiliary Verb",
  "보조 형용사": "Auxiliary Adjective",
  "어미": "Suffix",
}

word_grade_blocks = {
  "초급": "Beginner",
  "중급": "Intermediate",
  "고급": "Advanced",
}


# Standard

async def embedFallback(raw_text, footer=None, embed_colour: discord.Colour=None):
    text = urllib.parse.quote(raw_text, safe='')
    e = discord.Embed(title=raw_text, colour=embed_colour)
    e.add_field(name="Krdict (한국어기초사전)", value=f"https://krdict.korean.go.kr/eng/dicSearch/search?nation=eng&nationCode=6&mainSearchWord={text}")
    e.add_field(name="Wiktionary", value=f"https://en.wiktionary.org/w/index.php?fulltext=0&search={text}")
    e.add_field(name="DeepL Translate", value=f"https://deepl.com/translator#ko/en/{text}")
    e.add_field(name="Google Translate", value=f"https://translate.google.com/?text={text}")
    if footer:
        e.set_footer(text=footer)
    return e


# Krdict

async def fetchKrdict(text, krdictKey=None):
    krResults = None
    # Fetch using Krdict API
    # Very rudimentary check to pass English onto Krdict Scraper (not supported by API)
    if krdictKey is not None and text.isascii() is False:
        krResults = await krdictFetchApi(krdictKey, text)
    # Fetch using Krdict Scraper
    if krResults in [None, False]:
        krResults = await krdictFetchScraper(text)
    return krResults

async def embedKrdict(krdict_results, attribution: list[str]=["Krdict (한국어기초사전)"], embed_color: discord.Colour=None):
    sendEmbeds = []
    attribution = "Results from "+", ".join(attribution)
    try:
        total = str(min(int(krdict_results.total_results), 10))
    except:
        total = "..."
    for resIdx, krResult in enumerate(krdict_results.results):
        e = await krdictEmbedSenses(krResult, str(resIdx), str(total), attribution, embed_color)
        sendEmbeds.append({"content": "", "embed": e})
    return sendEmbeds

async def krdictFetchApi(api_key: str, text: str):
    krdict.set_key(api_key)
    response = await krdict.search(query=text, translation_language="english", raise_api_errors=True)
    return krdictFetchChecker(response)

def krdictFetchChecker(response):
    try:
        response = response.data
        if response.total_results > 0:
            return response
        return False
    except:
        return None

async def krdictFetchScraper(text: str):
    response = await krdict.scraper.search(query=text, translation_language="english")
    return krdictFetchChecker(response)

async def krdictEmbedSenses(krResult, idx: str, total: str, attribution: str, embed_colour: discord.Colour=None):
    word = str(krResult.word)
    link = str(krResult.url)
    # Pronunciation
    try:
        pronunciation_kr = str(krResult.pronunciation)
    except AttributeError:
        pronunciation_kr = None
    try:
        romanization = str(Romanizer(str(word)).romanize())
    except:
        romanization = None
    pronunciation = " ".join(filter(None, [pronunciation_kr, romanization]))
    # Origin
    try:
        origin = str(krResult.origin)
    except AttributeError:
        origin = None
    # Parts of speech
    parts_of_speech = None
    try:
        if krResult.part_of_speech and (krResult.part_of_speech not in ["품사 없음", "None", None]):
            parts_of_speech_raw = str(krResult.part_of_speech)
            eng_pos = str(parts_of_speech_blocks.get(parts_of_speech_raw, None))
            parts_of_speech = "` "+" ".join(filter(None, [parts_of_speech_raw, eng_pos]))+" `"
    except AttributeError:
        pass
    # Word grade
    word_grade = None
    try:
        if krResult.vocabulary_level and (krResult.vocabulary_level not in ["None", None]):
            word_grade_raw = str(krResult.vocabulary_level)
            level_gauge = str(word_grade_blocks.get(word_grade_raw, None))
            word_grade = "` "+" ".join(filter(None, [word_grade_raw, level_gauge]))+" `"
    except AttributeError:
        pass

    desc_body = " ・ ".join(filter(None, [pronunciation, origin, parts_of_speech, word_grade]))
    e = discord.Embed(title=word, url=link, description=desc_body, colour=embed_colour)
    for idx, krrSense in enumerate(krResult.definitions):
        await krdictEmbedDefinitions(krrSense, e, idx)
    e.set_footer(text=" ・ ".join(filter(None, [str(attribution), str(idx+1)+"/"+str(total)])))
    return e

async def krdictEmbedDefinitions(krrSense, embed: discord.Embed, idx: int):
    try:
        senseIdx = str(krrSense.order)
    except AttributeError:
        senseIdx = idx+1 
    try:
        ko_def = str(krrSense.definition)
    except AttributeError:
        ko_def = None
    try:
        en_trans = krrSense.translations[0]
        en_word = str(en_trans.word)
        en_def = str(en_trans.definition)
    except (AttributeError, IndexError) as err:
        en_trans = None
        en_word = ""
        en_def = f"[See translation on DeepL](https://www.deepl.com/translator#ko/en/{urllib.parse.quote(str(ko_def), safe='')})"
    return embed.add_field(
      name=str(senseIdx)+". "+str(en_word), 
      value="\n".join(filter(None, [en_def, ko_def]))
    )


# DeepL

async def fetchDeepl(text, deeplKey=None):
    deeplResult = None
    # Only fetch if deeplKey
    if deeplKey is not None:
        deeplJson = await deeplFetchApi(text, deeplKey)
        # Check if it actually translated
        deeplResult = deeplFetchChecker(text, deeplJson)
    return deeplResult

async def deeplFetchApi(text: str, api_key: str, source_lang: str="EN", target_lang: str="KO"):
    deeplUrl = "https://api-free.deepl.com/v2/translate"
    payload = f"text={urllib.parse.quote(text, safe='')}&source_lang={source_lang}&target_lang={target_lang}"
    headers = {
        "Authorization": "DeepL-Auth-Key "+str(api_key),
        "Content-Type": "application/x-www-form-urlencoded"
    }
    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(deeplUrl, headers=headers, data=payload) as resp:
                deeplJson = await resp.json()
                return deeplJson
    except Exception:
        return None

def deeplFetchChecker(text: str, deeplJson):
    try:
        deepl_translated_text = deeplJson["translations"][0].get("text")
        if text == deepl_translated_text:
            # Deepl failed to translate properly
            return False
        return str(deepl_translated_text)
    except Exception:
        return False