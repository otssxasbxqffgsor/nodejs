var logger = require('./Logger');

logger.log('Hello World');

logger.changeStrategy('toFile')

logger.log('Hello World');