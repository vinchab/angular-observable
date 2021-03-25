export interface IFavoritesUsers {
    email: string,
    name: string,
    firstname: string
    createAt: Date
}

export class FavoritesUsers {
    public email: string
    public name: string
    public firstname: string
    public createAt: Date

    constructor(data: IFavoritesUsers){
        this.fromData(data)
    }

    fromData(data:IFavoritesUsers){
        this.email = data.email || ''
        this.name = data.name || ''
        this.firstname = data.firstname || ''
        this.createAt = data.createAt || null
    }
}
