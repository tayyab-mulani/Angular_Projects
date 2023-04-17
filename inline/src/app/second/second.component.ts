import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h1>Inside Second Component</h1>
  <h2>Concept of Inline in Angular</h2>
  `,
  styles: [
    `
    h1 
    { 
      color : Brown 
    }
    h2 
    { 
      color : green 
    }
    `
  ]
})
export class SecondComponent {

}

//Command for Creating a Component for Inline template concept
//ng generate component Demo --inline-template=true --inline-style=true
