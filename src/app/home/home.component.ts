import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      site: [''],
      gloryID: [''],
      cloneFrom: [''],
      basicProcessing: [''],
      sellingTo: [''],
      buyingFrom: [''],
      systemAltID: [''],
      nano: [''],
      password: [''],
      passwordExpDate: [''],
      eodInventory: [''],
      group: [''],
      newData: [''],
      reenterPassword: [''],
      locked: [false],
      eodInvVerifyRequired: [false],
      creditDateChange: [''],
      fedBuy: [''],
      fedSell: [''],
      transfer: [''],
      supervisorGroups: [''],
      invAdjustment: [''],
      recount: [''],
      insensitivityGroup: [''],
      titleForValidation: [''],
      autoSelling: [false],
      autoBuying: [false],
      glID: [''],
      employeeID: [''],
      overShortLimit: [''],
      activeDirectoryNano: [''],
      altGloryID: [''],
      packingInventory: [''],
      currency: [''],
      coin: [''],
      supply: [''],
      sellManifest: [''],
      locationNano: [''],
      locationAddress: [''],
      lastModifiedOn: [''],
      lastModifiedBy: ['']
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}


