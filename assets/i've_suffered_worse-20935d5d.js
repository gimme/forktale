const e=`title: I'VE SUFFERED WORSE
trigger: If a non-exiled survivor controlled by the player is killed
context: Just as they sadly turn away from you, you manage to croak, "Please
  don't go." Your companions cry out in alarm, as they were sure you were dead.
options:
  - action:
      '"We''re so sorry, friend.  I''m not sure how to tell you this, but your
      wounds are so grievous we can''t risk brining you back.  If you turn, the
      whole colony could be at risk."'
    result: You nod your head.  You'd do the same.  You close your eyes as the
      pistol is leveled at your face.  The survivor remains dead.
  - action:
      You try to protest as they carry you back, but all that comes out are
      incoherent moans.
    result: Remove all wounds from the survivor that was just killed. Place its
      standee in the colony and roll the exposure die.  If any symbols are
      rolled, treat them as a bitten result.
`;export{e as default};
