import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';
import { HttpClient } from 'selenium-webdriver/http';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public usr: any = '100003785792137';
  loaded = false;


  constructor( public _fbs: FacebookService ) { }

  ngOnInit() {
  }

  resetUsr(){
    this.loaded = false;
  }


  getUsr(){
    console.log(this.usr);
    this._fbs.getUsr( this.usr );
    this.loaded = true;
  }

}
