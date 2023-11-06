const e=`title: NO PLACE LEFT IN THE WORLD
trigger: If the player performs a search action with a non-exiled survivor
context: >-
  The old woman lies on the sidewalk, her breathing labored, her vision distant.
  You approach cautiously, but see that she's alive. "Are you okay?" you ask. 

  "Oh, don't mind me," she replies in a hushed voice. "Don't mind me. Got none of my medicine left. I got no place left in this world. It's not mine anymore." You see the photograph she clutches to her chest. In the photo she is many years younger, and she stands there smiling, held by a handsome young man.
options:
  - action: '"Come back with me," you say. "My friends and I might be able to help."'
    result:
      Place 1 helpless survivor token at the colony and equip this card to the
      searching survivor. At the beginning of each turn, as long as their is at
      least 1 helpless survivor at the colony you may place 1 <Medicine> card in
      the waste pile without triggering its effect. If you do, remove all
      despair tokens from survivors you control. If you do not, kill 1 helpless
      survivor (losing 1 morale) and discard this card. If their are no helpless
      survivors at the colony discard this card.
  - action: '"I''m so sorry," you say. She smiles politely, and you walk away.'
    result: Place 1 despair token on the searching survivor.
`;export{e as default};
