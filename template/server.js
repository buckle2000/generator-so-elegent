// hello.js
const child_process = require('child_process')
const deployd = require('deployd')
const options = {
    db: {
        connectionString: "FILL in here",
    },
    env: "development"
}
throw Error("Please fill in connectionString")
const dpd = deployd(options)

if (process.mainModule === module) {
    const port = process.env.PORT || 3000
    dpd.listen(port, () => {
        console.log('deployed listening on localhost:%d', port)
    })
} else {
    module.exports = dpd
}