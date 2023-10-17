const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/person", {useNewUrlParser: true});

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema)

const person = new Person ({
    name: "John",
    age: 45
});

person.save();