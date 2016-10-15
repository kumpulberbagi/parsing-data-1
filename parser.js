"use strict"
var csv = require("fast-csv");
const fs = require('fs');
var database = [];
var dataSave = [];
var datatoString =""

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

var data1 = new Person({
  id:212,
  first_name:'aji lantang',
  last_name:'mardika',
  email:'ajilantang@gmail.com',
  phone:085730607703,
  created_at : "2016-12-03T12:00:00"
})
var data2 = new Person({
  id:212,
  first_name:'mangku widodo',
  last_name:'widodo',
  email:'widodo@gmail.com',
  phone:085730623413,
  created_at : "2016-11-03T12:00:00"
})


class PersonParser {

  constructor(file) {
    this._file = file
    this._people = null
  }
  set people(value){
    return this.people = value
  }
  get size() {
    return database.length;
  }
  get people() {
    //don't parse csv file twice
    csv
    .fromPath(this._file)
    .on("data", function(data){
     database.push(new Person({id:data[0], first_name:data[1], last_name:data[2], email: data[3], phone:data[4],created_at:data[5]}))
    //console.log(database);
    })
   .on("end", function(){
     parser.addPerson(data1)
     parser.addPerson(data2)
     for(let idx=0; idx < database.length; idx++){
       datatoString += database[idx].id +","+database[idx].first_name+","+database[idx].last_name+","+database[idx].email+","+database[idx].phone+","+new Date(database[idx].created_at)+"\n";
       dataSave.push(datatoString)
    }
    // console.log(dataSave);
    //  console.log(datatoString);
    parser.save(dataSave);
    });
    if (this._people)
    return this._people;
    }
  addPerson(data)
  {
    //console.log(data);
    database.push(data)
  }
  save(){
    //console.log(dataSave);
    fs.writeFile('new_person_lantang.csv', dataSave);
    console.log("save");
  }
}

let parser = new PersonParser('people.csv')
 parser.save()
 // database.push(2)
 //file terbaca namun sizenya tidak ada , kalau di masukkan dalam class hasil sama . jadi untuk yang dibawah ini pasti size 0 atau length 0
console.log(`There are ${database.length} people in the file '${parser._file}'.`)
//console.log(`${parser.addPerson('201', 'aji', 'lantang', 'ajilantang@hacktiv8.com', '02177883109', '2016-16-22T10:00:03-08:00')}`)
console.log();
 console.log(parser.people)
 parser.save()
 "use strict"
 var csv = require("fast-csv");
 const fs = require('fs');
 var database = [];
 var dataSave = [];
 var datatoString =""

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

 var data1 = new Person({
   id:212,
   first_name:'aji lantang',
   last_name:'mardika',
   email:'ajilantang@gmail.com',
   phone:085730607703,
   created_at : "2016-12-03T12:00:00"
 })
 var data2 = new Person({
   id:212,
   first_name:'mangku widodo',
   last_name:'widodo',
   email:'widodo@gmail.com',
   phone:085730623413,
   created_at : "2016-11-03T12:00:00"
 })


 class PersonParser {

   constructor(file) {
     this._file = file
     this._people = null
   }
   set people(value){
     return this.people = value
   }
   get size() {
     return database.length;
   }
   get people() {
     //don't parse csv file twice
     csv
     .fromPath(this._file)
     .on("data", function(data){
      database.push(new Person({id:data[0], first_name:data[1], last_name:data[2], email: data[3], phone:data[4],created_at:data[5]}))
     //console.log(database);
     })
    .on("end", function(){
      parser.addPerson(data1)
      parser.addPerson(data2)
      for(let idx=0; idx < database.length; idx++){
        datatoString += database[idx].id +","+database[idx].first_name+","+database[idx].last_name+","+database[idx].email+","+database[idx].phone+","+new Date(database[idx].created_at)+"\n";
        dataSave.push(datatoString)
     }
     // console.log(dataSave);
     //  console.log(datatoString);
     parser.save(dataSave);
     });
     if (this._people)
     return this._people;
     }
   addPerson(data)
   {
     //console.log(data);
     database.push(data)
   }
   save(){
     //console.log(dataSave);
     fs.writeFile('new_person_lantang.csv', dataSave);
     console.log("save");
   }
 }

 let parser = new PersonParser('people.csv')
  parser.save()
  // database.push(2)
  //file terbaca namun sizenya tidak ada , kalau di masukkan dalam class hasil sama . jadi untuk yang dibawah ini pasti size 0 atau length 0
 console.log(`There are ${database.length} people in the file '${parser._file}'.`)
 //console.log(`${parser.addPerson('201', 'aji', 'lantang', 'ajilantang@hacktiv8.com', '02177883109', '2016-16-22T10:00:03-08:00')}`)
 console.log();
  console.log(parser.people)
  parser.save()
