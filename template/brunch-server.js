module.exports = (port, path, callback) => {
    port = 3000
    const dpd = require('./server')
    dpd.listen(port, () => {
        console.log('deployed listening on localhost:%d', port)
        callback()
    })
    return dpd
}