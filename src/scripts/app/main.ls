request = require 'browser-request'

opts = 
  method: 'GET'
  url: '/images/viking.jpg'

response-callback = (err, response, body) ->
  console.log err if err?
  unless err?
    console.log response

request opts,  response-callback
