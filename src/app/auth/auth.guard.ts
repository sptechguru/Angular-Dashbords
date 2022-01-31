import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,public api:AuthService){

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
