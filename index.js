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
