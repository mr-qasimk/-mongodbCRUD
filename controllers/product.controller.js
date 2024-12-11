const Product = require('../modules/product.module.js')

const getProducts = async(req,res)=>{
    try 
    {
      const getAllProducts = await Product.find({});  
      res.status(200).json(getAllProducts);
    } catch (error) {
        return res.send(error)
    }
}

const getProductById = async(req,res)=>{
    console.log(req.params);
    
    const {id}=req.params;
    try 
    {
      const getProductById = await Product.findById(id);
      if(getProductById)  
      res.send(getProductById);
    else
    res.status(404).json({message:"data not found"});
} catch (error) {
    return res.status(404).json({message:"data not found"});
}
}

const postData = async(req,res)=>{
    const {name,quantity, price} = req.body

    try {
        const addProduct = await Product({name, quantity, price})
        await addProduct.save()
        return res.send("Product is added")     
    } catch (error) {
        return res.send("Error: "+error)
    }
}

const updateData = async(req,res)=>{
    const {id} = req.params;
    const {name,quantity, price} = req.body;
    try {
        const updateproduct = await Product.findByIdAndUpdate(id,{
            name: name,
            quantity:quantity,
            price : price
        });
        if (updateproduct)
            res.status(200).json({message:"data is successfully updated"})
        else
        res.status(404).json({message:"data not found"});
        
    } catch (error) {
        return res.status(404).json({message:"data not found"})
    }
}

const deleteData = async(req,res)=>{
    const {id} = req.params
    try {
        const dataDelete = await Product.findByIdAndDelete(id)
        if(dataDelete)
            res.status(200).json({message:"Data is deleted succssfully"})
        else
        res.status(200).json({message:"Data is not found "})
        
    } catch (error) {
        return res.status(404).json({message:"data not found"})
    }
}

module.exports= {
    getProducts,
    getProductById,
    postData,
    updateData,
    deleteData
}