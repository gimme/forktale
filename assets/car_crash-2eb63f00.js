const e=`title: CAR CRASH
trigger: If player uses a fuel when moving a non-exiled survivor
context: Your headlights cut through the darkness, random snowflakes scuttling
  by on a bitter wind.  The car is nowhere near as warm as you want, but every
  drop of fuel is precious.  When your windshield begins to fog, you reach down
  and fumble at the dash for the heat. Suddenly a child walks into your oncoming
  lights.  Instinct takes over before your brain registers that the child is
  dead, and you jerk hard on the wheel.  Wheels screech as your car tumbles off
  the side of the road.  Time slows as the world swirls sickeningly around you.
options:
  - action: Wait in the wrecked car for the colony to rescue you.
    result:
      Add a frostbite wound to the moved survivor.  Place the moved survivor
      in the colony (this does not count as a move).
  - action: You make your way to your destination, dazed from the crash.
    result: Place the moved survivor in the location it was headed to. Roll for
      exposure on that survivor 3 times.
`;export{e as default};
