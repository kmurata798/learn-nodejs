const EventEmitter = require('events');
const uuid = require('uuid');

// uuid is a certain format of an id

// .v4 generates random id
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// Allow other files to import this class
// module.exports = Logger


const logger = new Logger();

logger.on('message', (data) => console.log('Called Listender:', data));

logger.log('Hello World!');
logger.log('Another message');
logger.log('And more');