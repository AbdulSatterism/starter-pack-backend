import { model, Schema } from "mongoose";
import { IShop } from "./shop.interface";

const userSchema = new Schema<IShop>({
    name: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: String, required: true },
    user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
  });
  

  export const Shop= model('Shop',userSchema)