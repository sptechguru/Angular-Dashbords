import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  email :any = '';
  menuHide:boolean = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('Email');
    console.log(JSON.stringify(this.email));
  }

  sidebar(){
    this.menuHide = true;
  }


  logOut(){
    localStorage.removeItem('Email');
    localStorage.removeItem('userToken');
    this.route.navigate(['login']);
  }


}
