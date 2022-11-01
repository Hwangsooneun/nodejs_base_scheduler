const axios = require('axios');
const { config } = require('./db1');
const { connection } = require('./dbconnect')
const db = connection(config)

const Example = async () => {
  // await db.query()
  console.log('example')
}

module.exports = { Example }