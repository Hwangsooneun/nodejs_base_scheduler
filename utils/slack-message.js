const axios = require('axios');
const { SLACK_TOKEN } = require("../config")


const slack = async (channel, text) => {
  await axios.post('https://slack.com/api/chat.postMessage', { channel, text }, { headers: { Authorization: `Bearer ${SLACK_TOKEN}` } })
  return
}

module.exports = { slack }