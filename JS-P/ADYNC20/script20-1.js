const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5000);
});

promise.then(() => alert("Working"));

console.log("This log apears first!");
