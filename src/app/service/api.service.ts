import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  interface userprofile {
  active: 1
  country_name: string
  created_at: string
  email: string
  first_name: string
  id: number
  isAdmin: string
  is_deleted: string
  last_login: null
  last_name:string
  phone: null
  profile_picture:string
  username: string
  }

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 constructor(private http:HttpClient) { }

  public baseurl = "http://18.170.237.209:3025/";

  public geturl = 'http://18.170.237.209:3025/getUserById';


  getMethod(url:any):Observable<userprofile[]>{
    return this.http.get<userprofile[]>(this.baseurl+url);
  }


  postMethod(url:any,body:any):Observable<any>{
    const  customheders =  new HttpHeaders({
      "content-type":"content-type-json",
      'authetication-key':"124893api",
      'userid':'12344'
    });
    const putparams =  new HttpParams()
    return this.http.post<any>(this.baseurl+url, body,{params:putparams});
  }


  userAuntication(username:any,password:any){
    let data = 'username='+username +'&password='+ password+"grant-type-password";
    let reqheader = new HttpHeaders({'Content-type':'application/x-www-urlencoded'});
    return this.http.post(this.baseurl + '/token',data,{headers:reqheader});
  }


  getcurententId(id:any){
    return this.http.post(this.geturl,id)
   }

  patchMethod(body:any){
    const  customheders =  new HttpHeaders({
      "content-type":"content-type-json",
      'authetication-key':"124893api",
      'userid':'12344'
    });

    const putparams =  new HttpParams()
    .set('userRole','admin')
    .set('permission','denied');

    const putBody = {
      name:"santosh pal",
      id:1222,
      email:"santoshpal@gmail.com"
    }
    return this.http.patch(this.baseurl, {headers:customheders ,params:putparams,body:putBody});
  }

  isLoggedIn(){
    return localStorage.getItem('userToken');
  }


}
