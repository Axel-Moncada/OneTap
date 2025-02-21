import colors from 'colors'
import server from './server'



const port = process.env.PORT || 4200

server.listen(port, () => {
    console.log(colors.magenta.bold(`Servidor funcionando: ${port} `))
})
























