import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../authentication.service';
import{NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  details:UserDetails;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.profile().subscribe(user =>{
      this.details = user;
    },(err) => {
      console.error(err)
    });
  }

}
