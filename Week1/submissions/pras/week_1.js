// Week 1 coding challenge

class Counter {
    constructor() {
        this.count = 0;
    }
    next = () => {
        return ++this.count;
    }
    current = () => {
        return this.count;
    }
}

// Counter()
// Counter.current()

const counter = new Counter()

console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())


// My trial
class MyCounter {
    constructor() {
        this.number = 0
    }
    givme_next = () => {
        return ++this.number
    }
    givme_current = () => {
        return this.number
    }
}


let my_counter = new MyCounter()
console.log(my_counter.givme_next())
console.log(my_counter.givme_current())
console.log(my_counter.givme_next())
console.log(my_counter.givme_current())
console.log(my_counter.givme_next())


class HumanProfile {
    constructor(my_name, my_age) {
        this.name = my_name;
        this.age = my_age;
    }

    get_details() {
        return `Your name is ${this.name} and you're ${this.age} years old. Enjoy life bud!`
    }
}

const Pras = new HumanProfile("Pras", 26)

console.log(Pras.get_details())


// Coding challenge week 1

class RemoveCheckString {
    /** ToDo **/
    // constructor(sentence, stringToRemove) {
    //     this.sentence = sentence;
    //     this.string = stringToRemove;
    // }

    removeString(stringToRemove, mySentence) {
      // Pass a string along with the sentence to remove it
      return mySentence.replace(stringToRemove, '');
    }

    checkCompleteSentence(mySentence) {
      // Check if the first letter of the first word in the sentence is Uppercase
      // Check if the last letter of the sentence ends with .
      if (mySentence[0] == mySentence[0].toUpperCase() && mySentence.slice(-1) == ".") {
          return true;
      } else {
        return false;
      }
    }

    showWordCount(mySentence) {
        var wordMap = {};
        var wordsArray = mySentence.split(" ");
        console.log(wordsArray)

        for (var i = 0; i < wordsArray.length; i++) {
            var word = wordsArray[i];
            // if this word is not already a property of the wordCounts object, create it with the value of 1
            if (!wordMap[word]) {
                wordMap[word] = 1
            } else {
                // if this word IS already a property of wordCounts, then increase its count value
                wordMap[word]++
            }
        }

        return wordMap
    }

  }

// Using var instead of const or let so I can reuse it.
var mySentence = "This is not fine."
var stringToRemove = "not "

var result = new RemoveCheckString();

// Returns "This is fine"
console.log(result.removeString(stringToRemove, mySentence))
// Returns true
console.log(result.checkCompleteSentence(mySentence))

// Sentence does not end with .
var notAProperSentence = "This is not fine"

var result = new RemoveCheckString();

// Returns false
console.log(result.checkCompleteSentence(notAProperSentence))

// Some repeated words
var notAProperSentence = "This is not fine but maybe it is fine"

var result = new RemoveCheckString();

// Returns { This: 1, is: 2, not: 1, fine: 2, but: 1, maybe: 1, it: 1 }
console.log(result.showWordCount(notAProperSentence))
