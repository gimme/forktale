const e=`title: ERIC PARKER
trigger: If a non-exiled survivor the player controls receives a frostbite wound
  and lives, and Eric Parker is in play and not exiled
context: You scream in pain as they inspect the foulness of your leg. "There's
  no saving it now", you hear someone say. "No!" you scream. "Settle down,"
  whispers Eric as he places a hand on your shoulder. "Look, all that matters
  now is survival. It's not going to be easy, but I got through this and you
  will too."
options:
  - action: You nod your head in agreement.
    result: You gulp down the whiskey before biting down on the stick they offer
      you. And then the sawing begins. Remove the frostbite wound from that
      survivor and replace it with a despair token. The player cannot use that
      survivor for the remainder of their turn.
  - action: '"I can''t do it! I''ve lost enough."'
    result:
      Roll a die, on a result of 3 or lower, kill the survivor. On a result of
      4 or higher remove the frostbite wound from the survivor.
`;export{e as default};
