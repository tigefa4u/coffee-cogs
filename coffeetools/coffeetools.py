from redbot.core import Config, commands, checks
import random

class Coffeetools(commands.Cog):
    """Replacement for 'General' cog, since it needs to be disabled to override certain commands."""

    def __init__(self):
        self.config = Config.get_conf(self, identifier=806715409318936616)

    async def red_get_data_for_user(self, *, user_id: int):
        # this cog does not story any data
        return {}

    async def red_delete_data_for_user(self, *, requester, user_id: int) -> None:
        # this cog does not story any data
        pass

    @commands.command()
    async def choose(self, ctx, *, choosetext):
        """Have the bot choose for you
        
        **`[p]choose item1 | item2 | item3`**"""

        # Split choosetext into an array
        choosearray = choosetext.split("|")

        # Return a random choice from array
        return await ctx.send(random.choice(choosearray))