const e=`title: LITTLE SURVIVORS
trigger: If the player moves a non-exiled survivor to a location where no other
  survivors are
context: The beam of your flashlight moves across the wreckage.  Clearly this
  place has been hit by other scavengers, and you begin to doubt there's
  anything of value that's been left behind.  Your light moves across a window,
  and you only just stifle a scream when you see eyes looking out at you from
  the glass.  "Oh God," you say.  The youngest can't be more than five years
  old.  The oldest is maybe nine.  They vanish before you can recover, their
  eyes full of fear and mistrust.
options:
  - action: You bring the children back to the colony.
    result: Add 3 helpless survivors to the colony. Gain 1 morale.
  - action: The little survivors seem to be getting by on their own.
    result: Nothing happens.
`;export{e as default};
