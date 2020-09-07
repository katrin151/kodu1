import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-isik-view',
  templateUrl: './isik-view.component.html',
  styleUrls: ['./isik-view.component.css']
})
export class IsikViewComponent implements OnInit {
human;
id;

  constructor(private route: ActivatedRoute, private arrayService: ArrayService) { }

  ngOnInit(): void {
    //this.human = this.arrayService.getOne(this.human);
    this.route.params.subscribe((params:Params) => {
      this.id =+params["id"];
      this.human= this.arrayService.people[this.id];    } )
  }

}
