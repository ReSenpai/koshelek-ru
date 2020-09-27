export type BidsType = Array<Array<string>>;
export type AsksType = Array<Array<string>>;

export type DepthType = {
    lastUpdateId: number
    bids: BidsType
    asks: AsksType
}

export type TableType = {
    amount: string
    price: string
    total: string
    id: number
}

export type DepthStreamType = {
    e: string       // Event type
    E: number       // Event time
    s: string       // Symbol
    U: number       // First update ID in event
    u: number       // Final update ID in event
    b: BidsType     // Bids to be updated
    a: AsksType     // Asks to be updated
}