function Excuse() {

  var myDog = ['puppy', 'kitten', 'penguin', 'hamster', 'transformer', 'iguana', 'turtle', 'tornado', 'bro', 'ghost', 'friendly neighbor', 'homer simpson', 'asteroid', 'mp4 file', 'log of feces', 'finger', 'arrow', 'cursor', 'crew sock'];
  
  var ate = ['demolished', 'crumbled', 'destroyed', 'deleted', 'erased', 'made art out of', 'absolutely wrecked', 'went to town on', 'didnt like', 'beat up', 'terrorized', 'accidentally knocked over', 'borrowed', 'got envious over', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'dunked on', 'subteweeted', 'downvoted', '', 'pinned', 'vlogged', 'blogged about'];
  
  var myHomework = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post', 'comment'];

  function pickRandom(wordArray) {
    var lengthOfArray = wordArray.length - 1;
    var randomNumber = Math.round(Math.random() * lengthOfArray);
    return wordArray[randomNumber];
  }

  var newExcuse = 'a giant'+ pickRandom(myDog) + pickRandom(ate) + 'the' + pickRandom(myHomework) + '!!!';
  document.getElementById('excuses').innerHTML = newExcuse;

}