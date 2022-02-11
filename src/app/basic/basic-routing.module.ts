import { BusinessComponent } from './../components/business/business.component';
import { TechNewsComponent } from './../components/tech-news/tech-news.component';
import { NewsitemComponent } from './../components/newsitem/newsitem.component';
import { ReactiveFormComponent } from './../components/reactive-form/reactive-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'reactive',  component:ReactiveFormComponent},
  {path: 'news',  component:NewsitemComponent},
  {path: 'tech',  component:TechNewsComponent},
  {path: 'busin',  component:BusinessComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
