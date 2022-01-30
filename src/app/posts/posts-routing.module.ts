import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashbordComponent } from '../components/dashbord/dashbord.component';
import { PhotoAlbumsComponent } from '../components/photo-albums/photo-albums.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';
import { PostComponent } from '../components/post/post.component';

const routes: Routes = [
  {path: 'post-content',  component: PostComponent},
  {path: 'post_details/:id',  component: PostDetailsComponent ,canActivate:[AuthGuard]},
  {path: 'dashbords', component:DashbordComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
