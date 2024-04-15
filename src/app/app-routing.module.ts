
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordFifthComponent } from './layout/dashbaord-fifth/dashbaord-fifth.component';
import { DashboardSectionComponent } from './layoutSecond/dashboard-section/dashboard-section.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashbaordFifthComponent },
  { path: "dashboard1", component: DashboardSectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
