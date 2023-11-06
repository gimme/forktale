const e=`title: MELISSA GUPTA
trigger: If Melissa is in play and is not exiled
context: '"How many times do I have to tell you?" Melissa shouts. "I''m a
  VEGETARIAN! I can''t eat meat. Do you have no respect for my beliefs at all?"
  The others in the colony look at her, roll their eyes, and continue eating.
  "Look, eat or starve. We don''t care," someone says. "We''re tired of your
  hippie crap. When we have meat, we cook meat. As soon as you find some locally
  sourced soy sausage, we''ll happily cook it up." The following choice belongs
  to the player that controls Melissa.'
options:
  - action:
      '"Eating meat is wrong, and the dead cannibals outside only reinforce
      that."'
    result: Add 1 starvation token to the food supply.
  - action: '"Ok, I''ll eat it."'
    result:
      Tears form in Melissa's eyes. She picks up a bowl of beef and bean stew
      and puts a small spoonful into her mouth. She forces back a gag as she
      feels her teeth bite through flesh. Place 1 despair token on Melissa.
`;export{e as default};
