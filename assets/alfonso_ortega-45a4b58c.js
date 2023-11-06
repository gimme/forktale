const t=`title: ALFONSO ORTEGA
trigger: If Alfonso Ortega is in play, and at least 1 player has an assault rifle
context: '"Yeah man, this thing''s beautiful," says Alfonso. "But it''s only
  semi. Stupid gun laws and all that. But a little time with me and this puppy
  can go full auto. I mean, you could be tearing through dead bastards like
  crazy. God, just thinking about it got me all hot. Mmmm, yeah it does." The
  following choice belongs to the survivor carrying an assault rifle. (First in
  turn order gets the choice if there is more than 1 player with an assault
  rifle.)'
options:
  - action: Alfonso spends some time with the gun.
    result:
      Place this card by the gun. Whenever it is used to attack, kill 1 more
      zombie than normal and place 1 more noise token than normal. After an
      attack, roll a die. On a roll of 1 the gun stops working and is removed
      from the game.
  - action: '"Thanks Alfonso, but I think the big gun already kills things just
      fine. Plus, it looks like you''re getting aroused, so I''m just going to
      leave now."'
    result: Nothing happens.
mature: true
`;export{t as default};
