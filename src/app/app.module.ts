import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Add FormsModule to imports array
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }