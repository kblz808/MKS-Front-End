import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransportBidsStore, TransportBidsState } from './transport-bids.store';
// import { TransportPlansStore, TransportPlansState } from './transport-plans.store';


@Injectable({ providedIn: 'root' })
export class TransportBidsQuery extends QueryEntity<TransportBidsState> {

  constructor(protected override store: TransportBidsStore) {
    super(store);
  }

}