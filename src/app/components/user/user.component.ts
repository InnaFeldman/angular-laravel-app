import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import * as _ from 'lodash';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  users:any[] = [];
  //userToCreate:any;
  userToEdit:any = {};
  url:string = 'users';
  loading: boolean = true;
  displayDialogEdit: boolean = false;
  displayDialogAdd: boolean = false;
  form!: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDate(this.url).subscribe((users:any) => {
      if(users && users.length){
        this.users = users;
        this.loading = false;
        //console.log(this.users)
      }
     })

     this.form = new FormGroup({
       name: new FormControl(null, [Validators.required]),
       email: new FormControl(null, [Validators.required, Validators.email]),
       password: new FormControl(null, [Validators.required, Validators.minLength(4)])
     })
  }


  get getControl(){
    return this.form.controls;
  }

  add(){
    this.displayDialogAdd = true;
    // this.userToCreate = {};
  }


  onSubmit(){
    this.form.disable();
    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

   this.dataService.create(`users`, user).subscribe(
     (users:any) => {
      this.users.push(users);
      this.form.reset();
     },
     error =>{
       this.loading = true;
       console.log('Error')
     }
   )
   }

  edit(user: any){
    this.displayDialogEdit = true;
    this.userToEdit = _.clone(user);
  }

  onSubmitEdit(form: NgForm){
    this.dataService.update(`users/${this.userToEdit.id}`, form.value).subscribe(
      (user: any) => {
       let index = this.users.findIndex( i => i.id == user.id);
       this.users[index] = user;
       form.reset();
       this.displayDialogEdit = false;
      },
      err => {
        console.log('Error!!!')
      }
    )
  }


  delete(user:any){
    this.dataService.delete(`${this.url}/${user.id}`).subscribe(del => {
      this.users = this.users.filter( u => {
        return u.id !==user.id;
      } )
    })
  }

}

