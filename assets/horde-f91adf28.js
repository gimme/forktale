const o=`title: HORDE
trigger: If the player moves a survivor and doesn't play a fuel card
context: The snow falls heavily as the world turns white, and visibility drops
  to only a few yards around you.  Of course a blizzard would come now.  You're
  not alone though.  Another shape moves through the storm, gesticulating wildly
  as it struggles through the snow.  And then another.  And still another.  Your
  stomach lurches as you realize you've walked into the middle of a roving horde
  of the dead.  Weighing your options, you suspect the reduced visibility may
  help you pass with minimum detection.  But you also have to admit the odds are
  not in your favor.
options:
  - action: You push on, doing your best to avoid them.
    result: Roll for exposure on that survivor 3 additional times.
  - action: Your goal is important, but so is not becoming one of them.
    result:
      Place the survivor back at the location it was moving from (this does
      not count as a move). That survivor cannot be moved during this turn.
`;export{o as default};
