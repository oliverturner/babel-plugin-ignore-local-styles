# Ignore Local Styles plugin for Babel

One approach with Webpack is to `import` co-located styles into your modules. It's a pattern that can be seen at https://github.com/css-modules/webpack-demo

The only drawback is that non-Webpack environments - e.g. server-side compilation - choke on the inclusion of [S]CSS.

Used in conjunction with the `env` setting of `.babelrc`, this plugin can be used to ignore these imports on the server or running in tests, while preserving them for use on the client.

# TODO

Working examples
