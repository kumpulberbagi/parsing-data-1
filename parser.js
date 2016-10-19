"use strict"

var fs = require('fs')
var csv = require('fast-csv')
var dataPerson = [];
var temp ="";

class Person  {
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
      fs.createReadStream(this._file)
        .pipe(csv())
        .on('data',function(data){
          dataPerson.push(new Person(data[0], data[1], data[2], data[3], data[4], data[5]))
        })
        .on('end',function(data){
          parser.addPerson(new Person(201,"yoni1","setiawan","yoni@gmail.com","0345345345",new Date()))
          parser.addPerson(new Person(202,"yoni2","setiawan","yoni@gmail.com","0345345345",new Date()))
          parser.addPerson(new Person(203,"yoni3","setiawan","yoni@gmail.com","0345345345",new Date()))
          // parser.addPerson(new Person(204,"yoni4","setiawan","yoni@gmail.com","0345345345",new Date()))
          for(var i=0;i<dataPerson.length;i++) {
            temp += dataPerson[i].id +","+dataPerson[i].first_name+","+dataPerson[i].last_name+","+dataPerson[i].email+","+dataPerson[i].phone+","+new Date(dataPerson[i].created_at)+"\n";
          }
       console.log(temp);
       parser.save(temp);
        })
        if (this._people)
          return this._people
  }
  addPerson(x) {
    dataPerson.push(x)
  }
  save(temp){
    fs.writeFile('people.csv', temp);
  }
}
let parser = new PersonParser('people.csv')
parser.people
