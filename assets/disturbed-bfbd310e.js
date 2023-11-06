const e=`title: DISTURBED
trigger: If there are 4 or more helpless survivors in play
context: '"What are you up to buddy?" you mean to ask, but the words stick in
  your throat as you suddenly realize what the little boy is doing. He holds a
  bloody stone over a pulpy mass of flesh and hair that used to be some kind of
  small animal.'
options:
  - action: You tell the others.
    result: Instead of taking action, bickering breaks out as they vehemently
      disagree on how to handle the situation. Roll a die. A number of helpless
      survivors equal to the result become unruly.
  - action: You say nothing.
    result:
      Later the child is caught bashing in the head of one of his playmates.
      Remove 2 helpless survivors from the colony and lose 1 morale.
  - action: If James Meyers is in play, you tell him.
    result:
      He recognize the behavior as a response to deep trauma and takes action.
      You watch as the weeks pass by and life slowly comes back into the child's
      once blank eyes. You may choose a survivor you control that has a despair
      token on it and remove that token.
mature: true
`;export{e as default};
