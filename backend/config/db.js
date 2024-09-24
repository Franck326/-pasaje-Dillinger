import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/Dillinger`,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then((db)=>{
    console.log(`conectado a la base de datos`)
}).catch(err=>{
    console.error(`Error de conexión: ${err}`)
})
