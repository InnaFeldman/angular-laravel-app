import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {
  employees:any[]=[];
  url: string = 'employees';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getDate(this.url).subscribe((data) => {
     //console.log(data)
    })
  }

}
