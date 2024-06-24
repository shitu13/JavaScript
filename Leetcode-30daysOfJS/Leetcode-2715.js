///  2715. Timeout Cancellation

var cancellable = function(fn, args, t) {
    const timer = setTimeout(()=> fn(...args), t)
    return () => clearTimeout(timer);
};