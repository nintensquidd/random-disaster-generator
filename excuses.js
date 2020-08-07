//the js file is called 'excuses.js' because i heavily modified a template so this is what we end up with idfk how to change it without breaking the thing
function Excuse() {

  //The format for this is "a 'adjective' 'beast' just 'action' 'building'!!!"
  //This variable is "beasts", what is causing the disaster.
  var beast = ['puppy', 'kitten', 'penguin', 'hamster', 'transformer', 'iguana', 'turtle', 'tornado', 'Tyler Blevins' , 'ghost', 'friendly neighbor', 'homer simpson', 'asteroid', 'mp4 file', 'log of feces', 'finger', 'arrow', 'cursor', 'crew sock'];
  //This variable is "actions", how the disaster is happening.
  var action = ['demolished', 'crumbled', 'destroyed', 'deleted', 'erased', 'made art out of', 'absolutely wrecked', 'went to town on', 'didnt like', 'beat up', 'terrorized', 'accidentally knocked over', 'borrowed', 'got envious over', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'dunked on', 'subteweeted', 'downvoted', 'blocked', 'goatsed','set fire to'];
  //This variable is "buildings", what the disaster is being done upon
  var building = ['empire state building', 'city of tokyo', 'eiffel tower', 'sears tower', 'chicago bean', 'st louis arch', 'entire state of wyoming', 'twighlight zone', 'twitter userbase', 'house at the end of the street', 'whole internet', 'important data place', 'dojima family building', 'eva unit 01', 'borders book store', 'sports field', 'fortnite server room', 'subreddit', 'post you just made', 'literal pizza hut', 'chromebook holder', 'gold mine'];
  //This variable is "adjectives", how big the beast is.
  var adjective = ['giant','enormous', ' huge', ' moderate in size', 'venti', 'super-size', 'terabyte of', 'life-sized', 'large portion of']
 
  function pickRandom(wordArray) {
    var lengthOfArray = wordArray.length - 1;
    var randomNumber = Math.round(Math.random() * lengthOfArray);
    return wordArray[randomNumber];
  }

  var newExcuse = ' a ' + pickRandom(adjective) + ' '+ pickRandom(beast) + ' just ' + pickRandom(action) + ' the ' + pickRandom(building) + '!!!';
  document.getElementById('excuses').innerHTML = newExcuse;

}