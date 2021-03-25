export interface IFavoritePublications {
    publication_title: string,
    publication_text: string,
    publication_createAt: Date
}

export class FavoritePublications {
    public publication_title: string
    public publication_text: string
    public publication_createAt: Date

    constructor(data: IFavoritePublications){
        this.fromData(data)
    }

    public fromData(data:IFavoritePublications){
        this.publication_title = data.publication_title || ''
        this.publication_text = data.publication_text || ''
        this.publication_createAt = data.publication_createAt || null
    }
}