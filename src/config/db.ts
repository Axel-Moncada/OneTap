import mongoose from "mongoose";
import colors from "colors"




export const conectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URL)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.yellow.bold(`Mongoose conectado en ${url}`))
    } catch (error) {
        console.log(colors.red.bold(error))
        process.exit(1)
    }
}