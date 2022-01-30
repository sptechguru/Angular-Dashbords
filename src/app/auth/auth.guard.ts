import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,public api:ApiService){

  }
  canActivate(): boolean {
  if(this.api.isLoggedIn()){
      console.log("your login succefully..");
      return true
    }
    this.router.navigate(['login']);
    return false
}

}
