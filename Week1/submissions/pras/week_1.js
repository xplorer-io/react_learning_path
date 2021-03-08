class RemoveCheckString {
  returnString(mySentence) {
    return mySentence;
  }
  removeString(stringToRemove, mySentence) {
    // Pass a string along with the sentence to remove it
    return mySentence.replace(stringToRemove, "");
  }
  checkCompleteSentence(mySentence) {
    // Check if the first letter of the first word in the sentence is Uppercase
    // Check if the last letter of the sentence ends with .
    if (
      mySentence[0] == mySentence[0].toUpperCase() &&
      mySentence.slice(-1) == "."
    ) {
      return true;
    } else {
      return false;
    }
  }
  showWordCount(mySentence) {
    var wordMap = {};
    var wordsArray = mySentence.split(" ");

    for (var i = 0; i < wordsArray.length; i++) {
      var word = wordsArray[i];
      // if this word is not already a property of the wordCounts object, create it with the value of 1
      if (!wordMap[word]) {
        wordMap[word] = 1;
      } else {
        // if this word is already a property of wordCounts, then increase its count value
        wordMap[word]++;
      }
    }
    return wordMap;
  }
}

// Using var instead of const or let.
var result = new RemoveCheckString();

var mySentence = "this is not fine but maybe it is fine";
var stringToRemove = "not ";
console.log(`My sentence: ${mySentence}`);
// Returns "This is fine"
console.log(
  "After removing the string:",
  result.removeString(stringToRemove, mySentence)
);
// Returns true
const correctSentence = result.checkCompleteSentence(mySentence);
if (correctSentence) {
  console.log("Correct Sentence.");
} else {
  // Correct the sentence
  console.log(
    "I am correcting the sentence here. Also log the correct sentence."
  );
}
// Returns false
console.log(
  "Is my sentence complete? ",
  result.checkCompleteSentence(mySentence)
);
// Some repeated words
console.log("Repetitive words: ", result.showWordCount(mySentence));
