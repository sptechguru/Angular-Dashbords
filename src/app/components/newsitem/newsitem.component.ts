import { NewsapiService } from './../../service/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {

  newslist:any = [];

  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {
    this.newsapi.getNews().subscribe((res)=>{
      console.log(res.articles);
      this.newslist = res.articles;

    })
  }

}
