import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  people = [
    { firstname: "Anna", lastname: "Annik", age: 21, address: "Estonia"},
    { firstname: "Birgit", lastname: "Beež", age: 19, address: "Latvia"},
    { firstname: "Carolin", lastname: "Cipris", age: 18, address: "Estonia"},
    { firstname: "Diana", lastname: "Diivan", age: 25, address: "Estonia"},
    { firstname: "Eduard", lastname: "Ernsto", age: 29, address: "Estonia"},
    { firstname: "Friedrich", lastname: "Faust", age: 23, address: "Estonia"},
    { firstname: "Gustav", lastname: "Gross", age: 32, address: "Estonia"},
    { firstname: "Harri", lastname: "Hoop", age: 21, address: "Estonia"},
    { firstname: "Ilmar", lastname: "Iisak", age: 25, address: "Estonia"},
    { firstname: "Joonas", lastname: "Jutt", age: 26, address: "Latvia"},
  ]

  constructor() { }

  removeAll() {
    this.people = [];
    }

  removeOne(index) {
    this.people.splice(index,1);
    }

  addOne(human) {
    this.people.push(human);
    }

  getOne(index) {
    return this.people[index];
    }

  getAll() {
    return this.people.slice();
    }

}
