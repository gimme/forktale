const e=`title: WOUNDED SURVIVOR
trigger: If the player performs a search with a non-exiled survivor
context: '"Oh thank God you''re alive," the stranger says.  "I was afraid you
  were one of the dead ones.  God, I''m in bad shape.  I was with some others I
  met a few weeks ago, but our group was gradually split up or killed.  It''d
  sure be great to team up with somebody again.  You got a group?"  Your gaze
  wanders from the stranger''s eyes to the blood-soaked rags wrapped around their
  right hand.  "Oh this?  This is nothing man.  Just cut it up on some broken
  glass when I was looting a store back there."  The stranger laughs it off as
  nothing, but they seem nervous about something.'
options:
  - action: You tell the stranger about the colony.
    result:
      Draw a card from the survivor deck and add it to your following.  After
      the new survivor is placed in the colony, roll for exposure twice on that
      survivor.
  - action: '"I''m sorry friend, but I prefer to go it alone.  Nothing personal."'
    result: Nothing happens.
`;export{e as default};
