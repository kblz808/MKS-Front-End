import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransportPlansQuery } from 'src/app/setup/state/transport-plans.query';
import { TransportPlansService } from 'src/app/setup/state/transport-plans.service';
import { Column } from 'src/app/shared/models/column.model';
import { EMPTY_TRANSPORT_PLAN, TransportPlan } from 'src/app/setup/models/transport-plan.model';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
import { EMPTY_TRANSPORT_BID, TransportBid } from 'src/app/setup/models/transport-bid.model';
import { TransportBidsService } from 'src/app/setup/state/transport-bids.service';
import { TransportBidsQuery } from 'src/app/setup/state/transport-bids.query';
import { TransportBidFormComponent } from '../../ui/transport-bid-form/transport-bid-form.component';

@Component({
  selector: 'app-transport-bid',
  templateUrl: './transport-bid.component.html',
  styleUrls: ['./transport-bid.component.scss']
})
export class TransportBidComponent implements OnInit {

  actions: any[] = [
    { color: 'success', label: 'New', disabled: false, icon: 'add_circle' }
  ];

  tableActions: any[] = [
    { icon: 'edit', color: 'warn', tooltip: 'Edit'},
    { icon: 'description', color: 'primary', tooltip: 'Details'},
  ]

  columns: Column[] = [
    { name: 'reference_no', label: 'Reference number'},
    { name: 'description', label: 'Plan type'},
    { name: 'start_date', label: 'Start Date'},
    { name: 'end_date', label: 'End Date'},
    { name: 'opening_date', label: 'Opening Date'},
    { name: 'status', label: 'Status'},
    { name: 'bid_bond_amount', label: 'Bid Bond Amount'},
    { name: 'transport_plan_reference_no', label: 'Transport Plan Reference'},
  ];

  transportBid: TransportBid[] = [];

  transportBids$: Observable<TransportBid[]> = this.query.selectAll();

  
  constructor(private dialog: MatDialog,
    private service:TransportBidsService,
    private query: TransportBidsQuery,
    private router: Router,
    private route: ActivatedRoute){

      this.service.get().subscribe();
  }

  ngOnInit(): void {
  }


  onAdd(event: any): void {
    const dialogRef = this.dialog.open(TransportBidFormComponent, {
     disableClose: true,
     data: EMPTY_TRANSPORT_BID
    });
    
    (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
       this.service.add(data).subscribe();
       dialogRef.close();
    });
   }

   onEdit(event: any): void {
    console.log(event.item);
    
    const dialogRef = this.dialog.open(TransportBidFormComponent, {
      disableClose: true,
      data: event.item
     });
     
     (dialogRef.componentInstance as any).formSubmit.subscribe((data: any) => {
        this.service.update(data.id, data).subscribe();
        dialogRef.close();
     });
  }
}
