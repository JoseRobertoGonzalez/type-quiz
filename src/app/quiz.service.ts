import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  numberInput: string = '';
  stringInput: string = '';
  arrayInput: string = '';
  booleanInput: string = '';
  anyInput: string = '';
  undefinedInput: string = '';
  
  isNumberCorrect: boolean = false;
  isStringCorrect: boolean = false;
  isArrayCorrect: boolean = false;
  isBooleanCorrect: boolean = false;
  isAnyCorrect: boolean = false;
  isUndefinedCorrect: boolean = false;

  isNumberSubmitted: boolean = false;
  isStringSubmitted: boolean = false;
  isArraySubmitted: boolean = false;
  isBooleanSubmitted: boolean = false;
  isAnySubmitted: boolean = false;
  isUndefinedSubmitted: boolean = false;

  constructor() { }

  checkNumberAnswer() {
    const numberRegex = /^\d+$/;
    this.isNumberCorrect = numberRegex.test(this.numberInput);
    this.isNumberSubmitted = true;
  }

  checkStringAnswer() {
    const stringRegex = /^[A-Za-z]+$/;
    this.isStringCorrect = stringRegex.test(this.stringInput);
    this.isStringSubmitted = true;
  }

  checkArrayAnswer() {
    const arrayRegex = /^\[\d+(,\s*\d+)*\]$/;
    this.isArrayCorrect = arrayRegex.test(this.arrayInput);
    this.isArraySubmitted = true;
  }

  checkBooleanAnswer() {
    this.isBooleanCorrect = this.booleanInput === 'true' || this.booleanInput === 'false';
    this.isBooleanSubmitted = true;
  }

  checkAnyAnswer() {
    // Any input is correct by definition
    this.isAnyCorrect = true;
    this.isAnySubmitted = true;
  }

  checkUndefinedAnswer() {
    this.isUndefinedCorrect = this.undefinedInput === '' || this.undefinedInput === 'undefined' || this.undefinedInput === 'null';
    this.isUndefinedSubmitted = true;
  }
}