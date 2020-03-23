'use strict';
const app = require('../src/app');
const debug = require('debug')('apinode:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '7200');
app.set('port', port)

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API rodando na  porta ${ port }`);

//O código acima pode ser substituído pelo código subsequente
// app.listen(port, () => console.log(`API rodando na porta ${ port }`));
// app.on('error', onError);
// app.on('listening', onListening);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port => 0){
        return port;
    }

    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated provileges');
            process.exit(1);
            break;
        case  'EADDRINUSE':
            console.error(bind + ' is already in use'); 
            process.exit(1);
            break;
        default:
            throw error;     
    }    
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
}

