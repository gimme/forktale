const e=`title: THE DEPUTY
trigger: If a non-exiled survivor the player controls is at a non-colony location
context: A tap on the glass draws your attention, and you're startled to see
  four uniformed officers standing outside.  One tips his hat to you.  You begin
  to undo the simple barricade you set at the door, but the door is kicked open,
  and the four men wrestle you to the ground.   A gun is placed to your
  head.  "Listen carefully," says the lead man.  "We've seen your people around
  town.  That's fine.  I've got a key here to the gun locker back at the police
  station.  We'll give it to you, but you got to promise your people will keep
  the area clear for us.  Think you can do that?"
options:
  - action: '"You give me the guns, I''ll make sure we put them to good use."'
    result:
      "Reveal the top 8 cards of the Police Station item deck. Add any weapons
      from the revealed cards to your hand. Shuffle the rest of the cards back
      into the deck. Add the following victory condition to the current main
      objective, in addition to any victory conditions already listed:  There
      are no zombies at the Gas Station, Hospital, and Police Station."
  - action: '"Keep your guns."'
    result: Nothing happens.
`;export{e as default};
