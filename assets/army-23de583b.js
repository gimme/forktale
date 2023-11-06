const e=`title: ARMY
trigger: If a survivor the player controls is at the colony
context: The soldiers in army uniforms make predictable demands  have food ready
  when they return, or the colony will be burnt to the ground.  Every player
  with 1 or more survivors at the colony must vote with a thumbs up or
  down.  The option with the most votes takes effect.
options:
  - action: Give in to their demands.
    result:
      "Add the following victory condition to the current main objective, in
      addition to any victory conditions already listed:  Have 5 food in the
      supply."
  - action: Ambush the soldiers.
    result:
      Your ambush is surprisingly effective, and their losses are worse than
      yours. The cowards flee in a disorganized fashion.   Roll a die for each
      survivor at the colony.  On each result of 3 or lower that survivor
      receives 1 wound.
  - action: If Thomas Heart is in the colony choose this option.
    result:
      If Thomas Heart is at the colony he notices that the man calling himself
      colonel has a sergeant's uniform.  He calls them on their lie at the gate,
      and the imposters angrily retreat.  Nothing happens.
vote: true
`;export{e as default};
