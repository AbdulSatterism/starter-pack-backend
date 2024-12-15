import { Types } from "mongoose"


export type IShop={
    name:string
    des:string
    price:string
    user:Types.ObjectId
}