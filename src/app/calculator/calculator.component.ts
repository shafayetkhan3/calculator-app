import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  results: {
    sum: number,
    subtraction: number,
    multiplication: number,
    division: number | string
  } | null = null;

  calculate(): void {
    this.results = {
      sum: this.num1 + this.num2,
      subtraction: this.num1 - this.num2,
      multiplication: this.num1 * this.num2,
      division: this.num2 !== 0 ? (this.num1 / this.num2).toFixed(2) : 'Cannot divide by zero'
    };
  }
}