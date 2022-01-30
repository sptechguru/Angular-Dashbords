import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.sevice';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  lists:any = []

  constructor( private service: CrudService) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.service.getData().subscribe((res) => {
      this.posts = res;
      let size = 10
     let items = this.posts.slice(0, size)
     console.log(items);
     this.lists = items;

    });
  }

}


