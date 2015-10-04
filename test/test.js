function Reporter() {
    this.messages = [];
}
Reporter.prototype.pass = function(message) {
    this.messages.push({
        pass: true,
        message: message
    })
};
Reporter.prototype.fail = function(message, err) {
    this.messages.push({
        pass: false,
        message: message,
        error: err
    })
};
Reporter.prototype.report = function() {
    var passing = this.messages.filter(function(message) {
        return message.pass;
    });

    console.log("%d of %d tests pass.", passing.length, this.messages.length);
    console.log();

    this.messages.forEach(function(message) {
        if (message.pass) {
            console.log("[✔] " + message.message);
        }
        else {
            console.error("[ ] " + message.message);
        }
    })

    if (passing.length === this.messages.length) {
        console.log();
        console.log("%d of %d tests pass!", passing.length, this.messages.length);
    }
    else {
        this.messages.forEach(function(message) {
            if (!message.pass) {
                throw message.error;
            }
        });
    }
};


var reporter = new Reporter();

function test(message, t) {
    try {
        t();
        reporter.pass(message);
    }
    catch (e) {
        reporter.fail(message, e)
    }
}

test.report = function() {
    reporter.report();
};

module.exports = test;