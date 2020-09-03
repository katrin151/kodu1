import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.css']
})
export class DogViewComponent implements OnInit {
dog;
id;

  //constructor() { }
  constructor(private route: ActivatedRoute, private dogService: DogService) { } 
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)  => {
      this.id =+params['id'];
      this.dog= this.dogService.dogs[this.id];
      }
    )
  }

}
