var testLogger = require('loggerbook');
testLogger = new testLogger()
testLogger.config({
    logPath : "/log",
	fileName : "test-log",
	channel : "hourly"
})

module.exports = {
    'test' : () => {
        testLogger.log("hello tester");
    }
}