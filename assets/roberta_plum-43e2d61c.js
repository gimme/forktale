const e=`title: ROBERTA PLUM
trigger: If Roberta Plum is in play and is not exiled
context: Roberta has a hangover and the noise in the colony is killing her
  head.  But she's got the go-to solution; cough syrup and flour.
options:
  - action: Leave Roberta to her own devices.
    result:
      Players must collectively remove 1 food card and 1 medicine card from
      the game. Roberta whips up a batch of her special Sleepy Time Christmas
      Cookies and hand them out to everyone she can.  Helpless survivors do not
      count towards the total number of survivors when determine how much food
      the colony needs or when placing zombies during the next 2 colony phases.
  - action: Reject Roberta's request for cough syrup and flour.
    result: Nothing happens.
  - action:
      If Forest Plum is in play, his controlling player may decide to drink up
      Roberta's cough syrup, causing this alternative option to trigger instead
      of either of the other options.
    result:
      Stoned out of his mind, Forest brings mirth to the colony by acting the
      fool.  Raise morale by 1.
`;export{e as default};
