import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // ← HIER: 'Routes' importieren
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';

const routes: Routes = [
  { path: 'waiter', component: TableSelectionComponent },
  { path: 'kitchen', component: KitchenViewComponent },
  { path: '', redirectTo: '/waiter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
