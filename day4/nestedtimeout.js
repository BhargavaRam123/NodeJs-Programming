let count = 1;

let timerId = setTimeout(function tick() {
    count++
    // console.log("tick",count)
    timerId = setTimeout(tick, 2000); // (*)
    console.log("hello world")
   }, 2000);