import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { ForgetComponent } from './components/forget/forget.component';
import { LoginsComponent } from './components/logins/logins.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PostComponent } from './components/post/post.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginsComponent},

  {
    path:'posts',loadChildren:()=>import('./posts/posts.module')
    .then(mod=>mod.PostsModule),canActivate:[AuthGuard]
  },

  {
    path:'albums',loadChildren:()=>import('./albums/albums.module')
    .then(mod=>mod.AlbumsModule) ,canActivate:[AuthGuard]
  },

  {path: 'signup', component:SignupComponent},
  {path: 'forget', component:ForgetComponent},

  // {path: 'update/:id', component:EdituserComponent},
  // {path: 'list', component:UserlistComponent},
  // {path: '**',  component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
