var NwBuilder = require('node-webkit-builder');

var nw = new NwBuilder({
    files: [
        './package.json',
        './index.html',
        'master.key',
        './images/**',
        './js/**',
        './css/**',
        './lib/**',
        './bower_components/**',
        './node_modules/crypto-js/**'
    ],
    platforms: ['osx']
});

nw.on('log', console.log);

nw.build().then(function() {
    console.log('all done');
}).catch(function(err) {
    console.error(err);
});
