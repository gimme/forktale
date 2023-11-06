const t=`title: VOYEUR
trigger: If a survivor the player controls shares a location with a survivor
  another player controls and those are the only 2 survivors at that location
context: You watch them from your hiding space, taking note of all the choice
  gear they have spread out on the ground.  Interesting.  Sometimes possessions
  can say so much about the person who owns them.   Perhaps you could use this
  to your benefit?  Look at the hand of the player who controls the other
  survivor at that location.
options:
  - action:
      You see something you covet.  You blackmail the survivor, threatening to
      expose their secrets to the group.
    result:
      Take a card of your choice from that player's hand.  Neither player can
      talk about the card that was just taken.  It cannot be played until next
      round.
  - action: You reveal your findings to the colony.
    result: Show that player's hand to all of the other players.
noCoop: true
`;export{t as default};
