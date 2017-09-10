import { Component } from '@angular/core';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // dropdownValues = {
  //   "Google": "https://www.google.com",
  //   "Facebook": "https://www.facebook.com",
  //   "Twitter": "https://www.twitter.com",
  //   "Nick Portfolio": "http://www.nicholasbrink.com"
  // };

  dropdownValues = ['Test', 'This Works', 'more test', 'Ben is Gay Test'];


  tags = [];


}
