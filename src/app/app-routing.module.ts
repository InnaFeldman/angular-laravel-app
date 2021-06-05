import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BooksComponent } from './components/books/books.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { GenreComponent } from './components/genre/genre.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'users', component: UserComponent},
  {path: 'canvas', component: CanvasComponent},
  {path: 'books', component: BooksComponent},
  {path: 'authors', component: AuthorComponent},
  {path: 'genres', component: GenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
