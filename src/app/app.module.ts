import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';

import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { CanvasComponent } from './components/canvas/canvas.component';
import { BreadcrubComponent } from './components/breadcrub/breadcrub.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorComponent } from './components/author/author.component';
import { GenreComponent } from './components/genre/genre.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    UserComponent,
    CanvasComponent,
    BreadcrubComponent,
    BooksComponent,
    AuthorComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
