const e=`title: KUMAR SEN
trigger: If the player controls Kumar Sen
context: '"I felt it," Kumar insists. "She bumped into me like it was an
  accident, and when she did I felt her scrabbling for my pockets." The woman
  throws up her hands in exasperation. "Oh please!" she protests. "I was just
  trying to be decent and help him back up." Kumar stamps his cane on the
  ground. "I will not be preyed upon!" Every non-exiled player must vote with a
  thumbs up or down. The option with the most votes takes effect.'
options:
  - action: Search the woman.
    result:
      The item Kumar claims is his missing property is found. The player must
      reveal 1 random card from his hand.
  - action: '"It''s he-said she-said, Kumar. Sorry."'
    result: The player must remove a random card from his hand from the game.
vote: true
`;export{e as default};
