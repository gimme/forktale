const e=`title: COLE WINTERS
trigger: If Cole is in play and shares a location with a wounded survivor
context: '"Hey Shorty... You got anything for headaches?" the man asks while
  pinching his bleeding nose. In his youth, Cole would have ignored the man or
  fought him. Nowadays, well, it really depends on how much Cole''s had to drink.
  The following choice belongs to the player that controls Cole.'
options:
  - action: This loser can take care of himself. You ignore the other survivor's
      plight.
    result:
      The survivor's player rolls the exposure die. On any result other than a
      blank, that survivor is killed.
  - action: You rummage through your things until you find what the man needs.
    result:
      "Discard any card from your hand, remove all wounds from the survivor,
      then roll the exposure die. On any result but a bite: The man thanks you
      and shakes your hand. On a bite result; The man spews his medicine before
      biting your hand. Place 2 wound tokens on Cole. Add a zombie to the
      location."
`;export{e as default};
