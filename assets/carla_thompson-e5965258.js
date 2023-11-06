const e=`title: CARLA THOMPSON
trigger: If the player controls Carla and she is not exiled
context: Place Carla at the police station (this does not count as a move).
  "This guy was a real creep, right?  He was basically stalking the entire
  town.  He had used just about every form of social media he could, to get hold
  of photos which he taped up in every room of his house.  He's probably an
  undead cannibal now, which probably isn't too far off from who he was when he
  was alive.  The thing is, his house had been closed for the investigation, and
  I bet all those photos are still in there.  If I got my hands on them, I could
  probably give people in the colony photos of lost loved ones, and right
  memories like those are important to hold on to.
options:
  - action: A reanimated detective roams the house. You fight it.
    result:
      Roll for exposure twice on Carla.  If she is not killed by the exposure,
      gain 1 morale.
  - action: The dead detective is too much, and Carla decides not to risk it.
    result: Nothing happens.
`;export{e as default};
