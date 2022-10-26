const { config } = require('./dbconfig')
const mysql = require('mysql2')

const connection = () => {
  return mysql.createConnection(config)
}

module.exports = { connection }