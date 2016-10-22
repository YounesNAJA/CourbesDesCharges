/*
 Highcharts 4.2.6 JS v/Highstock 4.2.6 (2016-08-02)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
 Highcharts 4.2.6 JS v/Highstock 4.2.6 (2016-08-02)
 Exporting module

 (c) 2010-2016 Torstein Honsi

 License: www.highcharts.com/license
 Highcharts 4.2.6 JS v/Highstock 4.2.6 (2016-08-02)
 Client side exporting module

 (c) 2015 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
 Highcharts 4.2.6 JS v/Highstock 4.2.6 (2016-08-02)
 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2016 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function (q, T) { "object" === typeof module && module.exports ? module.exports = q.document ? T(q) : T : q.Highcharts = T(q) })("undefined" !== typeof window ? window : this, function (q) {
    function T(a, b) { var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a; if (b) throw Error(c); q.console && console.log(c) } function V(a, b, c) { this.options = b; this.elem = a; this.prop = c } function A() {
        var a, b = arguments, c, d = {}, e = function (a, b) {
            var c, d; "object" !== typeof a && (a = {}); for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !==
            Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]); return a
        }; !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2)); c = b.length; for (a = 0; a < c; a++) d = e(d, b[a]); return d
    } function E(a, b) { return parseInt(a, b || 10) } function Y(a) { return "string" === typeof a } function fa(a) { return "[object Array]" === Object.prototype.toString.call(a) } function W(a, b) { for (var c = a.length; c--;) if (a[c] === b) { a.splice(c, 1); break } } function w(a) { return a !== L && null !== a } function x(a,
    b, c) { var d, e; if (Y(b)) w(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (w(b) && sa(b)) for (d in b) a.setAttribute(d, b[d]); return e } function G(a) { return fa(a) ? a : [a] } function O(a, b, c) { if (b) return setTimeout(a, b, c); a.call(0, c) } function K(a, b) { Ca && !ta && b && b.opacity !== L && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")"); J(a.style, b) } function I(a, b, c, d, e) { a = P.createElement(a); b && J(a, b); e && K(a, { padding: 0, border: "none", margin: 0 }); c && K(a, c); d && d.appendChild(a); return a } function ya(a, b) {
        var c =
        function () { }; c.prototype = new a; J(c.prototype, b); return c
    } function R(a, b, c) { return Array((b || 2) + 1 - String(a).length).join(c || 0) + a } function Da(a, b) { return /%$/.test(a) ? b * parseFloat(a) / 100 : parseFloat(a) } function S(a) { return 6E4 * (Ta && Ta(a) || ib || 0) } function ca(a, b) {
        for (var c = "{", d = !1, e, f, g, h, l, n = []; -1 !== (c = a.indexOf(c)) ;) {
            e = a.slice(0, c); if (d) {
                f = e.split(":"); g = f.shift().split("."); l = g.length; e = b; for (h = 0; h < l; h++) e = e[g[h]]; f.length && (f = f.join(":"), h = /\.([0-9])/, g = ja.lang, /f$/.test(f) ? (h = (h = f.match(h)) ? h[1] :
                -1, null !== e && (e = M.numberFormat(e, h, g.decimalPoint, -1 < f.indexOf(",") ? g.thousandsSep : ""))) : e = Na(f, e))
            } n.push(e); a = a.slice(c + 1); c = (d = !d) ? "}" : "{"
        } n.push(a); return n.join("")
    } function k(a) { return qa.pow(10, ka(qa.log(a) / qa.LN10)) } function p(a, b, c, d, e) { var f, g = a; c = y(c, 1); f = a / c; b || (b = [1, 2, 2.5, 5, 10], !1 === d && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c]))); for (d = 0; d < b.length && !(g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) ; d++); return g * c } function z(a, b) {
        var c = a.length, d, e; for (e = 0; e < c; e++) a[e].safeI = e; a.sort(function (a,
        c) { d = b(a, c); return 0 === d ? a.safeI - c.safeI : d }); for (e = 0; e < c; e++) delete a[e].safeI
    } function r(a) { for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]); return c } function F(a) { for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]); return c } function N(a, b) { for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c] } function ea(a) { bb || (bb = I("div")); a && bb.appendChild(a); bb.innerHTML = "" } function C(a, b) { return parseFloat(a.toPrecision(b || 14)) } function wa(a, b) { b.renderer.globalAnimation = y(a, b.animation) } function la(a) {
        return sa(a) ?
        A(a) : { duration: a ? 500 : 0 }
    } function sb() { var a = ja.global, b = a.useUTC, c = b ? "getUTC" : "get", d = b ? "setUTC" : "set"; ua = a.Date || q.Date; ib = b && a.timezoneOffset; Ta = b && a.getTimezoneOffset; cb = function (a, c, d, h, l, n) { var m; b ? (m = ua.UTC.apply(0, arguments), m += S(m)) : m = (new ua(a, c, y(d, 1), y(h, 0), y(l, 0), y(n, 0))).getTime(); return m }; jb = c + "Minutes"; kb = c + "Hours"; lb = c + "Day"; Oa = c + "Date"; Ua = c + "Month"; Va = c + "FullYear"; tb = d + "Milliseconds"; ub = d + "Seconds"; vb = d + "Minutes"; wb = d + "Hours"; db = d + "Date"; mb = d + "Month"; nb = d + "FullYear" } function aa(a) {
        if (!(this instanceof
        aa)) return new aa(a); this.init(a)
    } function ma() { } function Pa(a, b, c, d) { this.axis = a; this.pos = b; this.type = c || ""; this.isNew = !0; c || d || this.addLabel() } function xb(a, b, c, d, e) {
        var f = a.chart.inverted; this.axis = a; this.isNegative = c; this.options = b; this.x = d; this.total = null; this.points = {}; this.stack = e; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: b.align || (f ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"), y: y(b.y, f ? 4 : c ? 14 : -6), x: y(b.x, f ? c ? -6 : 6 : 0) }; this.textAlign =
        b.textAlign || (f ? c ? "right" : "left" : "center")
    } var L, P = q.document, qa = Math, Q = qa.round, ka = qa.floor, za = qa.ceil, H = qa.max, U = qa.min, ga = qa.abs, Ga = qa.cos, Qa = qa.sin, yb = qa.PI, Ka = 2 * yb / 360, Ha = q.navigator && q.navigator.userAgent || "", zb = q.opera, Ca = /(msie|trident|edge)/i.test(Ha) && !zb, eb = !Ca && /AppleWebKit/.test(Ha), La = /Firefox/.test(Ha), Ab = /(Mobile|Android|Windows Phone)/.test(Ha), ta = P && P.createElementNS && !!P.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Hb = La && 4 > parseInt(Ha.split("Firefox/")[1],
    10), xa = P && !ta && !Ca && !!P.createElement("canvas").getContext, Wa, Bb = {}, ob = 0, bb, ja, Na, X, pb = function () { }, na = [], Xa = 0, Ib = /^[0-9]+$/, fb = ["plotTop", "marginRight", "marginBottom", "plotLeft"], ua, cb, ib, Ta, jb, kb, lb, Oa, Ua, Va, tb, ub, vb, wb, db, mb, nb, ha = {}, M; M = q.Highcharts ? T(16, !0) : { win: q }; M.seriesTypes = ha; var Ia = [], va, Aa, u, Ea, qb, Ma, da, oa, Z, Ra, Ja; V.prototype = {
        dSetter: function () {
            var a = this.paths[0], b = this.paths[1], c = [], d = this.now, e = a.length, f; if (1 === d) c = this.toD; else if (e === b.length && 1 > d) for (; e--;) f = parseFloat(a[e]),
            c[e] = isNaN(f) ? a[e] : d * parseFloat(b[e] - f) + f; else c = b; this.elem.attr("d", c)
        }, update: function () { var a = this.elem, b = this.prop, c = this.now, d = this.options.step; if (this[b + "Setter"]) this[b + "Setter"](); else a.attr ? a.element && a.attr(b, c) : a.style[b] = c + this.unit; d && d.call(a, c, this) }, run: function (a, b, c) {
            var d = this, e = function (a) { return e.stopped ? !1 : d.step(a) }, f; this.startTime = +new ua; this.start = a; this.end = b; this.unit = c; this.now = this.start; this.pos = 0; e.elem = this.elem; e() && 1 === Ia.push(e) && (e.timerId = setInterval(function () {
                for (f =
                0; f < Ia.length; f++) Ia[f]() || Ia.splice(f--, 1); Ia.length || clearInterval(e.timerId)
            }, 13))
        }, step: function (a) { var b = +new ua, c, d = this.options; c = this.elem; var e = d.complete, f = d.duration, g = d.curAnim, h; if (c.attr && !c.element) c = !1; else if (a || b >= f + this.startTime) { this.now = this.end; this.pos = 1; this.update(); a = g[this.prop] = !0; for (h in g) !0 !== g[h] && (a = !1); a && e && e.call(c); c = !1 } else this.pos = d.easing((b - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0; return c }, initPath: function (a,
        b, c) {
            function d(a) { for (B = a.length; B--;) "M" !== a[B] && "L" !== a[B] || a.splice(B + 1, 0, a[B + 1], a[B + 2], a[B + 1], a[B + 2]) } function e(a, b) { for (; a.length < t;) { a[0] = b[t - a.length]; var c = a.slice(0, m);[].splice.apply(a, [0, 0].concat(c)); D && (c = a.slice(a.length - m), [].splice.apply(a, [a.length, 0].concat(c)), B--) } a[0] = "M" } function f(a, b) { for (var c = (t - a.length) / m; 0 < c && c--;) v = a.slice().splice(a.length / ia - m, m * ia), v[0] = b[t - m - c * m], n && (v[m - 6] = v[m - 2], v[m - 5] = v[m - 1]), [].splice.apply(a, [a.length / ia, 0].concat(v)), D && c-- } b = b || ""; var g,
            h = a.startX, l = a.endX, n = -1 < b.indexOf("C"), m = n ? 7 : 3, t, v, B; b = b.split(" "); c = c.slice(); var D = a.isArea, ia = D ? 2 : 1, k; n && (d(b), d(c)); if (h && l) { for (B = 0; B < h.length; B++) if (h[B] === l[0]) { g = B; break } else if (h[0] === l[l.length - h.length + B]) { g = B; k = !0; break } void 0 === g && (b = []) } b.length && M.isNumber(g) && (t = c.length + g * ia * m, k ? (e(b, c), f(c, b)) : (e(c, b), f(b, c))); return [b, c]
        }
    }; var J = M.extend = function (a, b) { var c; a || (a = {}); for (c in b) a[c] = b[c]; return a }, sa = M.isObject = function (a, b) { return a && "object" === typeof a && (!b || !fa(a)) }, ba = M.isNumber =
    function (a) { return "number" === typeof a && !isNaN(a) }, y = M.pick = function () { var a = arguments, b, c, d = a.length; for (b = 0; b < d; b++) if (c = a[b], c !== L && null !== c) return c }, Cb = M.wrap = function (a, b, c) { var d = a[b]; a[b] = function () { var a = Array.prototype.slice.call(arguments); a.unshift(d); return c.apply(this, a) } }; Na = function (a, b, c) {
        if (!w(b) || isNaN(b)) return ja.lang.invalidDate || ""; a = y(a, "%Y-%m-%d %H:%M:%S"); var d = new ua(b - S(b)), e, f = d[kb](), g = d[lb](), h = d[Oa](), l = d[Ua](), n = d[Va](), m = ja.lang, t = m.weekdays, v = m.shortWeekdays, d = J({
            a: v ?
            v[g] : t[g].substr(0, 3), A: t[g], d: R(h), e: R(h, 2, " "), w: g, b: m.shortMonths[l], B: m.months[l], m: R(l + 1), y: n.toString().substr(2, 2), Y: n, H: R(f), k: f, I: R(f % 12 || 12), l: f % 12 || 12, M: R(d[jb]()), p: 12 > f ? "AM" : "PM", P: 12 > f ? "am" : "pm", S: R(d.getSeconds()), L: R(Q(b % 1E3), 3)
        }, M.dateFormats); for (e in d) for (; -1 !== a.indexOf("%" + e) ;) a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]); return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    }; X = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 };
    M.numberFormat = function (a, b, c, d) { a = +a || 0; b = +b; var e = ja.lang, f = (a.toString().split(".")[1] || "").length, g, h, l = Math.abs(a); -1 === b ? b = Math.min(f, 20) : ba(b) || (b = 2); g = String(E(l.toFixed(b))); h = 3 < g.length ? g.length % 3 : 0; c = y(c, e.decimalPoint); d = y(d, e.thousandsSep); a = (0 > a ? "-" : "") + (h ? g.substr(0, h) + d : ""); a += g.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + d); b && (d = Math.abs(l - g + Math.pow(10, -Math.max(b, f) - 1)), a += c + d.toFixed(b).slice(2)); return a }; Math.easeInOutSine = function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; va = function (a,
    b) { var c; return "width" === b ? Math.min(a.offsetWidth, a.scrollWidth) - va(a, "padding-left") - va(a, "padding-right") : "height" === b ? Math.min(a.offsetHeight, a.scrollHeight) - va(a, "padding-top") - va(a, "padding-bottom") : (c = q.getComputedStyle(a, void 0)) && E(c.getPropertyValue(b)) }; Aa = function (a, b) { return b.indexOf ? b.indexOf(a) : [].indexOf.call(b, a) }; Ea = function (a, b) { return [].filter.call(a, b) }; Ma = function (a, b) { for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a); return c }; qb = function (a) {
        var b = P.documentElement;
        a = a.getBoundingClientRect(); return { top: a.top + (q.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: a.left + (q.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }
    }; Ja = function (a) { for (var b = Ia.length; b--;) Ia[b].elem === a && (Ia[b].stopped = !0) }; u = function (a, b) { return Array.prototype.forEach.call(a, b) }; da = function (a, b, c) {
        function d(b) { b.target = b.srcElement || q; c.call(a, b) } var e = a.hcEvents = a.hcEvents || {}; a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && (a.hcEventsIE || (a.hcEventsIE = {}), a.hcEventsIE[c.toString()] =
        d, a.attachEvent("on" + b, d)); e[b] || (e[b] = []); e[b].push(c)
    }; oa = function (a, b, c) { function d(b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && (c = a.hcEventsIE[c.toString()], a.detachEvent("on" + b, c)) } function e() { var c, e; if (a.nodeName) for (e in b ? (c = {}, c[b] = !0) : c = g, c) if (g[e]) for (c = g[e].length; c--;) d(e, g[e][c]) } var f, g = a.hcEvents, h; g && (b ? (f = g[b] || [], c ? (h = Aa(c, f), -1 < h && (f.splice(h, 1), g[b] = f), d(b, c)) : (e(), g[b] = [])) : (e(), a.hcEvents = {})) }; Z = function (a, b, c, d) {
        var e; e = a.hcEvents; var f, g; c = c ||
        {}; if (P.createEvent && (a.dispatchEvent || a.fireEvent)) e = P.createEvent("Events"), e.initEvent(b, !0, !0), e.target = a, J(e, c), a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(b, e); else if (e) for (e = e[b] || [], f = e.length, c.preventDefault || (c.preventDefault = function () { c.defaultPrevented = !0 }), c.target = a, c.type || (c.type = b), b = 0; b < f; b++) (g = e[b]) && !1 === g.call(a, c) && c.preventDefault(); d && !c.defaultPrevented && d(c)
    }; Ra = function (a, b, c) {
        var d, e = "", f, g, h; sa(c) || (d = arguments, c = { duration: d[2], easing: d[3], complete: d[4] }); ba(c.duration) ||
        (c.duration = 400); c.easing = "function" === typeof c.easing ? c.easing : Math[c.easing] || Math.easeInOutSine; c.curAnim = A(b); for (h in b) g = new V(a, c, h), f = null, "d" === h ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, f = 1) : a.attr ? d = a.attr(h) : (d = parseFloat(va(a, h)) || 0, "opacity" !== h && (e = "px")), f || (f = b[h]), f.match && f.match("px") && (f = f.replace(/px/g, "")), g.run(d, f, e)
    }; q.jQuery && (q.jQuery.fn.highcharts = function () {
        var a = [].slice.call(arguments); if (this[0]) return a[0] ? (new (M[Y(a[0]) ? a.shift() : "Chart"])(this[0], a[0], a[1]),
        this) : na[x(this[0], "data-highcharts-chart")]
    }); P && !P.defaultView && (va = function (a, b) { var c; c = { width: "clientWidth", height: "clientHeight" }[b]; if (a.style[b]) return E(a.style[b]); "opacity" === b && (b = "filter"); if (c) return a.style.zoom = 1, Math.max(a[c] - 2 * va(a, "padding"), 0); c = a.currentStyle[b.replace(/\-(\w)/g, function (a, b) { return b.toUpperCase() })]; "filter" === b && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function (a, b) { return b / 100 })); return "" === c ? 1 : E(c) }); Array.prototype.forEach || (u = function (a, b) {
        for (var c = 0,
        d = a.length; c < d; c++) if (!1 === b.call(a[c], a[c], c, a)) return c
    }); Array.prototype.indexOf || (Aa = function (a, b) { var c, d = 0; if (b) for (c = b.length; d < c; d++) if (b[d] === a) return d; return -1 }); Array.prototype.filter || (Ea = function (a, b) { for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]); return c }); M.Fx = V; M.inArray = Aa; M.each = u; M.grep = Ea; M.offset = qb; M.map = Ma; M.addEvent = da; M.removeEvent = oa; M.fireEvent = Z; M.animate = Ra; M.animObject = la; M.stop = Ja; ja = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {
            useUTC: !0, canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 4.2.6/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 4.2.6/gfx/vml-radial-gradient.png"
        }, chart: { borderColor: "#4572A7", borderRadius: 0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }, width: null, height: null }, title: { text: "Chart title", align: "center", margin: 15, style: { color: "#333333", fontSize: "18px" }, widthAdjust: -44 }, subtitle: {
            text: "", align: "center",
            style: { color: "#555555" }, widthAdjust: -44
        }, plotOptions: {
            line: {
                allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, lineWidth: 2, marker: { lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: { hover: { enabled: !0, lineWidthPlus: 1, radiusPlus: 2 }, select: { fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: {
                    align: "center", formatter: function () { return null === this.y ? "" : M.numberFormat(this.y, -1) }, style: { color: "contrast", fontSize: "11px", fontWeight: "bold", textShadow: "0 0 6px contrast, 0 0 3px contrast" },
                    verticalAlign: "bottom", x: 0, y: 0, padding: 5
                }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { hover: { lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3
            }
        }, labels: { style: { position: "absolute", color: "#3E576F" } }, legend: {
            enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#909090", borderRadius: 0, navigation: { activeColor: "#274b6d", inactiveColor: "#CCC" }, shadow: !1, itemStyle: {
                color: "#333333", fontSize: "12px",
                fontWeight: "bold"
            }, itemHoverStyle: { color: "#000" }, itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
        }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "white", opacity: .5, textAlign: "center" } }, tooltip: {
            enabled: !0, animation: ta, backgroundColor: "rgba(249, 249, 249, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y"
            }, footerFormat: "", headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', shadow: !0, snap: Ab ? 25 : 10, style: { color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", pointerEvents: "none", whiteSpace: "nowrap" }
        }, credits: {
            enabled: !0, text: "Highcharts.com",
            href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#909090", fontSize: "9px" }
        }
    }; var Ba = ja.plotOptions, Db = Ba.line; sb(); aa.prototype = {
        parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [E(a[1]), E(a[2]), E(a[3]), parseFloat(a[4], 10)] } }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function (a) {
                return [E(a[1], 16), E(a[2], 16), E(a[3], 16),
                1]
            }
        }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) { return [E(a[1]), E(a[2]), E(a[3]), 1] } }], init: function (a) { var b, c, d, e; if ((this.input = a) && a.stops) this.stops = Ma(a.stops, function (a) { return new aa(a[1]) }); else for (d = this.parsers.length; d-- && !c;) e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b)); this.rgba = c || [] }, get: function (a) {
            var b = this.input, c = this.rgba, d; this.stops ? (d = A(b), d.stops = [].concat(d.stops), u(this.stops, function (b, c) {
                d.stops[c] = [d.stops[c][0],
                b.get(a)]
            })) : d = c && ba(c[0]) ? "rgb" === a || !a && 1 === c[3] ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : "a" === a ? c[3] : "rgba(" + c.join(",") + ")" : b; return d
        }, brighten: function (a) { var b, c = this.rgba; if (this.stops) u(this.stops, function (b) { b.brighten(a) }); else if (ba(a) && 0 !== a) for (b = 0; 3 > b; b++) c[b] += E(255 * a), 0 > c[b] && (c[b] = 0), 255 < c[b] && (c[b] = 255); return this }, setOpacity: function (a) { this.rgba[3] = a; return this }
    }; ma.prototype = {
        opacity: 1, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textShadow".split(" "),
        init: function (a, b) { this.element = "span" === b ? I(b) : P.createElementNS("http://www.w3.org/2000/svg", b); this.renderer = a }, animate: function (a, b, c) { b = y(b, this.renderer.globalAnimation, !0); Ja(this); b ? (c && (b.complete = c), Ra(this, a, b)) : this.attr(a, null, c); return this }, colorGradient: function (a, b, c) {
            var d = this.renderer, e, f, g, h, l, n, m, t, v, B, D, ia = [], k; a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient"); if (f) {
                g = a[f]; l = d.gradients; m = a.stops; B = c.radialReference; fa(g) && (a[f] = g = {
                    x1: g[0], y1: g[1], x2: g[2],
                    y2: g[3], gradientUnits: "userSpaceOnUse"
                }); "radialGradient" === f && B && !w(g.gradientUnits) && (h = g, g = A(g, d.getRadialAttr(B, h), { gradientUnits: "userSpaceOnUse" })); for (D in g) "id" !== D && ia.push(D, g[D]); for (D in m) ia.push(m[D]); ia = ia.join(","); l[ia] ? B = l[ia].attr("id") : (g.id = B = "highcharts-" + ob++, l[ia] = n = d.createElement(f).attr(g).add(d.defs), n.radAttr = h, n.stops = [], u(m, function (a) {
                    0 === a[1].indexOf("rgba") ? (e = aa(a[1]), t = e.get("rgb"), v = e.get("a")) : (t = a[1], v = 1); a = d.createElement("stop").attr({
                        offset: a[0], "stop-color": t,
                        "stop-opacity": v
                    }).add(n); n.stops.push(a)
                })); k = "url(" + d.url + "#" + B + ")"; c.setAttribute(b, k); c.gradient = ia; a.toString = function () { return k }
            }
        }, applyTextShadow: function (a) {
            var b = this.element, c, d = -1 !== a.indexOf("contrast"), e = {}, f = this.renderer.forExport, g = f || b.style.textShadow !== L && !Ca; d && (e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill))); if (eb || f) e.textRendering = "geometricPrecision"; g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")),
            u(a.split(/\s?,\s?/g), function (a) { var d = b.firstChild, e, f; a = a.split(" "); e = a[a.length - 1]; (f = a[a.length - 2]) && u(c, function (a, c) { var g; 0 === c && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), null === c && b.setAttribute("y", 0)); g = a.cloneNode(1); x(g, { "class": "highcharts-text-shadow", fill: e, stroke: e, "stroke-opacity": 1 / H(E(f), 3), "stroke-width": f, "stroke-linejoin": "round" }); b.insertBefore(g, d) }) }))
        }, attr: function (a, b, c) {
            var d, e = this.element, f, g = this, h; "string" === typeof a &&
            b !== L && (d = a, a = {}, a[d] = b); if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e); else {
                for (d in a) b = a[d], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0), h || (h = this[d + "Setter"] || this._defaultSetter, h.call(this, b, d, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, h)); this.doTransform && (this.updateTransform(),
                this.doTransform = !1)
            } c && c(); return g
        }, updateShadows: function (a, b, c) { for (var d = this.shadows, e = d.length; e--;) c.call(d[e], "height" === a ? Math.max(b - (d[e].cutHeight || 0), 0) : "d" === a ? this.d : b, a, d[e]) }, addClass: function (a) { var b = this.element, c = x(b, "class") || ""; -1 === c.indexOf(a) && x(b, "class", c + " " + a); return this }, symbolAttr: function (a) {
            var b = this; u("x y r start end width height innerR anchorX anchorY".split(" "), function (c) { b[c] = y(a[c], b[c]) }); b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height,
                b)
            })
        }, clip: function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none") }, crisp: function (a) { var b, c = {}, d, e = this.strokeWidth || 0; d = Q(e) % 2 / 2; a.x = ka(a.x || this.x || 0) + d; a.y = ka(a.y || this.y || 0) + d; a.width = ka((a.width || this.width || 0) - 2 * d); a.height = ka((a.height || this.height || 0) - 2 * d); a.strokeWidth = e; for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]); return c }, css: function (a) {
            var b = this.styles, c = {}, d = this.element, e, f, g = ""; e = !b; a && a.color && (a.fill = a.color); if (b) for (f in a) a[f] !== b[f] && (c[f] =
            a[f], e = !0); if (e) { e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && E(a.width) || this.textWidth; b && (a = J(b, c)); this.styles = a; e && (xa || !ta && this.renderer.forExport) && delete a.width; if (Ca && !ta) K(this.element, a); else { b = function (a, b) { return "-" + b.toLowerCase() }; for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";"; x(d, "style", g) } e && this.added && this.renderer.buildText(this) } return this
        }, on: function (a, b) {
            var c = this, d = c.element; Wa && "click" === a ? (d.ontouchstart = function (a) {
                c.touchEventFired = ua.now();
                a.preventDefault(); b.call(d, a)
            }, d.onclick = function (a) { (-1 === Ha.indexOf("Android") || 1100 < ua.now() - (c.touchEventFired || 0)) && b.call(d, a) }) : d["on" + a] = b; return this
        }, setRadialReference: function (a) { var b = this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr)); return this }, translate: function (a, b) { return this.attr({ translateX: a, translateY: b }) }, invert: function () { this.inverted = !0; this.updateTransform(); return this }, updateTransform: function () {
            var a =
            this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element; e && (a += this.attr("width"), b += this.attr("height")); a = ["translate(" + a + "," + b + ")"]; e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")"); (w(c) || w(d)) && a.push("scale(" + y(c, 1) + " " + y(d, 1) + ")"); a.length && g.setAttribute("transform", a.join(" "))
        }, toFront: function () { var a = this.element; a.parentNode.appendChild(a); return this }, align: function (a,
        b, c) {
            var d, e, f, g, h = {}; e = this.renderer; f = e.alignedObjects; if (a) { if (this.alignOptions = a, this.alignByTranslate = b, !c || Y(c)) this.alignTo = d = c || "renderer", W(f, this), f.push(this), c = null } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo; c = y(c, e[d], e); d = a.align; e = a.verticalAlign; f = (c.x || 0) + (a.x || 0); g = (c.y || 0) + (a.y || 0); if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d]; h[b ? "translateX" : "x"] = Q(f); if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] ||
            1); h[b ? "translateY" : "y"] = Q(g); this[this.placed ? "animate" : "attr"](h); this.placed = !0; this.alignAttr = h; return this
        }, getBBox: function (a, b) {
            var c, d = this.renderer, e, f, g, h = this.element, l = this.styles; e = this.textStr; var n, m = h.style, t, v = d.cache, B = d.cacheKeys, D; f = y(b, this.rotation); g = f * Ka; e !== L && (D = ["", f || 0, l && l.fontSize, h.style.width].join(), D = "" === e || Ib.test(e) ? "num:" + e.toString().length + D : e + D); D && !a && (c = v[D]); if (!c) {
                if ("http://www.w3.org/2000/svg" === h.namespaceURI || d.forExport) {
                    try {
                        t = this.fakeTS && function (a) {
                            u(h.querySelectorAll(".highcharts-text-shadow"),
                            function (b) { b.style.display = a })
                        }, La && m.textShadow ? (n = m.textShadow, m.textShadow = "") : t && t("none"), c = h.getBBox ? J({}, h.getBBox()) : { width: h.offsetWidth, height: h.offsetHeight }, n ? m.textShadow = n : t && t("")
                    } catch (ia) { } if (!c || 0 > c.width) c = { width: 0, height: 0 }
                } else c = this.htmlGetBBox(); d.isSVG && (d = c.width, e = c.height, Ca && l && "11px" === l.fontSize && "16.9" === e.toPrecision(3) && (c.height = e = 14), f && (c.width = ga(e * Qa(g)) + ga(d * Ga(g)), c.height = ga(e * Ga(g)) + ga(d * Qa(g)))); if (D) {
                    for (; 250 < B.length;) delete v[B.shift()]; v[D] || B.push(D);
                    v[D] = c
                }
            } return c
        }, show: function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var b = this; b.animate({ opacity: 0 }, { duration: a || 150, complete: function () { b.attr({ y: -9999 }) } }) }, add: function (a) {
            var b = this.renderer, c = this.element, d; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; void 0 !== this.textStr && b.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter(); d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd(); return this
        }, safeRemoveChild: function (a) { var b = a.parentNode; b && b.removeChild(a) }, destroy: function () {
            var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup, e, f; b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null; Ja(a); a.clipPath && (a.clipPath = a.clipPath.destroy()); if (a.stops) { for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy(); a.stops = null } a.safeRemoveChild(b); for (c && u(c, function (b) { a.safeRemoveChild(b) }) ; d && d.div &&
            0 === d.div.childNodes.length;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b; a.alignTo && W(a.renderer.alignedObjects, a); for (e in a) delete a[e]; return null
        }, shadow: function (a, b, c) {
            var d = [], e, f, g = this.element, h, l, n, m; if (a) {
                l = y(a.width, 3); n = (a.opacity || .15) / l; m = this.parentInverted ? "(-1,-1)" : "(" + y(a.offsetX, 1) + ", " + y(a.offsetY, 1) + ")"; for (e = 1; e <= l; e++) f = g.cloneNode(0), h = 2 * l + 1 - 2 * e, x(f, { isShadow: "true", stroke: a.color || "black", "stroke-opacity": n * e, "stroke-width": h, transform: "translate" + m, fill: "none" }),
                c && (x(f, "height", H(x(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f); this.shadows = d
            } return this
        }, xGetter: function (a) { "circle" === this.element.nodeName && (a = { x: "cx", y: "cy" }[a] || a); return this._defaultGetter(a) }, _defaultGetter: function (a) { a = y(this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }, dSetter: function (a, b, c) {
            a && a.join && (a = a.join(" ")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); c.setAttribute(b,
            a); this[b] = a
        }, dashstyleSetter: function (a) { var b, c = this["stroke-width"]; "inherit" === c && (c = 1); if (a = a && a.toLowerCase()) { a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (b = a.length; b--;) a[b] = E(a[b]) * c; a = a.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a) } }, alignSetter: function (a) {
            this.element.setAttribute("text-anchor",
            { left: "start", center: "middle", right: "end" }[a])
        }, opacitySetter: function (a, b, c) { this[b] = a; c.setAttribute(b, a) }, titleSetter: function (a) { var b = this.element.getElementsByTagName("title")[0]; b || (b = P.createElementNS("http://www.w3.org/2000/svg", "title"), this.element.appendChild(b)); b.firstChild && b.removeChild(b.firstChild); b.appendChild(P.createTextNode(String(y(a), "").replace(/<[^>]*>/g, ""))) }, textSetter: function (a) { a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)) },
        fillSetter: function (a, b, c) { "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c) }, visibilitySetter: function (a, b, c) { "inherit" === a ? c.removeAttribute(b) : c.setAttribute(b, a) }, zIndexSetter: function (a, b) {
            var c = this.renderer, d = this.parentGroup, c = (d || c).element || c.box, e, f, g = this.element, h; e = this.added; var l; w(a) && (g.zIndex = a, a = +a, this[b] === a && (e = !1), this[b] = a); if (e) {
                (a = this.zIndex) && d && (d.handleZ = !0); d = c.childNodes; for (l = 0; l < d.length && !h; l++) e = d[l], f = e.zIndex, e !== g && (E(f) > a || !w(a) && w(f)) &&
                (c.insertBefore(g, e), h = !0); h || c.appendChild(g)
            } return h
        }, _defaultSetter: function (a, b, c) { c.setAttribute(b, a) }
    }; ma.prototype.yGetter = ma.prototype.xGetter; ma.prototype.translateXSetter = ma.prototype.translateYSetter = ma.prototype.rotationSetter = ma.prototype.verticalAlignSetter = ma.prototype.scaleXSetter = ma.prototype.scaleYSetter = function (a, b) { this[b] = a; this.doTransform = !0 }; ma.prototype["stroke-widthSetter"] = ma.prototype.strokeSetter = function (a, b, c) {
        this[b] = a; this.stroke && this["stroke-width"] ? (this.strokeWidth =
        this["stroke-width"], ma.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke = !1)
    }; var $a = function () { this.init.apply(this, arguments) }; $a.prototype = {
        Element: ma, init: function (a, b, c, d, e, f) {
            var g; d = this.createElement("svg").attr({ version: "1.1" }).css(this.getStyle(d)); g = d.element; a.appendChild(g); -1 === a.innerHTML.indexOf("xmlns") && x(g, "xmlns", "http://www.w3.org/2000/svg");
            this.isSVG = !0; this.box = g; this.boxWrapper = d; this.alignedObjects = []; this.url = (La || eb) && P.getElementsByTagName("base").length ? q.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(P.createTextNode("Created with Highcharts 4.2.6 /Highstock 4.2.6")); this.defs = this.createElement("defs").add(); this.allowHTML = f; this.forExport = e; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(b, c, !1); var h;
            La && a.getBoundingClientRect && (this.subPixelFix = b = function () { K(a, { left: 0, top: 0 }); h = a.getBoundingClientRect(); K(a, { left: za(h.left) - h.left + "px", top: za(h.top) - h.top + "px" }) }, b(), da(q, "resize", b))
        }, getStyle: function (a) { return this.style = J({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a) }, isHidden: function () { return !this.boxWrapper.getBBox().width }, destroy: function () {
            var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); N(this.gradients ||
            {}); this.gradients = null; a && (this.defs = a.destroy()); this.subPixelFix && oa(q, "resize", this.subPixelFix); return this.alignedObjects = null
        }, createElement: function (a) { var b = new this.Element; b.init(this, a); return b }, draw: function () { }, getRadialAttr: function (a, b) { return { cx: a[0] - a[2] / 2 + b.cx * a[2], cy: a[1] - a[2] / 2 + b.cy * a[2], r: b.r * a[2] } }, buildText: function (a) {
            for (var b = a.element, c = this, d = c.forExport, e = y(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, l, n, m = x(b, "x"), t = a.styles, v = a.textWidth, B = t && t.lineHeight,
            D = t && t.textShadow, ia = t && "ellipsis" === t.textOverflow, k = g.length, p = v && !a.added && this.box, r = function (a) { return B ? E(B) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : t && t.fontSize || c.style.fontSize || 12, a).h }; k--;) b.removeChild(g[k]); f || D || ia || v || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, l = /<.*href="(http[^"]+)".*>/, p && p.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g,
            "</span>").split(/<br.*?>/g) : [e], e = Ea(e, function (a) { return "" !== a }), u(e, function (e, f) {
                var g, B = 0; e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"); g = e.split("|||"); u(g, function (e) {
                    if ("" !== e || 1 === g.length) {
                        var D = {}, k = P.createElementNS("http://www.w3.org/2000/svg", "tspan"), p; h.test(e) && (p = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), x(k, "style", p)); l.test(e) && !d && (x(k, "onclick", 'location.href="' + e.match(l)[1] + '"'), K(k, { cursor: "pointer" })); e = (e.replace(/<(.|\n)*?>/g,
                        "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"); if (" " !== e) {
                            k.appendChild(P.createTextNode(e)); B ? D.dx = 0 : f && null !== m && (D.x = m); x(k, D); b.appendChild(k); !B && f && (!ta && d && K(k, { display: "block" }), x(k, "dy", r(k))); if (v) {
                                for (var D = e.replace(/([^\^])-/g, "$1- ").split(" "), y = 1 < g.length || f || 1 < D.length && "nowrap" !== t.whiteSpace, u, Za, w = [], z = r(k), q = 1, Jb = a.rotation, Ya = e, C = Ya.length; (y || ia) && (D.length || w.length) ;) a.rotation = 0, u = a.getBBox(!0), Za = u.width, !ta && c.forExport && (Za = c.measureSpanWidth(k.firstChild.data, a.styles)),
                                u = Za > v, void 0 === n && (n = u), ia && n ? (C /= 2, "" === Ya || !u && .5 > C ? D = [] : (Ya = e.substring(0, Ya.length + (u ? -1 : 1) * za(C)), D = [Ya + (3 < v ? "\u2026" : "")], k.removeChild(k.firstChild))) : u && 1 !== D.length ? (k.removeChild(k.firstChild), w.unshift(D.pop())) : (D = w, w = [], D.length && (q++, k = P.createElementNS("http://www.w3.org/2000/svg", "tspan"), x(k, { dy: z, x: m }), p && x(k, "style", p), b.appendChild(k)), Za > v && (v = Za)), D.length && k.appendChild(P.createTextNode(D.join(" ").replace(/- /g, "-"))); a.rotation = Jb
                            } B++
                        }
                    }
                })
            }), n && a.attr("title", a.textStr), p &&
            p.removeChild(b), D && a.applyTextShadow && a.applyTextShadow(D)) : b.appendChild(P.createTextNode(e.replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
        }, getContrast: function (a) { a = aa(a).rgba; return 384 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF" }, button: function (a, b, c, d, e, f, g, h, l) {
            var n = this.label(a, b, c, l, null, null, null, null, "button"), m = 0, t, v, B, D, k, p; a = { x1: 0, y1: 0, x2: 0, y2: 1 }; e = A({ "stroke-width": 1, stroke: "#CCCCCC", fill: { linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]] }, r: 2, padding: 5, style: { color: "black" } }, e); B = e.style;
            delete e.style; f = A(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]] } }, f); D = f.style; delete f.style; g = A(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]] } }, g); k = g.style; delete g.style; h = A(e, { style: { color: "#CCC" } }, h); p = h.style; delete h.style; da(n.element, Ca ? "mouseover" : "mouseenter", function () { 3 !== m && n.attr(f).css(D) }); da(n.element, Ca ? "mouseout" : "mouseleave", function () { 3 !== m && (t = [e, f, g][m], v = [B, D, k][m], n.attr(t).css(v)) }); n.setState = function (a) {
                (n.state = m = a) ? 2 ===
                a ? n.attr(g).css(k) : 3 === a && n.attr(h).css(p) : n.attr(e).css(B)
            }; return n.on("click", function (a) { 3 !== m && d.call(n, a) }).attr(e).css(J({ cursor: "default" }, B))
        }, crispLine: function (a, b) { a[1] === a[4] && (a[1] = a[4] = Q(a[1]) - b % 2 / 2); a[2] === a[5] && (a[2] = a[5] = Q(a[2]) + b % 2 / 2); return a }, path: function (a) { var b = { fill: "none" }; fa(a) ? b.d = a : sa(a) && J(b, a); return this.createElement("path").attr(b) }, circle: function (a, b, c) {
            a = sa(a) ? a : { x: a, y: b, r: c }; b = this.createElement("circle"); b.xSetter = b.ySetter = function (a, b, c) {
                c.setAttribute("c" +
                b, a)
            }; return b.attr(a)
        }, arc: function (a, b, c, d, e, f) { sa(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x); a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, { innerR: d || 0, start: e || 0, end: f || 0 }); a.r = c; return a }, rect: function (a, b, c, d, e, f) { e = sa(a) ? a.r : e; var g = this.createElement("rect"); a = sa(a) ? a : a === L ? {} : { x: a, y: b, width: H(c, 0), height: H(d, 0) }; f !== L && (g.strokeWidth = f, a = g.crisp(a)); e && (a.r = e); g.rSetter = function (a, b, c) { x(c, { rx: a, ry: a }) }; return g.attr(a) }, setSize: function (a, b, c) {
            var d = this.alignedObjects, e = d.length; this.width =
            a; this.height = b; for (this.boxWrapper[y(c, !0) ? "animate" : "attr"]({ width: a, height: b }) ; e--;) d[e].align()
        }, g: function (a) { var b = this.createElement("g"); return w(a) ? b.attr({ "class": "highcharts-" + a }) : b }, image: function (a, b, c, d, e) { var f = { preserveAspectRatio: "none" }; 1 < arguments.length && J(f, { x: b, y: c, width: d, height: e }); f = this.createElement("image").attr(f); f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a); return f }, symbol: function (a,
        b, c, d, e, f) {
            var g = this, h, l = this.symbols[a], l = l && l(Q(b), Q(c), d, e, f), n = /^url\((.*?)\)$/, m, t; l ? (h = this.path(l), J(h, { symbolName: a, x: b, y: c, width: d, height: e }), f && J(h, f)) : n.test(a) && (t = function (a, b) { a.element && (a.attr({ width: b[0], height: b[1] }), a.alignByTranslate || a.translate(Q((d - b[0]) / 2), Q((e - b[1]) / 2))) }, m = a.match(n)[1], a = Bb[m] || f && f.width && f.height && [f.width, f.height], h = this.image(m).attr({ x: b, y: c }), h.isImg = !0, a ? t(h, a) : (h.attr({ width: 0, height: 0 }), I("img", {
                onload: function () {
                    0 === this.width && (K(this, {
                        position: "absolute",
                        top: "-999em"
                    }), P.body.appendChild(this)); t(h, Bb[m] = [this.width, this.height]); this.parentNode && this.parentNode.removeChild(this); g.imgCount--; if (!g.imgCount && na[g.chartIndex].onload) na[g.chartIndex].onload()
                }, src: m
            }), this.imgCount++)); return h
        }, symbols: {
            circle: function (a, b, c, d) { var e = .166 * c; return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"] }, square: function (a, b, c, d) { return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"] }, triangle: function (a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d,
                a, b + d, "Z"]
            }, "triangle-down": function (a, b, c, d) { return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"] }, diamond: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"] }, arc: function (a, b, c, d, e) { var f = e.start; c = e.r || c || d; var g = e.end - .001; d = e.innerR; var h = e.open, l = Ga(f), n = Qa(f), m = Ga(g), g = Qa(g); e = e.end - f < yb ? 0 : 1; return ["M", a + c * l, b + c * n, "A", c, c, 0, e, 1, a + c * m, b + c * g, h ? "M" : "L", a + d * m, b + d * g, "A", d, d, 0, e, 0, a + d * l, b + d * n, h ? "" : "Z"] }, callout: function (a, b, c, d, e) {
                var f = U(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX; e = e && e.anchorY;
                var l; l = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b]; h && h > c && e > b + g && e < b + d - g ? l.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && 0 > h && e > b + g && e < b + d - g ? l.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? l.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && 0 > e && h > a + g && h < a + c - g && l.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b); return l
            }
        }, clipRect: function (a, b, c, d) {
            var e = "highcharts-" +
            ob++, f = this.createElement("clipPath").attr({ id: e }).add(this.defs); a = this.rect(a, b, c, d, 0).add(f); a.id = e; a.clipPath = f; a.count = 0; return a
        }, text: function (a, b, c, d) {
            var e = xa || !ta && this.forExport, f = {}; if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c); f.x = Math.round(b || 0); c && (f.y = Math.round(c)); if (a || 0 === a) f.text = a; a = this.createElement("text").attr(f); e && a.css({ position: "absolute" }); d || (a.xSetter = function (a, b, c) {
                var d = c.getElementsByTagName("tspan"), e, f = c.getAttribute(b), v; for (v = 0; v < d.length; v++) e =
                d[v], e.getAttribute(b) === f && e.setAttribute(b, a); c.setAttribute(b, a)
            }); return a
        }, fontMetrics: function (a, b) { var c, d; a = a || this.style.fontSize; !a && b && q.getComputedStyle && (b = b.element || b, a = (c = q.getComputedStyle(b, "")) && c.fontSize); a = /px/.test(a) ? E(a) : /em/.test(a) ? 12 * parseFloat(a) : 12; c = 24 > a ? a + 3 : Q(1.2 * a); d = Q(.8 * c); return { h: c, b: d, f: a } }, rotCorr: function (a, b, c) { var d = a; b && c && (d = H(d * Ga(b * Ka), 4)); return { x: -a / 3 * Qa(b * Ka), y: d } }, label: function (a, b, c, d, e, f, g, h, l) {
            var n = this, m = n.g(l), t = n.text("", 0, 0, g).attr({ zIndex: 1 }),
            v, B, D = 0, k = 3, p = 0, y, r, z, q, C = 0, F = {}, H, N, x, ea, E; x = function () { var a, b; a = t.element.style; B = (void 0 === y || void 0 === r || m.styles.textAlign) && w(t.textStr) && t.getBBox(); m.width = (y || B.width || 0) + 2 * k + p; m.height = (r || B.height || 0) + 2 * k; H = k + n.fontMetrics(a && a.fontSize, t).b; N && (v || (a = C, b = (h ? -H : 0) + C, m.box = v = n.symbols[d] ? n.symbol(d, a, b, m.width, m.height, F) : n.rect(a, b, m.width, m.height, 0, F["stroke-width"]), v.isImg || v.attr("fill", "none"), v.add(m)), v.isImg || v.attr(J({ width: Q(m.width), height: Q(m.height) }, F)), F = null) }; ea = function () {
                var a =
                m.styles, a = a && a.textAlign, b = p + k, c; c = h ? 0 : H; w(y) && B && ("center" === a || "right" === a) && (b += { center: .5, right: 1 }[a] * (y - B.width)); if (b !== t.x || c !== t.y) t.attr("x", b), c !== L && t.attr("y", c); t.x = b; t.y = c
            }; E = function (a, b) { v ? v.attr(a, b) : F[a] = b }; m.onAdd = function () { t.add(m); m.attr({ text: a || 0 === a ? a : "", x: b, y: c }); v && w(e) && m.attr({ anchorX: e, anchorY: f }) }; m.widthSetter = function (a) { y = a }; m.heightSetter = function (a) { r = a }; m.paddingSetter = function (a) { w(a) && a !== k && (k = m.padding = a, ea()) }; m.paddingLeftSetter = function (a) {
                w(a) && a !== p &&
                (p = a, ea())
            }; m.alignSetter = function (a) { a = { left: 0, center: .5, right: 1 }[a]; a !== D && (D = a, B && m.attr({ x: z })) }; m.textSetter = function (a) { a !== L && t.textSetter(a); x(); ea() }; m["stroke-widthSetter"] = function (a, b) { a && (N = !0); C = a % 2 / 2; E(b, a) }; m.strokeSetter = m.fillSetter = m.rSetter = function (a, b) { "fill" === b && a && (N = !0); E(b, a) }; m.anchorXSetter = function (a, b) { e = a; E(b, Q(a) - C - z) }; m.anchorYSetter = function (a, b) { f = a; E(b, a - q) }; m.xSetter = function (a) { m.x = a; D && (a -= D * ((y || B.width) + 2 * k)); z = Q(a); m.attr("translateX", z) }; m.ySetter = function (a) {
                q =
                m.y = Q(a); m.attr("translateY", q)
            }; var G = m.css; return J(m, { css: function (a) { if (a) { var b = {}; a = A(a); u(m.textProps, function (c) { a[c] !== L && (b[c] = a[c], delete a[c]) }); t.css(b) } return G.call(m, a) }, getBBox: function () { return { width: B.width + 2 * k, height: B.height + 2 * k, x: B.x - k, y: B.y - k } }, shadow: function (a) { v && v.shadow(a); return m }, destroy: function () { oa(m.element, "mouseenter"); oa(m.element, "mouseleave"); t && (t = t.destroy()); v && (v = v.destroy()); ma.prototype.destroy.call(m); m = n = x = ea = E = null } })
        }
    }; J(ma.prototype, {
        htmlCss: function (a) {
            var b =
            this.element; if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform(); a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden"); this.styles = J(this.styles, a); K(this.element, a); return this
        }, htmlGetBBox: function () { var a = this.element; "text" === a.nodeName && (a.style.position = "absolute"); return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight } }, htmlUpdateTransform: function () {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX ||
                0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = { left: 0, center: .5, right: 1 }[g], l = this.shadows, n = this.styles; K(b, { marginLeft: c, marginTop: d }); l && u(l, function (a) { K(a, { marginLeft: c + 1, marginTop: d + 1 }) }); this.inverted && u(b.childNodes, function (c) { a.invertChild(c, b) }); if ("SPAN" === b.tagName) {
                    var l = this.rotation, m = E(this.textWidth), t = n && n.whiteSpace, v = [l, g, b.innerHTML, this.textWidth, this.textAlign].join(); v !== this.cTT && (n = a.fontMetrics(b.style.fontSize).b, w(l) && this.setSpanRotation(l,
                    h, n), K(b, { width: "", whiteSpace: t || "nowrap" }), b.offsetWidth > m && /[ \-]/.test(b.textContent || b.innerText) && K(b, { width: m + "px", display: "block", whiteSpace: t || "normal" }), this.getSpanCorrection(b.offsetWidth, n, h, l, g)); K(b, { left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px" }); eb && (n = b.offsetHeight); this.cTT = v
                }
            } else this.alignOnAdd = !0
        }, setSpanRotation: function (a, b, c) {
            var d = {}, e = Ca ? "-ms-transform" : eb ? "-webkit-transform" : La ? "MozTransform" : zb ? "-o-transform" : ""; d[e] = d.transform = "rotate(" + a + "deg)"; d[e + (La ? "Origin" :
            "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px"; K(this.element, d)
        }, getSpanCorrection: function (a, b, c) { this.xCorr = -a * c; this.yCorr = -b }
    }); J($a.prototype, {
        html: function (a, b, c) {
            var d = this.createElement("span"), e = d.element, f = d.renderer, g = f.isSVG, h = function (a, b) { u(["opacity", "visibility"], function (c) { Cb(a, c + "Setter", function (a, c, d, e) { a.call(this, c, d, e); b[d] = c }) }) }; d.textSetter = function (a) { a !== e.innerHTML && delete this.bBox; e.innerHTML = this.textStr = a; d.htmlUpdateTransform() }; g && h(d, d.element.style); d.xSetter =
            d.ySetter = d.alignSetter = d.rotationSetter = function (a, b) { "align" === b && (b = "textAlign"); d[b] = a; d.htmlUpdateTransform() }; d.attr({ text: a, x: Q(b), y: Q(c) }).css({ position: "absolute", fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); e.style.whiteSpace = "nowrap"; d.css = d.htmlCss; g && (d.add = function (a) {
                var b, c = f.box.parentNode, g = []; if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) g.push(a), a = a.parentGroup; u(g.reverse(), function (a) {
                            var d, e = x(a.element, "class"); e && (e = { className: e }); b = a.div = a.div || I("div",
                            e, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", opacity: a.opacity }, b || c); d = b.style; J(a, { translateXSetter: function (b, c) { d.left = b + "px"; a[c] = b; a.doTransform = !0 }, translateYSetter: function (b, c) { d.top = b + "px"; a[c] = b; a.doTransform = !0 } }); h(a, d)
                        })
                    }
                } else b = c; b.appendChild(e); d.added = !0; d.alignOnAdd && d.htmlUpdateTransform(); return d
            }); return d
        }
    }); Pa.prototype = {
        addLabel: function () {
            var a = this.axis, b = a.options, c = a.chart, d = a.categories, e = a.names, f = this.pos, g = b.labels, h = a.tickPositions,
            l = f === h[0], n = f === h[h.length - 1], e = d ? y(d[f], e[f], f) : f, d = this.label, h = h.info, m; a.isDatetimeAxis && h && (m = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]); this.isFirst = l; this.isLast = n; b = a.labelFormatter.call({ axis: a, chart: c, isFirst: l, isLast: n, dateTimeLabelFormat: m, value: a.isLog ? C(a.lin2log(e)) : e }); w(d) ? d && d.attr({ text: b }) : (this.labelLength = (this.label = d = w(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(A(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        }, getLabelSize: function () {
            return this.label ?
            this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        }, handleOverflow: function (a) {
            var b = this.axis, c = a.x, d = b.chart.chartWidth, e = b.chart.spacing, f = y(b.labelLeft, U(b.pos, e[3])), e = y(b.labelRight, H(b.pos + b.len, d - e[1])), g = this.label, h = this.rotation, l = { left: 0, center: .5, right: 1 }[b.labelAlign], n = g.getBBox().width, m = b.getSlotWidth(), t = m, v = 1, B, D = {}; if (h) 0 > h && c - l * n < f ? B = Q(c / Ga(h * Ka) - f) : 0 < h && c + l * n > e && (B = Q((d - c) / Ga(h * Ka))); else if (d = c + (1 - l) * n, c - l * n < f ? t = a.x + t * (1 - l) - f : d > e && (t = e - a.x + t * l, v = -1), t = U(m, t), t < m && "center" ===
            b.labelAlign && (a.x += v * (m - t - l * (m - U(n, t)))), n > t || b.autoRotation && g.styles.width) B = t; B && (D.width = B, b.options.labels.style.textOverflow || (D.textOverflow = "ellipsis"), g.css(D))
        }, getPosition: function (a, b, c, d) { var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight; return { x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB } }, getLabelPosition: function (a,
        b, c, d, e, f, g, h) { var l = this.axis, n = l.transA, m = l.reversed, t = l.staggerLines, v = l.tickRotCorr || { x: 0, y: 0 }, B = e.y; w(B) || (B = 0 === l.side ? c.rotation ? -8 : -c.getBBox().height : 2 === l.side ? v.y + 8 : Ga(c.rotation * Ka) * (v.y - c.getBBox(!1, 0).height / 2)); a = a + e.x + v.x - (f && d ? f * n * (m ? -1 : 1) : 0); b = b + B - (f && !d ? f * n * (m ? 1 : -1) : 0); t && (c = g / (h || 1) % t, l.opposite && (c = t - c - 1), b += l.labelOffset / t * c); return { x: a, y: Q(b) } }, getMarkPath: function (a, b, c, d, e, f) { return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d) }, render: function (a, b, c) {
            var d = this.axis,
            e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, l = this.label, n = this.pos, m = e.labels, t = this.gridLine, v = h ? h + "Grid" : "grid", B = h ? h + "Tick" : "tick", D = e[v + "LineWidth"], k = e[v + "LineColor"], p = e[v + "LineDashStyle"], v = d.tickSize(B), B = e[B + "Color"], r = this.mark, u = m.step, z = !0, w = d.tickmarkOffset, q = this.getPosition(g, n, w, b), C = q.x, q = q.y, F = g && C === d.pos + d.len || !g && q === d.pos ? -1 : 1; c = y(c, 1); this.isActive = !0; if (D && (n = d.getPlotLinePath(n + w, D * F, b, !0), t === L && (t = { stroke: k, "stroke-width": D }, p && (t.dashstyle = p), h || (t.zIndex = 1),
            b && (t.opacity = 0), this.gridLine = t = D ? f.path(n).attr(t).add(d.gridGroup) : null), !b && t && n)) t[this.isNew ? "attr" : "animate"]({ d: n, opacity: c }); v && (d.opposite && (v[0] = -v[0]), h = this.getMarkPath(C, q, v[0], v[1] * F, g, f), r ? r.animate({ d: h, opacity: c }) : this.mark = f.path(h).attr({ stroke: B, "stroke-width": v[1], opacity: c }).add(d.axisGroup)); l && ba(C) && (l.xy = q = this.getLabelPosition(C, q, l, g, m, w, a, u), this.isFirst && !this.isLast && !y(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !y(e.showLastLabel, 1) ? z = !1 : !g || d.isRadial || m.step ||
            m.rotation || b || 0 === c || this.handleOverflow(q), u && a % u && (z = !1), z && ba(q.y) ? (q.opacity = c, l[this.isNew ? "attr" : "animate"](q)) : (Ja(l), l.attr("y", -9999)), this.isNew = !1)
        }, destroy: function () { N(this, this.axis) }
    }; M.PlotLineOrBand = function (a, b) { this.axis = a; b && (this.options = b, this.id = b.id) }; M.PlotLineOrBand.prototype = {
        render: function () {
            var a = this, b = a.axis, c = b.horiz, d = a.options, e = d.label, f = a.label, g = d.width, h = d.to, l = d.from, n = w(l) && w(h), m = d.value, t = d.dashStyle, v = a.svgElem, B = [], D, k = d.color, p = y(d.zIndex, 0), r = d.events,
            u = {}, q = b.chart.renderer, B = b.log2lin; b.isLog && (l = B(l), h = B(h), m = B(m)); if (g) B = b.getPlotLinePath(m, g), u = { stroke: k, "stroke-width": g }, t && (u.dashstyle = t); else if (n) B = b.getPlotBandPath(l, h, d), k && (u.fill = k), d.borderWidth && (u.stroke = d.borderColor, u["stroke-width"] = d.borderWidth); else return; u.zIndex = p; if (v) B ? (v.show(), v.animate({ d: B })) : (v.hide(), f && (a.label = f = f.destroy())); else if (B && B.length && (a.svgElem = v = q.path(B).attr(u).add(), r)) for (D in d = function (b) { v.on(b, function (c) { r[b].apply(a, [c]) }) }, r) d(D); e && w(e.text) &&
            B && B.length && 0 < b.width && 0 < b.height && !B.flat ? (e = A({ align: c && n && "center", x: c ? !n && 4 : 10, verticalAlign: !c && n && "middle", y: c ? n ? 16 : 10 : n ? 6 : -4, rotation: c && !n && 90 }, e), this.renderLabel(e, B, n, p)) : f && f.hide(); return a
        }, renderLabel: function (a, b, c, d) {
            var e = this.label, f = this.axis.chart.renderer; e || (e = { align: a.textAlign || a.align, rotation: a.rotation }, e.zIndex = d, this.label = e = f.text(a.text, 0, 0, a.useHTML).attr(e).css(a.style).add()); d = [b[1], b[4], c ? b[6] : b[1]]; b = [b[2], b[5], c ? b[7] : b[2]]; c = r(d); f = r(b); e.align(a, !1, {
                x: c, y: f,
                width: F(d) - c, height: F(b) - f
            }); e.show()
        }, destroy: function () { W(this.axis.plotLinesAndBands, this); delete this.axis; N(this) }
    }; var ra = M.Axis = function () { this.init.apply(this, arguments) }; ra.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, gridLineColor: "#D8D8D8", labels: { enabled: !0, style: { color: "#606060", cursor: "default", fontSize: "11px" }, x: 0 }, lineColor: "#C0D0E0", lineWidth: 1,
            minPadding: .01, maxPadding: .01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle", style: { color: "#707070" } }, type: "linear"
        }, defaultYAxisOptions: {
            endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, lineWidth: 0, maxPadding: .05, minPadding: .05, startOnTick: !0,
            title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1, formatter: function () { return M.numberFormat(this.total, -1) }, style: A(Ba.line.dataLabels.style, { color: "#000000" }) }
        }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function (a, b) {
            var c = b.isX; this.chart = a; this.horiz =
            a.inverted ? !c : c; this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis"; this.opposite = b.opposite; this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(b); var d = this.options, e = d.type; this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter; this.userOptions = b; this.minPixelPadding = 0; this.reversed = d.reversed; this.visible = !1 !== d.visible; this.zoomEnabled = !1 !== d.zoomEnabled; this.categories = d.categories || "category" === e; this.names = this.names || []; this.isLog = "logarithmic" === e; this.isDatetimeAxis =
            "datetime" === e; this.isLinked = w(d.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = d.minRange || d.maxZoom; this.range = d.range; this.offset = d.offset || 0; this.stacks = {}; this.oldStacks = {}; this.stacksTouched = 0; this.min = this.max = null; this.crosshair = y(d.crosshair, G(a.options.tooltip.crosshairs)[c ? 0 : 1], !1); var f, d = this.options.events; -1 === Aa(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length,
            0, this) : a.axes.push(this), a[this.coll].push(this)); this.series = this.series || []; a.inverted && c && this.reversed === L && (this.reversed = !0); this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine; for (f in d) da(this, f, d[f]); this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
        }, setOptions: function (a) {
            this.options = A(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side],
            A(ja[this.coll], a))
        }, defaultLabelFormatter: function () { var a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = ja.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval; if (h) g = ca(h, this); else if (c) g = b; else if (d) g = Na(d, b); else if (f && 1E3 <= a) for (; f-- && g === L;) c = Math.pow(1E3, f + 1), a >= c && 0 === 10 * b % c && null !== e[f] && 0 !== b && (g = M.numberFormat(b / c, -1) + e[f]); g === L && (g = 1E4 <= ga(b) ? M.numberFormat(b, -1) : M.numberFormat(b, -1, L, "")); return g }, getSeriesExtremes: function () {
            var a =
            this, b = a.chart; a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.threshold = null; a.softThreshold = !a.isXAxis; a.buildStacks && a.buildStacks(); u(a.series, function (c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options, e = d.threshold, f; a.hasVisibleSeries = !0; a.isLog && 0 >= e && (e = null); if (a.isXAxis) d = c.xData, d.length && (c = r(d), ba(c) || c instanceof ua || (d = Ea(d, function (a) { return ba(a) }), c = r(d)), a.dataMin = U(y(a.dataMin, d[0]), c), a.dataMax = H(y(a.dataMax, d[0]), F(d))); else if (c.getExtremes(), f = c.dataMax, c = c.dataMin,
                    w(c) && w(f) && (a.dataMin = U(y(a.dataMin, c), c), a.dataMax = H(y(a.dataMax, f), f)), w(e) && (a.threshold = e), !d.softThreshold || a.isLog) a.softThreshold = !1
                }
            })
        }, translate: function (a, b, c, d, e, f) {
            var g = this.linkedParent || this, h = 1, l = 0, n = d ? g.oldTransA : g.transA; d = d ? g.oldMin : g.min; var m = g.minPixelPadding; e = (g.isOrdinal || g.isBroken || g.isLog && e) && g.lin2val; n || (n = g.transA); c && (h *= -1, l = g.len); g.reversed && (h *= -1, l -= h * (g.sector || g.len)); b ? (a = (a * h + l - m) / n + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), "between" === f && (f = .5), a = h * (a -
            d) * n + l + h * m + (ba(f) ? n * f * g.pointRange : 0)); return a
        }, toPixels: function (a, b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0) }, getPlotLinePath: function (a, b, c, d, e) {
            var f = this.chart, g = this.left, h = this.top, l, n, m = c && f.oldChartHeight || f.chartHeight, t = c && f.oldChartWidth || f.chartWidth, v; l = this.transB; var B = function (a, b, c) { if (a < b || a > c) d ? a = U(H(b, a), c) : v = !0; return a }; e = y(e, this.translate(a, null, null, c)); a = c = Q(e + l);
            l = n = Q(m - e - l); ba(e) ? this.horiz ? (l = h, n = m - this.bottom, a = c = B(a, g, g + this.width)) : (a = g, c = t - this.right, l = n = B(l, h, h + this.height)) : v = !0; return v && !d ? null : f.renderer.crispLine(["M", a, l, "L", c, n], b || 1)
        }, getLinearTickPositions: function (a, b, c) { var d, e = C(ka(b / a) * a), f = C(za(c / a) * a), g = []; if (b === c && ba(b)) return [b]; for (b = e; b <= f;) { g.push(b); b = C(b + a); if (b === d) break; d = b } return g }, getMinorTickPositions: function () {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e, f = this.pointRangePadding || 0; e = this.min -
            f; var f = this.max + f, g = f - e; if (g && g / c < this.len / 3) if (this.isLog) for (f = b.length, e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0)); else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek)); else for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b); 0 !== d.length && this.trimTicks(d, a.startOnTick, a.endOnTick); return d
        }, adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange,
            f, g, h, l, n, m; this.isXAxis && this.minRange === L && !this.isLog && (w(a.min) || w(a.max) ? this.minRange = null : (u(this.series, function (a) { l = a.xData; for (g = n = a.xIncrement ? 1 : l.length - 1; 0 < g; g--) if (h = l[g] - l[g - 1], f === L || h < f) f = h }), this.minRange = U(5 * f, this.dataMax - this.dataMin))); c - b < this.minRange && (m = this.minRange, d = (m - c + b) / 2, d = [b - d, y(a.min, b - d)], e && (d[2] = this.dataMin), b = F(d), c = [b + m, y(a.max, b + m)], e && (c[2] = this.dataMax), c = r(c), c - b < m && (d[0] = c - m, d[1] = y(a.min, c - m), b = F(d))); this.min = b; this.max = c
        }, getClosest: function () {
            var a;
            this.categories ? a = 1 : u(this.series, function (b) { var c = b.closestPointRange; !b.noSharedTooltip && w(c) && (a = w(a) ? U(a, c) : c) }); return a
        }, setAxisTranslation: function (a) {
            var b = this, c = b.max - b.min, d = b.axisPointRange || 0, e, f = 0, g = 0, h = b.linkedParent, l = !!b.categories, n = b.transA, m = b.isXAxis; if (m || l || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : (e = b.getClosest(), u(b.series, function (a) {
                var c = l ? 1 : m ? y(a.options.pointRange, e, 0) : b.axisPointRange || 0; a = a.options.pointPlacement; d = H(d, c); b.single || (f = H(f, Y(a) ? 0 : c / 2), g = H(g,
                "on" === a ? 0 : c))
            })), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = U(d, c), m && (b.closestPointRange = e); a && (b.oldTransA = n); b.translationSlope = b.transA = n = b.len / (c + g || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = n * f
        }, minFromRange: function () { return this.max - this.range }, setTickInterval: function (a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.log2lin, g = b.isDatetimeAxis, h = b.isXAxis, l = b.isLinked, n = d.maxPadding, m = d.minPadding, t = d.tickInterval, v = d.tickPixelInterval,
            B = b.categories, D = b.threshold, ia = b.softThreshold, r, q, z, F; g || B || l || this.getTickAmount(); z = y(b.userMin, d.min); F = y(b.userMax, d.max); l ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = y(c.min, c.dataMin), b.max = y(c.max, c.dataMax), d.type !== b.linkedParent.options.type && T(11, 1)) : (!ia && w(D) && (b.dataMin >= D ? (r = D, m = 0) : b.dataMax <= D && (q = D, n = 0)), b.min = y(z, r, b.dataMin), b.max = y(F, q, b.dataMax)); e && (!a && 0 >= U(b.min, y(b.dataMin, b.min)) && T(10, 1), b.min = C(f(b.min), 15), b.max = C(f(b.max), 15)); b.range &&
            w(b.max) && (b.userMin = b.min = z = H(b.min, b.minFromRange()), b.userMax = F = b.max, b.range = null); Z(b, "foundExtremes"); b.beforePadding && b.beforePadding(); b.adjustForMinRange(); !(B || b.axisPointRange || b.usePercentage || l) && w(b.min) && w(b.max) && (f = b.max - b.min) && (!w(z) && m && (b.min -= f * m), !w(F) && n && (b.max += f * n)); ba(d.floor) && (b.min = H(b.min, d.floor)); ba(d.ceiling) && (b.max = U(b.max, d.ceiling)); ia && w(b.dataMin) && (D = D || 0, !w(z) && b.min < D && b.dataMin >= D ? b.min = D : !w(F) && b.max > D && b.dataMax <= D && (b.max = D)); b.tickInterval = b.min ===
            b.max || void 0 === b.min || void 0 === b.max ? 1 : l && !t && v === b.linkedParent.options.tickPixelInterval ? t = b.linkedParent.tickInterval : y(t, this.tickAmount ? (b.max - b.min) / H(this.tickAmount - 1, 1) : void 0, B ? 1 : (b.max - b.min) * v / H(b.len, v)); h && !a && u(b.series, function (a) { a.processData(b.min !== b.oldMin || b.max !== b.oldMax) }); b.setAxisTranslation(!0); b.beforeSetTickPositions && b.beforeSetTickPositions(); b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval)); b.pointRange && !t && (b.tickInterval = H(b.pointRange,
            b.tickInterval)); a = y(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange); !t && b.tickInterval < a && (b.tickInterval = a); g || e || t || (b.tickInterval = p(b.tickInterval, null, k(b.tickInterval), y(d.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount)); !this.tickAmount && this.len && (b.tickInterval = b.unsquish()); this.setTickPositions()
        }, setTickPositions: function () {
            var a = this.options, b, c = a.tickPositions, d = a.tickPositioner, e = a.startOnTick, f = a.endOnTick, g; this.tickmarkOffset =
            this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval; this.tickPositions = b = c && c.slice(); !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval,
            this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max]))) && (this.tickPositions = b = d); this.isLinked || (this.trimTicks(b, e, f), this.min === this.max && w(this.min) && !this.tickAmount && (g = !0, this.min -= .5, this.max += .5), this.single = g, c || d || this.adjustTickAmount())
        }, trimTicks: function (a, b, c) {
            var d = a[0], e = a[a.length - 1], f = this.minPointOffset || 0; if (b) this.min = d; else for (; this.min - f > a[0];) a.shift(); if (c) this.max = e; else for (; this.max + f < a[a.length - 1];) a.pop();
            0 === a.length && w(d) && a.push((e + d) / 2)
        }, alignToOthers: function () { var a = {}, b, c = this.options; !1 !== this.chart.options.chart.alignTicks && !1 !== c.alignTicks && u(this.chart[this.coll], function (c) { var e = c.options, e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join(); c.series.length && (a[e] ? b = !0 : a[e] = 1) }); return b }, getTickAmount: function () {
            var a = this.options, b = a.tickAmount, c = a.tickPixelInterval; !w(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2); !b && this.alignToOthers() &&
            (b = za(this.len / c) + 1); 4 > b && (this.finalTickAmt = b, b = 5); this.tickAmount = b
        }, adjustTickAmount: function () { var a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, d = this.finalTickAmt, e = b && b.length; if (e < c) { for (; b.length < c;) b.push(C(b[b.length - 1] + a)); this.transA *= (e - 1) / (c - 1); this.max = b[b.length - 1] } else e > c && (this.tickInterval *= 2, this.setTickPositions()); if (w(d)) { for (a = c = b.length; a--;) (3 === d && 1 === a % 2 || 2 >= d && 0 < a && a < c - 1) && b.splice(a, 1); this.finalTickAmt = L } }, setScale: function () {
            var a, b; this.oldMin = this.min;
            this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); b = this.len !== this.oldAxisLength; u(this.series, function (b) { if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0 }); b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !==
            this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
        }, setExtremes: function (a, b, c, d, e) { var f = this, g = f.chart; c = y(c, !0); u(f.series, function (a) { delete a.kdTree }); e = J(e, { min: a, max: b }); Z(f, "setExtremes", e, function () { f.userMin = a; f.userMax = b; f.eventArgs = e; c && g.redraw(d) }) }, zoom: function (a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options, f = U(c, y(e.min, c)), e = H(d, y(e.max, d)); this.allowZoomOutside || (w(c) && a <= f && (a = f), w(d) && b >= e && (b = e)); this.displayBtn = a !== L || b !== L; this.setExtremes(a,
            b, !1, L, { trigger: "zoom" }); return !0
        }, setAxisSize: function () {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = y(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = y(b.height, a.plotHeight), g = y(b.top, a.plotTop), b = y(b.left, a.plotLeft + c), c = /%$/; c.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight)); c.test(g) && (g = Math.round(parseFloat(g) / 100 * a.plotHeight + a.plotTop)); this.left = b; this.top = g; this.width = e; this.height = f; this.bottom = a.chartHeight - f - g; this.right = a.chartWidth - e - b; this.len = H(d ? e : f, 0);
            this.pos = d ? b : g
        }, getExtremes: function () { var a = this.isLog, b = this.lin2log; return { min: a ? C(b(this.min)) : this.min, max: a ? C(b(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }, getThreshold: function (a) { var b = this.isLog, c = this.lin2log, d = b ? c(this.min) : this.min, b = b ? c(this.max) : this.max; null === a ? a = d : d > a ? a = d : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }, autoLabelAlign: function (a) {
            a = (y(a, 0) - 90 * this.side + 720) % 360; return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" :
            "center"
        }, tickSize: function (a) { var b = this.options, c = b[a + "Length"], d = y(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0); if (d && c) return "inside" === b[a + "Position"] && (c = -c), [c, d] }, labelMetrics: function () { return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label) }, unsquish: function () {
            var a = this.options.labels, b = this.horiz, c = this.tickInterval, d = c, e = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c), f, g = a.rotation, h = this.labelMetrics(), l, n = Number.MAX_VALUE,
            m, t = function (a) { a /= e || 1; a = 1 < a ? za(a) : 1; return a * c }; b ? (m = !a.staggerLines && !a.step && (w(g) ? [g] : e < y(a.autoRotationLimit, 80) && a.autoRotation)) && u(m, function (a) { var b; if (a === g || a && -90 <= a && 90 >= a) l = t(ga(h.h / Qa(Ka * a))), b = l + ga(a / 360), b < n && (n = b, f = a, d = l) }) : a.step || (d = t(h.h)); this.autoRotation = m; this.labelRotation = y(f, g); return d
        }, getSlotWidth: function () {
            var a = this.chart, b = this.horiz, c = this.options.labels, d = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), e = a.margin[3]; return b && 2 > (c.step || 0) && !c.rotation &&
            (this.staggerLines || 1) * a.plotWidth / d || !b && (e && e - a.spacing[3] || .33 * a.chartWidth)
        }, renderUnsquish: function () {
            var a = this.chart, b = a.renderer, c = this.tickPositions, d = this.ticks, e = this.options.labels, f = this.horiz, g = this.getSlotWidth(), h = H(1, Q(g - 2 * (e.padding || 5))), l = {}, n = this.labelMetrics(), m = e.style.textOverflow, t, v = 0, B, D; Y(e.rotation) || (l.rotation = e.rotation || 0); if (this.autoRotation) u(c, function (a) { (a = d[a]) && a.labelLength > v && (v = a.labelLength) }), v > h && v > n.h ? l.rotation = this.labelRotation : this.labelRotation =
            0; else if (g && (t = { width: h + "px" }, !m)) for (t.textOverflow = "clip", B = c.length; !f && B--;) if (D = c[B], h = d[D].label) "ellipsis" === h.styles.textOverflow ? h.css({ textOverflow: "clip" }) : d[D].labelLength > g && h.css({ width: g + "px" }), h.getBBox().height > this.len / c.length - (n.h - n.f) && (h.specCss = { textOverflow: "ellipsis" }); l.rotation && (t = { width: (v > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px" }, m || (t.textOverflow = "ellipsis")); if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) l.align = this.labelAlign;
            u(c, function (a) { var b = (a = d[a]) && a.label; b && (b.attr(l), t && b.css(A(t, b.specCss)), delete b.specCss, a.rotation = l.rotation) }); this.tickRotCorr = b.rotCorr(n.b, this.labelRotation || 0, 0 !== this.side)
        }, hasData: function () { return this.hasVisibleSeries || w(this.min) && w(this.max) && !!this.tickPositions }, getOffset: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, l = b.inverted ? [1, 0, 3, 2][h] : h, n, m, t = 0, v, B = 0, D = d.title, k = d.labels, p = 0, r = a.opposite, q = b.axisOffset, b = b.clipOffset,
            z = [-1, 1, 1, -1][h], C, F = a.axisParent, N = this.tickSize("tick"); n = a.hasData(); a.showAxis = m = n || y(d.showEmpty, !0); a.staggerLines = a.horiz && k.staggerLines; a.axisGroup || (a.gridGroup = c.g("grid").attr({ zIndex: d.gridZIndex || 1 }).add(F), a.axisGroup = c.g("axis").attr({ zIndex: d.zIndex || 2 }).add(F), a.labelGroup = c.g("axis-labels").attr({ zIndex: k.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(F)); if (n || a.isLinked) u(e, function (b) { f[b] ? f[b].addLabel() : f[b] = new Pa(a, b) }), a.renderUnsquish(), !1 === k.reserveSpace ||
            0 !== h && 2 !== h && { 1: "left", 3: "right" }[h] !== a.labelAlign && "center" !== a.labelAlign || u(e, function (a) { p = H(f[a].getLabelSize(), p) }), a.staggerLines && (p *= a.staggerLines, a.labelOffset = p * (a.opposite ? -1 : 1)); else for (C in f) f[C].destroy(), delete f[C]; D && D.text && !1 !== D.enabled && (a.axisTitle || ((C = D.textAlign) || (C = (g ? { low: "left", middle: "center", high: "right" } : { low: r ? "right" : "left", middle: "center", high: r ? "left" : "right" })[D.align]), a.axisTitle = c.text(D.text, 0, 0, D.useHTML).attr({ zIndex: 7, rotation: D.rotation || 0, align: C }).addClass("highcharts-" +
            this.coll.toLowerCase() + "-title").css(D.style).add(a.axisGroup), a.axisTitle.isNew = !0), m && (t = a.axisTitle.getBBox()[g ? "height" : "width"], v = D.offset, B = w(v) ? 0 : y(D.margin, g ? 5 : 10)), a.axisTitle[m ? "show" : "hide"](!0)); a.offset = z * y(d.offset, q[h]); a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 }; c = 0 === h ? -a.labelMetrics().h : 2 === h ? a.tickRotCorr.y : 0; B = Math.abs(p) + B; p && (B = B - c + z * (g ? y(k.y, a.tickRotCorr.y + 8 * z) : k.x)); a.axisTitleMargin = y(v, B); q[h] = H(q[h], a.axisTitleMargin + t + z * a.offset, B, n && e.length && N ? N[0] : 0); d = d.offset ? 0 : 2 * ka(d.lineWidth /
            2); b[l] = H(b[l], d)
        }, getLinePath: function (a) { var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d; c && (a *= -1); return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a) }, getTitlePosition: function () {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, l = e.x || 0, n = e.y || 0, m = this.chart.renderer.fontMetrics(e.style.fontSize).f,
            d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? m : 0); return { x: a ? d + l : b + (g ? this.width : 0) + h + l, y: a ? b + n - (g ? this.height : 0) + h : d + n }
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.lin2log, g = a.isLinked, h = a.tickPositions, l = a.axisTitle, n = a.ticks, m = a.minorTicks, t = a.alternateBands, v = d.stackLabels, B = d.alternateGridColor, D = a.tickmarkOffset, k = d.lineWidth, p, r = b.hasRendered && ba(a.oldMin), y = a.showAxis, q =
            la(c.globalAnimation), z, w; a.labelEdge.length = 0; a.overlap = !1; u([n, m, t], function (a) { for (var b in a) a[b].isActive = !1 }); if (a.hasData() || g) a.minorTickInterval && !a.categories && u(a.getMinorTickPositions(), function (b) { m[b] || (m[b] = new Pa(a, b, "minor")); r && m[b].isNew && m[b].render(null, !0); m[b].render(null, !1, 1) }), h.length && (u(h, function (b, c) { if (!g || b >= a.min && b <= a.max) n[b] || (n[b] = new Pa(a, b)), r && n[b].isNew && n[b].render(c, !0, .1), n[b].render(c) }), D && (0 === a.min || a.single) && (n[-1] || (n[-1] = new Pa(a, -1, null, !0)), n[-1].render(-1))),
            B && u(h, function (c, d) { w = h[d + 1] !== L ? h[d + 1] + D : a.max - D; 0 === d % 2 && c < a.max && w <= a.max + (b.polar ? -D : D) && (t[c] || (t[c] = new M.PlotLineOrBand(a)), z = c + D, t[c].options = { from: e ? f(z) : z, to: e ? f(w) : w, color: B }, t[c].render(), t[c].isActive = !0) }), a._addedPlotLB || (u((d.plotLines || []).concat(d.plotBands || []), function (b) { a.addPlotBandOrLine(b) }), a._addedPlotLB = !0); u([n, m, t], function (a) {
                var c, d, e = [], f = q.duration; for (c in a) a[c].isActive || (a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c)); O(function () {
                    for (d = e.length; d--;) a[e[d]] &&
                    !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                }, a !== t && b.hasRendered && f ? f : 0)
            }); k && (p = a.getLinePath(k), a.axisLine ? a.axisLine.animate({ d: p }) : a.axisLine = c.path(p).attr({ stroke: d.lineColor, "stroke-width": k, zIndex: 7 }).add(a.axisGroup), a.axisLine[y ? "show" : "hide"](!0)); l && y && (l[l.isNew ? "attr" : "animate"](a.getTitlePosition()), l.isNew = !1); v && v.enabled && a.renderStackTotals(); a.isDirty = !1
        }, redraw: function () {
            this.visible && (this.render(), u(this.plotLinesAndBands, function (a) { a.render() })); u(this.series,
            function (a) { a.isDirty = !0 })
        }, destroy: function (a) { var b = this, c = b.stacks, d, e = b.plotLinesAndBands; a || oa(b); for (d in c) N(c[d]), c[d] = null; u([b.ticks, b.minorTicks, b.alternateBands], function (a) { N(a) }); for (a = e.length; a--;) e[a].destroy(); u("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) { b[a] && (b[a] = b[a].destroy()) }); this._addedPlotLB = this.chart._labelPanes = this.ordinalSlope = void 0 }, drawCrosshair: function (a, b) {
            var c, d = this.crosshair, e, f; a || (a = this.cross && this.cross.e);
            this.crosshair && !1 !== (w(b) || !y(d.snap, !0)) ? (y(d.snap, !0) ? w(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : y(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, null === c ? this.hideCrosshair() : (e = this.categories && !this.isRadial, f = y(d.width, e ? this.transA : 1), this.cross ? this.cross.attr({ d: c, visibility: "visible", "stroke-width": f }) : (e = {
                "pointer-events": "none", "stroke-width": f,
                stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"), zIndex: y(d.zIndex, 2)
            }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()), this.cross.e = a)) : this.hideCrosshair()
        }, hideCrosshair: function () { this.cross && this.cross.hide() }
    }; J(ra.prototype, {
        getPlotBandPath: function (a, b) { var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0); d && c ? (d.flat = d.toString() === c.toString(), d.push(c[4], c[5], c[1], c[2])) : d = null; return d }, addPlotBand: function (a) {
            return this.addPlotBandOrLine(a,
            "plotBands")
        }, addPlotLine: function (a) { return this.addPlotBandOrLine(a, "plotLines") }, addPlotBandOrLine: function (a, b) { var c = (new M.PlotLineOrBand(this, a)).render(), d = this.userOptions; c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c)); return c }, removePlotBandOrLine: function (a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy(); u([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
                for (e = b.length; e--;) b[e].id ===
                a && W(b, b[e])
            })
        }
    }); ra.prototype.getTimeTicks = function (a, b, c, d) {
        var e = [], f = {}, g = ja.global.useUTC, h, l = new ua(b - S(b)), n = a.unitRange, m = a.count; if (w(b)) {
            l[tb](n >= X.second ? 0 : m * ka(l.getMilliseconds() / m)); if (n >= X.second) l[ub](n >= X.minute ? 0 : m * ka(l.getSeconds() / m)); if (n >= X.minute) l[vb](n >= X.hour ? 0 : m * ka(l[jb]() / m)); if (n >= X.hour) l[wb](n >= X.day ? 0 : m * ka(l[kb]() / m)); if (n >= X.day) l[db](n >= X.month ? 1 : m * ka(l[Oa]() / m)); n >= X.month && (l[mb](n >= X.year ? 0 : m * ka(l[Ua]() / m)), h = l[Va]()); if (n >= X.year) l[nb](h - h % m); if (n === X.week) l[db](l[Oa]() -
            l[lb]() + y(d, 1)); b = 1; if (ib || Ta) l = l.getTime(), l = new ua(l + S(l)); h = l[Va](); d = l.getTime(); for (var t = l[Ua](), v = l[Oa](), B = !g || !!Ta, D = (X.day + (g ? S(l) : 6E4 * l.getTimezoneOffset())) % X.day; d < c;) e.push(d), d = n === X.year ? cb(h + b * m, 0) : n === X.month ? cb(h, t + b * m) : !B || n !== X.day && n !== X.week ? d + n * m : cb(h, t, v + b * m * (n === X.day ? 1 : 7)), b++; e.push(d); u(Ea(e, function (a) { return n <= X.hour && a % X.day === D }), function (a) { f[a] = "day" })
        } e.info = J(a, { higherRanks: f, totalRange: n * m }); return e
    }; ra.prototype.normalizeTimeTickInterval = function (a, b) {
        var c =
        b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = X[d[0]], f = d[1], g; for (g = 0; g < c.length && !(d = c[g], e = X[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + X[c[g + 1][0]]) / 2) ; g++); e === X.year && a < 5 * e && (f = [1, 2, 5]); c = p(a / e, f, "year" === d[0] ? H(k(a / e), 1) : 1); return { unitRange: e, count: c, unitName: d[0] }
    }; ra.prototype.getLogTickPositions = function (a, b, c, d) {
        var e =
        this.options, f = this.len, g = this.lin2log, h = this.log2lin, l = []; d || (this._minorAutoInterval = null); if (.5 <= a) a = Q(a), l = this.getLinearTickPositions(a, b, c); else if (.08 <= a) for (var f = ka(b), n, m, t, v, B, e = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !B; f++) for (m = e.length, n = 0; n < m && !B; n++) t = h(g(f) * e[n]), t > b && (!d || v <= c) && v !== L && l.push(v), v > c && (B = !0), v = t; else b = g(b), c = g(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = y("auto" === a ? null : a, this._minorAutoInterval, e.tickPixelInterval / (d ? 5 : 1) * (c - b) / ((d ? f / this.tickPositions.length :
        f) || 1)), a = p(a, null, k(a)), l = Ma(this.getLinearTickPositions(a, b, c), h), d || (this._minorAutoInterval = a / 5); d || (this.tickInterval = a); return l
    }; ra.prototype.log2lin = function (a) { return qa.log(a) / qa.LN10 }; ra.prototype.lin2log = function (a) { return qa.pow(10, a) }; var Eb = M.Tooltip = function () { this.init.apply(this, arguments) }; Eb.prototype = {
        init: function (a, b) {
            var c = b.borderWidth, d = b.style, e = E(d.padding); this.chart = a; this.options = b; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.label = a.renderer.label("",
            0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({ padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8 }).css(d).css({ padding: 0 }).add().attr({ y: -9E9 }); xa || this.label.shadow(b.shadow); this.shared = b.shared
        }, destroy: function () { this.label && (this.label = this.label.destroy()); clearTimeout(this.hideTimer); clearTimeout(this.tooltipTimeout) }, move: function (a, b, c, d) {
            var e = this, f = e.now, g = !1 !== e.options.animation && !e.isHidden && (1 < ga(a - f.x) || 1 < ga(b - f.y)), h = e.followPointer || 1 <
            e.len; J(f, { x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: h ? L : g ? (2 * f.anchorX + c) / 3 : c, anchorY: h ? L : g ? (f.anchorY + d) / 2 : d }); e.label.attr(f); g && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { e && e.move(a, b, c, d) }, 32))
        }, hide: function (a) { var b = this; clearTimeout(this.hideTimer); a = y(a, this.options.hideDelay, 500); this.isHidden || (this.hideTimer = O(function () { b.label[a ? "fadeOut" : "hide"](); b.isHidden = !0 }, a)) }, getAnchor: function (a, b) {
            var c, d = this.chart, e = d.inverted, f = d.plotTop, g = d.plotLeft,
            h = 0, l = 0, n, m; a = G(a); c = a[0].tooltipPos; this.followPointer && b && (b.chartX === L && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]); c || (u(a, function (a) { n = a.series.yAxis; m = a.series.xAxis; h += a.plotX + (!e && m ? m.left - g : 0); l += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && n ? n.top - f : 0) }), h /= a.length, l /= a.length, c = [e ? d.plotWidth - l : h, this.shared && !e && 1 < a.length && b ? b.chartY - f : e ? d.plotHeight - h : l]); return Ma(c, Q)
        }, getPosition: function (a, b, c) {
            var d = this.chart, e = this.distance, f = {}, g = c.h || 0, h, l = ["y", d.chartHeight,
            b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight], n = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth], m = !this.followPointer && y(c.ttBelow, !d.inverted === !!c.negative), t = function (a, b, c, d, h, l) { var n = c < d - e, t = d + e + c < b, v = d - e - c; d += e; if (m && t) f[a] = d; else if (!m && n) f[a] = v; else if (n) f[a] = U(l - c, 0 > v - g ? v : v - g); else if (t) f[a] = H(h, d + g + c > b ? d : d + g); else return !1 }, v = function (a, b, c, d) { var g; d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2; return g }, B = function (a) { var b = l; l = n; n = b; h = a }, D = function () {
                !1 !==
                t.apply(0, l) ? !1 !== v.apply(0, n) || h || (B(!0), D()) : h ? f.x = f.y = 0 : (B(!0), D())
            }; (d.inverted || 1 < this.len) && B(); D(); return f
        }, defaultFormatter: function (a) { var b = this.points || G(this), c; c = [a.tooltipFooterHeaderFormatter(b[0])]; c = c.concat(a.bodyFormatter(b)); c.push(a.tooltipFooterHeaderFormatter(b[0], !0)); return c.join("") }, refresh: function (a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h, l = {}, n, m = []; n = e.formatter || this.defaultFormatter; var l = c.hoverPoints, t, v = this.shared; clearTimeout(this.hideTimer); this.followPointer =
            G(a)[0].series.tooltipOptions.followPointer; h = this.getAnchor(a, b); f = h[0]; g = h[1]; !v || a.series && a.series.noSharedTooltip ? l = a.getLabelConfig() : (c.hoverPoints = a, l && u(l, function (a) { a.setState() }), u(a, function (a) { a.setState("hover"); m.push(a.getLabelConfig()) }), l = { x: a[0].category, y: a[0].y }, l.points = m, this.len = m.length, a = a[0]); n = n.call(l, this); l = a.series; this.distance = y(l.tooltipOptions.distance, 16); !1 === n ? this.hide() : (this.isHidden && (Ja(d), d.attr("opacity", 1).show()), d.attr({ text: n }), t = e.borderColor || a.color ||
            l.color || "#606060", d.attr({ stroke: t }), this.updatePosition({ plotX: f, plotY: g, negative: a.negative, ttBelow: a.ttBelow, h: h[2] || 0 }), this.isHidden = !1); Z(c, "tooltipRefresh", { text: n, x: f + c.plotLeft, y: g + c.plotTop, borderColor: t })
        }, updatePosition: function (a) { var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a); this.move(Q(c.x), Q(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop) }, getXDateFormat: function (a, b, c) {
            var d; b = b.dateTimeLabelFormats; var e = c && c.closestPointRange,
            f, g = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, h, l = "millisecond"; if (e) { h = Na("%m-%d %H:%M:%S.%L", a.x); for (f in X) { if (e === X.week && +Na("%w", a.x) === c.options.startOfWeek && "00:00:00.000" === h.substr(6)) { f = "week"; break } if (X[f] > e) { f = l; break } if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break; "week" !== f && (l = f) } f && (d = b[f]) } else d = b.day; return d || b.year
        }, tooltipFooterHeaderFormatter: function (a, b) {
            var c = b ? "footer" : "header", d = a.series, e = d.tooltipOptions, f = e.xDateFormat, g = d.xAxis, h = g && "datetime" ===
            g.options.type && ba(a.key), c = e[c + "Format"]; h && !f && (f = this.getXDateFormat(a, e, g)); h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}")); return ca(c, { point: a, series: d })
        }, bodyFormatter: function (a) { return Ma(a, function (a) { var c = a.series.tooltipOptions; return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat) }) }
    }; var Fa; Wa = P && P.documentElement.ontouchstart !== L; var Fb = M.Pointer = function (a, b) { this.init(a, b) }; Fb.prototype = {
        init: function (a, b) {
            var c = b.chart, d = c.events, e = xa ? "" : c.zoomType,
            c = a.inverted, f; this.options = b; this.chart = a; this.zoomX = f = /x/.test(e); this.zoomY = e = /y/.test(e); this.zoomHor = f && !c || e && c; this.zoomVert = e && !c || f && c; this.hasZoom = f || e; this.runChartClick = d && !!d.click; this.pinchDown = []; this.lastValidTouch = {}; M.Tooltip && b.tooltip.enabled && (a.tooltip = new Eb(a, b.tooltip), this.followTouchMove = y(b.tooltip.followTouchMove, !0)); this.setDOMEvents()
        }, normalize: function (a, b) {
            var c, d; a = a || q.event; a.target || (a.target = a.srcElement); d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] :
            a; b || (this.chartPosition = b = qb(this.chart.container)); d.pageX === L ? (c = H(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top); return J(a, { chartX: Q(c), chartY: Q(d) })
        }, getCoordinates: function (a) { var b = { xAxis: [], yAxis: [] }; u(this.chart.axes, function (c) { b[c.isXAxis ? "xAxis" : "yAxis"].push({ axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"]) }) }); return b }, runPointActions: function (a) {
            var b = this.chart, c = b.series, d = b.tooltip, e = d ? d.shared : !1, f = b.hoverPoint, g = b.hoverSeries, h, l = [Number.MAX_VALUE, Number.MAX_VALUE],
            n, m, t = [], v = [], B; if (!e && !g) for (h = 0; h < c.length; h++) if (c[h].directTouch || !c[h].options.stickyTracking) c = []; g && (e ? g.noSharedTooltip : g.directTouch) && f ? v = [f] : (u(c, function (b) { n = b.noSharedTooltip && e; m = !e && b.directTouch; b.visible && !n && !m && y(b.options.enableMouseTracking, !0) && (B = b.searchPoint(a, !n && 1 === b.kdDimensions)) && B.series && t.push(B) }), u(t, function (a) { a && u(["dist", "distX"], function (b, c) { if (ba(a[b])) { var d = a[b] === l[c] && a.series.group.zIndex >= v[c].series.group.zIndex; if (a[b] < l[c] || d) l[c] = a[b], v[c] = a } }) }));
            if (e) for (h = t.length; h--;) (t[h].clientX !== v[1].clientX || t[h].series.noSharedTooltip) && t.splice(h, 1); if (v[0] && (v[0] !== this.prevKDPoint || d && d.isHidden)) if (e && !v[0].series.noSharedTooltip) t.length && d && d.refresh(t, a), u(t, function (b) { b.onMouseOver(a, b !== (g && g.directTouch && f || v[0])) }), this.prevKDPoint = v[1]; else { d && d.refresh(v[0], a); if (!g || !g.directTouch) v[0].onMouseOver(a); this.prevKDPoint = v[0] } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            })); this._onDocumentMouseMove || (this._onDocumentMouseMove = function (a) { if (na[Fa]) na[Fa].pointer.onDocumentMouseMove(a) }, da(P, "mousemove", this._onDocumentMouseMove)); u(e ? t : [y(f, v[1])], function (c) { u(b.axes, function (b) { c && c.series[b.coll] !== b || b.drawCrosshair(a, c) }) })
        }, reset: function (a, b) {
            var c = this.chart, d = c.hoverSeries, e = c.hoverPoint, f = c.hoverPoints, g = c.tooltip, h = g && g.shared ? f : e; a && h && u(G(h), function (b) { b.series.isCartesian && void 0 === b.plotX && (a = !1) }); if (a) g && h && (g.refresh(h), e && (e.setState(e.state,
            !0), u(c.axes, function (a) { a.crosshair && a.drawCrosshair(null, e) }))); else { if (e) e.onMouseOut(); f && u(f, function (a) { a.setState() }); if (d) d.onMouseOut(); g && g.hide(b); this._onDocumentMouseMove && (oa(P, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null); u(c.axes, function (a) { a.hideCrosshair() }); this.hoverX = this.prevKDPoint = c.hoverPoints = c.hoverPoint = null }
        }, scaleGroups: function (a, b) {
            var c = this.chart, d; u(c.series, function (e) {
                d = a || e.getPlotBox(); e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d),
                e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            }); c.clipRect.attr(b || c.clipBox)
        }, dragStart: function (a) { var b = this.chart; b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY }, drag: function (a) {
            var b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, l = b.plotTop, n = b.plotWidth, m = b.plotHeight, t, v = this.selectionMarker, B = this.mouseDownX,
            k = this.mouseDownY, p = c.panKey && a[c.panKey + "Key"]; v && v.touch || (d < h ? d = h : d > h + n && (d = h + n), e < l ? e = l : e > l + m && (e = l + m), this.hasDragged = Math.sqrt(Math.pow(B - d, 2) + Math.pow(k - e, 2)), 10 < this.hasDragged && (t = b.isInsidePlot(B - h, k - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && t && !p && !v && (this.selectionMarker = v = b.renderer.rect(h, l, f ? 1 : n, g ? 1 : m, 0).attr({ fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7 }).add()), v && f && (d -= B, v.attr({ width: ga(d), x: (0 < d ? 0 : d) + B })), v && g && (d = e - k, v.attr({
                height: ga(d), y: (0 < d ? 0 : d) +
                k
            })), t && !v && c.panning && b.pan(a, c.panning)))
        }, drop: function (a) {
            var b = this, c = this.chart, d = this.hasPinched; if (this.selectionMarker) {
                var e = { originalEvent: a, xAxis: [], yAxis: [] }, f = this.selectionMarker, g = f.attr ? f.attr("x") : f.x, h = f.attr ? f.attr("y") : f.y, l = f.attr ? f.attr("width") : f.width, n = f.attr ? f.attr("height") : f.height, m; if (this.hasDragged || d) u(c.axes, function (c) {
                    if (c.zoomEnabled && w(c.min) && (d || b[{ xAxis: "zoomX", yAxis: "zoomY" }[c.coll]])) {
                        var f = c.horiz, B = "touchend" === a.type ? c.minPixelPadding : 0, k = c.toValue((f ?
                            g : h) + B), f = c.toValue((f ? g + l : h + n) - B); e[c.coll].push({ axis: c, min: U(k, f), max: H(k, f) }); m = !0
                    }
                }), m && Z(c, "selection", e, function (a) { c.zoom(J(a, d ? { animation: !1 } : null)) }); this.selectionMarker = this.selectionMarker.destroy(); d && this.scaleGroups()
            } c && (K(c.container, { cursor: c._cursor }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        }, onContainerMouseDown: function (a) { a = this.normalize(a); a.preventDefault && a.preventDefault(); this.dragStart(a) }, onDocumentMouseUp: function (a) {
            na[Fa] &&
            na[Fa].pointer.drop(a)
        }, onDocumentMouseMove: function (a) { var b = this.chart, c = this.chartPosition; a = this.normalize(a, c); !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset() }, onContainerMouseLeave: function (a) { var b = na[Fa]; b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = null) }, onContainerMouseMove: function (a) {
            var b = this.chart; w(Fa) && na[Fa] && na[Fa].mouseIsDown || (Fa = b.index); a = this.normalize(a); a.returnValue = !1;
            "mousedown" === b.mouseIsDown && this.drag(a); !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a)
        }, inClass: function (a, b) { for (var c; a;) { if (c = x(a, "class")) { if (-1 !== c.indexOf(b)) return !0; if (-1 !== c.indexOf("highcharts-container")) return !1 } a = a.parentNode } }, onTrackerMouseOut: function (a) {
            var b = this.chart.hoverSeries; a = a.relatedTarget || a.toElement; if (b && a && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a,
            "highcharts-series-" + b.index)) b.onMouseOut()
        }, onContainerClick: function (a) { var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop; a = this.normalize(a); b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (Z(c.series, "click", J(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (J(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && Z(b, "click", a))) }, setDOMEvents: function () {
            var a = this, b = a.chart.container; b.onmousedown = function (b) { a.onContainerMouseDown(b) }; b.onmousemove =
            function (b) { a.onContainerMouseMove(b) }; b.onclick = function (b) { a.onContainerClick(b) }; da(b, "mouseleave", a.onContainerMouseLeave); 1 === Xa && da(P, "mouseup", a.onDocumentMouseUp); Wa && (b.ontouchstart = function (b) { a.onContainerTouchStart(b) }, b.ontouchmove = function (b) { a.onContainerTouchMove(b) }, 1 === Xa && da(P, "touchend", a.onDocumentTouchEnd))
        }, destroy: function () {
            var a; oa(this.chart.container, "mouseleave", this.onContainerMouseLeave); Xa || (oa(P, "mouseup", this.onDocumentMouseUp), oa(P, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout); for (a in this) this[a] = null
        }
    }; var gb = M.Legend = function (a, b) { this.init(a, b) }; gb.prototype = {
        init: function (a, b) { var c = this, d = b.itemStyle, e = b.itemMarginTop || 0; this.options = b; b.enabled && (c.itemStyle = d, c.itemHiddenStyle = A(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = y(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = y(b.symbolWidth, 16), c.pages = [], c.render(), da(c.chart, "endResize", function () { c.positionCheckboxes() })) },
        colorizeItem: function (a, b) { var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, l = { fill: h }, n; d && d.css({ fill: c, color: c }); e && e.attr({ stroke: h }); if (f) { if (g && f.isMarker) for (n in l.stroke = h, g = a.convertAttribs(g), g) d = g[n], d !== L && (l[n] = d); f.attr(l) } }, positionItem: function (a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox; (a = a.legendGroup) &&
            a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d); f && (f.x = e, f.y = d)
        }, destroyItem: function (a) { var b = a.checkbox; u(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) { a[b] && (a[b] = a[b].destroy()) }); b && ea(a.checkbox) }, destroy: function () { var a = this.group, b = this.box; b && (this.box = b.destroy()); a && (this.group = a.destroy()) }, positionCheckboxes: function (a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight, e = this.titleHeight; b && (c = b.translateY, u(this.allItems, function (f) {
                var g =
                f.checkbox, h; g && (h = c + e + g.y + (a || 0) + 3, K(g, { left: b.translateX + f.checkboxOffset + g.x - 20 + "px", top: h + "px", display: h > c - 6 && h < c + d - 6 ? "" : "none" }))
            }))
        }, renderTitle: function () { var a = this.padding, b = this.options.title, c = 0; b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: c })); this.titleHeight = c }, setText: function (a) {
            var b =
            this.options; a.legendItem.attr({ text: b.labelFormat ? ca(b.labelFormat, a) : b.labelFormatter.call(a) })
        }, renderItem: function (a) {
            var b = this.chart, c = b.renderer, d = this.options, e = "horizontal" === d.layout, f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, l = this.itemHiddenStyle, n = this.padding, m = e ? y(d.itemDistance, 20) : 0, t = !d.rtl, v = d.width, B = d.itemMarginBottom || 0, k = this.itemMarginTop, p = this.initialItemX, r = a.legendItem, u = a.series && a.series.drawLegendSymbol ? a.series : a, z = u.options, z = this.createCheckboxForItem &&
            z && z.showCheckbox, q = d.useHTML; r || (a.legendGroup = c.g("legend-item").attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = r = c.text("", t ? f + g : -g, this.baseline || 0, q).css(A(a.visible ? h : l)).attr({ align: t ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(h.fontSize, r), this.baseline = this.fontMetrics.f + 3 + k, r.attr("y", this.baseline)), u.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, r, q, h, l), z && this.createCheckboxForItem(a)); this.colorizeItem(a, a.visible);
            this.setText(a); c = r.getBBox(); f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + m + (z ? 20 : 0); this.itemHeight = g = Q(a.legendItemHeight || c.height); e && this.itemX - p + f > (v || b.chartWidth - 2 * n - p - d.x) && (this.itemX = p, this.itemY += k + this.lastLineHeight + B, this.lastLineHeight = 0); this.maxItemWidth = H(this.maxItemWidth, f); this.lastItemY = k + this.itemY + B; this.lastLineHeight = H(g, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; e ? this.itemX += f : (this.itemY += k + g + B, this.lastLineHeight = g); this.offsetWidth =
            v || H((e ? this.itemX - p - m : f) + n, this.offsetWidth)
        }, getAllItems: function () { var a = []; u(this.chart.series, function (b) { var c = b.options; y(c.showInLegend, w(c.linkedTo) ? !1 : L, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b))) }); return a }, adjustMargins: function (a, b) {
            var c = this.chart, d = this.options, e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0); d.floating || u([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (f, g) {
                f.test(e) && !w(a[g]) && (c[fb[g]] = H(c[fb[g]], c.legend[(g +
                1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + y(d.margin, 12) + b[g]))
            })
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, l = a.box, n = a.options, m = a.padding, t = n.borderWidth, v = n.backgroundColor; a.itemX = a.initialItemX; a.itemY = a.initialItemY; a.offsetWidth = 0; a.lastItemY = 0; d || (a.group = d = c.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = c.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = c.g().add(a.contentGroup)); a.renderTitle(); e = a.getAllItems(); z(e, function (a, b) {
                return (a.options &&
                a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            }); n.reversed && e.reverse(); a.allItems = e; a.display = f = !!e.length; a.lastLineHeight = 0; u(e, function (b) { a.renderItem(b) }); g = (n.width || a.offsetWidth) + m; h = a.lastItemY + a.lastLineHeight + a.titleHeight; h = a.handleOverflow(h); h += m; if (t || v) l ? 0 < g && 0 < h && (l[l.isNew ? "attr" : "animate"](l.crisp({ width: g, height: h })), l.isNew = !1) : (a.box = l = c.rect(0, 0, g, h, n.borderRadius, t || 0).attr({ stroke: n.borderColor, "stroke-width": t || 0, fill: v || "none" }).add(d).shadow(n.shadow),
            l.isNew = !0), l[f ? "show" : "hide"](); a.legendWidth = g; a.legendHeight = h; u(e, function (b) { a.positionItem(b) }); f && d.align(J({ width: g, height: h }, n), !0, "spacingBox"); b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding, g = e.maxHeight, h, l = this.clipRect, n = e.navigation, m = y(n.animation, !0), t = n.arrowSize || 12, v = this.nav, k = this.pages, D = this.padding, p, r = this.allItems, z = function (a) {
                l.attr({ height: a });
                b.contentGroup.div && (b.contentGroup.div.style.clip = "rect(" + D + "px,9999px," + (D + a) + "px,0)")
            }; "horizontal" === e.layout && (f /= 2); g && (f = U(f, g)); k.length = 0; a > f && !1 !== n.enabled ? (this.clipHeight = h = H(f - 20 - this.titleHeight - D, 0), this.currentPage = y(this.currentPage, 1), this.fullHeight = a, u(r, function (a, b) { var c = a._legendItemPos[1], d = Q(a.legendItem.getBBox().height), e = k.length; if (!e || c - k[e - 1] > h && (p || c) !== k[e - 1]) k.push(p || c), e++; b === r.length - 1 && c + d - k[e - 1] > h && k.push(c); c !== p && (p = c) }), l || (l = b.clipRect = d.clipRect(0, D,
            9999, 0), b.contentGroup.clip(l)), z(h), v || (this.nav = v = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, t, t).on("click", function () { b.scroll(-1, m) }).add(v), this.pager = d.text("", 15, 10).css(n.style).add(v), this.down = d.symbol("triangle-down", 0, 0, t, t).on("click", function () { b.scroll(1, m) }).add(v)), b.scroll(0), a = f) : v && (z(c.chartHeight), v.hide(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
        }, scroll: function (a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight,
            g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, l = this.pager, n = this.padding; e > d && (e = d); 0 < e && (b !== L && wa(b, this.chart), this.nav.attr({ translateX: n, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ fill: 1 === e ? g : h }).css({ cursor: 1 === e ? "default" : "pointer" }), l.attr({ text: e + "/" + d }), this.down.attr({ x: 18 + this.pager.getBBox().width, fill: e === d ? g : h }).css({ cursor: e === d ? "default" : "pointer" }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage =
            e, this.positionCheckboxes(c))
        }
    }; var Gb = M.LegendSymbolMixin = {
        drawRectangle: function (a, b) { var c = a.options.symbolHeight || a.fontMetrics.f; b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({ zIndex: 3 }).add(b.legendGroup) }, drawLineMarker: function (a) {
            var b = this.options, c = b.marker, d = a.symbolWidth, e = this.chart.renderer, f = this.legendGroup; a = a.baseline - Q(.3 * a.fontMetrics.b); var g; b.lineWidth && (g = { "stroke-width": b.lineWidth }, b.dashStyle && (g.dashstyle = b.dashStyle),
            this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)); c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = c = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b, c).add(f), c.isMarker = !0)
        }
    }; (/Trident\/7\.0/.test(Ha) || La) && Cb(gb.prototype, "positionItem", function (a, b) { var c = this, d = function () { b._legendItemPos && a.call(c, b) }; d(); setTimeout(d) }); var ab = M.Chart = function () { this.getArgs.apply(this, arguments) }; M.chart = function (a, b, c) { return new ab(a, b, c) }; ab.prototype = {
        callbacks: [], getArgs: function () {
            var a = [].slice.call(arguments);
            if (Y(a[0]) || a[0].nodeName) this.renderTo = a.shift(); this.init(a[0], a[1])
        }, init: function (a, b) {
            var c, d = a.series; a.series = null; c = A(ja, a); c.series = a.series = d; this.userOptions = a; d = c.chart; this.margin = this.splashArray("margin", d); this.spacing = this.splashArray("spacing", d); var e = d.events; this.bounds = { h: {}, v: {} }; this.callback = b; this.isResizing = 0; this.options = c; this.axes = []; this.series = []; this.hasCartesianSeries = d.showAxes; var f = this, g; f.index = na.length; na.push(f); Xa++; !1 !== d.reflow && da(f, "load", function () { f.initReflow() });
            if (e) for (g in e) da(f, g, e[g]); f.xAxis = []; f.yAxis = []; f.animation = xa ? !1 : y(d.animation, !0); f.pointCount = f.colorCounter = f.symbolCounter = 0; f.firstRender()
        }, initSeries: function (a) { var b = this.options.chart; (b = ha[a.type || b.type || b.defaultSeriesType]) || T(17, !0); b = new b; b.init(this, a); return b }, isInsidePlot: function (a, b, c) { var d = c ? b : a; a = c ? a : b; return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight }, redraw: function (a) {
            var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, l = this.hasCartesianSeries,
            n = this.isDirtyBox, m = c.length, t = m, v = this.renderer, k = v.isHidden(), p = []; wa(a, this); k && this.cloneRenderTo(); for (this.layOutTitles() ; t--;) if (a = c[t], a.options.stacking && (g = !0, a.isDirty)) { h = !0; break } if (h) for (t = m; t--;) a = c[t], a.options.stacking && (a.isDirty = !0); u(c, function (a) { a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), f = !0); a.isDirtyData && Z(a, "updatedData") }); f && e.options.enabled && (e.render(), this.isDirtyLegend = !1); g && this.getStacks(); l && !this.isResizing && (this.maxTicks = null,
            u(b, function (a) { a.setScale() })); this.getMargins(); l && (u(b, function (a) { a.isDirty && (n = !0) }), u(b, function (a) { var b = a.min + "," + a.max; a.extKey !== b && (a.extKey = b, p.push(function () { Z(a, "afterSetExtremes", J(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (n || g) && a.redraw() })); n && this.drawChartBox(); u(c, function (a) { a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw() }); d && d.reset(!0); v.draw(); Z(this, "redraw"); k && this.cloneRenderTo(!0); u(p, function (a) { a.call() })
        }, get: function (a) {
            var b = this.axes, c =
            this.series, d, e; for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d]; for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d]; for (d = 0; d < c.length; d++) for (e = c[d].points || [], b = 0; b < e.length; b++) if (e[b].id === a) return e[b]; return null
        }, getAxes: function () { var a = this, b = this.options, c = b.xAxis = G(b.xAxis || {}), b = b.yAxis = G(b.yAxis || {}); u(c, function (a, b) { a.index = b; a.isX = !0 }); u(b, function (a, b) { a.index = b }); c = c.concat(b); u(c, function (b) { new ra(a, b) }) }, getSelectedPoints: function () {
            var a = []; u(this.series, function (b) {
                a =
                a.concat(Ea(b.points || [], function (a) { return a.selected }))
            }); return a
        }, getSelectedSeries: function () { return Ea(this.series, function (a) { return a.selected }) }, setTitle: function (a, b, c) {
            var d = this, e = d.options, f; f = e.title = A(e.title, a); e = e.subtitle = A(e.subtitle, b); u([["title", a, f], ["subtitle", b, e]], function (a) { var b = a[0], c = d[b], e = a[1]; a = a[2]; c && e && (d[b] = c = c.destroy()); a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).css(a.style).add()) });
            d.layOutTitles(c)
        }, layOutTitles: function (a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox; c && (c.css({ width: (f.width || h.width + f.widthAdjust) + "px" }).align(J({ y: g.fontMetrics(f.style.fontSize, c).b - 3 }, f), !1, h), f.floating || f.verticalAlign || (b = c.getBBox().height)); d && (d.css({ width: (e.width || h.width + e.widthAdjust) + "px" }).align(J({ y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b }, e), !1, h), e.floating || e.verticalAlign || (b = za(b + d.getBBox().height)));
            c = this.titleOffset !== b; this.titleOffset = b; !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && y(a, !0) && this.isDirtyBox && this.redraw())
        }, getChartSize: function () { var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo; w(b) || (this.containerWidth = va(c, "width")); w(a) || (this.containerHeight = va(c, "height")); this.chartWidth = H(0, b || this.containerWidth || 600); this.chartHeight = H(0, y(a, 19 < this.containerHeight ? this.containerHeight : 400)) }, cloneRenderTo: function (a) {
            var b = this.renderToClone,
            c = this.container; a ? b && (this.renderTo.appendChild(c), ea(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), K(b, { position: "absolute", top: "-9999px", display: "block" }), b.style.setProperty && b.style.setProperty("display", "block", "important"), P.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var a, b = this.options, c = b.chart, d, e; a = this.renderTo; var f = "highcharts-" + ob++; a || (this.renderTo = a = c.renderTo);
            Y(a) && (this.renderTo = a = P.getElementById(a)); a || T(13, !0); d = E(x(a, "data-highcharts-chart")); ba(d) && na[d] && na[d].hasRendered && na[d].destroy(); x(a, "data-highcharts-chart", this.index); a.innerHTML = ""; c.skipClone || a.offsetWidth || this.cloneRenderTo(); this.getChartSize(); d = this.chartWidth; e = this.chartHeight; this.container = a = I("div", { className: "highcharts-container" + (c.className ? " " + c.className : ""), id: f }, J({
                position: "relative", overflow: "hidden", width: d + "px", height: e + "px", textAlign: "left", lineHeight: "normal",
                zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a); this._cursor = a.style.cursor; this.renderer = new (M[c.renderer] || $a)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML); xa && this.renderer.create(this, a, d, e); this.renderer.chartIndex = this.index
        }, getMargins: function (a) {
            var b = this.spacing, c = this.margin, d = this.titleOffset; this.resetMargins(); d && !w(c[0]) && (this.plotTop = H(this.plotTop, d + this.options.title.margin + b[0])); this.legend.display && this.legend.adjustMargins(c,
            b); this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin); this.extraTopMargin && (this.plotTop += this.extraTopMargin); a || this.getAxisMargins()
        }, getAxisMargins: function () { var a = this, b = a.axisOffset = [0, 0, 0, 0], c = a.margin; a.hasCartesianSeries && u(a.axes, function (a) { a.visible && a.getOffset() }); u(fb, function (d, e) { w(c[e]) || (a[d] += b[e]) }); a.setChartSize() }, reflow: function (a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = w(c.width), f = c.width || va(d, "width"), c = c.height || va(d, "height"), d = a ? a.target : q; if (!e &&
            !b.isPrinting && f && c && (d === q || d === P)) { if (f !== b.containerWidth || c !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = O(function () { b.container && b.setSize(void 0, void 0, !1) }, a ? 100 : 0); b.containerWidth = f; b.containerHeight = c }
        }, initReflow: function () { var a = this, b = function (b) { a.reflow(b) }; da(q, "resize", b); da(a, "destroy", function () { oa(q, "resize", b) }) }, setSize: function (a, b, c) {
            var d = this, e = d.renderer; d.isResizing += 1; wa(c, d); d.oldChartHeight = d.chartHeight; d.oldChartWidth = d.chartWidth; void 0 !== a &&
            (d.options.chart.width = a); void 0 !== b && (d.options.chart.height = b); d.getChartSize(); a = e.globalAnimation; (a ? Ra : K)(d.container, { width: d.chartWidth + "px", height: d.chartHeight + "px" }, a); d.setChartSize(!0); e.setSize(d.chartWidth, d.chartHeight, c); d.maxTicks = null; u(d.axes, function (a) { a.isDirty = !0; a.setScale() }); u(d.series, function (a) { a.isDirty = !0 }); d.isDirtyLegend = !0; d.isDirtyBox = !0; d.layOutTitles(); d.getMargins(); d.redraw(c); d.oldChartHeight = null; Z(d, "resize"); O(function () { d && Z(d, "endResize", null, function () { --d.isResizing }) },
            la(a).duration)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, l, n, m, t; this.plotLeft = l = Q(this.plotLeft); this.plotTop = n = Q(this.plotTop); this.plotWidth = m = H(0, Q(d - l - this.marginRight)); this.plotHeight = t = H(0, Q(e - n - this.marginBottom)); this.plotSizeX = b ? t : m; this.plotSizeY = b ? m : t; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox = c.spacingBox = { x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2] };
            this.plotBox = c.plotBox = { x: l, y: n, width: m, height: t }; d = 2 * ka(this.plotBorderWidth / 2); b = za(H(d, h[3]) / 2); c = za(H(d, h[0]) / 2); this.clipBox = { x: b, y: c, width: ka(this.plotSizeX - H(d, h[1]) / 2 - b), height: H(0, ka(this.plotSizeY - H(d, h[2]) / 2 - c)) }; a || u(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
        }, resetMargins: function () { var a = this; u(fb, function (b, c) { a[b] = y(a.margin[c], a.spacing[c]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth,
            d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, l = a.borderWidth || 0, n = a.backgroundColor, m = a.plotBackgroundColor, t = a.plotBackgroundImage, v = a.plotBorderWidth || 0, k, p = this.plotLeft, r = this.plotTop, y = this.plotWidth, z = this.plotHeight, u = this.plotBox, q = this.clipRect, w = this.clipBox; k = l + (a.shadow ? 8 : 0); if (l || n) e ? e.animate(e.crisp({ width: c - k, height: d - k })) : (e = { fill: n || "none" }, l && (e.stroke = a.borderColor, e["stroke-width"] = l), this.chartBackground = b.rect(k / 2, k / 2,
            c - k, d - k, a.borderRadius, l).attr(e).addClass("highcharts-background").add().shadow(a.shadow)); m && (f ? f.animate(u) : this.plotBackground = b.rect(p, r, y, z, 0).attr({ fill: m }).add().shadow(a.plotShadow)); t && (h ? h.animate(u) : this.plotBGImage = b.image(t, p, r, y, z).add()); q ? q.animate({ width: w.width, height: w.height }) : this.clipRect = b.clipRect(w); v && (g ? (g.strokeWidth = -v, g.animate(g.crisp({ x: p, y: r, width: y, height: z }))) : this.plotBorder = b.rect(p, r, y, z, 0, -v).attr({ stroke: a.plotBorderColor, "stroke-width": v, fill: "none", zIndex: 1 }).add());
            this.isDirtyBox = !1
        }, propFromSeries: function () { var a = this, b = a.options.chart, c, d = a.options.series, e, f; u(["inverted", "angular", "polar"], function (g) { c = ha[b.type || b.defaultSeriesType]; f = a[g] || b[g] || c && c.prototype[g]; for (e = d && d.length; !f && e--;) (c = ha[d[e].type]) && c.prototype[g] && (f = !0); a[g] = f }) }, linkSeries: function () {
            var a = this, b = a.series; u(b, function (a) { a.linkedSeries.length = 0 }); u(b, function (b) {
                var d = b.options.linkedTo; Y(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent =
                d, b.visible = y(b.options.visible, d.options.visible, b.visible))
            })
        }, renderSeries: function () { u(this.series, function (a) { a.translate(); a.render() }) }, renderLabels: function () { var a = this, b = a.options.labels; b.items && u(b.items, function (c) { var d = J(b.style, c.style), e = E(d.left) + a.plotLeft, f = E(d.top) + a.plotTop + 12; delete d.left; delete d.top; a.renderer.text(c.html, e, f).attr({ zIndex: 2 }).css(d).add() }) }, render: function () {
            var a = this.axes, b = this.renderer, c = this.options, d, e, f, g; this.setTitle(); this.legend = new gb(this,
            c.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); d = this.plotWidth; e = this.plotHeight -= 21; u(a, function (a) { a.setScale() }); this.getAxisMargins(); f = 1.1 < d / this.plotWidth; g = 1.05 < e / this.plotHeight; if (f || g) this.maxTicks = null, u(a, function (a) { (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries && u(a, function (a) { a.visible && a.render() }); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries();
            this.renderLabels(); this.showCredits(c.credits); this.hasRendered = !0
        }, showCredits: function (a) { a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function () { a.href && (q.location.href = a.href) }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position)) }, destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode; Z(a, "destroy"); na[a.index] = L; Xa--; a.renderTo.removeAttribute("data-highcharts-chart"); oa(a); for (e = b.length; e--;) b[e] =
            b[e].destroy(); for (e = c.length; e--;) c[e] = c[e].destroy(); u("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (b) { var c = a[b]; c && c.destroy && (a[b] = c.destroy()) }); d && (d.innerHTML = "", oa(d), f && ea(d)); for (e in a) delete a[e]
        }, isReadyToRender: function () {
            var a = this; return !ta && q == q.top && "complete" !== P.readyState || xa && !q.canvg ? (xa ? CanVGController.push(function () { a.firstRender() },
            a.options.global.canvasToolsURL) : P.attachEvent("onreadystatechange", function () { P.detachEvent("onreadystatechange", a.firstRender); "complete" === P.readyState && a.firstRender() }), !1) : !0
        }, firstRender: function () {
            var a = this, b = a.options; if (a.isReadyToRender()) {
                a.getContainer(); Z(a, "init"); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes(); u(b.series || [], function (b) { a.initSeries(b) }); a.linkSeries(); Z(a, "beforeRender"); M.Pointer && (a.pointer = new Fb(a, b)); a.render(); a.renderer.draw(); if (!a.renderer.imgCount &&
                a.onload) a.onload(); a.cloneRenderTo(!0)
            }
        }, onload: function () { var a = this; u([this.callback].concat(this.callbacks), function (b) { b && void 0 !== a.index && b.apply(a, [a]) }); Z(a, "load"); this.onload = null }, splashArray: function (a, b) { var c = b[a], c = sa(c) ? c : [c, c, c, c]; return [y(b[a + "Top"], c[0]), y(b[a + "Right"], c[1]), y(b[a + "Bottom"], c[2]), y(b[a + "Left"], c[3])] }
    }; var Sa = function () { }; Sa.prototype = {
        init: function (a, b, c) {
            this.series = a; this.color = a.color; this.applyOptions(b, c); this.pointAttr = {}; a.options.colorByPoint && (b = a.options.colors ||
            a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0)); a.chart.pointCount++; return this
        }, applyOptions: function (a, b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey; a = Sa.prototype.optionsToObject.call(this, a); J(this, a); this.options = this.options ? J(this.options, a) : a; d && (this.y = this[d]); this.isNull = null === this.x || !ba(this.y, !0); void 0 === this.x && c && (this.x = void 0 === b ? c.autoIncrement(this) : b); c.xAxis && c.xAxis.names && (c.xAxis.names[this.x] =
            this.name); return this
        }, optionsToObject: function (a) { var b = {}, c = this.series, d = c.options.keys, e = d || c.pointArrayMap || ["y"], f = e.length, g = 0, h = 0; if (ba(a) || null === a) b[e[0]] = a; else if (fa(a)) for (!d && a.length > f && (c = typeof a[0], "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), g++) ; h < f;) d && void 0 === a[g] || (b[e[h]] = a[g]), g++, h++; else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0)); return b }, destroy: function () {
            var a = this.series.chart, b = a.hoverPoints, c; a.pointCount--;
            b && (this.setState(), W(b, this), b.length || (a.hoverPoints = null)); if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) oa(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (c in this) this[c] = null
        }, destroyElements: function () { for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy()) }, getLabelConfig: function () {
            return {
                x: this.category, y: this.y, color: this.color, key: this.name || this.category,
                series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal
            }
        }, tooltipFormatter: function (a) { var b = this.series, c = b.tooltipOptions, d = y(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || ""; u(b.pointArrayMap || ["y"], function (b) { b = "{point." + b; if (e || f) a = a.replace(b + "}", e + b + "}" + f); a = a.replace(b + "}", b + ":,." + d + "f}") }); return ca(a, { point: this, series: this.series }) }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options; (e.point.events[a] || d.options && d.options.events &&
            d.options.events[a]) && this.importEvents(); "click" === a && e.allowPointSelect && (c = function (a) { d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); Z(this, a, b, c)
        }, visible: !0
    }; var pa = M.Series = function () { }; pa.prototype = {
        isCartesian: !0, type: "line", pointClass: Sa, sorted: !0, requireSorting: !0, pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius" }, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function (a, b) {
            var c = this, d, e,
            f = a.series, g = function (a, b) { return y(a.options.index, a._i) - y(b.options.index, b._i) }; c.chart = a; c.options = b = c.setOptions(b); c.linkedSeries = []; c.bindAxes(); J(c, { name: b.name, state: "", pointAttr: {}, visible: !1 !== b.visible, selected: !0 === b.selected }); xa && (b.animation = !1); e = b.events; for (d in e) da(c, d, e[d]); if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; c.getColor(); c.getSymbol(); u(c.parallelArrays, function (a) { c[a + "Data"] = [] }); c.setData(b.data, !1); c.isCartesian &&
            (a.hasCartesianSeries = !0); f.push(c); c._i = f.length - 1; z(f, g); this.yAxis && z(this.yAxis.series, g); u(f, function (a, b) { a.index = b; a.name = a.name || "Series " + (b + 1) })
        }, bindAxes: function () { var a = this, b = a.options, c = a.chart, d; u(a.axisTypes || [], function (e) { u(c[e], function (c) { d = c.options; if (b[e] === d.index || b[e] !== L && b[e] === d.id || b[e] === L && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0 }); a[e] || a.optionalAxis === e || T(18, !0) }) }, updateParallelArrays: function (a, b) {
            var c = a.series, d = arguments, e = ba(b) ? function (d) {
                var e =
                "y" === d && c.toYData ? c.toYData(a) : a[d]; c[d + "Data"][b] = e
            } : function (a) { Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2)) }; u(c.parallelArrays, e)
        }, autoIncrement: function (a) {
            var b = this.options, c = this.xIncrement, d = b.pointIntervalUnit, e = this.xAxis, f, c = y(c, b.pointStart, 0); this.pointInterval = b = y(this.pointInterval, b.pointInterval, 1); e && e.categories && a.name && (this.requireSorting = !1, e = (f = fa(e.categories)) ? e.categories : e.names, a = Aa(a.name, e), -1 === a ? f || (c = e.length) : c = a); d && (a = new ua(c), "day" ===
            d ? a = +a[db](a[Oa]() + b) : "month" === d ? a = +a[mb](a[Ua]() + b) : "year" === d && (a = +a[nb](a[Va]() + b)), b = a - c); this.xIncrement = c + b; return c
        }, setOptions: function (a) {
            var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type]; this.userOptions = a; c = A(e, c.series, a); this.tooltipOptions = A(ja.tooltip, ja.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip); null === e.marker && delete c.marker; this.zoneAxis = c.zoneAxis; a = this.zones =
            (c.zones || []).slice(); !c.negativeColor && !c.negativeFillColor || c.zones || a.push({ value: c[this.zoneAxis + "Threshold"] || c.threshold || 0, color: c.negativeColor, fillColor: c.negativeFillColor }); a.length && w(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor }); return c
        }, getCyclic: function (a, b, c) { var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter"; b || (w(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]); this[a] = b }, getColor: function () {
            this.options.colorByPoint ? this.options.color =
            null : this.getCyclic("color", this.options.color || Ba[this.type].color, this.chart.options.colors)
        }, getSymbol: function () { var a = this.options.marker; this.getCyclic("symbol", a.symbol, this.chart.options.symbols); /^url/.test(this.symbol) && (a.radius = 0) }, drawLegendSymbol: Gb.drawLineMarker, setData: function (a, b, c, d) {
            var e = this, f = e.points, g = f && f.length || 0, h, l = e.options, n = e.chart, m = null, t = e.xAxis, v = l.turboThreshold, k = this.xData, p = this.yData, r = (h = e.pointArrayMap) && h.length; a = a || []; h = a.length; b = y(b, !0); if (!1 !== d &&
            h && g === h && !e.cropped && !e.hasGroupedData && e.visible) u(a, function (a, b) { f[b].update && a !== l.data[b] && f[b].update(a, !1, null, !1) }); else {
                e.xIncrement = null; e.colorCounter = 0; u(this.parallelArrays, function (a) { e[a + "Data"].length = 0 }); if (v && h > v) { for (c = 0; null === m && c < h;) m = a[c], c++; if (ba(m)) { m = y(l.pointStart, 0); r = y(l.pointInterval, 1); for (c = 0; c < h; c++) k[c] = m, p[c] = a[c], m += r; e.xIncrement = m } else if (fa(m)) if (r) for (c = 0; c < h; c++) m = a[c], k[c] = m[0], p[c] = m.slice(1, r + 1); else for (c = 0; c < h; c++) m = a[c], k[c] = m[0], p[c] = m[1]; else T(12) } else for (c =
                0; c < h; c++) a[c] !== L && (m = { series: e }, e.pointClass.prototype.applyOptions.apply(m, [a[c]]), e.updateParallelArrays(m, c)); Y(p[0]) && T(14, !0); e.data = []; e.options.data = e.userOptions.data = a; for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy(); t && (t.minRange = t.userMinRange); e.isDirty = e.isDirtyData = n.isDirtyBox = !0; c = !1
            } "point" === l.legendType && (this.processData(), this.generatePoints()); b && n.redraw(c)
        }, processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length, e; e = 0; var f, g, h = this.xAxis, l, n = this.options; l = n.cropThreshold;
            var m = this.getExtremesFromAll || n.getExtremesFromAll, t = this.isCartesian, n = h && h.val2lin, v = h && h.isLog, k, p; if (t && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1; h && (a = h.getExtremes(), k = a.min, p = a.max); if (t && this.sorted && !m && (!l || d > l || this.forceCrop)) if (b[d - 1] < k || b[0] > p) b = [], c = []; else if (b[0] < k || b[d - 1] > p) e = this.cropData(this.xData, this.yData, k, p), b = e.xData, c = e.yData, e = e.start, f = !0; for (l = b.length || 1; --l;) d = v ? n(b[l]) - n(b[l - 1]) : b[l] - b[l - 1], 0 < d && (g === L || d < g) ? g = d : 0 > d && this.requireSorting && T(15);
            this.cropped = f; this.cropStart = e; this.processedXData = b; this.processedYData = c; this.closestPointRange = g
        }, cropData: function (a, b, c, d) { var e = a.length, f = 0, g = e, h = y(this.cropShoulder, 1), l; for (l = 0; l < e; l++) if (a[l] >= c) { f = H(0, l - h); break } for (c = l; c < e; c++) if (a[c] > d) { g = c + h; break } return { xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g } }, generatePoints: function () {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, l, n = this.hasGroupedData,
            m, t = [], v; b || n || (b = [], b.length = a.length, b = this.data = b); for (v = 0; v < g; v++) l = h + v, n ? (t[v] = (new f).init(this, [d[v]].concat(G(e[v]))), t[v].dataGroup = this.groupMap[v]) : (b[l] ? m = b[l] : a[l] !== L && (b[l] = m = (new f).init(this, a[l], d[v])), t[v] = m), t[v].index = l; if (b && (g !== (c = b.length) || n)) for (v = 0; v < c; v++) v !== h || n || (v += g), b[v] && (b[v].destroyElements(), b[v].plotX = L); this.data = b; this.points = t
        }, getExtremes: function (a) {
            var b = this.yAxis, c = this.processedXData, d, e = [], f = 0; d = this.xAxis.getExtremes(); var g = d.min, h = d.max, l, n, m, t;
            a = a || this.stackedYData || this.processedYData || []; d = a.length; for (t = 0; t < d; t++) if (n = c[t], m = a[t], l = null !== m && m !== L && (!b.isLog || m.length || 0 < m), n = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[t + 1] || n) >= g && (c[t - 1] || n) <= h, l && n) if (l = m.length) for (; l--;) null !== m[l] && (e[f++] = m[l]); else e[f++] = m; this.dataMin = r(e); this.dataMax = F(e)
        }, translate: function () {
            this.processedXData || this.processData(); this.generatePoints(); for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis,
            f = this.points, g = f.length, h = !!this.modifyValue, l = a.pointPlacement, n = "between" === l || ba(l), m = a.threshold, t = a.startFromThreshold ? m : 0, v, k, p, r, z = Number.MAX_VALUE, a = 0; a < g; a++) {
                var u = f[a], q = u.x, F = u.y; k = u.low; var N = b && e.stacks[(this.negStacks && F < (t ? 0 : m) ? "-" : "") + this.stackKey], x; e.isLog && null !== F && 0 >= F && (u.y = F = null, T(10)); u.plotX = v = C(U(H(-1E5, c.translate(q, 0, 0, 0, 1, l, "flags" === this.type)), 1E5)); b && this.visible && !u.isNull && N && N[q] && (r = this.getStackIndicator(r, q, this.index), x = N[q], F = x.points[r.key], k = F[0], F = F[1],
                k === t && r.key === N[q].base && (k = y(m, e.min)), e.isLog && 0 >= k && (k = null), u.total = u.stackTotal = x.total, u.percentage = x.total && u.y / x.total * 100, u.stackY = F, x.setOffset(this.pointXOffset || 0, this.barW || 0)); u.yBottom = w(k) ? e.translate(k, 0, 1, 0, 1) : null; h && (F = this.modifyValue(F, u)); u.plotY = k = "number" === typeof F && Infinity !== F ? U(H(-1E5, e.translate(F, 0, 1, 0, 1)), 1E5) : L; u.isInside = k !== L && 0 <= k && k <= e.len && 0 <= v && v <= c.len; u.clientX = n ? C(c.translate(q, 0, 0, 0, 1)) : v; u.negative = u.y < (m || 0); u.category = d && d[u.x] !== L ? d[u.x] : u.x; u.isNull ||
                (void 0 !== p && (z = U(z, ga(v - p))), p = v)
            } this.closestPointRangePx = z
        }, getValidPoints: function (a, b) { var c = this.chart; return Ea(a || this.points || [], function (a) { return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull }) }, setClip: function (a) {
            var b = this.chart, c = this.options, d = b.renderer, e = b.inverted, f = this.clipBox, g = f || b.clipBox, h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(), l = b[h], n = b[h + "m"]; l || (a && (g.width = 0, b[h + "m"] = n = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop,
            99, e ? b.chartWidth : b.chartHeight)), b[h] = l = d.clipRect(g), l.count = { length: 0 }); a && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1); !1 !== c.clip && (this.group.clip(a || f ? l : b.clipRect), this.markerGroup.clip(n), this.sharedClipKey = h); a || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        }, animate: function (a) {
            var b = this.chart, c = this.options.animation, d; c && !sa(c) && (c = Ba[this.type].animation);
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({ width: b.plotSizeX }, c), b[d + "m"] && b[d + "m"].animate({ width: b.plotSizeX + 99 }, c), this.animate = null)
        }, afterAnimate: function () { this.setClip(); Z(this, "afterAnimate") }, drawPoints: function () {
            var a, b = this.points, c = this.chart, d, e, f, g, h, l, n, m, t = this.options.marker, v = this.pointAttr[""], k, p, r, u = this.markerGroup, z = y(t.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * t.radius); if (!1 !== t.enabled || this._hasPointMarkers) for (f = b.length; f--;) g = b[f], d = ka(g.plotX),
            e = g.plotY, m = g.graphic, k = g.marker || {}, p = !!g.marker, a = z && k.enabled === L || k.enabled, r = g.isInside, a && ba(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || v, h = a.r, l = y(k.symbol, this.symbol), n = 0 === l.indexOf("url"), m ? m[r ? "show" : "hide"](!0).attr(a).animate(J({ x: d - h, y: e - h }, m.symbolName ? { width: 2 * h, height: 2 * h } : {})) : r && (0 < h || n) && (g.graphic = c.renderer.symbol(l, d - h, e - h, 2 * h, 2 * h, p ? k : t).attr(a).add(u))) : m && (g.graphic = m.destroy())
        }, convertAttribs: function (a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {}; a = a || {};
            b = b || {}; c = c || {}; d = d || {}; for (f in e) g = e[f], h[f] = y(a[g], b[f], c[f], d[f]); return h
        }, getAttribs: function () {
            var a = this, b = a.options, c = Ba[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = a.options.negativeColor, l = { stroke: g, fill: g }, n = a.points || [], m, t = [], k, p = a.pointAttrToOptions; f = a.hasPointSpecificOptions; var r = c.lineColor, z = c.fillColor; m = b.turboThreshold; var q = a.zones, F = a.zoneAxis || "y", C, N; b.marker ? (e.radius = +e.radius || +c.radius + +e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) :
            (e.color = e.color || aa(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || aa(e.negativeColor || h).brighten(e.brightness).get()); t[""] = a.convertAttribs(c, l); u(["hover", "select"], function (b) { t[b] = a.convertAttribs(d[b], t[""]) }); a.pointAttr = t; g = n.length; if (!m || g < m || f) for (; g--;) {
                m = n[g]; (c = m.options && m.options.marker || m.options) && !1 === c.enabled && (c.radius = 0); l = null; if (q.length) { f = 0; for (l = q[f]; m[F] >= l.value;) l = q[++f]; m.color = m.fillColor = l = y(l.color, a.color) } f = b.colorByPoint || m.color;
                if (m.options) for (N in p) w(c[p[N]]) && (f = !0); if (f) {
                    c = c || {}; k = []; d = c.states || {}; f = d.hover = d.hover || {}; if (!b.marker || m.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !m.options.color && e[m.negative && h ? "negativeColor" : "color"] || aa(m.color).brighten(f.brightness || e.brightness).get(); C = { color: m.color }; z || (C.fillColor = m.color); r || (C.lineColor = m.color); c.hasOwnProperty("color") && !c.color && delete c.color; l && !e.fillColor && (f.fillColor = l); k[""] = a.convertAttribs(J(C, c), t[""]); k.hover =
                    a.convertAttribs(d.hover, t.hover, k[""]); k.select = a.convertAttribs(d.select, t.select, k[""])
                } else k = t; m.pointAttr = k
            }
        }, destroy: function () {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(Ha), d, e = a.data || [], f, g, h; Z(a, "destroy"); oa(a); u(a.axisTypes || [], function (b) { if (h = a[b]) W(h.series, a), h.isDirty = h.forceRedraw = !0 }); a.legendItem && a.chart.legend.destroyItem(a); for (d = e.length; d--;) (f = e[d]) && f.destroy && f.destroy(); a.points = null; clearTimeout(a.animationTimeout); for (g in a) a[g] instanceof ma && !a[g].survive && (d =
            c && "group" === g ? "hide" : "destroy", a[g][d]()); b.hoverSeries === a && (b.hoverSeries = null); W(b.series, a); for (g in a) delete a[g]
        }, getGraphPath: function (a, b, c) {
            var d = this, e = d.options, f = e.step, g, h = [], l = [], n; a = a || d.points; (g = a.reversed) && a.reverse(); (f = { right: 1, center: 2 }[f] || f && 3) && g && (f = 4 - f); !e.connectNulls || b || c || (a = this.getValidPoints(a)); u(a, function (g, t) {
                var k = g.plotX, p = g.plotY, r = a[t - 1]; (g.leftCliff || r && r.rightCliff) && !c && (n = !0); g.isNull && !w(b) && 0 < t ? n = !e.connectNulls : g.isNull && !b ? n = !0 : (0 === t || n ? r = ["M", g.plotX,
                g.plotY] : d.getPointSpline ? r = d.getPointSpline(a, g, t) : f ? (r = 1 === f ? ["L", r.plotX, p] : 2 === f ? ["L", (r.plotX + k) / 2, r.plotY, "L", (r.plotX + k) / 2, p] : ["L", k, r.plotY], r.push("L", k, p)) : r = ["L", k, p], l.push(g.x), f && l.push(g.x), h.push.apply(h, r), n = !1)
            }); h.xMap = l; return d.graphPath = h
        }, drawGraph: function () {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color, b.dashStyle]], d = b.lineWidth, e = "square" !== b.linecap, f = (this.gappedPath || this.getGraphPath).call(this); u(this.zones, function (d, e) {
                c.push(["zoneGraph" + e, d.color ||
                a.color, d.dashStyle || b.dashStyle])
            }); u(c, function (c, h) { var l = c[0], n = a[l]; n ? (n.endX = f.xMap, n.animate({ d: f })) : d && f.length && (n = { stroke: c[1], "stroke-width": d, fill: "none", zIndex: 1 }, c[2] ? n.dashstyle = c[2] : e && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), n = a[l] = a.chart.renderer.path(f).attr(n).add(a.group).shadow(2 > h && b.shadow)); n && (n.startX = f.xMap, n.isArea = f.isArea) })
        }, applyZones: function () {
            var a = this, b = this.chart, c = b.renderer, d = this.zones, e, f, g = this.clips || [], h, l = this.graph, n = this.area, m = H(b.chartWidth,
            b.chartHeight), t = this[(this.zoneAxis || "y") + "Axis"], k, p = t.reversed, r = b.inverted, z = t.horiz, q, w, F, C = !1; d.length && (l || n) && t.min !== L && (l && l.hide(), n && n.hide(), k = t.getExtremes(), u(d, function (d, u) {
                e = p ? z ? b.plotWidth : 0 : z ? 0 : t.toPixels(k.min); e = U(H(y(f, e), 0), m); f = U(H(Q(t.toPixels(y(d.value, k.max), !0)), 0), m); C && (e = f = t.toPixels(k.max)); q = Math.abs(e - f); w = U(e, f); F = H(e, f); t.isXAxis ? (h = { x: r ? F : w, y: 0, width: q, height: m }, z || (h.x = b.plotHeight - h.x)) : (h = { x: 0, y: r ? F : w, width: m, height: q }, z && (h.y = b.plotWidth - h.y)); b.inverted &&
                c.isVML && (h = t.isXAxis ? { x: 0, y: p ? w : F, height: h.width, width: b.chartWidth } : { x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height, height: b.chartHeight }); g[u] ? g[u].animate(h) : (g[u] = c.clipRect(h), l && a["zoneGraph" + u].clip(g[u]), n && a["zoneArea" + u].clip(g[u])); C = d.value > k.max
            }), this.clips = g)
        }, invertGroups: function () {
            function a() { var a = { width: b.yAxis.len, height: b.xAxis.len }; u(["group", "markerGroup"], function (c) { b[c] && b[c].attr(a).invert() }) } var b = this, c = b.chart; b.xAxis && (da(c, "resize", a), da(b, "destroy", function () {
                oa(c,
                "resize", a)
            }), a(), b.invertGroups = a)
        }, plotGroup: function (a, b, c, d, e) { var f = this[a], g = !f; g && (this[a] = f = this.chart.renderer.g(b).attr({ zIndex: d || .1 }).add(e), f.addClass("highcharts-series-" + this.index)); f.attr({ visibility: c })[g ? "attr" : "animate"](this.getPlotBox()); return f }, getPlotBox: function () { var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 } }, render: function () {
            var a = this, b = a.chart, c, d = a.options,
            e = !!a.animate && b.renderer.isSVG && la(d.animation).duration, f = a.visible ? "inherit" : "hidden", g = d.zIndex, h = a.hasRendered, l = b.seriesGroup; c = a.plotGroup("group", "series", f, g, l); a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, l); e && a.animate(!0); a.getAttribs(); c.inverted = a.isCartesian ? b.inverted : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); u(a.points, function (a) { a.redraw && a.redraw() }); a.drawDataLabels && a.drawDataLabels(); a.visible && a.drawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking &&
            a.drawTracker(); b.inverted && a.invertGroups(); !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect); e && a.animate(); h || (a.animationTimeout = O(function () { a.afterAnimate() }, e)); a.isDirty = a.isDirtyData = !1; a.hasRendered = !0
        }, redraw: function () {
            var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: y(d && d.left, a.plotLeft), translateY: y(e && e.top, a.plotTop) })); this.translate(); this.render(); b &&
            delete this.kdTree
        }, kdDimensions: 1, kdAxisArray: ["clientX", "plotY"], searchPoint: function (a, b) { var c = this.xAxis, d = this.yAxis, e = this.chart.inverted; return this.searchKDTree({ clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos }, b) }, buildKDTree: function () {
            function a(c, e, f) { var g, h; if (h = c && c.length) return g = b.kdAxisArray[e % f], c.sort(function (a, b) { return a[g] - b[g] }), h = Math.floor(h / 2), { point: c[h], left: a(c.slice(0, h), e + 1, f), right: a(c.slice(h + 1), e + 1, f) } } var b = this, c = b.kdDimensions;
            delete b.kdTree; O(function () { b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c) }, b.options.kdNow ? 0 : 1)
        }, searchKDTree: function (a, b) {
            function c(a, b, n, m) {
                var k = b.point, v = d.kdAxisArray[n % m], p, r, u = k; r = w(a[e]) && w(k[e]) ? Math.pow(a[e] - k[e], 2) : null; p = w(a[f]) && w(k[f]) ? Math.pow(a[f] - k[f], 2) : null; p = (r || 0) + (p || 0); k.dist = w(p) ? Math.sqrt(p) : Number.MAX_VALUE; k.distX = w(r) ? Math.sqrt(r) : Number.MAX_VALUE; v = a[v] - k[v]; p = 0 > v ? "left" : "right"; r = 0 > v ? "right" : "left"; b[p] && (p = c(a, b[p], n + 1, m), u = p[g] < u[g] ? p : k); b[r] && Math.sqrt(v *
                v) < u[g] && (a = c(a, b[r], n + 1, m), u = a[g] < u[g] ? a : u); return u
            } var d = this, e = this.kdAxisArray[0], f = this.kdAxisArray[1], g = b ? "distX" : "dist"; this.kdTree || this.buildKDTree(); if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    }; xb.prototype = {
        destroy: function () { N(this, this.axis) }, render: function (a) {
            var b = this.options, c = b.format, c = c ? ca(c, this) : b.formatter.call(this); this.label ? this.label.attr({ text: c, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation, visibility: "hidden"
            }).add(a)
        }, setOffset: function (a, b) { var c = this.axis, d = c.chart, e = d.inverted, f = c.reversed, f = this.isNegative && !f || !this.isNegative && f, g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = ga(g - c), h = d.xAxis[0].translate(this.x) + a, l = d.plotHeight, f = { x: e ? f ? g : g - c : h, y: e ? l - h - b : f ? l - g - c : l - g, width: e ? c : b, height: e ? b : c }; if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[!1 === this.options.crop || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0) }
    }; ab.prototype.getStacks =
    function () { var a = this; u(a.yAxis, function (a) { a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks) }); u(a.series, function (b) { !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + y(b.options.stack, "")) }) }; ra.prototype.buildStacks = function () {
        var a = this.series, b, c = y(this.options.reversedStacks, !0), d = a.length, e; if (!this.isXAxis) {
            this.usePercentage = !1; for (e = d; e--;) a[c ? e : d - e - 1].setStackedPoints(); for (e = d; e--;) b = a[c ? e : d - e - 1], b.setStackCliffs && b.setStackCliffs(); if (this.usePercentage) for (e =
            0; e < d; e++) a[e].setPercentStacks()
        }
    }; ra.prototype.renderStackTotals = function () { var a = this.chart, b = a.renderer, c = this.stacks, d, e, f = this.stackTotalGroup; f || (this.stackTotalGroup = f = b.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add()); f.translate(a.plotLeft, a.plotTop); for (d in c) for (e in a = c[d], a) a[e].render(f) }; ra.prototype.resetStacks = function () {
        var a = this.stacks, b, c; if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total =
        null, a[b][c].cum = 0)
    }; ra.prototype.cleanStacks = function () { var a, b, c; if (!this.isXAxis) for (b in this.oldStacks && (a = this.stacks = this.oldStacks), a) for (c in a[b]) a[b][c].cum = a[b][c].total }; pa.prototype.setStackedPoints = function () {
        if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.startFromThreshold ? f : 0, h = e.stack, e = e.stacking, l = this.stackKey, n = "-" + l, m = this.negStacks,
            k = this.yAxis, v = k.stacks, p = k.oldStacks, r, u, z, q, F, N, x; k.stacksTouched += 1; for (F = 0; F < d; F++) N = a[F], x = b[F], r = this.getStackIndicator(r, N, this.index), q = r.key, z = (u = m && x < (g ? 0 : f)) ? n : l, v[z] || (v[z] = {}), v[z][N] || (p[z] && p[z][N] ? (v[z][N] = p[z][N], v[z][N].total = null) : v[z][N] = new xb(k, k.options.stackLabels, u, N, h)), z = v[z][N], null !== x && (z.points[q] = z.points[this.index] = [y(z.cum, g)], w(z.cum) || (z.base = q), z.touched = k.stacksTouched, 0 < r.index && !1 === this.singleStacks && (z.points[q][0] = z.points[this.index + "," + N + ",0"][0])), "percent" ===
            e ? (u = u ? l : n, m && v[u] && v[u][N] ? (u = v[u][N], z.total = u.total = H(u.total, z.total) + ga(x) || 0) : z.total = C(z.total + (ga(x) || 0))) : z.total = C(z.total + (x || 0)), z.cum = y(z.cum, g) + (x || 0), null !== x && (z.points[q].push(z.cum), c[F] = z.cum); "percent" === e && (k.usePercentage = !0); this.stackedYData = c; k.oldStacks = {}
        }
    }; pa.prototype.setPercentStacks = function () {
        var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData, e; u([b, "-" + b], function (b) {
            for (var g = d.length, h, l; g--;) if (h = d[g], e = a.getStackIndicator(e, h, a.index), h = (l = c[b] && c[b][h]) &&
            l.points[e.key]) l = l.total ? 100 / l.total : 0, h[0] = C(h[0] * l), h[1] = C(h[1] * l), a.stackedYData[g] = h[1]
        })
    }; pa.prototype.getStackIndicator = function (a, b, c) { w(a) && a.x === b ? a.index++ : a = { x: b, index: 0 }; a.key = [c, b, a.index].join(); return a }; J(ab.prototype, {
        addSeries: function (a, b, c) { var d, e = this; a && (b = y(b, !0), Z(e, "addSeries", { options: a }, function () { d = e.initSeries(a); e.isDirtyLegend = !0; e.linkSeries(); b && e.redraw(c) })); return d }, addAxis: function (a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options; a = A(a, {
                index: this[e].length,
                isX: b
            }); new ra(this, a); f[e] = G(f[e] || {}); f[e].push(a); y(c, !0) && this.redraw(d)
        }, showLoading: function (a) {
            var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function () { d && K(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }; d || (b.loadingDiv = d = I("div", { className: "highcharts-loading" }, J(e.style, { zIndex: 10, display: "none" }), b.container), b.loadingSpan = I("span", null, e.labelStyle, d), da(b, "redraw", f)); b.loadingSpan.innerHTML = a || c.lang.loading; b.loadingShown || (K(d, {
                opacity: 0,
                display: ""
            }), Ra(d, { opacity: e.style.opacity }, { duration: e.showDuration || 0 }), b.loadingShown = !0); f()
        }, hideLoading: function () { var a = this.options, b = this.loadingDiv; b && Ra(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { K(b, { display: "none" }) } }); this.loadingShown = !1 }
    }); J(Sa.prototype, {
        update: function (a, b, c, d) {
            function e() {
                f.applyOptions(a); null === f.y && h && (f.graphic = h.destroy()); sa(a, !0) && (f.redraw = function () {
                    h && h.element && a && a.marker && a.marker.symbol && (f.graphic = h.destroy()); a && a.dataLabels &&
                    f.dataLabel && (f.dataLabel = f.dataLabel.destroy()); f.redraw = null
                }); l = f.index; g.updateParallelArrays(f, l); k && f.name && (k[f.x] = f.name); m.data[l] = sa(m.data[l], !0) ? f.options : a; g.isDirty = g.isDirtyData = !0; !g.fixedBox && g.hasCartesianSeries && (n.isDirtyBox = !0); "point" === m.legendType && (n.isDirtyLegend = !0); b && n.redraw(c)
            } var f = this, g = f.series, h = f.graphic, l, n = g.chart, m = g.options, k = g.xAxis && g.xAxis.names; b = y(b, !0); !1 === d ? e() : f.firePointEvent("update", { options: a }, e)
        }, remove: function (a, b) {
            this.series.removePoint(Aa(this,
            this.series.data), a, b)
        }
    }); J(pa.prototype, {
        addPoint: function (a, b, c, d) {
            var e = this.options, f = this.data, g = this.chart, h = this.xAxis && this.xAxis.names, l = e.data, n, m = this.xData, k, v; wa(d, g); b = y(b, !0); d = { series: this }; this.pointClass.prototype.applyOptions.apply(d, [a]); v = d.x; k = m.length; if (this.requireSorting && v < m[k - 1]) for (n = !0; k && m[k - 1] > v;) k--; this.updateParallelArrays(d, "splice", k, 0, 0); this.updateParallelArrays(d, k); h && d.name && (h[v] = d.name); l.splice(k, 0, a); n && (this.data.splice(k, 0, null), this.processData());
            "point" === e.legendType && this.generatePoints(); c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(d, "shift"), l.shift())); this.isDirtyData = this.isDirty = !0; b && (this.getAttribs(), g.redraw())
        }, removePoint: function (a, b, c) {
            var d = this, e = d.data, f = e[a], g = d.points, h = d.chart, l = function () { g && g.length === e.length && g.splice(a, 1); e.splice(a, 1); d.options.data.splice(a, 1); d.updateParallelArrays(f || { series: d }, "splice", a, 1); f && f.destroy(); d.isDirty = !0; d.isDirtyData = !0; b && h.redraw() }; wa(c, h); b =
            y(b, !0); f ? f.firePointEvent("remove", null, l) : l()
        }, remove: function (a, b) { var c = this, d = c.chart; Z(c, "remove", null, function () { c.destroy(); d.isDirtyLegend = d.isDirtyBox = !0; d.linkSeries(); y(a, !0) && d.redraw(b) }) }, update: function (a, b) {
            var c = this, d = this.chart, e = this.userOptions, f = this.type, g = ha[f].prototype, h = ["group", "markerGroup", "dataLabelsGroup"], l; if (a.type && a.type !== f || void 0 !== a.zIndex) h.length = 0; u(h, function (a) { h[a] = c[a]; delete c[a] }); a = A(e, { animation: !1, index: this.index, pointStart: this.xData[0] }, { data: this.options.data },
            a); this.remove(!1); for (l in g) this[l] = L; J(this, ha[a.type || f].prototype); u(h, function (a) { c[a] = h[a] }); this.init(d, a); d.linkSeries(); y(b, !0) && d.redraw(!1)
        }
    }); J(ra.prototype, {
        update: function (a, b) { var c = this.chart; a = c.options[this.coll][this.options.index] = A(this.userOptions, a); this.destroy(!0); this.init(c, J(a, { events: L })); c.isDirtyBox = !0; y(b, !0) && c.redraw() }, remove: function (a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1); W(b.axes, this); W(b[c], this); b.options[c].splice(this.options.index,
            1); u(b[c], function (a, b) { a.options.index = b }); this.destroy(); b.isDirtyBox = !0; y(a, !0) && b.redraw()
        }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
    }); var Kb = ya(pa); ha.line = Kb; Ba.spline = A(Db); var Lb = ya(pa, {
        type: "spline", getPointSpline: function (a, b, c) {
            var d = b.plotX, e = b.plotY, f = a[c - 1]; c = a[c + 1]; var g, h, l, n; if (f && !f.isNull && c && !c.isNull) {
                a = f.plotY; l = c.plotX; c = c.plotY; var m = 0; g = (1.5 * d + f.plotX) / 2.5; h = (1.5 * e + a) / 2.5; l = (1.5 * d + l) / 2.5; n = (1.5 * e + c) / 2.5; l !==
                g && (m = (n - h) * (l - d) / (l - g) + e - n); h += m; n += m; h > a && h > e ? (h = H(a, e), n = 2 * e - h) : h < a && h < e && (h = U(a, e), n = 2 * e - h); n > c && n > e ? (n = H(c, e), h = 2 * e - n) : n < c && n < e && (n = U(c, e), h = 2 * e - n); b.rightContX = l; b.rightContY = n
            } b = ["C", y(f.rightContX, f.plotX), y(f.rightContY, f.plotY), y(g, d), y(h, e), d, e]; f.rightContX = f.rightContY = null; return b
        }
    }); ha.spline = Lb; Ba.column = A(Db, {
        borderColor: "#FFFFFF", borderRadius: 0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {
            hover: { brightness: .1, shadow: !1, halo: !1 },
            select: { color: "#C0C0C0", borderColor: "#000000", shadow: !1 }
        }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0
    }); var rb = ya(pa, {
        type: "column", pointAttrToOptions: { stroke: "borderColor", fill: "color", r: "borderRadius" }, cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () {
            pa.prototype.init.apply(this, arguments); var a = this, b = a.chart; b.hasRendered && u(b.series, function (b) {
                b.type ===
                a.type && (b.isDirty = !0)
            })
        }, getColumnMetrics: function () {
            var a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, f, g = {}, h = 0; !1 === b.grouping ? h = 1 : u(a.chart.series, function (b) { var c = b.options, e = b.yAxis, l; b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos && (c.stacking ? (f = b.stackKey, g[f] === L && (g[f] = h++), l = g[f]) : !1 !== c.grouping && (l = h++), b.columnIndex = l) }); var l = U(ga(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), n = l * b.groupPadding, m = (l - 2 * n) / h, b = U(b.maxPointWidth ||
            c.len, y(b.pointWidth, m * (1 - 2 * b.pointPadding))); a.columnMetrics = { width: b, offset: (m - b) / 2 + (n + ((a.columnIndex || 0) + (e ? 1 : 0)) * m - l / 2) * (e ? -1 : 1) }; return a.columnMetrics
        }, crispCol: function (a, b, c, d) { var e = this.chart, f = this.borderWidth, g = -(f % 2 ? .5 : 0), f = f % 2 ? .5 : 1; e.inverted && e.renderer.isVML && (f += 1); c = Math.round(a + c) + g; a = Math.round(a) + g; c -= a; d = Math.round(b + d) + f; g = .5 >= ga(b) && .5 < d; b = Math.round(b) + f; d -= b; g && d && (--b, d += 1); return { x: a, y: b, width: c, height: d } }, translate: function () {
            var a = this, b = a.chart, c = a.options, d = a.borderWidth =
            y(c.borderWidth, 2 > a.closestPointRange * a.xAxis.transA ? 0 : 1), e = a.yAxis, f = a.translatedThreshold = e.getThreshold(c.threshold), g = y(c.minPointLength, 5), h = a.getColumnMetrics(), l = h.width, n = a.barW = H(l, 1 + 2 * d), m = a.pointXOffset = h.offset; b.inverted && (f -= .5); c.pointPadding && (n = za(n)); pa.prototype.translate.apply(a); u(a.points, function (c) {
                var d = U(y(c.yBottom, f), 9E4), h = 999 + ga(d), h = U(H(-h, c.plotY), e.len + h), k = c.plotX + m, p = n, r = U(h, d), u, z = H(h, d) - r; ga(z) < g && g && (z = g, u = !e.reversed && !c.negative || e.reversed && c.negative, r = ga(r -
                f) > g ? d - g : f - (u ? g : 0)); c.barX = k; c.pointWidth = l; c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - k - p / 2, z] : [k + p / 2, h + e.pos - b.plotTop, z]; c.shapeType = "rect"; c.shapeArgs = a.crispCol(k, r, p, z)
            })
        }, getSymbol: pb, drawLegendSymbol: Gb.drawRectangle, drawGraph: pb, drawPoints: function () {
            var a = this, b = this.chart, c = a.options, d = b.renderer, e = c.animationLimit || 250, f, g; u(a.points, function (h) {
                var l = h.graphic, n; ba(h.plotY) && null !== h.y ? (f = h.shapeArgs, n = w(a.borderWidth) ? { "stroke-width": a.borderWidth } : {}, g = h.pointAttr[h.selected ?
                "select" : ""] || a.pointAttr[""], l ? (Ja(l), l.attr(n).attr(g)[b.pointCount < e ? "animate" : "attr"](A(f))) : h.graphic = d[h.shapeType](f).attr(n).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius)) : l && (h.graphic = l.destroy())
            })
        }, animate: function (a) {
            var b = this, c = this.yAxis, d = b.options, e = this.chart.inverted, f = {}; ta && (a ? (f.scaleY = .001, a = U(c.pos + c.len, H(c.pos, c.toPixels(d.threshold))), e ? f.translateX = a - c.len : f.translateY = a, b.group.attr(f)) : (f[e ? "translateX" : "translateY"] = c.pos, b.group.animate(f,
            J(la(b.options.animation), { step: function (a, c) { b.group.attr({ scaleY: H(.001, c.pos) }) } })), b.animate = null))
        }, remove: function () { var a = this, b = a.chart; b.hasRendered && u(b.series, function (b) { b.type === a.type && (b.isDirty = !0) }); pa.prototype.remove.apply(a, arguments) }
    }); ha.column = rb; Ba.bar = A(Ba.column); var Mb = ya(rb, { type: "bar", inverted: !0 }); ha.bar = Mb; pa.prototype.drawDataLabels = function () {
        var a = this, b = a.options, c = b.cursor, d = b.dataLabels, e = a.points, f, g, h = a.hasRendered || 0, l, n, m = y(d.defer, !0), k = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), n = a.plotGroup("dataLabelsGroup", "data-labels", m && !h ? "hidden" : "visible", d.zIndex || 6), m && (n.attr({ opacity: +h }), h || da(a, "afterAnimate", function () { a.visible && n.show(!0); n[b.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 }) })), g = d, u(e, function (e) {
            var h, m = e.dataLabel, p, r, z = e.connector, u = !0, q, F = {}; f = e.dlOptions || e.options && e.options.dataLabels; h = y(f && f.enabled, g.enabled) && null !== e.y; if (m && !h) e.dataLabel = m.destroy(); else if (h) {
                d =
                A(g, f); q = d.style; h = d.rotation; p = e.getLabelConfig(); l = d.format ? ca(d.format, p) : d.formatter.call(p, d); q.color = y(d.color, q.color, a.color, "black"); if (m) w(l) ? (m.attr({ text: l }), u = !1) : (e.dataLabel = m = m.destroy(), z && (e.connector = z.destroy())); else if (w(l)) {
                    m = { fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": d.borderWidth, r: d.borderRadius || 0, rotation: h, padding: d.padding, zIndex: 1 }; "contrast" === q.color && (F.color = d.inside || 0 > d.distance || b.stacking ? k.getContrast(e.color || a.color) : "#000000"); c && (F.cursor =
                    c); for (r in m) m[r] === L && delete m[r]; m = e.dataLabel = k[h ? "text" : "label"](l, 0, -9999, d.shape, null, null, d.useHTML).attr(m).css(J(q, F)).add(n).shadow(d.shadow)
                } m && a.alignDataLabel(e, m, d, null, u)
            }
        })
    }; pa.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = y(a.plotX, -9999), l = y(a.plotY, -9999), n = b.getBBox(), m = f.renderer.fontMetrics(c.style.fontSize).b, k = c.rotation, p = c.align, r = this.visible && (a.series.forceDL || f.isInsidePlot(h, Q(l), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g)), z = "justify" ===
        y(c.overflow, "justify"); r && (d = J({ x: g ? f.plotWidth - l : h, y: Q(g ? f.plotHeight - h : l), width: 0, height: 0 }, d), J(c, { width: n.width, height: n.height }), k ? (z = !1, g = f.renderer.rotCorr(m, k), g = { x: d.x + c.x + d.width / 2 + g.x, y: d.y + c.y + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] * d.height }, b[e ? "attr" : "animate"](g).attr({ align: p }), h = (k + 720) % 360, h = 180 < h && 360 > h, "left" === p ? g.y -= h ? n.height : 0 : "center" === p ? (g.x -= n.width / 2, g.y -= n.height / 2) : "right" === p && (g.x -= n.width, g.y -= h ? 0 : n.height)) : (b.align(c, null, d), g = b.alignAttr), z ? this.justifyDataLabel(b,
        c, g, n, d, e) : y(c.crop, !0) && (r = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + n.width, g.y + n.height)), c.shape && !k && b.attr({ anchorX: a.plotX, anchorY: a.plotY })); r || (Ja(b), b.attr({ y: -9999 }), b.placed = !1)
    }; pa.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
        var g = this.chart, h = b.align, l = b.verticalAlign, n, m, k = a.box ? 0 : a.padding || 0; n = c.x + k; 0 > n && ("right" === h ? b.align = "left" : b.x = -n, m = !0); n = c.x + d.width - k; n > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - n, m = !0); n = c.y + k; 0 > n && ("bottom" === l ? b.verticalAlign = "top" :
        b.y = -n, m = !0); n = c.y + d.height - k; n > g.plotHeight && ("top" === l ? b.verticalAlign = "bottom" : b.y = g.plotHeight - n, m = !0); m && (a.placed = !f, a.align(b, null, e))
    }; ha.pie && (ha.pie.prototype.drawDataLabels = function () {
        var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = y(e.connectorPadding, 10), g = y(e.connectorWidth, 1), h = d.plotWidth, l = d.plotHeight, n, m, k = y(e.softConnector, !0), p = e.distance, r = a.center, z = r[2] / 2, q = r[1], w = 0 < p, C, N, x, E = [[], []], ea, G, L, O, A, J = [0, 0, 0, 0], K = function (a, b) { return b.y - a.y }; if (a.visible && (e.enabled ||
        a._hasPointLabels)) {
            pa.prototype.drawDataLabels.apply(a); u(b, function (a) { a.dataLabel && a.visible && (E[a.half].push(a), a.dataLabel._pos = null) }); for (O = 2; O--;) {
                var M = [], aa = [], la = E[O], P = la.length, I; if (P) {
                    a.sortByAngle(la, O - .5); for (A = b = 0; !b && la[A];) b = la[A] && la[A].dataLabel && (la[A].dataLabel.getBBox().height || 21), A++; if (0 < p) {
                        N = U(q + z + p, d.plotHeight); for (A = H(0, q - z - p) ; A <= N; A += b) M.push(A); N = M.length; if (P > N) { c = [].concat(la); c.sort(K); for (A = P; A--;) c[A].rank = A; for (A = P; A--;) la[A].rank >= N && la.splice(A, 1); P = la.length } for (A =
                        0; A < P; A++) { c = la[A]; x = c.labelPos; c = 9999; var S, wa; for (wa = 0; wa < N; wa++) S = ga(M[wa] - x[1]), S < c && (c = S, I = wa); if (I < A && null !== M[A]) I = A; else for (N < P - A + I && null !== M[A] && (I = N - P + A) ; null === M[I];) I++; aa.push({ i: I, y: M[I] }); M[I] = null } aa.sort(K)
                    } for (A = 0; A < P; A++) {
                        c = la[A]; x = c.labelPos; C = c.dataLabel; L = !1 === c.visible ? "hidden" : "inherit"; c = x[1]; if (0 < p) { if (N = aa.pop(), I = N.i, G = N.y, c > G && null !== M[I + 1] || c < G && null !== M[I - 1]) G = U(H(0, c), d.plotHeight) } else G = c; ea = e.justify ? r[0] + (O ? -1 : 1) * (z + p) : a.getX(G === q - z - p || G === q + z + p ? c : G, O); C._attr =
                        { visibility: L, align: x[6] }; C._pos = { x: ea + e.x + ({ left: f, right: -f }[x[6]] || 0), y: G + e.y - 10 }; C.connX = ea; C.connY = G; null === this.options.size && (N = C.width, ea - N < f ? J[3] = H(Q(N - ea + f), J[3]) : ea + N > h - f && (J[1] = H(Q(ea + N - h + f), J[1])), 0 > G - b / 2 ? J[0] = H(Q(-G + b / 2), J[0]) : G + b / 2 > l && (J[2] = H(Q(G + b / 2 - l), J[2])))
                    }
                }
            } if (0 === F(J) || this.verifyDataLabelOverflow(J)) this.placeDataLabels(), w && g && u(this.points, function (b) {
                n = b.connector; x = b.labelPos; (C = b.dataLabel) && C._pos && b.visible ? (L = C._attr.visibility, ea = C.connX, G = C.connY, m = k ? ["M", ea + ("left" ===
                x[6] ? 5 : -5), G, "C", ea, G, 2 * x[2] - x[4], 2 * x[3] - x[5], x[2], x[3], "L", x[4], x[5]] : ["M", ea + ("left" === x[6] ? 5 : -5), G, "L", x[2], x[3], "L", x[4], x[5]], n ? (n.animate({ d: m }), n.attr("visibility", L)) : b.connector = n = a.chart.renderer.path(m).attr({ "stroke-width": g, stroke: e.connectorColor || b.color || "#606060", visibility: L }).add(a.dataLabelsGroup)) : n && (b.connector = n.destroy())
            })
        }
    }, ha.pie.prototype.placeDataLabels = function () {
        u(this.points, function (a) {
            var b = a.dataLabel; b && a.visible && ((a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" :
            "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 }))
        })
    }, ha.pie.prototype.alignDataLabel = pb, ha.pie.prototype.verifyDataLabelOverflow = function (a) { var b = this.center, c = this.options, d = c.center, e = c.minSize || 80, f, g; null !== d[0] ? f = H(b[2] - H(a[1], a[3]), e) : (f = H(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2); null !== d[1] ? f = H(U(f, b[2] - H(a[0], a[2])), e) : (f = H(U(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2); f < b[2] ? (b[2] = f, b[3] = Math.min(Da(c.innerSize || 0, f), f), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : g = !0; return g });
    ha.column && (ha.column.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart.inverted, g = a.series, h = a.dlBox || a.shapeArgs, l = y(a.below, a.plotY > y(this.translatedThreshold, g.yAxis.len)), n = y(c.inside, !!this.options.stacking); h && (d = A(h), 0 > d.y && (d.height += d.y, d.y = 0), h = d.y + d.height - g.yAxis.len, 0 < h && (d.height -= h), f && (d = { x: g.yAxis.len - d.y - d.height, y: g.xAxis.len - d.x - d.width, width: d.height, height: d.width }), n || (f ? (d.x += l ? 0 : d.width, d.width = 0) : (d.y += l ? d.height : 0, d.height = 0))); c.align = y(c.align, !f || n ? "center" :
        l ? "right" : "left"); c.verticalAlign = y(c.verticalAlign, f || n ? "middle" : l ? "top" : "bottom"); pa.prototype.alignDataLabel.call(this, a, b, c, d, e)
    }); var hb = M.TrackerMixin = {
        drawTrackerPoint: function () {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && { cursor: d }, f = function (a) { for (var c = a.target, d; c && !d;) d = c.point, c = c.parentNode; if (d !== L && d !== b.hoverPoint) d.onMouseOver(a) }; u(a.points, function (a) { a.graphic && (a.graphic.element.point = a); a.dataLabel && (a.dataLabel.element.point = a) }); a._hasTracking || (u(a.trackerGroups,
            function (b) { if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) { c.onTrackerMouseOut(a) }).css(e), Wa)) a[b].on("touchstart", f) }), a._hasTracking = !0)
        }, drawTrackerGraph: function () {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, l = f.options.tooltip.snap, n = a.tracker, m = b.cursor, k = m && { cursor: m }, p = function () { if (f.hoverSeries !== a) a.onMouseOver() }, r = "rgba(192,192,192," + (ta ? 1E-4 : .002) + ")"; if (e && !c) for (m =
            e + 1; m--;) "M" === d[m] && d.splice(m + 1, 0, d[m + 1] - l, d[m + 2], "L"), (m && "M" === d[m] || m === e) && d.splice(m, 0, "L", d[m - 2] + l, d[m - 1]); n ? n.attr({ d: d }) : (a.tracker = h.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: r, fill: c ? r : "none", "stroke-width": b.lineWidth + (c ? 0 : 2 * l), zIndex: 2 }).add(a.group), u([a.tracker, a.markerGroup], function (a) { a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (a) { g.onTrackerMouseOut(a) }).css(k); if (Wa) a.on("touchstart", p) }))
        }
    }; ha.column &&
    (rb.prototype.drawTracker = hb.drawTrackerPoint); ha.pie && (ha.pie.prototype.drawTracker = hb.drawTrackerPoint); ha.scatter && (ScatterSeries.prototype.drawTracker = hb.drawTrackerPoint); J(gb.prototype, {
        setItemEvents: function (a, b, c, d, e) {
            var f = this; (c ? b : a.legendGroup).on("mouseover", function () { a.setState("hover"); b.css(f.options.itemHoverStyle) }).on("mouseout", function () { b.css(a.visible ? d : e); a.setState() }).on("click", function (b) {
                var c = function () { a.setVisible && a.setVisible() }; b = { browserEvent: b }; a.firePointEvent ?
                a.firePointEvent("legendItemClick", b, c) : Z(a, "legendItemClick", b, c)
            })
        }, createCheckboxForItem: function (a) { a.checkbox = I("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); da(a.checkbox, "click", function (b) { Z(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() }) }) }
    }); ja.legend.itemStyle.cursor = "pointer"; J(ab.prototype, {
        showResetZoom: function () {
            var a = this, b = ja.lang, c = a.options.chart.resetZoomButton,
            d = c.theme, e = d.states, f = "chart" === c.relativeTo ? null : "plotBox"; this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () { a.zoomOut() }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).add().align(c.position, !1, f)
        }, zoomOut: function () { var a = this; Z(a, "selection", { resetSelection: !0 }, function () { a.zoom() }) }, zoom: function (a) {
            var b, c = this.pointer, d = !1, e; !a || a.resetSelection ? u(this.axes, function (a) { b = a.zoom() }) : u(a.xAxis.concat(a.yAxis), function (a) {
                var e = a.axis, h = e.isXAxis; if (c[h ?
                "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            }); e = this.resetZoomButton; d && !e ? this.showResetZoom() : !d && sa(e) && (this.resetZoomButton = e.destroy()); b && this.redraw(y(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
        }, pan: function (a, b) {
            var c = this, d = c.hoverPoints, e; d && u(d, function (a) { a.setState() }); u("xy" === b ? [1, 0] : [1], function (b) {
                b = c[b ? "xAxis" : "yAxis"][0]; var d = b.horiz, h = a[d ? "chartX" : "chartY"], d = d ? "mouseDownX" : "mouseDownY", l = c[d], n = (b.pointRange || 0) /
                2, m = b.getExtremes(), k = b.toValue(l - h, !0) + n, n = b.toValue(l + b.len - h, !0) - n, l = l > h; b.series.length && (l || k > U(m.dataMin, m.min)) && (!l || n < H(m.dataMax, m.max)) && (b.setExtremes(k, n, !1, !1, { trigger: "pan" }), e = !0); c[d] = h
            }); e && c.redraw(!1); K(c.container, { cursor: "move" })
        }
    }); J(Sa.prototype, {
        select: function (a, b) {
            var c = this, d = c.series, e = d.chart; a = y(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                c.selected = c.options.selected = a; d.options.data[Aa(c, d.data)] = c.options; c.setState(a && "select");
                b || u(e.getSelectedPoints(), function (a) { a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[Aa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")) })
            })
        }, onMouseOver: function (a, b) { var c = this.series, d = c.chart, e = d.tooltip, f = d.hoverPoint; if (d.hoverSeries !== c) c.onMouseOver(); if (f && f !== this) f.onMouseOut(); this.series && (this.firePointEvent("mouseOver"), !e || e.shared && !c.noSharedTooltip || e.refresh(this, a), this.setState("hover"), b || (d.hoverPoint = this)) }, onMouseOut: function () {
            var a =
            this.series.chart, b = a.hoverPoints; this.firePointEvent("mouseOut"); b && -1 !== Aa(this, b) || (this.setState(), a.hoverPoint = null)
        }, importEvents: function () { if (!this.hasImportedEvents) { var a = A(this.series.options.point, this.options).events, b; this.events = a; for (b in a) da(this, b, a[b]); this.hasImportedEvents = !0 } }, setState: function (a, b) {
            var c = ka(this.plotX), d = this.plotY, e = this.series, f = e.options.states, g = Ba[e.type].marker && e.options.marker, h = g && !g.enabled, l = g && g.states[a], n = l && !1 === l.enabled, m = e.stateMarkerGraphic,
            k = this.marker || {}, p = e.chart, r = e.halo, z; a = a || ""; z = this.pointAttr[a] || e.pointAttr[a]; if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && !1 === f[a].enabled || a && (n || h && !1 === l.enabled) || a && k.states && k.states[a] && !1 === k.states[a].enabled)) {
                if (this.graphic) g = g && this.graphic.symbolName && z.r, this.graphic.attr(A(z, g ? { x: c - g, y: d - g, width: 2 * g, height: 2 * g } : {})), m && m.hide(); else {
                    if (a && l) if (g = l.radius, k = k.symbol || e.symbol, m && m.currentSymbol !== k && (m = m.destroy()), m) m[b ? "animate" : "attr"]({ x: c - g, y: d - g }); else k &&
                    (e.stateMarkerGraphic = m = p.renderer.symbol(k, c - g, d - g, 2 * g, 2 * g).attr(z).add(e.markerGroup), m.currentSymbol = k); m && (m[a && p.isInsidePlot(c, d, p.inverted) ? "show" : "hide"](), m.element.point = this)
                } (c = f[a] && f[a].halo) && c.size ? (r || (e.halo = r = p.renderer.path().add(p.seriesGroup)), r.attr(J({ fill: this.color || e.color, "fill-opacity": c.opacity, zIndex: -1 }, c.attributes))[b ? "animate" : "attr"]({ d: this.haloPath(c.size) })) : r && r.attr({ d: [] }); this.state = a
            }
        }, haloPath: function (a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e =
            c.inverted, f = Math.floor(this.plotX); return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, 2 * a, 2 * a)
        }
    }); J(pa.prototype, {
        onMouseOver: function () { var a = this.chart, b = a.hoverSeries; if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && Z(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }, onMouseOut: function () {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut &&
            Z(this, "mouseOut"); !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); this.setState()
        }, setState: function (a) { var b = this.options, c = this.graph, d = b.states, e = b.lineWidth, b = 0; a = a || ""; if (this.state !== a && (this.state = a, !d[a] || !1 !== d[a].enabled) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle)) for (a = { "stroke-width": e }, c.attr(a) ; this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1 }, setVisible: function (a, b) {
            var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries,
            h = c.visible; f = (c.visible = a = c.userOptions.visible = a === L ? !h : a) ? "show" : "hide"; u(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) { if (c[a]) c[a][f]() }); if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut(); e && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && u(d.series, function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); u(c.linkedSeries, function (b) { b.setVisible(a, !1) }); g && (d.isDirtyBox = !0); !1 !== b && d.redraw(); Z(c, f)
        }, show: function () { this.setVisible(!0) },
        hide: function () { this.setVisible(!1) }, select: function (a) { this.selected = a = a === L ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); Z(this, a ? "select" : "unselect") }, drawTracker: hb.drawTrackerGraph
    }); J(M, {
        Color: aa, Point: Sa, Tick: Pa, Renderer: $a, SVGElement: ma, SVGRenderer: $a, arrayMin: r, arrayMax: F, charts: na, correctFloat: C, dateFormat: Na, error: T, format: ca, pathAnim: void 0, getOptions: function () { return ja }, hasBidiBug: Hb, isTouchDevice: Ab, setOptions: function (a) { ja = A(!0, ja, a); sb(); return ja }, addEvent: da, removeEvent: oa,
        createElement: I, discardElement: ea, css: K, each: u, map: Ma, merge: A, splat: G, stableSort: z, extendClass: ya, pInt: E, svg: ta, canvas: xa, vml: !ta && !xa, product: "Highcharts 4.2.6", version: "/Highstock 4.2.6"
    }); return M
});
(function (q) { "object" === typeof module && module.exports ? module.exports = q : q(Highcharts) })(function (q) {
    var T = q.win, V = T.document, A = q.Chart, E = q.addEvent, Y = q.removeEvent, fa = q.fireEvent, W = q.createElement, w = q.discardElement, x = q.css, G = q.merge, O = q.each, K = q.extend, I = q.splat, ya = Math.max, R = q.isTouchDevice, Da = q.Renderer.prototype.symbols, S = q.getOptions(), ca; K(S.lang, {
        printChart: "Print chart", downloadPNG: "Download PNG image", downloadJPEG: "Download JPEG image", downloadPDF: "Download PDF document", downloadSVG: "Download SVG vector image",
        contextButtonTitle: "Chart context menu"
    }); S.navigation = { menuStyle: { border: "1px solid #A0A0A0", background: "#FFFFFF", padding: "5px 0" }, menuItemStyle: { padding: "0 10px", background: "none", color: "#303030", fontSize: R ? "14px" : "11px" }, menuItemHoverStyle: { background: "#4572A5", color: "#FFFFFF" }, buttonOptions: { symbolFill: "#E0E0E0", symbolSize: 14, symbolStroke: "#666", symbolStrokeWidth: 3, symbolX: 12.5, symbolY: 10.5, align: "right", buttonSpacing: 3, height: 22, theme: { fill: "white", stroke: "none" }, verticalAlign: "top", width: 24 } };
    S.exporting = {
        type: "image/png", url: "https://export.highcharts.com/", printMaxWidth: 780, scale: 2, buttons: {
            contextButton: {
                menuClassName: "highcharts-contextmenu", symbol: "menu", _titleKey: "contextButtonTitle", menuItems: [{ textKey: "printChart", onclick: function () { this.print() } }, { separator: !0 }, { textKey: "downloadPNG", onclick: function () { this.exportChart() } }, { textKey: "downloadJPEG", onclick: function () { this.exportChart({ type: "image/jpeg" }) } }, { textKey: "downloadPDF", onclick: function () { this.exportChart({ type: "application/pdf" }) } },
                { textKey: "downloadSVG", onclick: function () { this.exportChart({ type: "image/svg+xml" }) } }]
            }
        }
    }; q.post = function (k, p, z) { var r; k = W("form", G({ method: "post", action: k, enctype: "multipart/form-data" }, z), { display: "none" }, V.body); for (r in p) W("input", { type: "hidden", name: r, value: p[r] }, null, k); k.submit(); w(k) }; K(A.prototype, {
        sanitizeSVG: function (k) {
            return k.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /,
            '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad").replace(/<IMG /g, "<image ").replace(/<(\/?)TITLE>/g, "<$1title>").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,
            ' id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function (k) { return k.toLowerCase() })
        }, getChartHTML: function () { return this.container.innerHTML }, getSVG: function (k) {
            var p = this, z, r, F, N, x, C = G(p.options, k), A = C.exporting.allowHTML; V.createElementNS || (V.createElementNS = function (k, p) { return V.createElement(p) }); r = W("div", null, { position: "absolute", top: "-9999em", width: p.chartWidth + "px", height: p.chartHeight + "px" }, V.body);
            F = p.renderTo.style.width; x = p.renderTo.style.height; F = C.exporting.sourceWidth || C.chart.width || /px$/.test(F) && parseInt(F, 10) || 600; x = C.exporting.sourceHeight || C.chart.height || /px$/.test(x) && parseInt(x, 10) || 400; K(C.chart, { animation: !1, renderTo: r, forExport: !0, renderer: "SVGRenderer", width: F, height: x }); C.exporting.enabled = !1; delete C.data; C.series = []; O(p.series, function (k) { N = G(k.userOptions, { animation: !1, enableMouseTracking: !1, showCheckbox: !1, visible: k.visible }); N.isInternal || C.series.push(N) }); k && O(["xAxis",
            "yAxis"], function (p) { O(I(k[p]), function (k, r) { C[p][r] = G(C[p][r], k) }) }); z = new q.Chart(C, p.callback); O(["xAxis", "yAxis"], function (k) { O(p[k], function (p, r) { var q = z[k][r], w = p.getExtremes(), F = w.userMin, w = w.userMax; !q || void 0 === F && void 0 === w || q.setExtremes(F, w, !0, !1) }) }); F = z.getChartHTML(); C = null; z.destroy(); w(r); A && (r = F.match(/<\/svg>(.*?$)/)) && (r = '<foreignObject x="0" y="0" width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">' + r[1] + "</body></foreignObject>", F = F.replace("</svg>", r + "</svg>"));
            F = this.sanitizeSVG(F); return F = F.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'")
        }, getSVGForExport: function (k, p) { var z = this.options.exporting; return this.getSVG(G({ chart: { borderRadius: 0 } }, z.chartOptions, p, { exporting: { sourceWidth: k && k.sourceWidth || z.sourceWidth, sourceHeight: k && k.sourceHeight || z.sourceHeight } })) }, exportChart: function (k, p) {
            var z = this.getSVGForExport(k, p); k = G(this.options.exporting, k); q.post(k.url, {
                filename: k.filename || "chart", type: k.type, width: k.width || 0, scale: k.scale,
                svg: z
            }, k.formAttributes)
        }, print: function () {
            var k = this, p = k.container, z = [], r = p.parentNode, q = V.body, w = q.childNodes, x = k.options.exporting.printMaxWidth, C, A; if (!k.isPrinting) {
                k.isPrinting = !0; k.pointer.reset(null, 0); fa(k, "beforePrint"); if (A = x && k.chartWidth > x) C = [k.options.chart.width, void 0, !1], k.setSize(x, void 0, !1); O(w, function (k, p) { 1 === k.nodeType && (z[p] = k.style.display, k.style.display = "none") }); q.appendChild(p); T.focus(); T.print(); setTimeout(function () {
                    r.appendChild(p); O(w, function (k, p) {
                        1 === k.nodeType &&
                        (k.style.display = z[p])
                    }); k.isPrinting = !1; A && k.setSize.apply(k, C); fa(k, "afterPrint")
                }, 1E3)
            }
        }, contextMenu: function (k, p, z, r, q, w, A) {
            var C = this, G = C.options.navigation, I = G.menuItemStyle, S = C.chartWidth, aa = C.chartHeight, ca = "cache-" + k, R = C[ca], T = ya(q, w), L, P, Da, Q = function (p) { C.pointer.inClass(p.target, k) || P() }; R || (C[ca] = R = W("div", { className: k }, { position: "absolute", zIndex: 1E3, padding: T + "px" }, C.container), L = W("div", null, K({ MozBoxShadow: "3px 3px 10px #888", WebkitBoxShadow: "3px 3px 10px #888", boxShadow: "3px 3px 10px #888" },
            G.menuStyle), R), P = function () { x(R, { display: "none" }); A && A.setState(0); C.openMenu = !1 }, E(R, "mouseleave", function () { Da = setTimeout(P, 500) }), E(R, "mouseenter", function () { clearTimeout(Da) }), E(V, "mouseup", Q), E(C, "destroy", function () { Y(V, "mouseup", Q) }), O(p, function (k) {
                if (k) {
                    var p = k.separator ? W("hr", null, null, L) : W("div", {
                        onmouseover: function () { x(this, G.menuItemHoverStyle) }, onmouseout: function () { x(this, I) }, onclick: function (p) { p && p.stopPropagation(); P(); k.onclick && k.onclick.apply(C, arguments) }, innerHTML: k.text ||
                        C.options.lang[k.textKey]
                    }, K({ cursor: "pointer" }, I), L); C.exportDivElements.push(p)
                }
            }), C.exportDivElements.push(L, R), C.exportMenuWidth = R.offsetWidth, C.exportMenuHeight = R.offsetHeight); p = { display: "block" }; z + C.exportMenuWidth > S ? p.right = S - z - q - T + "px" : p.left = z - T + "px"; r + w + C.exportMenuHeight > aa && "top" !== A.alignOptions.verticalAlign ? p.bottom = aa - r - T + "px" : p.top = r + w - T + "px"; x(R, p); C.openMenu = !0
        }, addButton: function (k) {
            var p = this, z = p.renderer, r = G(p.options.navigation.buttonOptions, k), w = r.onclick, x = r.menuItems, A,
            C, E = { stroke: r.symbolStroke, fill: r.symbolFill }, O = r.symbolSize || 12; p.btnCount || (p.btnCount = 0); p.exportDivElements || (p.exportDivElements = [], p.exportSVGElements = []); if (!1 !== r.enabled) {
                var I = r.theme, aa = I.states, S = aa && aa.hover, aa = aa && aa.select, R; delete I.states; w ? R = function (k) { k.stopPropagation(); w.call(p, k) } : x && (R = function () { p.contextMenu(C.menuClassName, x, C.translateX, C.translateY, C.width, C.height, C); C.setState(2) }); r.text && r.symbol ? I.paddingLeft = q.pick(I.paddingLeft, 25) : r.text || K(I, {
                    width: r.width, height: r.height,
                    padding: 0
                }); C = z.button(r.text, 0, 0, R, I, S, aa).attr({ title: p.options.lang[r._titleKey], "stroke-linecap": "round", zIndex: 3 }); C.menuClassName = k.menuClassName || "highcharts-menu-" + p.btnCount++; r.symbol && (A = z.symbol(r.symbol, r.symbolX - O / 2, r.symbolY - O / 2, O, O).attr(K(E, { "stroke-width": r.symbolStrokeWidth || 1, zIndex: 1 })).add(C)); C.add().align(K(r, { width: C.width, x: q.pick(r.x, ca) }), !0, "spacingBox"); ca += (C.width + r.buttonSpacing) * ("right" === r.align ? -1 : 1); p.exportSVGElements.push(C, A)
            }
        }, destroyExport: function (k) {
            k =
            k.target; var p, z; for (p = 0; p < k.exportSVGElements.length; p++) if (z = k.exportSVGElements[p]) z.onclick = z.ontouchstart = null, k.exportSVGElements[p] = z.destroy(); for (p = 0; p < k.exportDivElements.length; p++) z = k.exportDivElements[p], Y(z, "mouseleave"), k.exportDivElements[p] = z.onmouseout = z.onmouseover = z.ontouchstart = z.onclick = null, w(z)
        }
    }); Da.menu = function (k, p, z, r) { return ["M", k, p + 2.5, "L", k + z, p + 2.5, "M", k, p + r / 2 + .5, "L", k + z, p + r / 2 + .5, "M", k, p + r - 1.5, "L", k + z, p + r - 1.5] }; A.prototype.callbacks.push(function (k) {
        var p, z = k.options.exporting,
        r = z.buttons; ca = 0; if (!1 !== z.enabled) { for (p in r) k.addButton(r[p]); E(k, "destroy", k.destroyExport) }
    })
});
(function (q) { "object" === typeof module && module.exports ? module.exports = q : q(Highcharts) })(function (q) {
    function T(q, x) { var A = E.getElementsByTagName("head")[0], O = E.createElement("script"); O.type = "text/javascript"; O.src = q; O.onload = x; A.appendChild(O) } var V = q.win, A = V.navigator, E = V.document, Y = V.URL || V.webkitURL || V, fa = /Edge\/|Trident\/|MSIE /.test(A.userAgent), W = fa ? 150 : 0; q.CanVGRenderer = {}; q.downloadURL = function (q, x) {
        var G = E.createElement("a"), O; if (A.msSaveOrOpenBlob) A.msSaveOrOpenBlob(q, x); else if (void 0 !==
        G.download) G.href = q, G.download = x, G.target = "_blank", E.body.appendChild(G), G.click(), E.body.removeChild(G); else try { if (O = V.open(q, "chart"), void 0 === O || null === O) throw "Failed to open window"; } catch (K) { V.location.href = q }
    }; q.svgToDataUrl = function (q) {
        var x = -1 < A.userAgent.indexOf("WebKit") && 0 > A.userAgent.indexOf("Chrome"); try { if (!x && 0 > A.userAgent.toLowerCase().indexOf("firefox")) return Y.createObjectURL(new V.Blob([q], { type: "image/svg+xml;charset-utf-16" })) } catch (G) { } return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(q)
    }; q.imageToDataUrl = function (q, x, A, O, K, I, T, R, Y) {
        var S = new V.Image, ca, k = function () { setTimeout(function () { var k = E.createElement("canvas"), p = k.getContext && k.getContext("2d"), F; try { if (p) { k.height = S.height * O; k.width = S.width * O; p.drawImage(S, 0, 0, k.width, k.height); try { F = k.toDataURL(x), K(F, x, A, O) } catch (N) { ca(q, x, A, O) } } else T(q, x, A, O) } finally { Y && Y(q, x, A, O) } }, W) }, p = function () { R(q, x, A, O); Y && Y(q, x, A, O) }; ca = function () {
            S = new V.Image; ca = I; S.crossOrigin = "Anonymous"; S.onload = k; S.onerror = p; S.src =
            q
        }; S.onload = k; S.onerror = p; S.src = q
    }; q.downloadSVGLocal = function (w, x, G, O, K, I) {
        var W, R, fa = !0, S; if ("image/svg+xml" === G) try { A.msSaveOrOpenBlob ? (R = new MSBlobBuilder, R.append(w), W = R.getBlob("image/svg+xml")) : W = q.svgToDataUrl(w), q.downloadURL(W, x), I && I() } catch (ca) { K() } else W = q.svgToDataUrl(w), S = function () { try { Y.revokeObjectURL(W) } catch (q) { } }, q.imageToDataUrl(W, G, {}, O, function (w) { try { q.downloadURL(w, x), I && I() } catch (k) { K() } }, function () {
            var R = E.createElement("canvas"), k = R.getContext("2d"), p = w.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1] *
            O, z = w.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1] * O, r = function () { k.drawSvg(w, 0, 0, p, z); try { q.downloadURL(A.msSaveOrOpenBlob ? R.msToBlob() : R.toDataURL(G), x), I && I() } catch (r) { K() } finally { S() } }; R.width = p; R.height = z; V.canvg ? r() : (fa = !0, T(q.getOptions().global.canvasToolsURL, function () { r() }))
        }, K, K, function () { fa && S() })
    }; q.Chart.prototype.getSVGForLocalExport = function (w, x, A, E) {
        var K = this, I, T = 0, R, V, S, W, k = function (k, z, r) {
            ++T; r.imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", k); T === I.length &&
            E(K.sanitizeSVG(R.innerHTML))
        }; q.wrap(q.Chart.prototype, "getChartHTML", function (k) { R = this.container.cloneNode(!0); return k.apply(this, Array.prototype.slice.call(arguments, 1)) }); K.getSVGForExport(w, x); I = R.getElementsByTagName("image"); try { if (I.length) for (S = 0, W = I.length; S < W; ++S) V = I[S], q.imageToDataUrl(V.getAttributeNS("http://www.w3.org/1999/xlink", "href"), "image/png", { imageElement: V }, w.scale, k, A, A, A); else E(K.sanitizeSVG(R.innerHTML)) } catch (p) { A() }
    }; q.Chart.prototype.exportChartLocal = function (w, x) {
        var A =
        this, E = q.merge(A.options.exporting, w), K = E && E.type || "image/png", I = function () { if (!1 === E.fallbackToExportServer) if (E.error) E.error(); else throw "Fallback to export server disabled"; else A.exportChart(E) }, T = function (w) { var x = (E.filename || "chart") + "." + ("image/svg+xml" === K ? "svg" : K.split("/")[1]); q.downloadSVGLocal(w, x, K, E.scale, I) }; fa && "image/svg+xml" !== K && A.container.getElementsByTagName("image").length ? I() : A.getSVGForLocalExport(E, x, I, T)
    }; q.getOptions().exporting.buttons.contextButton.menuItems = [{
        textKey: "printChart",
        onclick: function () { this.print() }
    }, { separator: !0 }, { textKey: "downloadPNG", onclick: function () { this.exportChartLocal() } }, { textKey: "downloadJPEG", onclick: function () { this.exportChartLocal({ type: "image/jpeg" }) } }, { textKey: "downloadSVG", onclick: function () { this.exportChartLocal({ type: "image/svg+xml" }) } }]
});
(function (q) { "object" === typeof module && module.exports ? module.exports = q : q(Highcharts) })(function (q) {
    function T() { return !!this.points.length } function V() { this.hasData() ? this.hideNoData() : this.showNoData() } var A = q.seriesTypes, E = q.Chart.prototype, Y = q.getOptions(), fa = q.extend, W = q.each; fa(Y.lang, { noData: "No data to display" }); Y.noData = { position: { x: 0, y: 0, align: "center", verticalAlign: "middle" }, attr: {}, style: { fontWeight: "bold", fontSize: "12px", color: "#60606a" } }; W(["pie", "gauge", "waterfall", "bubble", "treemap"],
    function (q) { A[q] && (A[q].prototype.hasData = T) }); q.Series.prototype.hasData = function () { return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin }; E.showNoData = function (q) { var x = this.options; q = q || x.lang.noData; x = x.noData; this.noDataLabel || (this.noDataLabel = this.renderer.label(q, 0, 0, null, null, null, x.useHTML, null, "no-data").attr(x.attr).css(x.style).add(), this.noDataLabel.align(fa(this.noDataLabel.getBBox(), x.position), !1, "plotBox")) }; E.hideNoData = function () {
        this.noDataLabel && (this.noDataLabel =
        this.noDataLabel.destroy())
    }; E.hasData = function () { for (var q = this.series, x = q.length; x--;) if (q[x].hasData() && !q[x].options.isInternal) return !0; return !1 }; E.callbacks.push(function (w) { q.addEvent(w, "load", V); q.addEvent(w, "redraw", V) })
});
(function (q) { "object" === typeof module && module.exports ? module.exports = q : q(Highcharts) })(function (q) {
    function T(k, p, q) { var r; p.rgba.length && k.rgba.length ? (k = k.rgba, p = p.rgba, r = 1 !== p[3] || 1 !== k[3], k = (r ? "rgba(" : "rgb(") + Math.round(p[0] + (k[0] - p[0]) * (1 - q)) + "," + Math.round(p[1] + (k[1] - p[1]) * (1 - q)) + "," + Math.round(p[2] + (k[2] - p[2]) * (1 - q)) + (r ? "," + (p[3] + (k[3] - p[3]) * (1 - q)) : "") + ")") : k = p.input || "none"; return k } var V = function () { }, A = q.getOptions(), E = q.each, Y = q.extend, fa = q.format, W = q.merge, w = q.pick, x = q.wrap, G = q.Chart, O =
    q.seriesTypes, K = O.pie, I = O.column, ya = q.Tick, R = q.fireEvent, Da = q.inArray, S = 1; E(["fill", "stroke"], function (k) { q.Fx.prototype[k + "Setter"] = function () { this.elem.attr(k, T(q.Color(this.start), q.Color(this.end), this.pos)) } }); Y(A.lang, { drillUpText: "\u25c1 Back to {series.name}" }); A.drilldown = {
        activeAxisLabelStyle: { cursor: "pointer", color: "#0d233a", fontWeight: "bold", textDecoration: "underline" }, activeDataLabelStyle: { cursor: "pointer", color: "#0d233a", fontWeight: "bold", textDecoration: "underline" }, animation: { duration: 500 },
        drillUpButton: { position: { align: "right", x: -10, y: 10 } }
    }; q.SVGRenderer.prototype.Element.prototype.fadeIn = function (k) { this.attr({ opacity: .1, visibility: "inherit" }).animate({ opacity: w(this.newOpacity, 1) }, k || { duration: 250 }) }; G.prototype.addSeriesAsDrilldown = function (k, p) { this.addSingleSeriesAsDrilldown(k, p); this.applyDrilldown() }; G.prototype.addSingleSeriesAsDrilldown = function (k, p) {
        var q = k.series, r = q.xAxis, w = q.yAxis, x; x = k.color || q.color; var A, C = [], G = [], I, K; this.drilldownLevels || (this.drilldownLevels = []);
        I = q.options._levelNumber || 0; (K = this.drilldownLevels[this.drilldownLevels.length - 1]) && K.levelNumber !== I && (K = void 0); p.color || (p.color = x); p._ddSeriesId = S++; A = Da(k, q.points); E(q.chart.series, function (k) { k.xAxis !== r || k.isDrilling || (k.options._ddSeriesId = k.options._ddSeriesId || S++, k.options._colorIndex = k.userOptions._colorIndex, k.options._levelNumber = k.options._levelNumber || I, K ? (C = K.levelSeries, G = K.levelSeriesOptions) : (C.push(k), G.push(k.options))) }); x = {
            levelNumber: I, seriesOptions: q.options, levelSeriesOptions: G,
            levelSeries: C, shapeArgs: k.shapeArgs, bBox: k.graphic ? k.graphic.getBBox() : {}, color: x, lowerSeriesOptions: p, pointOptions: q.options.data[A], pointIndex: A, oldExtremes: { xMin: r && r.userMin, xMax: r && r.userMax, yMin: w && w.userMin, yMax: w && w.userMax }
        }; this.drilldownLevels.push(x); x = x.lowerSeries = this.addSeries(p, !1); x.options._levelNumber = I + 1; r && (r.oldPos = r.pos, r.userMin = r.userMax = null, w.userMin = w.userMax = null); q.type === x.type && (x.animate = x.animateDrilldown || V, x.options.animation = !0)
    }; G.prototype.applyDrilldown = function () {
        var k =
        this.drilldownLevels, p; k && 0 < k.length && (p = k[k.length - 1].levelNumber, E(this.drilldownLevels, function (k) { k.levelNumber === p && E(k.levelSeries, function (k) { k.options && k.options._levelNumber === p && k.remove(!1) }) })); this.redraw(); this.showDrillUpButton()
    }; G.prototype.getDrilldownBackText = function () { var k = this.drilldownLevels; if (k && 0 < k.length) return k = k[k.length - 1], k.series = k.seriesOptions, fa(this.options.lang.drillUpText, k) }; G.prototype.showDrillUpButton = function () {
        var k = this, p = this.getDrilldownBackText(),
        q = k.options.drilldown.drillUpButton, r, w; this.drillUpButton ? this.drillUpButton.attr({ text: p }).align() : (w = (r = q.theme) && r.states, this.drillUpButton = this.renderer.button(p, null, null, function () { k.drillUp() }, r, w && w.hover, w && w.select).attr({ align: q.position.align, zIndex: 9 }).add().align(q.position, !1, q.relativeTo || "plotBox"))
    }; G.prototype.drillUp = function () {
        for (var k = this, p = k.drilldownLevels, q = p[p.length - 1].levelNumber, r = p.length, w = k.series, x, A, C, G, I = function (p) {
        var q; E(w, function (k) {
        k.options._ddSeriesId ===
        p._ddSeriesId && (q = k)
        }); q = q || k.addSeries(p, !1); q.type === C.type && q.animateDrillupTo && (q.animate = q.animateDrillupTo); p === A.seriesOptions && (G = q)
        }; r--;) if (A = p[r], A.levelNumber === q) {
            p.pop(); C = A.lowerSeries; if (!C.chart) for (x = w.length; x--;) if (w[x].options.id === A.lowerSeriesOptions.id && w[x].options._levelNumber === q + 1) { C = w[x]; break } C.xData = []; E(A.levelSeriesOptions, I); R(k, "drillup", { seriesOptions: A.seriesOptions }); G.type === C.type && (G.drilldownLevel = A, G.options.animation = k.options.drilldown.animation, C.animateDrillupFrom &&
            C.chart && C.animateDrillupFrom(A)); G.options._levelNumber = q; C.remove(!1); G.xAxis && (x = A.oldExtremes, G.xAxis.setExtremes(x.xMin, x.xMax, !1), G.yAxis.setExtremes(x.yMin, x.yMax, !1))
        } R(k, "drillupall"); this.redraw(); 0 === this.drilldownLevels.length ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({ text: this.getDrilldownBackText() }).align(); this.ddDupes.length = []
    }; I.prototype.supportsDrilldown = !0; I.prototype.animateDrillupTo = function (k) {
        if (!k) {
            var p = this, q = p.drilldownLevel; E(this.points,
            function (k) { k.graphic && k.graphic.hide(); k.dataLabel && k.dataLabel.hide(); k.connector && k.connector.hide() }); setTimeout(function () { p.points && E(p.points, function (k, p) { var w = p === (q && q.pointIndex) ? "show" : "fadeIn", x = "show" === w ? !0 : void 0; if (k.graphic) k.graphic[w](x); if (k.dataLabel) k.dataLabel[w](x); if (k.connector) k.connector[w](x) }) }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0)); this.animate = V
        }
    }; I.prototype.animateDrilldown = function (k) {
        var p = this, q = this.chart.drilldownLevels, r, x = this.chart.options.drilldown.animation,
        A = this.xAxis; k || (E(q, function (k) { p.options._ddSeriesId === k.lowerSeriesOptions._ddSeriesId && (r = k.shapeArgs, r.fill = k.color) }), r.x += w(A.oldPos, A.pos) - A.pos, E(this.points, function (k) { k.graphic && k.graphic.attr(r).animate(Y(k.shapeArgs, { fill: k.color || p.color }), x); k.dataLabel && k.dataLabel.fadeIn(x) }), this.animate = null)
    }; I.prototype.animateDrillupFrom = function (k) {
        var p = this.chart.options.drilldown.animation, z = this.group, r = this; E(r.trackerGroups, function (k) { if (r[k]) r[k].on("mouseover") }); delete this.group;
        E(this.points, function (r) { var w = r.graphic, x = function () { w.destroy(); z && (z = z.destroy()) }; w && (delete r.graphic, p ? w.animate(Y(k.shapeArgs, { fill: k.color }), q.merge(p, { complete: x })) : (w.attr(k.shapeArgs), x())) })
    }; K && Y(K.prototype, {
        supportsDrilldown: !0, animateDrillupTo: I.prototype.animateDrillupTo, animateDrillupFrom: I.prototype.animateDrillupFrom, animateDrilldown: function (k) {
            var p = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1], z = this.chart.options.drilldown.animation, r = p.shapeArgs, w = r.start,
            x = (r.end - w) / this.points.length; k || (E(this.points, function (k, A) { k.graphic.attr(q.merge(r, { start: w + A * x, end: w + (A + 1) * x, fill: p.color }))[z ? "animate" : "attr"](Y(k.shapeArgs, { fill: k.color }), z) }), this.animate = null)
        }
    }); q.Point.prototype.doDrilldown = function (k, p, q) {
        var r = this.series.chart, w = r.options.drilldown, x = (w.series || []).length, A; r.ddDupes || (r.ddDupes = []); for (; x-- && !A;) w.series[x].id === this.drilldown && -1 === Da(this.drilldown, r.ddDupes) && (A = w.series[x], r.ddDupes.push(this.drilldown)); R(r, "drilldown", {
            point: this,
            seriesOptions: A, category: p, originalEvent: q, points: void 0 !== p && this.series.xAxis.ddPoints[p].slice(0)
        }, function (p) { var q = p.point.series && p.point.series.chart, r = p.seriesOptions; q && r && (k ? q.addSingleSeriesAsDrilldown(p.point, r) : q.addSeriesAsDrilldown(p.point, r)) })
    }; q.Axis.prototype.drilldownCategory = function (k, p) { var q, r, w = this.ddPoints[k]; for (q in w) (r = w[q]) && r.series && r.series.visible && r.doDrilldown && r.doDrilldown(!0, k, p); this.chart.applyDrilldown() }; q.Axis.prototype.getDDPoints = function (k, p) {
        var q =
        this.ddPoints; q || (this.ddPoints = q = {}); q[k] || (q[k] = []); q[k].levelNumber !== p && (q[k].length = 0); return q[k]
    }; ya.prototype.drillable = function () { var k = this.pos, p = this.label, w = this.axis, r = w.ddPoints && w.ddPoints[k]; p && r && r.length ? (p.basicStyles || (p.basicStyles = q.merge(p.styles)), p.addClass("highcharts-drilldown-axis-label").css(w.chart.options.drilldown.activeAxisLabelStyle).on("click", function (p) { w.drilldownCategory(k, p) })) : p && p.basicStyles && (p.styles = {}, p.css(p.basicStyles), p.on("click", null)) }; x(ya.prototype,
    "addLabel", function (k) { k.call(this); this.drillable() }); x(q.Point.prototype, "init", function (k, p, w, r) { var x = k.call(this, p, w, r); k = (w = p.xAxis) && w.ticks[r]; w = w && w.getDDPoints(r, p.options._levelNumber); x.drilldown && (q.addEvent(x, "click", function (k) { p.xAxis && !1 === p.chart.options.drilldown.allowPointDrilldown ? p.xAxis.drilldownCategory(r, k) : x.doDrilldown(void 0, void 0, k) }), w && (w.push(x), w.levelNumber = p.options._levelNumber)); k && k.drillable(); return x }); x(q.Series.prototype, "drawDataLabels", function (k) {
        var p =
        this, q = p.chart.options.drilldown.activeDataLabelStyle, r = p.chart.renderer; k.call(p); E(p.points, function (k) { var w = {}; k.drilldown && k.dataLabel && ("contrast" === q.color && (w.color = r.getContrast(k.color || p.color)), k.dataLabel.attr({ "class": "highcharts-drilldown-data-label" }).css(W(q, w))) })
    }); var ca, A = function (k) { k.call(this); E(this.points, function (k) { k.drilldown && k.graphic && k.graphic.attr({ "class": "highcharts-drilldown-point" }).css({ cursor: "pointer" }) }) }; for (ca in O) O[ca].prototype.supportsDrilldown && x(O[ca].prototype,
    "drawTracker", A)
});