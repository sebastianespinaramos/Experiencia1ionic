import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotohome(){
    this.router.navigate(['/home'])
}
  onSubmitTemplate() {
    console.log('Form submit');
  }
}
