const e=`title: WEEDS
trigger: If the greenhouse improvement is in play and the player controls a
  survivor at the colony
context: You stare at the plant dumbly for a few minutes, almost not
  comprehending what you're seeing. Who on earth planted this here? In another
  life you probably would have just ignored it, but now? Well, things are
  different now.
options:
  - action: Secretly smoke the plant for recreational purposes.
    result: Pay 1 food to remove all despair tokens from survivors you control.
  - action: Share the plant with those needing it for medicinal purposes.
    result: Pay 1 food to remove a wound token from up to 2 survivors you do not
      control that have 2 or more wounds.
  - action: You harvest the plant and sell it to another group in the colony.
    result:
      Name an item card. The first player with survivors at the colony to give
      you the named card, removes all despair tokens from survivors they
      control. If no player can give you the named card, nothing happens.
mature: true
`;export{e as default};
