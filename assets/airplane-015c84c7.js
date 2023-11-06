const e=`title: AIRPLANE
trigger: If the player moves and Sophie Robinson is in play
context: '"It''s an old crop duster," Sophie says, running her hand over the
  side.  "She''s in great condition too.  I could fly this thing out of here and
  scout for help.  Or supplies even.  Who knows?  I might even find us a safer
  place to live."  Every player with 1 or more survivors at the colony must
  vote with a thumbs up or down.  The option with the most votes takes effect.'
options:
  - action: You gather supplies to help Sophie fix up the plane.
    result:
      The players may collectively remove from the game 1 tool card, 1 fuel
      card, as well as Sophie Robinson to gain 1 morale.
  - action:
      '"We have more important things to do than fix up a plane and send you
      away with our fingers crossed."'
    result: Nothing Happens
vote: true
`;export{e as default};
