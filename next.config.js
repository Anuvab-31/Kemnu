const defaultConfig = require("./config/default.json");
const productionConfig = require("./config/production.json");
const withPWA = require('next-pwa');

let config = {
    env: defaultConfig,
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true
    },
    pwa: {
        dest: 'public',
        disable: true
    }
}
if(process.env.NEXT_PUBLIC_NODE_ENV === "production")
    config = {
        env: {
            ...defaultConfig,
            ...productionConfig
        },
        reactStrictMode: false,
        eslint: {
            ignoreDuringBuilds: true
        },
        pwa: {
            dest: 'public'
        }
    } ;

module.exports = withPWA(config)
