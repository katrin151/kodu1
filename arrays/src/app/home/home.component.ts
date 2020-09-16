import { Component, OnInit } from '@angular/core';
import { ArrayService } from "./../array.service";
import { Person } from "./../person.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  humans: Person[];

  constructor(private arrayService:ArrayService) { }

  ngOnInit(): void {
    this.humans = this.arrayService.getAll();
  }

  onRemoveAll(): void {
    this.arrayService.removeAll();
    this.humans = this.arrayService.getAll();
  }

  onRemoveOne(i: number): void {
    this.arrayService.removeOne(i);
    this.humans = this.arrayService.getAll();
  }

  onAdd(human: Person): void {
    this.arrayService.addOne(human);
    this.humans = this.arrayService.getAll();
  }

  onGetOne(i: number): void {
    this.arrayService.getOne(i);
    this.humans = this.arrayService.getAll();
  }

  onGetAll(): void {
    this.arrayService.getAll();
    this.humans = this.arrayService.getAll();
  }
}
