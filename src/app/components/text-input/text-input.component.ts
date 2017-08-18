import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})

export class TextInputComponent implements ControlValueAccessor {

  @HostBinding('class') classes = 'field';
  @Input() control: FormControl;
  @Input() id: string;
  @Input() label: string;
  @Input() required: boolean = true;
  @Input() type = 'text';
  @Input() leftIcon;
  @Input() rightIcon;

  value: string;
  _onChange = Function.prototype;
  _onTouched = Function.prototype;

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  onChange(): void {
    this._onChange(this.value);
  }

  onTouch(): void {
    this._onTouched();
  }
}
