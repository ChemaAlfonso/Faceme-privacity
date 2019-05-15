import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  private provider: string = 'https://www.facebook.com/';
  private baseUrl: string = 'https://www.facebook.com/search/';
  private usr: any = {};

  // Temp
  private usrId: string = '';
  //

  constructor(private _http: HttpClient) {}

   getUsr( usr: string ){
     return this.getUsrId( usr );
   }


   // TODO Obtener ID
   private getUsrId( usr: string ){
     this.usrId = usr;
      return usr;
   }
   
}
