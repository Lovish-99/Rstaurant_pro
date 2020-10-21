import { Component ,NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { StoryComponent } from './story/story.component';
import { ContactComponent } from './contact/contact.component';
import { BooktableComponent } from './booktable/booktable.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'story',
    component:StoryComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'booktable',
    component:BooktableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
