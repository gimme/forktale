const e=`title: FANATICS
trigger: If there are 2 or more helpless survivors at the colony
context: '"And you shall shun the rot as a blight upon His name, and yea, upon
  ending your feast thou shalt offer the remnants to flame so that it shall
  never know the rot. " The woman dumps gasoline on the leftovers of the evening
  meal and then lights it a flame. Every player with 1 or more survivors at the
  colony must vote with a thumbs up or down. The option with the most votes
  takes effect.'
options:
  - action:
      '"These wack-jobs have to go."  Stop the fanatics from performing their
      offerings.'
    result:
      Remove half of the helpless survivors from the colony (rounded up). For
      every survivor removed place a bandit at a random location.
  - action: '"It''s weird, but if it makes them feel better. . ." Allow the
      fanatics to continue.'
    result: For the remainder of the game, after the pay food step of the colony
      phase, you must remove any remaining food from the supply.
vote: true
`;export{e as default};
