const e=`title: MEXICAN STANDOFF
trigger: A survivor the player controls shares a location with 1 or more bandits
  (if multiple survivors meet this condition, choose 1)
context: You gaze down the barrel of your pistol at the ragged stranger aiming a
  gun at you. She's just a skinny girl, no older than fourteen, wearing a dirty
  parka that is far too big for her. You can see the fear in her eyes.
options:
  - action: You negotiate.
    result: '"Neither of us wants this," you say. You lower your gun slowly and
      she, clearly relieved, does the same. Now you see her shape. She''s
      pregnant. "My friends and I have a safe place," you tell her. Add 2
      helpless survivors to the colony and remove 1 bandit from this location.'
  - action: You shoot first.
    result:
      Your bullet calls her bluff and her body hits the filthy ground. But as
      you search her corpse you discover she was pregnant. Maybe eight months.
      Add a despair token to all survivors at this location. Remove 1 bandit
      from this location.
mature: true
`;export{e as default};
