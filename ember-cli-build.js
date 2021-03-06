/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let project = defaults.project;
  let options = {
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'eot', 'ttf', 'woff', 'woff2', 'svg'],
      prepend: '/ember-autoresize/'
    },
    sassOptions: {
      includePaths: ['tests/dummy/app']
    },
    svgJar: {
      strategy: 'inline',
      sourceDirs: ['tests/dummy/public/assets/images']
    }
  };

  if (project.findAddonByName('ember-native-dom-event-dispatcher')) {
    options.vendorFiles = { 'jquery.js': null };
  }
  let app = new EmberAddon(defaults, options);

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
