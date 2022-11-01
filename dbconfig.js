const { MYSQL_PLUS_HOST, MYSQL_PLUS_PORT, MYSQL_PLUS_USER, MYSQL_PLUS_PASSWORD, MYSQL_PLUS_DATABASE } = require("./config")

const config = {
  host: MYSQL_PLUS_HOST,
  port: MYSQL_PLUS_PORT,
  user: MYSQL_PLUS_USER,
  password: MYSQL_PLUS_PASSWORD,
  database: MYSQL_PLUS_DATABASE,
  enableKeepAlive: true,
  waitForConnections: true,
  keepAliveInitialDelay: 10000,
}

module.exports = { config }