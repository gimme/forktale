const e=`title: FERAL DOG PACK
trigger: If the player moves a survivor to a new location and does not use fuel
context: You see the pack of dogs roaming behind the buildings to your right,
  their fur ragged, their flanks lean. You notice them stealing glances at you
  and realize you're being hunted. Your blood runs cold. You take a side street
  when the opportunity presents itself, but the pack follows. Seconds later you
  hear the excited yapping as they close in behind you.
options:
  - action: Try to intimidate them.
    result:
      The dogs attack. Roll 3 dice. Place 1 wound on the survivor that moved
      for each die that is equal to or lower than that survivor's attack value.
      If that survivor is not killed, add 3 food to the supply.
  - action: Run!
    result: Move the survivor to a different location, rolling for exposure
      normally. They cannot move to the location they have been to this turn.
`;export{e as default};
