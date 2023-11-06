const e=`title: TALIA JONES
trigger: If the player controls Talia
context: Most fortune tellers are grifters, and sure, maybe you kind of are too,
  but you don't ply your trade by simply predicting things that could apply to
  anyone.  Your mother trained you to be always vigilant and constantly
  analyzing the world around you.  As a result, your brain processes an almost
  obscene level of detail, allowing you to predict events with surprising
  accuracy.  Not that you'll admit your secret to anyone else
options:
  - action:
      You connect the dots to realize where that lost cache of supplies must
      be hidden.
    result:
      Choose an item deck.  Search that deck for 4 cards of your choice.  Add
      them to your hand then shuffle the chosen deck.
  - action: You see a pattern in past events, and realize the colony is in grave
      danger.
    result:
      The next time a crisis is revealed, remove it from the game and skip the
      crisis step that round.
`;export{e as default};
