const o=`title: THIN ICE
trigger: If the player moves a survivor
context: The lake has frozen over, creating a tempting shortcut.  You wouldn't
  have dared risk it in the life you had before, but the rules have all changed,
  and so has the cost of survival.  The prospect of having more time to search
  has you seriously considering it.  You place one foot on the ice and hear it
  creak.  Is that normal?  Probably.  Another foot produces a similar
  noise.  Are you really going to do this?
options:
  - action: You risk it and venture out onto the ice.
    result:
      Roll a die.  On a result of 1-3, the moved survivor receives 1 frostbite
      wound.  On a result of 4-6, search through a item deck of your choice for
      a card of your choice and add it to your hand.
  - action: You turn away.  It isn't worth it.
    result: Nothing happens.
`;export{o as default};
