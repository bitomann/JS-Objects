//Objects
// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.
const car = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    year: "2015"
}
console.log(car.color, car.year, car.make, car.model)

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
console.log("The names of all the animals in the shelter are:", animalNames)

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
const Dad = {
    name: "Bito",
    age: 44,
    gender: "male"
}

const Mom = {
    name: "Angela",
    age: 36,
    gender: "female"
}
const familyMembers = [Mom, Dad]
console.log(familyMembers)


// Dot Notation
// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`The wardrobe Height is ${wardrobe.height}.`, `The wardrobe Manufacturer was ${wardrobe.manufacturer}.`, `The wardrobe contains ${wardrobe.contents}.`, `The wardrobe Dimensions are ${wardrobe.depth}`, `x ${wardrobe.width}.`)


// Square Bracket Notation
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`The dimensions of The Empire State Building are as follows: It has ${empireStateBuilding.stories} stories,` ,`It is ${empireStateBuilding.height} tall,`, `has ${empireStateBuilding.squareFeet} sqr ft,`, `${empireStateBuilding.eastWestLength} feet to the W and E,`, `${empireStateBuilding.northSouthLength} to the N and S.`)

const empireStateBuildingRemaining5 = {
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    architect: "Shreve, Lamb & Harmon"
}
console.log(empireStateBuildingRemaining5[constructionDate], empireStateBuildingRemaining5[cost], empireStateBuildingRemaining5[owner], empireStateBuildingRemaining5[architect])



// Arrays as Values
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}


