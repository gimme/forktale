const e=`title: ANNALEIGH CHAN
trigger: If the player controls Annaleigh Chan and she is not exiled
context: '"Terrence Washington.  He was the only case I ever lost.  The
  prosecution had crap for evidence, and I was sure I had the case on lock.  But
  it was a rural area and all the jury could see was the color of that boy''s
  skin.  It made no sense to me.  A seventeen year old boy was in the wrong
  place at the wrong time, and that simple, shitty bit of bad luck got him
  fifteen years of hard time.  So no, I don''t agree with your earlier
  statement.  The world hasn''t gone to hell because of the zombies  it went to
  hell a long time ago.  Our species doesn''t deserve better than this."'
options:
  - action:
      '"You''re free Terrence.  I''m just sorry I couldn''t give this to you
      when you were alive."  Annaleigh opens the gates to the prison.'
    result: Add 1 zombie to each non-colony location.
  - action: '"Even if we escape all of this, even if our species is able to
      rebuild, all we''ll do is keep hurting each other.  I''m done."  Annaleigh
      shoots herself.'
    result: Kill Annaleigh.
mature: true
noCoop: true
`;export{e as default};
