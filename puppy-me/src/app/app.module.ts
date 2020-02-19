import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './folder/header/header.component';
import { MainComponent } from './folder/main/main.component';
import { FooterComponent } from './folder/footer/footer.component';
import { AboutComponent } from './folder/about/about.component';
import { CateringComponent } from './folder/catering/catering.component';
import { MenuComponent } from './folder/menu/menu.component';
import { PhotosComponent } from './folder/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    CateringComponent,
    MenuComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
