import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`div style="text-align:center">
 <
  <br>
  text field :<input type="text" name="firstname">
    <h1>
    Marvellous Infosystem

  </h1>
  <app-marvellouscomp></app-marvellouscomp>
  {{
    title}}
</div>`
 ,
  styles:[` h1{
    color:red;
    text-align:center;
}
input,textarea{
    background-color : blue;
}`]
})
export class AppComponent {
  title = 'marvellous2';
  
}
