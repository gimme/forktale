const e=`title: WANTS OF THE FLESH
trigger: If the player has the only survivor at the colony, and there is only 1
  helpless survivor
context: You've never liked Mickey. He's a creep, and you wish you hadn't been
  left alone with him. But when you spot him sneaking off to the basement, you
  decide to follow. You hear the growling in the darkness. What's going on down
  here? You find them behind the boiler, and clap a hand over your mouth. The
  dead woman has been tied to an old bed frame. She gnashes her teeth and
  struggles against her restraints as Mickey unzips his pants and crawls on top
  of her.
options:
  - action: You sneak up behind Mickey and give the monster what he deserves,
      pushing his face down into the jaws of the dead woman.
    result:
      Remove the helpless survivor and place a despair token on the survivor
      at the colony.
  - action: You wait for the others, then tell them what you've seen.
    result: Mickey curses you as you expel him naked from the colony. Remove the
      helpless survivor and place a bandit and a zombie together at a random
      location.
mature: true
`;export{e as default};
