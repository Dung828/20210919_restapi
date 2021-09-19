// HTTP basic authentication example in node.js using the RTC Server RESTful API
const https = require('https')
const httpsPort = 8888
const mainPath = '/pi'
// Customer ID
const customerKey = "dung"
// Customer secret
const customerSecret = "traubotennislen"
// Concatenate customer key and customer secret and use base64 to encode the concatenated string
const plainCredential = customerKey + ":" + customerSecret
// Encode with base64
encodedCredential = Buffer.from(plainCredential).toString('base64')
authorizationField = "Basic " + encodedCredential


// Set request parameters
const options = {
  hostname: 'TRAUBOTENNIS.COM',
  port: httpsPort,
  path: mainPath,
  method: 'GET',
  headers: {
    'Authorization':authorizationField,
    'Content-Type': 'application/json'
  }
}

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// Create request object and send request
const req = https.request(options, res => {
  console.log(`Status code: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()