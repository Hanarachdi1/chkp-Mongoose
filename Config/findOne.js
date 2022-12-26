const Person = require("../Model/Model");

const findOne = (food) => {
  Person.findOne({ favoriteFoods: { $all: [food] } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
};

module.exports = findOne;