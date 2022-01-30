import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgetComponent } from './components/forget/forget.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginsComponent } from './components/logins/logins.component';
import { AuthGuard } from './auth/auth.guard';
import { ApiService } from './service/api.service';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PhotoAlbumsComponent } from './components/photo-albums/photo-albums.component';
import { PostsModule } from './posts/posts.module';
import { AlbumsModule } from './albums/albums.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ForgetComponent,
    DashbordComponent,
    LoginsComponent,
    EdituserComponent,
    UserlistComponent,
    SearchFilterPipe,
    SidenavbarComponent,
    PostComponent,
    PostDetailsComponent,
    PhotoAlbumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatIconModule,
    MatToolbarModule,
    PostsModule,
    AlbumsModule

  ],
  providers: [AuthGuard,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
