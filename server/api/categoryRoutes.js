const router = require('express').Router();
const {
	models: { Product },
} = require("../db");
const Category = require("../db/models/Category");


router.get('/', async(req, res, next)=>{
    try {
       const categories = await Category.findAll({
        include: Product
       })  
       res.json(categories)   
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next)=>{
    try {
        const category = await Category.findByPk(req.params.id,{
            include: Product
        })
        res.json(category)
    } catch (error) {
        next(error)
    }
})

module.exports = router