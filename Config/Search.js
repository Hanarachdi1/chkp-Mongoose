const Person = require("../Model/Model");

const Search = (food, numberOfResults) => {
  const result = Person.find(
    { favoriteFoods: { $all: [food] } },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  )
    .sort({ name: 1 })
    .limit(numberOfResults);
  console.log(result);
};
module.exports = Search;
