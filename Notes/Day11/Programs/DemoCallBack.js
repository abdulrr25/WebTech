function resolveLater() {
  return new Promise((resolve, reject) => {
    let a = 10;

    setTimeout(() => {

      if (a === 10) {
        resolve("Success: 'a' is 10");
      } else {
        reject("Error: 'a' is not 10");
      }
    }, 1000);
  });
}

function display(message) {
  console.log("Hello World: " + message);
}

resolveLater()
  .then((message) => {
    display(message);
  })
  .catch((error) => {
    console.error(error);
  });