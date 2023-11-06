const o=`title: HORSE
trigger: If the player moves a non-exiled survivor
context: You slip through the alleyways, moving as quietly as you can, when you
  hear the clip-clop of a horse's hooves on pavement.  Peering out from the
  wreckage of a burned out bakery, you see a half starved horse walking down the
  street.  The poor thing looks like it's been through a lot, but if it keeps
  walking through town it doesn't stand a chance of surviving.
options:
  - action: You take the horse under your care.
    result:
      Attach this card to the moved survivor.  For the remainder of the game
      the survivor no longer has to roll for exposure when moving.  As long as
      the survivor is not exiled, during the pay food portion of the colony
      phase, the colony must pay 1 additional food.
  - action: '"Sorry, old girl." You slaughter the horse for its meat.'
    result: Add 3 food to the supply.
`;export{o as default};
