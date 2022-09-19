const dogAge = [5, 2, 4, 1, 15, 8, 3];
const dogAge1 = [16, 6, 10, 5, 6, 1, 4];
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adultDogs = humanAges.filter(function (hage) {
    return hage > 18;
  });
  console.log(adultDogs);

  //   const avgAge =
  //     adultDogs.reduce((acc, adlt) => {
  //       return acc + adlt;
  //     }, 0) / adultDogs.length;

  const avgAge = adultDogs.reduce((acc, adlt, i, arr) => {
    return acc + adlt / arr.length;
  }, 0);

  console.log(avgAge);
};
*/

// Using chaining method
const calcAverageHumanAge = ages => {
  const avgDogAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(hage => hage > 18)
    .reduce((acc, adlt, i, arr) => acc + adlt / arr.length, 0);

  console.log(avgDogAge);
};

calcAverageHumanAge(dogAge);
