const e=`title: SPOILED
trigger: If the player spends a food, after removing food from the supply but
  before increasing the action die result
context: You stare at the can of stew, desperately hoping you're not seeing what
  you think you see.  Is the can bulging or is it just misshapen from being
  dropped?  You're not in a rush to get botulism, but food isn't exactly
  plentiful around here.
options:
  - action:
      You shake your head.  "I'm sure it's fine.  I've got to stop being so
      paranoid."
    result: Choose a survivor you control and place a wound on it.  Proceed to
      increase the action die result.
  - action: Better to lose a few pounds from hunger than lose everything to
      illness.  You throw the can away.
    result: You do not increase your action die result.  The food is still spent.
`;export{e as default};
