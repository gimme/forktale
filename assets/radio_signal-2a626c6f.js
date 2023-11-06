const o=`title: RADIO SIGNAL
trigger: If a survivor the player controls is at the colony
context: '"Check it out - I found this old mobile CB radio.  It''s beat up bad,
  but it seems to be receiving a signal.  I think it''s coming from close by. I
  can''t pick up most of what they''re saying, but I''d guess someone needs our
  help."  Every player with 1 or more survivors at the colony must vote with a
  thumbs up or down.  The option with the most votes takes effect.'
options:
  - action: Send a team to search for the source of the signal.
    result:
      Players may collectively move 3 action dice from their unused action die
      pool to their used action die pool.  If they do, add a helpless survivor
      token to the colony and gain 1 morale. If they do not, do not add a
      survivor token to the colony and lose 1 morale.
  - action: Do nothing.
    result: Lose 1 morale.
vote: true
`;export{o as default};
