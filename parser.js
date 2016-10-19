"use strict"

"use strict"

const fs = require("fs");

class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(args){
    this.id = args['id'];
    this.first_name = args['first_name'];
    this.last_name = args['last_name'];
    this.email = args['email'];
    this.phone = args['phone'];
    this.created_at = args['created_at'];
  }
}

class PersonParser {

  constructor(file) {
    this._file = file;
    this._people = [];
  }

  get file(){
    return this._file;
  }

  set people(value){
    this._people[this._people.length] = value;
  }

  get people() {
    // If we've already parsed the CSV file, don't parse it again
    // Remember: people is null by default
    if (this._people){
      return this._people
    }


    // We've never called people before, now parse the CSV file
    // and return an Array of Person objects here
    // Save the Array in the people instance variable.
  }

  addPerson(value) {
    this.people[this.people.length] = value;
  }

  save(){
    var people_data = this.people;
    var new_data = "";

    for(let idx = 0; idx < people_data.length; idx++){
      let string_data = people_data[idx].id + "," + people_data[idx].first_name + "," + people_data[idx].last_name + "," + people_data[idx].email + "," + people_data[idx].phone + "," + people_data[idx].created_at;
      new_data += string_data + "\n";
    }

    fs.writeFile(this.file, new_data, (err) => {
        if(err) throw err;
        console.log('Success!');
      });

  }

}


let parser = new PersonParser('people.csv')
const csv = require("fast-csv");


csv.fromPath(parser.file)
 .on("data", function(data){
    let isi = {
      "id":data[0],
      "first_name":data[1],
      "lastname":data[2],
      "email":data[3],
      "phone":data[4],
      "created_at":data[5]
    };
    parser.addPerson(isi)
 })
 .on("end", function(){
     console.log(`There are ${parser.people.length - 1} people in the file '${parser.file}'.`)

     let new_data = {
      "id": parser.people.length,
      "first_name": "Alessandro",
      "last_name": "Leonardo ",
      "email": "alessandro@alessandro.com",
      "phone": "99999999",
      "created_at": new Date()
     };
     parser.addPerson(new_data)
     parser.save()
     console.log(`There are ${parser.people.length - 1} people in the file '${parser.file}'.`)
 });
