var sentence = prompt("Enter your name:")

function capitalize(sentenceAsk){
  var oneSentence = sentenceAsk.charAt(0).toUpperCase();
  var twoSentence = sentenceAsk.charAt(sentenceAsk.length-1).toUpperCase();
  var firstLast = oneSentence + twoSentence;
  var split = firstLast.split("");
  var reverse1 = split.reverse("");
  var join = reverse1.join("");

return join;
console.log (join);

};

// var codedSentence = sentence.capitalize();

$("#original").click(function(){
  alert(sentence)});

$("#coded").click(function(){
  alert(sentence2)
  });

var sentence2 = capitalize(sentence);

// document.write(capitalize(sentence));

// var reverse =
