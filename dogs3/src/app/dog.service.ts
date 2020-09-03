
  

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogs = [

    {name: "Laika", owner: "NSVL", age: "1", picture: 'assets/laika.jpg'},
    {name: "Belka", owner: "NSVL", age: "3", picture: "assets/laika2.jpg"},
    {name: "Strelka", owner: "NSVL", age: "3", picture: "assets/laika3.jpg"},
    {name: "Muki", owner: "Anne", age: "5", picture: "assets/laika4.jpg"},
    {name: "Kuri", owner: "Naaber", age: "20", picture: "assets/laika5havanese1.jpg"}
    ] 
 

  constructor() { }

}

//<img class="main-image" src="assets\gulf.jpg" >

