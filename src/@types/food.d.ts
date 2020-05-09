export as namespace FoodTypes;

export interface FoodProduct {
    name: string,
    price: number,
    image: string,
    tags: Array<string>,
    rating: number,
    id: number
}

export interface FoodState {
    data: Array<FoodProduct>,
    searchText: string,
    filter: {
        rating: number,
        priceRange: {
            low: number,
            high: number
        }
    }
}
export interface FoodProductResponse extends SharedTypes.SuccessResponse<Array<FoodProduct>> {

}
