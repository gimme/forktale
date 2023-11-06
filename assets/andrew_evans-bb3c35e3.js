const e=`title: ANDREW EVANS
trigger: If the player controls Andrew Evans and he is not exiled
context: Place Andrew at the Grocery Store (this does not count as a
  move).  "Scavengers have ransacked all the obvious food choices.  There's not
  a single can of food to be seen, but the good stuff is still sitting in plain
  sight.  Those fools don't realize how valuable things like clear plastic
  sheeting and PVC piping can be."
options:
  - action: You build a greenhouse.
    result:
      "Andrew Evans gains the ability: COLONY;(1+) Once per round you may add
      2 food tokens to the supply."
  - action: You help improve the colony's insulation.
    result: Gain 1 morale.
`;export{e as default};
