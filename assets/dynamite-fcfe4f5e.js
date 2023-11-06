const e=`title: DYNAMITE
trigger: If both Edward White and John Price are in play
context: '"Aw yeah Mr. White. That''s a great idea!  How ''bout we spice this
  bitch up with some chili powder?"  "John, could you reign in your idiocy for
  just a moment?  This is chemistry, and chemistry requires precision.  You
  can''t just go throwing random ingredients willy-nilly into the mix, especially
  when they don''t help anything.  Now shut up and hand me that beaker." The
  following choice belongs to the player that controls Edward White.'
options:
  - action: You make dynamite.
    result: '"Dynamite!  Hell yes, bitches!" Roll a die.  If you roll a 1, kill
      Edward White and John Price. If you roll of 2 or higher. Roll another die
      and remove that many zombies from the colony. Then replace them with
      barricades created by the rubble.'
  - action: You make beer.
    result:
      '"Ahhh, now that''s a dynamite beverage!" Edward exclaims as he sips on
      his first homebrewed beer. When rolling action dice next round, each
      player rolls 1 less die.  Gain 1 morale.'
mature: true
`;export{e as default};
