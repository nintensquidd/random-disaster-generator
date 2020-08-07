function Excuse() {

  var myDog = ['puppy', 'kitten', 'penguin', 'hamster', 'transformer', 'iguana', 'turtle', 'tornado', 'Tyler Blevins' , 'ghost', 'friendly neighbor', 'homer simpson', 'asteroid', 'mp4 file', 'log of feces', 'finger', 'arrow', 'cursor', 'crew sock'];
  
  var ate = ['demolished', 'crumbled', 'destroyed', 'deleted', 'erased', 'made art out of', 'absolutely wrecked', 'went to town on', 'didnt like', 'beat up', 'terrorized', 'accidentally knocked over', 'borrowed', 'got envious over', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'dunked on', 'subteweeted', 'downvoted', 'blocked', 'goatsed'];
  
  var myHomework = ['empire state building', 'city of tokyo', 'eiffel tower', 'sears tower', 'chicago bean', 'st louis arch', 'entire state of wyoming', 'twighlight zone', 'twitter userbase', 'house at the end of the street', 'whole internet', 'important data place', 'dojima family building', 'eva unit 01', 'borders book store', 'sports field', 'fortnite server room', 'subreddit', 'post you just made', 'literal pizza hut', 'chromebook holder'];

  function pickRandom(wordArray) {
    var lengthOfArray = wordArray.length - 1;
    var randomNumber = Math.round(Math.random() * lengthOfArray);
    return wordArray[randomNumber];
  }

  var newExcuse = ' a giant ' + pickRandom(myDog) + ' just ' + pickRandom(ate) + ' the ' + pickRandom(myHomework) + '!!!';
  document.getElementById('excuses').innerHTML = newExcuse;

}