const e=`title: OUTSIDERS
trigger: If a survivor the player controls is at the colony
context: '"I need everybody at the gate right now!  There''s a flatbed that just
  pulled up, loaded with refugees."  Every player with 1 or more survivors at
  the colony must vote with a thumbs up or down.  The option with the most votes
  takes effect.'
options:
  - action:
      '"We don''t have much, but if your people are willing to pull their own
      weight we can give you a home.  For the winter at least.  After that
      you''re on your own."'
    result:
      Each player draws 1 survivor from the survivor deck and adds it to their
      following.  Each player also adds 1 helpless survivor to the colony.
  - action:
      '"I''m sorry we just can''t take on any more. You''re going to have to
      keep moving."'
    result: Their faces suggest they've heard those words too many times before.
      They look downward in acceptance and soon the truck is driving away. Three
      days later you find the truck collapsed on the side of the road. The
      people are gone, but blood is caked on the road.  Nothing happens.
vote: true
`;export{e as default};
