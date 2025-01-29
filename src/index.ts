import express from 'express'

const app = express()


// Routing
app.get('/', (req,res) => {
    res.send('Hola mundo en express / Typescript')
})


const port = process.env.PORT || 4200



app.listen(port, () => {
    console.log('Servidor funcionando:',port)
})