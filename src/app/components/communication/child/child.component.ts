import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()parent:any;

  @ Output() chidatashare = new EventEmitter;

  ngOnInit(): void {
    console.warn(this.parent);

  }

}
