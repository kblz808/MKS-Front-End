import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
// import { TransportPlan } from '../models/transport-plan.model';
import { TransportBid } from '../models/transport-bid.model';

export interface TransportBidsState extends EntityState<TransportBid> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transport-bids' })
export class TransportBidsStore extends EntityStore<TransportBidsState> {

  constructor() {
    super();
  }
}