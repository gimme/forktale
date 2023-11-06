const e=`title: SCARS
trigger: If the player controls Rosa Rodriguez, and Rosa shares a location with a bandit
context: >-
  "I know you!" The shaggy man points an angry finger at Rosa. 

  "Hey, I don't know you man," Rosa says, raising her hands peacefully. %% "Oh yeah. I remember you," he insists, and runs a finger over a scar on his forehead. "Remember this? You gave me this when I was in the joint." %% "Don't know what you're talking about," Rosa says. "I worked a drive-through window. That must be what you remember." %% "No way!" the man screams. "You're Ruthless Rosa! Man, I'm gonna fuck you up for what you did to me."
result: The player controlling Rosa takes 5 dice, removing 1 die for each wound
  or despair token on her character card. The player rolls the remaining dice
  and totals the result. Another player must roll 4 dice for the bandit, and
  totals the result. If Rosa's total is equal to or higher, place her back at
  the colony (this does not count as a move). If Rosa's roll is lower, she
  receives a number of wounds equal to the difference between the two totals.
mature: true
`;export{e as default};
