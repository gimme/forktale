const t=`title: ANDREA SMITH
trigger: If a survivor the player controls is at the colony
context: A lone young woman greets you at the colony gate.  She holds a
  snowboard in one hand and a pack full of food in the other. "We've got a small
  group up at the ski resort, and one of us is hurt pretty bad.  Can you help?
  I've got food that I can trade for antibiotics."
options:
  - action: Establish trade with the ski resort.
    result:
      For the remainder of the game, players may choose to add 1 food to the
      supply when playing a <Medicine> item card instead of resolving the effect
      of the card.
  - action: '"You trusted the wrong people," you say. "Give us the food and get lost!"'
    result: Add 2 food to the supply.
`;export{t as default};
