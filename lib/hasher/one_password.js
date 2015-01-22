/**
 * One password hasher.
 *
 * @param masterKey
 * @param cipher
 * @param length
 * @param formatter
 */
function OnePassword(opts) {
    this.masterKey = opts.masterKey;
    this.formatter = opts.formatter || function(master, pt) {
        return pt + master;
    };
    this.length = opts.length || 10;
    this.cipher = opts.cipher || require('crypto-js/sha1');
}

OnePassword.prototype.hash = function(pt) {
    var ct = this.cipher(this.formatter(this.masterKey, pt)).toString();
    
    return ct.substr(0, this.length);
};


module.exports = OnePassword;
