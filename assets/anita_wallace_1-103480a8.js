const e=`title: ANITA WALLACE 1
trigger: If the player performs a clean waste action and Anita is in play and not exiled
context: Anita chuckles when she sees you shoveling filth into the wheelbarrow.
  "You know," she says, "I used to be an engineer back when the world was still
  turning. I think there's a lot of junk here that we could still use. Why don't
  you let me take over?"
options:
  - action: '"Why didn''t you tell us before?" you ask. "We sure could have used
      an engineer before now! I''m not sure I believe you.  I''m going to go ahead
      and finish this work."'
    result: Remove the top 2 cards from the waste pile from the game.
  - action: You let Anita take over.
    result:
      Hours later you discover that Anita never actually did any cleaning. You
      seek her out to give her a piece of your mind, but find her fashioning a
      shiv out of some old scrap. "You need something?" she asks. You look at
      the blade and say, "Nah, I'm good." Cards are not removed from the clean
      waste action but the action die is still spent. Search the police station
      deck for the Shiv card. If it is found equip it to Anita.
`;export{e as default};
