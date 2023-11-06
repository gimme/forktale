const e=`title: THOMAS HEART
trigger: If the player uses the ability of a <Weapon> item card while Thomas
  Heart is in play
context: Gunshots ring out like church bells greeting the morning.  This is
  business as usual now, but somewhere deep in the damaged folds of Thomas
  Heart's brain, something misfires.  A blood vessel bursts in his left eye and
  the broken man begins to howl with fear, frustration and rage.  The following
  choice belongs to the player who controls Thomas Heart.
options:
  - action: Leave Thomas alone.
    result:
      Thomas distributes 4 wounds to survivors who share his location. If no
      other survivors share Thomas's location, nothing happens.
  - action:
      Players collectively remove 2 medicine cards in their hand from the game
      to medicate Thomas.
    result:
      Nothing Happens. If 2 medicines are not removed, carry out the effects
      of Option 1 instead.
  - action: '"He''s a loose cannon. A liability. Kill him!"'
    result: Kill Thomas.
`;export{e as default};
