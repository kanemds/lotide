const assertEqual = require('./assertEqual');


const head = (data) => {
  if (!data) {
    return undefined;
  }
  if (Array.isArray(data)) {
    return data[0];
  }
};


module.exports = head;
