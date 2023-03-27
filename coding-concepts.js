// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
 console.log(cohort.split(""))

// a) Your answer: Its going to print "B","R","A","V","O", "2","0","2","3"
// b) Verify and explain: This converts a string into an array with either spaces or "-" in between

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: It should print out "Hello, LEARN student."
// b) Verify and explain:It printed out "undefined"

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:It should print out the numbers sum multiplied by 2
// b) Verify and explain: It printed out what I expected because map()creates a new array from calling a function for every array element. In this problem it does it so number*2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: I think it will print out either 0 or only the odd numbers in the array.
// b) Verify and explain: It printed out the odd numbers. Same thing with the previous question but instead it uses filter. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: It should print out what is at index 0 for languages
// b) Verify and explain: It printed out "Javascrpt". The reason it prints out Javascript is because console.log asks for the variable thats at index 0 in language line

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It should print out George Bravo 2023
// b) Verify and explain: It printed out student:`George, cohort:`Bravo`, year:`2023`.