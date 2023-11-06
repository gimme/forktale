const o=`title: TOYS
trigger: If the player controls a non-exiled survivor at the grocery store and
  there are 3 or more helpless survivors at the colony
context: You quietly creep around the end-cap and peer down Aisle 5. You spot a
  dead child rummaging through a large box. You instinctively take a step back,
  but as you do your foot kicks into something. "'Moo!" screams the toy, its red
  arrow spinning around. The dead child jerks up from its box and rushes you.
  You dispatch it quickly but wonder what it was looking at, and discover the
  box is filled with toys. "I don't know why it was interested," you mutter,
  "but I know some kids that would love these."
options:
  - action: Drag the box back to the colony as gifts for the children.
    result:
      Roll exposure on a survivor you control at the grocery store 3 times. If
      that survivor is still alive, place it at the colony (this does not count
      as a move) and gain 1 morale.
  - action: '"Nah, I didn''t come here for toys."'
    result: Nothing happens.
`;export{o as default};
