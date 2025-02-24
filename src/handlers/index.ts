import { Request, Response } from "express"
import User from "../models/User"



export const createAccount = async (req, res) => {

    const { email } = req.body

    const userExist = await User.findOne({ email })
    if (userExist) {
        const error = new Error('El usario ya existe')
        return res.json({ error: error.message })
    }

    const user = new User(req.body)
    await user.save()
    res.send('Registro creado correctamente')
}