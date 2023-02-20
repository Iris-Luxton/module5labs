
class Logger {
    constructor(id) {
      this.id = id;
    }
  
    log(message) {
      console.log(`Calculator ${this.id}: ${message}`);
    }
  }
  
  module.exports = Logger;

// if you want the logging library to be separate from the Calculator and
// generates a random ID for each logs message:
//   class Logger {
//     constructor() {
//       this.id = Math.random().toString(36).substr(2, 6); // generate random 6-character ID
//     }
  
//     log(message) {
//       console.log(`[${this.id}] ${message}`); // log message along with the ID
//     }
//   }

// you index.js will look like this:
// const Logger = require('./Logger');

// const logger = new Logger();
// logger.log('Hello, world!');
  
//   module.exports = Logger;