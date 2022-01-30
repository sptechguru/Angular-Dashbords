import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.crud.getAlbums().subscribe((res)=>{
      this.datalist = res;
      // console.log(this.datalist);
      let size = 10
      let items = this.datalist.slice(0, size)
      // console.log(items);
      this.lists = items;
    })
  }


  search(post: string): void {
    this.crud.getAlbums().subscribe((res)=>{
      this.datalist = res;
      // console.log(this.datalist);
      let size = 10
      let items = this.datalist.slice(0, size)
      // console.log(items);
      this.lists = items;
      // console.log(this.lists);
      this.lists.filter((val: any) =>
      val.title.toLowerCase().includes(post)
    );
    console.log(this.lists);
    })


  }

}
