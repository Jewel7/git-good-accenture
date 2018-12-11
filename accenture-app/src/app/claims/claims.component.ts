import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }
  claimDetails = {
    name : '', 
    email: '',
    ssn: '',
    dob: '',
    married: '',
    children: '',
    date_of_condition: '',
    condition_description: ''
  }
  claimForm: FormGroup;
  ngOnInit() {
    this.claimForm = new FormGroup({
      
      name: new FormControl('', Validators.required), 
      email: new FormControl('', Validators.required),
      ssn: new FormControl('', Validators.required),
      dob: new FormControl('',  Validators.required ),
      married: new FormControl('',  Validators.required ),
      children: new FormControl('',  Validators.required ),
      date_of_condition: new FormControl('',  Validators.required ),
      condition_description: new FormControl('',  Validators.required )
      });
  }
  sendClaim(){
    this.http.post('http://localhost:3000/api/claim', this.claimDetails).subscribe(()=> {
      this.router.navigateByUrl('/home');
    },(err) => {
      console.error(err);
    });
  }
}
