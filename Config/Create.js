const Person = require("../Model/Model");

// creating new person

const create = async (name, age, favoriteFoods) => {
  try {
    const person = new Person({
      name,
      age,
      favoriteFoods,
    });
    await person.save();
    console.log("data added successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = create;