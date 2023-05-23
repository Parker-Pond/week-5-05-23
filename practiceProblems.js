// Prompt #1: 
// In "the Hunger Games", there are 12 districts, each of which send a tribute to fight in the games. As the capital's resident web developer, you've been given the job of writing a program that can automatically read out the names of all hunger games contestants.

// Write a function called declareTributes that accepts one parameter called listOfTributes, which will be an array of objects. That parameter could receive an argument value like this: 


// Your function should output a new array, where each element is a string written in this format:

// [
    //   "Katniss Everdeen from District 12",
    //   "Cato from District 2"
    // ]
    
    // Use one of the array looping methods to solve this puzzle. 
    
    
    // let listOfTributes = [
    //     {
    //         name: "Katniss Everdeen",
    //         district: 12
    //     },
    //     {
    //         name: "Cato",
    //         district: 2
    //     }
    // ]

    // //TODO create a function which takes console.logs the name and district of each object

    // function announcement(list){
    //     list.forEach((tribute, idx) => {
    //         console.log(` ${tribute.name} from District ${tribute.district}`, idx)
            
    //     });
    // }

    // announcement(listOfTributes)

    //! Problem 2

//     Prompt #2: 
// You've finally secured a great programming job at a major toy company. Things have been going pretty smoothly, but this year there's been a big problem. It appears that due to a factory accident, there are some dangerous chemicals in some of the toys. 

// Write a function called removeFaultyToys that accepts one parameter called toyInventory, which you can expect will be an array of objects, where each object is a toy's individual details. That parameter could receive an argument value like this:


// Your function should return a new array with only the toys that do NOT contain any dangerous chemicals. 

// Use one of the array looping methods to solve this puzzle.
let toyInventory2023 = [
    {
        name: "Puzzle Game",
        containsChemicals: true
    },
    {
        name: "Fidget Spinner",
        containsChemicals: true
    },
    {
        name: "Teddy Bear",
        containsChemicals: false
    }
]
let cleanToys = []

function removeFaultyToys(){
    toyInventory2023.forEach((toyUnderScrutiny, idx)=> {
        if (toyUnderScrutiny.containsChemicals === false){
            cleanToys.push(toyUnderScrutiny)
        }
    })
    console.log (cleanToys)
}

removeFaultyToys(toyInventory2023)