const e=`title: CHLOE LAROUSSE
trigger: If Chloe is at the colony and there are 2 or more bandits in play
context: Chloe is shaken awake. "What happened?" the others ask. "Those bastards
  came back and robbed us!" Chloe screams, holding her aching head. "We need to
  get our stuff back." The others disagree. "We can't exactly storm their
  gates," someone says. Chloe's face twists in disgust. Every player must remove
  a card from their hand, if able, and place it in the bandit hideout. The
  following choice belongs to the player that controls Chloe.
options:
  - action: Chloe breaks into the bandit hideout on her own.
    result:
      Roll for exposure 5 times on Chloe. If she is still alive, the player
      that controls Chloe receives all of the cards that were just placed in the
      bandit hideout.
  - action: Chloe harangues the group into action.
    result:
      Every player must roll for exposure once on one of their survivors. If
      their survivor isn't killed by the roll, each player selects 1 card from
      the Bandits' Hideout and places it into their hand. The player that
      controls Chloe cannot use the request action for the remainder of the
      game.
`;export{e as default};
