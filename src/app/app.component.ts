import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string; 
  redirecTo:string;

}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] = [
    {
    icon: 'logo-octocat',
    name: 'sos',
    redirecTo: '/sos'
  },
  {
    icon: 'logo-octocat',
    name: 'formulario',
    redirecTo: '/formulario' 
  }
  ];
}