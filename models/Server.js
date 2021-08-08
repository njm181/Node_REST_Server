const express = require('express')
var cors = require('cors')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas de la app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo del Body (Post, Put, etc). Serializa todo lo que venga a formato JSON
        this.app.use(express.json());

        //Directorio publico
        this.app.use( express.static('public') );
    }


    routes(){
        //Middware que se carga cuando pasa una solicitud por esta ruta. Para utilizar las request que estan dentro de Routes
       this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: '+ this.port)
        });
    }

}

module.exports = Server;