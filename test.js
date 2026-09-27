const addNumbers = require("./app");

if (addNumbers() !== 4) {
    throw new Error("Test failed");
}

console.log("All tests passed!");
