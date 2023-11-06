const o=`title: GABRIEL DIAZ
trigger: If the player controls a non-exiled survivor at a non-colony location
  and Gabriel Diaz is in the survivor deck
context: An explosion rocks the building as you cower in a back room.  Thick
  black smoke billows in, and soon your eyes water and you begin to cough.  You
  set the fire to distract the horde that trapped you, but things quickly got
  out of hand.  The one window you found to escape from proved to be too small,
  and now there is nothing to do but wait for the smoke to asphyxiate you.  The
  last thing you see before passing out, is a shape lurching toward you through
  the flames.  You awake in the arms of a burly stranger. "Good thing me and my
  family were passing by when we did," he says.
options:
  - action: You gratefully tell your rescuer and his family about the colony.
    result: Search the survivor deck for Gabriel Diaz and add him to your
      following.  Add 3 helpless survivor tokens at the colony.
  - action:
      As thankful as you are, you know the colony cannot afford to feed more
      mouths.  You give the Diaz family a reward before parting ways on the
      road.
    result: Remove 1 card in your hand from the game.
`;export{o as default};
