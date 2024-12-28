import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class lesson9ExampleComponent {
  // Variables for Volume of a Cylinder
  radius: number = 0;
  height: number = 0;
  volume: number = 0;

  // Variables for Curried Function Example
  length: number = 0;
  breadth: number = 0;
  area: number = 0;

  // Variables for Recursive Multiplication
  num1: number = 0;
  num2: number = 0;
  multiplicationResult: number = 0;

  // Variables for Power Function
  base: number = 0;
  exponent: number = 0;
  powerResult: number = 0;

  updateRadius(value: string): void {
    this.radius = parseFloat(value) || 0;
  }

  updateHeight(value: string): void {
    this.height = parseFloat(value) || 0;
  }

  updateLength(value: string): void {
    this.length = parseFloat(value) || 0;
  }

  updateBreadth(value: string): void {
    this.breadth = parseFloat(value) || 0;
  }

  updateNum1(value: string): void {
    this.num1 = parseFloat(value) || 0;
  }

  updateNum2(value: string): void {
    this.num2 = parseFloat(value) || 0;
  }

  updateBase(value: string): void {
    this.base = parseFloat(value) || 0;
  }

  updateExponent(value: string): void {
    this.exponent = parseFloat(value) || 0;
  }

  calculateVolume(): void {
    this.volume = Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  calculateArea(): void {
    this.area = this.length * this.breadth;
  }

  calculateRecursiveMultiplication(): void {
    const recursiveMultiply = (a: number, b: number): number => {
      if (b === 0) return 0;
      return a + recursiveMultiply(a, b - 1);
    };
    this.multiplicationResult = recursiveMultiply(this.num1, this.num2);
  }

  calculatePower(): void {
    const recursivePower = (base: number, exponent: number): number => {
      if (exponent === 0) return 1;
      return base * recursivePower(base, exponent - 1);
    };
    this.powerResult = recursivePower(this.base, this.exponent);
  }
}
