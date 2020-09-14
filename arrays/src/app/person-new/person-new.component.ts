import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../array.service';
import { NgForm } from '@angular/forms';
import { Person } from '../person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {

  constructor(private arrayService: ArrayService,
    private router: Router) { }

  ngOnInit(): void {
          }

  onSubmit(form: NgForm) {
    let formValue = form.value;
    let person = new Person(
        formValue.firstName,
        formValue.lastName,
        formValue.age,
        formValue.address);
    this.arrayService.addOne(person);
    this.router.navigateByUrl("/");
  }

}
