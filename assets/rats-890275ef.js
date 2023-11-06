const e=`title: RATS
trigger: If there are 5 or more cards in the waste pile, 5 or more food in the
  supply, and at least 1 non-helpless survivor at the colony
context: '"We have, like, a billion rats! I opened the door to the pantry and
  they didn''t even scatter! They just looked at me like I opened the bathroom
  door on them." Every non-exiled player must vote with a thumbs up or down.
  The option with the most votes takes effect.'
options:
  - action: '"Grab your beating sticks! We''re taking back the pantry right now!"'
    result:
      Collect a number of dice equal to the number of cards in the waste pile.
      Divide those dice among each player with 1 or more survivors at the
      colony. Each player rolls the dice they were given. Each player must place
      1 wound on a survivor at the colony they control for each 3 or lower they
      roll.
  - action: '"We''ll get some rat poison next time we''re at the grocery store."'
    result:
      Roll a number of dice equal to the number of cards in the waste pile.
      For every 3 or lower rolled, remove 1 food from the supply.
vote: true
`;export{e as default};
