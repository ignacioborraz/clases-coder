import { Router } from "express";
import categoryManager from "../../data/mongo/managers/CategoriesManager.mongo.js";

const categoryRouter = Router()

categoryRouter.post("/", async(req, res, next)=>{
    try {
        const data = req.body
        const one = await categoryManager.create(data)
        return res.json({
            statusCode:201,
            message:"Category created",
            response:one
        })
    } catch (error) {
        next (error)
    }
})
export default categoryRouter

