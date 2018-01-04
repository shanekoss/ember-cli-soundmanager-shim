ember-cli-soundmanager-shim
===========================

ES6 module shim for [SoundManager 2](https://github.com/scottschiller/SoundManager2)  with latest version of Sound Manager

## Usage

### Install
`bower install --save ember-cli-techsmechs-soundmanager-shim`

### Import soundmanager dependencies
```
// Brocfile.js
app.import({
  development: 'bower_components/soundmanager/swf/soundmanager2_debug.swf',
  production: 'bower_components/soundmanager/swf/soundmanager2.swf'
});
app.import({
  development: 'bower_components/soundmanager/script/soundmanager2.js',
  production: 'bower_components/soundmanager/script/soundmanager2-nodebug-jsmin.js'
});
app.import('bower_components/ember-cli-soundmanager-shim/soundmanager2-shim.js', {
  exports: {
    soundManager: ['default']
  }
});
```

### Create an initializer to setup soundmanager
```
// initializers/soundmanager-config.js
import soundManager from 'soundManager';

export default {
  name: 'soundmanager-config',
  initialize: function() {
    soundManager.setup({
      url: '/soundmanager/swf/'
    });
  }
};
```

### Import soundManager where used
```
// controllers/audio-player.js
import Ember from "ember";
import soundManager from 'soundManager';

export default Ember.Controller.extend({
...
```

License
-------

ember-cli-soundmanager-shim is [MIT Licensed](https://github.com/jfranz/ember-cli-soundmanager-shim/blob/master/README.md).
