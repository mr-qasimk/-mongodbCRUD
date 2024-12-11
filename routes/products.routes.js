const express = require ('express');
const Product = require('../modules/product.module.js');
const router = express.Router();
const {getProducts,getProductById, postData , updateData, deleteData} = require('../controllers/product.controller.js')


// router.get('/', async (req, res) => {
  
//     try 
//     {
//       const getAllProducts = await Product.find({});  
//       res.status(200).json(getAllProducts);
//     } catch (error) {
//         return res.send(error)
//     }
// });

//using a router and controller
router.get("/", getProducts);




// router.get("/:id",async(req,res)=>{
//     console.log(req.params);
    
//     const {id}=req.params;
//     try 
//     {
//       const getProductById = await Product.findById(id);
//       if(getProductById)  
//       res.send(getProductById);
//     else
//     res.status(404).json({message:"data not found"});
// } catch (error) {
//     return res.status(404).json({message:"data not found"});
// }
// });

router.get("/:id" , getProductById);



// router.post("/",async(req,res)=>{
//     const {name,quantity, price} = req.body

//     try {
//         const addProduct = await Product({name, quantity, price})
//         await addProduct.save()
//         return res.send("Product is added")     
//     } catch (error) {
//         return res.send("Error: "+error)
//     }
// });

router.post("/", postData);



// router.put("/:id",async(req,res)=>{
//     const {id} = req.params;
//     const {name,quantity, price} = req.body;
//     try {
//         const updateproduct = await Product.findByIdAndUpdate(id,{
//             name: name,
//             quantity:quantity,
//             price : price
//         });
//         if (updateproduct)
//             res.status(200).json({message:"data is successfully updated"})
//         else
//         res.status(404).json({message:"data not found"});
        
//     } catch (error) {
//         return res.status(404).json({message:"data not found"})
//     }
// });

router.put("/:id", updateData);


// router.delete("/:id",async(req,res)=>{
//     const {id} = req.params
//     try {
//         const dataDelete = await Product.findByIdAndDelete(id)
//         if(dataDelete)
//             res.status(200).json({message:"Data is deleted succssfully"})
//         else
//         res.status(200).json({message:"Data is not found "})
        
//     } catch (error) {
//         return res.status(404).json({message:"data not found"})
//     }
// });

router.delete("/:id", deleteData);




module.exports = router;