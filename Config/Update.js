const Person = require("../Model/Model");

const Update = (id, newData) => {
  Person.findById(id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      data.favoriteFoods.push(newData);
      data.save((error, updated) => {
        if (error) {
          console.log(error);
        } else {
          console.log(
            updated +
              " document has been updated" +
              `, ${newData} has been added`
          );
        }
      });
    }
  });
};

module.exports = Update;