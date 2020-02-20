import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './folder/main/main.component';
import { AboutComponent } from './folder/about/about.component';
import { MenuComponent } from './folder/menu/menu.component';
import { CateringComponent } from './folder/catering/catering.component';
import { PhotosComponent } from './folder/photos/photos.component';



const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'catering', component: CateringComponent},
  {path: 'photos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
