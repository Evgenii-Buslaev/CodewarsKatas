/* f you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) 
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't  invoked before with these arguments */

let invokingCounter = 0;

function cache(func) {
  const cache = {};
  return function () {
    const memoizedKey = JSON.stringify(arguments);
    console.log(`arguments: ${JSON.stringify(arguments)}`);
    console.log("cache", cache);
    return memoizedKey in cache
      ? cache[memoizedKey]
      : (cache[memoizedKey] = func.apply(this, arguments));
  };
}

const complexFunction = function (arg1, arg2) {
  console.log("complex function invoked");
  invokingCounter++;
};

const cachedFunction = cache(complexFunction);

const invoke11 = cachedFunction("foo", "bar");
const invoke12 = cachedFunction("foo", "bar");
const invoke21 = cachedFunction("foo", "baz");
const invoke22 = cachedFunction("foo", "baz");
