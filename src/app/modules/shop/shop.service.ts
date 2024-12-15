import { sendNotifications } from "../../../helpers/notificationHelper";
import { IShop } from "./shop.interface";
import { Shop } from "./shop.model";



const create=async(data:IShop)=>{
const result=await Shop.create(data)

const datas={
    text:"creatre a new shop",
    receiver:data.user
}

sendNotifications(datas)


return result

}


export const shopService={
    create
}