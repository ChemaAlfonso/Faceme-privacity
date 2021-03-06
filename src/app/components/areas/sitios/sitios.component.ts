import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.scss']
})
export class SitiosComponent implements OnInit {

  @Input('user') usr: string;

  id: string;

  constructor( private _fbS: FacebookService ) { }

  ngOnInit() {
    this.id = this._fbS.getUsr(this.usr);
  }

}
