const e=`title: MARIA LOPEZ
trigger: If the player controls Maria and she is not exiled
context: Place Maria at the school, if able (this does not count as a move). The
  halls of the school are empty, and Maria closes her eyes and inhales
  deeply.  It still smells the same, and for a moment she stands there in the
  silence and it feels like another quiet, early morning, moments before the
  halls erupt with the arrival of children.  She opens her eyes and
  screams  there are children everywhere, and Maria cowers back against a wall
  of lockers.  But the children do not attack.  "Oh God," she says, realization
  sweeping over her.  "You're alive!"  And she sees the leanness of their bodies
  and the starvation in their faces.
options:
  - action:
      '"There is some food in the colony supply, these kids need it more than
      we do."'
    result:
      Remove 3 food from the supply.  "For me?  Thank you sweetie!"  Search
      the school deck for a card of your choice and add it to your hand.
  - action:
      There isn't much you can do for them.  You unlock the school pantry as
      you leave.
    result: Search the school deck for all food cards and remove them from the game.
`;export{e as default};
