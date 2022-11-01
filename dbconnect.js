const { config } = require('./dbconfig')
const mysql = require('mysql2')

const connection = () => {
  return mysql.createPool(config).promise()
}

module.exports = { connection }