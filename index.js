const cron = require('node-cron')
const { Example } = require('./schedule.example')

cron.schedule('*/20 * * * * *', async () => {
  Example()
})


console.log(`app started ${new Date()}`)