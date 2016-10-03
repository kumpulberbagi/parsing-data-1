"use strict"

var fs = require('fs')
var csv = require('fast-csv')
var dataPerson = [];
var temp ="";

class Person  {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(id,first_name,last_name,email,phone,created_at) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.phone = phone
    this.created_at = created_at
  }



}


class PersonParser {

  constructor(file) {
    this._file = file
    this._people = null
  }

  get people() {
    // If we've already parsed the CSV file, don't parse it again
    // Remember: people is null by default


      fs.createReadStream(this._file)
        .pipe(csv())
        .on('data',function(data){
          // console.log(data[0])
          // console.log("test");



          dataPerson.push(new Person(data[0], data[1], data[2], data[3], data[4], data[5]))
          // dataPerson.push(console.log()
          // dataPerson.push(data[0], data[1], data[2], data[3], data[4], data[5]))
          // console.log(data[0]);
        })
        .on('end',function(data){
          parser.addPerson(new Person(205,"dharmadi","ddd","dharmadi93@gmail.com",123,"2012-05-10T03:53:40-07:00"))
          parser.addPerson(new Person(206,"alexander","lala","dharmadi93@gmail.com",123,"2012-05-10T03:53:40-07:00"))

          for(var i=0;i<dataPerson.length;i++) {
            temp += dataPerson[i].id +","+dataPerson[i].first_name+","+dataPerson[i].last_name+","+dataPerson[i].email+","+dataPerson[i].phone+","+new Date(dataPerson[i].created_at)+"\n";
          }

       console.log(temp);
       parser.save(temp);
        })

        if (this._people)
          return this._people

    // We've never called people before, now parse the CSV file
    // and return an Array of Person objects here
    // Save the Array in the people instance variable.
  }

  addPerson(x) {
    dataPerson.push(x)
  }

  save(temp){
    fs.writeFile('people.csv', temp);
  }


}

// var ws = fs.createWriteStream('people.csv')
//
// csv.
//   write([
//     ["201","Dharmadi","Tanamas","dharmadi93@gmail.com","1-234-567-8910","2012-05-10T03:53:40-07:00"]
//   ])
//   .pipe(ws)




// var basicCSV = require("basic-csv");
//
// basicCSV.readCSV("people.csv", function (error, rows) {
//   console.log(rows); // displays a nested array of arrays
// });
//
//
// console.log(basicCSV);
// var personOne = new Person(201,"dharmadi","ddd","dharmadi93@gmail.com",123,"2012-05-10T03:53:40-07:00")
let parser = new PersonParser('people.csv')
// console.log(parser.people);
parser.people



console.log(dataPerson);

// console.log(dataPerson);
// console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
