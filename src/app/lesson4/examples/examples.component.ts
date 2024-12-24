import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  imports: [],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class lesson4ExamplesComponent {
  output1 = '';
  output2 = '';
  area = '';
  circumference = '';
  z = '';
  output5 = '';
  output6 = '';

  loadScript(scriptName: string) {
    // Mock loading the script (in a real app, implement actual script loading logic)
    if (scriptName === 'example1.gs') {
      this.output1 = '5 : Int, 10 : Int, 15 : Int';
    } else if (scriptName === 'example2.gs') {
      this.area = '78.5 : Float';
      this.circumference = '31.4 : Float';
    } else if (scriptName === 'example3.gs') {
      this.z = '5 : Int';
    }
  }

  evaluateWhereExample() {
    this.output2 = '30 : Int';
  }

  evaluateLetExample() {
    this.output5 = '25 : Int';
  }

  evaluateTupleExample() {
    this.output6 = '25 : Int';
  }
}
