const cron = require('node-cron')
const mysql = require('mysql2')
const dbconfig = require('./dbconfig')
const db = mysql.createConnection(dbconfig)

cron.schedule('0 59 * * * *', async () => {
  console.log('test')
})

console.log(`app started ${new Date()}`)