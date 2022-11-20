import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  value: string = '';
  @ViewChild('mainInput') mainInput!: ElementRef;
  phoneRegex: RegExp =
    /^[^\s]?\(?(\+?[0-9]{3})\)?([ .-]?)([0-9]{2,4})([ .-]?)([0-9]{2,4})([ .-]?)([0-9]{2,4})/;
  constructor() {}

  ngOnInit(): void {}
  validPhone() {
    if (this.value.match(/[^\d\(\)\+\.\-\ ]{1,}/)) {      
      this.value = '';
    } else {
      if (this.phoneRegex.test(this.value)) {
        this.mainInput.nativeElement.classList.add('correct');
        this.mainInput.nativeElement.classList.remove('incorrect');
      } else {
        this.mainInput.nativeElement.classList.add('incorrect');
        this.mainInput.nativeElement.classList.remove('correct');
      }
    }
  }
}
