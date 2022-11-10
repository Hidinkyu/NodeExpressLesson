/**
  * GLOBALS - NO WINDOWS!
  * __dirname  - path to current directory
  * __filename - file name
  * require    - func to use module (CommonJS)
  * module     - info about current module (file)
  * process    - info about environment where the program is being executed
*/  

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000)