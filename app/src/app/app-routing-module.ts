import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KochComponent } from './koch/koch.component';
import { KellnerComponent } from './kellner/kellner.component';

const routes: Routes = [
  { path: '', component: KochComponent }, // Default route
  { path: 'about', component: KellnerComponent },
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
