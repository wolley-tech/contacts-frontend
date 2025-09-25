import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PhoneInputComponent), multi: true }]
})
export class PhoneInputComponent implements ControlValueAccessor {
  private _value = '';
  display = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this._value = obj || '';
    this.display = this.format(this._value);
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  onInput(ev: any) {
    const raw = ev.target.value || '';
    const digits = raw.replace(/\D/g, '').slice(0, 11);
    this._value = digits;
    this.display = this.format(digits);
    this.onChange(digits);
  }

  private format(digits: string): string {
    if (!digits) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7,11)}`;
  }
}
