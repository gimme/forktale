const e=`title: MISSING CHILD
trigger: If there is at least 1 helpless survivor at the colony
context: '"Oh my God, Cindy!  She was here a moment ago.  Have you seen her?   I
  think she was climbing on the old tree near the south wall.  Did she go
  over?  Did anyone see?  Please, we have to look for her.  We have to find my
  baby!"'
result: If every non-colony location has been searched between now and the end
  of the next round gain 1 morale, otherwise lose 1 morale and remove a helpless
  survivor from the colony.
`;export{e as default};
