const e=`title: HEADS UP
trigger: If a survivor the player controls performs a search at the police station
context: You knew better than to go down into the morgue, but you figure it's
  the one place that's been searched the least.  But once you find yourself
  downstairs in the darkness, you are so overcome with fear that you only have
  enough willpower to look in either the refrigerator, or the chemical vat.
options:
  - action: You open the refrigerator.
    result:
      You let out a shrill scream.  A severed head springs to life, gnashing
      its teeth at you.  You flee in terror, knocking over shelves and God knows
      what else.  Fill the police station with noise tokens.
  - action: You lift the lid on the chemical vat.
    result:
      You let out a shrill scream.  It's a severed head!  You flee in terror,
      knocking over shelves and God knows what else.  Fill the police station
      with noise tokens.
`;export{e as default};
