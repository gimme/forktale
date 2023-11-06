const e=`title: SPY
trigger: If there are 1 or more helpless survivors at the colony
context: '"Yeah, I heard her on the CB talking to someone about our supplies
  and weapons, and I''m pretty sure she was trying to describe our defenses. I''m
  telling you, that woman is spying on us! I don''t know who she was reporting
  to, but we sure as hell better find out."'
options:
  - action: You lock the spy up and grill her for information.
    result: She refuses to talk. Desperation and anger drive you to torture, and
      soon you learn the details of her plan. Remove up to 5 bandits from play.
      Lose 1 morale.
  - action: Banish her.
    result:
      Remove 1 helpless survivor from the colony. Add 2 bandits to a random
      location.
`;export{e as default};
