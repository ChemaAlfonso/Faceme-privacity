import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';

@Component({
  selector: 'app-megusta',
  templateUrl: './megusta.component.html',
  styleUrls: ['./megusta.component.scss']
})
export class MegustaComponent implements OnInit {

  @Input('user') usr: string;

  id: string;

  constructor( private _fbS: FacebookService ) { }

  ngOnInit() {
    this.id = this._fbS.getUsr(this.usr);
  }

}
