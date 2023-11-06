const e=`title: WAR
trigger: If there are 6 or more bandits in play
context: '"This town can''t support two communities, and those bastards are
  picking the place clean. If we truly mean to make a home here, and God knows
  we''ve done everything we can, then it''s time to fight. We can''t keep battling
  the dead as well as the living." Every non-exiled player votes with a thumbs
  up or down. The option with the most votes takes effect.'
options:
  - action: Go to war.
    result: Roll a die for each non-helpless survivor and set successes aside. A
      survivor with a gun equipped needs to roll a 2 or higher to be a success.
      A survivor without a gun equipped needs to roll a 5 or higher to be a
      success. Roll a die for each bandit. Set aside successes in a separate
      pile. Each 4 or higher rolled is a success. If the total number of
      survivor successes exceeds the total number of bandit successes, all
      bandits are killed. If the bandits have more successes all survivors
      receive 1 wound.
  - action: Don't go to war.
    result: Nothing happens.
vote: true
`;export{e as default};
