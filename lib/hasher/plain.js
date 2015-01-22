function PlainHasher() {}

PlainHasher.prototype.hash = function(pt) {
    return pt;
};

module.exports = PlainHasher;
