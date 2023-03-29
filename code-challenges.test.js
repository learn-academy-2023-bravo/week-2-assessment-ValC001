// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
describe("doesItPass", () => {
    it("Should return its divisible", () => {
        expect(doesItPass(15)).toEqual("It disvisible!")
    })
    it ("Should return its not divisible", ()=>{
        expect(doesItPass(0)).toEqual("Its not divisible!")
    })
})
// a) Create a test with expect statements for each of the variables provided.
const doesItPass =(number) => {
    if (number % 3===0){
        return `${number} is  divisible by three`
    }
    else if (number % 3!==0){
        return `${number} is not divisble by three`
    }
}
// b) Create the function that makes the test pass.
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
console.log(doesItPass(15))
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
console.log(doesItPass(0))
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
console.log(doesItPass(-7))



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// describe("randomNouns1", ()=> {
//  it ("All words to be capitlized."),()=>{
//    expect(capitalizedWord("streetlamp")).toBe("Streetlamp")
//    expect(capitalizedWord("potato")).toBe("Potato")
//    expect(capitalizedWord("teeth")).toBe("Teeth")
//    expect(capitalizedWord("conclusion")).toBe("Conclusion")
//  }
//  })




// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// describe("randomNouns2", ()=> {
//  it ("All words to be capitlized."),()=>{
//    expect(capitalizedWord("temperature")).toBe("Temperature")
//    expect(capitalizedWord("databse")).toBe("Databse")
//    expect(capitalizedWord("chopsticks")).toBe("Chopsticks")
//    expect(capitalizedWord("mango")).toBe("Mango")
//  }
//  })

// b) Create the function that makes the test pass.
// console.log(randomNouns2.toUppercase)
// console.log(randomNouns1.toUppercase)
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
