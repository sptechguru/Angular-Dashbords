import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor() { }

  datastore:any = 'input Propert data share in child componets.';

  ngOnInit(): void {
    console.warn(this.datastore)
  }

}
