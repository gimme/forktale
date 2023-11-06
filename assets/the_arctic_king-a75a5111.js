const t=`title: THE ARCTIC KING
trigger: If the player performs a search at the gas station
context: Snowflakes waft by, and your fingers begin to numb in the frigid
  cold.  The eighth key you try works, and you lift the complaining garage door
  up.  You start to curse the noise but the words never make it past your
  lips.  It sits there like some ancient idol.  The words POLAR BEAR are
  emblazoned along the snowmobile's flank, and you joyously recall the TV jingle
  with no hint of irony.  "When winter tries to trap you there, mount up on a
  Polar Bear."
options:
  - action: You take the Artic King.
    result: Attach this card to the searching survivor.  When moving with that
      survivor you do not roll for exposure but must place a noise token at the
      origin and destination.  If the origin or destination is the colony, add 1
      zombie to the colony instead. Each time you move, place a wound token on
      this snowmobile.  When it has 4 wounds remove it from the game.
  - action: You siphon the gas.
    result: Search the gas station item deck for 2 fuel cards, add them to your hand.
`;export{t as default};
