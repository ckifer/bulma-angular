import { Component, forwardRef, Input, NgModule } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '../text-input/text-input.component';

@Component({
  selector: 'ba-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsInputComponent),
      multi: true
    }
  ]
})
export class TagsInputComponent implements ControlValueAccessor {

  tags: string[] = [];
  input: string;
  focused = false;
  private _onChange = Function.prototype;
  private _onTouch = Function.prototype;

  @Input() id: string;
  @Input() label: string;

  writeValue(obj: [string]): void {
    this.tags = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  spacePressed(event: Event): void {
    event.preventDefault();
    this.onChange();
  }

  onDelete(value: string) {
    this.tags = this.tags.filter(tag => tag !== value);
    this._onChange(this.tags);
  }

  backspacePressed() {
    if (!this.input) {
      this.tags.pop();
      this._onChange(this.tags);
    }
  }

  enterFocus(element: HTMLElement): void {
    element.focus();
    this.focused = true;
  }

  leaveFocus(): void {
    this.onChange();
    this.focused = false;
  }

  private onChange(): void {
    if (this.input && this.input.trim()) {
      this.tags.push(this.input);
      this._onChange(this.tags);
    }

    this.input = null;
  }

}

@NgModule({
  imports: [
    TextInputModule
  ],
  exports: [
    TagsInputComponent,
    ReactiveFormsModule,
    TextInputModule
  ],
  declarations: [
    TagsInputComponent
  ]
})
export class TagsInputModule { }
