const e=`title: ROCCO BELLINI
trigger: If Rocco is in play, is not exiled, and is alone at a location
context: Rocco sits up in the chair he was napping in. What was that sound? He
  heads in the direction of the noise and finds a young boy shivering beneath a
  ratty jacket. The kid is sick, but shows no sign of bites or scratches. The
  following choice belongs to the player that controls Rocco.
options:
  - action:
      Rocco knows the kid's chances are poor, but the shadows from his past
      won't let him just walk away. He carries the boy back to the colony.
    result: Players may collectively place 3 medicine cards into the waste pile
      without triggering their effects to place 1 helpless survivor at the
      colony. If they do not, lose 1 morale.
  - action:
      Rocco remembers watching as his son turned into a monster. At the time
      Rocco couldn't do what needed to be done, but he doesn't hesitate now.
    result:
      '"No!" the boy screams. "Please, I -" but the gunshot cuts him off. "You
      were dead anyway kid," Rocco whispers. Place 1 despair token on Rocco.'
mature: true
`;export{e as default};
