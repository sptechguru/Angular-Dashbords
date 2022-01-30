import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.sevice';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id:any = '';
  data: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;

  constructor(private active:ActivatedRoute,private service: CrudService) { }

  ngOnInit(): void {
        this.active.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    console.log(this.active.snapshot.params.id);
    this.getAllData();

  }

  getAllData() {
    this.service.getById(this.id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }


}
