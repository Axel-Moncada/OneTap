import { Request, Response } from "express"
import User from "../models/User"



const createAccount = async (req: Request, res: Response) => {
    const { email } = req.body
    const userExist = await User.findOne({ email })

    if (userExist) {
        const error = new Error("El usario ya existe")
        return res.json({ error: error.message })
    }


    const user = new User(req.body)
    await user.save()
    res.send('Registro creado correctamente')
}

export default createAccount