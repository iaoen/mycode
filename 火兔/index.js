window = global;

const CryptoJS = require('crypto-js');

// 导出webpack "_mm"函数 (极简优化)
! function e(t, r) {
    var out = {};

    function o(s) {
        if (!r[s]) {
            t[s][0].call(out, function (e) {
                var r = t[s][1][e];
                return o(r || e)
            }, out, out, e, t, r, {})
        }
        return out
    }
    window._mm = out;
    return o(2)
}({
    1: [function (e, t, r) { }],
    2: [function (e, n, i) {
        "use strict";

        function o() {
            return "object" == typeof t && "object" == typeof t.versions && void 0 !== t.versions.node
        }

        function a(e) {
            return e instanceof Uint8Array && (!o() || !r.isBuffer(e))
        }

        function s(e) {
            return e instanceof ArrayBuffer
        }

        function u(e) {
            return !!o() && r.isBuffer(e)
        }
        var f = e("./snappy_decompressor")
            .SnappyDecompressor,
            c = e("./snappy_compressor")
                .SnappyCompressor,
            l = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
        i.uncompress = function (e) {
            if (!a(e) && !s(e) && !u(e)) throw new TypeError(l);
            var t = !1,
                n = !1;
            a(e) ? t = !0 : s(e) && (n = !0, e = new Uint8Array(e));
            var i, o, c = new f(e),
                d = c.readUncompressedLength();
            if (-1 === d) throw new Error("Invalid Snappy bitstream");
            if (t) {
                if (i = new Uint8Array(d), !c.uncompressToBuffer(i)) throw new Error("Invalid Snappy bitstream")
            } else if (n) {
                if (i = new ArrayBuffer(d), o = new Uint8Array(i), !c.uncompressToBuffer(o)) throw new Error("Invalid Snappy bitstream")
            } else if (i = r.alloc(d), !c.uncompressToBuffer(i)) throw new Error("Invalid Snappy bitstream");
            return i
        }, i.compress = function (e) {
            if (!a(e) && !s(e) && !u(e)) throw new TypeError(l);
            var t = !1,
                n = !1;
            a(e) ? t = !0 : s(e) && (n = !0, e = new Uint8Array(e));
            var i, o, f, d = new c(e),
                h = d.maxCompressedLength();
            return t ? (i = new Uint8Array(h), f = d.compressToBuffer(i)) : n ? (i = new ArrayBuffer(h), o = new Uint8Array(i), f = d.compressToBuffer(o)) : (i = r.alloc(h), f = d.compressToBuffer(i)), i.slice(0, f)
        }
    }, {
        "./snappy_compressor": 3,
        "./snappy_decompressor": 4
    }],
    3: [function (e, t, r) {
        "use strict";

        function n(e, t) {
            return 506832829 * e >>> t
        }

        function i(e, t) {
            return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24)
        }

        function o(e, t, r) {
            return e[t] === e[r] && e[t + 1] === e[r + 1] && e[t + 2] === e[r + 2] && e[t + 3] === e[r + 3]
        }

        function a(e, t, r, n, i) {
            return r <= 60 ? (n[i] = r - 1 << 2, i += 1) : r < 256 ? (n[i] = 240, n[i + 1] = r - 1, i += 2) : (n[i] = 244, n[i + 1] = r - 1 & 255, n[i + 2] = r - 1 >>> 8, i += 3),
                function (e, t, r, n, i) {
                    var o;
                    for (o = 0; o < i; o++) r[n + o] = e[t + o]
                }(e, t, n, i, r), i + r
        }

        function s(e, t, r, n) {
            return n < 12 && r < 2048 ? (e[t] = 1 + (n - 4 << 2) + (r >>> 8 << 5), e[t + 1] = 255 & r, t + 2) : (e[t] = 2 + (n - 1 << 2), e[t + 1] = 255 & r, e[t + 2] = r >>> 8, t + 3)
        }

        function u(e, t, r, n) {
            for (; n >= 68;) t = s(e, t, r, 64), n -= 64;
            return n > 64 && (t = s(e, t, r, 60), n -= 60), s(e, t, r, n)
        }

        function f(e, t, r, s, f) {
            for (var c = 1; 1 << c <= r && c <= l;) c += 1;
            var h = 32 - (c -= 1);
            void 0 === d[c] && (d[c] = new Uint16Array(1 << c));
            var p, _ = d[c];
            for (p = 0; p < _.length; p++) _[p] = 0;
            var E, g, v, y, m, S, b, A, O, T, C = t + r,
                w = t,
                I = t,
                R = !0;
            if (r >= 15)
                for (E = C - 15, v = n(i(e, t += 1), h); R;) {
                    S = 32, y = t;
                    do {
                        if (g = v, b = S >>> 5, S += 1, y = (t = y) + b, t > E) {
                            R = !1;
                            break
                        }
                        v = n(i(e, y), h), m = w + _[g], _[g] = t - w
                    } while (!o(e, t, m));
                    if (!R) break;
                    f = a(e, I, t - I, s, f);
                    do {
                        for (A = t, O = 4; t + O < C && e[t + O] === e[m + O];) O += 1;
                        if (t += O, f = u(s, f, A - m, O), I = t, t >= E) {
                            R = !1;
                            break
                        }
                        _[n(i(e, t - 1), h)] = t - 1 - w, m = w + _[T = n(i(e, t), h)], _[T] = t - w
                    } while (o(e, t, m));
                    if (!R) break;
                    v = n(i(e, t += 1), h)
                }
            return I < C && (f = a(e, I, C - I, s, f)), f
        }

        function c(e) {
            this.array = e
        }
        var l = 14,
            d = new Array(l + 1);
        c.prototype.maxCompressedLength = function () {
            var e = this.array.length;
            return 32 + e + Math.floor(e / 6)
        }, c.prototype.compressToBuffer = function (e) {
            var t, r = this.array,
                n = r.length,
                i = 0,
                o = 0;
            for (o = function (e, t, r) {
                do {
                    t[r] = 127 & e, (e >>>= 7) > 0 && (t[r] += 128), r += 1
                } while (e > 0);
                return r
            }(n, e, o); i < n;) o = f(r, i, t = Math.min(n - i, 65536), e, o), i += t;
            return o
        }, r.SnappyCompressor = c
    }, {}],
    4: [function (e, t, r) {
        "use strict";

        function n(e, t, r, n, i) {
            var o;
            for (o = 0; o < i; o++) r[n + o] = e[t + o]
        }

        function i(e, t, r, n) {
            var i;
            for (i = 0; i < n; i++) e[t + i] = e[t - r + i]
        }

        function o(e) {
            this.array = e, this.pos = 0
        }
        var a = [0, 255, 65535, 16777215, 4294967295];
        o.prototype.readUncompressedLength = function () {
            for (var e, t, r = 0, n = 0; n < 32 && this.pos < this.array.length;) {
                if (e = this.array[this.pos], this.pos += 1, (t = 127 & e) << n >>> n !== t) return -1;
                if (r |= t << n, e < 128) return r;
                n += 7
            }
            return -1
        }, o.prototype.uncompressToBuffer = function (e) {
            for (var t, r, o, s, u = this.array, f = u.length, c = this.pos, l = 0; c < u.length;)
                if (t = u[c], c += 1, 0 == (3 & t)) {
                    if ((r = 1 + (t >>> 2)) > 60) {
                        if (c + 3 >= f) return !1;
                        o = r - 60, r = 1 + ((r = u[c] + (u[c + 1] << 8) + (u[c + 2] << 16) + (u[c + 3] << 24)) & a[o]), c += o
                    }
                    if (c + r > f) return !1;
                    n(u, c, e, l, r), c += r, l += r
                } else {
                    switch (3 & t) {
                        case 1:
                            r = 4 + (t >>> 2 & 7), s = u[c] + (t >>> 5 << 8), c += 1;
                            break;
                        case 2:
                            if (c + 1 >= f) return !1;
                            r = 1 + (t >>> 2), s = u[c] + (u[c + 1] << 8), c += 2;
                            break;
                        case 3:
                            if (c + 3 >= f) return !1;
                            r = 1 + (t >>> 2), s = u[c] + (u[c + 1] << 8) + (u[c + 2] << 16) + (u[c + 3] << 24), c += 4
                    }
                    if (0 === s || s > l) return !1;
                    i(e, l, s, r), l += r
                } return !0
        }, r.SnappyDecompressor = o
    }, {}]
}, {})

function arrayBufferToBase64(arrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer);
    let base64String = '';
    for (let i = 0; i < uint8Array.length; i++) {
        base64String += String.fromCharCode(uint8Array[i]);
    }
    return btoa(base64String);
}

function arrayBufferToString(r) {
    var e = new Array(128)
        , t = String.fromCodePoint || String.fromCharCode
        , n = [];
    var i, a, o = r.length;
    n.length = 0;
    for (var s = 0; s < o;)
        (a = r[s++]) <= 127 ? i = a : a <= 223 ? i = (31 & a) << 6 | 63 & r[s++] : a <= 239 ? i = (15 & a) << 12 | (63 & r[s++]) << 6 | 63 & r[s++] : String.fromCodePoint ? i = (7 & a) << 18 | (63 & r[s++]) << 12 | (63 & r[s++]) << 6 | 63 & r[s++] : (i = 63,
            s += 3),
            n.push(e[i] || (e[i] = t(i)));
    return n.join("")
}

function encodeData(key, data) {
    // 随机时间戳
    var my_call_id = Math.random() + "_" + Date.now()
    var data = data.replaceAll("my_call_id", my_call_id)

    // 压缩转base64
    var T = _mm.compress(Buffer.from(data));
    var R = arrayBufferToBase64(T);

    // 加密
    var D = CryptoJS.enc.Base64.parse(R);
    var L = CryptoJS.enc.Base64.parse(key);
    var E = CryptoJS.AES.encrypt(D, L, { iv: L, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return E.ciphertext.toString()
}

function decodeData(key, hexString) {
    // 解密
    let arr = CryptoJS.enc.Hex.parse(hexString);
    let D = CryptoJS.enc.Base64.stringify(arr);
    var L = CryptoJS.enc.Base64.parse(key);
    let E = CryptoJS.AES.decrypt(D, L, { iv: L, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });

    // 转为buffer 解压缩 转string
    var P = Buffer.from(E.toString(), 'hex');
    var N = _mm.uncompress(P);
    var R = arrayBufferToString(N);

    // 处理response
    return R.replace(/\s*/g, "").match(/{.*}/g)[0]
}


// console.log(encodeData("tJqgOb4oUttFlQijvN6s8Q==", '{"method":"GET","header":[{"key":"x-wx-exclude-credentials","value":"unionid, clou.......}'))

// console.log(decodeData("tJqgOb4oUttFlQijvN6s8Q==", "f91ec80dfd9fe137f7c06846b5937086706701cf61f3806d4829490739a0dffc02c84bfe39e228a83c6ff2ac1252283f71f139fc0b9e53ca1bb9d2ee8973de61262640580f067dca76f9db8369e857a15100daf85aa876eff70d936e8541bf75"))
