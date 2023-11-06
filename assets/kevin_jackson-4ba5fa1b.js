const e=`title: KEVIN JACKSON
trigger: If Kevin's ability is used
context: Kevin lays stretched out on the rooftop, scanning the streets below
  with the scope on his rifle. He sucks in his breath and gives the trigger a
  squeeze. The gunshot echoes through the grim silence of winter, and a zombie's
  head explodes. But surveying the streets he sees a man dressed in black,
  several blocks away, pointing a rifle directly at him. "Oh shit."
options:
  - action: Kevin fires.
    result: Roll a die. On a result of 5 or higher Kevin kills the man in black.
      Discard this card. On a result of 4 or lower Kevin misses the shot in his
      haste. Kevin receives 2 wounds. This card remains in play. While this card
      is in play, every time Kevin's ability is used you must trigger this
      crossroads card again.
  - action: Kevin runs.
    result:
      Roll a die. On a result of 1, Kevin receives 2 wounds. On a result of 2
      or higher nothing happens. In either case this card remains in play. While
      this card is in play, every time Kevin's ability is used you must trigger
      this crossroads card again.
mature: true
`;export{e as default};
