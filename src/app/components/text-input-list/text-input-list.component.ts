import { Component, NgModule, OnInit } from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'ba-text-input-list',
  templateUrl: './text-input-list.component.html',
  styleUrls: ['./text-input-list.component.scss']
})
export class TextInputListComponent implements OnInit, ControlValueAccessor {

  private _onChange = Function.prototype;
  private _onTouch = Function.prototype;
  value: [string];

  constructor() { }

  ngOnInit() {

  }

  writeValue(obj: [string]): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  onChange(): void {
    this._onChange(this.value);
  }

}

@NgModule({
  imports: [TextInputComponent, ReactiveFormsModule],
  exports: [TextInputListComponent, TextInputComponent, ReactiveFormsModule],
  declarations: [TextInputListComponent]
})
export class TextInputListModule { }
