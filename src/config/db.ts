import mongoose from "mongoose";




export const conectDB = async () => {
    try{
        const url = process.env.MONGO_URL
        const {connection} = await mongoose.connect(url)
       
        const url2 =`${connection.host}:${connection.port}`
        console.log('Mongoose conectado en'+ url2)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}