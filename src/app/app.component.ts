import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    //template: `<h1>Hello from inline html</h1>
    //<h2>how are you</h2>
    //<h3> Use of stick operator </h3>`,
  styleUrl: './app.component.scss'
  //styles:[`h1 {color:red} `]
})
export class AppComponent {
  title = 'hotelinventory';

  role = 'Admin';
}

