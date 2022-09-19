const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia1 = [9, 16, 6, 8, 3];
const dogsKate1 = [10, 5, 6, 1, 4];

const checkDogs = function (_dogsJulia, _dogsKate) {
  let dogJulia = _dogsJulia.slice();
  dogJulia = dogJulia.splice(1, 2);
  const dogsArr = [...dogJulia, ..._dogsKate]; // or we can use concat method
  console.log(dogsArr);
  dogsArr.forEach(function (Age, i) {
    const dogsAge =
      Age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${Age} years old.`
        : `Dog number ${i + 1} is still a puppy🐶.`;
    console.log(dogsAge);
  });
};

checkDogs(dogsJulia, dogsKate);
console.log('---------------------------------------------');
checkDogs(dogsJulia1, dogsKate1);
