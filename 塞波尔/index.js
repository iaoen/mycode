class e {
    static encrypt(t) {
        let r = [];
        for (var n = 0; n < t.length; n++) {
            const e = t.charCodeAt(n);
            e < 128 ? r.push(e) : e > 127 && e < 2048 ? (r.push(e >> 6 | 192), r.push(63 & e | 128)) : (r.push(e >> 12 | 224), r.push(e >> 6 & 63 | 128), r.push(63 & e | 128))
        }
        return h(e.rc4(r))
    }
    static decrypt(t) {
        const r = a(t),
            n = e.rc4(r);
        let c = "",
            o = 0,
            s = 0,
            u = 0,
            h = 0;
        for (; o < n.length;) s = n[o],
            s < 128 ? (c += String.fromCharCode(s), o++) : s > 194 && s < 224 ? (u = n[o + 1], c += String.fromCharCode((31 & s) << 6 | 63 & u), o += 2) : (u = n[o + 1], h = n[o + 2], c += String.fromCharCode((15 & s) << 12 | (63 & u) << 6 | 63 & h), o += 3);
        return c
    }
    static rc4(t) {
        let r = [],
            n = 0,
            c = 0,
            o = [];
        for (let t = 0; t < 256; t++) r[t] = t;
        for (let t = 0; t < 256; t++) n = (n + r[t] + e.k.charCodeAt(t % e.k.length)) % 256,
            c = r[t],
            r[t] = r[n],
            r[n] = c;
        let s = 0,
            a = 0;
        for (let e = 0; e < t.length; e++) s = (s + 1) % 256,
            a = (a + r[s]) % 256,
            c = r[s],
            r[s] = r[a],
            r[a] = c,
            o.push(t[e] ^ r[(r[s] + r[a]) % 256]);
        return o
    }
}
e.k = "wn8zhuVXTbhs",
    e.kn = "wn8z2huVX5Tbhs",
    e.c = "wn8zh56uVXTbhs";
let n = [],
    c = [];
const o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let t = 0, r = s.length; t < r; ++t) n[t] = s[t],
    c[s.charCodeAt(t)] = t;
function a(t) {
    let r,
        e = function (t) {
            const r = t.length;
            if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            let e = t.indexOf("=");
            return - 1 === e && (e = r),
                [e, e === r ? 0 : 4 - e % 4]
        }(t),
        n = e[0],
        s = e[1],
        a = new o(function (t, r, e) {
            return 3 * (r + e) / 4 - e
        }(0, n, s)),
        u = 0,
        h = s > 0 ? n - 4 : n,
        i = 0;
    for (i = 0; i < h; i += 4) r = c[t.charCodeAt(i)] << 18 | c[t.charCodeAt(i + 1)] << 12 | c[t.charCodeAt(i + 2)] << 6 | c[t.charCodeAt(i + 3)],
        a[u++] = r >> 16 & 255,
        a[u++] = r >> 8 & 255,
        a[u++] = 255 & r;
    return 2 === s && (r = c[t.charCodeAt(i)] << 2 | c[t.charCodeAt(i + 1)] >> 4, a[u++] = 255 & r),
        1 === s && (r = c[t.charCodeAt(i)] << 10 | c[t.charCodeAt(i + 1)] << 4 | c[t.charCodeAt(i + 2)] >> 2, a[u++] = r >> 8 & 255, a[u++] = 255 & r),
        a
}
function u(t, r, e) {
    let c,
        o = [];
    for (let a = r; a < e; a += 3) c = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]),
        o.push(n[(s = c) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
    var s;
    return o.join("")
}
function h(t) {
    let r,
        e = t.length,
        c = e % 3,
        o = [],
        s = 16383;
    for (let r = 0, n = e - c; r < n; r += s) o.push(u(t, r, r + s > n ? n : r + s));
    return 1 === c ? (r = t[e - 1], o.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === c && (r = (t[e - 2] << 8) + t[e - 1], o.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")),
        o.join("")
}
c["-".charCodeAt(0)] = 62;
c["_".charCodeAt(0)] = 63;

// decrypt,encrypt
console.log(e.decrypt('wIAULjCm12v4vesGJM9qHItTiJGDQJiNC/ONGoejIfNG/Pm1wL+ma4CHtIznAYeJE2gWtC0U0RRB+v8RyCsRYQ0AyP9J7/02BgiFI93Wy2x/rkwkX5QjEHOR8OoixKvl0W2+EAmRXzHJBYkQEGCJDMpxBIRKfcO4YQG8ySKpljYxWYVO12jdf+CTK/8Wh8VRoA+9i54PHiR3i4B5bIC6AlttvTiL/xXwI/oCNa6BD4v/Frd5Kq9ChFN5l0RfysIKqBcnSP0BSIoBMbAzQ+mo3wvSiWSznJCbcUpCrQ2ZBEBihJNWKKQn9ci+PVkQ7IucGoBmGlsNcMsTuQ39cJeoX44LiV4hyVwh1fRjsw0aZeORTdzInvfLwOeUVc4fIgjwxjK08s3qKov+pVz5FDRrh3osviMV8vmdBi+/ok1xC4ut3gwgLEaYHB1fd7nKCSX7TpicDJuZ2HneC6tWfW5NobNqaB4Rp+pwy/eI5hQ6oh6+4ScOCf3txBPt7n3CCwLz2tamf+8fwrHZRdAm9dfHOnIM9K0iSlLL6DYcONtndmF+hWVp1sL346yMQIhM9t4q'));