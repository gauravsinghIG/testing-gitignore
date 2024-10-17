var logger = require('loggerbook');
const testChunk = require('./main');
logger = new logger();
logger.config({
    logPath : "/log",
	fileName : "gaurav",
	channel : "hourly"
})

logger.log("hello");
testChunk.test();