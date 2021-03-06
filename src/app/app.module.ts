import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleComponent } from './simple/simple.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    LandingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
