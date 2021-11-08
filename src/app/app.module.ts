import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OutroComponent } from './outro/outro.component';
import { MidContainerComponent } from './mid-container/mid-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OutroComponent,
    MidContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
