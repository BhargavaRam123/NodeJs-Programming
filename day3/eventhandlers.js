const event = require('events')

const eventhandler = new event.EventEmitter()
const func = ()=>{
    console.log("scream")
}
eventhandler.on('scream',func)
eventhandler.emit('scream')