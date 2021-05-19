import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'users', component: UserComponent},
  {path: 'canvas', component: CanvasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
