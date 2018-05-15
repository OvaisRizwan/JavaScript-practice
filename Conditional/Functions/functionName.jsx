function work() {
    console.log( arguments.callee.name );
}
work();