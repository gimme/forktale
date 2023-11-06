const t=`title: TOXIC WASTE
trigger: If a survivor the player controls is at the colony
context: '"I told that lazy jerk to get the fuel and medical waste offsite.  So
  guess what he didn''t do?  God only knows what''s leeching into the ground
  now.  Is our water supply contaminated?  How about the garden?  And of course
  now it''s colder than a snowman''s balls outside and we have to go clean that
  crap up."  Every player with 1 or more survivors at the colony must vote with
  a thumbs up or down.  The option with the most votes takes effect.'
options:
  - action: Go out in the cold and clean up the waste.
    result:
      Each player must place a frostbite wound on a survivor they control at
      the colony.
  - action: Do nothing.
    result:
      Place all fuel and medicine cards that have been removed from game into
      the waste pile.
vote: true
`;export{t as default};
