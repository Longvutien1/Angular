export interface IProduct{
    id?: number,
    name?:string,
    price?:number,
    status?: boolean,
    image?: string,
    desc: string
}

export interface IUser{
    id?: number,
    username?:string,
    email?:string,
    password?: string,
    image?: string,
    role?: number
}

export interface ICategory{
    id?: number,
    name?:string,
    status?: string
}