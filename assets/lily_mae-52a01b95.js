const e=`title: LILY MAE
trigger: If Lily is in play and at the colony
context: >-
  "Lily, where did you get all of this dynamite?!" 

  "I traded for it." %% "Who the heck had dynamite to trade?" %% "Some old dude." The following choice belongs to the player that controls Lily.
options:
  - action:
      '"I''m going to rig up our barricades with explosives. It''s gonna get
      real interesting."'
    result: Replace all of the barricade tokens currently in play with explosive
      trap tokens. For the remainder of the game when an explosive trap is
      triggered, roll a die. On a result of 1, every survivor that shares a
      location with that explosive trap receives a wound.
  - action:
      '"I call this baby the Z-Bomb. It''ll kill everything that moves, except
      us. I hope."'
    result: The player that controls Lily may, as a one-time effect, immediately
      before or immediately after the add zombies portion of the colony phase,
      destroy all zombies at the colony. If this is done, roll a die. On a
      result of 4 or lower, kill Lily.
`;export{e as default};
