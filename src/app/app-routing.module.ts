import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdatesComponent } from './updates/updates.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'updates',
    component: UpdatesComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
