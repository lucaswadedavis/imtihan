//ultimately, we want to pass back a collection of functions to test
//each function will itself have a series of tests to run
//each test will have a message, a target, and a suffix
//ex:
//function = x();
//test 1 message = 'should adhere to the shadow pact'
//test 1 target = 'x(42)'
//test 1 suffix = 'to.be.a('string')'

var x = function(y){return y === 42 ? "the meaning." : "time is short.";
};


var a = function(x){return x+10;};

var b = function(x){return 300;};

