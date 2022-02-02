import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userprofile } from '../interface/userprofie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor(private http:HttpClient) { }

  readonly baseurl = environment.WEBURL;

  getMethod(url:any):Observable<userprofile[]>{
    return this.http.get<userprofile[]>(this.baseurl+url);
  }


  getcurententId(id:any){
    return this.http.post(this.baseurl +'getUserById',id)
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

  isLoggedIn(){
    return localStorage.getItem('userToken');
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

  deleteById(id:any){
    return this.http.delete(this.baseurl,id)
   }


}
