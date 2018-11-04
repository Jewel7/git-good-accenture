import { Component } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../authentication.service';
import {Router} from '@angular/router';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //faCoffee = faCoffee;
  credentials: TokenPayload = {
    email: '',
    password:''
  }
  constructor(private auth: AuthenticationService, private router: Router) { }
  login(){
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err)=> {
      console.error(err);
    })
  }

}
