const e=`title: THE BUDDY SYSTEM
trigger: If a survivor the player controls receives any type of wound as the
  result of moving to the colony
context: You suck in your breath sharply as she wraps the bandage around the
  wound. "I barely made it back on this leg," you gasp. "I haven't felt that
  alone since before the colony. It's only dumb luck I made it back. I think it
  needs to be standard operating procedure to go out in pairs." Every player
  must vote with a thumbs up or down. The option with the most votes takes
  effect.
options:
  - action: Implement the buddy system.
    result: When moving a survivor away from the colony you must move another
      survivor with it. The player controlling that other survivor must agree.
      If no survivors agree, the moving survivor cannot be moved. When moving a
      pair of survivors, instead of rolling exposure normally, roll for exposure
      twice and choose 1 result. Apply that result to both survivors.
  - action:
      '"That''s an idea all right. Another is to play it smart when you leave
      the colony."'
    result: Nothing happens.
vote: true
`;export{e as default};
