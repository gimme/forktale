const e=`title: ALEXIS GREY
trigger: If the player controls Alexis and she is not exiled
context: Place Alexis at the library, if able, (this does not count as a
  move).  She whimpers with excitement and whispers, "Look at all of these
  books." Alexis turns in place and stares the book shelves choked full of
  books, and it's as if she's seeing this old place for the first time.  "No
  one's been here I guess," she says, and shakes her head.  She wonders that no
  one would realize what a treasure trove of information sat in this squat
  public building.  All of the secrets to the everyday skills that most people
  had forgotten in their world of electronic convenience were here, just waiting
  to be unlocked.  Agriculture, remedial electronics, weapon usage and
  maintenance.
options:
  - action: '"I think I''ll stay here with the books just for a little while."'
    result: Alexis cannot move away from the library for the remainder of the game.
  - action: '"But no," she says shaking her head, tears forming in her eyes.  "I
      can''t come back here.  It hurts too much to see the place falling into
      decay."'
    result: Place Alexis in the colony (this does not count as a move).  Alexis
      cannot move to the library for the remainder of the game.
`;export{e as default};
