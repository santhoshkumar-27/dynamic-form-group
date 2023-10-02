import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class AddressComponent {
  parentContainer = inject(ControlContainer)
  @Input({required: true}) groupName!: string;

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
  ngOnInit() {
    this.parentFormGroup.addControl(this.groupName, new FormGroup({
      address: new FormControl(''),
      pincode: new FormControl('')
    }))
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.groupName)
  }
}
