import { Injectable } from '@angular/core';
import { CalcButtons } from '../Interfaces/ICalcButtons';

@Injectable({
  providedIn: 'root'
})
export class CalcbuttonsService {
  tiles: CalcButtons[] = [
    {btnid: "btnid0", title: '7', cols: 1, rows: 1, color: '', use: '7'},
    {btnid: "btnid1", title: '8', cols: 1, rows: 1, color: '', use: '8'},
    {btnid: "btnid2", title: '9', cols: 1, rows: 1, color: '', use: '9'},
    {btnid: "btnid3", title: 'DEL', cols: 1, rows: 1, color: '', use: 'DEL'},
    {btnid: "btnid4", title: '4', cols: 1, rows: 1, color: '', use: '4'},
    {btnid: "btnid5", title: '5', cols: 1, rows: 1, color: '', use: '5'},
    {btnid: "btnid6", title: '6', cols: 1, rows: 1, color: '', use: '6'},
    {btnid: "btnid7", title: '+', cols: 1, rows: 1, color: '', use: '+'},
    {btnid: "btnid8", title: '1', cols: 1, rows: 1, color: '', use: '1'},
    {btnid: "btnid9", title: '2', cols: 1, rows: 1, color: '', use: '2'},
    {btnid: "btnid10", title: '3', cols: 1, rows: 1, color: '', use: '3'},
    {btnid: "btnid11", title: '-', cols: 1, rows: 1, color: '', use: '-'},
    {btnid: "btnid12", title: '.', cols: 1, rows: 1, color: '', use: '.'},
    {btnid: "btnid13", title: '0', cols: 1, rows: 1, color: '', use: '0'},
    {btnid: "btnid14", title: '/', cols: 1, rows: 1, color: '', use: '/'},
    {btnid: "btnid15", title: 'x', cols: 1, rows: 1, color: '', use: 'x'},
    {btnid: "btnid16", title: 'RESET', cols: 2, rows: 1, color: '', use: 'RESET'},
    {btnid: "btnid17", title: '=', cols: 2, rows: 1, color: '', use: '='},
  ];
  constructor() { }
}
