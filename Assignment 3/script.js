(function()
{
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  for (let i = 0; i < names.length; ++i) 
  {
    var n = names[i].toUpperCase();
   var firstLetter = n.charAt(0);
    if (firstLetter == 'J') 
    {
      byeSpeaker.speak(names[i]);
    } else {
     helloSpeaker.speak(names[i]);
    }
  }
})();