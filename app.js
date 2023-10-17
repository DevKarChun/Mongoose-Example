import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/person?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2", {useNewUrlParser: true});

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema)

const person = new Person ({
    name: "John",
    age: 45
});

// person.save();

const data = await Person.find({}, 'name')
console.log(data)

data.forEach((data) => {
  console.log(data.name)
})

const findJohn = await Person.findOne({ name: 'John' }, 'name').exec()
console.log(findJohn)