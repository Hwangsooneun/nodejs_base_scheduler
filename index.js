const cron = require('node-cron')

cron.schedule('0 59 * * * *', async () => {
  console.log('test')
})

console.log(`app started ${new Date()}`)