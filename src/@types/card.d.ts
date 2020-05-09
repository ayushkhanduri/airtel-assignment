export as namespace CartTypes;

export interface Cart {
    item: FoodTypes.FoodProduct,
    quantity: number
}

export interface CartStore {
    items: Array<Cart>
}
