import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.scss']
})
export class InteresesComponent implements OnInit {

  @Input('user') usr: string;

  id: string;

  constructor( private _fbS: FacebookService ) { }

  ngOnInit() {
    this.id = this._fbS.getUsr(this.usr);
  }
}
