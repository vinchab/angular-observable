export interface IPublication {
    id:number,
    title: string,
    text:string,
    createAt: Date
}

export class Publication {
    public id:number
    public title: string
    public text:string
    public createAt: Date

    constructor(data: IPublication){
        this.fromData(data)
    }

    public fromData(data:IPublication){
        this.id = data.id || null
        this.title = data.title || ''
        this.text = data.text || ''
        this.createAt = data.createAt || null
    }
}