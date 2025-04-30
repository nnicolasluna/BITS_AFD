import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  currentStep: number = 1;
  totalSteps: number = 4;


  stepColors: string[] = ['#5B9BD5', '#70AD47', '#FFC000', '#F4A21A'];

  steptexttop: string[] = ['Diagnóstico de la situación actual de las áreas afectadas por el fuego a nivel municipal.',
    
  ];

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }


  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }


  get currentLetter(): string {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[this.currentStep - 1];
  }


  get backgroundColor(): string {
    return this.stepColors[this.currentStep - 1];
  }


  get isPrevDisabled(): boolean {
    return this.currentStep === 1;
  }

  get isNextDisabled(): boolean {
    return this.currentStep === this.totalSteps;
  }
}
