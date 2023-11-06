const o=`title: LORETTA CLAY
trigger: If the player controls Loretta and she is not exiled
context: '"Where did we find these cans?" Loretta says angrily.  "I have
  almost thirty cans well past their expiration date.  If you hunters don''t do
  your job and look, then it messes everything up.  We were counting on this
  food!"'
options:
  - action: Loretta cooks the food anyway.
    result:
      Roll a die.  On a result of 5 or higher the food is not only good, but
      Loretta does an exceptional job of preparing it. Gain 1 morale.  On a
      result of 3-4 the food isn't any worse than usual.  Nothing happens.  On a
      result of 1-2, food poisoning runs rampant through the colony.  Every
      non-helpless survivor at the colony must roll a die.  On a result of 1-2
      they receive 1 wound.
  - action: She swears angrily and throws the cans out.
    result: Remove 1 food from the supply.
`;export{o as default};
