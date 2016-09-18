import request from 'browser-request'

const opts = {
  method: 'GET',
  url: '/images/viking.jpg'
}

const responseCallback = (err, response, body) => {
  if (err) return console.log(err)
  console.log(response)
}

request(opts, responseCallback)
