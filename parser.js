'use strict'

const csv = require('fast-csv');
const file = './people.csv';
var fs = require('fs');

class Person {
  constructor(component) {
    this.id = component['id'];
    this.first_name = component['first_name'];
    this.last_name = component['last_name'];
    this.email = component['email'];
    this.phone = component['phone'];
  }

}

var dataArr = [];


class PersonParser {
  constructor() {
    this.file = file;
    this.people;
    this.database = [];
  }

  set _database(value) {
    this.database = value
  }
  get database() {
    return this.database
  }

  // set getters
  get printPeople() {
    return this.database;
  }

  // people_yeay() {
  //   var _this = this;
  //   fs.createReadStream(file)
  //       .pipe(csv())
  //       .on('data', function(data){
  //           _this.database.push(data); // Add a row
  //       })
  //       .on('end', function(){
  //           console.log(_this.database);
  //           console.log('Read finished');
  //       })
  // }

  people() {
    let peopleData = [];
    let obj = this

    csv
      .fromPath(this.file)
      .on('data', function(data) {
        peopleData.push({
          id: Number(data[0]),
          first_name: data[1],
          last_name: data[2],
          email: data[3],
          phone: data[4],
          created_at: data[5]
        });
      })
      .on('end', function() {
        // return callback(peopleData)
        obj.addPerson(peopleData)
      });
  }

  get size() {
    return this.database.length;
  }

  addPerson(object) {
    this.database.push(object);
  }

  save() {

  }
}


// let parser = new PersonParser(file);

//parser.people_yeay();
// console.log(parser.database);
//console.log(parser.database)




// let test_data = parser.people(function(data) {

  // data.push({ id: 7,
  //   first_name: 'Wew',
  //   last_name: 'Waters',
  //   email: 'nonummy.ac.feugiat@diamSed.com',
  //   phone: '1-187-134-2333',
  //   created_at: '2013-11-01T06:08:44-07:00'
  // })

//   return data
//
// })
//
parser.people(function (data) { process_data(data) });
//
function process_data(data) {
  let new_data = data
  update_data(data)
  console.log(new_data);
}

function update_data(data) {
  csv.update(data)
}


// parser.people((tet) => {
//   console.log(tet);
// });
//
//parser.people[0];
// console.log(parser.database);
// // console.log(parser.database);
//
// // testing
//
let parser = new PersonParser(file)
parser.people();
console.log(parser.database)
// // console.log(parser);//console.log(`There are ${parser.people.size}`);
