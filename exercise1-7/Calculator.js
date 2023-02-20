
const Logger = require('./Logger');

// the Calculator below will regenerate id every operation using time stamp

// class Calculator {
//   constructor() {
//     this.logger = new Logger();
//   }

//   generateId() {
//     const timestamp = Date.now();
//     const random = Math.floor(Math.random() * 1000000);
//     const result = timestamp - random;
//     return result;
//   }

//   add(a, b) {
//     const id = this.generateId();
//     this.logger.log(`Calculator ${id}: Adding ${a} and ${b}`);
//     return a + b;
//   }

//   subtract(a, b) {
//     const id = this.generateId();
//     this.logger.log(`Calculator ${id}: Subtracting ${b} from ${a}`);
//     return a - b;
//   }

//   multiply(a, b) {
//     const id = this.generateId();
//     this.logger.log(`Calculator ${id}: Multiplying ${a} by ${b}`);
//     return a * b;
//   }

//   divide(a, b) {
//     const id = this.generateId();
//     this.logger.log(`Calculator ${id}: Dividing ${a} by ${b}`);
//     if (b === 0) {
//       throw new Error('Division by zero');
//     }
//     return a / b;
//   }

//   power(a, b) {
//     const id = this.generateId();
//     this.logger.log(`Calculator ${id}: Calculating ${a} to the power of ${b}`);
//     return Math.pow(a, b);
//   }
// }

// module.exports = Calculator;

// the Calculator below will regenerate id every time server is restart

class Calculator {
  constructor() {
    this.id = this.generateId();
    this.logger = new Logger(this.id);
  }

  generateId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * chars.length);
      id += chars[index];
    }
    return id;
  }

  add(a, b) {
    this.logger.log(`Calculator ${this.id}: Adding ${a} and ${b}`);
    return a + b;
  }

  subtract(a, b) {
    this.logger.log(`Calculator ${this.id}: Subtracting ${b} from ${a}`);
    return a - b;
  }

  multiply(a, b) {
    this.logger.log(`Calculator ${this.id}: Multiplying ${a} by ${b}`);
    return a * b;
  }

  divide(a, b) {
    this.logger.log(`Calculator ${this.id}: Dividing ${a} by ${b}`);
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  power(a, b) {
    this.logger.log(`Calculator ${this.id}: Calculating ${a} to the power of ${b}`);
    return Math.pow(a, b);
  }
}

module.exports = Calculator;
