const axios = require('axios');
const { connection } = require('./dbconnect')
const db = connection()

const Example = async () => {
  // await db.query()
  console.log('example')
}

module.exports = { Example }