const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('webpack', {
   mode: 'development',
   optimization: {
      minimize: false,
   },
});