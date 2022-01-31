import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  loginform!: FormGroup;
  submitted: boolean =false;
  constructor( private api: AuthService ,public route:Router){
    this.loginform = new FormGroup({
      email: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
      password: new FormControl(  '',  [Validators.required]),
    });
   }

   get f() { return this.loginform.controls; };

   loginMethod(){
    this.submitted = true;
    //  console.log(this.loginform.value);
     let data = this.loginform.value;
     if (this.loginform.valid) {
      this.api.postMethod('login',data).subscribe((res)=>{
        console.log(res.msg);
        localStorage.setItem('userToken',res.body.token);
        console.log(res.body.email);
       localStorage.setItem('Email',res.body.email);
        if(res.msg =='Success'){
          Swal.fire('Oops...', 'login successfully', 'success')
          setTimeout(() =>{
            this.route.navigate(['posts/post-content']);
          },3000)
        }
        else{
          Swal.fire('Oops...', 'invalid user name & password!', 'error')
          this.loginform.reset();
        }
      },error =>{
        console.log("server error ",error);
      })
    }

  }


  ngOnInit(): void {
  }

}


