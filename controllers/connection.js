const connectionReady = (cb = () =>{}) => {
    console.log('Listo para escuchas mensajes')
    console.log('Cliente Listo!!');
    console.log('🔴 escribe: hola');
    cb()
}

const connectionLost = (cb = () =>{}) => {
    console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
    cb()
}


module.exports = {connectionReady, connectionLost}