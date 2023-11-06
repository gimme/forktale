const e=`title: INTERROGATION
trigger: If a survivor the player controls shares a space with 1 or more other
  survivors and exactly 1 bandit
context: '"Gimme your stuff or get your head blown off," the raider says,
  laughing, his gun in your face. It''s almost a game to him, which is why he
  doesn''t hear your companion sneak up behind him. They''re extinguisher reduces
  him to a crumpled heap, and you both agree to take advantage of the
  situation.'
options:
  - action:
      You torture the bandit for information on where he came from and what
      his friends are planning.
    result: It doesn't take much for his tongue to loosen, but you can't bear to
      look at yourself in the mirror when you wash his blood off your hands.
      Lose 1 morale. Remove all bandits at each location from play.
  - action:
      When the bandit comes to, he finds his wounds treated and a modest meal
      waiting for him.
    result: You wanted to win him over with kindness, but you're rewarded with a
      violent escape and a futile chase. Spend 1 action die if possible. Nothing
      else happens.
`;export{e as default};
