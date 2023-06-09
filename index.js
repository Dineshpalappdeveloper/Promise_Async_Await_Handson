// Write one example explaining how you can write a callback function.

function FindSum(a, b) {
  return a + b;
}

function DisplayData(data, batch) {
  console.log(`i am from ${data} and My batch is EA${batch}`);
}

DisplayData("PrepBytes", FindSum(10, 13));
// write a call back function just like pass a function as parameter

// "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

//  a big example of callback hell is below in this function all are
//  dependent of our outer function .
//  i wants to saw that if case first funtion given an error then
//  all inner function not working here

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
          setTimeout(() => {
            console.log("6");
            setTimeout(() => {
              console.log("7");
            }, 7000);
          }, 6000);
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

// "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

function hello() {
  let work = true;
  let promise = new Promise((done, err) => {
    if (work) {
      done(
        setTimeout(() => {
          console.log("1");
          setTimeout(() => {
            console.log("2");
            setTimeout(() => {
              console.log("3");
              setTimeout(() => {
                console.log("4");
                setTimeout(() => {
                  console.log("5");
                  setTimeout(() => {
                    console.log("6");
                    setTimeout(() => {
                      console.log("7");
                    }, 7000);
                  }, 6000);
                }, 5000);
              }, 4000);
            }, 3000);
          }, 2000);
        }, 1000)
      );
    }
  });
  promise.then((data) => console.log(data));
}
hello();

// "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed
// then it should go to reject the state and catch the error and print Promise Rejected "

let variable = "yes";

let myPromise = new Promise((response, reject) => {
  if (variable == "yes") {
    response("Promise Resolved.. ");
  } else {
    reject("Promise Rejected ..");
  }
});
myPromise.then((done) => console.log(done)).catch((err) => console.log(err));

// Create examples to explain callback function
//

// A callback is a function passed as an argument to another function

function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

// Create examples to explain callback hell function

// Callback hell is a phenomenon that happens when multiple
// callbacks are nested on top of each other

function hello() {
  let work = true;
  let promise = new Promise((done, err) => {
    if (work) {
      done(
        setTimeout(() => {
          console.log("1");
          setTimeout(() => {
            console.log("2");
            setTimeout(() => {
              console.log("3");
              setTimeout(() => {
                console.log("4");
                setTimeout(() => {
                  console.log("5");
                  setTimeout(() => {
                    console.log("6");
                    setTimeout(() => {
                      console.log("7");
                    }, 7000);
                  }, 6000);
                }, 5000);
              }, 4000);
            }, 3000);
          }, 2000);
        }, 1000)
      );
    }
  });
  promise.then((data) => console.log(data));
}
hello();

// nested call is example of callback hell

// Create examples to explain promises function
// A Promise is a proxy for a value not necessarily
// known when the promise is created

let variable1 = true;

let myPromise1 = new Promise((response, reject) => {
  if (variable1) {
    response("Promise Resolved.. ");
  } else {
    reject("Promise Rejected ..");
  }
});
myPromise1.then((done) => console.log(done)).catch((err) => console.log(err));

// Create examples to explain async await function

//  Await function is used to wait for the promise.
//  It could be used within the async block only

function asynchronous_operational_method() {
  let first_promise = new Promise((resolve, reject) => resolve("Hello"));
  let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" pal family");
    }, 1000);
  });
  let combined_promise = Promise.all([first_promise, second_promise]);
  return combined_promise;
}

async function display() {
  let data = await asynchronous_operational_method();
  console.log(data);
}

display();
