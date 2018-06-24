import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'show-errors',
  template: `
    <div style="display: flex; flex-direction: column; width: 100%;align-items: flex-end; " *ngIf="shouldShowErrors()">
      <div  style=" margin-right: 1em; color: red" *ngFor="let error of listOfErrors()">{{error}}</div>
    </div>
  `,
})
export class ShowErrorComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'email': () => 'Type correct email please',
    'maxlength': (params) => 'Maximum allowed length is ' + params.requiredLength,
    'minvalue': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxvalue': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorComponent.errorMessages[type](params);
  }

}
