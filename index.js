const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const Product = require("./modules/product.module");
const productRoute = require("./routes/products.routes.js")


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose
.connect(
    "mongodb+srv://qasim2905:admin123@cluster0.rjps6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log("database is connected");
    app.listen(3000, (req, res) => {
        console.log("server is running on 3000 port");
    });
})
.catch((err) => {
    console.log(err);
});


//Routes
app.use("/api/products" , productRoute);


app.get("/", (req, res) => {
    res.send("Hello i am running on port 3000");
});






// app.get("/api/products" , async (req ,res)=>{
//     try 
//     {
//       const getAllProducts = await Product.find({});  
//       res.send(getAllProducts);
//     } catch (error) {
//         return res.send(error)
//     }
// });




// app.get("/api/product/:id" , async (req ,res)=>{
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




// app.post("/api/product", async (req,res)=>{
//     const {name,quantity, price} = req.body

//     try {
//         const addProduct = await Product({name, quantity, price})
//         await addProduct.save()
//         return res.send("Product is added")     
//     } catch (error) {
//         return res.send("Error: "+error)
//     }
// });







// app.put("/api/products/:id",async (req,res)=>{
//     const {id} = req.params;
//     try {
//         const updateproduct = await Product.findByIdAndUpdate(id,{
//             name:"AgainUpdated"
//         });
//         if (updateproduct)
//             res.send(updateproduct)
//         else
//         res.status(404).json({message:"data not found"});
        
//     } catch (error) {
//         return res.status(404).json({message:"data not found"})
//     }
// });

// app.delete("/api/products/:id",async(req,res)=>{
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
