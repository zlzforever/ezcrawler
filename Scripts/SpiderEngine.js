function MGXH() {
    var __hexcase = 0;
    var __chrsz = 8;
    this.hd5 = function (s) {
        var r = __binl2Hex(__coreMd5(__str2Binl(s), s.length * __chrsz));
        return r.substr(8, 16);
    }

    function __coreMd5(x, __len) {
        x[__len >> 5] |= 0x80 << ((__len) % 32);
        x[(((__len + 64) >>> 9) << 4) + 14] = __len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var __olda = a;
            var __oldb = b;
            var __oldc = c;
            var __oldd = d;

            a = __md5Ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = __md5Ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = __md5Ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = __md5Ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = __md5Ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = __md5Ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = __md5Ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = __md5Ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = __md5Ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = __md5Ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = __md5Ff(c, d, a, b, x[i + 10], 17, -42063);
            b = __md5Ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = __md5Ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = __md5Ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = __md5Ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = __md5Ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = __md5Gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = __md5Gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = __md5Gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = __md5Gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = __md5Gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = __md5Gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = __md5Gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = __md5Gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = __md5Gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = __md5Gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = __md5Gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = __md5Gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = __md5Gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = __md5Gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = __md5Gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = __md5Gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = __md5Hh(a, b, c, d, x[i + 5], 4, -378558);
            d = __md5Hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = __md5Hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = __md5Hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = __md5Hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = __md5Hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = __md5Hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = __md5Hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = __md5Hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = __md5Hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = __md5Hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = __md5Hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = __md5Hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = __md5Hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = __md5Hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = __md5Hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = __md5Ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = __md5Ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = __md5Ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = __md5Ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = __md5Ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = __md5Ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = __md5Ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = __md5Ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = __md5Ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = __md5Ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = __md5Ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = __md5Ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = __md5Ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = __md5Ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = __md5Ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = __md5Ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = __safeAdd(a, __olda);
            b = __safeAdd(b, __oldb);
            c = __safeAdd(c, __oldc);
            d = __safeAdd(d, __oldd);
        }
        return [a, b, c, d];
    }

    function __md5Cmn(q, a, b, x, s, t) {
        return __safeAdd(__bitRol(__safeAdd(__safeAdd(a, q), __safeAdd(x, t)), s), b);
    }
    function __md5Ff(a, b, c, d, x, s, t) {
        return __md5Cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function __md5Gg(a, b, c, d, x, s, t) {
        return __md5Cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function __md5Hh(a, b, c, d, x, s, t) {
        return __md5Cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function __md5Ii(a, b, c, d, x, s, t) {
        return __md5Cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function __safeAdd(x, y) {
        var __lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var __msw = (x >> 16) + (y >> 16) + (__lsw >> 16);
        return (__msw << 16) | (__lsw & 0xFFFF);
    }

    function __bitRol(__num, __cnt) {
        return (__num << __cnt) | (__num >>> (32 - __cnt));
    }

    function __str2Binl(__str) {
        var __bin = [];
        var __mask = (1 << __chrsz) - 1;
        for (var i = 0; i < __str.length * __chrsz; i += __chrsz)
            __bin[i >> 5] |= (__str.charCodeAt(i / __chrsz) & __mask) << (i % 32);
        return __bin;
    }

    function __binl2Hex(__binarray) {
        var __hexTab = __hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var __str = "";
        for (var i = 0; i < __binarray.length * 4; i++) {
            __str += __hexTab.charAt((__binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                __hexTab.charAt((__binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return __str;
    }
};

//加密解密
{
    function __BarrettMu(m) {
        this._modulus = __biCopy(m);
        this.k = __biHighIndex(this._modulus) + 1;
        var _b2k = new __BigInt();
        _b2k._digits[2 * this.k] = 1;
        this._mu = __biDivide(_b2k, this._modulus);
        this._bkplus1 = new __BigInt();
        this._bkplus1._digits[this.k + 1] = 1;
        this._modulo = __BarrettMu_modulo;
        this._multiplyMod = __BarrettMu_multiplyMod;
        this._powMod = __BarrettMu_powMod;
    }

    function __BarrettMu_modulo(x) {
        var q1 = __biDivideByRadixPower(x, this.k - 1);
        var q2 = __biMultiply(q1, this._mu);
        var q3 = __biDivideByRadixPower(q2, this.k + 1);
        var r1 = __biModuloByRadixPower(x, this.k + 1);
        var r2term = __biMultiply(q3, this._modulus);
        var r2 = __biModuloByRadixPower(r2term, this.k + 1);
        var r = __biSubtract(r1, r2);
        if (r._isNeg) {
            r = __biAdd(r, this._bkplus1);
        }
        var _rgtem = __biCompare(r, this._modulus) >= 0;
        while (_rgtem) {
            r = __biSubtract(r, this._modulus);
            _rgtem = __biCompare(r, this._modulus) >= 0;
        }
        return r;
    }

    function __BarrettMu_multiplyMod(x, y) {
        var xy = __biMultiply(x, y);
        return this._modulo(xy);
    }

    function __BarrettMu_powMod(x, y) {
        var _result = new __BigInt();
        _result._digits[0] = 1;
        var a = x;
        var k = y;
        while (true) {
            if ((k._digits[0] & 1) != 0) _result = this._multiplyMod(_result, a);
            k = __biShiftRight(k, 1);
            if (k._digits[0] == 0 && __biHighIndex(k) == 0) break;
            a = this._multiplyMod(a, a);
        }
        return _result;
    }

    function __getAesString(__data, __key, __ivStr) {
        var __tkey = __CryptoJS.enc.Utf8.parse(__key);
        var __tiv = __CryptoJS.enc.Utf8.parse(__ivStr);
        var __encrypted = __CryptoJS.__AES.encrypt(__data, __tkey, { iv: __tiv, mode: __CryptoJS.mode._CBC, padding: __CryptoJS.pad._Pkcs7 });
        return __encrypted;
    }

    var _biRadixBase = 2;
    var _biRadixBits = 16;
    var _bitsPerDigit = _biRadixBits;
    var _biRadix = 1 << 16;
    var _biHalfRadix = _biRadix >>> 1;
    var _biRadixSquared = _biRadix * _biRadix;
    var _maxDigitVal = _biRadix - 1;
    var _maxInteger = 9999999999999998;

    var _maxDigits;
    var _ZERO_ARRAY;
    var _bigZero, _bigOne;

    function __setMaxDigits(_value) {
        _maxDigits = _value;
        _ZERO_ARRAY = new Array(_maxDigits);
        for (var iza = 0; iza < _ZERO_ARRAY.length; iza++) _ZERO_ARRAY[iza] = 0;
        _bigZero = new __BigInt();
        _bigOne = new __BigInt();
        _bigOne._digits[0] = 1;
    }

    __setMaxDigits(129);

    var _dpl10 = 15;
    var _lr10 = __biFromNumber(1000000000000000);

    function __BigInt(flag) {
        if (typeof flag == "boolean" && flag == true) {
            this._digits = null;
        }
        else {
            this._digits = _ZERO_ARRAY.slice(0);
        }
        this._isNeg = false;
    }

    function __biFromDecimal(s) {
        var _isNeg = s.charAt(0) == '-';
        var i = _isNeg ? 1 : 0;
        var _result;
        while (i < s.length && s.charAt(i) == '0')++i;
        if (i == s.length) {
            _result = new __BigInt();
        }
        else {
            var _digitCount = s.length - i;
            var fgl = _digitCount % _dpl10;
            if (fgl == 0) fgl = _dpl10;
            _result = __biFromNumber(Number(s.substr(i, fgl)));
            i += fgl;
            while (i < s.length) {
                _result = __biAdd(__biMultiply(_result, _lr10),
                    __biFromNumber(Number(s.substr(i, _dpl10))));
                i += _dpl10;
            }
            _result._isNeg = _isNeg;
        }
        return _result;
    }

    function __biCopy(bi) {
        var _result = new __BigInt(true);
        _result._digits = bi._digits.slice(0);
        _result._isNeg = bi._isNeg;
        return _result;
    }

    function __biFromNumber(i) {
        var _result = new __BigInt();
        _result._isNeg = i < 0;
        i = Math.abs(i);
        var j = 0;
        while (i > 0) {
            _result._digits[j++] = i & _maxDigitVal;
            i = Math.floor(i / _biRadix);
        }
        return _result;
    }

    function __reverseStr(s) {
        var _result = "";
        for (var i = s.length - 1; i > -1; --i) {
            _result += s.charAt(i);
        }
        return _result;
    }

    var __hexatrigesimalToChar = new Array(
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    );

    function __biToString(x, _radix) {
        var b = new __BigInt();
        b._digits[0] = _radix;
        var _qr = __biDivideModulo(x, b);
        var _result = __hexatrigesimalToChar[_qr[1]._digits[0]];
        while (__biCompare(_qr[0], _bigZero) == 1) {
            _qr = __biDivideModulo(_qr[0], b);
            _digit = _qr[1]._digits[0];
            _result += __hexatrigesimalToChar[_qr[1]._digits[0]];
        }
        return (x._isNeg ? "-" : "") + __reverseStr(_result);
    }

    function __biToDecimal(x) {
        var b = new __BigInt();
        b._digits[0] = 10;
        var _qr = __biDivideModulo(x, b);
        var _result = String(_qr[1]._digits[0]);
        while (__biCompare(_qr[0], _bigZero) == 1) {
            _qr = __biDivideModulo(_qr[0], b);
            _result += String(_qr[1]._digits[0]);
        }
        return (x._isNeg ? "-" : "") + __reverseStr(_result);
    }

    var _hexToChar = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f');

    function __digitToHex(n) {
        var _mask = 0xf;
        var _result = "";
        for (i = 0; i < 4; ++i) {
            _result += _hexToChar[n & _mask];
            n >>>= 4;
        }
        return __reverseStr(_result);
    }

    function __biToHex(x) {
        var _result = "";
        var n = __biHighIndex(x);
        for (var i = __biHighIndex(x); i > -1; --i) {
            _result += __digitToHex(x._digits[i]);
        }
        return _result;
    }

    function __charToHex(c) {
        var __ZERO = 48;
        var _NINE = __ZERO + 9;
        var _littleA = 97;
        var _littleZ = _littleA + 25;
        var _bigA = 65;
        var _bigZ = 65 + 25;
        var _result;

        if (c >= __ZERO && c <= _NINE) {
            _result = c - __ZERO;
        } else if (c >= _bigA && c <= _bigZ) {
            _result = 10 + c - _bigA;
        } else if (c >= _littleA && c <= _littleZ) {
            _result = 10 + c - _littleA;
        } else {
            _result = 0;
        }
        return _result;
    }

    function __hexToDigit(s) {
        var _result = 0;
        var sl = Math.min(s.length, 4);
        for (var i = 0; i < sl; ++i) {
            _result <<= 4;
            _result |= __charToHex(s.charCodeAt(i))
        }
        return _result;
    }

    function __biFromHex(s) {
        var _result = new __BigInt();
        var sl = s.length;
        for (var i = sl, j = 0; i > 0; i -= 4, ++j) {
            _result._digits[j] = __hexToDigit(s.substr(Math.max(i - 4, 0), Math.min(i, 4)));
        }
        return _result;
    }

    function __biFromString(s, _radix) {
        var _isNeg = s.charAt(0) == '-';
        var _istop = _isNeg ? 1 : 0;
        var _result = new __BigInt();
        var _place = new __BigInt();
        _place._digits[0] = 1; // _radix^0
        for (var i = s.length - 1; i >= _istop; i--) {
            var c = s.charCodeAt(i);
            var _digit = __charToHex(c);
            var _biDigit = __biMultiplyDigit(_place, _digit);
            _result = __biAdd(_result, _biDigit);
            _place = __biMultiplyDigit(_place, _radix);
        }
        _result._isNeg = _isNeg;
        return _result;
    }

    function __biDump(b) {
        return (b._isNeg ? "-" : "") + b._digits.join(" ");
    }

    function __biAdd(x, y) {
        var _result;

        if (x._isNeg != y._isNeg) {
            y._isNeg = !y._isNeg;
            _result = __biSubtract(x, y);
            y._isNeg = !y._isNeg;
        }
        else {
            _result = new __BigInt();
            var c = 0;
            var n;
            for (var i = 0; i < x._digits.length; ++i) {
                n = x._digits[i] + y._digits[i] + c;
                _result._digits[i] = n % _biRadix;
                c = Number(n >= _biRadix);
            }
            _result._isNeg = x._isNeg;
        }
        return _result;
    }

    function __biSubtract(x, y) {
        var _result;
        if (x._isNeg != y._isNeg) {
            y._isNeg = !y._isNeg;
            _result = __biAdd(x, y);
            y._isNeg = !y._isNeg;
        } else {
            _result = new __BigInt();
            var n, c;
            c = 0;
            for (var i = 0; i < x._digits.length; ++i) {
                n = x._digits[i] - y._digits[i] + c;
                _result._digits[i] = n % _biRadix;
                if (_result._digits[i] < 0) _result._digits[i] += _biRadix;
                c = 0 - Number(n < 0);
            }
            if (c == -1) {
                c = 0;
                for (var i = 0; i < x._digits.length; ++i) {
                    n = 0 - _result._digits[i] + c;
                    _result._digits[i] = n % _biRadix;
                    if (_result._digits[i] < 0) _result._digits[i] += _biRadix;
                    c = 0 - Number(n < 0);
                }
                _result._isNeg = !x._isNeg;
            } else {
                _result._isNeg = x._isNeg;
            }
        }
        return _result;
    }

    function __biHighIndex(x) {
        var _result = x._digits.length - 1;
        while (_result > 0 && x._digits[_result] == 0)--_result;
        return _result;
    }

    function __biNumBits(x) {
        var n = __biHighIndex(x);
        var d = x._digits[n];
        var m = (n + 1) * _bitsPerDigit;
        var _result;
        for (_result = m; _result > m - _bitsPerDigit; --_result) {
            if ((d & 0x8000) != 0) break;
            d <<= 1;
        }
        return _result;
    }

    function __biMultiply(x, y) {
        var _result = new __BigInt();
        var c;
        var n = __biHighIndex(x);
        var t = __biHighIndex(y);
        var u, uv, k;

        for (var i = 0; i <= t; ++i) {
            c = 0;
            k = i;
            for (j = 0; j <= n; ++j, ++k) {
                uv = _result._digits[k] + x._digits[j] * y._digits[i] + c;
                _result._digits[k] = uv & _maxDigitVal;
                c = uv >>> _biRadixBits;
            }
            _result._digits[i + n + 1] = c;
        }
        _result._isNeg = x._isNeg != y._isNeg;
        return _result;
    }

    function __biMultiplyDigit(x, y) {
        var n, c, uv;

        _result = new __BigInt();
        n = __biHighIndex(x);
        c = 0;
        for (var j = 0; j <= n; ++j) {
            uv = _result._digits[j] + x._digits[j] * y + c;
            _result._digits[j] = uv & _maxDigitVal;
            c = uv >>> _biRadixBits;
        }
        _result._digits[1 + n] = c;
        return _result;
    }

    function __arrayCopy(_src, _srcStart, _dest, _destStart, n) {
        var m = Math.min(_srcStart + n, _src.length);
        for (var i = _srcStart, j = _destStart; i < m; ++i, ++j) {
            _dest[j] = _src[i];
        }
    }

    var _highBitMasks = new Array(0x0000, 0x8000, 0xC000, 0xE000, 0xF000, 0xF800,
        0xFC00, 0xFE00, 0xFF00, 0xFF80, 0xFFC0, 0xFFE0,
        0xFFF0, 0xFFF8, 0xFFFC, 0xFFFE, 0xFFFF);

    function __biShiftLeft(x, n) {
        var _digitCount = Math.floor(n / _bitsPerDigit);
        var _result = new __BigInt();
        __arrayCopy(x._digits, 0, _result._digits, _digitCount,
            _result._digits.length - _digitCount);
        var _bits = n % _bitsPerDigit;
        var _rightBits = _bitsPerDigit - _bits;
        for (var i = _result._digits.length - 1, i1 = i - 1; i > 0; --i, --i1) {
            _result._digits[i] = ((_result._digits[i] << _bits) & _maxDigitVal) |
                ((_result._digits[i1] & _highBitMasks[_bits]) >>>
                    (_rightBits));
        }
        _result._digits[0] = ((_result._digits[i] << _bits) & _maxDigitVal);
        _result._isNeg = x._isNeg;
        return _result;
    }

    var _lowBitMasks = new Array(0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F,
        0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF,
        0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF);

    function __biShiftRight(x, n) {
        var _digitCount = Math.floor(n / _bitsPerDigit);
        var _result = new __BigInt();
        __arrayCopy(x._digits, _digitCount, _result._digits, 0,
            x._digits.length - _digitCount);
        var _bits = n % _bitsPerDigit;
        var leftBits = _bitsPerDigit - _bits;
        for (var i = 0, i1 = i + 1; i < _result._digits.length - 1; ++i, ++i1) {
            _result._digits[i] = (_result._digits[i] >>> _bits) |
                ((_result._digits[i1] & _lowBitMasks[_bits]) << leftBits);
        }
        _result._digits[_result._digits.length - 1] >>>= _bits;
        _result._isNeg = x._isNeg;
        return _result;
    }

    function __biMultiplyByRadixPower(x, n) {
        var _result = new __BigInt();
        __arrayCopy(x._digits, 0, _result._digits, n, _result._digits.length - n);
        return _result;
    }

    function __biDivideByRadixPower(x, n) {
        var _result = new __BigInt();
        __arrayCopy(x._digits, n, _result._digits, 0, _result._digits.length - n);
        return _result;
    }

    function __biModuloByRadixPower(x, n) {
        var _result = new __BigInt();
        __arrayCopy(x._digits, 0, _result._digits, 0, n);
        return _result;
    }

    function __biCompare(x, y) {
        if (x._isNeg != y._isNeg) {
            return 1 - 2 * Number(x._isNeg);
        }
        for (var i = x._digits.length - 1; i >= 0; --i) {
            if (x._digits[i] != y._digits[i]) {
                if (x._isNeg) {
                    return 1 - 2 * Number(x._digits[i] > y._digits[i]);
                } else {
                    return 1 - 2 * Number(x._digits[i] < y._digits[i]);
                }
            }
        }
        return 0;
    }

    function __biDivideModulo(x, y) {
        var nb = __biNumBits(x);
        var tb = __biNumBits(y);
        var _origYIsNeg = y._isNeg;
        var q, r;
        if (nb < tb) {
            if (x._isNeg) {
                q = __biCopy(_bigOne);
                q._isNeg = !y._isNeg;
                x._isNeg = false;
                y._isNeg = false;
                r = __biSubtract(y, x);
                x._isNeg = true;
                y._isNeg = _origYIsNeg;
            } else {
                q = new __BigInt();
                r = __biCopy(x);
            }
            return new Array(q, r);
        }

        q = new __BigInt();
        r = x;

        var t = Math.ceil(tb / _bitsPerDigit) - 1;
        var _lambda = 0;
        while (y._digits[t] < _biHalfRadix) {
            y = __biShiftLeft(y, 1);
            ++_lambda;
            ++tb;
            t = Math.ceil(tb / _bitsPerDigit) - 1;
        }
        r = __biShiftLeft(r, _lambda);
        var n = Math.ceil(nb / _bitsPerDigit) - 1;

        var b = __biMultiplyByRadixPower(y, n - t);
        while (__biCompare(r, b) != -1) {
            ++q._digits[n - t];
            r = __biSubtract(r, b);
        }
        for (var i = n; i > t; --i) {
            var ri = (i >= r._digits.length) ? 0 : r._digits[i];
            var ri1 = (i - 1 >= r._digits.length) ? 0 : r._digits[i - 1];
            var ri2 = (i - 2 >= r._digits.length) ? 0 : r._digits[i - 2];
            var yt = (t >= y._digits.length) ? 0 : y._digits[t];
            var yt1 = (t - 1 >= y._digits.length) ? 0 : y._digits[t - 1];
            if (ri == yt) {
                q._digits[i - t - 1] = _maxDigitVal;
            } else {
                q._digits[i - t - 1] = Math.floor((ri * _biRadix + ri1) / yt);
            }

            var c1 = q._digits[i - t - 1] * ((yt * _biRadix) + yt1);
            var c2 = (ri * _biRadixSquared) + ((ri1 * _biRadix) + ri2);
            while (c1 > c2) {
                --q._digits[i - t - 1];
                c1 = q._digits[i - t - 1] * ((yt * _biRadix) | yt1);
                c2 = (ri * _biRadix * _biRadix) + ((ri1 * _biRadix) + ri2);
            }

            b = __biMultiplyByRadixPower(y, i - t - 1);
            r = __biSubtract(r, __biMultiplyDigit(b, q._digits[i - t - 1]));
            if (r._isNeg) {
                r = __biAdd(r, b);
                --q._digits[i - t - 1];
            }
        }
        r = __biShiftRight(r, _lambda);
        q._isNeg = x._isNeg != _origYIsNeg;
        if (x._isNeg) {
            if (_origYIsNeg) {
                q = __biAdd(q, _bigOne);
            } else {
                q = __biSubtract(q, _bigOne);
            }
            y = __biShiftRight(y, _lambda);
            r = __biSubtract(y, r);
        }
        if (r._digits[0] == 0 && __biHighIndex(r) == 0) r._isNeg = false;

        return new Array(q, r);
    }

    function __biDivide(x, y) {
        return __biDivideModulo(x, y)[0];
    }

    function __biModulo(x, y) {
        return __biDivideModulo(x, y)[1];
    }

    function __biMultiplyMod(x, y, m) {
        return __biModulo(__biMultiply(x, y), m);
    }

    function __biPow(x, y) {
        var _result = _bigOne;
        var a = x;
        while (true) {
            if ((y & 1) != 0) _result = __biMultiply(_result, a);
            y >>= 1;
            if (y == 0) break;
            a = __biMultiply(a, a);
        }
        return _result;
    }

    function __biPowMod(x, y, m) {
        var _result = _bigOne;
        var a = x;
        var k = y;
        while (true) {
            if ((k._digits[0] & 1) != 0) _result = __biMultiplyMod(_result, a, m);
            k = __biShiftRight(k, 1);
            if (k._digits[0] == 0 && __biHighIndex(k) == 0) break;
            a = __biMultiplyMod(a, a, m);
        }
        return _result;
    }

    function __RSAKeyPair(_encryptionExponent, _decryptionExponent, _modulus) {
        this.e = __biFromHex(_encryptionExponent);
        this.d = __biFromHex(_decryptionExponent);
        this.m = __biFromHex(_modulus);
        this._digitSize = 2 * __biHighIndex(this.m) + 2;
        this.__chunkSize = this._digitSize - 11;

        this._radix = 16;
        this._barrett = new __BarrettMu(this.m);
    }

    function __twoDigit(n) {
        return (n < 10 ? "0" : "") + String(n);
    }

    function __encryptedString(key, s) {
        if (key.__chunkSize > key._digitSize - 11) {
            return "Error";
        }

        var a = new Array();
        var sl = s.length;

        var i = 0;
        while (i < sl) {
            a[i] = s.charCodeAt(i);
            i++;
        }

        var al = a.length;
        var result = "";
        var j, k, _block;
        for (i = 0; i < al; i += key.__chunkSize) {
            _block = new __BigInt();
            j = 0;

            var x;
            var _msgLength = (i + key.__chunkSize) > al ? al % key.__chunkSize : key.__chunkSize;

            var b = new Array();
            for (x = 0; x < _msgLength; x++) {
                b[x] = a[i + _msgLength - 1 - x];
            }
            b[_msgLength] = 0;
            var paddedSize = Math.max(8, key._digitSize - 3 - _msgLength);

            for (x = 0; x < paddedSize; x++) {
                b[_msgLength + 1 + x] = Math.floor(Math.random() * 254) + 1;
            }

            b[key._digitSize - 2] = 2;
            b[key._digitSize - 1] = 0;

            for (k = 0; k < key._digitSize; ++j) {
                _block._digits[j] = b[k++];
                _block._digits[j] += b[k++] << 8;
            }

            var crypt = key._barrett._powMod(_block, key.e);
            var text = key._radix == 16 ? __biToHex(crypt) : __biToString(crypt, key._radix);
            result += text + " ";
        }
        return result.substring(0, result.length - 1);
    }

    function __decryptedString(key, s) {
        var _blocks = s.split(" ");
        var result = "";
        var i, j, _block;
        for (i = 0; i < _blocks.length; ++i) {
            var bi;
            if (key._radix == 16) {
                bi = __biFromHex(_blocks[i]);
            }
            else {
                bi = __biFromString(_blocks[i], key._radix);
            }
            _block = key._barrett._powMod(bi, key.d);
            for (j = 0; j <= __biHighIndex(_block); ++j) {
                result += String.fromCharCode(_block._digits[j] & 255,
                    _block._digits[j] >> 8);
            }
        }

        if (result.charCodeAt(result.length - 1) == 0) {
            result = result.substring(0, result.length - 1);
        }
        return result;
    }

    var _dbits;
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary & 0xffffff) == 0xefcafe);

    function __BigInteger(a, b, c) {
        if (a != null) if ("number" == typeof a) this.__fromNumber(a, b, c);
        else if (b == null && "string" != typeof a) this.__fromString(a, 256);
        else this.__fromString(a, b);
    }

    function __nbi() {
        return new __BigInteger(null);
    }

    function __am1(i, x, w, j, c, n) {
        while (--n >= 0) {
            var v = x * this[i++] + w[j] + c;
            c = Math.floor(v / 0x4000000);
            w[j++] = v & 0x3ffffff;
        }
        return c;
    }

    function __am2(i, x, w, j, c, n) {
        var xl = x & 0x7fff,
            xh = x >> 15;
        while (--n >= 0) {
            var l = this[i] & 0x7fff;
            var h = this[i++] >> 15;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w[j++] = l & 0x3fffffff;
        }
        return c;
    }
    function __am3(i, x, w, j, c, n) {
        var xl = x & 0x3fff,
            xh = x >> 14;
        while (--n >= 0) {
            var l = this[i] & 0x3fff;
            var h = this[i++] >> 14;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
            c = (l >> 28) + (m >> 14) + xh * h;
            w[j++] = l & 0xfffffff;
        }
        return c;
    }
    if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
        __BigInteger.prototype.__am = __am2;
        _dbits = 30;
    }
    else if (j_lm && (navigator.appName != "Netscape")) {
        __BigInteger.prototype.__am = __am1;
        _dbits = 26;
    }
    else {
        __BigInteger.prototype.__am = __am3;
        _dbits = 28;
    }

    __BigInteger.prototype.DB = _dbits;
    __BigInteger.prototype.DM = ((1 << _dbits) - 1);
    __BigInteger.prototype.DV = (1 << _dbits);

    var _BI_FP = 52;
    __BigInteger.prototype.FV = Math.pow(2, _BI_FP);
    __BigInteger.prototype.F1 = _BI_FP - _dbits;
    __BigInteger.prototype.F2 = 2 * _dbits - _BI_FP;

    var _BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var _BI_RC = new Array();
    var rr, vv;
    rr = "0".charCodeAt(0);
    for (vv = 0; vv <= 9; ++vv) _BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) _BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) _BI_RC[rr++] = vv;

    function __int2char(n) {
        return _BI_RM.charAt(n);
    }

    function __intAt(s, i) {
        var c = _BI_RC[s.charCodeAt(i)];
        return (c == null) ? -1 : c;
    }

    function __bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
    }

    function __bnpFromInt(x) {
        this.t = 1;
        this.s = (x < 0) ? -1 : 0;
        if (x > 0) this[0] = x;
        else if (x < -1) this[0] = x + DV;
        else this.t = 0;
    }

    function __nbv(i) {
        var r = __nbi();
        r.__fromInt(i);
        return r;
    }

    function __bnpFromString(s, b) {
        var k;
        if (b == 16) k = 4;
        else if (b == 8) k = 3;
        else if (b == 256) k = 8;
        else if (b == 2) k = 1;
        else if (b == 32) k = 5;
        else if (b == 4) k = 2;
        else {
            this.__fromRadix(s, b);
            return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length,
            mi = false,
            sh = 0;
        while (--i >= 0) {
            var x = (k == 8) ? s[i] & 0xff : __intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-") mi = true;
                continue;
            }
            mi = false;
            if (sh == 0) this[this.t++] = x;
            else if (sh + k > this.DB) {
                this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                this[this.t++] = (x >> (this.DB - sh));
            }
            else this[this.t - 1] |= x << sh;
            sh += k;
            if (sh >= this.DB) sh -= this.DB;
        }
        if (k == 8 && (s[0] & 0x80) != 0) {
            this.s = -1;
            if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
        }
        this.__clamp();
        if (mi) __BigInteger.__ZERO.__subTo(this, this);
    }

    function __bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c)--this.t;
    }

    function __bnToString(b) {
        if (this.s < 0) return "-" + this._negate().toString(b);
        var k;
        if (b == 16) k = 4;
        else if (b == 8) k = 3;
        else if (b == 2) k = 1;
        else if (b == 32) k = 5;
        else if (b == 64) k = 6;
        else if (b == 4) k = 2;
        else return this.__toRadix(b);
        var km = (1 << k) - 1,
            d, m = false,
            r = "",
            i = this.t;
        var p = this.DB - (i * this.DB) % k;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) > 0) {
                m = true;
                r = __int2char(d);
            }
            while (i >= 0) {
                if (p < k) {
                    d = (this[i] & ((1 << p) - 1)) << (k - p);
                    d |= this[--i] >> (p += this.DB - k);
                }
                else {
                    d = (this[i] >> (p -= k)) & km;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if (d > 0) m = true;
                if (m) r += __int2char(d);
            }
        }
        return m ? r : "0";
    }

    function __bnNegate() {
        var r = __nbi();
        __BigInteger.__ZERO.__subTo(this, r);
        return r;
    }

    function __bnAbs() {
        return (this.s < 0) ? this._negate() : this;
    }

    function __bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0) return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0) return r;
        while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
        return 0;
    }

    function __nbits(x) {
        var r = 1,
            t;
        if ((t = x >>> 16) != 0) {
            x = t;
            r += 16;
        }
        if ((t = x >> 8) != 0) {
            x = t;
            r += 8;
        }
        if ((t = x >> 4) != 0) {
            x = t;
            r += 4;
        }
        if ((t = x >> 2) != 0) {
            x = t;
            r += 2;
        }
        if ((t = x >> 1) != 0) {
            x = t;
            r += 1;
        }
        return r;
    }

    function __bnBitLength() {
        if (this.t <= 0) return 0;
        return this.DB * (this.t - 1) + __nbits(this[this.t - 1] ^ (this.s & this.DM));
    }

    function __bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i) r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
    }

    function __bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i) r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
    }

    function __bnpLShiftTo(n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB),
            c = (this.s << bs) & this.DM,
            i;
        for (i = this.t - 1; i >= 0; --i) {
            r[i + ds + 1] = (this[i] >> cbs) | c;
            c = (this[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i) r[i] = 0;
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.__clamp();
    }

    function __bnpRShiftTo(n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
            r.t = 0;
            return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
            r[i - ds - 1] |= (this[i] & bm) << cbs;
            r[i - ds] = this[i] >> bs;
        }
        if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
        r.t = this.t - ds;
        r.__clamp();
    }

    function __bnpSubTo(a, r) {
        var i = 0,
            c = 0,
            m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] - a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c -= a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c -= a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c -= a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c < -1) r[i++] = this.DV + c;
        else if (c > 0) r[i++] = c;
        r.t = i;
        r.__clamp();
    }

    function __bnpMultiplyTo(a, r) {
        var x = this.__abs(),
            y = a.__abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < y.t; ++i) r[i + x.t] = x.__am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.__clamp();
        if (this.s != a.s) __BigInteger.__ZERO.__subTo(r, r);
    }

    function __bnpSquareTo(r) {
        var x = this.__abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
            var c = x.__am(i, x[i], r, 2 * i, 0, 1);
            if ((r[i + x.t] += x.__am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                r[i + x.t] -= x.DV;
                r[i + x.t + 1] = 1;
            }
        }
        if (r.t > 0) r[r.t - 1] += x.__am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.__clamp();
    }

    function __bnpDivRemTo(m, q, r) {
        var pm = m.__abs();
        if (pm.t <= 0) return;
        var pt = this.__abs();
        if (pt.t < pm.t) {
            if (q != null) q.__fromInt(0);
            if (r != null) this.__copyTo(r);
            return;
        }
        if (r == null) r = __nbi();
        var y = __nbi(),
            ts = this.s,
            ms = m.s;
        var nsh = this.DB - __nbits(pm[pm.t - 1]);
        if (nsh > 0) {
            pm.__lShiftTo(nsh, y);
            pt.__lShiftTo(nsh, r);
        }
        else {
            pm.__copyTo(y);
            pt.__copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) return;
        var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt,
            d2 = (1 << this.F1) / yt,
            e = 1 << this.F2;
        var i = r.t,
            j = i - ys,
            t = (q == null) ? __nbi() : q;
        y.__dlShiftTo(j, t);
        if (r.__compareTo(t) >= 0) {
            r[r.t++] = 1;
            r.__subTo(t, r);
        }
        __BigInteger.__ONE.__dlShiftTo(ys, t);
        t.__subTo(y, y);
        while (y.t < ys) y[y.t++] = 0;
        while (--j >= 0) {
            var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
            if ((r[i] += y.__am(0, qd, r, j, 0, ys)) < qd) {
                y.__dlShiftTo(j, t);
                r.__subTo(t, r);
                while (r[i] < --qd) r.__subTo(t, r);
            }
        }
        if (q != null) {
            r.__drShiftTo(ys, q);
            if (ts != ms) __BigInteger.__ZERO.__subTo(q, q);
        }
        r.t = ys;
        r.__clamp();
        if (nsh > 0) r.__rShiftTo(nsh, r);
        if (ts < 0) __BigInteger.__ZERO.__subTo(r, r);
    }

    function __bnMod(a) {
        var r = __nbi();
        this.__abs().__divRemTo(a, null, r);
        if (this.s < 0 && r.__compareTo(__BigInteger.__ZERO) > 0) a.__subTo(r, r);
        return r;
    }

    function __Classic(m) {
        this.m = m;
    }

    function __cConvert(x) {
        if (x.s < 0 || x.__compareTo(this.m) >= 0) return x.__mod(this.m);
        else return x;
    }

    function __cRevert(x) {
        return x;
    }

    function __cReduce(x) {
        x.__divRemTo(this.m, null, x);
    }

    function __cMulTo(x, y, r) {
        x.__multiplyTo(y, r);
        this.__reduce(r);
    }

    function __cSqrTo(x, r) {
        x.__squareTo(r);
        this.__reduce(r);
    }

    __Classic.prototype.__convert = __cConvert;
    __Classic.prototype.__revert = __cRevert;
    __Classic.prototype.__reduce = __cReduce;
    __Classic.prototype.__mulTo = __cMulTo;
    __Classic.prototype.__sqrTo = __cSqrTo;

    function __bnpInvDigit() {
        if (this.t < 1) return 0;
        var x = this[0];
        if ((x & 1) == 0) return 0;
        var y = x & 3;
        y = (y * (2 - (x & 0xf) * y)) & 0xf;
        y = (y * (2 - (x & 0xff) * y)) & 0xff;
        y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
        y = (y * (2 - x * y % this.DV)) % this.DV;
        return (y > 0) ? this.DV - y : -y;
    }

    function __Montgomery(m) {
        this.m = m;
        this.mp = m.__invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << (m.DB - 15)) - 1;
        this.mt2 = 2 * m.t;
    }

    function __montConvert(x) {
        var r = __nbi();
        x.__abs().__dlShiftTo(this.m.t, r);
        r.__divRemTo(this.m, null, r);
        if (x.s < 0 && r.__compareTo(__BigInteger.__ZERO) > 0) this.m.__subTo(r, r);
        return r;
    }

    function __montRevert(x) {
        var r = __nbi();
        x.__copyTo(r);
        this.__reduce(r);
        return r;
    }

    function __montReduce(x) {
        while (x.t <= this.mt2)
            x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
            var j = x[i] & 0x7fff;
            var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
            j = i + this.m.t;
            x[j] += this.m.__am(0, u0, x, i, 0, this.m.t);
            while (x[j] >= x.DV) {
                x[j] -= x.DV;
                x[++j]++;
            }
        }
        x.__clamp();
        x.__drShiftTo(this.m.t, x);
        if (x.__compareTo(this.m) >= 0) x.__subTo(this.m, x);
    }

    function __montSqrTo(x, r) {
        x.__squareTo(r);
        this.__reduce(r);
    }

    function __montMulTo(x, y, r) {
        x.__multiplyTo(y, r);
        this.__reduce(r);
    }

    __Montgomery.prototype.__convert = __montConvert;
    __Montgomery.prototype.__revert = __montRevert;
    __Montgomery.prototype.__reduce = __montReduce;
    __Montgomery.prototype.__mulTo = __montMulTo;
    __Montgomery.prototype.__sqrTo = __montSqrTo;

    function __bnpIsEven() {
        return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
    }

    function __bnpExp(e, z) {
        if (e > 0xffffffff || e < 1) return __BigInteger.__ONE;
        var r = __nbi(),
            r2 = __nbi(),
            g = z.__convert(this),
            i = __nbits(e) - 1;
        g.__copyTo(r);
        while (--i >= 0) {
            z.__sqrTo(r, r2);
            if ((e & (1 << i)) > 0) z.__mulTo(r2, g, r);
            else {
                var t = r;
                r = r2;
                r2 = t;
            }
        }
        return z.__revert(r);
    }

    function __bnModPowInt(e, m) {
        var z;
        if (e < 256 || m.__isEven()) z = new __Classic(m);
        else z = new __Montgomery(m);
        return this.__exp(e, z);
    }

    __BigInteger.prototype.__copyTo = __bnpCopyTo;
    __BigInteger.prototype.__fromInt = __bnpFromInt;
    __BigInteger.prototype.__fromString = __bnpFromString;
    __BigInteger.prototype.__clamp = __bnpClamp;
    __BigInteger.prototype.__dlShiftTo = __bnpDLShiftTo;
    __BigInteger.prototype.__drShiftTo = __bnpDRShiftTo;
    __BigInteger.prototype.__lShiftTo = __bnpLShiftTo;
    __BigInteger.prototype.__rShiftTo = __bnpRShiftTo;
    __BigInteger.prototype.__subTo = __bnpSubTo;
    __BigInteger.prototype.__multiplyTo = __bnpMultiplyTo;
    __BigInteger.prototype.__squareTo = __bnpSquareTo;
    __BigInteger.prototype.__divRemTo = __bnpDivRemTo;
    __BigInteger.prototype.__invDigit = __bnpInvDigit;
    __BigInteger.prototype.__isEven = __bnpIsEven;
    __BigInteger.prototype.__exp = __bnpExp;

    __BigInteger.prototype.toString = __bnToString;
    __BigInteger.prototype._negate = __bnNegate;
    __BigInteger.prototype.__abs = __bnAbs;
    __BigInteger.prototype.__compareTo = __bnCompareTo;
    __BigInteger.prototype.__bitLength = __bnBitLength;
    __BigInteger.prototype.__mod = __bnMod;
    __BigInteger.prototype._modPowInt = __bnModPowInt;

    __BigInteger.__ZERO = __nbv(0);
    __BigInteger.__ONE = __nbv(1);


    function __bnClone() {
        var r = __nbi();
        this.__copyTo(r);
        return r;
    }

    function __bnIntValue() {
        if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            else if (this.t == 0) return -1;
        }
        else if (this.t == 1) return this[0];
        else if (this.t == 0) return 0;
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
    }

    function __bnByteValue() {
        return (this.t == 0) ? this.s : (this[0] << 24) >> 24;
    }

    function __bnShortValue() {
        return (this.t == 0) ? this.s : (this[0] << 16) >> 16;
    }

    function __bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
    }

    function __bnSigNum() {
        if (this.s < 0) return -1;
        else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
        else return 1;
    }

    function __bnpToRadix(b) {
        if (b == null) b = 10;
        if (this.__signum() == 0 || b < 2 || b > 36) return "0";
        var cs = this.__chunkSize(b);
        var a = Math.pow(b, cs);
        var d = __nbv(a),
            y = __nbi(),
            z = __nbi(),
            r = "";
        this.__divRemTo(d, y, z);
        while (y.__signum() > 0) {
            r = (a + z.__intValue()).toString(b).substr(1) + r;
            y.__divRemTo(d, y, z);
        }
        return z.__intValue().toString(b) + r;
    }

    function __bnpFromRadix(s, b) {
        this.__fromInt(0);
        if (b == null) b = 10;
        var cs = this.__chunkSize(b);
        var d = Math.pow(b, cs),
            mi = false,
            j = 0,
            w = 0;
        for (var i = 0; i < s.length; ++i) {
            var x = __intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-" && this.__signum() == 0) mi = true;
                continue;
            }
            w = b * w + x;
            if (++j >= cs) {
                this.__dMultiply(d);
                this.__dAddOffset(w, 0);
                j = 0;
                w = 0;
            }
        }
        if (j > 0) {
            this.__dMultiply(Math.pow(b, j));
            this.__dAddOffset(w, 0);
        }
        if (mi) __BigInteger.__ZERO.__subTo(this, this);
    }

    function __bnpFromNumber(a, b, c) {
        if ("number" == typeof b) {
            if (a < 2) this.__fromInt(1);
            else {
                this.__fromNumber(a, c);
                if (!this.__testBit(a - 1))
                    this.__bitwiseTo(__BigInteger.__ONE.__shiftLeft(a - 1), _op_or, this);
                if (this.__isEven()) this.__dAddOffset(1, 0);
                while (!this.__isProbablePrime(b)) {
                    this.__dAddOffset(2, 0);
                    if (this.__bitLength() > a) this.__subTo(__BigInteger.__ONE.__shiftLeft(a - 1), this);
                }
            }
        }
        else {
            var x = new Array(),
                t = a & 7;
            x.length = (a >> 3) + 1;
            b.__nextBytes(x);
            if (t > 0) x[0] &= ((1 << t) - 1);
            else x[0] = 0;
            this.__fromString(x, 256);
        }
    }

    function __bnToByteArray() {
        var i = this.t,
            r = new Array();
        r[0] = this.s;
        var p = this.DB - (i * this.DB) % 8,
            d, k = 0;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) r[k++] = d | (this.s << (this.DB - p));
            while (i >= 0) {
                if (p < 8) {
                    d = (this[i] & ((1 << p) - 1)) << (8 - p);
                    d |= this[--i] >> (p += this.DB - 8);
                }
                else {
                    d = (this[i] >> (p -= 8)) & 0xff;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if ((d & 0x80) != 0) d |= -256;
                if (k == 0 && (this.s & 0x80) != (d & 0x80))++k;
                if (k > 0 || d != this.s) r[k++] = d;
            }
        }
        return r;
    }

    function __bnEquals(a) {
        return (this.__compareTo(a) == 0);
    }

    function __bnMin(a) {
        return (this.__compareTo(a) < 0) ? this : a;
    }

    function __bnMax(a) {
        return (this.__compareTo(a) > 0) ? this : a;
    }

    function __bnpBitwiseTo(a, _op, r) {
        var i, f, m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i) r[i] = _op(this[i], a[i]);
        if (a.t < this.t) {
            f = a.s & this.DM;
            for (i = m; i < this.t; ++i) r[i] = _op(this[i], f);
            r.t = this.t;
        }
        else {
            f = this.s & this.DM;
            for (i = m; i < a.t; ++i) r[i] = _op(f, a[i]);
            r.t = a.t;
        }
        r.s = _op(this.s, a.s);
        r.__clamp();
    }

    function __op_and(x, y) {
        return x & y;
    }

    function __bnAnd(a) {
        var r = __nbi();
        this.__bitwiseTo(a, __op_and, r);
        return r;
    }

    function _op_or(x, y) {
        return x | y;
    }

    function __bnOr(a) {
        var r = __nbi();
        this.__bitwiseTo(a, _op_or, r);
        return r;
    }

    function __op_xor(x, y) {
        return x ^ y;
    }

    function __bnXor(a) {
        var r = __nbi();
        this.__bitwiseTo(a, __op_xor, r);
        return r;
    }

    function __op_andnot(x, y) {
        return x & ~y;
    }

    function __bnAndNot(a) {
        var r = __nbi();
        this.__bitwiseTo(a, __op_andnot, r);
        return r;
    }

    function __bnNot() {
        var r = __nbi();
        for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
    }
    function __bnShiftLeft(n) {
        var r = __nbi();
        if (n < 0) this.__rShiftTo(-n, r);
        else this.__lShiftTo(n, r);
        return r;
    }

    function __bnShiftRight(n) {
        var r = __nbi();
        if (n < 0) this.__lShiftTo(-n, r);
        else this.__rShiftTo(n, r);
        return r;
    }

    function __lbit(x) {
        if (x == 0) return -1;
        var r = 0;
        if ((x & 0xffff) == 0) {
            x >>= 16;
            r += 16;
        }
        if ((x & 0xff) == 0) {
            x >>= 8;
            r += 8;
        }
        if ((x & 0xf) == 0) {
            x >>= 4;
            r += 4;
        }
        if ((x & 3) == 0) {
            x >>= 2;
            r += 2;
        }
        if ((x & 1) == 0)++r;
        return r;
    }

    function __bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + __lbit(this[i]);
        if (this.s < 0) return this.t * this.DB;
        return -1;
    }

    function __cbit(x) {
        var r = 0;
        while (x != 0) {
            x &= x - 1;
            ++r;
        }
        return r;
    }

    function __bnBitCount() {
        var r = 0,
            x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) r += __cbit(this[i] ^ x);
        return r;
    }

    function __bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) return (this.s != 0);
        return ((this[j] & (1 << (n % this.DB))) != 0);
    }

    function __bnpChangeBit(n, op) {
        var r = __BigInteger.__ONE.__shiftLeft(n);
        this.__bitwiseTo(r, op, r);
        return r;
    }

    function __bnSetBit(n) {
        return this.__changeBit(n, _op_or);
    }

    function __bnClearBit(n) {
        return this.__changeBit(n, __op_andnot);
    }

    function __bnFlipBit(n) {
        return this.__changeBit(n, __op_xor);
    }

    function __bnpAddTo(a, r) {
        var i = 0,
            c = 0,
            m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] + a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c += a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c += a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c > 0) r[i++] = c;
        else if (c < -1) r[i++] = this.DV + c;
        r.t = i;
        r.__clamp();
    }
    function __bnAdd(a) {
        var r = __nbi();
        this.__addTo(a, r);
        return r;
    }

    function __bnSubtract(a) {
        var r = __nbi();
        this.__subTo(a, r);
        return r;
    }

    function __bnMultiply(a) {
        var r = __nbi();
        this.__multiplyTo(a, r);
        return r;
    }

    function __bnSquare() {
        var r = __nbi();
        this.__squareTo(r);
        return r;
    }

    function __bnDivide(a) {
        var r = __nbi();
        this.__divRemTo(a, r, null);
        return r;
    }

    function __bnRemainder(a) {
        var r = __nbi();
        this.__divRemTo(a, null, r);
        return r;
    }
    function __bnDivideAndRemainder(a) {
        var q = __nbi(),
            r = __nbi();
        this.__divRemTo(a, q, r);
        return new Array(q, r);
    }

    function __bnpDMultiply(n) {
        this[this.t] = this.__am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.__clamp();
    }

    function __bnpDAddOffset(n, w) {
        if (n == 0) return;
        while (this.t <= w) this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
            this[w] -= this.DV;
            if (++w >= this.t) this[this.t++] = 0;
            ++this[w];
        }
    }

    function __NullExp() { }

    function __nNop(x) {
        return x;
    }

    function __nMulTo(x, y, r) {
        x.__multiplyTo(y, r);
    }

    function __nSqrTo(x, r) {
        x.__squareTo(r);
    }

    __NullExp.prototype.__convert = __nNop;
    __NullExp.prototype.__revert = __nNop;
    __NullExp.prototype.__mulTo = __nMulTo;
    __NullExp.prototype.__sqrTo = __nSqrTo;

    function __bnPow(e) {
        return this.__exp(e, new __NullExp());
    }

    function __bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0) r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.__am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i) this.__am(0, a[i], r, i, 0, n - i);
        r.__clamp();
    }

    function __bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i)
            r[this.t + i - n] = this.__am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.__clamp();
        r.__drShiftTo(1, r);
    }

    function __Barrett(m) {
        this.r2 = __nbi();
        this.q3 = __nbi();
        __BigInteger.__ONE.__dlShiftTo(2 * m.t, this.r2);
        this._mu = this.r2.__divide(m);
        this.m = m;
    }

    function __barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t) return x.__mod(this.m);
        else if (x.__compareTo(this.m) < 0) return x;
        else {
            var r = __nbi();
            x.__copyTo(r);
            this.__reduce(r);
            return r;
        }
    }

    function __barrettRevert(x) {
        return x;
    }

    function __barrettReduce(x) {
        x.__drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
            x.t = this.m.t + 1;
            x.__clamp();
        }
        this._mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.__compareTo(this.r2) < 0) x.__dAddOffset(1, this.m.t + 1);
        x.__subTo(this.r2, x);
        while (x.__compareTo(this.m) >= 0) x.__subTo(this.m, x);
    }

    function __barrettSqrTo(x, r) {
        x.__squareTo(r);
        this.__reduce(r);
    }

    function __barrettMulTo(x, y, r) {
        x.__multiplyTo(y, r);
        this.__reduce(r);
    }

    __Barrett.prototype.__convert = __barrettConvert;
    __Barrett.prototype.__revert = __barrettRevert;
    __Barrett.prototype.__reduce = __barrettReduce;
    __Barrett.prototype.__mulTo = __barrettMulTo;
    __Barrett.prototype.__sqrTo = __barrettSqrTo;

    function __bnModPow(e, m) {
        var i = e.__bitLength(),
            k, r = __nbv(1),
            z;
        if (i <= 0) return r;
        else if (i < 18) k = 1;
        else if (i < 48) k = 3;
        else if (i < 144) k = 4;
        else if (i < 768) k = 5;
        else k = 6;
        if (i < 8) z = new __Classic(m);
        else if (m.__isEven()) z = new __Barrett(m);
        else z = new __Montgomery(m);

        var g = new Array(),
            n = 3,
            k1 = k - 1,
            km = (1 << k) - 1;
        g[1] = z.__convert(this);
        if (k > 1) {
            var g2 = __nbi();
            z.__sqrTo(g[1], g2);
            while (n <= km) {
                g[n] = __nbi();
                z.__mulTo(g2, g[n - 2], g[n]);
                n += 2;
            }
        }

        var j = e.t - 1,
            w, is1 = true,
            r2 = __nbi(),
            t;
        i = __nbits(e[j]) - 1;
        while (j >= 0) {
            if (i >= k1) w = (e[j] >> (i - k1)) & km;
            else {
                w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
                if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
            }

            n = k;
            while ((w & 1) == 0) {
                w >>= 1;
                --n;
            }
            if ((i -= n) < 0) {
                i += this.DB;
                --j;
            }
            if (is1) {
                g[w].__copyTo(r);
                is1 = false;
            }
            else {
                while (n > 1) {
                    z.__sqrTo(r, r2);
                    z.__sqrTo(r2, r);
                    n -= 2;
                }
                if (n > 0) z.__sqrTo(r, r2);
                else {
                    t = r;
                    r = r2;
                    r2 = t;
                }
                z.__mulTo(r2, g[w], r);
            }

            while (j >= 0 && (e[j] & (1 << i)) == 0) {
                z.__sqrTo(r, r2);
                t = r;
                r = r2;
                r2 = t;
                if (--i < 0) {
                    i = this.DB - 1;
                    --j;
                }
            }
        }
        return z.__revert(r);
    }

    function __bnGCD(a) {
        var x = (this.s < 0) ? this._negate() : this.__clone();
        var y = (a.s < 0) ? a._negate() : a.__clone();
        if (x.__compareTo(y) < 0) {
            var t = x;
            x = y;
            y = t;
        }
        var i = x.__getLowestSetBit(),
            g = y.__getLowestSetBit();
        if (g < 0) return x;
        if (i < g) g = i;
        if (g > 0) {
            x.__rShiftTo(g, x);
            y.__rShiftTo(g, y);
        }
        while (x.__signum() > 0) {
            if ((i = x.__getLowestSetBit()) > 0) x.__rShiftTo(i, x);
            if ((i = y.__getLowestSetBit()) > 0) y.__rShiftTo(i, y);
            if (x.__compareTo(y) >= 0) {
                x.__subTo(y, x);
                x.__rShiftTo(1, x);
            }
            else {
                y.__subTo(x, y);
                y.__rShiftTo(1, y);
            }
        }
        if (g > 0) y.__lShiftTo(g, y);
        return y;
    }

    function __bnpModInt(n) {
        if (n <= 0) return 0;
        var d = this.DV % n,
            r = (this.s < 0) ? n - 1 : 0;
        if (this.t > 0) if (d == 0) r = this[0] % n;
        else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
        return r;
    }

    function __bnModInverse(m) {
        var ac = m.__isEven();
        if ((this.__isEven() && ac) || m.__signum() == 0) return __BigInteger.__ZERO;
        var u = m.__clone(),
            v = this.__clone();
        var a = __nbv(1),
            b = __nbv(0),
            c = __nbv(0),
            d = __nbv(1);
        while (u.__signum() != 0) {
            while (u.__isEven()) {
                u.__rShiftTo(1, u);
                if (ac) {
                    if (!a.__isEven() || !b.__isEven()) {
                        a.__addTo(this, a);
                        b.__subTo(m, b);
                    }
                    a.__rShiftTo(1, a);
                }
                else if (!b.__isEven()) b.__subTo(m, b);
                b.__rShiftTo(1, b);
            }
            while (v.__isEven()) {
                v.__rShiftTo(1, v);
                if (ac) {
                    if (!c.__isEven() || !d.__isEven()) {
                        c.__addTo(this, c);
                        d.__subTo(m, d);
                    }
                    c.__rShiftTo(1, c);
                }
                else if (!d.__isEven()) d.__subTo(m, d);
                d.__rShiftTo(1, d);
            }
            if (u.__compareTo(v) >= 0) {
                u.__subTo(v, u);
                if (ac) a.__subTo(c, a);
                b.__subTo(d, b);
            }
            else {
                v.__subTo(u, v);
                if (ac) c.__subTo(a, c);
                d.__subTo(b, d);
            }
        }
        if (v.__compareTo(__BigInteger.__ONE) != 0) return __BigInteger.__ZERO;
        if (d.__compareTo(m) >= 0) return d.__subtract(m);
        if (d.__signum() < 0) d.__addTo(m, d);
        else return d;
        if (d.__signum() < 0) return d.__add(m);
        else return d;
    }

    var _lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var _lplim = (1 << 26) / _lowprimes[_lowprimes.length - 1];

    function __bnIsProbablePrime(t) {
        var i, x = this.__abs();
        if (x.t == 1 && x[0] <= _lowprimes[_lowprimes.length - 1]) {
            for (i = 0; i < _lowprimes.length; ++i)
                if (x[0] == _lowprimes[i]) return true;
            return false;
        }
        if (x.__isEven()) return false;
        i = 1;
        while (i < _lowprimes.length) {
            var m = _lowprimes[i],
                j = i + 1;
            while (j < _lowprimes.length && m < _lplim) m *= _lowprimes[j++];
            m = x._modInt(m);
            while (i < j) if (m % _lowprimes[i++] == 0) return false;
        }
        return x.__millerRabin(t);
    }

    function __bnpMillerRabin(t) {
        var n1 = this.__subtract(__BigInteger.__ONE);
        var k = n1.__getLowestSetBit();
        if (k <= 0) return false;
        var r = n1.shiftRight(k);
        t = (t + 1) >> 1;
        if (t > _lowprimes.length) t = _lowprimes.length;
        var a = __nbi();
        for (var i = 0; i < t; ++i) {
            //Pick bases at _random, instead of starting at 2
            a.__fromInt(_lowprimes[Math.floor(Math.random() * _lowprimes.length)]);
            var y = a.__modPow(r, this);
            if (y.__compareTo(__BigInteger.__ONE) != 0 && y.__compareTo(n1) != 0) {
                var j = 1;
                while (j++ < k && y.__compareTo(n1) != 0) {
                    y = y._modPowInt(2, this);
                    if (y.__compareTo(__BigInteger.__ONE) == 0) return false;
                }
                if (y.__compareTo(n1) != 0) return false;
            }
        }
        return true;
    }

    // protected
    __BigInteger.prototype.__chunkSize = __bnpChunkSize;
    __BigInteger.prototype.__toRadix = __bnpToRadix;
    __BigInteger.prototype.__fromRadix = __bnpFromRadix;
    __BigInteger.prototype.__fromNumber = __bnpFromNumber;
    __BigInteger.prototype.__bitwiseTo = __bnpBitwiseTo;
    __BigInteger.prototype.__changeBit = __bnpChangeBit;
    __BigInteger.prototype.__addTo = __bnpAddTo;
    __BigInteger.prototype.__dMultiply = __bnpDMultiply;
    __BigInteger.prototype.__dAddOffset = __bnpDAddOffset;
    __BigInteger.prototype.__multiplyLowerTo = __bnpMultiplyLowerTo;
    __BigInteger.prototype.__multiplyUpperTo = __bnpMultiplyUpperTo;
    __BigInteger.prototype.__modInt = __bnpModInt;
    __BigInteger.prototype.__millerRabin = __bnpMillerRabin;

    // public
    __BigInteger.prototype.__clone = __bnClone;
    __BigInteger.prototype.__intValue = __bnIntValue;
    __BigInteger.prototype.__byteValue = __bnByteValue;
    __BigInteger.prototype.__shortValue = __bnShortValue;
    __BigInteger.prototype.__signum = __bnSigNum;
    __BigInteger.prototype.__toByteArray = __bnToByteArray;
    __BigInteger.prototype.__equals = __bnEquals;
    __BigInteger.prototype.__min = __bnMin;
    __BigInteger.prototype.__max = __bnMax;
    __BigInteger.prototype.__and = __bnAnd;
    __BigInteger.prototype.__or = __bnOr;
    __BigInteger.prototype.__xor = __bnXor;
    __BigInteger.prototype.__andNot = __bnAndNot;
    __BigInteger.prototype.__not = __bnNot;
    __BigInteger.prototype.__shiftLeft = __bnShiftLeft;
    __BigInteger.prototype.__shiftRight = __bnShiftRight;
    __BigInteger.prototype.__getLowestSetBit = __bnGetLowestSetBit;
    __BigInteger.prototype.__bitCount = __bnBitCount;
    __BigInteger.prototype.__testBit = __bnTestBit;
    __BigInteger.prototype.__setBit = __bnSetBit;
    __BigInteger.prototype.__clearBit = __bnClearBit;
    __BigInteger.prototype.__flipBit = __bnFlipBit;
    __BigInteger.prototype.__add = __bnAdd;
    __BigInteger.prototype.__subtract = __bnSubtract;
    __BigInteger.prototype.__multiply = __bnMultiply;
    __BigInteger.prototype.__divide = __bnDivide;
    __BigInteger.prototype.__remainder = __bnRemainder;
    __BigInteger.prototype.__divideAndRemainder = __bnDivideAndRemainder;
    __BigInteger.prototype.__modPow = __bnModPow;
    __BigInteger.prototype.__modInverse = __bnModInverse;
    __BigInteger.prototype.__pow = __bnPow;
    __BigInteger.prototype.__gcd = __bnGCD;
    __BigInteger.prototype.__isProbablePrime = __bnIsProbablePrime;

    // JSBN-specific extension
    __BigInteger.prototype.square = __bnSquare;


    (function (pool, math, width, _chunks, _significance, _overflow, _startdenom) {
        math['__seedrandom'] = function __seedrandom(_seed, _use_entropy) {
            var key = [];
            var _arc4;

            // Flatten the _seed string or build one from local entropy if needed.
            _seed = __mixkey(__flatten(
                _use_entropy ? [_seed, pool] : arguments.length ? _seed : [new Date().getTime(), pool, window], 3), key);

            // Use the _seed to initialize an __ARC4 generator.
            _arc4 = new __ARC4(key);

            // Mix the randomness into accumulated entropy.
            __mixkey(_arc4.S, pool);

            // Override Math.random
            // This function returns a _random double in [0, 1) that contains
            // randomness in every bit of the mantissa of the IEEE 754 value.
            math['_random'] = function _random() { // Closure to return a _random double:
                var n = _arc4.g(_chunks); // Start with a numerator n < 2 ^ 48
                var d = _startdenom; //   and denominator d = 2 ^ 48.
                var x = 0; //   and no 'extra last byte'.
                while (n < _significance) { // Fill up all significant _digits by
                    n = (n + x) * width; //   shifting numerator and
                    d *= width; //   denominator and generating a
                    x = _arc4.g(1); //   new least-significant-byte.
                }
                while (n >= _overflow) { // To avoid rounding up, before adding
                    n /= 2; //   last byte, shift everything
                    d /= 2; //   right using integer math until
                    x >>>= 1; //   we have exactly the desired _bits.
                }
                return (n + x) / d; // Form the number within [0, 1).
            };

            // Return the _seed that was used
            return _seed;
        };

        function __ARC4(key) {
            var t, u, me = this,
                _keylen = key.length;
            var i = 0,
                j = me.i = me.j = me.m = 0;
            me.S = [];
            me.c = [];

            // The empty key [] is treated as [0].
            if (!_keylen) {
                key = [_keylen++];
            }

            // Set up S using the standard key scheduling algorithm.
            while (i < width) {
                me.S[i] = i++;
            }
            for (i = 0; i < width; i++) {
                t = me.S[i];
                j = __lowbits(j + t + key[i % _keylen]);
                u = me.S[j];
                me.S[i] = u;
                me.S[j] = t;
            }

            // The "g" method returns the next (count) outputs as one number.
            me.g = function __getnext(count) {
                var s = me.S;
                var i = __lowbits(me.i + 1);
                var t = s[i];
                var j = __lowbits(me.j + t);
                var u = s[j];
                s[i] = u;
                s[j] = t;
                var r = s[__lowbits(t + u)];
                while (--count) {
                    i = __lowbits(i + 1);
                    t = s[i];
                    j = __lowbits(j + t);
                    u = s[j];
                    s[i] = u;
                    s[j] = t;
                    r = r * width + s[__lowbits(t + u)];
                }
                me.i = i;
                me.j = j;
                return r;
            };
            me.g(width);
        }

        function __flatten(obj, _depth, _result, prop, typ) {
            _result = [];
            typ = typeof (obj);
            if (_depth && typ == 'object') {
                for (prop in obj) {
                    if (prop.indexOf('S') < 5) { // Avoid FF3 bug (local/sessionStorage)
                        try {
                            _result.push(__flatten(obj[prop], _depth - 1));
                        }
                        catch (e)
                        { }
                    }
                }
            }
            return (_result.length ? _result : obj + (typ != 'string' ? '\0' : ''));
        }

        function __mixkey(_seed, key, _smear, j) {
            _seed += ''; // Ensure the _seed is a string
            _smear = 0;
            for (j = 0; j < _seed.length; j++) {
                key[__lowbits(j)] = __lowbits((_smear ^= key[__lowbits(j)] * 19) + _seed.charCodeAt(j));
            }
            _seed = '';
            for (j in key) {
                _seed += String.fromCharCode(key[j]);
            }
            return _seed;
        }

        function __lowbits(n) {
            return n & (width - 1);
        }

        _startdenom = math.pow(width, _chunks);
        _significance = math.pow(2, _significance);
        _overflow = _significance * 2;

        __mixkey(math.random(), pool);

        // End anonymous scope, and pass initial values.
    })([], Math, 256, 6, 52);

    function __SeededRandom() { }

    function __SRnextBytes(ba) {
        var i;
        for (i = 0; i < ba.length; i++) {
            ba[i] = Math.floor(Math.random() * 256);
        }
    }

    __SeededRandom.prototype.__nextBytes = __SRnextBytes;

    function __Arcfour() {
        this.i = 0;
        this.j = 0;
        this.S = new Array();
    }

    function __ARC4init(key) {
        var i, j, t;
        for (i = 0; i < 256; ++i)
            this.S[i] = i;
        j = 0;
        for (i = 0; i < 256; ++i) {
            j = (j + this.S[i] + key[i % key.length]) & 255;
            t = this.S[i];
            this.S[i] = this.S[j];
            this.S[j] = t;
        }
        this.i = 0;
        this.j = 0;
    }

    function __ARC4next() {
        var t;
        this.i = (this.i + 1) & 255;
        this.j = (this.j + this.S[this.i]) & 255;
        t = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = t;
        return this.S[(t + this.S[this.i]) & 255];
    }

    __Arcfour.prototype.init = __ARC4init;
    __Arcfour.prototype.next = __ARC4next;

    function __prng_newstate() {
        return new __Arcfour();
    }

    var _rng_psize = 256;
    var _rng_state;
    var _rng_pool;
    var _rng_pptr;

    function __rng_seed_int(x) {
        _rng_pool[_rng_pptr++] ^= x & 255;
        _rng_pool[_rng_pptr++] ^= (x >> 8) & 255;
        _rng_pool[_rng_pptr++] ^= (x >> 16) & 255;
        _rng_pool[_rng_pptr++] ^= (x >> 24) & 255;
        if (_rng_pptr >= _rng_psize) _rng_pptr -= _rng_psize;
    }

    function __rng_seed_time() {
        __rng_seed_int(new Date().getTime());
    }

    if (_rng_pool == null) {
        _rng_pool = new Array();
        _rng_pptr = 0;
        var t;
        if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
            var z = window.crypto._random(32);
            for (t = 0; t < z.length; ++t)
                _rng_pool[_rng_pptr++] = z.charCodeAt(t) & 255;
        }
        while (_rng_pptr < _rng_psize) {  // extract some randomness from Math.random()
            t = Math.floor(65536 * Math.random());
            _rng_pool[_rng_pptr++] = t >>> 8;
            _rng_pool[_rng_pptr++] = t & 255;
        }
        _rng_pptr = 0;
        __rng_seed_time();
    }

    function __rng_get_byte() {
        if (_rng_state == null) {
            __rng_seed_time();
            _rng_state = __prng_newstate();
            _rng_state.init(_rng_pool);
            for (_rng_pptr = 0; _rng_pptr < _rng_pool.length; ++_rng_pptr)
                _rng_pool[_rng_pptr] = 0;
            _rng_pptr = 0;
        }
        return _rng_state.next();
    }

    function __rng_get_bytes(ba) {
        var i;
        for (i = 0; i < ba.length; ++i) ba[i] = __rng_get_byte();
    }

    function __SecureRandom() { }

    __SecureRandom.prototype.__nextBytes = __rng_get_bytes;

    function __SHA256(s) {

        var _chrsz = 8;
        var _hexcase = 0;

        function __safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }

        function S(X, n) { return (X >>> n) | (X << (32 - n)); }
        function R(X, n) { return (X >>> n); }
        function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
        function __Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
        function __Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
        function __Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
        function __Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
        function __Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

        function __core_sha256(m, l) {
            var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
            var _HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
            var W = new Array(64);
            var a, b, c, d, e, f, g, h, i, j;
            var T1, T2;

            m[l >> 5] |= 0x80 << (24 - l % 32);
            m[((l + 64 >> 9) << 4) + 15] = l;

            for (var i = 0; i < m.length; i += 16) {
                a = _HASH[0];
                b = _HASH[1];
                c = _HASH[2];
                d = _HASH[3];
                e = _HASH[4];
                f = _HASH[5];
                g = _HASH[6];
                h = _HASH[7];

                for (var j = 0; j < 64; j++) {
                    if (j < 16) W[j] = m[j + i];
                    else W[j] = __safe_add(__safe_add(__safe_add(__Gamma1256(W[j - 2]), W[j - 7]), __Gamma0256(W[j - 15])), W[j - 16]);

                    T1 = __safe_add(__safe_add(__safe_add(__safe_add(h, __Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                    T2 = __safe_add(__Sigma0256(a), __Maj(a, b, c));

                    h = g;
                    g = f;
                    f = e;
                    e = __safe_add(d, T1);
                    d = c;
                    c = b;
                    b = a;
                    a = __safe_add(T1, T2);
                }

                _HASH[0] = __safe_add(a, _HASH[0]);
                _HASH[1] = __safe_add(b, _HASH[1]);
                _HASH[2] = __safe_add(c, _HASH[2]);
                _HASH[3] = __safe_add(d, _HASH[3]);
                _HASH[4] = __safe_add(e, _HASH[4]);
                _HASH[5] = __safe_add(f, _HASH[5]);
                _HASH[6] = __safe_add(g, _HASH[6]);
                _HASH[7] = __safe_add(h, _HASH[7]);
            }
            return _HASH;
        }

        function __str2binb(str) {
            var _bin = Array();
            var _mask = (1 << _chrsz) - 1;
            for (var i = 0; i < str.length * _chrsz; i += _chrsz) {
                _bin[i >> 5] |= (str.charCodeAt(i / _chrsz) & _mask) << (24 - i % 32);
            }
            return _bin;
        }

        function __Utf8Encode(_string) {
            _string = _string.replace(/\r\n/g, "\n");
            var _utftext = "";

            for (var n = 0; n < _string.length; n++) {

                var c = _string.charCodeAt(n);

                if (c < 128) {
                    _utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    _utftext += String.fromCharCode((c >> 6) | 192);
                    _utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    _utftext += String.fromCharCode((c >> 12) | 224);
                    _utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    _utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return _utftext;
        }

        function __binb2hex(__binarray) {
            var __hex_tab = _hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < __binarray.length * 4; i++) {
                str += __hex_tab.charAt((__binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                    __hex_tab.charAt((__binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
            }
            return str;
        }

        s = __Utf8Encode(s);
        return __binb2hex(__core_sha256(__str2binb(s), s.length * _chrsz));
    }

    var _sha256 = {}
    _sha256.__hex = function (s) {
        return __SHA256(s);
    }

    function __SHA1(msg) {

        function __rotate_left(n, s) {
            var t4 = (n << s) | (n >>> (32 - s));
            return t4;
        };

        function __lsb_hex(val) {
            var str = "";
            var i;
            var vh;
            var vl;

            for (i = 0; i <= 6; i += 2) {
                vh = (val >>> (i * 4 + 4)) & 0x0f;
                vl = (val >>> (i * 4)) & 0x0f;
                str += vh.toString(16) + vl.toString(16);
            }
            return str;
        };

        function __cvt_hex(val) {
            var str = "";
            var i;
            var v;

            for (i = 7; i >= 0; i--) {
                v = (val >>> (i * 4)) & 0x0f;
                str += v.toString(16);
            }
            return str;
        };


        function __Utf8Encode(_string) {
            _string = _string.replace(/\r\n/g, "\n");
            var _utftext = "";

            for (var n = 0; n < _string.length; n++) {

                var c = _string.charCodeAt(n);

                if (c < 128) {
                    _utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    _utftext += String.fromCharCode((c >> 6) | 192);
                    _utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    _utftext += String.fromCharCode((c >> 12) | 224);
                    _utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    _utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return _utftext;
        };

        var _blockstart;
        var i, j;
        var W = new Array(80);
        var H0 = 0x67452301;
        var H1 = 0xEFCDAB89;
        var H2 = 0x98BADCFE;
        var H3 = 0x10325476;
        var H4 = 0xC3D2E1F0;
        var A, B, C, D, E;
        var _temp;

        msg = __Utf8Encode(msg);

        var _msg_len = msg.length;

        var _word_array = new Array();
        for (i = 0; i < _msg_len - 3; i += 4) {
            j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |
                msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
            _word_array.push(j);
        }

        switch (_msg_len % 4) {
            case 0:
                i = 0x080000000;
                break;
            case 1:
                i = msg.charCodeAt(_msg_len - 1) << 24 | 0x0800000;
                break;

            case 2:
                i = msg.charCodeAt(_msg_len - 2) << 24 | msg.charCodeAt(_msg_len - 1) << 16 | 0x08000;
                break;

            case 3:
                i = msg.charCodeAt(_msg_len - 3) << 24 | msg.charCodeAt(_msg_len - 2) << 16 | msg.charCodeAt(_msg_len - 1) << 8 | 0x80;
                break;
        }

        _word_array.push(i);

        while ((_word_array.length % 16) != 14) _word_array.push(0);

        _word_array.push(_msg_len >>> 29);
        _word_array.push((_msg_len << 3) & 0x0ffffffff);


        for (_blockstart = 0; _blockstart < _word_array.length; _blockstart += 16) {

            for (i = 0; i < 16; i++) W[i] = _word_array[_blockstart + i];
            for (i = 16; i <= 79; i++) W[i] = __rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

            A = H0;
            B = H1;
            C = H2;
            D = H3;
            E = H4;

            for (i = 0; i <= 19; i++) {
                _temp = (__rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                E = D;
                D = C;
                C = __rotate_left(B, 30);
                B = A;
                A = _temp;
            }

            for (i = 20; i <= 39; i++) {
                _temp = (__rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                E = D;
                D = C;
                C = __rotate_left(B, 30);
                B = A;
                A = _temp;
            }

            for (i = 40; i <= 59; i++) {
                _temp = (__rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                E = D;
                D = C;
                C = __rotate_left(B, 30);
                B = A;
                A = _temp;
            }

            for (i = 60; i <= 79; i++) {
                _temp = (__rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                E = D;
                D = C;
                C = __rotate_left(B, 30);
                B = A;
                A = _temp;
            }

            H0 = (H0 + A) & 0x0ffffffff;
            H1 = (H1 + B) & 0x0ffffffff;
            H2 = (H2 + C) & 0x0ffffffff;
            H3 = (H3 + D) & 0x0ffffffff;
            H4 = (H4 + E) & 0x0ffffffff;

        }

        var _temp = __cvt_hex(H0) + __cvt_hex(H1) + __cvt_hex(H2) + __cvt_hex(H3) + __cvt_hex(H4);

        return _temp.toLowerCase();

    }

    var _sha1 = {}
    _sha1.__hex = function (s) {
        return __SHA1(s);
    }

    var __MD5 = function (_string) {

        function __RotateLeft(_lValue, _iShiftBits) {
            return (_lValue << _iShiftBits) | (_lValue >>> (32 - _iShiftBits));
        }

        function __AddUnsigned(lX, lY) {
            var __lX4, __lY4, __lX8, __lY8, __lResult;
            __lX8 = (lX & 0x80000000);
            __lY8 = (lY & 0x80000000);
            __lX4 = (lX & 0x40000000);
            __lY4 = (lY & 0x40000000);
            __lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (__lX4 & __lY4) {
                return (__lResult ^ 0x80000000 ^ __lX8 ^ __lY8);
            }
            if (__lX4 | __lY4) {
                if (__lResult & 0x40000000) {
                    return (__lResult ^ 0xC0000000 ^ __lX8 ^ __lY8);
                } else {
                    return (__lResult ^ 0x40000000 ^ __lX8 ^ __lY8);
                }
            } else {
                return (__lResult ^ __lX8 ^ __lY8);
            }
        }

        function F(x, y, z) { return (x & y) | ((~x) & z); }
        function G(x, y, z) { return (x & z) | (y & (~z)); }
        function H(x, y, z) { return (x ^ y ^ z); }
        function I(x, y, z) { return (y ^ (x | (~z))); }

        function FF(a, b, c, d, x, s, ac) {
            a = __AddUnsigned(a, __AddUnsigned(__AddUnsigned(F(b, c, d), x), ac));
            return __AddUnsigned(__RotateLeft(a, s), b);
        };

        function GG(a, b, c, d, x, s, ac) {
            a = __AddUnsigned(a, __AddUnsigned(__AddUnsigned(G(b, c, d), x), ac));
            return __AddUnsigned(__RotateLeft(a, s), b);
        };

        function HH(a, b, c, d, x, s, ac) {
            a = __AddUnsigned(a, __AddUnsigned(__AddUnsigned(H(b, c, d), x), ac));
            return __AddUnsigned(__RotateLeft(a, s), b);
        };

        function II(a, b, c, d, x, s, ac) {
            a = __AddUnsigned(a, __AddUnsigned(__AddUnsigned(I(b, c, d), x), ac));
            return __AddUnsigned(__RotateLeft(a, s), b);
        };

        function __ConvertToWordArray(_string) {
            var _lWordCount;
            var _lMessageLength = _string.length;
            var _lNumberOfWords_temp1 = _lMessageLength + 8;
            var _lNumberOfWords_temp2 = (_lNumberOfWords_temp1 - (_lNumberOfWords_temp1 % 64)) / 64;
            var _lNumberOfWords = (_lNumberOfWords_temp2 + 1) * 16;
            var _lWordArray = Array(_lNumberOfWords - 1);
            var _lBytePosition = 0;
            var _lByteCount = 0;
            while (_lByteCount < _lMessageLength) {
                _lWordCount = (_lByteCount - (_lByteCount % 4)) / 4;
                _lBytePosition = (_lByteCount % 4) * 8;
                _lWordArray[_lWordCount] = (_lWordArray[_lWordCount] | (_string.charCodeAt(_lByteCount) << _lBytePosition));
                _lByteCount++;
            }
            _lWordCount = (_lByteCount - (_lByteCount % 4)) / 4;
            _lBytePosition = (_lByteCount % 4) * 8;
            _lWordArray[_lWordCount] = _lWordArray[_lWordCount] | (0x80 << _lBytePosition);
            _lWordArray[_lNumberOfWords - 2] = _lMessageLength << 3;
            _lWordArray[_lNumberOfWords - 1] = _lMessageLength >>> 29;
            return _lWordArray;
        };

        function _WordToHex(_lValue) {
            var _WordToHexValue = "", _WordToHexValue_temp = "", _lByte, _lCount;
            for (_lCount = 0; _lCount <= 3; _lCount++) {
                _lByte = (_lValue >>> (_lCount * 8)) & 255;
                _WordToHexValue_temp = "0" + _lByte.toString(16);
                _WordToHexValue = _WordToHexValue + _WordToHexValue_temp.substr(_WordToHexValue_temp.length - 2, 2);
            }
            return _WordToHexValue;
        };

        function __Utf8Encode(_string) {
            _string = _string.replace(/\r\n/g, "\n");
            var _utftext = "";

            for (var n = 0; n < _string.length; n++) {

                var c = _string.charCodeAt(n);

                if (c < 128) {
                    _utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    _utftext += String.fromCharCode((c >> 6) | 192);
                    _utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    _utftext += String.fromCharCode((c >> 12) | 224);
                    _utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    _utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return _utftext;
        };

        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

        _string = __Utf8Encode(_string);

        x = __ConvertToWordArray(_string);

        a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

        for (k = 0; k < x.length; k += 16) {
            AA = a; BB = b; CC = c; DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = __AddUnsigned(a, AA);
            b = __AddUnsigned(b, BB);
            c = __AddUnsigned(c, CC);
            d = __AddUnsigned(d, DD);
        }

        var _temp = _WordToHex(a) + _WordToHex(b) + _WordToHex(c) + _WordToHex(d);

        return _temp.toLowerCase();
    }

    function __parseBigInt(str, r) {
        return new __BigInteger(str, r);
    }

    function __linebrk(s, n) {
        var ret = "";
        var i = 0;
        while (i + n < s.length) {
            ret += s.substring(i, i + n) + "\n";
            i += n;
        }
        return ret + s.substring(i, s.length);
    }

    function __byte2Hex(b) {
        if (b < 0x10) return "0" + b.toString(16);
        else return b.toString(16);
    }

    function __pkcs1pad2(s, n) {
        if (n < s.length + 11) {
            throw "Message too long for RSA (n=" + n + ", l=" + s.length + ")";
        }
        var ba = new Array();
        var i = s.length - 1;
        while (i >= 0 && n > 0) {
            var c = s.charCodeAt(i--);
            if (c < 128) { // encode using utf-8
                ba[--n] = c;
            }
            else if ((c > 127) && (c < 2048)) {
                ba[--n] = (c & 63) | 128;
                ba[--n] = (c >> 6) | 192;
            }
            else {
                ba[--n] = (c & 63) | 128;
                ba[--n] = ((c >> 6) & 63) | 128;
                ba[--n] = (c >> 12) | 224;
            }
        }
        ba[--n] = 0;
        var rng = new __SecureRandom();
        var x = new Array();
        while (n > 2) { // _random non-zero pad
            x[0] = 0;
            while (x[0] == 0) rng.__nextBytes(x);
            ba[--n] = x[0];
        }
        ba[--n] = 2;
        ba[--n] = 0;
        return new __BigInteger(ba);
    }

    function _RSAKey() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this._coeff = null;
    }

    function __RSASetPublic(N, E) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = __parseBigInt(N, 16);
            this.e = parseInt(E, 16);
        }
    }

    function __RSADoPublic(x) {
        return x._modPowInt(this.e, this.n);
    }

    function __RSAEncrypt(text) {
        var m = __pkcs1pad2(text, (this.n.__bitLength() + 7) >> 3);
        if (m == null) return null;
        var c = this.__doPublic(m);
        if (c == null) return null;
        var h = c.toString(16);
        if ((h.length & 1) == 0) return h;
        else return "0" + h;
    }

    _RSAKey.prototype.__doPublic = __RSADoPublic;

    _RSAKey.prototype.__setPublic = __RSASetPublic;
    _RSAKey.prototype.encrypt = __RSAEncrypt;

    function __pkcs1unpad2(d, n) {
        var b = d.toByteArray();
        var i = 0;
        while (i < b.length && b[i] == 0)++i;
        if (b.length - i != n - 1 || b[i] != 2) return null;
        ++i;
        while (b[i] != 0)
            if (++i >= b.length) return null;
        var ret = "";
        while (++i < b.length) {
            var c = b[i] & 255;
            if (c < 128) { // utf-8 decode
                ret += String.fromCharCode(c);
            }
            else if ((c > 191) && (c < 224)) {
                ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
                ++i;
            }
            else {
                ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
                i += 2;
            }
        }
        return ret;
    }

    function __RSASetPrivate(N, E, D) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = __parseBigInt(N, 16);
            this.e = parseInt(E, 16);
            this.d = __parseBigInt(D, 16);
        }
        else alert("Invalid RSA private key");
    }

    function __RSASetPrivateEx(N, E, D, P, Q, DP, DQ, C) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = __parseBigInt(N, 16);
            this.e = parseInt(E, 16);
            this.d = __parseBigInt(D, 16);
            this.p = __parseBigInt(P, 16);
            this.q = __parseBigInt(Q, 16);
            this.dmp1 = __parseBigInt(DP, 16);
            this.dmq1 = __parseBigInt(DQ, 16);
            this._coeff = __parseBigInt(C, 16);
        }
        else alert("Invalid RSA private key");
    }

    function __RSAGenerate(B, E) {
        var rng = new __SeededRandom();
        var qs = B >> 1;
        this.e = parseInt(E, 16);
        var ee = new __BigInteger(E, 16);
        for (; ;) {
            for (; ;) {
                this.p = new __BigInteger(B - qs, 1, rng);
                if (this.p.__subtract(__BigInteger.__ONE).gcd(ee).__compareTo(__BigInteger.__ONE) == 0 && this.p.__isProbablePrime(10)) break;
            }
            for (; ;) {
                this.q = new __BigInteger(qs, 1, rng);
                if (this.q.__subtract(__BigInteger.__ONE).gcd(ee).__compareTo(__BigInteger.__ONE) == 0 && this.q.__isProbablePrime(10)) break;
            }
            if (this.p.__compareTo(this.q) <= 0) {
                var t = this.p;
                this.p = this.q;
                this.q = t;
            }
            var p1 = this.p.__subtract(__BigInteger.__ONE);
            var q1 = this.q.__subtract(__BigInteger.__ONE);
            var phi = p1.__multiply(q1);
            if (phi.gcd(ee).__compareTo(__BigInteger.__ONE) == 0) {
                this.n = this.p.__multiply(this.q);
                this.d = ee.modInverse(phi);
                this.dmp1 = this.d.__mod(p1);
                this.dmq1 = this.d.__mod(q1);
                this._coeff = this.q.modInverse(this.p);
                break;
            }
        }
    }

    function __RSADoPrivate(x) {
        if (this.p == null || this.q == null) return x.__modPow(this.d, this.n);
        var xp = x.__mod(this.p).__modPow(this.dmp1, this.p);
        var xq = x.__mod(this.q).__modPow(this.dmq1, this.q);
        while (xp.__compareTo(xq) < 0)
            xp = xp.__add(this.p);
        return xp.__subtract(xq).__multiply(this._coeff).__mod(this.p).__multiply(this.q).__add(xq);
    }

    function __RSADecrypt(ctext) {
        var c = __parseBigInt(ctext, 16);
        var m = this.__doPrivate(c);
        if (m == null) return null;
        return __pkcs1unpad2(m, (this.n.__bitLength() + 7) >> 3);
    }

    _RSAKey.prototype.__doPrivate = __RSADoPrivate;

    _RSAKey.prototype.__setPrivate = __RSASetPrivate;
    _RSAKey.prototype.__setPrivateEx = __RSASetPrivateEx;
    _RSAKey.prototype.__generate = __RSAGenerate;
    _RSAKey.prototype.__decrypt = __RSADecrypt;

    var _RSASIGN_DIHEAD = [];
    _RSASIGN_DIHEAD['_sha1'] = "3021300906052b0e03021a05000414";
    _RSASIGN_DIHEAD['_sha256'] = "3031300d060960864801650304020105000420";
    var _RSASIGN_HASHHEXFUNC = [];
    _RSASIGN_HASHHEXFUNC['_sha1'] = _sha1.__hex;
    _RSASIGN_HASHHEXFUNC['_sha256'] = _sha256.__hex;

    function _rsasign_getHexPaddedDigestInfoForString(s, keySize, hashAlg) {
        var _pmStrLen = keySize / 4;
        var _hashFunc = _RSASIGN_HASHHEXFUNC[hashAlg];
        var _sHashHex = _hashFunc(s);

        var _sHead = "0001";
        var _sTail = "00" + _RSASIGN_DIHEAD[hashAlg] + _sHashHex;
        var _sMid = "";
        var _fLen = _pmStrLen - _sHead.length - _sTail.length;
        for (var i = 0; i < _fLen; i += 2) {
            _sMid += "ff";
        }
        sPaddedMessageHex = _sHead + _sMid + _sTail;
        return sPaddedMessageHex;
    }

    function _rsasign_signString(s, hashAlg) {
        var _hPM = _rsasign_getHexPaddedDigestInfoForString(s, this.n.__bitLength(), hashAlg);
        var _biPaddedMessage = __parseBigInt(_hPM, 16);
        var _biSign = this.__doPrivate(_biPaddedMessage);
        var _hexSign = _biSign.toString(16);
        return _hexSign;
    }

    function _rsasign_signStringWithSHA1(s) {
        var _hPM = _rsasign_getHexPaddedDigestInfoForString(s, this.n.__bitLength(), '_sha1');
        var _biPaddedMessage = __parseBigInt(_hPM, 16);
        var _biSign = this.__doPrivate(_biPaddedMessage);
        var _hexSign = _biSign.toString(16);
        return _hexSign;
    }

    function _rsasign_signStringWithSHA256(s) {
        var _hPM = _rsasign_getHexPaddedDigestInfoForString(s, this.n.__bitLength(), '_sha256');
        var _biPaddedMessage = __parseBigInt(_hPM, 16);
        var _biSign = this.__doPrivate(_biPaddedMessage);
        var _hexSign = _biSign.toString(16);
        return _hexSign;
    }

    function _rsasign_getDecryptSignatureBI(__biSig, hN, hE) {
        var rsa = new _RSAKey();
        rsa.__setPublic(hN, hE);
        var _biDecryptedSig = rsa.__doPublic(__biSig);
        return _biDecryptedSig;
    }

    function _rsasign_getHexDigestInfoFromSig(__biSig, hN, hE) {
        var _biDecryptedSig = _rsasign_getDecryptSignatureBI(__biSig, hN, hE);
        var _hDigestInfo = _biDecryptedSig.toString(16).replace(/^1f+00/, '');
        return _hDigestInfo;
    }

    function _rsasign_getAlgNameAndHashFromHexDisgestInfo(_hDigestInfo) {
        for (var _algName in _RSASIGN_DIHEAD) {
            var _head = _RSASIGN_DIHEAD[_algName];
            var _len = _head.length;
            if (_hDigestInfo.substring(0, _len) == _head) {
                var a = [_algName, _hDigestInfo.substring(_len)];
                return a;
            }
        }
        return [];
    }

    function _rsasign_verifySignatureWithArgs(_sMsg, __biSig, hN, hE) {
        var _hDigestInfo = _rsasign_getHexDigestInfoFromSig(__biSig, hN, hE);
        var _digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(_hDigestInfo);
        if (_digestInfoAry.length == 0) return false;
        var _algName = _digestInfoAry[0];
        var _diHashValue = _digestInfoAry[1];
        var ff = _RSASIGN_HASHHEXFUNC[_algName];
        var _msgHashValue = ff(_sMsg);
        return (_diHashValue == _msgHashValue);
    }

    function _rsasign_verifyHexSignatureForMessage(__hSig, _sMsg) {
        var __biSig = __parseBigInt(__hSig, 16);
        var _result = _rsasign_verifySignatureWithArgs(_sMsg, __biSig, this.n.toString(16), this.e.toString(16));
        return _result;
    }

    function _rsasign_verifyString(_sMsg, __hSig) {
        __hSig = __hSig.replace(/[ \n]+/g, "");
        var __biSig = __parseBigInt(__hSig, 16);
        var _biDecryptedSig = this.__doPublic(__biSig);
        var _hDigestInfo = _biDecryptedSig.toString(16).replace(/^1f+00/, '');
        var _digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(_hDigestInfo);

        if (_digestInfoAry.length == 0) return false;
        var _algName = _digestInfoAry[0];
        var _diHashValue = _digestInfoAry[1];
        var ff = _RSASIGN_HASHHEXFUNC[_algName];
        var _msgHashValue = ff(_sMsg);
        return (_diHashValue == _msgHashValue);
    }

    _RSAKey.prototype.__signString = _rsasign_signString;
    _RSAKey.prototype.__signStringWithSHA1 = _rsasign_signStringWithSHA1;
    _RSAKey.prototype.__signStringWithSHA256 = _rsasign_signStringWithSHA256;

    _RSAKey.prototype.__verifyString = _rsasign_verifyString;
    _RSAKey.prototype.__verifyHexSignatureForMessage = _rsasign_verifyHexSignatureForMessage;

    var __CryptoJS = __CryptoJS || function (u, p) {
        var d = {}, l = d._lib = {}, s = function () { }, t = l._Base = { extend: function (a) { s.prototype = this; var c = new s; a && c.mixIn(a); c.hasOwnProperty("init") || (c.init = function () { c.$super.init.apply(this, arguments) }); c.init.prototype = c; c.$super = this; return c }, create: function () { var a = this.extend(); a.init.apply(a, arguments); return a }, init: function () { }, mixIn: function (a) { for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]); a.hasOwnProperty("toString") && (this.toString = a.toString) }, __clone: function () { return this.init.prototype.extend(this) } },
            r = l.WordArray = t.extend({
                init: function (a, c) { a = this.words = a || []; this.sigBytes = c != p ? c : 4 * a.length }, toString: function (a) { return (a || v).stringify(this) }, concat: function (a) { var c = this.words, e = a.words, j = this.sigBytes; a = a.sigBytes; this.__clamp(); if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e); this.sigBytes += a; return this }, __clamp: function () {
                    var a = this.words, c = this.sigBytes; a[c >>> 2] &= 4294967295 <<
                        32 - 8 * (c % 4); a.length = u.ceil(c / 4)
                }, __clone: function () { var a = t.__clone.call(this); a.words = this.words.slice(0); return a }, _random: function (a) { for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u._random() | 0); return new r.init(c, a) }
            }), w = d.enc = {}, v = w.Hex = {
                stringify: function (a) { var c = a.words; a = a.sigBytes; for (var e = [], j = 0; j < a; j++) { var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255; e.push((k >>> 4).toString(16)); e.push((k & 15).toString(16)) } return e.join("") }, parse: function (a) {
                    for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j,
                        2), 16) << 24 - 4 * (j % 8); return new r.init(e, c / 2)
                }
            }, b = w.Latin1 = { stringify: function (a) { var c = a.words; a = a.sigBytes; for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255)); return e.join("") }, parse: function (a) { for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4); return new r.init(e, c) } }, x = w.Utf8 = { stringify: function (a) { try { return decodeURIComponent(escape(b.stringify(a))) } catch (c) { throw Error("Malformed UTF-8 data"); } }, parse: function (a) { return b.parse(unescape(encodeURIComponent(a))) } },
            q = l.__BufferedBlockAlgorithm = t.extend({
                reset: function () { this._data = new r.init; this._nDataBytes = 0 }, _append: function (a) { "string" == typeof a && (a = x.parse(a)); this._data.concat(a); this._nDataBytes += a.sigBytes }, _process: function (a) { var c = this._data, e = c.words, j = c.sigBytes, k = this._blockSize, b = j / (4 * k), b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0); a = b * k; j = u.min(4 * a, j); if (a) { for (var q = 0; q < a; q += k) this._doProcessBlock(e, q); q = e.splice(0, a); c.sigBytes -= j } return new r.init(q, j) }, __clone: function () {
                    var a = t.__clone.call(this);
                    a._data = this._data.__clone(); return a
                }, _minBufferSize: 0
            }); l.Hasher = q.extend({
                cfg: t.extend(), init: function (a) { this.cfg = this.cfg.extend(a); this.reset() }, reset: function () { q.reset.call(this); this._doReset() }, update: function (a) { this._append(a); this._process(); return this }, finalize: function (a) { a && this._append(a); return this._doFinalize() }, _blockSize: 16, _createHelper: function (a) { return function (b, e) { return (new a.init(e)).finalize(b) } }, _createHmacHelper: function (a) {
                    return function (b, e) {
                        return (new n.HMAC.init(a,
                            e)).finalize(b)
                    }
                }
            }); var n = d.algo = {}; return d
    }(Math);
    (function () {
        var u = __CryptoJS, p = u._lib.WordArray; u.enc._Base64 = {
            stringify: function (d) { var l = d.words, p = d.sigBytes, t = this._map; d.__clamp(); d = []; for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63)); if (l = t.charAt(64)) for (; d.length % 4;) d.push(l); return d.join("") }, parse: function (d) {
                var l = d.length, s = this._map, t = s.charAt(64); t && (t = d.indexOf(t), -1 != t && (l = t)); for (var t = [], r = 0, w = 0; w <
                    l; w++) if (w % 4) { var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4); t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4); r++ } return p.create(t, r)
            }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    })();
    (function (u) {
        function p(b, n, a, c, e, j, k) { b = b + (n & a | ~n & c) + e + k; return (b << j | b >>> 32 - j) + n } function d(b, n, a, c, e, j, k) { b = b + (n & c | a & ~c) + e + k; return (b << j | b >>> 32 - j) + n } function l(b, n, a, c, e, j, k) { b = b + (n ^ a ^ c) + e + k; return (b << j | b >>> 32 - j) + n } function s(b, n, a, c, e, j, k) { b = b + (a ^ (n | ~c)) + e + k; return (b << j | b >>> 32 - j) + n } for (var t = __CryptoJS, r = t._lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0; r = r.__MD5 = v.extend({
            _doReset: function () { this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]) },
            _doProcessBlock: function (q, n) {
                for (var a = 0; 16 > a; a++) { var c = n + a, e = q[c]; q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360 } var a = this._hash.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5], t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12], D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3], f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]), m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]), g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]),
                    f = p(f, m, g, h, v, 7, b[8]), h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]), f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]), m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]), g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]), h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]), f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]), m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f,
                        m, g, j, 9, b[29]), g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]), h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]), f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]), m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]), g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]), h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]), f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m,
                            E, 15, b[50]), m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]), g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]), h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]), f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]), m = s(m, g, h, f, A, 21, b[63]); a[0] = a[0] + f | 0; a[1] = a[1] + m | 0; a[2] = a[2] + g | 0; a[3] = a[3] + h | 0
            }, _doFinalize: function () {
                var b = this._data, n = b.words, a = 8 * this._nDataBytes, c = 8 * b.sigBytes; n[c >>> 5] |= 128 << 24 - c % 32; var e = u.floor(a /
                    4294967296); n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360; n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360; b.sigBytes = 4 * (n.length + 1); this._process(); b = this._hash; n = b.words; for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360; return b
            }, __clone: function () { var b = v.__clone.call(this); b._hash = this._hash.__clone(); return b }
        }); t.__MD5 = v._createHelper(r); t.__HmacMD5 = v._createHmacHelper(r)
    })(Math);
    (function () {
        var u = __CryptoJS, p = u._lib, d = p._Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: p.__MD5, iterations: 1 }), init: function (d) { this.cfg = this.cfg.extend(d) }, compute: function (d, r) { for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) { n && s.update(n); var n = s.update(d).finalize(r); s.reset(); for (var a = 1; a < p; a++) n = s.finalize(n), s.reset(); b.concat(n) } b.sigBytes = 4 * q; return b } }); u.EvpKDF = function (d, l, p) {
            return s.create(p).compute(d,
                l)
        }
    })();
    __CryptoJS._lib.__Cipher || function (u) {
        var p = __CryptoJS, d = p._lib, l = d._Base, s = d.WordArray, t = d.__BufferedBlockAlgorithm, r = p.enc._Base64, w = p.algo.EvpKDF, v = d.__Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) { return this.create(this._ENC_XFORM_MODE, e, a) }, createDecryptor: function (e, a) { return this.create(this._DEC_XFORM_MODE, e, a) }, init: function (e, a, b) { this.cfg = this.cfg.extend(b); this._xformMode = e; this._key = a; this.reset() }, reset: function () { t.reset.call(this); this._doReset() }, process: function (e) { this._append(e); return this._process() },
            finalize: function (e) { e && this._append(e); return this._doFinalize() }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (e) { return { encrypt: function (b, k, d) { return ("string" == typeof k ? c : a).encrypt(e, b, k, d) }, __decrypt: function (b, k, d) { return ("string" == typeof k ? c : a).__decrypt(e, b, k, d) } } }
        }); d.StreamCipher = v.extend({ _doFinalize: function () { return this._process(!0) }, _blockSize: 1 }); var b = p.mode = {}, x = function (e, a, b) {
            var c = this._iv; c ? this._iv = u : c = this._prevBlock; for (var d = 0; d < b; d++) e[a + d] ^=
                c[d]
        }, q = (d._BlockCipherMode = l.extend({ createEncryptor: function (e, a) { return this.Encryptor.create(e, a) }, createDecryptor: function (e, a) { return this.Decryptor.create(e, a) }, init: function (e, a) { this._cipher = e; this._iv = a } })).extend(); q.Encryptor = q.extend({ __processBlock: function (e, a) { var b = this._cipher, c = b._blockSize; x.call(this, e, a, c); b.encryptBlock(e, a); this._prevBlock = e.slice(a, a + c) } }); q.Decryptor = q.extend({
            __processBlock: function (e, a) {
                var b = this._cipher, c = b._blockSize, d = e.slice(a, a + c); b.decryptBlock(e, a); x.call(this,
                    e, a, c); this._prevBlock = d
            }
        }); b = b._CBC = q; q = (p.pad = {})._Pkcs7 = { pad: function (a, b) { for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d); c = s.create(l, c); a.concat(c) }, unpad: function (a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 } }; d._BlockCipher = v.extend({
            cfg: v.cfg.extend({ mode: b, padding: q }), reset: function () {
                v.reset.call(this); var a = this.cfg, b = a.iv, a = a.mode; if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor; else c = a.createDecryptor, this._minBufferSize = 1; this._mode = c.call(a,
                    this, b && b.words)
            }, _doProcessBlock: function (a, b) { this._mode.__processBlock(a, b) }, _doFinalize: function () { var a = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { a.pad(this._data, this._blockSize); var b = this._process(!0) } else b = this._process(!0), a.unpad(b); return b }, _blockSize: 4
        }); var n = d.CipherParams = l.extend({ init: function (a) { this.mixIn(a) }, toString: function (a) { return (a || this.formatter).stringify(this) } }), b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a._ciphertext; a = a.salt; return (a ? s.create([1398893684,
                    1701076831]).concat(a).concat(b) : b).toString(r)
            }, parse: function (a) { a = r.parse(a); var b = a.words; if (1398893684 == b[0] && 1701076831 == b[1]) { var c = s.create(b.slice(2, 4)); b.splice(0, 4); a.sigBytes -= 16 } return n.create({ _ciphertext: a, salt: c }) }
        }, a = d.SerializableCipher = l.extend({
            cfg: l.extend({ format: b }), encrypt: function (a, b, c, d) { d = this.cfg.extend(d); var l = a.createEncryptor(c, d); b = l.finalize(b); l = l.cfg; return n.create({ _ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, _blockSize: a._blockSize, formatter: d.format }) },
            __decrypt: function (a, b, c, d) { d = this.cfg.extend(d); b = this._parse(b, d.format); return a.createDecryptor(c, d).finalize(b._ciphertext) }, _parse: function (a, b) { return "string" == typeof a ? b.parse(a, this) : a }
        }), p = (p.kdf = {}).OpenSSL = { execute: function (a, b, c, d) { d || (d = s._random(8)); a = w.create({ keySize: b + c }).compute(a, d); c = s.create(a.words.slice(b), 4 * c); a.sigBytes = 4 * b; return n.create({ key: a, iv: c, salt: d }) } }, c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({ kdf: p }), encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l); d = l.kdf.execute(d,
                    b.keySize, b.ivSize); l.iv = d.iv; b = a.encrypt.call(this, b, c, d.key, l); b.mixIn(d); return b
            }, __decrypt: function (b, c, d, l) { l = this.cfg.extend(l); c = this._parse(c, l.format); d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt); l.iv = d.iv; return a.__decrypt.call(this, b, c, d.key, l) }
        })
    }();
    (function () {
        for (var u = __CryptoJS, p = u._lib._BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283; for (var e = 0, j = 0, c = 0; 256 > c; c++) { var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99; l[e] = k; s[k] = e; var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k; t[e] = y << 24 | y >>> 8; r[e] = y << 16 | y >>> 16; w[e] = y << 8 | y >>> 24; v[e] = y; y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e; b[k] = y << 24 | y >>> 8; x[k] = y << 16 | y >>> 16; q[k] = y << 8 | y >>> 24; n[k] = y; e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1 } var H = [0, 1, 2, 4, 8,
            16, 32, 64, 128, 27, 54], d = d.__AES = p.extend({
                _doReset: function () {
                    for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else { var k = e[j - 1]; j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24); e[j] = e[j - d] ^ k } c = this._invKeySchedule = []; for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>>
                        8 & 255]] ^ n[l[k & 255]]
                }, encryptBlock: function (a, b) { this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l) }, decryptBlock: function (a, c) { var d = a[c + 1]; a[c + 1] = a[c + 3]; a[c + 3] = d; this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s); d = a[c + 1]; a[c + 1] = a[c + 3]; a[c + 3] = d }, _doCryptBlock: function (a, b, c, d, e, j, l, f) {
                    for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t =
                        d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t; q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++]; s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++]; t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++]; n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++]; a[b] = q; a[b + 1] = s; a[b + 2] = t; a[b + 3] = n
                }, keySize: 8
            }); u.__AES = p._createHelper(d)
    })();

    var __rsaKey = new __RSAKeyPair("010001", "", "b75aa3432e69d98099ccbd67bcdf4ce83db1b2c2b339889945ff2d25530143786668ccc06187a1e0222ec5bedb003711b86b2ca1189b03f6751a7df98e2ecd15");
}

//Utility
{
    //基础方法
    {
        Date.prototype.format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S": this.getMilliseconds()
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (o.hasOwnProperty(k))
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

        String.prototype.contains = function (text) {
            if (text === '') return true;
            else if (text == null) return false;
            else return this.indexOf(text) !== -1;
        }

        String.prototype.count = function (text) {
            if (this.contains(text))
                return this.split(text).length - 1;
            else
                return 0;
        }

        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
        }

        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        }

        String.prototype.leftTrim = function () {
            return this.replace(/^\s+/, '');
        }

        String.prototype.rightTrim = function () {
            return this.replace(/\s+$/, '');
        }

        String.prototype.clear = function () {
            return this.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
        }

        String.prototype.startsWith = function (start) {
            if (start === '') return true;
            else if (start == null || start.length > this.length) return false;
            else return this.substring(0, start.length) === start;
        }

        String.prototype.endsWith = function (end) {
            if (end === '') return true;
            else if (end == null || end.length > this.length) return false;
            else return this.indexOf(end, this.length - end.length) !== -1;
        }

        function __Queue() {
            var a = [], b = 0;
            this.__getLength = function () { return a.length - b };
            this.__isEmpty = function () { return 0 === a.length };
            this.__enqueue = function (b) { a.push(b) };
            this.__dequeue = function () {
                if (0 !== a.length) {
                    var c = a[b]; 2 * ++b >= a.length && (a = a.slice(b), b = 0);
                    return c;
                }
                return null;
            };
            this.__clear = function () {
                a.length = 0; b = 0;
            };
            this.__peek = function () { return 0 < a.length ? a[b] : void 0 }; return this;
        };
    }

    var __Language = {
        "zh-CN": {
            "Upload_Data_Failed": "上传数据失败。",
            "Upload_Log_Failed": "上传日志失败。",
            "Upload_Status_Failed": "上传状态失败。",
            "Start_Build_Crawler": "开始构建爬虫",
            "Parameter_Must_Be": "参数必须是",
            "Unsupport_Json_Selector": "不支持json选择器。",
            "Only_One_Attribute": "仅支持查询一个属性。",
            "Name_Not_Null": "名称不能为空。",
            "Speed_Uncorrect": "频率不应小于0.5。",
            "Sleep_Time_Uncorrect": "请求间隔时间必须大于1000毫秒。",
            "Pipeline_Uncorrect": "请添加正确的数据管道。",
            "Scheduler_Uncorrect": "请添加正确的调度器。",
            "Downloader_Uncorrect": "请添加正确的下载器。",
            "Processor_Uncorrect": "请添加正确的解析器。",
            "Processor_Is_Null": "解析器不能为空。",
            "Pipeline_Is_Necessary": "数据管道是必须的。",
            "No_Start_Urls": "没有起始链接。",
            "Count_Of_Start_Urls": "起始链接数: ",
            "Init_Failed": "初始化爬虫失败。",
            "Start_Crawler": '启动爬虫...',
            "Task": "任务",
            "Exited": "退出成功",
            "Success": "成功",
            "Failed": "失败",
            "Stoped": "停止成功",
            "Cost_Time": "耗时",
            "Finished": "结束",
            "Second": "秒",
            "Crawler": "采集",
            "Page_Extract_Null": "页面解析结果为空。",
            "Download": "下载",
            "Page_Extract_Failed": "页面解析失败",
            "Check_Extract_Selector": "请检查您的抽取配置。",
            "Message": "信息",
            "Start_Url_Is_Necessary": "至少需要一个起始链接。",
            "Start_Url": "起始链接",
            "Invalid_Url": "不是合法的链接。",
            "Entity_Is_Necessary": "至少需要一个数据对象。",
            "Entity_Name_Null": "数据对象名称不能为空。",
            "Entity_Name_Repeat": "数据对象名称不能重复。",
            "Invalid": "不合法的",
            "Pipeline": "数据管道",
            "Downloader": "下载器",
            "Crawler_Running_Exit": "任务正在进行中，确认要终止吗？",
            "Information": "提示",
            "WebSocket_Connection_Failed": "无法连接服务器,请稍候再试！",
            "Auth_Failed": "用户认证失败！",
            "Server_Force_Exit": "认证失败或服务器强制中断了连接！",
            "Column_Data_Empty": "列 {0} 抓到的数据全部为空,建议尝试 js-engine 下载器。",
            "Entity_Data_Empty": "页面解析为空,建议尝试 js-engine 下载器。",
            "Action_Repeat_Invalid": "操作次数无效。",
            "Loading_Time_Invalid": "加载时间无效。",
            "HeartBeatsTimeout": "关联任务已终止。",
            "PipelineData_Repeat": "检测到重复数据。",
            "PageCloseUnexpected": "下载页面被意外关闭。",
            "TimesOnTestMode": "测试模式下最多抓取5页数据。",
            "PageRuleNotValid":"分页规则无效。"
        },
        "en-US": {
            "Upload_Data_Failed": "Upload data failed.",
            "Upload_Log_Failed": "Upload log failed.",
            "Upload_Status_Failed": "Upload status failed.",
            "Start_Build_Crawler": "Start build crawler",
            "Parameter_Must_Be": "Parameter must be",
            "Unsupport_Json_Selector": "Unsupport json selector yet.",
            "Only_One_Attribute": "There should be only one attribute.",
            "Name_Not_Null": "Name can't be empty.",
            "Speed_Uncorrect": "Frequency should be greater than or equal to 0.5",
            "Sleep_Time_Uncorrect": "Sleep time should be large than 1000ms.",
            "Spider_Is_Running": "Spider is already running!",
            "Pipeline_Uncorrect": "Please add correct pipeline.",
            "Scheduler_Uncorrect": "Please add correct scheduler.",
            "Downloader_Uncorrect": "Please add correct downloader.",
            "Processor_Uncorrect": "Please add correct processor.",
            "Processor_Is_Null": "Processor should not be null.",
            "Pipeline_Is_Necessary": "Pipeline is necessary.",
            "No_Start_Urls": "No start urls.",
            "Count_Of_Start_Urls": "Count of start urls: ",
            "Init_Failed": "Init crawler failed.",
            "Start_Crawler": 'Start crawler...',
            "Task": "Task",
            "Exited": "Exited",
            "Success": "Success",
            "Failed": "Failed",
            "Stoped": "Stoped",
            "Cost_Time": "Cost time",
            "Finished": "Finished",
            "Second": "Second",
            "Crawler": "Crawler",
            "Page_Extract_Null": "Page extract 0 result.",
            "Download": "Download",
            "Page_Extract_Failed": "Page extract failed",
            "Check_Extract_Selector": "Please check your extract selector.",
            "Message": "Message",
            "Start_Url_Is_Necessary": "Need at least one start url.",
            "Start_Url": "Start url",
            "Invalid_Url": "is invalid url.",
            "Entity_Is_Necessary": "data object is necessary.",
            "Entity_Name_Null": "Require data object name.",
            "Entity_Name_Repeat": "Repeat data object name.",
            "Invalid": "Invalid",
            "Pipeline": "Pipeline",
            "Downloader": "Downloader",
            "Crawler_Running_Exit": "Crawler is running, are you sure to terminate?",
            "Information": "Information",
            "WebSocket_Connection_Failed": "Can not connect to server, please try later!",
            "Auth_Failed": "Authentication failed!",
            "Server_Force_Exit": "Auth failed or server forced interrupt connection!",
            "Column_Data_Empty": "Data of {0} is empty,please try js-engine downloader.",
            "Entity_Data_Empty": "Page extract 0 result, please try js-engine downloader.",
            "Action_Repeat_Invalid": "Action repeat invalid.",
            "Loading_Time_Invalid": "Loading time invalid.",
            "HeartBeatsTimeout": "Related task is not working currently.",
            "PipelineData_Repeat": "Repeat data detected.",
            "PageCloseUnexpected": "Tab page was closed unexpectedly.",
            "TimesOnTestMode": "Only display not more than 5 pages of data on test mode.",
            "PageRuleNotValid": "Paging rule invalid."
        }
    };

    function __resource(__key) {
        return __Language[__Region][__key];
    }

    function __attributeRegex() { return new RegExp("@[\\w\\s-]+$", "gi"); };
    function __textRegex() { return new RegExp("text()", "gi"); }
    function __UrlRegex() { return new RegExp("((http|ftp|https):\/\/)(([a-zA-Z0-9\\._-]+\\.?[a-zA-Z]{0,6})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\\&%_\\.\/-~-,\\*#]*)?(\\?[a-zA-Z0-9\\&%_\\.\/-~-\\*,#]*)?", "gi"); };
    function __UrlRegexFull() { return new RegExp("^((http|ftp|https):\\/\\/)(([a-zA-Z0-9\\._-]+\\.?[a-zA-Z]{0,6})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,4})*(\\/[a-zA-Z0-9\\&%_\\.\/-~-,\\*#]*)?(\\?[a-zA-Z0-9\\&%_\\.\/-~-\\*,#]*)?$", "gi"); };

    function __getLogger() {
        var that = this;
        that._$loggers = [];

        that._$disabled = false;
        that.__setDisable = function (__disable) {
            that._$disabled = __disable;
        }
        that.__log = function (__funcName, __log) {
            var p = new promise.Promise();
            if (!that._$disabled) {
                var __func = [];
                for (var i = 0; i < that._$loggers.length; i++) {
                    __func.push(that._$loggers[i][__funcName](__log));
                }
                promise.join(__func).then(function () {
                    p.done();
                });
            }
            else p.done();
            return p;
        }

        that.__append = function (a) {
            that._$loggers.push(a);
        };

        that.__info = function (a) {
            return that.__log("__info", a);
        };
        that.__warn = function (a) {
            return that.__log("__warn", a);
        };
        that.__error = function (a) {
            return that.__log("__error", a);
        };
    }

    function __Selector(_so) {
        var _expr = _so ? _so.expression : "";
        if (!_expr || !_expr.trim().length) {
            return null;
        }
        var _id = _so.type + _expr;
        if (!__Selector._cached[_id]) {
            var _sl = null;
            switch (_so.type) {
                case 'xpath': {
                    _sl = new __XpathSelector(_expr);
                    break;
                }
                case 'json': {
                    throw __resource('Unsupport_Json_Selector');
                }
                case 'css': {
                    _sl = new __CssSelector(_expr);
                    break;
                }
                case 'regex': {
                    _sl = new __RegexSelector(_expr);
                    break;
                }
                case 'environment':
                    _sl = "EnvironmentSelector";
                    break;
            }
            __Selector._cached[_id] = _sl;
        }
        return __Selector._cached[_id];
    }
    __Selector._cached = {};


    function __absolutizeURI(_base, _href) {
        var __removeDotSegments = function (_input) {
            var _output = [];
            _input.replace(/^(\.\.?(\/|$))+/, '')
                .replace(/\/(\.(\/|$))+/g, '/')
                .replace(/\/\.\.$/, '/../')
                .replace(/\/?[^\/]*/g, function (p) {
                    if (p === '/..') {
                        _output.pop();
                    } else {
                        _output.push(p);
                    }
                });
            return _output.join('').replace(/^\//, _input.charAt(0) === '/' ? '/' : '');
        }
        _href = __parseURI(_href || '');
        _base = __parseURI(_base || '');

        return !_href || !_base ? null : (_href._protocol || _base._protocol) +
            (_href._protocol || _href._authority ? _href._authority : _base._authority) +
            __removeDotSegments(_href._protocol || _href._authority || _href._pathname.charAt(0) === '/' ? _href._pathname : (_href._pathname ? ((_base._authority && !_base._pathname ? '/' : '') + _base._pathname.slice(0, _base._pathname.lastIndexOf('/') + 1) + _href._pathname) : _base._pathname)) +
            (_href._protocol || _href._authority || _href._pathname ? _href._search : (_href._search || _base._search)) +
            _href._hash;
    }

    function __parseURI(__url) {
        var m = String(__url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
        return (m ? {
            _href: m[0] || '',
            _protocol: m[1] || '',
            _authority: m[2] || '',
            _host: m[3] || '',
            _hostname: m[4] || '',
            _port: m[5] || '',
            _pathname: m[6] || '',
            _search: m[7] || '',
            _hash: m[8] || ''
        } : null);
    }

    function __SpiderTaskMonitor() {
        var that = this;

        that._connector = SpiderConnector.Connector;
        that._connector.registerEvent({
            testCrawler: function (c) {
                that.runSpider(c.crawler, {
                    region: c.options.region,
                    isTest: true,
                }, true);
            },
            runCrawler: function (c) {
                that.runSpider(c.crawler, c.options, true);
            }
        });
        that.runSpider = function (_ctx, _options, _isTaskRunning) {
            try {
                _options.events = _options.events || {};
                _options.events["OnClose"] = function () {
                    if (that._layerIndex > 0) {
                        layer.title("task complete", that._layerIndex);
                    }
                }
                var _spider = new __ModelSpider(_ctx, _options);
                that.__beginSpider(_spider, _options, _isTaskRunning);
            } catch (e) {
                layer.alert(e.message || e || "unkown exception to execute crawler!", { zIndex: 2147483699, icon: 2 });
            }
        };
        that.verifySpider = function (_ctx, _options) {
            try {
                var _spider = new __ModelSpider(_ctx, _options);
                return true;
            } catch (e) {
                layer.alert(e.message || e || "unkown exception to execute crawler!", { zIndex: 2147483699, icon: 2 });
                return false;
            }
        };

        that.__invoke = function (_cmd, _dt) {
            that._connector.invoke(_cmd, _dt);
        };

        that.__beginSpider = function (_spider, _options, _isTaskRunning) {
            _isTaskRunning = _isTaskRunning === true;
            function __confirmExit() {
                if (_spider.__getStatus() == SpiderStatus.Running) {
                    layer.confirm(__resource("Crawler_Running_Exit"), {
                        icon: 0,
                        title: __resource("Information"),
                        zIndex: 2147483699
                    }, function (_index) {
                        layer.close(that._layerIndex);
                        layer.close(_index);
                        if (!_options.isTest && _isTaskRunning) {
                            SpiderConnector.Connector.isRunning = false;
                        }
                        _spider.__exit();
                    }, function (_index) {
                        layer.close(_index);
                    });
                }
                else {
                    layer.close(that._layerIndex);
                    if (!_options.isTest && _isTaskRunning) {
                        SpiderConnector.Connector.isRunning = false;
                    }
                    _spider.__exit();
                }
            }

            var _windowHeight = __getWindowHeight();
            var _containerHeight = _windowHeight * 0.7;
            var _top = (_windowHeight - _containerHeight) / 2;
            if (_top <= 0 || _top >= window.screen.availHeight) {
                _top = 100;
            }
            that._layerIndex = layer.open({
                //type: 1,
                formType: 0,
                zIndex: 2147483690,
                area: ['800px', _containerHeight + 'px'],
                title: 'task initializing...',
                btn: ['OK'],
                offset: _top + "px",
                content: '<ul id="result"></ul><div id="log"></div><div id="' + __CrawlerLogId + '"></div><ul id="' + __CrawlerDataId + '"></ul>',
                success: function (_layero, _index) {
                    setTimeout(function () {
                        _spider.__run();
                        layer.title("task running...", _index);
                    }, 1000);
                },
                cancel: function (_index) {
                    __confirmExit();
                    return false;
                },
                yes: function (_index) {
                    __confirmExit();
                    return false;
                }
            });
        };
    }

    function __getWindowHeight() {
        var _windowHeight = $(window).height();
        if (_windowHeight > window.screen.availHeight) {
            _windowHeight = document.body.clientHeight;
        }
        return _windowHeight;
    }

    function __uuid() {
        var s = [];
        var _hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = _hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // _bits 12-15 of the time_hi_and_version field to 0010
        s[19] = _hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // _bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var __uuid = s.join("");
        return __uuid;
    }

    function __EntityProcessor(_site, _spiderContext) {
        var that = this;
        that._entityExtractors = [];
        that._site = _site;
        that._spiderContext = _spiderContext;

        for (var b = 0; b < _spiderContext.entities.length; ++b) {
            var _entity = _spiderContext.entities[b];
            that._entityExtractors.push(new __EntityExtractor(_entity.alias||_entity.name, _entity.source || "entry", _spiderContext.enviroments, _entity, _entity.targetUrlExtractors));
        }

        that.__process = function (_page) {
            for (var a = 0; a < that._entityExtractors.length; ++a) {
                var _pageModelExtractor = that._entityExtractors[a];
                var _result = _pageModelExtractor.__process(_page);
                if (_result && _result.length > 0) {
                    _page.__addResultItem(_pageModelExtractor._name, _result);
                }
            }

            _page._resultItems._isSkip = !Object.getOwnPropertyNames(_page._resultItems._fields).length;
        }
    }

    function __EntityExtractor(_name, _source, _enviroments, _entity, _targetUrlExtractors) {
        var that = this;
        that._name = _name;
        that._source = _source;
        that._enviroments = _enviroments;
        that._entity = _entity;
        that._targetUrlExtractors = _targetUrlExtractors || [];

        that.__extractLinks = function (_page, _targetExtractors) {
            if (!_targetExtractors) return;
            for (var i = 0; i < _targetExtractors.length; ++i) {
                var _targetUrlExtractor = _targetExtractors[i], _urlRegionSelector = __Selector(_targetUrlExtractor.selector), _urlPatterns = _targetUrlExtractor.patterns;
                if (!_urlRegionSelector) {
                    var _needBreak = false;
                    for (var a = 0; a < _urlPatterns.length; ++a) {
                        if (!_urlPatterns[a] || !_urlPatterns[a].trim().length) {
                            _needBreak = true;
                            break;
                        }
                    }
                    if (_needBreak) {
                        continue;
                    }
                }

                var _links = _urlRegionSelector == null ? _page.__selectable().__links().__getValues() : (_page.__selectable().__selectList(_urlRegionSelector)).__links().__getValues();
                if (!_links) continue;

                if (!_urlPatterns || !_urlPatterns.length) {
                    _page.__addTargetRequests(_links);
                    continue;
                }

                for (var l = 0; l < _links.length; ++l) {
                    var _link = _links[l];
                    for (var k = 0; k < _urlPatterns.length; ++k) {
                        var _targetUrlPattern = _urlPatterns[k];
                        if (_targetUrlPattern && _targetUrlPattern.trim()) {
                            var _reg = new RegExp(_targetUrlPattern);
                            if (_reg.test(_link)) {
                                _page.__addTargetRequest(new __Request({
                                    _url: _link,
                                    _name: that._source,
                                    _grade: _page._request._depth + 1,
                                    _extras: _page._request._extras
                                }));
                            }
                        } else {
                            _page.__addTargetRequest(new __Request({
                                _url: _link,
                                _name: that._source,
                                _grade: _page._request._depth + 1,
                                _extras: _page._request._extras
                            }));
                        }
                    }
                }
            }
        }
        that.__getEnviromentValue = function (_field, _page, _index) {
            switch (_field) {
                case __EntityExtractor._timestamp: {
                    return new Date();
                }
                default: {
                    return _page._request.__getExtra(_field);
                }
            }
        };
        that.__extractField = function (_page, _item, _field, _index) {
            var _isArray = _field instanceof Array;
            var _dataStruct = _isArray ? _field[0] : _field;
            var _selector = __Selector(_dataStruct.selector);
            if (_selector == null) return null;

            var _propertyNames = Object.getOwnPropertyNames(_dataStruct);
            var _isEntity = _propertyNames.length > 1 && $.inArray("targetUrl", _propertyNames) == -1;

            if (!_isEntity) {
                var _tmpValue = null;
                if (_selector === "EnvironmentSelector") {
                    _tmpValue = that.__getEnviromentValue(_dataStruct.selector.expression, _page, _index);
                    return _tmpValue;
                }
                else {
                    if (_isArray) {
                        var _propertyValues = _item.__selectList(_selector).__nodes();
                        var _results = [];
                        for (var j = 0; j < _propertyValues.length; ++j) {
                            var _propertyValue = _propertyValues[j];
                            var _tmp = _propertyValue.__getValue(_dataStruct.selector.html);
                            _results.push(_tmp);
                        }
                        return _results;
                    }
                    else {
                        var _select = _item.__select(_selector);
                        if (_select) {
                            _tmpValue = _select.__getValue(_dataStruct.selector.html);
                        }
                        return _tmpValue;
                    }
                }
            }
            else {
                var _selectable;
                var _obj = {};
                if (_isArray) {
                    var _objs = [];
                    var _selectables = _item.__selectList(_selector).__nodes();
                    for (var i = 0; i < _selectables.length; ++i) {
                        _selectable = _selectables[i];
                        for (var _prop in _dataStruct) {
                            if (_dataStruct.hasOwnProperty(_prop)) {
                                if (_prop !== "selector") {
                                    _obj[_prop] = that.__extractField(_page, _selectable, _dataStruct[_prop], 0);
                                }
                            }
                        }
                        _objs.push(_obj);
                    }
                    return _objs;
                }
                else {
                    _selectable = _item.__select(_selector);
                    for (var _prop1 in _dataStruct) {
                        if (_dataStruct.hasOwnProperty(_prop1)) {
                            if (_prop1 !== "selector") {
                                _obj[_prop1] = that.__extractField(_page, _selectable, _dataStruct[_prop1], 0);
                            }
                        }
                    }
                    return _obj;
                }
            }
        }
        that.__processSingle = function (_page, _item, _entity, _index) {
            var _dataObject = {};
            var _targetUrlFields = [];
            var _entityValueIsNull = true;

            for (var _field in _entity.fields) {
                if (_entity.fields.hasOwnProperty(_field)) {
                    var _data = that.__extractField(_page, _item, _entity.fields[_field], _index);
                    if (_entityValueIsNull && _entity.fields[_field].selector.type !== "environment" && _data != null) {
                        _entityValueIsNull = false;
                    }

                    if (_entity.fields[_field]["targetUrl"] == true) {
                        _targetUrlFields.push(_field);
                    }
                    _dataObject[_field] = _data == null ? "" : _data;
                }
            }
            if (_entityValueIsNull || Object.getOwnPropertyNames(_dataObject).length == 0) return null;

            var _isSourceEntity = _targetUrlFields.length > 0;

            while (_targetUrlFields.length > 0) {
                var _fld = _targetUrlFields.pop();
                var _url = encodeURI(_dataObject[_fld]);
                if (__UrlRegex().test(_url)) {
                    var _req = new __Request({
                        _url: _dataObject[_fld],
                        _grade: 1,
                        _name: that._name + "|" + _fld,
                        _extras: _dataObject
                    });
                    _page.__addTargetRequest(_req);
                }
            }

            return _isSourceEntity ? null : _dataObject;
        }
        that.__process = function (_page) {
            var _isTarget = true;
            for (var a = 0; a < that._targetUrlExtractors.length; ++a) {
                var _targetUrlExtractor = that._targetUrlExtractors[a];
                for (var b = 0; b < _targetUrlExtractor.patterns.length; ++b) {
                    var _pattern = _targetUrlExtractor.patterns[b];
                    if (!_pattern || !_pattern.trim().length) {
                        continue;
                    }
                    var _regex = new RegExp(_pattern, 'g');
                    _isTarget = _page._request._url.match(_regex).length > 0;
                    if (_isTarget) {
                        break;
                    }
                }
            }

            if (!_isTarget) {
                return null;
            }

            if (_page._request._name && _page._request._name != that._source) {
                return;
            }

            if (that._enviroments) {
                for (var p in that._enviroments) {
                    if (that._enviroments.hasOwnProperty(p)) {
                        var _name = p;
                        var _evnSelector = that._enviroments[p];
                        var _value = _page.__selectable().__select(_evnSelector);
                        _page._request.__putExtra(_name, _value);
                    }
                }
            }

            var _result = [];
            for (var _a = 0; _a < _entity.selectors.length; _a++) {
                var _entitySelector = _entity.selectors[_a];
                var _selector = __Selector(_entitySelector);

                var _list;
                if (_selector != null) {
                    _list = _page.__selectable().__selectList(_selector).__nodes();
                    if (!_list || _list.length == 0) {
                        continue;
                    }
                } else {
                    _list = [_page.__selectable()];
                }

                var _index = 0;
                for (var i = 0; i < _list.length; ++i) {
                    var _item = _list[i];
                    try {
                        var _obj = that.__processSingle(_page, _item, that._entity, _index);
                        if (_obj) {
                            _result.push(_obj);
                        }
                        _index++;
                    }
                    catch (e) {
                    }
                }
                if (_result.length) break;
            }

            if (!_page._missTargetUrls) {
                that.__extractLinks(_page, that._targetUrlExtractors);
            }
            return _result;
        }
        return that;
    }
    __EntityExtractor._timestamp = "4145e4701d914d7ba15825face522aa6";

    function __ResultItems() {
        var that = this;
        that._fields = {};
        that._isSkip = false;
        that._request = null;
        that.__getResultItem = function (_key) {
            return that._fields[_key];
        };
        that.__addOrUpdateResultItem = function (_key, _value) {
            that._fields[_key] = _value;
            return that;
        };
        that.__getResult = function () {
            return that._fields;
        };
        that.__hasValue = function () {
            return Object.getOwnPropertyNames(that._fields).length > 0;
        };
        that.__clearData = function () {
            that._fields = {};
        };
    }

    function __Selectable(_text, _urlOrPadding, _contentType) {
        var that = this
        if (typeof _text == "string") {
            switch (_contentType) {
                case _ContentType._Html:
                    {
                        var c = _text;
                        if (_urlOrPadding || _urlOrPadding.trim().length > 0) {
                            c = that.__fixAllRelativeHrefs(_text, _urlOrPadding);
                        }
                        that.__elements = [c];
                        break;
                    }
                case _ContentType._Json:
                    {
                        var _json;
                        if (_urlOrPadding || _urlOrPadding.trim().length > 0) {
                            _json = removePadding(_text, _urlOrPadding);
                        } else {
                            _json = _text;
                        }
                        that.__elements = [_json];
                        break;
                    }
            }
        } else {
            that.__elements = _text;
        }
    }

    __Selectable.prototype = {
        __fixAllRelativeHrefs: function (_content, _url) {
            var _doc = document.implementation.createHTMLDocument('');
            _doc.open();
            _doc.write(_content);
            _doc.close();
            var j = jQuery(_doc);
            j.find('a').each(function (i, _el) {
                var a = jQuery(_el);
                var u = a.attr('href');
                if (u && u.length) {
                    var _newUrl = __absolutizeURI(_url, u);
                    jQuery(_el).attr('href', _newUrl);
                }
            });
            j.find('img').each(function (i, _el) {
                var img = jQuery(_el);
                var g = img.attr('src');
                if (g && g.length) {
                    var _newUrl = __absolutizeURI(_url, g);
                    jQuery(_el).attr('src', _newUrl);
                }
            });
            var r = j.get(0).documentElement.outerHTML;
            return r;
        },
        __removePadding: function (_json, _padding) {
            return _json.replace(_padding, '');
        },
        __nodes: function () {
            var that = this;
            var _reslut = [];
            for (var i = 0; i < that.__elements.length; ++i) {
                var _element = that.__elements[i];
                _reslut.push(new __Selectable([_element]));
            }
            return _reslut;
        },
        __select: function (_selector) {
            var _resluts = [];
            for (var a = 0; a < this.__elements.length; ++a) {
                var _selectedNode = this.__elements[a];
                var _result = _selector.__select(_selectedNode);
                if (_result) {
                    _resluts.push(_result);
                    break;
                }
            }
            return new __Selectable(_resluts);
        },
        __getValue: function (_isPlaint) {
            _isPlaint = _isPlaint || false;
            var that = this;
            if (!that.__elements || !that.__elements.length) {
                return null;
            }
            if (__UrlRegexFull().test(encodeURI(that.__elements[0]))) {
                return that.__elements[0];
            }
            if (!_isPlaint) {
                return $('<div>' + that.__elements[0] + '</div>').text().trim();
            } else {
                return $('<div>' + that.__elements[0] + '</div>').html();
            }
        },
        __getValues: function (_isPlaint) {
            var that = this;
            _isPlaint = _isPlaint || false;
            var _results = [];
            if (that.__elements) {
                for (var a = 0; a < that.__elements.length; ++a) {
                    if (__UrlRegexFull().test(encodeURI(that.__elements[0]))) {
                        _results.push(that.__elements[a]);
                    }
                    else {
                        if (!_isPlaint) {
                            _results.push($('<div>' + that.__elements[a] + '</div>').text().trim());
                        } else {
                            _results.push($('<div>' + that.__elements[a] + '</div>').html());
                        }
                    }
                }
            }

            return _results;
        },
        __selectList: function (_selector, isUrl) {
            var that = this;
            isUrl = isUrl || false;
            var _results = [];
            for (var a = 0; a < that.__elements.length; ++a) {
                var _selectedNode = isUrl ? encodeURI(that.__elements[a]) : that.__elements[a];
                var _selectResults = _selector.__selectList(_selectedNode);

                if (_selectResults) {
                    var _newArr = _results;
                    _results = _newArr.concat(_selectResults);
                    _newArr.length = 0;
                    _selectResults.length = 0;
                }
            }
            return new __Selectable(_results);
        },
        __css: function (_css) {
            var _selector = new __CssSelector(_css);
            return this.__selectList(_selector);
        },
        __links: function () {
            return this.__xpath('.//a/@href').__regex(__UrlRegex(), true);
        },
        __xpath: function (_xpath) {
            var _selector = new __XpathSelector(_xpath);
            return this.__selectList(_selector);
        },
        __jsonPath: function (_jsonpath) {
            throw __resource('Unsupport_Json_Selector');
        },
        __regex: function (_regex, isUrl) {
            var _selector = new __RegexSelector(_regex);
            return this.__selectList(_selector, isUrl);
        }
    };

    function __StatusMonitor(_spider) {
        var that = this;
        that._monitors = [];
        that._spider = _spider;
        that._exited = false;
        var _monitorFunctions = {
            console: function (_spider, _status, _message) {
                if (!__useConsole) return;
                var _properties = Object.getOwnPropertyNames(_status).reverse(), _arr = [], _msg = "";
                if (typeof _status == "object") {
                    while (_properties.length) {
                        var n = _properties.pop();
                        _arr.push(n + ":" + _status[n]);
                    }
                    console.log(_arr.join(','));
                } else {
                    console.log(_status.toString());
                }
                if (_message) {
                    console.log(_message);
                }
            },
            webSocket: function (_spider, _status, _message) {
                if (_spider && _spider.__webSocket) {
                    _spider.__webSocket.__status(_status, _message);
                }
            },
            webElement: function (_spider, _status) {
            }
        };
        var monitors = _spider._taskObject.monitor;
        if (monitors) {
            if (monitors.webElement) {
                that._monitors.push("webElement");
            }
            if (monitors.console) {
                that._monitors.push("console");
            }
            if (monitors.webSocket || monitors.websocket) {
                that._monitors.push("webSocket");
            }
        }


        that.__start = function () {
            that._interval = setInterval(that.__reportStatus, 5000);
            that.__reportStatus();
        }

        that.__stop = function (_isSelf) {
            if (that._exited === false) {
                that._exited == true;
                clearInterval(that._interval);
                delete that._interval;
                if (_isSelf == true) return;
                that.__reportStatus();
            }
        }

        that.__reportStatus = function () {
            if (that._spider._isExited) {
                that.__stop(true);
            }
            else {
                _spider.__reportStatus().then(function (_err, _status, _message) {
                    _message = _message || "Running";
                    if (_status) {
                        for (var a = 0; a < that._monitors.length; a++) {
                            if (_monitorFunctions.hasOwnProperty(that._monitors[a])) {
                                _monitorFunctions[that._monitors[a]](that._spider, _status, JSON.stringify(_message));
                            }
                        }
                    }
                });
            }
        }
    }

    function __clone(_source, _check) {

        function __getPty(_check, _pty, _item) {
            var _newPty = _check ? "_" + _pty : _pty;
            var _rlt = typeof _item === "object" ? __clone(_item, $.inArray(_pty, ["fields", "log", "monitor"]) < 0) : _item;
            return { _k: _newPty, _v: _rlt };
        }

        _check = _check || false;
        var _result = null;
        if (_source instanceof Array) {
            _result = [];
            for (var _h = 0; _h < _source.length; _h++) {
                _result.push(__getPty(_check, "", _source[_h])._v);
            }
        }
        else {
            _result = {};
            for (var _pty in _source) {
                if (_source.hasOwnProperty(_pty)) {
                    var _rlt = __getPty(_check, _pty, _source[_pty]);
                    _result[_rlt._k] = _rlt._v;
                }
            }
        }

        return _result;
    }
}

//Parameters
{
    var SpiderStatus = {
        Init: "Init",
        Running: "Running",
        Stopped: "Stopped",
        Finished: "Finished",
        Exited: "Exited"
    };

    var _ContentType = { _Html: 0, _Json: 1 };
    var __md5Hash = new MGXH();
    var __iv = __md5Hash.hd5(__uuid()).substring(0, 16);
    var __aesKey = __iv + __md5Hash.hd5(__uuid()).substring(0, 16);
    var __Region = "zh-CN";
    var __CrawlerLogId = "_pa1pa_crawler_test_log";
    var __CrawlerDataId = "_pa1pa_crawler_test_data";
    var SpiderMonitor = new __SpiderTaskMonitor();
    var __useConsole = false;

    //var __AdapterJS = '(function(d){function f(){this._callbacks=[]}f.prototype.then=function(j,l){var k;if(this._isdone){k=j.apply(l,this.result)}else{k=new f();this._callbacks.push(function(){var m=j.apply(l,arguments);if(m&&typeof m.then==="function"){m.then(k.done,k)}})}return k};f.prototype.done=function(){this.result=arguments;this._isdone=true;for(var j=0;j<this._callbacks.length;j++){this._callbacks[j].apply(null,arguments)}this._callbacks=[]};function c(j){var n=new f();var p=[];if(!j||!j.length){n.done(p);return n}var k=0;var m=j.length;function l(q){return function(){k+=1;p[q]=Array.prototype.slice.call(arguments);if(k===m){n.done(p)}}}for(var o=0;o<m;o++){j[o].then(l(o))}return n}function b(l,j){var k=new f();if(l.length===0){k.done.apply(k,j)}else{l[0].apply(null,j).then(function(){l.splice(0,1);b(l,arguments).then(function(){k.done.apply(k,arguments)})})}return k}function a(j){var l="";if(typeof j==="string"){l=j}else{var k=encodeURIComponent;var m=[];for(var n in j){if(j.hasOwnProperty(n)){m.push(k(n)+"="+k(j[n]))}}l=m.join("&")}return l}function e(){var k;if(window.XMLHttpRequest){k=new XMLHttpRequest()}else{if(window.ActiveXObject){try{k=new ActiveXObject("Msxml2.XMLHTTP")}catch(j){k=new ActiveXObject("Microsoft.XMLHTTP")}}}return k}function h(l,m,r,o){var n=new f();var k,v;r=r||{};o=o||{};try{k=e()}catch(j){n.done(i.ENOXHR,"");return n}v=a(r);if(l==="GET"&&v){m+="?"+v;v=null}k.open(l,m);var u="application/x-www-form-urlencoded";for(var t in o){if(o.hasOwnProperty(t)){if(t.toLowerCase()==="content-type"){u=o[t]}else{k.setRequestHeader(t,o[t])}}}k.setRequestHeader("Content-type",u);function s(){k.abort();n.done(i.ETIMEOUT,"",k)}var q=i.ajaxTimeout;if(q){var p=setTimeout(s,q)}k.onreadystatechange=function(){if(q){clearTimeout(p)}if(k.readyState===4){var w=(!k.status||(k.status<200||k.status>=300)&&k.status!==304);n.done(w,k.responseText,k)}};k.send(v);return n}function g(j){return function(l,m,k){return h(j,l,m,k)}}var i={Promise:f,join:c,chain:b,ajax:h,get:g("GET"),post:g("POST"),put:g("PUT"),del:g("DELETE"),ENOXHR:1,ETIMEOUT:2,ajaxTimeout:0};if(typeof define==="function"&&define.amd){define(function(){return i})}else{d.promise=i}})(this);function __ActionHelper(a,b){var c=this;c._actions=a;c._pager=b;c._evaluator=new XPathEvaluator();c._actionFunctions={scroll:function(j){var d=new promise.Promise();var h=200;var k=null;var l=0,i=0,f=0;if(j.selector){var g=c.__findElement(j);if(g){k=$(g);l=g.scrollHeight-k.height()}}else{k=$(document);l=k.height()-$(window).height()}if(k.length){i=k.scrollTop();l-=i;f=parseInt(l/h,10)+(l%h==0?0:1);e()}else{d.done()}function e(){var m=100;i+=h;k.scrollTop(i);if(--f>0){c.__wait(m).then(function(){e()})}else{c.__wait(j.delay).then(function(){d.done()})}}return d},click:function(g){var d=g.delay;var e=c.__findElement(g);if(!e){g._missClick=true;console.log("can not find element,miss click...")}else{var f=$(e);if(!f.hasClass("disabled")&&!f.hasClass("disable")&&!f.attr("disabled")){e.click();g._missClick=false}else{g._missClick=true;console.log("element disabled,miss click..")}}return c.__wait(d)}};c._actionValidators={scroll:function(d){if(d.repeat<=0){return}var e=d.selector?d._element:document.body;if(e.scrollHeight!=d._lastHeight){d._lastHeight=e.scrollHeight;d._missCount=0}else{if(++d._missCount>=3){d.repeat=0}}},click:function(d){if(d._missClick){d.repeat=0}}};c.__doAction=function(k){var g=new promise.Promise();var l=document;var i=k.repeat==0;var h=k.delay<=0?800:(k.delay<100?k.delay*1000:k.delay);var j=0;var e=0;var f={name:k.name,repeat:isNaN(k.repeat)?1:k.repeat,delay:h,selector:k.selector};if(c._actionFunctions[f.name]){d(f)}else{g.done()}function d(m){c._actionFunctions[m.name](m).then(function(){m.repeat--;c._actionValidators[m.name](m);if(m.repeat<=0){if(m._element){delete m._element}g.done(m)}else{d(m)}})}return g};c.__findElement=function(g){var h=g._element;if(!h||!$.contains(document.body,h)){var e=c.__getElements(g.selector);if(e.length>0){h=e[0];g._element=h}else{h=null}}if(!h){g._missClick=true}else{var f=$(h);var d=f.offset();window.scroll(d.left,d.top)}return h};c.__execteScript=function(e){var d=new promise.Promise();var h=[];for(var f=0;f<e.length;f++){var g=e[f];h.push(function(i){var j=i;return function(){return c.__doAction(j)}}(g))}if(h.length>0){promise.chain(h).then(function(){d.done(null,true)})}else{d.done(null,true)}return d};c.__getElements=function(g){var f=[];try{var d=c._evaluator.evaluate(g,document.documentElement,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);if(d){var h;while(h=d.iterateNext()){f.push(h)}}}catch(e){console.error(e);console.warn("xpath:"+g+",get no elements!")}return f};c.__wait=function(e){e=e||50;var d=new promise.Promise();setTimeout(function(){d.done()},e);return d};c.__sendMessage=function(d){chrome.runtime.sendMessage(JSON.stringify({command:"setHtml",data:{link:__Pa1Pa_Name,html:d}}))};c.__sendHeartBeats=function(){chrome.runtime.sendMessage(JSON.stringify({command:"downloaderHeartBeats",data:{link:__Pa1Pa_Name,source:c._target}}))};c.__showBox=function(){var d=$(window).height();if(d>window.screen.availHeight){d=document.body.clientHeight}c._shader.css("width",$(document).width());c._shader.css("height",$(document).height());c._infoBox.css("left",($(window).width()/2-100)+"px");c._infoBox.css("top",(d/2-125)+"px")};c.__download=function(){if(c._interval){clearInterval(c._interval)}if(c._msgInterval){clearInterval(c._msgInterval)}c._msgInterval=setInterval(c.__sendHeartBeats,5000);c._interval=setInterval(c.__showBox,400);setTimeout(c.__downloadInner,__Pa1Pa_Delay)};c.__downloadInner=function(){try{c.__showRunning();c.__execteScript(c._actions).then(function(){if(c._shader){c._shader.remove()}if(c._infoBox){c._infoBox.remove()}var e=document.documentElement.outerHTML;c.__showRunning();c.__sendMessage(encodeURIComponent(e))})}catch(d){console.error(d);c.__sendMessage("")}};c.pg=function(){if(c._interval){clearInterval(c._interval)}if(c._msgInterval){clearInterval(c._msgInterval)}if(c._pager){c.__doAction(c._pager).then(function(d){if(d&&d._missClick){c.__sendMessage("")}else{chrome.runtime.sendMessage(JSON.stringify({command:"pageOK",data:{}}))}})}};c.__showRunning=function(){try{c._shader=$("#__pa1pa_shader");c._infoBox=$("#__pa1pa_infobox");if(!c._shader.length){var h=$(window).height();if(h>window.screen.availHeight){h=document.body.clientHeight}c._shader=$("<div id=\'__pa1pa_shader\' style=\'z-index:10000000; display: block; left: 0px; top: 0px; position: absolute; background: rgba(244, 244, 244, 0.64)!important; \'></div>");c._infoBox=$("<div id=\'__pa1pa_infobox\' style=\'padding: 20px !important; z - index:10000001; display: block; position: fixed; \'></div>");$(document.body).append(c._infoBox);var e=$("<img/>");e.attr("src",chrome.extension.getURL("css/Running.gif"));c._infoBox.append(e);var f=$("<div style=\'text-align:center !important;line-height:50px !important;font-family:Arial !important;font-weight:bold !important;font-size:50px !important;\'>易智采集器</div>");c._infoBox.append(f);c._shader.css("width",$(document).width());c._shader.css("height",$(document).height());c._infoBox.css("left",($(window).width()/2-100)+"px");c._infoBox.css("top",(h/2-125)+"px");$(document.body).append(c._shader)}}catch(d){}};c.removeMessage=function(){chrome.extension.onMessage.removeListener(c.onMessage)};c.onMessage=function(h,g,f){try{var e=JSON.parse(h);if(!e||!e.command){return}console.log("receive command:"+e.command);if(e.command=="page"){c.pg()}else{if(e.command=="download"){c.__download()}else{if(e.command=="exit"){c.__download=function(){}}}}}catch(d){}f("ok")};chrome.extension.onMessage.addListener(c.onMessage);c.__showRunning();if(c._msgInterval){clearInterval(c._msgInterval)}if(c._interval){clearInterval(c._interval)}};';
}

//Selector
{
    function __XpathSelector(_pattern) {
        var _tmpAttributes = _pattern.match(__attributeRegex());
        var _attribute;
        if (_tmpAttributes) {
            if (_tmpAttributes.length === 1) {
                _attribute = _tmpAttributes[0];
            }
            else if (_tmpAttributes.length > 1) {
                throw __resource('Only_One_Attribute');
            }
        }
        var _text = _pattern.match(__textRegex());
        var _isText;
        if (_attribute) {
            this._xpath = _pattern.replace('/' + _attribute, '');
            _attribute = _attribute.substring(1, _attribute.length);
        } else if (_text !== null) {
            _isText = true;
            this._xpath = _pattern.replace('/text()', '');
        } else {
            this._xpath = _pattern;
        }
        this.__select = function (_text) {
            var _tmpText = _text, _tmpXpath = this._xpath;
            if (_tmpText.startsWith("<tbody")) {
                _tmpText = "<table>" + _tmpText + "</table>";
            }
            else if (_tmpText.startsWith("<tr")) {
                _tmpText = "<table><tbody>" + _tmpText + "</tbody></table>";
            } else if (_tmpText.startsWith("<td")) {
                _tmpText = "<table><tbody><tr>" + _tmpText + "</tr></tbody></table>";
            }

            var _doc = document.implementation.createHTMLDocument('');
            _doc.open();
            _doc.write(_tmpText);
            _doc.close();
            var _elements = _doc.evaluate(_tmpXpath, _doc, null, XPathResult.ANY_TYPE, null);
            if (_elements) {
                var _el;
                if (_el = _elements.iterateNext()) {
                    if (_attribute != null) {
                        return _el.getAttribute(_attribute);
                    } else if (_isText === true) {
                        return _el.innerText;
                    } else {
                        return _el.outerHTML;
                    }
                }
            }
            return null;
        }
        this.__selectList = function (_text) {
            var _nodes = [];
            var _doc = document.implementation.createHTMLDocument('');
            _doc.open();
            _doc.write(_text);
            _doc.close();
            var _elements = _doc.evaluate(this._xpath, _doc, null, XPathResult.ANY_TYPE, null);
            if (_elements) {
                var _el;
                while (_el = _elements.iterateNext()) {
                    if (_attribute != null) {
                        _nodes.push(_el.getAttribute(_attribute));
                    } else if (_isText === true) {
                        _nodes.push(_el.innerText);
                    } else {
                        _nodes.push(_el.outerHTML);
                    }
                }
            }
            return _nodes;
        }
    }

    function __RegexSelector(_pattern) {
        this._regex = typeof _pattern == "string" ? new RegExp(_pattern, 'g') : _pattern;
        this.__select = function (_text) {
            return _text ? _text.match(this._regex) : null;
        }
        this.__selectList = function (_text) {
            return _text ? _text.match(this._regex) : null;
        }
    }

    function __CssSelector(_pattern, _attr) {
        var _attribute = _attr;
        this._css = _pattern;
        this.__select = function (_text) {
            _text = '<div>' + _text + '</div>';
            var _node = jQuery(_text).get(0);
            if (_node != null) {
                if (this._attribute != null) {
                    return _node.attr(this._attribute);
                } else {
                    return _node.outerHTML;
                }
            }
            return null;
        }
        this.__selectList = function (_text) {
            _text = '<div>' + _text + '</div>';
            var _nodes = [];
            jQuery(_text).find(_text).each(function () {
                var _node = jQuery(this);
                if (_attribute != null) {
                    _nodes.push(_node.attr(_attribute));
                } else {
                    _nodes.push(_node.outerHTML);
                }
            });
            return _nodes;
        }
    }
}

//Pipeline
{
    function __EntityPipeline(_option) {
        _option = _option || {};
        var that = this;
        that._repeatCheck = __Request._dataVerify;
        that._repeatArr = [];
        that._repeatCount = 50;
        that._repeatThrowCount = 4;
        that._repeatCurrentCount = 0;
        //that._resumeable = _option._resumeable || false;

        that._entityName = _option._entityName;
        that._pipelinesArr = _option._pipelines;
        that.__init = function (_spider) {
            that._spider = _spider;
            that.__webSocket = _spider.__webSocket;
            for (var a = 0; a < that._pipelinesArr.length; ++a) {
                that._pipelinesArr[a].__init(_spider);
            }
        }
        that.__process = function (_resultItems) {
            var p = new promise.Promise();
            if (_resultItems) {
                var _list = _resultItems.__getResultItem(that._entityName);

                if (_list && _list.push && _list.length) {
                    if (that._repeatCheck) {
                        var _info = JSON.stringify(_list);
                        var _hashValue = __md5Hash.hd5(_info);
                        if ($.inArray(_hashValue, that._repeatArr) >= 0) {
                            that._spider._logger.__warn(__resource("PipelineData_Repeat"));
                            if (++that._repeatCurrentCount > that._repeatThrowCount) {
                                that._spider.__turnNext();
                                return;
                            }
                        }
                        else {
                            that._repeatCurrentCount = 0;
                            if (that._repeatArr.length >= that._repeatCount) {
                                that._repeatArr.pop();
                            }
                            that._repeatArr.push(_hashValue);
                        }
                    }
                    for (var b = 0; b < that._pipelinesArr.length; ++b) {
                        that._pipelinesArr[b].__process(_list, that._entityName);
                    }
                }
                else {
                    that._spider._logger.__warn(__resource("Page_Extract_Null"));
                }
            }
            p.done();
            return p;
        }
        that.__complete = function (arg) {
            for (var b = 0; b < that._pipelinesArr.length; ++b) {
                that._pipelinesArr[b].__complete(arg);
            }
        }
        return that;
    }

    function __EntityConsolePipeline(_option) {
        _option = _option || {};
        this.__process = function (_datas) {
            var p = new promise.Promise();
            if (!_datas || _datas.length == 0) {
                //console.log("[EntityConsolePipeline] no data to display!");
            }
            else {
                for (var a = 0; a < _datas.length; ++a) {
                    console.log(JSON.stringify(_datas[a]));
                }
            }
            p.done();
            return p;
        }
        this.__init = function (_spider) {

        }
        this.__complete = function () {
        }
        this.__dispose = function () {
        }
    }
    function __EntityWebSockectPipeline(_option) {
        var that = this;
        that._tableAlias = _option._entity.alias || _option._entity.name;
        that._isTest = _option._isTest === true;
        //that._resumeable = _option._resumeable || false;
        that._batch = _option._batch || new Date().getTime();

        that.__process = function (_datas, _request) {
            var p = new promise.Promise();
            if (that.__webSocket) {
                //that.__webSocket.__invoke("Pipeline", that._tableAlias, __getAesString(JSON.stringify(_datas), __aesKey, __iv).toString(), that._resumeable ? _request._url : "");
                that.__webSocket.__invoke("Pipeline", that._tableAlias, __getAesString(JSON.stringify(_datas), __aesKey, __iv).toString(),"");
            }

            p.done();
            return p;
        }
        that.__init = function (_spider) {
            that.__webSocket = _spider.__webSocket;
        }
        that.__complete = function (arg) {
            if (arg === true && that.__webSocket) {
                that.__webSocket.__invoke("Complete");
            }
        }
        that.__dispose = function () {
            delete that._tableAlias;
            delete that._isTest;
            delete that._repeatArr;
            delete that._repeatCheck;
            delete that._repeatCount;
            delete that._repeatCurrentCount;
            delete that._repeatThrowCount;
        }
    }
    function __EntityWebElementPipeline(_option) {
        _option = _option || {};
        var that = this;
        that._appender = "#" + __CrawlerDataId;
        that._isTest = _option._isTest;
        that._maxCount = that._isTest ? 9999999999 : 3;

        that._entityName = _option._entity.name || _option._entity.alias;
        that._index = 0;

        that._fields = null;

        that.__process = function (_datas) {
            that._proeedCount++;

            var p = new promise.Promise();
            if (_datas && _datas.length > 0) {
                for (var b = 0; b < _datas.length; ++b) {
                    that.__displayData(_datas[b]);
                }
                if (that._isTest && that._proeedCount >= 5) {
                    that._spider.__exit();
                }
                p.done();
            } else {
                p.done();
            }

            return p;
        }
        that.__displayData = function (_data) {
            var _dataPanel = $(that._appender);
            var _lis = _dataPanel.children();
            if (_lis.length > that._maxCount) {
                _lis.eq(_lis.length - 1).remove();
            }

            if (that._isTest) {
                if (that._fields == null) {
                    that._fields = Object.getOwnPropertyNames(_data);
                }

                if (that._fields.length > 0) {
                    var _arr = [];
                    for (var _a = 0; _a < that._fields.length; _a++) {
                        if (_data[that._fields[_a]] != '') {
                            _arr.push(_a);
                        }
                    }
                    while (_arr.length) {
                        var _x = _arr.pop();
                        that._fields.splice(_x, 1);
                    }
                }
            }

            var _info = JSON.stringify(_data).replace(/</gm, "&lt;").replace(/>/gm, "&gt;");

            var _item = $('<li style="text-align:left !important;color:#333 !important;margin:0 !important;padding:5px !important;border:1px solid gray !important;margin-top:5px !important;list-style-type:none !important;font-family:Verdana,Arial,Helvetica,sans-serif !important;font-size:12px !important;line-height:1.5em !important;">' + (++that._index) + '. ' + _info + '</li>');
            _dataPanel.prepend(_item);
        }
        that.__complete = function () {
            var _info, _item;
            var _dataPanel = $("#" + __CrawlerLogId);
            if (that._isTest && that._proeedCount >= 5) {
                _info = __resource("TimesOnTestMode");
                _item = $('<div style="text-align:left !important;color:red !important;padding-left: 3px !important;font-size: 12px !important;line-height: 20px !important;font-family:sans-serif !important;">' + _info + '</div>');
                _dataPanel.append(_item);
            }
            if (that._spider._downloader && !that._spider._downloader._name.startsWith("js-")) {
                if (that._fields == null) {
                    _info = __resource("Entity_Data_Empty");
                    _item = $('<div style="text-align:left !important;color:#fff !important;padding-left: 3px !important;font-size: 12px !important;line-height: 20px !important;font-family:sans-serif !important;border: 1px solid #FFAF60 !important;background-color: #FFA042 !important;">' + _info + '</div>');
                    _dataPanel.append(_item);
                }
                else if (that._isTest && that._fields.length > 0) {
                    _info = __resource("Column_Data_Empty").replace("{0}", that._fields.join(','));
                    _item = $('<div style="text-align:left !important;color:#fff !important;padding-left: 3px !important;font-size: 12px !important;line-height: 20px !important;font-family:sans-serif !important;border: 1px solid #FFAF60 !important;background-color: #FFA042 !important;">' + _info + '</div>');
                    _dataPanel.append(_item);
                }
            }
        }
        that.__init = function (_spider) {
            that._spider = _spider;
            var _container = $(that._appender);
            if (!_container.length) {
                var _msg = "can not find component to display data, element selector:" + that._appender;
                console.error(_msg);
            }
            that._proeedCount = 0;
        }
        that.__dispose = function () {
        }
    }
    function __ConsolePipeline(_option) {
        _option = _option || {};
        that.__init = function () { }
        that.__process = function (_resultItems) {
            var p = new promise.Promise();
            if (_resultItems) {
                var _msg = '';
                var _property;
                for (_property in _resultItems._fields) {
                    if (_resultItems._fields.hasOwnProperty(_property)) {
                        _msg += _property + ":\t" + _resultItems._fields[_property] + '  ';
                    }
                }
                console.log(_msg);
            }
            p.done();
            return p;
        }
        that.__complete = function () {
        }
        that.__dispose = function () {
        }
    }
	
	function __IndexDBPipeline(_option){
		_option = _option || {};
		var that = this;
		that.__init = function (_spider) {
			that._connector = SpiderConnector.Connector;
		}
		that.__process = function (_datas, _entityName) {
			that._connector.invoke("store",{data:_datas,table:_entityName});
		}
		that.__complete = function (arg) {
		}
		this.__dispose = function () {
		}
	}
	
    function __TabMessagePipeline(_option) {
        _option = _option || {};
        var that = this;
        that._target = [];
        that._tableAlias = _option._entity.alias || _option._entity.name;
        for (var _idx = 0; _idx < _option.targets.length; _idx++) {
            if (_option.targets[_idx].sourceEntity === that._tableAlias) {
                that._target.push(_option.targets[_idx]);
            }
        }

        that.__init = function (_spider) {
            if (!that._target.length) return;
            that._spider = _spider;
            that._connector = SpiderConnector.Connector;
            //that._heartBeats = new Date();
            if (that._connector) {
                that._connector.registerEvent({
                    heartBeats: function (_data, _sendResponse) {
                        if (that._spider._isExited) return;
                        if (_sendResponse) {
                            _sendResponse("OK");
                            //that._heartBeats = new Date();
                        }
                    }
                });
                that._interval = setInterval(function () {
                    for (var _x = 0; _x < that._target.length; _x++) {
                        that._connector.invoke("heartBeats", that._target[_x].targetId);
                    }

                    //if ((new Date() - that._heartBeats) / 1000 >= 15) {
                    //    clearInterval(that._interval);
                    //    that._interval = null;
                    //    that._spider.__exit(__resource("HeartBeatsTimeout"));
                    //}
                }, 5000);
            }
        }
        that.__process = function (_datas) {
            var p = new promise.Promise();
            if (that._target.length) {
                for (var _x = 0; _x < that._target.length; _x++) {
                    var _list = [];
                    for (var i = 0; i < _datas.length; i++) {
                        _list.push({
                            _url: _datas[i][that._target[_x].sourceField],
                            _extras: _datas[i]
                        });
                    }
                    that._connector.invoke("pushUrl", { target: that._target[_x].targetId, data: _list });
                }
            }
            else p.done();
            return p;
        }
        this.__complete = function (arg) {
            if (arg === true && that._target.length) {
                for (var _x = 0; _x < that._target.length; _x++) {
                    that._connector.invoke("parentComplete", { target: that._target[_x].targetId});
                }
            }
        }
        this.__dispose = function () {
            if (that._interval) {
                clearInterval(that._interval);
            }
        }
    }
}

//Scheduler
{
    function __QueueDuplicateRemovedScheduler(_option) {
        _option = _option || {};
        var that = this;
        that._duplicateRemover = {};
        that._taskId = _option.taskId;
        that._errorCount = 0;
        that._successCount = 0;
        that._storeCurrentUrl = _option.storeUrl === true;
        that._isStop = false;
        that._isTest = _option._isTest;
        that._popPromise = null;
        
        that._selfValidate = false;
        that._resumeable = _option._resumeable || false;

        if (!that._isTest) {
            that._connector = SpiderConnector.Connector;

            that._connector.registerEvent({
                popUrlDB: function(_data, _sendResponse) {
                    if (!_data) that._popPromise.done();
                    else {
                        var _request = new __Request(_data);
                        that._duplicateRemover[_request.__identity()] = true;
                        if (that._storeCurrentUrl) {
                            _request.__putExtra("__url", _request._url);
                        }
                        that._popPromise.done(null, _request);
                    }
                }
            });

            if (that._resumeable) {
                that._connector.registerEvent({
                    openUrlDB: function (_data, _sendResponse) {
                        if (!_data) return;
                        for (var _x = 0; _x < _data.length; _x++) {
                            that._duplicateRemover[_data[_x]] = true;
                        }
                    }
                });
                that._connector.invoke("openUrlDB", that._taskId);
            } else {
                that._connector.invoke("resetUrlDB", that._taskId);
            }

            that.__poll = function () {
                that._popPromise = new promise.Promise();
                if (that._isStop) {
                    that._popPromise.done();
                }
                else {
                    that._connector.invoke("popUrlDB");
                }
                return that._popPromise;
            }
        }
        else {
            that._queue = new __Queue();
            that._popCount = 0;
            that.__poll = function () {
                var p = new promise.Promise();
                if (that._isStop === true || that._popCount > 4) {
                    p.done();
                } else {
                    if (that._queue.__isEmpty()) {
                        p.done();
                    }
                    else {
                        var _request = this._queue.__dequeue();
                        that._popCount++;
                        if (that._storeCurrentUrl) {
                            _request.__putExtra("__url", _request._url);
                        }
                        p.done(null, _request);
                    }
                }
                return p;
            }
        }

        that.__init = function (_spider, _startRequests, _finishedUrls) {
            var p = new promise.Promise();
            if (_startRequests) {
                for (var _b = 0; _b < _startRequests.length; _b++) {
                    var _request = _startRequests[_b];
                    that.__push(_request);
                }
            }
            if (_finishedUrls) {
                for (var _b = 0; _b < _finishedUrls.length; _b++) {
                    var _furl = _finishedUrls[_b];
                    that._duplicateRemover[__Request.__getIdentity(_furl)] = true;
                }
            }
            p.done();
            return p;
        }
        that.__resetDuplicateCheck = function () {
            that._duplicateRemover = {};
        }
        that.__push = function (_items) {
            var list = _items.push ? _items : [_items];
            var pushList = [];
            for (var _idx = 0; _idx < list.length; _idx++) {
                var _request = list[_idx];
                _request._hash = _request.__identity();
                if (!that._duplicateRemover[_request._hash]) {
                    that._duplicateRemover[_request._hash] = true;
                    if (that._isTest) {
                        that._queue.__enqueue(_request);
                    }
                    else pushList.push(_request);
                } 
            }
            
            pushList.length && that._connector.invoke('pushUrlDB', pushList);
        }
        that.__completeRequest = function(_request) {
            that._connector && that._connector.invoke('completeUrlDB', _request.__identity());
        }
        that.__shouldReserved = function (_request) {
            var _cycleTriedTimes = _request.__getExtra(__Request._cycleTriedTimes);
            return _cycleTriedTimes > 0;
        }
        that.__stop = function () {
            that._isStop = true;
        }
        that.__dispose = function () {
            delete that._duplicateRemover;
            delete that._queue;
            delete that._errorCount;
            delete that._successCount;
            delete that._isStop;
        }
        that.__addError = function (_request) {
            that._errorCount += 1;
            that.__completeRequest(_request);
        }
        that.__addSucess = function(_request) {
            that._successCount += 1;
            that.__completeRequest(_request);
        }
        that.__reportStatus = function () {
            var p = new promise.Promise();
            var _left = that._queue ? that._queue.__getLength() : 0;
            var _total = that._duplicateRemover ? Object.getOwnPropertyNames(that._duplicateRemover).length : 0;
            p.done(null, {
                left: _left,
                error: that._errorCount || 0,
                success: that._successCount || 0,
                total: _total
            });

            return p;
        }
        that.__getStatus = function () {
            return false;
        }
    }
    function __TabMessageScheduler(_option) {
        _option = _option || {};
        var that = this;
        that._isTest = _option._isTest || false;
        that._scheduler = new __QueueDuplicateRemovedScheduler(_option);
        that._selfValidate = true;
        that._pushStartUrl = false;
        that._heartBeats = new Date();
        that.__init = function (_spider, _startRequests, _finishedUrls) {
            that._connector = SpiderConnector.Connector;
            if (that._connector) {
                //that._interval = setInterval(function () {
                //    that._connector.invoke("pollUrl").then(function (_result, _data) {
                //        if (_data && _data.length) {
                //            var tmpArr = [];
                //            for (var _idx = 0; _idx < _data.length; _idx++) {
                //                tmpArr.push(new __Request(_data[_idx]));
                //            }
                //            that._scheduler.__push(tmpArr);
                //            that._heartBeats = new Date();
                //        }
                //    });
                //}, 2000);
                that._connector.registerEvent({
                    heartBeats: function (_data, _sendResponse) {
                        if (_sendResponse) {
                            _sendResponse("OK");
                            that._heartBeats = new Date();
                        }
                    }
                });
            }
            else {
                throw new Error("Spider connector component is not working!");
            }

            return that._scheduler.__init(_spider, _startRequests, _finishedUrls);
        }
        that.__pushWhenNoDuplicate = function (_request) {
            that._scheduler.__pushWhenNoDuplicate(_request);
        }
        that.__resetDuplicateCheck = function () {
            that._scheduler.__resetDuplicateCheck();
        }
        that.__push = function (_request) {
            return that._scheduler.__push(_request);
        }
        that.__poll = function () {
            return that._scheduler.__poll();
        }
        that.__shouldReserved = function (_request) {
            return that._scheduler.__shouldReserved(_request);
        }
        that.__stop = function () {
            that._scheduler._isStop = true;
        }
        that.__dispose = function () {
            that._scheduler.__dispose();
            //if (that._interval) {
                //clearInterval(that._interval);
                //delete that._interval;
            //}
            delete that._scheduler;
        }
        that.__addError = function (_request) {
            return that._scheduler.__addError(_request);
        }
        that.__addSucess = function(_request) {
            return that._scheduler.__addSucess(_request);
        }
        that.__reportStatus = function () {
            return that._scheduler.__reportStatus();
        }

        that.__getStatus = function () {
            return ((new Date() - that._heartBeats) / 1000) < 20;
        }
    }
}

//Downloader
{
    function __DownloadUnit(_option) {
        var that = this;
        that._name = _option._name;
        that._connector = _option._connector;
        that._complete = _option._complete;
        that._actions = _option._actions;
        that._delay = _option._delay || 1000;
        that._pager = _option._pager;
        that._page = _option._page;
        that._hasScroll = false;

        if (that._actions) {
            for (var _h = 0; _h < that._actions.length; _h++) {
                if (that._actions[_h].name == "scroll") {
                    that._hasScroll = true;
                    break;
                }
            }
        }

        that.__success = function (_html) {
            that._page.__setContent(_html);
            that._page._statusCode = "200";
            that._promise.done(null, true);
        };
        that.__failed = function (_error) {
            that._page.__setContent("");
            that._promise.done(_error, false);
        };

        that.__wait = function (_time) {
            that._delayPromise = new promise.Promise();
            if (!that._disposing) {
                _time = _time || 50;
                that._timeout = setTimeout(function () {
                    that._delayPromise.done();
                }, _time);
            } else that._delayPromise.done();
            return that._delayPromise;
        };
        that.__clearTimeout = function () {
            that._ondownloading = false;
            if (that._timeout) {
                clearTimeout(that._timeout);
                that._timeout = null;
            }
            if (that._delayPromise) {
                that._delayPromise.done();
                that._delayPromise = null;
            }
        };
        that.__download = function () {
            that._ondownloading = true;
            that._promise = new promise.Promise();
            var _scripts = '';//__AdapterJS;

            _scripts += "\nconsole.log(\"inject scripts\");\nvar __Pa1Pa_Name=\"" + that._name + "\";\nwindow.scroll(0,0);";
            _scripts += "\nif(window.xx){ window.xx.removeMessage();delete window.xx;}";
            _scripts += "var __Pa1Pa_Delay=" + that._delay + ";window.xx = new __ActionHelper(" + JSON.stringify(that._actions) + ", " + JSON.stringify(that._pager) + ");";
            if (!that._tabid) {
                _scripts += "\nxx.__download();";
                that._connector.invoke("createTab", { url: that._page._request._url, scripts: _scripts, identity: that._name, page: that._pager && that._pager.repeat > 0, active: that._hasScroll });
            }
            //else {
            //    that.__wait(that._delay).then(function () {
            //        if (that._ondownloading) {
            //            that._connector.invoke("executeScriptTab", that._tabid);
            //        }
            //    });
            //}
            return that._promise;
        };

        that.__dispose = function () {
            if (that._tabid) {
                that._connector.invoke("closeTab", that._tabid);
                that._tabid = null;
            }
        };
    }

    function __HttpDownloader(_option) {
        _option = _option || {};
        this._name = "http";

        this.__init = function () {

        }
        this.__download = function (_page, _site) {
            var p = new promise.Promise();
            var that = this;

            $.ajax({
                url: _page._request._url,
                type: "get",
                async: true,
                success: function (_msg) {
                    _page.__setContent(_msg);
                    _page._statusCode = 200;
                    p.done(null, true);
                },
                error: function (e) {
                    p.done(e.status, false);
                }
            });

            return p;
        }
        this.__generateHttpOptions = function (_request, _site) {
            var _option = {};
            _option._agent = false;
            _option._url = _request._url;
            _option._method = _request._method;
            _option._headers = {};
            if (_site._headers["Content-Type"] != null && _site._headers["Content-Type"] !== "NULL") {
                _option._headers["ContentType"] = "application /x-www-form-urlencoded; charset=UTF-8";
            }
            if (_site._headers["UserAgent"] != null) {
                _option._headers["UserAgent"] = _site._headers["UserAgent"];
            }
            else {
                _option._headers["User-Agent"] = (_site._userAgent === null || _site._userAgent === "") ? "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36" : _site._userAgent;
            }
            if (_request._referer != null && _request._referer !== "") {
                _option.headers["Referer"] = _request._referer;
            }
            if (_site._isUseGzip) {
                _option._headers["Accept-Encoding"] = "gzip";
            }
            if (_site._headers) {
                for (var _header in _site._headers) {
                    if (_site._headers.hasOwnProperty(_header)) {
                        _option._headers[_header._Key] = _header._Value;
                    }
                }
            }
            _option._headers["Cookie"] = _site._cookie;
            if (_option._method === "POST") {
            }
            return _option;
        }
        this.__dispose = function () {
        }
        this.__reset = function () {

        }
    }

    function __ChromeTabDownloader(_option) {
        _option = _option || {};
        var that = this;
        that._name = "js-frame-tab-engine";
        that._actions = _option._actions;
        that._delay = _option._delay || 1000;
        that._downloaders = {};
        that._disposing = false;
        that._connector = SpiderConnector.Connector;
        that._connector.registerEvent({
            setHtml: function (_data) {
                var _link = _data.link;
                var _downloader = that._downloaders[_link];
                if (_downloader) {
                    _downloader._executingTime = 0;
                    if (_data.html == "") {
                        _downloader.__failed(__resource("Page_Extract_Null"));
                    } else {
                        var _html = decodeURIComponent(_data.html);
                        _downloader.__success(_html);
                    }
                    _downloader.__dispose();
                    delete that._downloaders[_link];
                }
            },
            createTab: function (_data) {
                var _downloader = that._downloaders[_data.identity];
                if (_downloader) _downloader._tabid = _data.tab;
            },
            removeTab: function (_data) {
                for (var _pty in that._downloaders) {
                    var _downloader = that._downloaders[_pty];
                    if (_downloader._tabid == _data) {
                        _downloader.__failed(__resource("PageCloseUnexpected"));
                        delete that._downloaders[_pty];
                    }
                }
            },
            downloaderHeartBeats: function (_data) {
                console.log("downloaderHeartBeats:" + _data.link);
                var _downloader = that._downloaders[_data.link];
                if (_downloader) {
                    _downloader._executingTime = 0;
                }
            }
        });

        var _index = 0;
        that.__init = function () { }

        that.__download = function (_page, _site) {
            var _downloader = new __DownloadUnit({
                _name: "_______downloader__" + _index++,
                _connector: that._connector,
                _delay: that._delay,
                _page: _page,
                _actions: that._actions
            });
            that._downloaders[_downloader._name] = _downloader;
            return _downloader.__download();
        };
        that._interval = setInterval(function () {
            for (var _pty in that._downloaders) {
                if (that._downloaders.hasOwnProperty(_pty)) {
                    var _downloader = that._downloaders[_pty];
                    _downloader._executingTime = _downloader._executingTime || 0;
                    _downloader._executingTime += 2;

                    if (_downloader._executingTime >= 80) {
                        _downloader.__failed("timeout");
                        _downloader.__dispose();
                        delete that._downloaders[_pty];
                    }
                }
            }
        }, 2000);

        that.__dispose = function () {
            that._disposing = true;
            clearInterval(that._interval);
            for (var a in that._downloaders) {
                if (that._downloaders.hasOwnProperty(a)) {
                    that._downloaders[a].__dispose();
                    delete that._downloaders[a];
                }
            }
        }
    }

    function __ActionTabDownloader(_option) {
        _option = _option || {};
        var that = this;
        that._name = "js-tab-click-engine";
        that._actions = _option._actions || [];
        that._delay = _option._delay || 1000;
        that._disposing = false;
        that._onready = true;
        that._connector = SpiderConnector.Connector;

        __ActionTabDownloader._pageIndex = 0;
        that._id = _option._id || "___dolwnloader_" + __ActionTabDownloader._pageIndex++;

        that._connector.registerEvent({
            setHtml: function (_data) {
                that._active = new Date();
                that._downloader.__clearTimeout();
                var _link = _data.link;

                if (_data.html == "") {
                    that._downloader.__failed(__resource("Page_Extract_Null"));
                } else {
                    var _html = decodeURIComponent(_data.html);
                    that._downloader.__success(_html);
                }
            },
            createTab: function (_data) {
                that._downloader._tabid = _data.tab;
            },
            removeTab: function (_data) {
                if (that._downloader) {
                    if (that._downloader._tabid === _data) {
                        that._downloader.__failed(__resource("PageCloseUnexpected"));
                        that._onready = true;
                    }
                }
            },
            downloaderHeartBeats: function (_data) {
                that._active = new Date();
            }
        });
        that.__reset = function () {
            if (that.__pagerRepeat) {
                that._pagerRepeat = that.__pagerRepeat;
            }
        }
        if (_option._pager) {
            that._pager = $.extend({}, _option._pager);
            that._pagerRepeat = parseInt(that._pager.repeat, 10);
            that.__pagerRepeat = that._pagerRepeat;
            that._pager.repeat = 1;
        }

        that.__init = function (_spider) {
            that._spider = _spider;
        }

        that.__download = function (_page, _site) {
            if (that._disposing || that._onready === false) {
                var _tmpPromise1 = new promise.Promise();
                _tmpPromise1.done("oninit", false);
                return _tmpPromise1;
            }
            else {
                that._active = new Date();
                if (!that._downloader) {
                    that._downloader = new __DownloadUnit({
                        _name: that._id,
                        _connector: that._connector,
                        _delay: that._delay,
                        _page: _page,
                        _actions: that._actions,
                        _pager: that._pager
                    });
                    that._interval = setInterval(function () {
                        if ((new Date() - that._active) / 1000 > 120) {
                            if (that._downloader) {
                                that._downloader.__failed("timeout");
                            }
                        }
                    }, 5000);
                }
                else if (that._pager && that._pager.selector && that._pagerRepeat > 0) {
                    that._pagerRepeat--;
                }
                else {
                    console.warn("pager object is null or loop break,can not go to next page!");
                    //that._closeNormal = true;
                    var _tmpPromise2 = new promise.Promise();
                    _tmpPromise2.done("complete", false);
                    return _tmpPromise2;
                }
                return that._downloader.__download(_page);
            }
        }

        that.__dispose = function () {
            if (!that._downloader) return;
            that._disposing = true;
            if (that._downloader) that._downloader.__dispose();
            if (that._interval) clearInterval(that._interval);
            that.__reset();
            if (that._downloader) delete that._downloader;
            if (that._disposing) delete that._disposing;
            if (that._pageIndex) delete that._pageIndex;
            //if (that.__pagerRepeat) delete that.__pagerRepeat;
        }
    }

    function __LocalDownloader(_option) {
        _option = _option || {};
        var that = this;
        that._evaluator = new XPathEvaluator();
        that._name = "local-engine";
        that._actions = _option._actions || [];
        that._delay = _option._delay || 1000;
        that._disposing = false;
        that._onready = true;

        __LocalDownloader._pageIndex = 0;
        that._id = _option._id || "___dolwnloader_" + __LocalDownloader._pageIndex++;
        that._isFirst = true;
        that.__init = function (_spider) {
            that._spider = _spider;
        }

        if (_option._pager) {
            that._pager = $.extend({}, _option._pager);
            that.__pagerRepeat = that._pager.repeat;
            that._pager.repeat = 1;
        }

        that._delayBeforeRunActions = _option._delay || 1000;

        that._interval = null;
        that._timeout = 30000;
       
        that._actionFunctions = {
            scroll: function (act) {
                var p = new promise.Promise();
                if (that._disposing) { p.done(); return p; }
                var wnd = window;

                var scrollPerPix = 200;
                var doc = null;
                var scrollHeight = 0, current = 0, scrollTimes = 0;

                if (act.selector) {
                    var element = that.getElement(act, wnd);
                    if (element) {
                        doc = $(element);
                        scrollHeight = element.scrollHeight - doc.height();
                    }
                } else {
                    doc = $(wnd.document);
                    scrollHeight = doc.height() - $(wnd).height();
                }

                if (doc.length) {
                    current = doc.scrollTop();
                    scrollHeight -= current;
                    scrollTimes = parseInt(scrollHeight / scrollPerPix, 10) + (scrollHeight % scrollPerPix == 0 ? 0 : 1);
                    scrollInner();
                } else {
                    p.done();
                }

                function scrollInner() {
                    if (that._disposing) { p.done(); return; }
                    var actDelay = 100;
                    current += scrollPerPix;
                    doc.scrollTop(current);

                    if (--scrollTimes > 0) {
                        that.__wait(actDelay).then(function () {
                            scrollInner();
                        });
                    } else {
                        that.__wait(act.delay).then(function () {
                            p.done();
                        });
                    }
                }

                return p;
            },
            click: function (act) {
                if (that._disposing) return;
                var wnd = window;

                var element = act._element;
                if (!element || !$.contains(wnd.document.body, element)) {
                    var te = that.__getElements(act.selector, wnd.document);
                    if (te.length > 0) {
                        element = te[0];
                        act._element = element;
                    } else {
                        element = null;
                    }
                }

                if (!element) {
                    //console.warn("can't find click element,xpath:" + act.selector);
                    act._missClick = true;
                }
                else {
                    var currEl = $(element);
                    if (!currEl.hasClass("disabled") && !currEl.hasClass("disable") && !currEl.attr("disabled")) {
                        element.click();
                        act._missClick = false;
                    } else {
                        act._missClick = true;
                    }
                }
                var delay = act.delay;
                return that.__wait(delay);
            }
        };

        that._actionValidators = {
            scroll: function (_act) {
                var doc = _act.selector ? _act._element : document.body;
                
                if (doc.scrollHeight != _act.lastHeight) {
                    _act.lastHeight = doc.scrollHeight;
                    _act._missCount = 0;
                }
                else if (++_act._missCount >= 3) {
                    _act.repeat = 0;
                }
            },
            click: function (_act, ifr) {
                if (_act._missClick) {
                    _act.repeat = 0;
                }
            }
        };
        that.__wait = function (time) {
            if (that._disposing) return;
            time = time || 50;
            var p = new promise.Promise();
            setTimeout(function () {
                p.done();
            }, time);
            return p;
        };
        that.__doAction = function (act) {
            if (that._disposing) return;
            var p = new promise.Promise();
            var wnd = window;
            var doc = $(wnd.document);
            var delay = act.delay <= 0 ? 800 : (act.delay < 100 ? act.delay * 1000 : act.delay);
            var lastHeight = 0;
            var lastWidth = 0

            var _actTemp = {
                name: act.name,
                repeat: isNaN(act.repeat) ? 1 : act.repeat,
                delay: delay,
                selector: act.selector
            };

            function actionLoop(_act) {
                if (that._disposing) { p.done(); return };
                that._actionFunctions[_act.name](_act).then(function () {
                    if (that._disposing) { p.done(); return };
                    _act.repeat--;
                    that._actionValidators[_act.name](_act);

                    if (_act.repeat <= 0) {
                        if (_act._element) delete _act._element;
                        p.done();
                    }
                    else {
                        actionLoop(_act);
                    }
                });
            }

            if (that._actionFunctions[act.name]) {
                actionLoop(_actTemp);
            } else {
                //console.warn("unkown action, it will not be execute!");
                p.done();
            }
            return p;
        };
        that.__execteScript = function (page) {
            var p = new promise.Promise();
            if (that._disposing) { p.done(null, false); return p; }
            var functions = [];
            for (var _a = 0; _a < that._actions.length; _a++) {
                functions.push(function (act) {
                    var _act = act;
                    return function () {
                        window.scroll(0, 0);
                        return that.__doAction(_act);
                    }
                }(that._actions[_a]));
            }
           
            promise.chain(functions).then(function () {
                if (that._disposing) { p.done(null, false); return; }
                var doc = window.document.documentElement.outerHTML;
                page.__setContent(doc);
                page._statusCode = 200;
                p.done(null, true);
            });
            return p;
        };
        that.__getElements = function (xpath, doc) {
            var arr = [];
            try {
                var elements = that._evaluator.evaluate(xpath, doc.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

                if (elements) {
                    var el;
                    while (el = elements.iterateNext()) {
                        arr.push(el);
                    }
                }
            }
            catch (e) {
                console.error(e);
                console.warn("xpath:" + xpath + ",get no elements!");
            }
            return arr;
        };
        that.__download = function (_page, _site) {
            if (that._disposing || that._onready === false) {
                var _tmpPromise1 = new promise.Promise();
                _tmpPromise1.done("oninit", false);
                return _tmpPromise1;
            }
            else {
                var _tmpPromise2 = new promise.Promise();
                
                if (that._isFirst) {
                    that._isFirst = false;
                    that.__execteScript(_page).then(function () {
                        _tmpPromise2.done(null, true);
                    });
                }
                else {
                    if (that._pager && that._pager.selector && that.__pagerRepeat > 0) {
                        that.__doAction(that._pager).then(function () {
                            that.__pagerRepeat--;
                            that.__execteScript(_page).then(function () {
                                if (that._pager._missClick) {
                                    that._pagerRepeat = 0;
                                }
                                _tmpPromise2.done(null, true);
                            });
                        });
                    }
                    else {
                        var _tmpPromise2 = new promise.Promise();
                        _tmpPromise2.done("complete", false);
                    }
                }
                
                return _tmpPromise2;
            }
        }

        that.__dispose = function () {
            if (!that._downloader) return;
            that._disposing = true;
        }
    }
}

//Logger
{
    function __ConsoleLogger(_option) {
        _option = _option || {};
        this._logTime = _option._logTime !== false;
        this._timeFormat = _option._timeFormat || "yyyy-MM-dd hh:mm:ss";
        this.__log = function (_info, _level) {
            var p = new promise.Promise();
            var _str = "";
            if (this._logTime) {
                _str += "[" + new Date().format(this._timeFormat) + "]"
            }
            _str += _info;
            if (_level == "warn") {
                console.warn(_str);
            }
            else if (_level == "error") {
                console.error(_str);
            }
            else {
                console.log(_str);
            }

            p.done();
            return p;
        }
        this.__info = function (_info) {
            return this.__log(_info, "info");
        };
        this.__warn = function (_info) {
            return this.__log(_info, "warn");
        };
        this.__error = function (_info) {
            return this.__log(_info, "error");
        };
    }
    function __WebLogger(_option) {
        _option = _option || {};
        this._logTime = _option._logTime !== false;
        this._showCount = _option._showCount || 10;
        this._timeFormat = _option._timeFormat || "yyyy-MM-dd hh:mm:ss";
        this._appender = "#" + __CrawlerLogId;
        this.__setStyle = function (_el, _level) {
            if (_level == "warn") {
                _el.css("color", "#AE9C74");
                _el.css("background-color", "#fffbe6");
                _el.css("border", "1px solid #fff5c2");
            } else if (_level == "error") {
                _el.css("color", "#ff4646");
                _el.css("background-color", "#FFF0F0");
                _el.css("border", "1px solid #FFD7D7");
            } else {
                _el.css("color", "#000");
            }
            _el.css("padding-left", "3px");
            _el.css("text-align", "left");
            _el.css("font-size", "12px");
            _el.css("line-height", "20px");
            _el.css("font-family", "'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif,微软雅黑");
        };
        this.__log = function (_info, _level) {
            var p = new promise.Promise();
            var _el = $(this._appender);
            if (_el.length) {
                var _tagName = _el.get(0).tagName == "UL" ? "li" : "div";
                var _item = $("<" + _tagName + ">" + "</" + _tagName + ">");
                this.__setStyle(_item, _level);
                var _msg = "";
                if (this._logTime) {
                    _msg += "[" + new Date().format(this._timeFormat) + "]：";
                }
                _msg += _info;
                _item.text(_msg);
                if (_el.children().length >= this._showCount) {
                    _el.children().eq(0).remove();
                }
                _el.append(_item);
            }
            p.done();
            return p;
        };
        this.__info = function (_info) {
            return this.__log(_info, "info");
        };
        this.__warn = function (_info) {
            return this.__log(_info, "warn");
        };
        this.__error = function (_info) {
            return this.__log(_info, "error");
        };
    }

    function __SocketLogger(_option) {
        _option = _option || {};
        this.__webSocket = _option.__webSocket;
        this.__log = function (_log, _level) {
            var p = new promise.Promise();
            if (this.__webSocket) {
                try {
                    this.__webSocket.__invoke("log", _log, _level);
                } catch (e) {
                    console.log(e);
                }

            }
            p.done();
            return p;
        };
        this.__info = function (_log) {
            return this.__log(_log, "info");
        };
        this.__warn = function (_log) {
            return this.__log(_log, "warn");
        };
        this.__error = function (_log) {
            return this.__log(_log, "error");
        };
    }
    function __HttpLogger(_option) {
        _option = _option || {};
        this._url = _option._url;
        this._taskName = _option._taskName;
        this.__log = function (_log, _level) {
            var p = new promise.Promise();
            $.ajax({
                data: {
                    taskName: this._taskName,
                    log: _log,
                    level: _level
                },
                url: this._url,
                type: "post",
                dataType: "json",
                success: function () {
                    p.done();
                },
                error: function () {
                    p.done();
                }
            });
            return p;
        };
        this.__info = function (_log) {
            return this.__log(_log, "info");
        };
        this.__warn = function (_log) {
            return this.__log(_log, "warn");
        };
        this.__error = function (_log) {
            return this.__log(_log, "error");
        };
    }
}

//transport center
{
    function __WebSocketCenter(_option) {
        this._url = _option._url;
        this._taskId = _option._taskId;
        this._dataHub = _option._dataHub;

        var that = this;

        that._socketConnection = $.hubConnection(that._url, {
            logging: false,
            qs: {
                taskId: that._taskId
            }
        });
        that.contosoCrawlerHubProxy = that._socketConnection.createHubProxy(that._dataHub);
        $(that._socketConnection).bind("onStateChanged", function (_connection, _state) {
            if (_state.newState == 4) {
                that._connected = false;
                setTimeout(function () {
                    that.__connect();
                }, 500);
            }
        });
        function _registerEvents(_eventObject) {
            for (var _evtName in _eventObject) {
                if (_eventObject.hasOwnProperty(_evtName) && typeof (_eventObject[_evtName] == 'function')) {
                    that.contosoCrawlerHubProxy.on(_evtName, _eventObject[_evtName]);
                }
            }
        }

        _registerEvents({
            exit: function (_message) {
                that.__exit(_message);
            }
        });
        that.__connect();

        that._interval = setInterval(function () {
            that.__invoke("keepAlive", that._taskId);
        }, 5000);
    }

    __WebSocketCenter.prototype = {
        __connect: function () {
            var that = this;
            if (that._connected) return;
            that._socketConnection.start({ transport: ['webSockets'], waitForPageLoad: false }).done(function () {
                that._connected = true;
            }).fail(function () {
                that._connected = false;
            });
        },
        __exit: function (_info) {
            var that = this;

            that.__invoke("exit", that._taskId);
            setTimeout(function () {
                that.__stop();
            }, 2000);
        },
        __stop: function () {
            this._stop = true;
            this._socketConnection.stop();
            clearInterval(that._interval);
        },
        __invoke: function (_methodName) {
            //console.log("invoking " + _methodName);
            var _state = this.contosoCrawlerHubProxy.connection.state;
            if (_state != 4) {
                var _args = Array.prototype.slice.call(arguments, 0);
                this.contosoCrawlerHubProxy.invoke.apply(this.contosoCrawlerHubProxy, _args);
            }
            else {
                //console.log("invoking function" + _methodName + "faild, the connection is not connected!");
            }
        }
    };

    function __DataCenter(_option) {
        this._url = _option._url;
        this._taskId = _option._taskId;
        this._taskName = _option._taskName;
        this._query = _option._query;
        this._connected = false;
        this._dataHub = _option._dataHub;
        this._option = _option._option;
        this._authed = false;
        this._events = {};
        this._callbackFunc = [];
        this._retryOnFailed = 5;
        this._regryCount = 0;

        var that = this;
        that.__createConnection();
        this.__onReady = function (_cb, _target) {
            _target = _target || that;
            if (that._connected && that._authed) {
                _cb.apply(_target);
            }
            else {
                that._callbackFunc.push({
                    _callback: _cb,
                    _target: _target,
                    _args: Array.prototype.slice.call(arguments, 2)
                });
            }
        }
    }

    __DataCenter.prototype = {
        __createConnection: function () {
            var that = this;
            var _optionsArr = [];
            _optionsArr.push(that._query);
            _optionsArr.push(__encryptedString(__rsaKey, __aesKey));

            that._socketConnection = $.hubConnection(that._url, {
                logging: true,
                useDefaultPath: false,
                qs: {
                    taskId: that._taskId,
                    options: _optionsArr.join('|'),
                    taskName: that._taskName
                }
            });
            that.contosoCrawlerHubProxy = that._socketConnection.createHubProxy(that._dataHub);
            $(that._socketConnection).bind("onStateChanged", function (_connection, _state) {
                console.log("connection state changed,new state:" + _state.newState);
                if (!that._connected) return;
                if (_state.newState == 4) {
                    that.__exit();
                }
            });
            function _registerEvents(_eventObject) {
                for (var _evtName in _eventObject) {
                    if (_eventObject.hasOwnProperty(_evtName) && typeof (_eventObject[_evtName] == 'function')) {
                        that.contosoCrawlerHubProxy.on(_evtName, _eventObject[_evtName]);
                    }
                }
            }

            _registerEvents({
                authed: function (r) {
                    that._authed = r.Success;
                    that._connected = r.Success;
                    that.__fireEvent("authed", r);
                    if (r.Success) {
                        that.__execute();
                    } else {
                        that.__exit();
                    }
                },
                exit: function (_message) {
                    that.__exit(_message);
                }
            });
        },
        __connect: function () {
            var that = this;
            that._socketConnection.start({ transport: ['webSockets'], waitForPageLoad: false }).done(function () {
                that._connected = true;
            }).fail(function () {
                if (that._regryCount++ < that._retryOnFailed) {
                    console.log("try reconnect:" + that._regryCount);
                    setTimeout(function () {
                        that.__createConnection();
                        that.__connect();
                    }, 2000);
                }
                else that.__fireEvent("connectFailed");
            });
        },
        __exit: function (_info) {
            var that = this;
            that.__fireEvent("exit", _info);
            that.__stop();
        },
        __stop: function () {
            this._connected = false;
            this._authed = false;
            var p = new promise.Promise();
            this._socketConnection.stop();
            p.done();
            return p;
        },
        __execute: function () {
            var that = this;
            while (that._callbackFunc.length) {
                try {
                    var _evtObject = that._callbackFunc.pop();
                    _evtObject._callback.apply(_evtObject._target, _evtObject._args);
                }
                catch (e) {
                    //console.log(e);
                }
            }
        },
        __invoke: function (_methodName) {
            var _state = this.contosoCrawlerHubProxy.connection.state;
            if (_state != 4) {
                var _arguments = Array.prototype.slice.call(arguments, 0);
                if (_state == 2 || _state == 3) {
                    this._callbackFunc.push({
                        _callback: this.contosoCrawlerHubProxy.invoke,
                        _target: this.contosoCrawlerHubProxy,
                        _args: _arguments
                    });
                }
                else {
                    this.__execute();
                    var _args = Array.prototype.slice.call(arguments, 0);
                    this.contosoCrawlerHubProxy.invoke.apply(this.contosoCrawlerHubProxy, _args);
                }
            }
            else {
                if (this._connected) {
                    this._connected = false;
                    this._authed = false;
                    this.__exit();
                }
            }
        },
        __status: function (_status, _data) {
            return this.__invoke("Status", _status, _data);
        },
        __fireEvent: function (_evtName) {
            var that = this;
            var _args = Array.prototype.slice.call(arguments, 1);
            if (that._events && that._events[_evtName]) {
                var _func = that._events[_evtName];
                if (_func && _func.length > 0) {
                    for (var a = 0; a < _func.length; a++) {
                        try {
                            _func[a]._callback.apply(_func[a]._target || that, _args);
                        }
                        catch (e) {
                        }
                    }
                }
            }
        },
        __registerEvent: function (_evtName, _cb, _eventTarget) {
            if (typeof _cb == "function") {
                if (!this._events[_evtName]) {
                    this._events[_evtName] = [];
                }
                this._events[_evtName].push({
                    _target: _eventTarget,
                    _callback: _cb
                });
            }
        }
    };
}

//Spider
{
    function __ModelSpider(_context, _option) {
        var that = this;
        __Region = _option.region || "zh-CN";

        if (_context.removeHash === true) {
            __Request._removeHash = true;
        }

        if (_context.dataVerify === true) {
            __Request._dataVerify = true;
        }
		
        that._runtime = _option.runtime || "web";
        that._redisOptions = _option.redis; //{host,port,password}
        that._runInServer = _option.environment == "server";
        that._mainId = _option.mainId;
        _option._isTest = _option.isTest || false;
        _option._resumeable = _option.resumeable || false;

        if (_option.onlyCurrent && _context.crawlerMode != "auto") {
            that._onlyCurrent = true;
            _context.emptySleepTime = 3000;
        }
        //if (_option.onlyCurrent) {
            //_context.crawlerMode = "click";
            //_context.emptySleepTime = 3000;
        //}

        that._taskObject = $.extend({
            speed: 500,
            downloader: "http",
            scheduler: { name: "queue" }
        }, _context);

        that.__verifySpider(that._taskObject);
        that._taskName = that._taskObject.name;
        that._identity = that._taskName;
        that._option = _option;
    }

    __ModelSpider.prototype = {
        __verifySpider: function (_context) {

            if (!_context.name || !_context.name.trim()) {
                throw __resource("Name_Not_Null");
            }


            _context.speed = parseFloat(_context.speed.toString(), 10);
            if (isNaN(_context.speed) || _context.speed < 500) {
                throw __resource("Speed_Uncorrect");
            }

            if (!_context.pipelines || !_context.pipelines.length) {
                throw __resource("Pipeline_Is_Necessary");
            }

            if (_context.site && _context.site.startRequests && _context.site.startRequests.length) {
                for (var a = 0; a < _context.site.startRequests.length; ++a) {
                    var _url = encodeURI(_context.site.startRequests[a].url);
                    if (!__UrlRegex().test(_url)) {
                        throw __resource("Start_Url") + _url + __resource('Invalid_Url');
                    }
                }
            } else {
                throw __resource('Start_Url_Is_Necessary');
            }

            if (!_context.entities || !_context.entities.length) {
                throw __resource('Entity_Is_Necessary');
            }

            var _entityNames = {};
            for (var b = 0; b < _context.entities.length; ++b) {
                var _entityName = _context.entities[b].name;
                if (!_entityName || !_entityName.trim()) {
                    throw __resource('Entity_Name_Null');
                }
                if (_entityNames[_entityName]) {
                    throw __resource('Entity_Name_Repeat');
                }
                else {
                    _entityNames[_entityName] = _entityName;
                }
            }

            if (_context.actions && _context.actions.length > 0) {
                for (var _idx = 0; _idx < _context.actions.length; _idx++) {
                    if (_context.actions[_idx].name == "scroll") this._hasScroll = true;
                    if (isNaN(_context.actions[_idx].repeat) || _context.actions[_idx].repeat < 0) {
                        throw __resource("Action_Repeat_Invalid");
                    }
                }
            }

            return true;
        },
        __generateSite: function (_siteContext) {
            var _option = {};
            _option._arguments = _siteContext._arguments || {};
            if ($.inArray(["utf8", "gbk"], _siteContext._encoding) != -1) {
                _option._encodingName = _siteContext._encoding;
            }
            if ($.inArray([0, 1], _siteContext._contentType) != -1) {
                _option._contentType = _siteContext._contentType;
            }
            if (_siteContext._userAgent && _siteContext._userAgent.trim()) {
                _option._userAgent = _siteContext._userAgent;
            }
            if (_siteContext._accept && _siteContext._accept.trim()) {
                _option._accept = _siteContext._accept;
            }
            if (!isNaN(_siteContext._timeout) && _siteContext._timeout >= 3000 && _siteContext._timeout < 100000) {
                _option._timeout = _siteContext._timeout;
            }

            if (!isNaN(_siteContext.cycleRetryTimes) && _siteContext.cycleRetryTimes >= 0 && _siteContext.cycleRetryTimes < 100) {
                _option._cycleRetryTimes = _siteContext.cycleRetryTimes;
            }
            _option._isUserGzip = _siteContext._isUserGzip === true;

            var _site = new __Site(_option);
            if (!this._option._resumeable) {
                for (var a = 0; a < _siteContext.startRequests.length; ++a) {
                    var _request = _siteContext.startRequests[a];
                    if (_request.pageRule) {
                        var pageRule = _request.pageRule,
                            _start = Number(pageRule.startPageIndex),
                            _end = Number(pageRule.endPageIndex),
                            _aggreate = Number(pageRule.pageIndexInterval);

                        if (isNaN(_start) || isNaN(_end) || isNaN(_aggreate) || !pageRule.pageIndexParam) {
                            throw __resource("PageRuleNotValid");
                        }

                        for (; _start <= _end; _start += _aggreate) {
                            var pagerPattern = pageRule.pageIndexParam.replace(/[0-9]+/, "[0-9]+");
                            var newPager = pageRule.pageIndexParam.replace(/[0-9]+/, _start);
                            var pagerRegex = new RegExp(pagerPattern);
                            var currentPager = _request.url.match(pagerRegex);
                            var newUrl = _request.url.replace(currentPager, newPager);
                            _site.__addStartUrl(newUrl, _request.extra);
                        }
                    }
                    else _site.__addStartUrl(_request.url, _request.extra);
                }
            }

            return _site;
        },
        __generateScheduler: function (_scheduler, _option) {
            var _schedulerArr = {
                "queue": __QueueDuplicateRemovedScheduler,
                "tabmessage": __TabMessageScheduler
            };
            if (!_schedulerArr[_scheduler.name]) {
                throw "not supported scheduler : " + _scheduler.name;
            }

            return new _schedulerArr[_scheduler.name]($.extend(_scheduler, _option));
        },
        __generatePipeline: function (_pipelineName, _option) {
            var _pipelineArr = {
                "webElement": __EntityWebElementPipeline,
                "console": __EntityConsolePipeline,
                "websocket": __EntityWebSockectPipeline,
                "tabmessage": __TabMessagePipeline,
				"indexdb":__IndexDBPipeline
            };
            if (!_pipelineArr[_pipelineName]) {
               throw __resource['Invalid'] + " " + __resource['Pipeline'];
            }
            return new _pipelineArr[_pipelineName](_option);
        },
        __generateDownloader: function (_dName, _option) {
            if (_option._onlyCurrent) {
                return new __LocalDownloader(_option);
            }
            var _downloaderName = _dName;
            var _downloaderArr = {
                "http": __HttpDownloader,
                //"js-frame-auto-engine": __ChromePluginDownloader,
                "js-frame-auto-engine": __ChromeTabDownloader,
                //"js-frame-click-engine": __ActionDownloader,
                //"js-tab-auto-engine": __ChromeTabDownloader,
                "js-frame-click-engine": __ActionTabDownloader,
                "js-tab-auto-engine": __ChromeTabDownloader,
                "js-tab-click-engine": __ActionTabDownloader
            };
            if (!_downloaderArr[_downloaderName]) {
                throw __resource['Invalid'] + " " + __resource['Downloader'];
            }

            return new _downloaderArr[_downloaderName](_option);
        },
        __exit: function () {
            this._spider.__exit();
        },
        __run: function () {
            var that = this;
            var _taskObject = that._taskObject;
            var _options = that._option;

            if (that._runInServer == true) {
                for (var x = 0; x < _taskObject.pipelines.length; ++x) {
                    if (_taskObject.pipelines[x].name == "tabmessage") {
                        that._runInServer = false;
                        break;
                    }
                }
            }

            try {
                that._spider = new __Spider({
                    _taskName: that._taskName,
                    _taskId: _options.taskId,
                    _speed: _taskObject.speed,
                    _options: _options.options,
                    _onlyCurrent: _options.onlyCurrent || false,
                    _deep: _taskObject.deep,
                    _log: _taskObject.log,
                    _crawlerMode: _taskObject.crawlerMode,
                    _skipWhenResultIsEmpty: _taskObject.skipWhenResultIsEmpty || false,
                    _query: _options.query,
                    _websocketUrl: _options.webSocket,
                    _isTest: _options.isTest,
                    _emptySleepTime: _taskObject.emptySleepTime,
                    _dataHub: _taskObject.dataHub,
                    _hasScroll: that._hasScroll,
                    _taskObject: that._taskObject,
                    _runInServer: that._runInServer,
                    _mainId: that._mainId,
                    _site: _taskObject.site,
                    _events: _options.events
                });

                var _site = that.__generateSite(_taskObject.site);
                that._spider.__setSite(_site)
                    .__setPageProcessor(new __EntityProcessor(_site, _taskObject))
                    .__setScheduler(that.__generateScheduler(_taskObject.scheduler, _options))
                    .__setDownloader(that.__generateDownloader(_taskObject.downloader, {
                        _delay: _taskObject.site.delayBeforeRunActions,
                        _actions: _taskObject.actions,
                        _pager: that._taskObject.pager,
                        _onlyCurrent: that._onlyCurrent
                    }));
            

                for (var a = 0; a < _taskObject.entities.length; ++a) {
                    var _entity = _taskObject.entities[a];
                    var _entityName = _entity.alias || _entity.name;
                    var _pipelinesArr = [];
                    var _webElementPipelineExist = false;

                    for (var b = 0; b < _taskObject.pipelines.length; ++b) {
                        var _pipelineContext = $.extend({
                            _entity: _entity,
                            _batch: _options.batch,
                            _isTest: _options.isTest//,
                            //_resumeable: _options._resumeable
                        }, _taskObject.pipelines[b]);

                        _pipelinesArr.push(that.__generatePipeline(_pipelineContext.name, _pipelineContext));

                        if (!_webElementPipelineExist && _taskObject.pipelines[b].name == "_webElement") {
                            _webElementPipelineExist = true;
                        }
                    }

                    if (_options.isTest && !_webElementPipelineExist) {
                        _pipelinesArr.push(that.__generatePipeline("webElement", {
                            _entity: _entity,
                            _isTest: _options.isTest//,
                            //_resumeable: _options._resumeable
                        }));
                    }

                    this._spider.__addPipeline(new __EntityPipeline({
                        _entityName: _entityName,
                        _pipelines: _pipelinesArr,
                        _isTest: _options.isTest//,
                        //_resumeable: _options._resumeable
                    }));
                }

                that._spider.__run();
            }
            catch (e) {
                that._spider && that._spider.__exit(e);
            }
        },
        __getStatus: function () {
            return this._spider._stat;
        }
    };

    function __Spider(_options) {
        _options = _options || {};
        var that = this;
        that._runInServer = _options._runInServer;
        that._name = _options._taskName;
        that._mainId = _options._mainId;
        that._taskObject = _options._taskObject;
        that._crawlerMode = _options._crawlerMode || "auto";
        that._identity = that._name;
        that._site = _options._site;
        that._startRequests = that._site.startRequests;
        that._finishedUrls = that._site.finishedUrls;
        that._stat = SpiderStatus.Init;
        that._skipWhenResultIsEmpty = false;
        that._spawnUrl = true;
        that._speed = _options._speed || 1000;
        that._deep = _options._deep || 0;
        that._onlyCurrent = _options._onlyCurrent;
        that._pipelines = [];
        that._emptySleepTime = _options._emptySleepTime || 30000;
        that._init = false;
        that._isTest = _options._isTest || false;
        that._events = _options._events || {};

        that._maxDownloadCount = _options._hasScroll ? 1 : that._crawlerMode == "auto" ? 3 : 1;
        //that._maxDownloadCount = $.inArray(that._taskObject.downloader, ["http", "js-frame-auto-engine"]) >= 0 ? 3 : 1;
        that._options = _options;

        that._eventsArray = {
            InitSuccess: "InitSuccess",
            OnClose: "OnClose",
            OnError: "OnError",
            OnSuccess: "OnSuccess"
        };

        that._logger = new __getLogger();

        if (!_options._log) {
            _options._log = { console: false };
        }
        else _options._log.console = (that._isTest === true);

        if (_options._log.console == true || _options._log.Console == true) {
            that._logger.__append(new __ConsoleLogger());
        }

        that._logger.__append(new __WebLogger());

        that._logger.__info(__resource('Start_Crawler'));

        if (_options._log.http) {
           
        }
    }

    __Spider.prototype = {
        __checkIfRunning: function () {
            if (this._stat === SpiderStatus.Running) {
                throw __resource('Spider_Is_Running');
            }
            return this;
        },
        __setSpeed: function (_number) {
            if (isNaN(_number)) {
                throw __resource('Speed_Uncorrect');
            }
            this._speed = _number;
            return this;
        },
        __setEmptySleepTime: function (_emptySleepTime) {
            if (_emptySleepTime >= 1000) {
                this._emptySleepTime = _emptySleepTime;
            }
            else {
                throw __resource('Sleep_Time_Uncorrect');
            }
            return this;
        },
        __addStartRequests: function (_startRequests) {
            this.__checkIfRunning();
            for (var a = 0; a < _startRequests.length; ++a) {
                this._startRequests.push(_startRequests[a]);
            }
            return this;
        },
        __addStartRequest: function (_startRequest) {
            this.__checkIfRunning();
            this._startRequests.push(_startRequest);
            return this;
        },
        __addStartUrls: function (_startUrls) {
            this.__checkIfRunning();
            for (var a = 0; a < _startUrls.length; ++a) {
                this.__addStartUrl(_startUrls[a]);
            }
            return this;
        },
        __addStartUrl: function (_startUrl) {
            this.__checkIfRunning();
            this._startRequests.push(new __Request({
                _url: _startUrl,
                _grade: 1
            }));
            return this;
        },
        __addPipeline: function (_pipeline) {
            this.__checkIfRunning();
            //if (!pipeline.hasOwnProperty("__process") || typeof pipeline.__process !== 'function') {
            //	throw this.__resource('Pipeline_Uncorrect');
            //}
            this._pipelines.push(_pipeline);
            return this;
        },
        __clearPipeline: function () {
            this.__checkIfRunning();
            this.__pipelines.length = 0;
            return this;
        },
        __setSite: function (_site) {
            this.__checkIfRunning();
            this._site = _site || new __Site();
            this._startRequests = this._site._startRequests;
            return this;
        },
        __setScheduler: function (_scheduler) {
            this.__checkIfRunning();
            //if (!scheduler.poll) {
            //	throw this.__resource('Scheduler_Uncorrect');
            //}
            this._scheduler = _scheduler;
            return this;
        },
        __setPageProcessor: function (_pageProcessor) {
            this.__checkIfRunning();
            //if (!pageProcessor.constructor.name.endsWith("Processor")) {
            //	throw this.__resource('Processor_Uncorrect');
            //}
            this._pageProcessor = _pageProcessor;
            return this;
        },
        __setDownloader: function (_downloader) {
            this.__checkIfRunning();
            //if (!downloader.download) {
            //	throw this.__resource('Downloader_Uncorrect');
            //}
            this._downloader = _downloader;
            return this;
        },
        __initComponent: function () {
            var that = this;
            if (that._init) return;

            if (!that._pageProcessor) {
                that.__exit(__resource('Processor_Is_Null')); return;
            }
            if (!that._pipelines.length) {
                that.__exit(__resource('Pipeline_Is_Necessary')); return;
            }

            if (!that._scheduler) {
                that._scheduler = new __QueueDuplicateRemovedScheduler({ _isTest: that._isTest });
            }

            that._pageProcessor._site = that._site;
            try {
                if (that._scheduler._pushStartUrl !== false) {
                    if (!that._startRequests || !that._startRequests.length) {
                        that._logger.__warn(__resource('No_Start_Urls'));
                    }
                    that._scheduler.__init(that, that._startRequests, that._finishedUrls);
                }
                //else if (that._scheduler._resumeable && that._finishedUrls) {
                //    that._scheduler.__init(that, that._startRequests, that._finishedUrls);
                //} else {
                    that._scheduler.__init(that);
                //}

                if (!that._downloader) {
                    that._downloader = new __HttpDownloader();
                }
                that._downloader.__init(that);
                for (var a = 0; a < that._pipelines.length; ++a) {
                    that._pipelines[a].__init(that);
                }
                that._init = true;
                that.__fireEvent(that._eventsArray.InitSuccess, that);
            } catch (e) {
                that.__exit(__resource('Init_Failed'));
            }
        },
        __fireEvent: function (_evtName) {
            var that = this;
            var _args = Array.prototype.slice.call(arguments, 1);
            if (that._events && that._events[_evtName]) {
                var _func = that._events[_evtName];
                if (_func.push) {
                    for (var a = 0; a < _func.length; a++) {
                        if (typeof _func[a] == "function") {
                            _func[a].apply(that._eventTarget, _args);
                        }
                    }
                } else {
                    _func.apply(that._eventTarget, _args);
                }
            }
        },
        __turnNext: function () {
            this._turnNextStartUrl = true;
        },
        __run: function () {
            var that = this;
            that.__checkIfRunning();
            //that.monitor.start();
            that._startTime = that._startTime || new Date();

            that.__initComponent();
            that._stat = SpiderStatus.Running;
            that._isExited = false;
            that._waitTimes = 0;
            that._processCount = 0;
            that._currentDownloadCount = 0;

            that._waitTimesMax = that._emptySleepTime / that._speed;

            if (that._crawlerMode == "auto") {
                that.__processRequest = function (_request) {
                    if (!_request) return;
                    if (that._stat !== SpiderStatus.Running) return;
                    that._processCount++;
                    try {
                        var _page = new __Page({
                            _request: _request,
                            _contentType: that._site._contentType
                        });
                        that._downloader.__download(_page, that._site).then(function (_error, _result) {
                            function __retry(_request) {
                                var _np = null;
                                if (that._site._cycleRetryTimes > 0) {
                                    _np = that.__addToCycleRetry(_request, that._site);
                                } else {
                                    that.__onError(_request);
                                }
                                if (_np) {
                                    if (_np._isNeedCycleRetry) {
                                        that.__extractAndAddRequests(_np, true);
                                    }
                                    else if (!_np._missTargetUrls) {
                                        if (!(that._skipWhenResultIsEmpty && np._resultItems._isSkip)) {
                                            that.__extractAndAddRequests(_np, that._spawnUrl);
                                        }
                                    }
                                }
                            }

                            that._currentDownloadCount--;
                            if (!_result) {
                                __retry(_request);
                                var _msg = __resource('Download') + ': ' + _request._url + ' ' + __resource('Failed');
                                if (_error) {
                                    _msg += ':' + _error;
                                } else {
                                    _msg += ".";
                                }
                                that._logger.__error(_msg);
                            }
                            else {
                                if (_page._resultItems._isSkip) {
                                    that.__onSucess(_request);
                                    return;
                                }
                                that._pageProcessor.__process(_page);
                                if (!_page) {
                                    that.__onError(_request);
                                }
                                else {
                                    if (_page._isNeedCycleRetry) {
                                        that.__extractAndAddRequests(_page, true);
                                        return;
                                    }
                                    if (!_page._missTargetUrls) {
                                        if (!(that._skipWhenResultIsEmpty && _page._resultItems._isSkip)) {
                                            that.__extractAndAddRequests(_page, that._spawnUrl);
                                        }
                                    }
                                    if (!_page._resultItems._isSkip || _page._targetRequests.length > 0) {
                                        if (_page._resultItems.__hasValue()) {
                                            that._logger.__info(__resource('Crawler') + ": " + _page._request._url + " " + __resource("Success") + ".");
                                            for (var b = 0; b < that._pipelines.length; ++b) {
                                                that._pipelines[b].__process(_page._resultItems, that);
                                            }
                                        }
                                        that.__onSucess(_page._request);
                                    }
                                    else {
                                        that._logger.__info(__resource('Crawler') + ": " + _page._request._url + " " + __resource("Success") + ", " + __resource("Page_Extract_Null"));
                                        __retry(_request);
                                    }
                                }
                            }
                            that._processCount--;
                        });
                    }
                    catch (e) {
                        that.__onError(_request);
                        that._logger.__error(__resource('Crawler') + " " + _request._url + " " + __resource("Failed") + ", " + __resource("Message") + ": " + e);
                        that._processCount--;
                    }
                };
            }
            else {
                that.__processRequest = function (_request) {
                    if (!_request) return;
                    var _page = new __Page({
                        _request: _request,
                        _contentType: that._site._contentType
                    });
                    var _downloader = that._downloader;
                    _downloader._page = _page;
                    __download(_downloader);

                    function __download(_downloader) {
                        if (that._stat !== SpiderStatus.Running) return;
                        _downloader._pageIndex = _downloader._pageIndex || 1;
                        var _page = _downloader._page;
                        var _request = _page._request;
                        _downloader.__download(_page, that._site).then(function (_error, _result) {
                            if (!_result) {
                                if (_error !== "complete") {
                                    that._logger.__error(__resource('Download') + ': ' + _request._url + " [" + _downloader._pageIndex + "] " + __resource('Failed') + '.');
                                    if (_error) {
                                        that._logger.__error(_error);
                                    }
                                }
                                //console.log("5. invoking _disposing...");
                                _downloader.__dispose();
                                that._currentDownloadCount--;
                                return;
                            }
                            else {
                                that._pageProcessor.__process(_page);
                                if (!_page) {
                                    that.__onError(_request);
                                } else {
                                    if (!_page._resultItems._isSkip || _page._targetRequests.length > 0) {
                                        if (_page._resultItems.__hasValue()) {
                                            that._logger.__info(__resource('Crawler') + ": " + _page._request._url + " [" + _downloader._pageIndex + "] " + __resource("Success") + ".");
           
                                            for (var b = 0; b < that._pipelines.length; ++b) {
                                                that._pipelines[b].__process(_page._resultItems, that);
                                            }
                                            if (that._turnNextStartUrl) {
                                                that._turnNextStartUrl = false;
                                                that._currentDownloadCount--;
                                                _downloader.__dispose();
                                                return;
                                            }
                                        }
                                        _page._resultItems.__clearData();
                                    }
                                    else {
                                        that._logger.__info(__resource('Crawler') + ": " + _page._request._url + " [" + _downloader._pageIndex + "] " + __resource("Success") + ", " + __resource("Page_Extract_Null"));
                                    }
                                    that.__onSucess(_page._request);
                                }
                            }

                            if (_page._resultItems._isSkip) {
                                _downloader.__dispose();
                                that._currentDownloadCount--;
                                return;
                            }

                            if (that._isTest == true && _downloader._pageIndex >= 5) {
                                _downloader.__dispose();

                                that._currentDownloadCount--;
                                return;
                            }
                            if (that._taskObject._pager) {
                                if (that._taskObject._pager.repeat < _downloader._pageIndex) {
                                    _downloader.__dispose();

                                    that._currentDownloadCount--;
                                    return;
                                }
                            }
                            
                            _downloader._pageIndex++
                            __download(_downloader, _page);
                        });
                    }
                };
            }

            that._monitor = new __StatusMonitor(that);
			__innerProcess();
			that._monitor.__start();

            that._connector = SpiderConnector.Connector;
            that._connector.isRunning = true;

            if (that._scheduler._selfValidate) {
                that._connector.registerEvent({
                    parentComplete: function () {
                        that._parentComplete = true;
                        that._logger.__info("关联任务已运行完成!");
                    }
                });
            }

            function __sleep() {
                var p = new promise.Promise();
                setTimeout(function () {
                    p.done();
                }, that._speed);
                return p;
            }

            function __checkStatus(_err, _request) {
                if (_err) { that._logger.__error(_err); console.error(_err); }
                if (_request) {
                    that._waitTimes = 0;
                }
                else {
                    if (that._currentDownloadCount == 0 && that._processCount == 0) {
                        that._waitTimes++;
                        var _info;

                        if (that._scheduler._selfValidate) {
                            if (!that._scheduler.__getStatus()) {
                                _info = that._parentComplete ? null : __resource("HeartBeatsTimeout");

                                that._stat = SpiderStatus.Finished;
                                that._monitor.__stop();
                                if (!that._isExited) {
                                    that._isComplete = that._parentComplete;
                                    if (_info) that._logger.__error(_info);
                                    that.__exit();
                                }
                            }
                        }
                        else if (that._waitTimes > that._waitTimesMax) {
                            that._stat = SpiderStatus.Finished;
                            that._monitor.__stop();
                            if (!that._isExited) {
                                that._isComplete = true;
                                that.__exit();
                            }
                        }
                    }
                }
            }

            var _showInterval = 0;
            function __innerProcess() {
                if (that._isExited) return;
                __sleep().then(function () {
                    _showInterval += that._speed;
                    if (that._downloader._onlock === true) {
                        if (_showInterval > 5000) {
                            _showInterval = 0;
                            //console.log("Downloader is locked....");
                        }
                    }
                    else {
                        //.log("current/max = " + that._currentDownloadCount + "/" + that._maxDownloadCount);
                        if (that._currentDownloadCount < that._maxDownloadCount) {
                            that._scheduler.__poll().then(function (_err, _request) {
                                if (_request) {

                                    that._currentDownloadCount++;
                                }
                                __checkStatus(_err, _request);
                                try {
                                    if (_request) {
                                        that.__processRequest(_request);
                                    }
                                }
                                catch (e) {
                                    console.error(e);
                                }
                            });
                        }
                        else {
                            if (that._maxDownloadCount > 1) {
                                if (_showInterval > 5000) {
                                    _showInterval = 0;
                                    //console.log("Download queue is full...");
                                }
                            }
                        }
                    }
                    __innerProcess();
                });
            }
        },
        __onClose: function () {
            var that = this;
            if (that._monitor) that._monitor.__stop();
            that.__fireEvent(that._eventsArray.OnClose, that);
            if (that._scheduler) {
                that._scheduler.__resetDuplicateCheck(that);
                if (that._scheduler.__dispose) {
                    that._scheduler.__dispose();
                }
            }
            if (that._downloader) {
                if (that._downloader.__dispose) {
                    that._downloader.__dispose();
                }
            }

            if (that._setPageProcessor) {
                if (that._pageProcessor.__dispose) {
                    that._pageProcessor.__dispose();
                }
            }
        },
        __onError: function (_request) {
            var that = this;
            if (that._scheduler) that._scheduler.__addError(_request);
            that.__fireEvent(that._eventsArray.OnError, _request);
        },
        __onSucess: function (_request) {
            var that = this;
            if (that._scheduler) that._scheduler.__addSucess(_request);
            that.__fireEvent(that._eventsArray.OnSuccess, _request);
        },
        __exit: function (_info) {
            var that = this;
            if (that._isExited) return;
            that._isExited = true;
            if (that._stat == SpiderStatus.Exited) return;

            if (_info) that._logger.__error(_info);
            var _time = ((new Date() - that._startTime) / 1000);
            if (that._stat === SpiderStatus.Finished) {
                that._logger.__info(__resource('Task') + " " + that._name + " " + __resource("Finished") + " , " + __resource("Cost_Time") + ": " + _time + " " + __resource("Second") + ".");
            }
            else if (that._stat === SpiderStatus.Stopped) {
                that._logger.__info(__resource('Task') + " " + that._name + " " + __resource("Stoped") + " , " + __resource("Cost_Time") + ": " + _time + " " + __resource("Second") + ".");
            }
            else {
                that._logger.__info(__resource('Task') + " " + that._name + " " + __resource("Exited") + " , " + __resource("Cost_Time") + ": " + _time + " " + __resource("Second") + ".");
            }

            that._stat = SpiderStatus.Exited;

            that._logger.__setDisable(true);

            for (var _t = 0; _t < that._pipelines.length; _t++) {
                that._pipelines[_t].__complete(that._isComplete);
            }

            that.__onClose();

            if (that._isTest !== true) {
                setTimeout(function () {
                    SpiderConnector.Connector.isRunning = false;
                    layer.closeAll();
                    SpiderMonitor.__invoke("exit");
                }, 5000);
            }
        },
        __addToCycleRetry: function (_request) {
            var that = this;
            var _page = new __Page({
                _request: _request,
                _contentType: that._site._contentType
            });
            var _cycleTriedTimesObject = _request.__getExtra(__Request._cycleTriedTimes);
            if (!_cycleTriedTimesObject) {
                _request._priority = 0;
                _request.__putExtra(__Request._cycleTriedTimes, 1);
                _page.__addTargetRequest(_request);
            }
            else {
                var _cycleTriedTimes = _cycleTriedTimesObject;
                _cycleTriedTimes++;
                if (_cycleTriedTimes <= that._site._cycleRetryTimes) {
                    _request._Priority = 0;
                    _request.__putExtra(__Request._cycleTriedTimes, _cycleTriedTimes);
                    _page.__addTargetRequest(_request);
                } else {
                    return null;
                }
            }
            _page._isNeedCycleRetry = true;
            return _page;
        },
        __extractAndAddRequests: function (_page, _spawnUrl) {
            var that = this;
            if (_spawnUrl && (that._deep > 0 ? (_page._request._depth + 1) < that._deep : true) && _page._targetRequests != null && _page._targetRequests.length > 0) {
                for (var a = 0; a < _page._targetRequests.length; ++a) {
                    that._scheduler.__push(_page._targetRequests[a], this);
                }
            }
        },
        __clearStartRequests: function () {
            this._startRequests.length = 0;
        },
        __reportStatus: function () {
            var that = this;
            var p = new promise.Promise();
            this._scheduler.__reportStatus().then(function (_err, _status) {
                if (_status) {
                    p.done(null, that._stat, _status);
                }
            });
            return p;
        }
    }
}

//Site
{
    function __Site(_options) {
        _options = _options || {};
        var that = this;
        that._startRequests = [];
        that._contentType = _options._contentType || 0;
        that._domain = null;
        that._encodingName = _options._encodingName || '';
        that._headers = _options._headers || {};
        that._arguments = _options._arguments || {};
        that._userAgent = _options._userAgent || null;
        that._accept = _options._accept || null;
        that._timeout = 5000;
        that._acceptStatCode = [200];
        that._sleepTime = _options._sleepTime || 200;
        that._cycleRetryTimes = _options._cycleRetryTimes || 0;
        that._cookie = _options._cookie;
        that._proxy = _options._proxy;
        that._isUseGzip = _options._isUseGzip || false;
    }

    __Site.prototype = {
        __clearStartRequests: function () {
            this._startRequests.length = 0;
            return this;
        },
        __addStartUrl: function (_startUrl, _extras) {
            this.__addStartRequest(new __Request({
                _url: _startUrl,
                _grade: 1,
                _extras: _extras || {}
            }));
            return this;
        },
        __addStartUrls: function (_startUrls) {
            for (var a = 0; a < _startUrls.length; ++a) {
                this.__addStartUrl(_startUrls[a]);
            }
            return this;
        },
        __addStartRequest: function (_request) {
            this._startRequests.push(_request);
            return this;
        },
        __addHeader: function (_key, _value) {
            this._headers[_key] = _value;
            return this;
        },
        __setEncodingName: function (_name) {
            this._encodingName = _name;
            return this;
        }
    };
}

//Request
{
    function __Request(_options) {
        _options = _options || {};
        _options._url = _options._url || '';
        var that = this;

        that._url = __Request._removeHash ? _options._url.replace(/#.*/, '') : _options._url;
        that._referer = _options._referer || null;
        that._origin = _options._origin || null;
        that._priority = _options._priority || 0;
        that._extras = _options._extras || {};
        that._method = _options._method || "GET";
        that._postBody = _options._postBody || null;
        that._depth = _options._grade || _options._grad || 0;
        that._name = _options._name;
        //that._hash = _options._hash || that.__identity();

        that.__identity = function () {
            return __md5Hash.hd5(that._url + that._postBody);
        }
        that.__putExtra = function (_k, _v) {
            if (_k) {
                that._extras[_k] = _v;
            }
            return that;
        }
        that.__getExtra = function (_key) {
            return that._extras[_key];
        }
        that.__existExtra = function (_key) {
            return that._extras.hasOwnProperty(_key);
        }
        that.__toJObject = function () {
            return {
                _url: that._url,
                _referer: that._referer,
                _origin: that._origin,
                _priority: that._priority,
                _extras: that._extras,
                _method: that._method,
                _postBody: that._postBody,
                _depth: that._depth,
                _name: that._name
            };
        }
        that.__toString = function () {
            return JSON.stringify(that.__toJObject());
        }

        if (_options._extras) {
            for (var p in _options._extras) {
                if (_options._extras.hasOwnProperty(p)) {
                    that.__putExtra(p, _options._extras[p]);
                }
            }
        }
        that.__putExtra(__Request._cycleTriedTimes, 0);
    }
    __Request._cycleTriedTimes = "_cycleTriedTimes";
    __Request._statusCode = "02d71099-b897-49dd-a180-55345fe9abfc";
    __Request._proxy = "6f09c4d6-167a-4272-8208-8a59bebdfe33";
    __Request._removeHash = false;
    __Request.__getIdentity = function (_url, _postBody) {
        _postBody = _postBody || null;
        return __md5Hash.hd5(_url + _postBody);
    }
    __Request.__parse = function (_json) {
        var o = JSON.parse(_json);
        return new __Request(o);
    };
    __Request._dataVerify = false;
}

//Page
{
    function __Page(_options) {
        var that = this;
        that._request = _options._request;
        that._contentType = _options._contentType || 0;

        that._content = _options._content;
        that._targetUrl = _options._targetUrl;
        that._title = _options._title;
        that._isNeedCycleRetry = _options._isNeedCycleRetry || false;
        that._resultItems = new __ResultItems();
        that._resultItems._request = that._request;
        that._statusCode = null;
        that._padding = null;
        that._missTargetUrls = false;
        that._targetRequests = [];
        that.__addResultItem = function (_k, _v) {
            that._resultItems.__addOrUpdateResultItem(_k, _v);
        }

        that.__setContent = function (_html) {
            that._content = _html
            that._selectable = null;
        }

        that.__selectable = function () {
            if (!that._selectable) {
                if (that._selectable = that._contentType === 0) {
                    var _url = $("head base").attr("href");
                    if (_url) {
                        if (_url.charAt(0) == '/' && _url.charAt(1) == '/') {
                            _url = that._request._url.split(':')[0] + ':' + _url;
                        }
                    }
                    else _url = that._request._url;
                    that._selectable = new __Selectable(that._content, _url, that._contentType);
                }
                else {
                    that._selectable = new __Selectable(that._content, that._padding, that._contentType);
                }
            }

            return that._selectable;
        }
        that.__addTargetRequests = function (_requests) {
            for (var a = 0; a < _requests.length; ++a) {
                that.__addTargetRequest(_requests[a]);
            }
        }
        that.__addTargetUrls = function (_urls, _priority) {
            for (var a = 0; a < _urls.length; ++a) {
                var u = _urls[a];
                if (!u || u === "#" || u.startsWith("javascript:")) {
                    continue;
                }
                var _req = new __Request({
                    _url: __absolutizeURI(u, that._request._url),
                    _grade: that._request._depth + 1,
                    _extras: that._request._extras,
                    _priority: _priority
                })
                that._targetRequests.push(_req);
            }
        }
        that.__addTargetUrl = function (_url) {
            if (!_url || _url === "#" || _url.startsWith("javascript:")) return;
            that._targetRequests.push(new __Request({
                _url: __absolutizeURI(_url, that._request_url),
                _grade: that._request._depth + 1,
                _extras: that._request._extras
            }));
        }
        that.__addTargetRequest = function (_req) {
            that._targetRequests.push(_req);
        }
    }
    __Page.images = "580c9065-0f44-47e9-94ea-b172d5a730c0";
}

appendLink(chrome.extension.getURL("css/layer.css"), "__p1p_layer");
function appendLink(url, id) {
	if (id && $('#' + id).length) return;
	var link = document.createElement('link');
	if (id) {
		link.setAttribute("id", id);
	}
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", url);
	document.getElementsByTagName("head")[0].appendChild(link);
}