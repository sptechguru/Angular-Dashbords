import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  public baseURL = environment.JsonURL;

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.baseURL, JSON.stringify(data)).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getAlbums() {
    return this.http.get(this.baseURL+'photos').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getData() {
    return this.http.get(this.baseURL+'posts').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getById(id:any) {
    return this.http.get(this.baseURL+'posts/'+id).pipe(
      map((response: any) => {
        return response;
      })
    );
  }



  updateData(data?: any, id?: number) {
    return this.http.patch(`${this.baseURL}/${id}`, data).pipe(
      map((response: any) => {
        return response.json;
      })
    );
  }

  deleteData(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      map((response: any) => {
        return response.json;
      })
    );
  }
}
