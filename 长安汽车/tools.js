const rpn = require('request-promise-native');
const uuid = require("uuid")

tools = {}

tools.md5 = function (str) {
    return v(h(f(m(str), 8 * str.length)))
}

tools.http = async function (options) {
    let res = await rpn(options);
    return res
}

tools.uuid = function () {
    return uuid.v4()
}

tools.random = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}

tools.sleep = function (ms) {
    return new Promise(resolve=>setTimeout(resolve, ms))
}

function v(t) {
    var e, n, r = "0123456789abcdef", i = "";
    for (n = 0; n < t.length; n += 1)
        e = t.charCodeAt(n),
            i += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
    return i
}

function h(t) {
    var e, n = "", r = 32 * t.length;
    for (e = 0; e < r; e += 8)
        n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return n
}
function f(t, e) {
    var n, r, i, o, s;
    t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
    var f = 1732584193
        , h = -271733879
        , m = -1732584194
        , p = 271733878;
    for (n = 0; n < t.length; n += 16)
        r = f,
            i = h,
            o = m,
            s = p,
            f = u(f, h, m, p, t[n], 7, -680876936),
            p = u(p, f, h, m, t[n + 1], 12, -389564586),
            m = u(m, p, f, h, t[n + 2], 17, 606105819),
            h = u(h, m, p, f, t[n + 3], 22, -1044525330),
            f = u(f, h, m, p, t[n + 4], 7, -176418897),
            p = u(p, f, h, m, t[n + 5], 12, 1200080426),
            m = u(m, p, f, h, t[n + 6], 17, -1473231341),
            h = u(h, m, p, f, t[n + 7], 22, -45705983),
            f = u(f, h, m, p, t[n + 8], 7, 1770035416),
            p = u(p, f, h, m, t[n + 9], 12, -1958414417),
            m = u(m, p, f, h, t[n + 10], 17, -42063),
            h = u(h, m, p, f, t[n + 11], 22, -1990404162),
            f = u(f, h, m, p, t[n + 12], 7, 1804603682),
            p = u(p, f, h, m, t[n + 13], 12, -40341101),
            m = u(m, p, f, h, t[n + 14], 17, -1502002290),
            h = u(h, m, p, f, t[n + 15], 22, 1236535329),
            f = c(f, h, m, p, t[n + 1], 5, -165796510),
            p = c(p, f, h, m, t[n + 6], 9, -1069501632),
            m = c(m, p, f, h, t[n + 11], 14, 643717713),
            h = c(h, m, p, f, t[n], 20, -373897302),
            f = c(f, h, m, p, t[n + 5], 5, -701558691),
            p = c(p, f, h, m, t[n + 10], 9, 38016083),
            m = c(m, p, f, h, t[n + 15], 14, -660478335),
            h = c(h, m, p, f, t[n + 4], 20, -405537848),
            f = c(f, h, m, p, t[n + 9], 5, 568446438),
            p = c(p, f, h, m, t[n + 14], 9, -1019803690),
            m = c(m, p, f, h, t[n + 3], 14, -187363961),
            h = c(h, m, p, f, t[n + 8], 20, 1163531501),
            f = c(f, h, m, p, t[n + 13], 5, -1444681467),
            p = c(p, f, h, m, t[n + 2], 9, -51403784),
            m = c(m, p, f, h, t[n + 7], 14, 1735328473),
            h = c(h, m, p, f, t[n + 12], 20, -1926607734),
            f = l(f, h, m, p, t[n + 5], 4, -378558),
            p = l(p, f, h, m, t[n + 8], 11, -2022574463),
            m = l(m, p, f, h, t[n + 11], 16, 1839030562),
            h = l(h, m, p, f, t[n + 14], 23, -35309556),
            f = l(f, h, m, p, t[n + 1], 4, -1530992060),
            p = l(p, f, h, m, t[n + 4], 11, 1272893353),
            m = l(m, p, f, h, t[n + 7], 16, -155497632),
            h = l(h, m, p, f, t[n + 10], 23, -1094730640),
            f = l(f, h, m, p, t[n + 13], 4, 681279174),
            p = l(p, f, h, m, t[n], 11, -358537222),
            m = l(m, p, f, h, t[n + 3], 16, -722521979),
            h = l(h, m, p, f, t[n + 6], 23, 76029189),
            f = l(f, h, m, p, t[n + 9], 4, -640364487),
            p = l(p, f, h, m, t[n + 12], 11, -421815835),
            m = l(m, p, f, h, t[n + 15], 16, 530742520),
            h = l(h, m, p, f, t[n + 2], 23, -995338651),
            f = d(f, h, m, p, t[n], 6, -198630844),
            p = d(p, f, h, m, t[n + 7], 10, 1126891415),
            m = d(m, p, f, h, t[n + 14], 15, -1416354905),
            h = d(h, m, p, f, t[n + 5], 21, -57434055),
            f = d(f, h, m, p, t[n + 12], 6, 1700485571),
            p = d(p, f, h, m, t[n + 3], 10, -1894986606),
            m = d(m, p, f, h, t[n + 10], 15, -1051523),
            h = d(h, m, p, f, t[n + 1], 21, -2054922799),
            f = d(f, h, m, p, t[n + 8], 6, 1873313359),
            p = d(p, f, h, m, t[n + 15], 10, -30611744),
            m = d(m, p, f, h, t[n + 6], 15, -1560198380),
            h = d(h, m, p, f, t[n + 13], 21, 1309151649),
            f = d(f, h, m, p, t[n + 4], 6, -145523070),
            p = d(p, f, h, m, t[n + 11], 10, -1120210379),
            m = d(m, p, f, h, t[n + 2], 15, 718787259),
            h = d(h, m, p, f, t[n + 9], 21, -343485551),
            f = a(f, r),
            h = a(h, i),
            m = a(m, o),
            p = a(p, s);
    return [f, h, m, p]
}
function a(t, e) {
    var n = (65535 & t) + (65535 & e)
        , r = (t >> 16) + (e >> 16) + (n >> 16);
    return r << 16 | 65535 & n
}
function o(t, e) {
    return t << e | t >>> 32 - e
}
function s(t, e, n, r, i, s) {
    return a(o(a(a(e, t), a(r, s)), i), n)
}
function u(t, e, n, r, i, a, o) {
    return s(e & n | ~e & r, t, e, i, a, o)
}
function c(t, e, n, r, i, a, o) {
    return s(e & r | n & ~r, t, e, i, a, o)
}
function l(t, e, n, r, i, a, o) {
    return s(e ^ n ^ r, t, e, i, a, o)
}
function d(t, e, n, r, i, a, o) {
    return s(n ^ (e | ~r), t, e, i, a, o)
}
function m(t) {
    var e, n = [];
    for (n[(t.length >> 2) - 1] = void 0,
        e = 0; e < n.length; e += 1)
        n[e] = 0;
    var r = 8 * t.length;
    for (e = 0; e < r; e += 8)
        n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return n
}

module.exports = tools