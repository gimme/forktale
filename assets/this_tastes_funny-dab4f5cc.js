const e=`title: THIS TASTES FUNNY
trigger: If at any time any player takes a drink
context: Been a long time since you had a real drink, and you-know-who returned
  with a lovely bottle just yesterday.  They kept showing it to you, but never
  offered to share.  Typical! So you stole it when they left for the
  day.  Serves 'em right, only now you feel sick and your mouth tastes like
  blood.  Was it poisoned? Have you been set up?
options:
  - action: You brought this on yourself and suffer in silence.
    result:
      The player that took a drink must choose a survivor he controls. Roll
      the exposure die 3 times, and apply the results to the chosen survivor.
  - action: You wait for your poisoner to return and strangle them in their sleep.
    result: Sure enough, you find a small vial on them filled with a mysterious
      fluid.  You drink it, praying it's an antidote.  The player that took a
      drink must choose a survivor they do not control.  Kill the chosen
      survivor.
`;export{e as default};
