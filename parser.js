"use strict"
let csv = require("fast-csv");
const fs = require('fs');
let database= [];
let array_to_string ="";
class Person {
  constructor(person){
  this.userId = person['userId'];
  this.first_name = person['first_name'];
  this.last_name = person['last_name'];
  this.email = person['email'];
  this.phone = person['phone'];
  this.created_at = person['created_at'];
  }
}
let person = new Person({
  userId:201,
  first_name:'toni',
  last_name:'chen',
  email:'tony_chen93@yahoo.com',
  phone:08974237854,
  created_at:201511028700

})

let person1 = new Person({
  userId:202,
  first_name:'Tama',
  last_name:'Adhi',
  email:'tama@tamatamvan.web.id',
  phone:085695434151,
  created_at:201511028700

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
      database.push(new Person({userId: data[0], first_name: data[1], last_name: data[2], email:data[3], phone: data[4], created_at: data[5]}))
     })
     .on("end", function(){
       parser.addPerson(person)
      parser.addPerson(person1)
       for(let idx in database){
         array_to_string += database[idx].userId +","+database[idx].first_name+","+database[idx].last_name+","+database[idx].email+","+database[idx].phone+","+new Date(database[idx].created_at)+"\n";
       }
       console.log(array_to_string);
       parser.save(array_to_string);
     });
    if (this._people)
      return this._people;
  }

  addPerson(person)
  {
    database.push(person)
  }
  save(array_to_string){
    fs.writeFile('new_person.csv', array_to_string);
  }
}

let parser = new PersonParser('people.csv');
parser.people;
