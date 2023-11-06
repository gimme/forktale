const e=`title: OLIVIA BROWN
trigger: If Olivia is in play
context: '"Let me get this straight.  You want to endanger the whole colony so
  you can probe a zombie or something?"  Olivia sighs.  "Don''t be jealous,"
  she snaps.  "But yes, I want to study one of the undead.   I might be able to
  find simple ways to protect us from the virus." Place Olivia at the colony
  (this does not count as a move). Every player with 1 or more survivors at the
  colony must vote with a thumbs up or down.  The option with the most votes
  takes effect.'
options:
  - action: You allow Olivia's experiments.
    result:
      Attach this card to Olivia.  At the beginning of each round, if Olivia
      is at the colony, she may experiment.  To experiment you must roll for
      exposure on Olivia. If you roll a non-blank result apply its effect to
      Olivia.  If you roll a blank, when a player rolls a bitten result on the
      exposure die during that round, any player may immediately discard a
      medicine to ignore the effects of that bitten result.
  - action: You forbid Olivia's experiments.
    result: Nothing happens.
vote: true
`;export{e as default};
