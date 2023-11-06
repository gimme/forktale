const e=`title: GAMBLING
trigger: If a survivor the player controls is at the colony
context: '"I''m bored.  C''mon, let''s roll some dice.  Surely everyone here has
  something they can ante up?  I''ve got a pair of clean socks that says I wipe
  the floor with you chumps." Every player with 1 or more survivors at the
  colony must vote with a thumbs up or down.  The option with the most votes
  takes effect.'
options:
  - action: Gamble.
    result:
      One at a time, starting with the first player, each player may place 1
      item card from their hand into the center of the play area for each
      survivor they control at the colony.  For every card played that player
      rolls 1 die.  The player that rolled the highest die result takes all of
      the cards placed in the center of the play area and adds them to his
      hand.  Reroll ties.
  - action: Do not gamble.
    result: Nothing happens.
vote: true
`;export{e as default};
