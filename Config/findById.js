const Person = require("../Model/Model");

const findById = (id) => {
  Person.findById(id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
};

module.exports = findById;