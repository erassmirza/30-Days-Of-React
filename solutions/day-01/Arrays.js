import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

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
let existComapny = itCompanies.includes(company)
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

// Level 2

// 2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g,'').split(' ')
console.log(words)
console.log(words.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.length-2,1)
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.length-2,1,'Green Tea')
console.log(shoppingCart)

// 4
let coun = 'Ethiopia'
let checkCoun = countries.includes(coun)
checkCoun == true
  ? console.log(coun.toUpperCase())
  : console.log(countries.push(coun))

// 5
let webT = 'Sass'
let checkwebT = webTechs.includes(webT)
// console.log(checkwebT)
checkwebT == true
  ? console.log(`${webT} is a CSS preprocess`)
  : webTechs.push(webT)
console.log(webTechs)

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)