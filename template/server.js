// hello.js
const child_process = require('child_process')
const deployd = require('deployd')
const options = {
    db: {
        connectionString: "mongodb://deployd:e055iAixGN17zTUcF8O1qQWalRiG7Tbg@ds123534.mlab.com:23534/bookhub",
    },
    env: "development"
}

const dpd = deployd(options)

if (process.mainModule === module) {
    const port = process.env.PORT || 3000
    dpd.listen(port, () => {
        console.log('deployed listening on localhost:%d', port)
    })
} else {
    module.exports = dpd
}