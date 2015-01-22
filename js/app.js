(function() {
    var input = document.querySelector('[name="secondary"]'),
        result = document.querySelector('#password'),
        code = document.querySelector('.code'),
        form = document.querySelector('.form');

    var fs = require('fs'),
        clipboard = require('nw.gui').Clipboard.get();

    var masterKey = fs.readFileSync('master.key').toString().trim(),
        hasher = new OnePassword({ masterKey: masterKey });

    input.onkeyup = function(e) {
        if (e.keyCode === 13) {
            var hashed = hasher.hash(input.value);

            JsBarcode(result, hashed);
            clipboard.set(hashed, 'text');

            form.classList.remove('active');
            code.classList.add('active');
        }
    };

    code.onclick = function(e) {
        input.value = '';
        form.classList.add('active');
        code.classList.remove('active');
    };
})();
