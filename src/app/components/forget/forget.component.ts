import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  forgetform!: FormGroup;
  submitted: boolean = false;
  constructor( private http: HttpClient, private api:AuthService
  ,public route:Router){
    this.forgetform = new FormGroup({
      email: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
    });
   }

   ngOnInit(): void {

     }

   get f() { return this.forgetform.controls; };

   forgetMethod(){
    this.submitted = true;
     console.log(this.forgetform.value);
     let data = this.forgetform.value;
     let postobj = {
     email: data.email,
     }

     if (this.forgetform.valid) {
       this.api.postMethod('forgotPassword',postobj).subscribe((res)=>{
         console.log(res);
         this.forgetform.reset();
         this.route.navigate(['login']);
       })
    }
  }


}
