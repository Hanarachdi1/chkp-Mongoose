const Person = require("../Model/Model");

const deleted = async (nameDelete) => {
  try {
    await Person.remove({ name: nameDelete });
    console.log("person with the name " + nameDelete + " deleted");
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleted;