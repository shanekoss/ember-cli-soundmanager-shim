(function() {
/* globals define, soundManager */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('soundManager', { 'default': soundManager});
})();
