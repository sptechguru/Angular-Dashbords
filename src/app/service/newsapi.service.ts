import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

// Your API key is: db9b6a7bd1de49f0a7dd8748c0d76d70

  public baseURL = environment.Newsapi;

  public baseURL2 = environment.busines;


  constructor(private http: HttpClient) {}


  getNews() {
    return this.http.get(this.baseURL).pipe(
      map((response: any) => {
        return response;
      })
    );
  }


  gettechNews() {
    return this.http.get(this.baseURL2).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  postData(data: any) {
    return this.http.post(this.baseURL, JSON.stringify(data)).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
