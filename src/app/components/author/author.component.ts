import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})

export class AuthorComponent implements OnInit {

  authors: any;
  loading: boolean = true;
  displayDialogAdd: boolean = false;
  displayDialogEdit: boolean = false;
  form!: FormGroup;
  userToEdit:any = {};
  url:string  = 'authors';
  fames = [
      {label:'lead', value:'lead'},
      {label:'secondary', value:'secondary'},
      {label:'TA', value:'TA'}
    ]


  constructor(private dataService: DataService) {

   }

  ngOnInit(): void {
    this.dataService.getDate(this.url).subscribe(authors => {
      this.authors = authors;
      this.loading = false;
      //console.log(this.authors)
    })

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      fame: new FormControl(null, [Validators.required])
    })
  }

  get getControl(){
    return this.form.controls;
  }

  onSubmit(){
    this.form.disable();

    const author = {
      name: this.form.value.name,
      email: this.form.value.email,
      fame: this.form.value.fame
    }
    //console.log(author);
    this.dataService.create('authors', author).subscribe( (authors:any) => {
      // this.authors.push(authors);
      // this.form.reset();
      console.log(authors);
     },
     error =>{
       this.loading = true;
       console.log('Error')
     })
  }

  add(){
    this.displayDialogAdd = true;
  }

  onSubmitEdit(form:any){}

  edit(){}

  delete(author:any){
    //console.log(author.author.id)
    this.dataService.delete(`${this.url}/${author.author.id}`).subscribe(author => {
      console.log(author)
    })
  }
}
