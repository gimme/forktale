const o=`title: MIKE CHO
trigger: If the player controls a survivor at a non-colony location, there is at
  least 1 zombie at that location, and Mike Cho is still in the survivor deck
context: The zombie crashing through the window cuts off your final escape
  route.  There's no way out.  The inevitability of your death begins to sink
  in, and you find you're surprised at how at peace you feel.  The gnashing dead
  press in on you, and you close your eyes and whisper a final prayer. You hear
  a high pitched battle cry and open your eyes again to see a man dressed
  entirely in black, slicing through a zombie with a sword.
options:
  - action: You join him, helping him fight off the zombies.
    result: Grateful for your help he agrees to join your group.  Search the
      survivor deck for Mike Cho and add him to your following.  Add 1 wound to
      Mike Cho and to a survivor you control that is at a non-colony
      location.  Remove all zombies from that location.
  - action: As he expertly dispatches the zombies you see your chance to get away.
    result: Remove all zombies from a non-colony location where you have a survivor.
`;export{o as default};
