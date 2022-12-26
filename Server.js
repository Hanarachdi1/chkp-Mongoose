const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const Person = require("./Model/Model");
const newUpdate = require("./config/newUpdate");
const removeByID = require("./config/removeByID");
const deletePerson = require("./config/removeMany");
const Search = require("./Config/Search");
const create= require("./config/Create");
const MultiplePeople = require("./config/MultiplePeople");
const showDB = require("./config/ShowDb");
const findOne = require("./config/findOne");
const findById = require("./config/findById");
const classcUpdate = require("./config/Update");


//database connection

//connectDB();

//creating one Person

//create("ahmed", 31, ["pizza", "burger", "pasta"]);

//Multiple People
/*
 MultiplePeople([
  { name: "ghassen", age: 31, favoriteFoods: ["pizza", "burger", "pasta"] },
  { name: "ali", age: 25, favoriteFoods: ["marshmellow", "coke", "pizza"] },
  {
    name: "alex",
    age: 29,
    favoriteFoods: ["sea food", "chicken", "french fries"],
  },
  { name: "issam", age: 18, favoriteFoods: ["banana", "rice", "pasta"] },
]);
*/

//showing database

//showDB();

//finding one person

//findOnePerson(;

//finding By ID

//findById("");

//classcUpdate("");

//newUpdate(");

//removeByID("");

//delete("");

//Search("");

const port = process.env.PORT;

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server running on port: ${port}!`)
);