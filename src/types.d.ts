export interface ApiPage {
    title: string,
    contents: string
}

export interface Page extends ApiPage {
    [id:string]
}

export interface ApiPages {
    [id:string]: ApiPage;
}