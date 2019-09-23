import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-discount-rules',
  templateUrl: './discount-rules.component.html',
  styleUrls: ['./discount-rules.component.scss']
})
export class DiscountRulesComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input() discountForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.discountForm.addControl('numberOfUsers' , new FormControl());
    this.discountForm.addControl('discountPercent' , new FormControl());
    this.discountForm = this.fb.group({numberOfUsers: [null], discountPercent: [null]} );
  //   this.discountForm = new FormGroup({
  //    numberOfUsers: new FormControl(''),
  //    discountPercent: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(100)])
  //   });
  }

}
