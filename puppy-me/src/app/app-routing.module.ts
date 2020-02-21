import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './folder/main/main.component';
import { AboutComponent } from './folder/about/about.component';
import { MenuComponent } from './folder/menu/menu.component';
import { CateringComponent } from './folder/catering/catering.component';
import { PhotosComponent } from './folder/photos/photos.component';



const routes: Routes = [
  {path: '', component: MainComponent, redirectTo: '', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'catering', component: CateringComponent},
  {path: 'photos', component: PhotosComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
