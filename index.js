const TronWeb = require('@tronprotocol/wallet-api');

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
});

const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  // Generate a new TRON wallet address and private key
  const { address, privateKey } = await tronWeb.createAddress();

  // Return the address and private key in the response
  res.send({ address, privateKey });
});

app.listen(3000, () => {
  console.log('API listening on http://localhost:3000');
});
