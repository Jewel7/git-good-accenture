import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthenticationService, TokenPayload} from '../authentication.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  credentials: TokenPayload = {
    email:'',
    first_name:'',
    last_name:'',
    user_name:'',
    password:''
  };
  registerForm: FormGroup;

  constructor(private auth: AuthenticationService, private router: Router) { }
  ngOnInit(){
    this.registerForm = new FormGroup({
      
          first_name: new FormControl('', Validators.required), 
          last_name: new FormControl('', Validators.required),
          user_name: new FormControl('', Validators.required)
      ,
      email: new FormControl('', [ 
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") 
      ]),
      password: new FormControl('', [
          Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}"), //regular expression which requires password to include: 1 Uppercase char, 1 lowercase char, 1 digit, a special char and at least 8 chars
          Validators.required
      ]),
      password_confirm: new FormControl('', [
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}"), 
        Validators.required
    ])
  });
}
  
  register(){
    this.auth.register(this.credentials).subscribe(()=> {
      this.router.navigateByUrl('/profile');
    },(err) => {
      console.error(err);
    })
  }

  

}
