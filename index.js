const express = require("express")
const path = require("path")//help in routing
const mongoose = require("mongoose")
const workerRoutes = require("./routes/workerRoutes")
const app = express()

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "html")

app.use(express.urlencoded({ extended: true }));

//mongodb://localhost:27017
// connecting to our app
mongoose.connect("mongodb://localhost:27017/karibu",
    { useNewUrlParser: true,
    useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Connected to mongo DB");
        else console.log("Error connecting to mongoDB  " + err)
    })


    app.use("/", workerRoutes)
    const workerSchema = new mongoose.Schema({
        name: String,
        field: String,
        age: Number,
        Salary: Number,
    })
//creating a model
    const workerModel = new mongoose.model("Worker", workerSchema)

    const data = new workerModel({
             name: "Irene",
            field: "Sales Agent",
             age:"26",
             salary:"10000000",
        })
        data.save()




app.get("/", (req,res)=>{
 res.sendFile(path.join(__dirname, "/index.html"))
})
app.get("/try", (req,res)=>{
    res.sendFile(path.join(__dirname, "/try.html"))
   })







app.get("/pet", (req, res)=>{
    res.send("This is my home page")
})


app.get("/home", (req,res)=>{
    res.send("Welcome to our home page") 
})

app.get("/profile", (req,res)=>{
    res.send("Welcome") 
})

app.get("/gallery", (req,res)=>{
    res.send("pictures") 
})

app.listen(process.env.port || 8000)
console.log("server running on port" + (process.env.port || 8000))