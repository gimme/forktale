const t=`title: ADDICTION
trigger: If the player plays a medicine card to heal a survivor
context: Holy crap, this is the pure stuff.  Most painkillers have a ton of
  filler, but you've really hit the jackpot now.  Oh God, that feels good.  It's
  been so long.  When was the last time you felt like this?  Hell, when was the
  last time you felt anything but terror and despair?  You want more.  Just the
  thought of not having this feeling again it's almost too much.
options:
  - action: You swallow the rest of the pills all at once and melt into a warm
      oblivion.
    result: Kill the survivor that the medicine was used on.  Do not reduce morale.
  - action:
      You resist swallowing the rest of the pills all at once, but you know
      when the high subsides you'll need more.
    result:
      Place this card under the survivor that the medicine was used on.  As
      long as you control this survivor, at the beginning of your turn you may
      play a medicine card applying its effects to this survivor.  If you do
      not, you must remove 1 of your action dice from the unused action dice
      pool to the used action dice pool.
mature: true
`;export{t as default};
