document.getElementById('btn').addEventListener('click', function() {
  const input = document.getElementById('ip').value;
  const outputDiv = document.getElementById('output');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Number(input));
    }, 2000);
  });

  promise.then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return number;
  })
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return number;
  })
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number - 3);
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return number;
  })
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number / 2);
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return number;
  })
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number + 10);
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Final Result: ${number}`;
  })
  .catch((error) => {
    console.error(error);
  });
});