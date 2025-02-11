import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { KochComponent } from './Koch/Koch.component';
//import { KellnerComponent } from './Kellner/Kellner.component';

const routes: Routes = [
//  { path: '', component: KochComponent }, // Default route
  //{ path: 'about', component: KellnerComponent },
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
