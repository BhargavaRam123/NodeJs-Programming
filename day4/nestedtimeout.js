let count = 1;

let timerId = setTimeout(function tick() {
    count++
    // console.log("tick",count)
    timerId = setTimeout(tick, 2000); // (*)
    console.log("hello world")
   }, 2000);


   let delay = 5000;

// let timerId = setTimeout(function request() {
//  //send request

//  if (request failed due to server overload) {
//    // increase the interval to the next run
//    delay *= 2;
//  }

//  timerId = setTimeout(request, delay);
// }, delay);