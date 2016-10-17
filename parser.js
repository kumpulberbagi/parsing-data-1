"use strict"

var fs = require('fs')
var csv = require('fast-csv')
var dataPerson = [];
var dataString ="";

class Person  {
  // Look at the above CSV file
  constructor(id,first_name,last_name,email,phone,created_at) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.phone = phone
    this.created_at = created_at
  }

}

var data1 = {
  id:212,
  first_name:'aji lantang',
  last_name:'mardika',
  email:'ajilantang@gmail.com',
  phone:085730607703,
  created_at : "2016-12-03T12:00:00"
}
var data2 = {
  id:204,
  first_name:'mangku widodo',
  last_name:'widodo',
  email:'widodo@gmail.com',
  phone:085730623413,
  created_at : "2016-11-03T12:00:00"
}

class PersonParser {

  constructor(file) {
    this._file = file;
    this._people = null;

  }

  get getData(){
    return this.data;
  }

  get people() {
    // If we've already parsed the CSV file, don't parse it again
      fs.createReadStream(this._file)
        .pipe(csv())
        .on('data',function(data){
          // console.log(data[0])
          // console.log("test");
          dataPerson.push(new Person(data[0], data[1], data[2], data[3], data[4], data[5]))
        })
        .on('end',function(data){
          parser.addPerson(data1)
          parser.addPerson(data2)

          for(var i=0;i<dataPerson.length;i++) {
            dataString += dataPerson[i].id +","+dataPerson[i].first_name+","+dataPerson[i].last_name+","+dataPerson[i].email+","+dataPerson[i].phone+","+new Date(dataPerson[i].created_at)+"\n";
          }
        console.log(dataString);
       parser.save(dataString);
        })
        if (this._people)
          return this._people
    // Save the Array in the people instance variable.
    }

    get size() {
      return dataPerson.length;
    }

    addPerson(x) {
      dataPerson.push(x)
      // parser.people
      this.save(x)
    }

    save(temp){
      fs.writeFile('new_person_lantang.csv', temp);
    }


}

let parser = new PersonParser('people.csv')
parser.addPerson({
  id:205,
  first_name:'mangku widodo',
  last_name:'widodo',
  email:'widodo@gmail.com',
  phone:085730623413,
  created_at : "2016-11-03T12:00:00"
})
parser.save({
  id:205,
  first_name:'mangku widodo',
  last_name:'widodo',
  email:'widodo@gmail.com',
  phone:085730623413,
  created_at : "2016-11-03T12:00:00"
})
 parser.people
