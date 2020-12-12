'use strict';

// lets us access the env variables
require('dotenv').config();

// brings in the mongoose library
const mongoose = require('mongoose');

// brings in the food model
const FoodCollection = require('./models/food-collection');

// new instance of my FoodCollection
const foodInstance = new FoodCollection();

// const MONGOOSE_URI = 'mongodb://localhost:27017/food';
const options = { useNewUrlParser: true, useUnifiedTopology: true }

// connect to mongoose
mongoose.connect(process.env.MONGOOSE_URI, options);

<<<<<<< HEAD
const doDataStuff = async () => {
=======
// create an async function
const doDataStuff = async() => {
>>>>>>> f053a2f025a4c8a70c70f1ab5324022265ea7a6c
  let carrot = {
    name: 'Carrot',
    calories: 25,
    type: 'VEGETABLE'
  };

  // save into the collection
  let newFood = await foodInstance.create(carrot);
  console.log('Food Created', newFood);

  // get one food
  let oneFood = await foodInstance.get(foodInstance._id);
  console.log('One Food', oneFood);

  // get all things from a collection
  let allFood = await foodInstance.get();
  console.log('All Food', allFood);

  // disconnect from Mongo
  mongoose.disconnect();
}

doDataStuff();
