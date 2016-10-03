"use strict"
var csv = require("fast-csv");
const fs = require('fs');
let database = [];
let datatoString ="";//
// var csvStream = csv()
//     .on("data", function(data){
//          console.log(data);
//     })
//     .on("end", function(){
//          console.log("done");
//     });

//stream.pipe(csvStream);
class Person {
  constructor(person){
    this.id = person['id'];
    this.first_name = person['first_name'];
    this.last_name = person['last_name'];
    this.email = person['email'];
    this.phone = person['phone'];
    this.created_at = person['created_at'];
  }
  // Look at the above CSV file
  // What attributes should a Person object have?
}

let data1 = new Person({
  id:212,
  first_name:'aji lantang',
  last_name:'mardika',
  email:'ajilantang@gmail.com',
  phone:085730607703
})
let data2 = new Person({
  id:212,
  first_name:'mangku widodo',
  last_name:'widodo',
  email:'widodo@gmail.com',
  phone:085730623413
})


class PersonParser {

  constructor(file) {
    this._file = file
    this._people = null
  }

  get people() {
    csv
    .fromPath(this._file)
    .on("data", function(data){
     database.push({id:data[0], first_name:data[1], last_name:data[2], email: data[3], phone:data[4]})
     console.log(database);
    })
   .on("end", function(){
     parser.addPerson(data)
     parser.addPerson(data1)
     for(let idx in database){
       datatoString += database[idx].id +","+database[idx].first_name+","+database[idx].last_name+","+database[idx].email+","+database[idx].phone+","+new Date(database[idx].created_at)+"\n";
    }console.log(datatoString);
    parser.save(datatoString);
    });
    if (this._people)
    return this._people;
    }
  addPerson(person)
  {
    database.push(person)
  }
  save(datatoString){
    fs.writeFile('new_person.csv', datatoString);
  }
}

let parser = new PersonParser('people.csv')
console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
