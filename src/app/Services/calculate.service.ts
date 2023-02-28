import { Injectable } from '@angular/core';
import { CalcbuttonsService } from './calcbuttons.service';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  operations: string[] = ['RESET', 'DEL', '-', '+', '/', 'x', '='];
  total: string = "0";
  calcCache: any[] = [];
  counter: number = 0;
  decimal: number = 0;

  constructor(public calcButtonsService: CalcbuttonsService) { }

  enterNumber(index: number){
    this.decimal = 0;
    var clicked = this.calcButtonsService.tiles[index]['use'];
    if(this.operations.indexOf(clicked) === -1) {
      if(this.total === '0'){
        if(clicked === '.' && this.decimal === 0){
          this.total = '0.';
          this.decimal += 1;
        }
      }

      if(clicked === '.' && this.decimal === 0) {
        this.total += clicked;
        this.decimal += 1;
      }
      if(clicked === '.' && this.decimal > 0) {
        return;
      }
      else {
        if(this.total === '0'){
          this.total = clicked;
        }
        else {
          this.total += clicked;
        }
      }
    }
    if(clicked !== '=' && this.operations.indexOf(clicked) > -1 && clicked !== 'DEL' && clicked !== 'RESET'){
      this.calcCache.push(this.total);
      this.calcCache.push(clicked);
      this.total = '0';
    }
    if(clicked === '='){
      this.calcCache.push(this.total);
      this.calculate();
    }
    if(clicked === 'RESET'){
      this.calcCache = [];
      this.total = '0';
    }
    if(clicked === 'DEL'){
      this.calcCache.splice(-1, 1);
      this.total = '';
    }
  }

  calculate(){
    var runningTotal = 0;
    while(this.calcCache.length > 0){
      if(this.operations.indexOf(this.calcCache[0]) === -1) {
        runningTotal = parseFloat(this.calcCache[0]);
        this.calcCache.splice(0, 1);
      }
      if(this.calcCache[0] === '+'){
        runningTotal += parseFloat(this.calcCache[1]);
        this.calcCache.splice(0, 2);
      }
      if(this.calcCache[0] === '-'){
        runningTotal -= parseFloat(this.calcCache[1]);
        this.calcCache.splice(0, 2);
      }
      if(this.calcCache[0] === 'x'){
        runningTotal *= parseFloat(this.calcCache[1]);
        this.calcCache.splice(0, 2);
      }
      if(this.calcCache[0] === '/'){
        runningTotal /= parseFloat(this.calcCache[1]);
        this.calcCache.splice(0, 2);
      }
    }
    this.total = runningTotal.toString();
    this.calcCache.push(this.total);
  }
}
