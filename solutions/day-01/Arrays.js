// Level 1

const countriess = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

// 1
let emptyArray = []
console.log(emptyArray)

// 2
let arrayWithMoreThanFive = Array(6).fill('X')
console.log(arrayWithMoreThanFive)

// 3
console.log(arrayWithMoreThanFive.length)

// 4
console.log(countriess[0])
console.log(countriess[((countriess.length)/2)-0.5])
console.log(countriess[countriess.length-1])

// 5
let mixedDataTypes = [1, 'Apple', true, 'Hello World!', 3.162]
console.log(mixedDataTypes)

// 6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7
console.log(itCompanies)

// 8
console.log(itCompanies.length)

// 9
console.log(itCompanies[0])
console.log(itCompanies[((itCompanies.length)/2)-0.5])
console.log(itCompanies[itCompanies.length-1])

// 10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[itCompanies.length-1])

// 11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[itCompanies.length-1].toUpperCase())

// 12
console.log(itCompanies.slice(0,itCompanies.length-1).toString()+' and '+itCompanies[itCompanies.length-1]+' are big IT companies.')

// 13
let company = 'Google'
existComapny = itCompanies.includes(company)
existComapny == true
  ? console.log(company)
  : console.log('Comapny does not exist')

// 14
console.log()

// 15
console.log(itCompanies.sort())

// 16
console.log(itCompanies.reverse())

// 17
console.log(itCompanies.slice(0,3))

// 18
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))

// 19
console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))

// 20
console.log(itCompanies)
console.log(itCompanies.shift())
console.log(itCompanies)

// 21
console.log(itCompanies.splice(2,2))
console.log(itCompanies)

// 22
console.log(itCompanies.pop())
console.log(itCompanies)

// 23
console.log(itCompanies.splice(0,itCompanies.length))
console.log(itCompanies)

