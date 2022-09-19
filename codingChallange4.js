const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(dgs => (dgs.recFood = Math.trunc(dgs.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }.`
);

// 3.
const ownerEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
//   .flat();
console.log(ownerEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownerEatTooMuch.join(' and ')}'s dogs eat too much!`);

//5.
const dogEatRecFood = dogs.some(dgs => dgs.curFood === dgs.recFood);
console.log(dogEatRecFood);

// 6.

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

const dogEatOkayFood = dogs.some(checkEatingOkay);
console.log(dogEatOkayFood);

// 7.
const dogsEatOkayFood = dogs.filter(checkEatingOkay);
console.log(dogsEatOkayFood);

// 8.
const sortedByRecFood = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedByRecFood);
