const t=`title: BITTER COLD NIGHT
trigger: If the player receives a frostbite wound as the result of rolling for
  exposure after moving to a location with 1 or more other survivors
context: The night brings with it a new understanding of cold. The snow stopped,
  but the wind picked up, and your extremities all ache from the icy pain that
  stabs you. You stagger to the door and bang as loudly as you can, shouting for
  someone to let you in. But the wind howls louder, and your hat is torn from
  your head. You hammer on the door again, panic gripping you as the cold
  instantly starts chewing on your ears. Every player with 1 or more survivors
  at the location that was moved to must vote with a thumbs up or down. The
  option with the most votes takes effect.
options:
  - action: Let them in.
    result: The door opens, but the wind enters with you, sending loose items
      scuttling across the floor, and putting the fire out with an audible
      "whump".  Every survivor at the location receives 1 frostbite wound.
  - action: Don't let them in.
    result: The moving survivor is killed.
vote: true
`;export{t as default};
