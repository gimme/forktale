const e=`title: SACRAMENT
trigger: If the player moves a non-exiled survivor
context: You walk past the cathedral, and you realize that no one's been inside
  since the colony formed.  It's certainly not the most tempting of targets but
  you can think of something that might be of use.
options:
  - action: You mount the steps, and the heavy front door groans as you pull it open.
    result:
      You spend fifteen minutes searching before you find a small room holding
      the prize you wanted  half a dozen bottles of Communion wine.  But as you
      move through the dark hallways towards the exit, a foul smelling shape
      slams into you.  The priest's corpse gnashes its teeth, nearly taking off
      your nose.  "Looks like you were judged and found wanting."  You slam the
      thing's head into the tiled floor repeatedly until only gory wreckage
      remains.   You dust yourself off and wonder, did I just say a cheesy
      one-liner in a fight?  That's badass!  Roll exposure on the moved survivor
      twice.  If the survivor isn't killed by the exposure, gain 1 morale.
  - action: Not worth the risk you think, and keep moving.
    result: Nothing happens.
mature: true
`;export{e as default};
