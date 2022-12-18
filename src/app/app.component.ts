import { Component, VERSION } from '@angular/core';
import { Usuario } from '../class/usuario';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  usuario1: Usuario;

  constructor() {
    this.usuario1 = new Usuario('JUAn');
    console.log(this.usuario1.find);
  }
}
