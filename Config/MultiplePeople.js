const Person = require("../Model/Model");


const MultiplePeople = async (arrayOfPeople) => {
  try {
    await Person.create(arrayOfPeople);
    console.log("data added successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = MultiplePeople;