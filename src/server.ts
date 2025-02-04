import express  from "express";
import 'Dotenv/config'
import router from "./router";
import { conectDB } from "./config/db";

const app = express ()
conectDB()

/*Leer datos de formularios */
app.use (express.json())


app.use('/',router)




export default app