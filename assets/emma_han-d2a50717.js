const e=`title: EMMA HAN
trigger: If the player controls Emma Han and she is the only survivor at a
  non-colony location with 1 or more bandits
context: Emma is exploring the ruins when she hears the sound of a gun being
  cocked. "Keep it nice and cool," the man says. Emma turns slowly to see the
  man's gun pointed at her. But before she can think of something witty to say,
  the man looks past her and his face goes white. He raises his gun, and Emma
  ducks and runs as the bandit opens fire. The zombie jerks wildly under the
  bullets, and lunges forward to savage the bandit. The man breaks free, and he
  and Emma flee to a room with a lock on the door.
options:
  - action: There are few enough humans in the world, so you decide to help him.
    result:
      The man's appreciation is genuine. Grateful for your help, he gives you
      a token of his gratitude. Discard a medicine card and take a card of your
      choice from the Bandit's Hideout. Remove 1 bandit from the location.
  - action:
      The man won't last the night, so you slip out a window the first chance
      you get.
    result: Add 1 zombie to your location and remove the bandit.
`;export{e as default};
