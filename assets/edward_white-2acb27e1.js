const e=`title: EDWARD WHITE
trigger: If the player controls Edward White and he is not exiled
context: The threat of a virus that reanimates the dead may seem pressing, but
  you know the gravest threat to the colony comes from the simple cuts and
  scrapes people might suffer.  And so, in the spirit of Alexander Fleming, you
  decide to try your hand at creating penicillin.
options:
  - action: You sacrifice some bread to culture the penicillin.
    result: Remove 1 food token from the colony's supply and add 1 medicine card
      that has been removed from the game to your hand. You can do this any
      number of times this turn.
  - action: It's not worth the risk of tampering with the food supply.
    result: Nothing happens.
`;export{e as default};
