export interface IUser {
    id: number,
    email: string,
    name: string,
    firstname: string,
    createAt: Date,
    lastConnect: Date
}

export class User {
    public id: number
    public email: string
    public name: string
    public firstname: string
    public createAt: Date
    public lastConnect: Date

    constructor(data: IUser){
        this.fromData(data)
    }

    private fromData(data:IUser){
        this.id = data.id || null
        this.email = data.email || ''
        this.name = data.name || ''
        this.firstname = data.firstname || ''
        this.createAt = data.createAt || null
        this.lastConnect = data.lastConnect || null
    }
}