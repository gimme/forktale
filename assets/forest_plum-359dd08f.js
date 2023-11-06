const e=`title: FOREST PLUM
trigger: If Forest is in play
context: '"I couldn''t help but notice you scored some whiskey on your last
  run," says Forest, and he gives what is supposed to be a charming grin.  But
  it isn''t.  You can''t stand the guy really.  He''s clingy, smells and refuses to
  take off his mall Santa costume, which is a little worrying.  But he''s also
  clearly had a rough life and you can''t help but feel sympathy for him.  He
  means well at least.  "C''mon man, show some Christmas spirit."'
options:
  - action: You give Forest the booze.
    result:
      Later that evening, he drunkenly stumbles off to the grocery store and
      loudly rings a bell in front of the entrance, asking no one in particular
      if they'd like to donate to charity.  Place Forest at the grocery store
      (this does not count as a move). Add 4 noise tokens to the grocery store.
  - action: '"Shove that Christmas spirit up your ass Forest.  These spirits are
      staying with me."'
    result:
      Later that evening, Forest strikes out at another survivor in a fit of
      rage. The survivor with the lowest influence value (not including Forest)
      receives 1 wound.
mature: true
`;export{e as default};
