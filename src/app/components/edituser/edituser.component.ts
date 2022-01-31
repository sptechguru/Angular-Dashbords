import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id: any;
  editform!: FormGroup;
  submitted: boolean = false;
  constructor(private api: AuthService, private active: ActivatedRoute,public route: Router) {
    this.editform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\..+$')]),
      username: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.active.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   console.log(this.id);
    // });
    console.log(this.active.snapshot.params.id);
    let obj = {
      user_id:this.active.snapshot.params.id
    }
    this.api.getcurententId(obj).subscribe((res:any)=>{
      console.log(res);
      this.editform = new FormGroup({
        email: new FormControl(res['email']),
        username: new FormControl(res['username']),
        first_name: new FormControl(res['first_name']),
        last_name: new FormControl(res['last_name'])
      });
    })

  }

  get f() { return this.editform.controls; };

  updateMethod(){
   let data = this.editform.value;
   let parms = {
    email:data.email,
    username:data.username,
    first_name:data.first_name,
    last_name:data.last_name,
   }
    this.api.postMethod('updateUser',parms).subscribe((data)=>{
      console.log(data);
     this.route.navigate(['dashbords']);
    })
  }

}
