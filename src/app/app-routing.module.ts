import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
// import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'home', component:HomeComponent},
  {path: 'hotel', component:HotelComponent}, 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
