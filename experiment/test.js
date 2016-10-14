'use strict'

const csv = require('fast-csv');
const file = './people.csv';

class Person {
  constructor(component) {
    this.id = component['id'];
    this.first_name = component['first_name'];
    this.last_name = component['last_name'];
    this.email = component['email'];
    this.phone = component['phone'];
  }

}

class PersonParser {
  constructor() {
    this.file = file;
    this.people;
    this.database = [];
  }

  // set getters
  get people() {
    let _this = this;
    csv
      .fromPath(this.file)
      .on('data', function(data) {
        _this.database.push({
          id: Number(data[0]),
          first_name: data[1],
          last_name: data[2],
          email: data[3],
          phone: data[4],
          created_at: data[5]
        });
      })
      .on('end', function() {
        //console.log(_this.database);
      });
  }

  get size() {
    return this.database.length;
  }

  addPerson(object) {
    this.database.push(new Person(object));
  }

  save() {
    
  }
}


let parser = new PersonParser(file);
parser.people;
console.log(parser.database);

// testing

// let parser = new PersonParser(file)
// parser.people;
// console.log(parser);//console.log(`There are ${parser.people.size}`);
