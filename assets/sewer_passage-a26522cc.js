const o=`title: SEWER PASSAGE
trigger: If a survivor the player controls is at the library
context: You casually walk past an aisle of public records, when an idea strikes
  you.  In half an hour you locate the city's sewage layout, and plot a route
  that goes from a manhole just outside the colony all the way to the
  hospital.  You show your findings to the colony but no one is interested in
  traversing a pitch black labyrinth of waste.
options:
  - action:
      You're terrified but know this is your chance to do something meaningful
      for the colony, even if they don't realize it.  You decide to try to clear
      a path.
    result: Choose a survivor you control at the library. Roll a die.  Roll for
      exposure on the chosen survivor a number of times equal to the die
      result.  If you are not killed by those exposure rolls, survivors do not
      have to roll for exposure for the remainder of the game, when moving from
      the colony to the hospital or from the hospital to the colony. Place this
      card next to the hospital as a reference.
  - action: It's a bad idea.  Too dangerous down there in the dark.
    result: Nothing happens.
`;export{o as default};
