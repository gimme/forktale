const t=`title: ON THE HUNT
trigger: If the player moves a non-exiled survivor
context: You don't know what you expected to find here at your cousin's house,
  but curiosity won out. He and his family are nowhere to be found, but the trip
  isn't in vain. Later that evening you explain to the others, "I knew my cuz
  was into hunting, but I didn't know just how much. There isn't a lot of ammo
  for these rifles, but look at all this camo gear! I say we form a hunting
  party."
options:
  - action: '"How good would some venison taste right now?"'
    result: Roll 4 dice, for every 3 or higher rolled add 1 food to the supply.
  - action:
      '"We need to do something about this group that keeps raiding our best
      supply spots. I bet with this camo gear we could ambush them when we cross
      paths."'
    result:
      For the remainder of the game, immediately after a bandit has been put
      into play, roll a die. On a result of 4+, remove that bandit from play.
`;export{t as default};
