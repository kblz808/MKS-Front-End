import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import  {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transport-bid-form',
  templateUrl: './transport-bid-form.component.html',
  styleUrls: ['./transport-bid-form.component.scss']
})
export class TransportBidFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  form: FormGroup;

  options: string[] = ["Open", "Closed"];

  transport_plan: any[] = [];

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TransportBidFormComponent>) {
    this.form = this.fb.group({
      id: data.id,
      reference_no: data.reference_no,
      description: data.description,
      start_date: data.start_date,
      end_date: data.end_date,
      opening_date: data.opening_date,
      status: data.status,
      bid_bond_amount: data.bid_bond_amount,
      transport_plan_id: data.transport_plan_id
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const payload = this.form.value;
    console.log(payload);
    this.formSubmit.emit(payload);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
