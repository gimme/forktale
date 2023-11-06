const o=`title: MUGGING
trigger: If a non-exiled survivor that the player controls shares a location
  with an exiled survivor
context: Rough hands grab you from behind, and your head is slammed into a
  wall.  You try to stagger to your feet, but you end up sprawled on the ground
  at someone's boots.  Your attacker kneels down and a low voice whispers, "I
  just want your gear.  I can kill you for it, or you can spare yourself a lot
  of trouble and hand it over.  Please believe that I'm perfectly happy to do it
  either way."
options:
  - action: Give in to the mugger's demands.
    result:
      Give all but 1 card in your hand to the player who controls the exiled
      survivor.
  - action: Attempt to fight back.
    result:
      Add 2 wounds to a survivor you control that shares a location with an
      exiled survivor.  Or, if you have a weapon, you may instead kill the
      exiled survivor and add only 1 wound to your survivor.
noCoop: true
`;export{o as default};
