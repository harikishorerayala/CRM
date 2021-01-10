import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Base';

isAdded = false;

contacts = [
  {fname: 'hari', lname: 'kishore', number: 9448329329},
  {fname: 'rama', lname: 'krishna', number: 1234567890},
  {fname: 'krishna', lname: 'kishore', number: 7829321245}
];

superHero = 'Tony Stark';

}
