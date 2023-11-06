const e=`title: SOPHIE ROBINSON
trigger: If the player moves a survivor and Sophie is currently in the survivor deck
context: You run after the smoking helicopter as it spins through the sky.  It
  vanishes from view behind a wall of towering trees, and the ground shakes from
  impact.  Passing through the trees, you see fire and smoke billowing from the
  cab, but so too do you see the pilot's arms waving wildly.  As you draw closer
  you see she's still alive, but her legs are pinned.  "Help me!" she screams.
options:
  - action: You drag the pilot out of her seat and away from the wreckage.  The
      blast of an explosion knocks the two of you to the ground as the fire
      reaches the fuel tank.
    result: Search the survivor deck for Sophie Robinson and add her to your
      following.  Place 2 wound tokens on her.
  - action: Your eyes meet the pilot's, but you quickly look away and begin
      searching through her supplies.  "You monster!" she screams as you grab
      what looks valuable and stumble clear of the wreckage.
    result: Choose an item deck.  Draw and keep 2 cards from the chosen
      deck.  Search the survivor deck for Sophie Robinson and remove her from
      the game.
`;export{e as default};
