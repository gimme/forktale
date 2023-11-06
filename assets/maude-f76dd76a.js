const e=`title: MAUDE
trigger: If a non-exiled survivor the player controls is at the grocery store
context: A snarling sound catches your attention and you see a zombie caught
  between two cars.  She claws aimlessly toward the sky, her Meat & Stuff
  uniform stained with old blood.  One blow to her head ends her, and you see
  her name tag says 'Maude'.  She appears to have been crushed against her own
  car as she was trying to fill her trunk with supplies.
options:
  - action: You take the food back to the colony right away.
    result:
      Place the moved survivor in the colony (this does not count as a move)
      and add 3 food to the supply.
  - action:
      You take the food and add it to your pack for later.  You want to smile
      at your good fortune, but for some reason you can't stop thinking about
      Maude.
    result:
      Reveal cards from the top of the grocery store item deck until you find
      2 food cards.  Add them to your hand.  Shuffle the rest of the revealed
      cards back into the deck.  You cannot play food cards during this turn.
`;export{e as default};
