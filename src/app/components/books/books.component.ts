import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
 books:any[] = [];
 url:string = 'books';


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDate(this.url).subscribe((books:any) => {
      if(books && books.length){
        this.books = books;
        console.log(this.books);
      }
     })
  }

}
