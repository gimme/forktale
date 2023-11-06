const e=`title: JOHN PRICE
trigger: If the player performs a search action at the school, and John Price is
  in the survivor deck
context: As you search through the school, you hear screaming and pounding at a
  door down the hallway. When you investigate, you see a teenager frantically
  banging on the door to the cafeteria. You start to unlock the door, when you
  notice the dead converging on him from behind.
options:
  - action: You unlock the door and rescue the boy.
    result:
      He runs past you and leaves you to deal with the zombies. Add John Price
      to your following.  Add 2 zombies to the school.
  - action: You decide to take advantage of the distraction and rush into the
      cafeteria, grabbing supplies, as the teenager's anguished screams echo
      throughout the school.
    result: Add 2 food to the supply.  Search the survivor deck for John
      Price.  Remove the card from the game.
`;export{e as default};
