// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
//Pseudo code
// Write the test code. 
// Describe a test function called "doesItPass"
//It will take a value as an arguement
//If it passes it should say "Its Divisible", if not it should say "Its not divisible!"


// describe("doesItPass", () => {
//     it("Should return its divisible", () => {
//         expect(doesItPass(15)).toEqual("It disvisible!")
//     })
//     it ("Should return its not divisible", ()=>{
//         expect(doesItPass(0)).toEqual("Its not divisible!")
//     })
// })



// a) Create a test with expect statements for each of the variables provided.
//Psuedo Code
// Create an function called doesItPass
//create an if/else if statement that will run the variables and divide by 3.
//if numnber is divisible by 3 it should say "${number} is divisible by three"
// if not it should say "${number}is not divisible by three"


// const doesItPass =(number) => {
//     if (number % 3===0){
//         return `${number} is  divisible by three`
//     }
//     else if (number % 3!==0){
//         return `${number} is not divisble by three`
//     }
// }

// b) Create the function that makes the test pass.
// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// console.log(doesItPass(15))
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// console.log(doesItPass(0))
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
// console.log(doesItPass(-7))



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//Pseudo Code
// // Write the test code. 
// Describe a test function called "doesItPass"
//

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// describe("randomNouns1", ()=> {
//  it ("All words to be capitlized."),()=>{
//    expect(capitalizedWord("streetlamp")).toBe("Streetlamp")
//    expect(capitalizedWord("potato")).toBe("Potato")
//    expect(capitalizedWord("teeth")).toBe("Teeth")
//    expect(capitalizedWord("conclusion")).toBe("Conclusion")
//  }
//  })


const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// describe("randomNouns2", ()=> {
//  it ("All words to be capitlized."),()=>{
//    expect(capitalizedWord("temperature")).toBe("Temperature")
//    expect(capitalizedWord("databse")).toBe("Databse")
//    expect(capitalizedWord("chopsticks")).toBe("Chopsticks")
//    expect(capitalizedWord("mango")).toBe("Mango")
//  }
//  })

// b) Create the function that makes the test pass.
//Pseudo Code
// Since the string is already established I can just do .toUpperCase & it should return the string uppercase.
// console.log(randomNouns2.toUppercase)
// console.log(randomNouns1.toUppercase)
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//Pseudo Code 
//desribe a function called indexOfVowel
//It should take in a string and log the index of the first vowel.

// describe("indexOfVowel"), ()=> {
//     it ("Takes in a string and logs the index of the first vowel"), ()=> {
//         expect(vowelTester1("learn")).toBe(1)
//         expect(vowelTester2("academy")).toBe(0)
//         expect(vowelTester3("challenges")).toBe(2)
//     }
// }

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
//Create an array that stores all the vowels. 
// Create a for loop that checks where the vowels are and logs the first index
// I tried to use "||" so it can check three functions at the same time but it wouldn't work. 

const vowelIndex = ()=> {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < vowelTester1.length; i++) {
        if (vowels.includes(vowelTester1[i]||vowels.includes(vowelTester2[i]))) {
            return [i]
        }
    //          else if (vowels.includes(vowelTester2[i].toLowerCase())) {
    //             return [i]
    //         }
      }
}
console.log(vowelIndex(vowelTester1))
console.log(vowelIndex(vowelTester2))
console.log(vowelIndex(vowelTester3))
