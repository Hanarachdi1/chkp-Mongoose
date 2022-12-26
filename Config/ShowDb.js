const Person = require("../Model/Model");

const showDB = () => {
  try {
    Person.find((error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = showDB;