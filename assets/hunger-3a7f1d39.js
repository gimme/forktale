const e=`title: HUNGER
trigger: If the player adds a male survivor and a helpless survivor to the colony
context: The new guy says, "Hey man, I appreciate the offer to join your colony,
  but you see that dude over there?  That's Fat Earl.  I know you don't like
  him.  I don't really like him either.  But his mother was a good woman, and I
  swore to her that I'd always keep him with me."
options:
  - action: You let Fat Earl into the colony.
    result: Fat Earl eats all the food.  Remove all of the food from your supply.
  - action:
      You are starving and this guy is so big he can barely move.  It isn't
      right.  You kill Fat Earl.
    result:
      The new guy looks at the sandwich in his hands with disgust, the stale
      bun covering smoked, greasy meat that smells almost like
      pork.   Almost.  A tear runs down his face, and he whispers, "Always with
      me," before taking a bite.  Add 5 food to your supply, remove 1 helpless
      survivor from the colony and lose 1 morale.
`;export{e as default};
