const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const ret = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${ret}`);
}

module.exports = sendPaymentRequestToApi;
