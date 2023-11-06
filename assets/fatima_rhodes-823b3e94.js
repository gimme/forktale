const t=`title: FATIMA RHODES
trigger: If Fatima Rhodes is at the colony
context: The trash bag's contents slosh back and forth across Fatima's back as
  she tries not to think about it. But when she fumbles with the door knob, the
  bag slides off her shoulder and hits the floor with a loud thwack! The plastic
  splits and the contents splatter out across the concrete floor. The following
  choice belongs to the player that controls Fatima.
options:
  - action: '"No, no, no, no!" Fatima shouts. "I am a gold freakin'' medalist!
      I''ve competed with the greatest champions in the world, and you all want
      me scrubbing floors and taking out the trash? I can''t do this!"'
    result:
      For the remainder of the game you can only use Fatima to search. Once
      per turn you are required to move Fatima from her current location. If you
      cannot, place 1 despair token on Fatima.
  - action: Fatima looks at the waste in front of her with dead, accepting eyes.
    result: Remove 1 card from the waste pile. Place 1 despair token on Fatima.
`;export{t as default};
