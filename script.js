//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
  // Get the number from the input field
  const inputNumber = Number(document.getElementById("ip").value);
  
  // Function to simulate a delay of 2 seconds
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Chain promises to perform the operations
  new Promise((resolve) => {
    // Step 1: Resolve with the input number after 2 seconds
    setTimeout(() => {
      document.getElementById("output").textContent = `Result: ${inputNumber}`;
      resolve(inputNumber);
    }, 2000);
  })
  .then((num) => {
    // Step 2: Multiply by 2 after 1 second
    return delay(1000).then(() => {
      const result = num * 2;
      document.getElementById("output").textContent = `Result: ${result}`;
      return result;
    });
  })
  .then((num) => {
    // Step 3: Subtract 3 after 1 second
    return delay(1000).then(() => {
      const result = num - 3;
      document.getElementById("output").textContent = `Result: ${result}`;
      return result;
    });
  })
  .then((num) => {
    // Step 4: Divide by 2 after 1 second
    return delay(1000).then(() => {
      const result = num / 2;
      document.getElementById("output").textContent = `Result: ${result}`;
      return result;
    });
  })
  .then((num) => {
    // Step 5: Add 10 after 1 second
    return delay(1000).then(() => {
      const result = num + 10;
      document.getElementById("output").textContent = `Result: ${result}`;
      return result;
    });
  })
  .then((finalResult) => {
    // Final step: Show the final result
    document.getElementById("output").textContent = `Final Result: ${finalResult}`;
  })
  .catch((error) => {
    // Handle any errors that occur during the promise chain
    document.getElementById("output").textContent = `Error: ${error.message}`;
  });
});
