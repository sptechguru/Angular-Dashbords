import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { PhotoAlbumsComponent } from '../components/photo-albums/photo-albums.component';

const routes: Routes = [
  {path: 'album-content',  component:PhotoAlbumsComponent ,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
