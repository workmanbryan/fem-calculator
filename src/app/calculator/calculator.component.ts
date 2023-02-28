import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CalcbuttonsService } from '../Services/calcbuttons.service';
import { CalculateService } from '../Services/calculate.service';
import { TTheme } from './Types/TTheme';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
reddotpos: string = 'left';
theme: TTheme = 'dark-theme';

constructor(@Inject(DOCUMENT) private document: Document, 
            private renderer: Renderer2, 
            public calcButtonsService: CalcbuttonsService,
            public calculateService: CalculateService){}

ngOnInit(): void {
  this.initializeTheme();
}

initializeTheme(){
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    this.theme = 'light-theme';
    this.reddotpos = 'center';
    this.calculateService.counter = 1;
  }
  this.renderer.addClass(this.document.body.querySelector('.container'), this.theme);
}

themeSelect(){
  var appcal = this.document.body.querySelector('.container');
  this.calculateService.counter++;
  if (this.calculateService.counter === 3){
    this.calculateService.counter = 0;
  }
  if (this.calculateService.counter < 3){
    switch (this.calculateService.counter) {
      case 0:
        this.reddotpos = 'left';
        appcal?.classList.add('dark-theme');
        appcal?.classList.remove('light-theme');
        appcal?.classList.remove('contrast-theme');
        break;
      case 1:
        this.reddotpos = 'center';
        appcal?.classList.add('light-theme');
        appcal?.classList.remove('dark-theme');
        appcal?.classList.remove('contrast-theme');
        break;
      case 2:
        this.reddotpos = 'right';
        appcal?.classList.add('contrast-theme');
        appcal?.classList.remove('light-theme');
        appcal?.classList.remove('dark-theme');
        break;
    }
  }
}
}
