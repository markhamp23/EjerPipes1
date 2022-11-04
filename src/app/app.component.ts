import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjerPipes1';
  nombre="jorge fernandez PUGA";
  pasta=12;
  fechaHoy= new Date();
  alumnos=['Jorge', 'Patrick', 'Lola', 'Jaime','Raul','David'];
  meses=[1,2,3,4,5,6,7,8,9,10,11,12];
}
