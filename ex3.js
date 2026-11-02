// ex3.js
function run() {
  for (var i = 0; i < 3; i++) {
    print(i)
  }
}
print=(num)=>setTimeout(() => console.log(num), 0);
if (typeof module !== "undefined") module.exports = { run };