import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvellous infosystem';
  str ='marvellous3';
  public fun()
  {
    this.title="Button Clicked"
  }
}
