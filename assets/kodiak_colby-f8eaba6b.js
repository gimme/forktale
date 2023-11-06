const e=`title: KODIAK COLBY
trigger: If the player performs a search, and Kodiak Colby is in the survivor deck
context: You cry out in terror as the zombie bear lumbers toward you, its
  intestines dragging through the gravel behind it.  Cornered in an alley, you
  press against a dumpster and prepare to meet death. But then a bold cry echoes
  from on high, and lo! A mighty outdoorsman leaps from a nearby tree, and lands
  upon the bear's back.  The beast heaves and lets out a sickly growl, but the
  newcomer holds tight before applying a ferocious choke hold.  Minutes later,
  the bear lies decapitated on the ground, and your rugged savior gives you a
  hand up, before offering to teach you how to suckle at Nature's generous
  bosom.
options:
  - action:
      You run naked through the woods with your new friend, free perhaps for
      the first time in your life.
    result:
      Roll once for exposure. Search the survivor deck for Kodiak Colby and
      add him to your following.
  - action: '"Man, I appreciate the save, but I''m not suckling at anything."'
    result: The handsome man looks dejected and slouches away.  Nothing happens.
`;export{e as default};
