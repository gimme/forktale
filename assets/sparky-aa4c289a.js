const o=`title: SPARKY
trigger: If the player controls Sparky and he is not exiled
context: '"There you are Sparks!  You''re such a good boy aren''t you?"  Sparky
  barks excitedly and turns once in a circle. "Thanks for visiting me again
  pal.  I wish I could come with you, but I can''t stand those idiots at your
  colony.  They don''t think big, you know?  But look boy, I''ve rigged up
  something to help protect you.  I''ve attached this weapon to one of the pulley
  rigs we used on the show to make you look like you were flying.   I''ll just
  hook you up to the device like this.  Now, if you pull on this bit with your
  mouth - BANG! - automatic zombie killing machine.  You look like a stone cold
  killer now!"'
options:
  - action: '"Get ''em Sparky!"'
    result: Kill 8 zombies at the colony.  Do not roll for exposure.
  - action: '"Look everybody, Sparky the Stunt Dog has a gun now!"'
    result: Gain 1 morale.
`;export{o as default};
