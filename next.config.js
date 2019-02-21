const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const TargetsPlugin = require("targets-webpack-plugin");
const withTM = require('next-transpile-modules');

module.exports = withSass(
    withCSS(withTM({
        distDir: 'build',
        webpack: function (cfg, { dev }) {
            const originalEntry = cfg.entry
            cfg.entry = async () => {
                const entries = await originalEntry()

                if (
                    entries['main.js'] &&
                    !entries['main.js'].includes('./polyfills.js')
                ) {
                    entries['main.js'].unshift('./polyfills.js')
                }

                return entries
            }

            if (!dev) {
                cfg.plugins.push(new TargetsPlugin({
                    browsers: ['>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', "chrome >= 41"]
                }))
            }

            return cfg
        },
        postcssLoaderOptions: { parser: true, autoprefixer: true }
    })),

);

