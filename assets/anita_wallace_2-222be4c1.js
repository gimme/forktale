const t=`title: ANITA WALLACE 2
trigger: If a survivor the player control receives a wound and Anita is in play
  and not exiled
context: '"That cut looks pretty bad." Anita says to you. "You know I used to
  be an herbalist before all of this. I''ve still got some oils back in my bunk
  that could help this heal up real nice."'
options:
  - action: You let Anita dress your wound with some scented oils.
    result:
      A day later the wound itches like crazy. You pull away the bandages to
      find you have a strange, swollen rash and your wound is infected. If Anita
      was an herbalist, then you were the king of France. Add another wound
      token to the wounded survivor.
  - action: '"No thanks." You mutter warily.'
    result: '"Oh look at you, you uppity piece of shit," she snaps. "You think
      you''re better than me don''t you?" Attach this card to the wounded
      survivor. That survivor has made an enemy of Anita and for the remainder
      of the game cannot move to a location where Anita is at.'
mature: true
`;export{t as default};
