// Trick-1: Remove duplicates from an Array!
const array = [1, 2, 3, 2, 1, true, true, false, 'Ratul', 1, 5]
const filtered__array = [...new Set(array)];
console.log(filtered__array)

// Trick-2: Turn a Decimal Number to a integer.
const number = 23.6565
console.log(number | 0)

// Trick-3: Getting the Last Value of an Array!
const array = [1, 2, 3, 4, 5]
const last_Item = array.slice(-1)
console.log(last_Item)

// Trick-4: Get a random index value from an array.
const participants = ["Ratul", "George", "July", "Padrik", "G"]
const winner = participants[Math.floor(Math.random() *  participants.length)]

// Trick-5: Detect the most lengthy word in an array
const array = ['Apple', 'Pine-apple', 'Banana', 'Jack-fruit']
let most_lengthy_string = ''
array.forEach((item) => {
  if(item.length > most_lengthy_string.length) {
    most_lengthy_string = item
  }
})
console.log(most_lengthy_string)