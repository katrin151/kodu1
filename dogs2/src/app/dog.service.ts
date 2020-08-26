


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogs = [
    {name: "koer1", owner: "omanik1", age: 1, picture: "http://www.lahe.mobi/gallery/220/bece3e6e12.jpg"},
    {name: "koer2", owner: "omanik2", age: 4, picture: "https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_1280.jpg"},
    {name: "koer3", owner: "omanik3", age: 3, picture: "https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759__340.jpg"},
    {name: "koer4", owner: "omanik4", age: 2, picture: "https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111__340.jpg"},
    {name: "koer5", owner: "omanik5", age: 1, picture: "https://cdn.pixabay.com/photo/2016/11/01/23/38/beach-1790049__340.jpg"},
    ];

  
    
  constructor() { }
}


