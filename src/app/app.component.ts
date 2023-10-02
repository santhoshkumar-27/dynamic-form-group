import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-group';
  personForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {

  }
  ngOnInit() {
    // console.log('this is called')
    this.personForm = this.fb.group({
      name: new FormControl(''),
      deliveryAddress: this.fb.group({
        address: new FormControl(''),
        pincode: new FormControl('')
      })
    })
  }

  onSubmit() {
    console.log(this.personForm.value)
  }
}
