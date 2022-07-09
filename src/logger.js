const loggerPino = require('pino');

const _logger = loggerPino({ level: 'silent' });

function getLogger(){
    return _logger;
}


module.exports = { getLogger }

