const o=`title: CRAZED SURVIVOR
trigger: If the player controls a survivor at a non-colony location
context: The filthy woman looks at you in confused silence.  Her hair is a
  tangled rat's nest, and grime covers her arms, legs and face.  "Lady, are you
  okay?" you ask.  A plastic Meat & Stuff bag hangs by her side, bulging with
  what looks like canned food.  And now you notice the butcher knife in her
  other hand.  "Ma'am?  I'm not going to hurt you.  My friends and I have a safe
  place.  Do you want to come with us?"  The woman lifts up the knife and
  screams, "Keep away from it!  That's my money I've been saving!"
options:
  - action: Try to talk to her.
    result:
      She charges you before you have a chance to speak. She fights with wild
      abandon and after a difficult struggle, you are forced to kill her. Add 3
      food tokens to the colony and roll twice for exposure on a survivor you
      control at a non-colony location.
  - action: Run away.
    result: Nothing happens.
`;export{o as default};
