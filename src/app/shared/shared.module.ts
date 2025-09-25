import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhoneInputComponent } from './phone-input/phone-input.component';

@NgModule({
  declarations: [PhoneInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PhoneInputComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
