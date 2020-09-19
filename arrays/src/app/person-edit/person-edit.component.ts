import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArrayService } from '../array.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  id: number;
  human: Person;
  editHumanForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private arrayService: ArrayService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param.id;
    })
    this.human = this.arrayService.getOne(this.id);

    this.editHumanForm = new FormGroup({
      firstName: new FormControl(this.human.firstName),
      lastName: new FormControl(this.human.lastName),
      age: new FormControl(this.human.age),
      address: new FormControl(this.human.address)
    })    
  }
  onSubmit() {
    /*this.arrayService.people[this.id] = this.editHumanForm.value;*/
    this.arrayService.editHuman(this.editHumanForm.value, this.id);
    this.router.navigateByUrl("/");
  }   
}
