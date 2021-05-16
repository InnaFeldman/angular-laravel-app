import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {

  urlAddress: string = environment.baseApi;

  urlAddressWithoutAPI: string = environment.base;

  canvasData: any = environment.canvas;

  constructor() { }
}
