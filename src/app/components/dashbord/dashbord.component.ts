import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(public route: Router, public api: ApiService) { }

  profile: any = [];
  p: number = 1;
  id: any;
  editform!: FormGroup;
  submitted: boolean = false;
  editPostModal: any;
  modelHide:boolean = false;
  searchTerm!: string;
  searchPost?: any;
  posts:any;

  ngOnInit(): void {
    this.getuserlist();
    this.editform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\..+$')]),
      username: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
    });
  }


  editModal(editPost: any) {
    console.log(editPost.id);
    this.editPostModal = editPost;
    console.log('edit modal');
    this.modelHide = true;
  }

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
       this.modelHide = false;
       this.getuserlist();

      // this.route.navigate(['dashbords']);
     })
   }

   search(post: string): void {
    this.posts = this.searchPost.filter((val: any) =>
      val.title.toLowerCase().includes(post)
    );
    console.log(post);
  }



  getuserlist() {
    this.api.getMethod('getAllUser').subscribe((data) => {
      console.log(data);
      this.profile = data;
    });
  }

  deleteUser(val: any) {
    if (confirm("Are you sure to delete this User ." + val)) {
      let postobj = {
        user_id: val
      }
      this.api.postMethod('deleteUser', postobj).subscribe((data) => {
        console.log(data);
        this.getuserlist();
      })
    }
  }


  logoutMethod() {
    localStorage.removeItem('userToken');
    this.route.navigate(['login']);
  }

}
