const e=`title: ABANDONED
trigger: If the player cleans waste and there is at least 1 helpless survivor at
  the colony
context: There it is again  the sound of a baby crying.  You enter the
  warehouse's back hallway, following the sound, and come to the large trash bin
  that holds used plastic containers.  Someone has thrown away a newborn.  A
  quick investigation yields a distraught teenage girl.  Fearing being turned
  away, she hid her pregnancy from the colony.  Every player with 1 or more
  survivors at the colony must vote with a thumbs up or down.  The option with
  the most votes takes effect.
options:
  - action: You keep the baby.
    result: Add 1 helpless token to the colony. The baby's cries draw in the
      dead.  Add 5 zombies to the colony.
  - action: You keep the baby but expel the mother for what she did.
    result: The baby's cries draw in the dead.  Add 5 zombies to the colony. You
      search the town for formula.  Each player that is able to must move 1
      action die from their unused action dice pool to their used action dice
      pool.
vote: true
mature: true
`;export{e as default};
