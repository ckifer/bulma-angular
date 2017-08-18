import { Component, NgModule, OnInit } from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '../text-input/text-input.component';

@Component({
  selector: 'ba-text-input-list',
  templateUrl: './text-input-list.component.html',
  styleUrls: ['./text-input-list.component.scss']
})
export class TextInputListComponent implements OnInit, ControlValueAccessor {

  private _onChange = Function.prototype;
  private _onTouch = Function.prototype;
  tags: string[] = [];

  constructor() { }

  ngOnInit() {

  }

  writeValue(obj: [string]): void {
    this.tags = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  onChange(input): void {
    if (input.value.trim()) {
      this.tags.push(input.value);
      this._onChange(this.tags);
    }

    input.value = null;
  }

  onDelete(value: string) {
    this.tags = this.tags.filter(tag => tag !== value);
  }

  focusElement(element: HTMLElement): void {
    element.focus();
  }
}

@NgModule({
  imports: [
    TextInputModule
  ],
  exports: [
    TextInputListComponent,
    ReactiveFormsModule,
    TextInputModule
  ],
  declarations: [
    TextInputListComponent
  ]
})
export class TextInputListModule { }
