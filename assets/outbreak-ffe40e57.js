const e=`title: OUTBREAK
trigger: If a survivor the player controls is at the colony and there are 1 or
  more helpless survivors at the colony
context: At first Jerry just had a light fever, but the next day his neck was
  swollen and had a strange purple tint to it. Now three days have passed and
  you've never seen anything like it.  The yellow buboes that have formed under
  Jerry's jaw are leaking pus, and the odor that surrounds him is harsh and
  bitter.  This can't end well.
options:
  - action: Kick out the helpless survivor.
    result: Remove a helpless survivor token from the colony.  Lose 1 morale.
  - action: Do Nothing.
    result: The sickness spreads through the colony. Each survivor at the colony
      receives 1 wound.  If Olivia Brown or Janet Taylor are not in play, roll a
      die for each helpless survivor at the colony.  On a result of 1, kill that
      helpless survivor.
vote: true
`;export{e as default};
