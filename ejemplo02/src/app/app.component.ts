import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  textChange = 'Hola soy un texto';


  changeTxt(){
    this.textChange = 'Acabo de cambiarme';
  }
}
