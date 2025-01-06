import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form with default values and validators
  initializeForm(): void {
    this.form = this.fb.group({
      name: ['New Data', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      reenterPassword: ['', [Validators.required, Validators.minLength(8)]],
      passwordExp: ['2025-04-02', Validators.required],
      locked: [false],
      systemAltId: [false],
      eodInventory: [false],
      eodVerify: [false],
      group: [[]],
      creditDateChange: [false],
      invAdjustment: [false],
      fedBuySell: [false],
      recount: [false],
      sysAltSupervisor: [false],
      inventoryGroup: ['None'],
      titleForvalidation: ['', Validators.required],
      site: ['', Validators.required],
      glId: ['', Validators.required],
      overShortLimit: [0.00, [Validators.required, Validators.min(0)]],
      employeeId: ['', Validators.required],
      activeDirectoryname: ['', Validators.required],
      locationName: ['', Validators.required],
      locationAddress: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(formGroup: any) {
    const password = formGroup.get('password').value;
    const reenterPassword = formGroup.get('reenterPassword').value;
    return password === reenterPassword ? null : { passwordMismatch: true };
  }

  // Handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      // Add your form submission logic here (e.g., API call)
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(this.form);
    }
  }

  // Mark all form controls as touched to display validation errors
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Reset the form to its initial state
  onReset(): void {
    this.form.reset();
    this.initializeForm();
  }
}