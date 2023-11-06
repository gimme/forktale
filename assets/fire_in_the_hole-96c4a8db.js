const e=`title: FIRE IN THE HOLE
trigger: If the replace improvement is in play and the player controls a
  survivor at the colony
context: '"Using fuel to keep warm just isn''t sustainable. Why not burn the
  trash? Sure it might smell, might even smoke like crazy, but this is life and
  death, and our fuel is running low." Every non-exiled player must vote with a
  thumbs up or down. The option with the most votes takes effect.'
options:
  - action: Burn trash for warmth.
    result:
      Shuffle the waste pile. Draw a mutually agreed upon number of cards from
      the waste pile (including 0). Reveal the cards drawn. If any cards are
      fuel, place a wound marker on each survivor at the colony and destroy the
      fireplace. If none of the cards are fuel cards roll a die for each card.
      For each 5 or 6 rolled choose a player and add that die to the chosen
      player's unused action dice pool. You may not add more than 1 die to a
      single player's unused dice pool in this way.
  - action: Do not burn trash.
    result: Nothing happens.
vote: true
`;export{e as default};
