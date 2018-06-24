import { Component } from '@angular/core'

@Component({
  template: `
    <h2 class="errorMessage">404</h2>
    <h3 style="text-align: center">Can't find data</h3>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {}
}

