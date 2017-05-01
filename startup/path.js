var path = require("path");

console.log("normalization: " + path.normalize('/test/test1//2slashes/lslash/tab/..'));
console.log("joint path: " + path.join("/test", 'test1', '2slashes/lslash', 'tab', '..'));
console.log("resolve: " + path.resolve('path.js'));
console.log("ext name: " + path.extname('os.js'));
