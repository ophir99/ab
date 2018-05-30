import { Component, ViewChild, OnInit, ViewChildren } from '@angular/core';
import { SimpleComponent } from './simple/simple.component';
import { QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChildren(SimpleComponent)
  cool: QueryList<SimpleComponent>;


  exploreForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private route: Router) {

  }
  ngOnInit() {
    console.log(this.cool);
  }

  exploreIn() {
    console.log(this.exploreForm.value);
    
  }


}
