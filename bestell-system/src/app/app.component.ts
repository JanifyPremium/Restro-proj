import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, TableSelectionComponent],
  template: `
    <app-navbar></app-navbar>
     <app-table-selection></app-table-selection>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
