import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';

@Component({
  selector: 'app-gente',
  templateUrl: './gente.component.html',
  styleUrls: ['./gente.component.scss']
})
export class GenteComponent implements OnInit {

  @Input('user') usr: string;

  id: string;

  constructor( private _fbS: FacebookService ) { }

  ngOnInit() {
    this.id = this._fbS.getUsr(this.usr);
  }
  
}
