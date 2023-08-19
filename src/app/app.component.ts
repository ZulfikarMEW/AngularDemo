import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationText: string = 'Welcome to my Angular Application';
  title = 'AngularDemo';

  changeText(e: any) {
    console.log(e);
    this.navigationText = e.target.text;

    if (e.target.text == 'Home')
      this.navigationText = 'Welcome to my Angular Application';
  }
}
