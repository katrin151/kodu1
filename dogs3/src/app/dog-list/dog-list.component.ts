import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
  
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
dogs;
  

  //constructor() { }
  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogs = this.dogService.dogs;
    console.log(this.dogs)
  }

}


