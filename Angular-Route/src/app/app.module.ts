import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutDetailsComponent }  from './about/about-details.component';

@NgModule({
declarations: [ AppComponent, AboutComponent, ContactComponent, HomeComponent, AboutDetailsComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
