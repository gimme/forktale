const o=`title: THE TUNNEL
trigger: If the player controls a survivor at the colony
context: '"My God, it''s a tunnel!" you gasp. "Who on earth made this?" Your
  friend shakes their head. "Must of been one of us," they say. "But if they
  haven''t seen fit to tell us, you have to wonder if their intentions aren''t
  bad. The dead could get in this way. So could raiders." You sigh and hold
  your jaw in contemplation. "This thing looks crazy long," you observe.
  "There''s no way someone had time to make this on their own." You''ve either
  found a useful tool, or the means to the colony''s destruction.'
options:
  - action: Use the tunnel.
    result:
      Place this card at a random location. A survivor can move to and from
      that location without rolling exposure. When 1 or more zombies are placed
      at that location, roll a die. On a 3+ add a zombie to the colony as well.
  - action: Close the tunnel.
    result: Remove up to 2 helpless survivors from the colony. For each helpless
      removed, place 1 bandit at a random location.
`;export{o as default};
