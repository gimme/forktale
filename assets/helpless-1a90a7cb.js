const e=`title: HELPLESS
trigger: If a survivor the player controls is at the colony
context: '"Don''t pretend I''m the only one who''s thought about this.  We all
  have.  I''ve seen it in your faces.  These people use up all our resources, but
  contribute nothing.  I''m not trying to be cruel  just survive."  "I can''t
  believe you''re even talking about this.  You know it would be murder to leave
  these people to the dead.  Is survival worth sacrificing our own
  humanity?   Are we no better than the monsters we hide from?"   Every player
  with 1 or more survivors at the colony must vote with a thumbs up or
  down.  The option with the most votes takes effect.'
options:
  - action: You kick the helpless survivors out of the colony.
    result:
      Remove all helpless survivor tokens in the colony from the game. Lose 1
      morale for every 2 helpless survivors removed (round up).
  - action: You allow the helpless survivors to stay.
    result: Nothing happens.
vote: true
`;export{e as default};
