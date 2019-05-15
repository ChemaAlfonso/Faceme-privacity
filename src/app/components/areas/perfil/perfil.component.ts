import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';

declare var $: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {


  @Input('user') usr: string;

  id: string;

  constructor( private _fbS: FacebookService ) { }

  ngOnInit() {
    this.id = this._fbS.getUsr(this.usr);
  }

}
