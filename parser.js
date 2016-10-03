"use strict"

var csv = require("fast-csv");
const fs = require('fs');

class Person {
  constructor(property){
      this._id = property['id']
      this._firstName = property['firstName']
      this._lastName = property['lastName']
      this._email = property['email']
      this._phone = property['phone']
      this._createdAt = property['createdAt']
  }
  set id(value){this._id = value}
  get id(){return this._id}

  set firstName(value){this._firstName = value}
  get firstName(){return this._firstName}

  set lastName(value){this._lastName = value}
  get lastName(){return this._lastName}

  set email(value){this._email = value}
  get email(){return this._email}

  set phone(value){this._phone = value}
  get phone(){return this._phone}

  set createdAt(value){this._createdAt = value}
  get createdAt(){return this._createdAt}

}

var biodata = {
  id : 201,
  firstName : "Yoni",
  lastName : "Setiawan",
  email : "yonisetiawan@gmail.com",
  phone : "0899999999",
  createdAt : new Date()
}

var biodata1 = {
  id : 202,
  firstName : "Ahyana",
  lastName : "Rizky",
  email : "ahyana.rizky@gmail.com",
  phone : "08565656565",
  createdAt : new Date()
}

var database = []
var rewrite =""
class PersonParser {
  constructor(file) {
    this._file = file
    this._people = null
    this._database = [] // penerapan this tidak compatible untuk library ini
    this._result ="" // jika menggunakan ini akan ada item "undefined" di file hasil csv
  }
  set people(value){this._people = value}
  get people(){return this._people}
   file(){return this._file}

   getPeople() {
    // If we've already parsed the CSV file, don't parse it again
    // Remember: people is null by default
    csv.fromPath(this._file)
     .on("data", function(data){
       PersonParser.addPerson(new Person({id : data[0], firstName: data[1], lastName: data[2], email: data[3], phone: data[4], createdAt: data[5]}))
     }).on("end", function(data){
       PersonParser.addPerson(biodata) // Ternyata bisa menggunakan method static
       PersonParser.addPerson(biodata1)
       for(var i=0; i<database.length; i++){
         rewrite += `${database[i].id}, ${database[i].firstName}, ${database[i].lastName}, ${database[i].email}, ${database[i].phone}, ${database[i].createdAt} \n`
       }
       parser.save(rewrite)
     })
    // We've never called people before, now parse the CSV file
    // and return an Array of Person objects here
    // Save the Array in the people instance variable.
    this._people = database
  }

   static addPerson(value) {
    database.push(value)
  }

  save(value){
    fs.writeFile('parserized.csv', value)
  }
}

let parser = new PersonParser('people.csv')
parser.getPeople()
function string(){
  console.log(`There are ${parser.people.length} people in the file '${parser.file()}'.`)
}
  setTimeout(string, 1000)
