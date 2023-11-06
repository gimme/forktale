const e=`title: CRAZED SOCCER MOM
trigger: If a non-exiled survivor the player controls is at the school
context: '"These kids are just sick!" screams a woman from the school window.
  You see her level a gun at you and you duck behind a pillar. "Baby killers!"
  she shrieks.'
options:
  - action: When she pauses to reload, you dash into the school.
    result:
      Roll 4 dice for the crazed woman. Collect 2 dice for each survivor that
      is at the school and 2 dice for each <Weapon> card equipped to a survivor
      at the school. Roll the collected dice. If the total of your roll is equal
      to or higher than the crazed woman's roll, she has been defeated. Nothing
      else happens. If your roll is lower than the crazed woman's roll, place a
      wound on each survivor at the school and Option 2 takes effect.
  - action: You tell the colony the school is no longer safe.
    result: Place all survivors at the school back at the colony. (These do not
      count as moves.) For the remainder of the game whenever a survivor is
      moved to the school, that survivor takes one wound.
`;export{e as default};
