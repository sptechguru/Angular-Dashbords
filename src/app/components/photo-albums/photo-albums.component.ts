import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { CrudService } from 'src/app/service/crud.sevice';

@Component({
  selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.css']
})
export class PhotoAlbumsComponent implements OnInit {

  constructor(private crud:CrudService) { }

  datalist:any;
  lists :any = [];
  searchTerm!: string;
  hidebox:boolean =false;
  isSearchAsTypeOn:boolean = false;
  queryObject:any;

  inputval :any =  {
    name:"santosh",
    lname:"pal"
  }


  ngOnInit(): void {
    this.crud.getAlbums().subscribe((res)=>{
      this.datalist = res;
      // console.log(this.datalist);
      let items = this.datalist.slice(0, 10)
      // console.log(items);
      this.lists = items;
    })
  }

  searchUserByQuery(){
 this.search('data:any');
  }

  search(post: string): void {
    this.hidebox = true;
    this.crud.getAlbums().subscribe((res)=>{
      this.datalist = res;
      // console.log(this.datalist);
      let size = 10
      let items = this.datalist.slice(0, size)
      // console.log(items);
      this.lists = items;
      // console.log(this.lists);
     let datares = this.lists.filter((val: any) =>
      val.title.toLowerCase().includes(post)
    );
    console.log(datares);
    })


  }

}
