const e=`title: FUEL TANKER
trigger: If the player moves a non-exiled survivor
context: '"Holy crap."  The fuel tanker sits just off the road, and it appears
  in excellent condition.  You exit your car, and checking the perimeter you
  approach the cab, its driver side door hanging open.  You slice the seatbelt
  apart, and bludgeon the head of the zombie that falls out.  The trucker''s
  bloody hat says Beaver Inspector, and you marvel at how stupid and frivolous
  your species used to be.  Climbing into the cab you give the keys a twist, and
  the loud diesel engine roars to life like some ancient monster reborn into the
  world.  You cringe.  Noise like that is going to draw every dead thing for a
  mile.'
options:
  - action: You drive the tanker back to the colony, drawing every zombie in the
      area back with you.
    result:
      Place 6 zombies at the colony and add up to 4 fuel cards that have been
      removed from the game to your hand.
  - action:
      You sigh regretfully and turn the motor back off.  It's just too loud to
      risk driving into the colony.
    result: Nothing happens.
`;export{e as default};
