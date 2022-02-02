import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { CrudService } from 'src/app/service/crud.sevice';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(private crud:CrudService) { }

  datalist:any;
  lists :any = [];
  searchTerm!: string;

  @Input() herop:any;
  @Input() searhitem:any;

  ngOnInit(): void {
    console.log(this.herop);
    console.warn(this.searhitem);


    // this.crud.getAlbums().subscribe((res)=>{
    //   this.datalist = res;
    //   console.log(this.datalist);
    //   let size = 10
    //   let items = this.datalist.slice(0, size)
    //   console.log(items);
    //   this.lists = items;
    // })
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
