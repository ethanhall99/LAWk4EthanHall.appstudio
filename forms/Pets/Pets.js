let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(petNames)

let addName = "Sal"

// symbolic link
let withSal = petNames
withSal.push(addName)

console.log(`The third pet names is ${petNames[2]}.`)
console.log(`The array has ${petNames.length} names in it.`)
console.log(petNames)

petNames.pop()
console.log(petNames)