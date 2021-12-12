let total = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43].reduce(
  (previousValue, currentValue) => {
    if (currentValue >= 18) {
      currentValue + previousValue;
    } else {
      currentValue = 0;
    }
    return currentValue + previousValue;
  },
  0
);

console.log(total);

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
const getAverageAge = users.reduce(function (a, b) {
  return a.age / 2 + b.age / 2;
});
console.log(getAverageAge);
