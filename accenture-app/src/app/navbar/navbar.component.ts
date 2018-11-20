import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.showProfileLink;
  }

  showLink = false;
  showProfileLink() {
    if (this.auth.isLoggedIn) {
      this.showLink = true;
      console.log("not Logged in")
    }
  }

}
