const e=`title: GIA NAJJAR
trigger: If Gia is in play and is not exiled and there is at least 1 bandit in play
context: Move Gia to a location with a bandit. Do not roll for exposure. "What
  the hell are you doing here?" Gia yells. The man grins and says, "I came here
  to save you, gorgeous. So come on, we're leaving." "Don't call me that," Gia
  spits. "When will you get it through your head that I'm not into men who are
  as predatory as the dead?" He grabs her arm. "You're the one who doesn't get
  it bitch  you don't get a say in this." The following choice belongs to the
  player that controls Gia.
options:
  - action: Gia wants to resist, but knows what will happen to the others if she does.
    result: Remove Gia and all equipment attached to her from the game. Remove 1
      bandit from the location Gia was at.
  - action: Gia knees the man in the groin before punching him in the face.
    result:
      '"How gorgeous am I now, bitch?" Place Gia at the colony. Do not roll
      for exposure. Add 1 bandit to each location.'
mature: true
`;export{e as default};
