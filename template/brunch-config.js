// const exports = module.exports
const PRODUCTION = (process.env.NODE_ENV === "production")

exports.files = {
    javascripts: {
        joinTo: {
            'vendor.js': [
                /^node_modules/,
                PRODUCTION ? 'src/vendor-prod.js' : 'src/vendor.js'
            ]
        }
    },
    stylesheets: {
        joinTo: {
            'app.css': /^src/,
            'vendor.css': /^node_modules/
        }
    }
};

exports.plugins = {
    babel: { presets: ['latest'] },
    autoReload: {
        enabled: {
            css: true,
            js: true,
            assets: true
        }
    },
    static: {
        processors: [
            require('html-brunch-static')({
                processors: [
                    require('pug-brunch-static')({
                        basedir: 'src/layouts',
                        fileMatch: 'src/static/**/*.pug',
                        fileTransform: (filename) => filename.replace('static/', '').replace(/\.pug$/, '.html')
                    })
                ]
            })
        ]
    }
};

exports.paths = {
    public: 'public',
    watched: ['src']
}

// exports.conventions = {
//     ignored: [/^layouts/]
// }