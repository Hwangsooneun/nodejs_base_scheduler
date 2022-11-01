const cron = require('node-cron')

cron.schedule('*/20 * * * * *', async () => {
  console.log('test')
})


console.log(`app started ${new Date()}`)