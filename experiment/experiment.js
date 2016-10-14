
"use strict"

var fs = require('fs');
var csv = require("fast-csv");
var people_data = []
var data_final = []

class Person {
  constructor(obj){
    this.id = obj['id'];
    this.first_name = obj['first_name'];
    this.last_name = obj['last_name'];
    this.email = obj['email'];
    this.phone = obj['phone'];
    this.created_at = obj['created_at'];
  }
  // Look at the above CSV file
  // What attributes should a Person object have?
}

class PersonParser {
  constructor(file) {
    this._file = file
    this._people = null
  }

  get people() {
    // If we've already parsed the CSV file, don't parse it again
    // Remember: people is null by default
    // var people_data = []

    csv
     .fromPath(this._file)
     .on("data", function(data){
        //  console.log(data);
        people_data.push(new Person({
          id : data[0],
          first_name : data[1],
          last_name : data[2],
          email : data[3],
          phone : data[4],
          created_at : data[5]}))
        // console.log(people_data)
        //push

          // console.log(people_data[people_data.length-1])

     })
     .on("end", function(){
       parser.addPerson({
         id : "201",
         first_name : "syanmil",
         last_name : "putra",
         email : "syanmil@yahoo.com",
         phone : "1231231",
         created_at : "2016-10-03T12:00:00"})

       parser.addPerson({
         id : "202",
         first_name : "ken",
         last_name : "indradi",
         email : "ken@yahoo.com",
         phone : "1231231",
         created_at : "2016-10-03T12:10:08"})

        for(var i = 0 ; i < people_data.length ; i++){
          data_final.push(
            people_data[i].id + ", " +
            people_data[i].first_name + ", " +
            people_data[i].last_name + ", " +
            people_data[i].email + ", " +
            people_data[i].phone + ", " +
            new Date(people_data[i].created_at) + "\n"
          )
        }
        parser.save(data_final)
        console.log("selesai");
     });
    if (this._people)
      return this._people
    // We've never called people before, now parse the CSV file
    // and return an Array of Person objects here
    // Save the Array in the people instance variable.
  }

  addPerson(data) {
    // var obj = {}
    // obj['id'] = id
    // obj['first_name'] = first_name
    // obj['last_name'] = last_name
    // obj['email'] = email
    // obj['phone'] = phone
    // obj['created_at'] = created_at
    // var addbaru = new Person(obj)
    people_data.push(data);

    // console.log(obj['id'])
    // console.log(addbaru.people_data)
  }

  save(){
    // console.log(people_data)
    fs.writeFile('new-data-people.csv', data_final);
  }
}

let parser = new PersonParser('people.csv')

// console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
// console.log(`${parser.addPerson('201', 'ken', 'putra', 'kenduigraha@yahoo.com', '1-701-580-4789', '2016-10-22T10:09:03-08:00')}`)
// console.log(`${parser.people}`)
// parser.save()
console.log(parser.people)
