import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  
  //Inline style method
  styles:[`h1 {
    color:dodgerblue
  }`]
})
export class AppComponent {
  title = 'My-Ademy-App';
}
