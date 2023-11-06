const e=`title: BRIAN LEE
trigger: If the player controls Brian and Brian is at the colony
context: Brian had thought his days of politicking were over, but now he wonders
  if that isn't the best way he could contribute to the colony.  And so he
  clears his throat, and steps up to the podium.
options:
  - action:
      '"My friends!  Who among us does not feel great pride, when they look
      about and see the great works we have accomplished here?  And yet, despite
      our progress, medical care has proven insufficient at best.  I have a plan
      to seize the hospital and ensure we have access to the supplies we need."'
    result: Remove all zombies from the hospital and place 4 barricades there.
  - action:
      '"I look out at your faces today and see one of the most dedicated work
      forces I''ve ever known.  But so too do I see hunger.  It''s time to reward
      our hard work with adequate food supplies.  I have a plan to take and hold
      the grocery store, something that would change the course of our future
      forever."'
    result: Remove all zombies from the grocery store and place 4 barricades there.
`;export{e as default};
