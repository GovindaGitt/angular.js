import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div style="text-align:center">
  <h1>
   Marvellous Infosystem 
  </h1>
  <h2>Educating For Better Tomorrow</h2>
</div>`,

  styles : [`h1
  {
      color:red;
  }
h2
{
    color:red;
}`]})

export class AppComponent {
  title = 'app';
}
