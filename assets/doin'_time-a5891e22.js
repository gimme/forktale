const t=`title: DOIN' TIME
trigger: If there is only 1 survivor at the police station and the player
  controls that survivor
context: Trapped! Fill the location with bandits.
options:
  - action: You attempt to bribe the bandits.
    result: Remove 1 or more cards from your hand and place them in the bandit
      hideout. Roll a die. Add 1 to the roll for every card you placed in the
      bandit hideout. If you roll a 3 or higher remove all bandits from the
      station. If you roll lower than a 3, kill the survivor at the police
      station.
  - action: You scream and bang loudly against the bars.
    result: Fill the police station with noise. The rest of the colony must free
      you. Each player must choose a survivor they control and roll for exposure
      on the chosen survivor. Remove all bandits from the police station.
`;export{t as default};
