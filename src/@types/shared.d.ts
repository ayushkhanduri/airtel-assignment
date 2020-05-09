export as namespace SharedTypes;

export interface SuccessResponse<T> {
    status: boolean,
    data: T,
    message: string
}
export interface Routes {
    url: string,
    name: string,
    icon?: React.FC
}

export interface Action {
    payload?: any,
    type: string
}
