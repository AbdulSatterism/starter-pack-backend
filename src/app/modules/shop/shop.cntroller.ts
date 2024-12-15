import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { shopService } from "./shop.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";


const create=catchAsync(async(req:Request,res:Response)=>{
    const resultit=await shopService.create(req.body)


    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Product created successfully',
        data: resultit
      });

})

export const Shopcrller={
    create
}