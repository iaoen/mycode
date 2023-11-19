function nn(e, t) {
    for (var a = 0; a < t.length - 2; a += 3) {
        var o = t.charAt(a + 2);
        o = o >= "a" ? o.charCodeAt(0) - 87 : Number(o),
        o = "+" === t.charAt(a + 1) ? e >>> o : e << o,
        e = "+" === t.charAt(a) ? e + o & 4294967295 : e ^ o
    }
    return e
}
function sign(e) {
    var t = "320305.131321201"
      , o = e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);
    if (null === o) {
        var i = e.length;
        i > 30 && (e = "" + e.substr(0, 10) + e.substr(Math.floor(i / 2) - 5, 10) + e.substr(-10, 10))
    } else {
        for (var n = e.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/), r = 0, s = n.length, c = []; s > r; r++)
            "" !== n[r] && c.push.apply(c, a(n[r].split(""))),
            r !== s - 1 && c.push(o[r]);
        var l = c.length;
        l > 30 && (e = c.slice(0, 10).join("") + c.slice(Math.floor(l / 2) - 5, Math.floor(l / 2) + 5).join("") + c.slice(-10).join(""))
    }
    var u = void 0
      , d = "" + String.fromCharCode(103) + String.fromCharCode(116) + String.fromCharCode(107);
    u = null !== t ? t : (t = window[d] || "") || "";
    for (var f = u.split("."), g = Number(f[0]) || 0, p = Number(f[1]) || 0, v = [], m = 0, b = 0; b < e.length; b++) {
        var h = e.charCodeAt(b);
        128 > h ? v[m++] = h : (2048 > h ? v[m++] = h >> 6 | 192 : (55296 === (64512 & h) && b + 1 < e.length && 56320 === (64512 & e.charCodeAt(b + 1)) ? (h = 65536 + ((1023 & h) << 10) + (1023 & e.charCodeAt(++b)),
        v[m++] = h >> 18 | 240,
        v[m++] = h >> 12 & 63 | 128) : v[m++] = h >> 12 | 224,
        v[m++] = h >> 6 & 63 | 128),
        v[m++] = 63 & h | 128)
    }
    for (var w = g, A = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(97) + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(54), k = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(51) + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(98) + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(102), x = 0; x < v.length; x++)
        w += v[x],
        w = nn(w, A);
    return w = nn(w, k),
    w ^= p,
    0 > w && (w = 2147483648 + (2147483647 & w)),
    w %= 1e6,
    w.toString() + "." + (w ^ g)
}

console.log(sign("klAt3PN+0fSAuAejde6To4CgGl4/YWfab+qiBZbEgu0xQQm/i28UGnoLMmNB3WOxNVenP+DbHCJr7bQrKRynwjeB6+2R7dMv+aeoMU+4OHHnA9HsANHjdeh+uDWDgcBAC8BbPsm0XYj0F/8xYvJAQO0NHzSWRvRo4EGHgWKJvmA5jHfqqNeTu7ya3kFlTjV1GyYKlvMLqPHlLiEU/4PZc84I5hErPjkM2TileNdX+0rfCcscdsssgL6aSLft15DGgOVLXaNkK0VpNENGLP5xdGzQbeohe8fXM78xLs/HJT7VkvFe1Jn5IQMNE9UwZFZQiN0Z5VlHk5lLc5lxtP90jJMejVKJbgxO0CHNk9SflG30gRaS0kp0BvyplKQrAnu9glFutRRLrzi22N/rWzRh3G3y4kD/2dfReQFx2Bmap7dtM+JYMl4lV1l61LmPtTybD7T4/r3h+nDd88DWQq6MT8tgB5QRXntFNrd4xGeBnzY/VAwzyyyC7N5hXmYrGwSmVLVcbjCmAnFhSVh1/P0bQCmeyaEEKgeUYLEePNgHMp2HO/h13JXUl8cgm8gS9ESsc3xQwfAZa1Sdtq/9lFHcvtY3BtqSznQvvR++j61NHzFdtrqORNaAVv5JS3uScGSqLgl+oHnEyGwDcwkLwhEGrAfL05Ht5zgKDjCSJEDm81pXER6BgPPH1Jz+cI4TlfmS0jiHlwU33HTxG99yjb6sBvIDMSFzPZjmhfA6kpwxjDx1rAA53HySLZYqf072fSBc5iWLu09Ff9SNoh+ytMn6AnidefyD0H71CNLwHpYZ1Ywh0VOp4w/1A1ZxNIn4Fldfa2a8NayPvuawbP157aqfFfM74SHnjVZ4doqGG8iifXQmBpjN/ddgZjPsrSJJqeC1u5xN5SrDrTZ30PjJ3j47TiJiQo+Lu230RD8P9IsyT1OYx62mUXgrPxOkw1XUomzPXtqeGSkV+LPsp/1pJug9J7d4lBVirOceNtophzI/xM43Fqth0hPTVAi/Himdbd1r4ykRR873fZzh+t5uZ/MCIRXpTacF6E9nOPk2x7l/h99juRklK6+8jsqftWjna807WxUtozQQLZJYUbE4vQwO447HdIBvheO5fjugfF7ThjtUftK169uTZ7unBFtL0N3xZc3Nvm905J+ccoilnF5OVJoDn6Ll6f6lpZ7DdVC01hGTtwEeOYsyiX0MAC6D150NBDfN9SdbEUYiPIbG30rgad/pUhfAdBjDFo8yShIoWf0jiOgZUcT6rGkns0fZKGx6EotvmO9EyJn8eL6kPY3x86+oz6OgkAqE/YUK5bztXpl6OFtcva1XzpI9RmXAfzwgmKjXPiJXgWdkJf8FNHARJqAnLpEX8KG/tdK+JONyDlgaoBUtGW+lkaLwSQIkBgfbaFnWW+dAplWyMWaDzIkS7le3vnxg6QB1WakhgsgGiR3m10LdV3JXqdLMUJfoHhl6ownur+tehYYab/xi8pzTbjdJClrvG+iVt4QV+FAUpEGGFmbeW69eRJwTT5ha2OF06PYuODBJkDsW/MpGdx/Wih2WJHmIjLDO1/y4DGa5Y1px4FLraFiZxVnBNayGcJKlvFxbZ6YW8jGR+LXF1WRmINLL2yLBpl40mtWcjW6LMfQW9NIOTkP516UJtQUSFcZF0G+1+uSVNQVU03MThq7pFb08onOAngUxO7qqnxtO4rXbmNDz9PF2Hyh/Ufaf5n3GT/E08T0vLkM="));