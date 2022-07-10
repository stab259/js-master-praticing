'use strict'

const restaurant = {
  name: 'The best PIZAA',
  location: 'Danang city',
  categories: ['Sun', 'Cloud', 'Rain', 'Plant'],
  starterMenu: ['Orange', 'Strawberry', 'Pineapple', 'Mango'],
  mainMenu: ['Red Pizza', 'Blue Pizza', 'Yellow Pizza', 'Black Pizza'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    }
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


console.log('LOGICAL ASSIGNMENT OPERATORS');

/*
///////////////////////////////////////
// Logical Assginment Operators

const rest1 = {
  name: 'Best Grape Pizza',
  // numGuests: 25,
  numGuests: 0,
};

const rest2 = {
  name: 'Best Strawberry Pizza',
  owner: 'DD',
};


// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assginment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/


console.log('THE NULLISH COALESCING OPERATOR (??)');
/*
//////////////////////////////////
// The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nulish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

console.log('SHORT CIRCUITING (&&A ND ||)');
/*
///////////////////////////////////
// Short circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuting
console.log(3 || 'Nhien');
console.log('' || 'Nhien');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Nhien');
console.log(7 && 'Nhien');

console.log('Hello' && 23 && null && 'nhien');

// Pratical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

console.log('REST PATTERN AND PARAMETERS');
/*
///////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

console.log('THE SPREAD OPERATOR (...)');
/*
//////////////////////////////////
// The spread operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'White Pizza'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mainMenu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Nhien';
const letters = [...str, ' ', 'T.'];
console.log(letters);
console.log(str);
// console.log(`${...str} Tran`); //error

const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
]

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundIn: 2001,
  ...restaurant,
  founder: 'Stab259'
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurant.name = 'The best JUICE';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

console.log('DESTRUCTURING OBJECTS');
/*
/////////////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Nhien\'s home',
  mainIndex: 2,
  starterIndex: 2,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

console.log('DESTRUCTURING ARRAYS');
/*
//////////////////////////////////////
// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [main, , secondary] = restaurant.categories;

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/