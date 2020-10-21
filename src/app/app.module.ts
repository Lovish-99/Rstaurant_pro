import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Part1Component } from './part1/part1.component';
import { FooterComponent } from './footer/footer.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StoryComponent } from './story/story.component';
import { ContactComponent } from './contact/contact.component';
import { BooktableComponent } from './booktable/booktable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Part1Component,
    FooterComponent,
    Part2Component,
    Part3Component,
    Part4Component,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    StoryComponent,
    ContactComponent,
    BooktableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
