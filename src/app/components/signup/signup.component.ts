import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform!: FormGroup;
  submitted: boolean = false;

    constructor( private api: AuthService , public route:Router) {
    	this.myform = new FormGroup({
        first_name: new FormControl(	'',	[Validators.required]),
        last_name: new FormControl(  '',  [Validators.required]),
        username: new FormControl(  '',  [Validators.required]),
        password: new FormControl(  '',  [Validators.required]),
        email: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')])
      });
  	}

    ngOnInit(): void {
    }

  get f(): { [key: string]: AbstractControl } {
    return this.myform.controls;
  }


onSubmit (): void  {
  this.submitted = true;
  console.log(this.myform.value);
  let data = this.myform.value;
  let postobj = {
  email: data.email,
  first_name: data.first_name,
  last_name: data.last_name,
  password: data.password,
  sponsor_id: 'ZS2Oez0',
  username: data.username,
  }
    if (this.myform.valid) {
      this.api.postMethod('register',postobj).subscribe((res)=>{
        console.log(res);
        this.myform.reset();
        Swal.fire('Oops...', 'signup successfully', 'success')
        setTimeout(() =>{
          this.route.navigate(['login']);
        },4000)
      })
	}
}


}
