import request from 'browser-request'

const msg = 'this is a modular script compiled with browserify and babel returning an ajax request as example:'

const opts = {
  method: 'GET',
  url: '/images/example-jpg.jpg'
}

const responseCallback = (err, response, body) => {
  if (err) return console.log(err)
  console.log(msg, response)
}

request(opts, responseCallback)
