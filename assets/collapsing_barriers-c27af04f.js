const e=`title: COLLAPSING BARRIERS
trigger: If a survivor the player controls is at the colony and there is at
  least 1 barricade and 1 zombie at the colony
context: '"We''ve got a problem.  They''re piling up on the barricades.  I''ve
  seen it  they''re just a wall of meat, teeth and claws.  There''s no way the
  barricades can hold up under that kind of weight.  It''s all makeshift
  anyway.  I''m afraid we don''t have a choice  we need to send in a team to clear
  them out."  Every player with 1 or more survivors at the colony must vote
  with a thumbs up or down.  The option with the most votes takes effect.'
options:
  - action: Go out and reinforce the barricades.
    result:
      Each player that controls 1 or more survivors at the colony chooses a
      survivor they control at the colony and rolls for exposure on that
      survivor.
  - action: Do nothing.
    result: Remove all barricades from the colony.
vote: true
`;export{e as default};
