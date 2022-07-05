'use strict'

const restaurant = {
  name: 'The best PIZAA',
  location: 'Danang city',
  categories: ['Sun', 'Cloud', 'Rain', 'Plant'],
  starterMenu: ['Orange', 'Strawberry', 'Pineapple', 'Mango'],
  mainMenu: ['Red Pizza', 'Blue Pizza', 'Yellow Pizza', 'Black Pizza'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [main, , secondary] = restaurant.categories;

const temp = main;
main = secondary;
secondary = temp;

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p, q, r] = [8, 9];
console.log(p, q, r);