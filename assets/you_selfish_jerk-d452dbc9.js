const e=`title: YOU SELFISH JERK
trigger: If the player attempts to end her turn without contributing to the
  current crisis
context: '"Time and time again you fail to help the colony when helps is needed
  most.  Well, we''re sick of your attitude and we''re sick of your excuses.  This
  is it! Help out or get out." Each player with 1 or more survivors at the
  colony must vote with a thumbs up or down.  The option with the most votes
  takes effect.'
options:
  - action: Force the survivor to contribute.
    result:
      The player must contribute at least 1 card to the current crisis.  If
      not, lose 1 morale.
  - action: Vote to exile the survivor's group.
    result:
      All players must immediately vote whether or not to exile the current
      player.  If the player is not exiled, lose 1 morale.
vote: true
`;export{e as default};
