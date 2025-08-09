const { transfers } = require('../models/transferModel');
const { getUser } = require('./userService');

function transferValue({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number') {
    throw new Error('From, to, and amount are required');
  }
  const sender = getUser(from);
  const recipient = getUser(to);
  if (!sender || !recipient) {
    throw new Error('Sender or recipientfound');
  }
  if (!recipient.favorecido && amount >= 5000) {
    throw new Error('Transfers above R$ 5.000,00 only allowed to favorecido recipients');
  }
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return transfer;
}

function getTransfers() {
  return transfers;
}

module.exports = {
  transferValue,
  getTransfers,
};
