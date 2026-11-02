// ex2.js
function run() {
  setTimeout(() => console.log("first"), 20);
  setTimeout(() => console.log("second"), 20);
  setTimeout(() => console.log("third"), 20);
}

if (typeof module !== "undefined") module.exports = { run };
