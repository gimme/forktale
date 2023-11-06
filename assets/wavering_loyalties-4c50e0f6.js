const o=`title: WAVERING LOYALTIES
trigger: If the player has more survivors in their following than 1 or more
  other players
context: '"I care about you  I do.  That won''t ever change.   But I can''t do
  this anymore.  I''m sorry.  I won''t tell them what you''re up to, but I just
  can''t be part of it any longer.  Not now."'
options:
  - action: '"I understand better than you think.  Perhaps I knew this day was
      coming.  But your happiness is more important to me than anything, so I
      won''t stand in your way."'
    result:
      Remove a survivor card from your following and add it to the following
      of a player that has fewer survivors than you do.
  - action:
      '"I see.  It doesn''t matter how soiled your hands are, but as soon as
      mine look tarnished, you''re ready to walk away?   I know what keeps you up
      at night.  I know the stains you''ll never be able to wash away.  And as
      soon as you walk away, everyone else will know too."'
    result: Roll a die.  On a result of 3 or lower, lose 1 morale.
`;export{o as default};
