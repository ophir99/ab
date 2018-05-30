import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  exploreForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit() {
  }

  exploreIn() {
    console.log(this.exploreForm.value);
    if (!this.exploreForm.valid){
      this.snackbar.open('Please fill the form', '', {duration: 2000});
    }
    else{
      this.router.navigate(['/home']);
    }
  }

}
