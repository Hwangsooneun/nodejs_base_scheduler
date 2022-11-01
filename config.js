const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  MYSQL_PLUS_HOST: process.env.MYSQL_PLUS_HOST,
  MYSQL_PLUS_DATABASE: process.env.MYSQL_PLUS_DATABASE,
  MYSQL_PLUS_USER: process.env.MYSQL_PLUS_USER,
  MYSQL_PLUS_PASSWORD: process.env.MYSQL_PLUS_PASSWORD,
  MYSQL_PLUS_PORT: process.env.MYSQL_PLUS_PORT,
  SLCAK_TOKEN: process.env.SLCAK_TOKEN
}