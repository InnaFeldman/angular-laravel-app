import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { EnvironmentUrlService } from 'src/app/service/environment-url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.sass']
})
export class CanvasComponent implements OnInit {
  canvasLink!: string;
  baseUrl!: string;
  client_id!: string;
  redirectURI!: string;
  code!: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private env: EnvironmentUrlService
    ) { }

  ngOnInit(): void {
    this.client_id = this.env.canvasData.client_id;
    this.redirectURI = this.env.canvasData.redirect_uri;
    this.baseUrl = this.env.canvasData.canvas_url;
    this.canvasLink = this.baseUrl+'login/oauth2/auth?client_id=' + this.client_id + '&response_type=code&redirect_uri=' + this.redirectURI;

    this.route.queryParams.subscribe(params =>{
      this.getAuth(params.code)
      console.log(params.code)
    })
  }

  getAuth(code: any){
    this.dataService.create(`canvas`, {code: code}).subscribe(data => {
      console.log(data)
    })
  }

}
