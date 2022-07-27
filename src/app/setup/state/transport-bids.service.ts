import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { TransportBidsStore } from './transport-bids.store';
import { TransportBid } from '../models/transport-bid.model';

@Injectable({ providedIn: 'root' })
export class TransportBidsService{

    constructor(private transportBidsStore: TransportBidsStore, private http: HttpClient, private utilService: UtilService){
    }

    get() {
        const url = `${environment.apiUrl}/transport_bids`;
        return this.http.get(url).pipe(
          tap({next: (response: any) => {
            if (response.success) {
              this.transportBidsStore.set(response.data);
            } else {
              this.utilService.showErrorMessage(response.error);
            }
          }, error: () => this.utilService.showErrorMessage('Error when getting data')})
        )
      }
      
    add(transport_bid: TransportBid) {
      const url = `${environment.apiUrl}/transport_bids`;
      return this.http.post(url, {transport_bid}).pipe(
        tap({
          next: (response: any) => {
            if (response.success) {
              
              this.transportBidsStore.add(response.data);
            } else {
              
              this.utilService.showErrorMessage(response.error);
            }
          }, error: () => this.utilService.showErrorMessage('Error')
        })
      )
    }
  
    update(id: any, transport_bid: Partial<TransportBid>) {
      const url = `${environment.apiUrl}/transport_bids/${id}`;
      return this.http.put(url, { transport_bid }).pipe(
        tap({
          next: (response: any) => {
            if (response.success) {
              this.transportBidsStore.update(id, response.data);
            } else {              
              this.utilService.showErrorMessage(response.error);
            }
          }, error: () => this.utilService.showErrorMessage('Error')
        })
      )
    }
}