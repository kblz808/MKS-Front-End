export interface TransportBid{
    id: number,
    reference_no: string,
    description: string,
    start_date: Date,
    end_date: Date,
    opening_date: Date,
    status: string,
    bid_bond_amount: number,
    transport_plan_id: number,
    transport_plan_reference_no: string
}

export const EMPTY_TRANSPORT_BID: TransportBid = {
    id: null,
    reference_no: null,
    description: null,
    start_date: null,
    end_date: null,
    opening_date: null,
    status: null,
    bid_bond_amount: null,
    transport_plan_id: null,
    transport_plan_reference_no: null
}