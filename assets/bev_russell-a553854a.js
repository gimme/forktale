const e=`title: BEV RUSSELL
trigger: If the player controls Bev
context: Place Bev at the school, if able (this does not count as a move). Once
  again she finds herself back at the school, the last place she saw her
  precious boy.  The others have mentioned seeing feral children here, and Bev
  is determined to wait.  What was that?  From out of the darkness she sees a
  familiar face, a webbed pattern of inflamed veins sticking up under the skin
  of that once beautiful face.  "No," she whimpers.  "My boy."  "Mommy!" he
  cries, as he rushes out of his hiding place.  But he stops short, coughing up
  black bile onto the cheap laminate of the floors.
options:
  - action: The fear mongers in the colony would murder them.  For God's sake,
      they're just children.  Is it their fault they're infected?
    result: Remove Bev's survivor card from the game.  Bev's standee cannot be
      attacked, killed, or moved away from the school.  For the remainder of the
      game whenever a survivor is moved to the school that survivor receives 1
      wound (as Bev defends the children).
  - action:
      The heat from the inferno radiates against Bev's back as she walks away
      from the school, a tear rolling down her cheek.  "Rest in peace, my
      darling."
    result: Remove all item cards and zombies from the school.
`;export{e as default};
