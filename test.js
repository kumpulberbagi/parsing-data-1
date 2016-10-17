'use stict'

const fs = require('fs');
const R = require('ramda');

let transform = (arr) => {
  arr = {
    id: arr[0],
    first_name: arr[1],
    last_name: arr[2],
    email: arr[3],
    phone: arr[4],
    created_at: arr[5]
  }
  return arr;
}

/////////////////////////////////////////
//////////////Class
//////////////////////////////////////////
class Person {
  constructor(component) {
    this.id = component['id'];
    this.first_name = component['first_name'];
    this.last_name = component['last_name'];
    this.email = component['email'];
    this.phone = component['phone'];
    this.created_at = component['created_at'];
  }
}


class PersonParser {

  constructor(file) {
    this.file_reading = fs.readFileSync(file).toString().split('\n');
    this.split = R.map(obj => obj.split(","), this.file_reading);
    this._file = R.map(obj => transform(obj), this.split);
    this.db = [this._file];
    this.file = file
    this._people = null
    this.length = this.db[0].length;
  }

  get people() {
    return this;
  }

  get size() {
    return this.length;
  }

  addPerson(person) {
    this.db[0].push(person)
  }

  save(arr) {
    fs.writeFile('people.csv', db);
  }

}


let parser = new PersonParser('people.csv')
console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
