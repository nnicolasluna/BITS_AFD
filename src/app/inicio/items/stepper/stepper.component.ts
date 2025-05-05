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

  get currentTextTitle(): string {
    const steptexttop = ['Diagnóstico de la situación actual de las áreas afectadas por el fuego a nivel municipal.', 'Acciones Integrales de Recuperación y/o restauracion implementadas en las áreas afectadas por el fuego.', 'Acciones de prevención y mitigación mediante práctica alternativas al uso de fuego', 'Gestionar el conocimiento desarrollado y apoyar la consolidación de una estructura institucional para el seguimiento', 'Gestionar el conocimiento desarrollado y apoyar la consolidación de una estructura institucional para el seguimiento.'];
    return steptexttop[this.currentStep - 1];
  }
  get currentTextDescription(): string {
    const steptextbot = ['Información histórica por municipio, área protegida y pueblo indígena, para la elaboración de documentos', 'En Áreas Priorizadas en cada municipio (Y área protegida si corresponde)', 'Desarrollo participativo de documentos procedimentales', 'Monitoreo y Reporte']
    return steptextbot[this.currentStep - 1];
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
