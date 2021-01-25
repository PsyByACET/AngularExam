import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttp } from './basehttp';

@Injectable({
  providedIn: 'root'
})
export class MpurchaseService extends BaseHttp{

  constructor(public http: HttpClient) { 
    super(http, 'mpurchase')
  }
}
