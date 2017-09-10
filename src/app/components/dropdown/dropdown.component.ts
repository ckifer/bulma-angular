import {Component, forwardRef, Input, Output, NgModule} from '@angular/core';
import {NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";


export class DropDownValue {
  value: string;
  key: string;

  constructor(value: string, key: string){
    this.value = value;
    this.key = key;
  }
}

@Component({
  selector: 'ba-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent {
  isActive: boolean = false;

  @Input()
  values: DropDownValue[];


  toggleActive(){
    if(this.isActive){
      this.isActive = false;
    } else if (!this.isActive){
      this.isActive = true;
    }
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownComponent
  ],
  declarations: [
    DropdownComponent
  ]
})
export class DropDownModule { }
