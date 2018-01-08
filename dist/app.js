'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bal = function Bal(cx, cy, r) {
    _classCallCheck(this, Bal);

    this.cx = cx;
    this.cy = cy;
    this.r = r;
};

Bal.prototype.dinges = function () {
    document.getElementsByTagName('circle')[0].setAttribute('cx', this.cx);
    document.getElementsByTagName('circle')[0].setAttribute('cy', this.cy);
    document.getElementsByTagName('circle')[0].setAttribute('r', this.r);
};

var bal = new Bal(250, 250, 100);

bal.dinges();
//# sourceMappingURL=app.js.map
