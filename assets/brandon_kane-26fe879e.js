const n=`title: BRANDON KANE
trigger: If Brandon is in play and is not exiled
context: Place Brandon at the grocery store, if able (this does not count as a
  move). You shake your head at the deer's carcass you let slide off the counter
  to the ground.  You'll need to bleach the floor.  Brandon's in charge of
  sanitation, but he's on a grocery run, and you aren't about to leave that
  deer's blood for a couple hours.  It's really dark in his room.  Did he paint
  over the windows?  Turning on your flashlight, you see the shelves with the
  cleaning supplies and the glass jars.  Good God, what is he doing in
  here?  You shine your lights in the glass and recoil at what you see  nail
  clippings, used hygiene products, and hair  oh God.  The hair.  None of it is
  Brandon's.
options:
  - action: You beat up Brandon and force him to clean all of it out.
    result: Place 1 wound on Brandon and place him at the colony (this does not
      count as a move).
  - action: You do nothing.
    result:
      Add the last 10 non-survivor and non-event cards that have been removed
      from the game to the waste pile.
`;export{n as default};
