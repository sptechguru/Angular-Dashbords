import { NewsapiService } from './../../service/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  newslist:any = [];

  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {
    this.newsapi.gettechNews().subscribe((res)=>{
      console.log(res.articles);
      this.newslist = res.articles;

    })
  }

}
