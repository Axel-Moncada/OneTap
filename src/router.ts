import { Router } from "express";


const router = Router()

/**Autenticacion */
router.post('/auth/register', (req, res) => {
    const body = (req.body)
    console.log(body.name + body.email)
})


export default router