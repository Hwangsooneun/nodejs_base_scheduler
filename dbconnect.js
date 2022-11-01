const mysql = require('mysql2')

const connection = (config) => {
  return mysql.createPool(config).promise()
}

module.exports = { connection }