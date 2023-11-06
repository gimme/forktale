const e=`title: BOOK OF THE DEAD
trigger: If a non-exiled survivor the player controls performs a search at the library
context: Deep in the stacks of the Special Collection, you discover a large,
  leather bound tome blanketed in dust. The title says Book of the Dead.
options:
  - action:
      Convinced you've uncovered the key to saving all mankind, you quickly
      stash the book in your pack.
    result:
      Upon returning to the colony, you call everyone together, and proudly
      reveal your find.  To your surprise, the revelation is met with uproarious
      laughter.  "Dude," someone says.  "That's the biography of a rock
      band."  Your idiocy provides much needed levity.  Gain 1 morale.
  - action:
      '"Wow this weighs a ton!" you say to yourself. "I bet it could do some
      real damage".'
    result:
      You hoist the book to a second story window and drop it onto the head of
      a passing zombie dressed like a bike courier, its crushed head exploding
      like a rotting melon.  Later when you exit the library, you nab the dead
      zombie's delivery bag.  Remove 1 zombie from the library (if able) and add
      4 food tokens to the colony's supply.
`;export{e as default};
