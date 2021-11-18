/**
 * Swiper 7.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 27, 2021
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
    "use strict";
    function e1(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function t1(s = {
    }, a = {
    }) {
        Object.keys(a).forEach((i)=>{
            void 0 === s[i] ? s[i] = a[i] : e1(a[i]) && e1(s[i]) && Object.keys(a[i]).length > 0 && t1(s[i], a[i]);
        });
    }
    const s1 = {
        body: {
        },
        addEventListener () {
        },
        removeEventListener () {
        },
        activeElement: {
            blur () {
            },
            nodeName: ""
        },
        querySelector: ()=>null
        ,
        querySelectorAll: ()=>[]
        ,
        getElementById: ()=>null
        ,
        createEvent: ()=>({
                initEvent () {
                }
            })
        ,
        createElement: ()=>({
                children: [],
                childNodes: [],
                style: {
                },
                setAttribute () {
                },
                getElementsByTagName: ()=>[]
            })
        ,
        createElementNS: ()=>({
            })
        ,
        importNode: ()=>null
        ,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a1() {
        const e = "undefined" != typeof document ? document : {
        };
        return t1(e, s1), e;
    }
    const i1 = {
        document: s1,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState () {
            },
            pushState () {
            },
            go () {
            },
            back () {
            }
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener () {
        },
        removeEventListener () {
        },
        getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            })
        ,
        Image () {
        },
        Date () {
        },
        screen: {
        },
        setTimeout () {
        },
        clearTimeout () {
        },
        matchMedia: ()=>({
            })
        ,
        requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        ,
        cancelAnimationFrame (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        }
    };
    function r1() {
        const e = "undefined" != typeof window ? window : {
        };
        return t1(e, i1), e;
    }
    class n1 extends Array {
        constructor(e2){
            super(...e2 || []), (function(e3) {
                const t = e3.__proto__;
                Object.defineProperty(e3, "__proto__", {
                    get: ()=>t
                    ,
                    set (e) {
                        t.__proto__ = e;
                    }
                });
            })(this);
        }
    }
    function l1(e4 = []) {
        const t = [];
        return e4.forEach((e)=>{
            Array.isArray(e) ? t.push(...l1(e)) : t.push(e);
        }), t;
    }
    function o1(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function d1(e7, t2) {
        const s3 = r1(), i = a1();
        let l = [];
        if (!t2 && e7 instanceof n1) return e7;
        if (!e7) return new n1(l);
        if ("string" == typeof e7) {
            const s2 = e7.trim();
            if (s2.indexOf("<") >= 0 && s2.indexOf(">") >= 0) {
                let e = "div";
                0 === s2.indexOf("<li") && (e = "ul"), 0 === s2.indexOf("<tr") && (e = "tbody"), 0 !== s2.indexOf("<td") && 0 !== s2.indexOf("<th") || (e = "tr"), 0 === s2.indexOf("<tbody") && (e = "table"), 0 === s2.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s2;
                for(let e5 = 0; e5 < t.childNodes.length; e5 += 1)l.push(t.childNodes[e5]);
            } else l = (function(e, t) {
                if ("string" != typeof e) return [
                    e
                ];
                const s = [], a = t.querySelectorAll(e);
                for(let e6 = 0; e6 < a.length; e6 += 1)s.push(a[e6]);
                return s;
            })(e7.trim(), t2 || i);
        } else if (e7.nodeType || e7 === s3 || e7 === i) l.push(e7);
        else if (Array.isArray(e7)) {
            if (e7 instanceof n1) return e7;
            l = e7;
        }
        return new n1(function(e) {
            const t = [];
            for(let s = 0; s < e.length; s += 1)-1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
        }(l));
    }
    d1.fn = n1.prototype;
    const c1 = {
        addClass: function(...e8) {
            const t = l1(e8.map((e)=>e.split(" ")
            ));
            return this.forEach((e)=>{
                e.classList.add(...t);
            }), this;
        },
        removeClass: function(...e9) {
            const t = l1(e9.map((e)=>e.split(" ")
            ));
            return this.forEach((e)=>{
                e.classList.remove(...t);
            }), this;
        },
        hasClass: function(...e10) {
            const t3 = l1(e10.map((e)=>e.split(" ")
            ));
            return o1(this, (e)=>t3.filter((t)=>e.classList.contains(t)
                ).length > 0
            ).length > 0;
        },
        toggleClass: function(...e11) {
            const t4 = l1(e11.map((e)=>e.split(" ")
            ));
            this.forEach((e)=>{
                t4.forEach((t)=>{
                    e.classList.toggle(t);
                });
            });
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for(let s = 0; s < this.length; s += 1)if (2 === arguments.length) this[s].setAttribute(e, t);
            else for(const t5 in e)this[s][t5] = e[t5], this[s].setAttribute(t5, e[t5]);
            return this;
        },
        removeAttr: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].removeAttribute(e);
            return this;
        },
        transform: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].style.transform = e;
            return this;
        },
        transition: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this;
        },
        on: function(...e13) {
            let [t6, s, a, i2] = e13;
            function r(e) {
                const t = e.target;
                if (!t) return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), d1(t).is(s)) a.apply(t, i);
                else {
                    const e = d1(t).parents();
                    for(let t7 = 0; t7 < e.length; t7 += 1)d1(e[t7]).is(s) && a.apply(e[t7], i);
                }
            }
            function n(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
            }
            "function" == typeof e13[1] && ([t6, a, i2] = e13, s = void 0), i2 || (i2 = !1);
            const l = t6.split(" ");
            let o;
            for(let e12 = 0; e12 < this.length; e12 += 1){
                const t = this[e12];
                if (s) for(o = 0; o < l.length; o += 1){
                    const e = l[o];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {
                    }), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: a,
                        proxyListener: r
                    }), t.addEventListener(e, r, i2);
                }
                else for(o = 0; o < l.length; o += 1){
                    const e = l[o];
                    t.dom7Listeners || (t.dom7Listeners = {
                    }), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: a,
                        proxyListener: n
                    }), t.addEventListener(e, n, i2);
                }
            }
            return this;
        },
        off: function(...e) {
            let [t, s, a, i] = e;
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0), i || (i = !1);
            const r = t.split(" ");
            for(let e14 = 0; e14 < r.length; e14 += 1){
                const t = r[e14];
                for(let e = 0; e < this.length; e += 1){
                    const r = this[e];
                    let n;
                    if (!s && r.dom7Listeners ? n = r.dom7Listeners[t] : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]), n && n.length) for(let e = n.length - 1; e >= 0; e -= 1){
                        const s = n[e];
                        a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1)) : a || (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1));
                    }
                }
            }
            return this;
        },
        trigger: function(...e) {
            const t8 = r1(), s = e[0].split(" "), a = e[1];
            for(let i = 0; i < s.length; i += 1){
                const r = s[i];
                for(let s4 = 0; s4 < this.length; s4 += 1){
                    const i = this[s4];
                    if (t8.CustomEvent) {
                        const s = new t8.CustomEvent(r, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter((e, t)=>t > 0
                        ), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData;
                    }
                }
            }
            return this;
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s));
            }), this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            const e = r1();
            return this[0] ? e.getComputedStyle(this[0], null) : {
            };
        },
        offset: function() {
            if (this.length > 0) {
                const e = r1(), t = a1(), s = this[0], i = s.getBoundingClientRect(), n = t.body, l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                };
            }
            return null;
        },
        css: function(e, t) {
            const s = r1();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for(a = 0; a < this.length; a += 1)for(const t in e)this[a].style[t] = e[t];
                    return this;
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for(a = 0; a < this.length; a += 1)this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            return e ? (this.forEach((t, s)=>{
                e.apply(t, [
                    t,
                    s
                ]);
            }), this) : this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for(let t = 0; t < this.length; t += 1)this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for(let t = 0; t < this.length; t += 1)this[t].textContent = e;
            return this;
        },
        is: function(e) {
            const t = r1(), s = a1(), i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for(l = d1(e), o = 0; o < l.length; o += 1)if (l[o] === i) return !0;
                return !1;
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n1) {
                for(l = e.nodeType ? [
                    e
                ] : e, o = 0; o < l.length; o += 1)if (l[o] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for(e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d1([]);
            if (e < 0) {
                const s = t + e;
                return d1(s < 0 ? [] : [
                    this[s]
                ]);
            }
            return d1([
                this[e]
            ]);
        },
        append: function(...e) {
            let t;
            const s = a1();
            for(let a = 0; a < e.length; a += 1){
                t = e[a];
                for(let e15 = 0; e15 < this.length; e15 += 1)if ("string" == typeof t) {
                    const a = s.createElement("div");
                    for(a.innerHTML = t; a.firstChild;)this[e15].appendChild(a.firstChild);
                } else if (t instanceof n1) for(let s5 = 0; s5 < t.length; s5 += 1)this[e15].appendChild(t[s5]);
                else this[e15].appendChild(t);
            }
            return this;
        },
        prepend: function(e) {
            const t = a1();
            let s, i;
            for(s = 0; s < this.length; s += 1)if ("string" == typeof e) {
                const a = t.createElement("div");
                for(a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof n1) for(i = 0; i < e.length; i += 1)this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d1(this[0].nextElementSibling).is(e) ? d1([
                this[0].nextElementSibling
            ]) : d1([]) : this[0].nextElementSibling ? d1([
                this[0].nextElementSibling
            ]) : d1([]) : d1([]);
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d1([]);
            for(; s.nextElementSibling;){
                const a = s.nextElementSibling;
                e ? d1(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d1(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d1(t.previousElementSibling).is(e) ? d1([
                    t.previousElementSibling
                ]) : d1([]) : t.previousElementSibling ? d1([
                    t.previousElementSibling
                ]) : d1([]);
            }
            return d1([]);
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d1([]);
            for(; s.previousElementSibling;){
                const a = s.previousElementSibling;
                e ? d1(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d1(t);
        },
        parent: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1)null !== this[s].parentNode && (e ? d1(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d1(t);
        },
        parents: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                let a = this[s].parentNode;
                for(; a;)e ? d1(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
            }
            return d1(t);
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d1([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                const a = this[s].querySelectorAll(e);
                for(let e16 = 0; e16 < a.length; e16 += 1)t.push(a[e16]);
            }
            return d1(t);
        },
        children: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                const a = this[s].children;
                for(let s = 0; s < a.length; s += 1)e && !d1(a[s]).is(e) || t.push(a[s]);
            }
            return d1(t);
        },
        filter: function(e) {
            return d1(o1(this, e));
        },
        remove: function() {
            for(let e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        }
    };
    function p1(e, t = 0) {
        return setTimeout(e, t);
    }
    function u1() {
        return Date.now();
    }
    function h1(e17, t9 = "x") {
        const s6 = r1();
        let a, i, n;
        const l = function(e) {
            const t = r1();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
        }(e17);
        return s6.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e)=>e.replace(",", ".")
        ).join(", ")), n = new s6.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t9 && (i = s6.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t9 && (i = s6.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }
    function m1(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function f1(...e) {
        const t = Object(e[0]), s = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        for(let i = 1; i < e.length; i += 1){
            const r = e[i];
            if (null != r && (a = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e18 = Object.keys(Object(r)).filter((e)=>s.indexOf(e) < 0
                );
                for(let s7 = 0, a = e18.length; s7 < a; s7 += 1){
                    const a = e18[s7], i = Object.getOwnPropertyDescriptor(r, a);
                    void 0 !== i && i.enumerable && (m1(t[a]) && m1(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f1(t[a], r[a]) : !m1(t[a]) && m1(r[a]) ? (t[a] = {
                    }, r[a].__swiper__ ? t[a] = r[a] : f1(t[a], r[a])) : t[a] = r[a]);
                }
            }
        }
        var a;
        return t;
    }
    function g1(e, t, s) {
        e.style.setProperty(t, s);
    }
    function v1({ swiper: e19 , targetPosition: t10 , side: s  }) {
        const a = r1(), i = -e19.translate;
        let n, l = null;
        const o = e19.params.speed;
        e19.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e19.cssModeFrameID);
        const d2 = t10 > i ? "next" : "prev", c = (e, t)=>"next" === d2 && e >= t || "prev" === d2 && e <= t
        , p = ()=>{
            n = (new Date).getTime(), null === l && (l = n);
            const r = Math.max(Math.min((n - l) / o, 1), 0), d = 0.5 - Math.cos(r * Math.PI) / 2;
            let u = i + d * (t10 - i);
            if (c(u, t10) && (u = t10), e19.wrapperEl.scrollTo({
                [s]: u
            }), c(u, t10)) return e19.wrapperEl.style.overflow = "hidden", e19.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
                e19.wrapperEl.style.overflow = "", e19.wrapperEl.scrollTo({
                    [s]: u
                });
            }), void a.cancelAnimationFrame(e19.cssModeFrameID);
            e19.cssModeFrameID = a.requestAnimationFrame(p);
        };
        p();
    }
    let w1, b1, x1;
    function y1() {
        return w1 || (w1 = (function() {
            const e = r1(), t11 = a1();
            return {
                smoothScroll: t11.documentElement && "scrollBehavior" in t11.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t11 instanceof e.DocumentTouch),
                passiveListener: (function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({
                        }, "passive", {
                            get () {
                                t = !0;
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s);
                    } catch (e) {
                    }
                    return t;
                })(),
                gestures: "ongesturestart" in e
            };
        })()), w1;
    }
    function E1(e20 = {
    }) {
        return b1 || (b1 = (function({ userAgent: e  } = {
        }) {
            const t = y1(), s = r1(), a = s.navigator.platform, i = e || s.navigator.userAgent, n = {
                ios: !1,
                android: !1
            }, l = s.screen.width, o = s.screen.height, d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const p = i.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === a;
            let m = "MacIntel" === a;
            return !c && m && t.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(`${l}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [
                0,
                1,
                "13_0_0"
            ]), m = !1), d && !h && (n.os = "android", n.android = !0), (c || u || p) && (n.os = "ios", n.ios = !0), n;
        })(e20)), b1;
    }
    function T1() {
        return x1 || (x1 = (function() {
            const e = r1();
            return {
                isSafari: (function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            };
        })()), x1;
    }
    Object.keys(c1).forEach((e)=>{
        Object.defineProperty(d1.fn, e, {
            value: c1[e],
            writable: !0
        });
    });
    var C1 = {
        on (e, t, s) {
            const a = this;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e)=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
            }), a;
        },
        once (e, t, s8) {
            const a = this;
            if ("function" != typeof t) return a;
            function i(...s) {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s);
            }
            return i.__emitterProxy = t, a.on(e, i, s8);
        },
        onAny (e, t) {
            const s = this;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
        },
        offAny (e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off (e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e)=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
                });
            }), s) : s;
        },
        emit (...e21) {
            const t12 = this;
            if (!t12.eventsListeners) return t12;
            let s, a, i;
            "string" == typeof e21[0] || Array.isArray(e21[0]) ? (s = e21[0], a = e21.slice(1, e21.length), i = t12) : (s = e21[0].events, a = e21[0].data, i = e21[0].context || t12), a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e22)=>{
                t12.eventsAnyListeners && t12.eventsAnyListeners.length && t12.eventsAnyListeners.forEach((t)=>{
                    t.apply(i, [
                        e22,
                        ...a
                    ]);
                }), t12.eventsListeners && t12.eventsListeners[e22] && t12.eventsListeners[e22].forEach((e)=>{
                    e.apply(i, a);
                });
            }), t12;
        }
    };
    function $1({ swiper: e , runCallbacks: t , direction: s , step: a  }) {
        const { activeIndex: i , previousIndex: r  } = e;
        let n = s;
        if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${a}`), t && i !== r) {
            if ("reset" === n) return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`), "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`);
        }
    }
    function S1(e23) {
        const t13 = this, s9 = a1(), i = r1(), n = t13.touchEventsData, { params: l , touches: o , enabled: c  } = t13;
        if (!c) return;
        if (t13.animating && l.preventInteractionOnTransition) return;
        !t13.animating && l.cssMode && l.loop && t13.loopFix();
        let p = e23;
        p.originalEvent && (p = p.originalEvent);
        let h = d1(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t13.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e23.path && e23.path[0] && (h = d1(e23.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? (function(e, t14 = this) {
            return (function t(s) {
                return s && s !== a1() && s !== r1() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
            })(t14);
        })(m, p.target) : h.closest(m)[0])) return void (t13.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX, v = o.currentY, w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection, b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e23.preventDefault();
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = g, o.startY = v, n.touchStartTime = u1(), t13.allowClick = !0, t13.updateSize(), t13.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1), s9.activeElement && d1(s9.activeElement).is(n.focusableElements) && s9.activeElement !== h[0] && s9.activeElement.blur();
            const a = e && t13.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
        }
        t13.emit("touchStart", p);
    }
    function M1(e) {
        const t = a1(), s = this, i = s.touchEventsData, { params: r , touches: n , rtlTranslate: l , enabled: o  } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]), h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return s.allowClick = !1, void (i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u1()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        }
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d1(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }
    function P1(e) {
        const t = this, s = t.touchEventsData, { params: a , touches: i , rtlTranslate: r , slidesGrid: n , enabled: l  } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u1(), c = d - s.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = u1(), p1(()=>{
            t.destroyed || (t.allowClick = !0);
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0, f = t.slidesSizesGrid[0];
        for(let e24 = 0; e24 < n.length; e24 += e24 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup){
            const t = e24 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e24 + t] ? h >= n[e24] && h < n[e24 + t] && (m = e24, f = n[e24 + t] - n[e24]) : h >= n[e24] && (m = e24, f = n[n.length - 1] - n[n.length - 2]);
        }
        const g = (h - n[m]) / f, v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m));
        }
    }
    function k1() {
        const e = this, { params: t , el: s  } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: a , allowSlidePrev: i , snapGrid: r  } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function z1(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function O1() {
        const e = this, { wrapperEl: t , rtlTranslate: s , enabled: a  } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
    let I1 = !1;
    function L() {
    }
    const A = (e, t)=>{
        const s = a1(), { params: i , touchEvents: r , el: n , wrapperEl: l , device: o , support: d  } = e, c = !!i.nested, p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k1, !0) : e[u]("observerUpdate", k1, !0);
    };
    const D = (e, t)=>e.grid && t.grid && t.grid.rows > 1
    ;
    var G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function N(e, t) {
        return function(s = {
        }) {
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? ([
                "navigation",
                "pagination",
                "scrollbar"
            ].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), f1(t, s)) : f1(t, s)) : f1(t, s);
        };
    }
    const B = {
        eventsEmitter: C1,
        update: {
            updateSize: function() {
                const e = this;
                let t, s;
                const a = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }));
            },
            updateSlides: function() {
                const e25 = this;
                function t15(t) {
                    return e25.isHorizontal() ? t : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[t];
                }
                function s10(e, s) {
                    return parseFloat(e.getPropertyValue(t15(s)) || 0);
                }
                const a = e25.params, { $wrapperEl: i , size: r , rtlTranslate: n , wrongRTL: l  } = e25, o = e25.virtual && a.virtual.enabled, d = o ? e25.virtual.slides.length : e25.slides.length, c = i.children(`.${e25.params.slideClass}`), p = o ? e25.virtual.slides.length : c.length;
                let u = [];
                const h = [], m = [];
                let f = a.slidesOffsetBefore;
                "function" == typeof f && (f = a.slidesOffsetBefore.call(e25));
                let v = a.slidesOffsetAfter;
                "function" == typeof v && (v = a.slidesOffsetAfter.call(e25));
                const w = e25.snapGrid.length, b = e25.slidesGrid.length;
                let x = a.spaceBetween, y = -f, E = 0, T = 0;
                if (void 0 === r) return;
                "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e25.virtualSize = -x, n ? c.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : c.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), a.centeredSlides && a.cssMode && (g1(e25.wrapperEl, "--swiper-centered-offset-before", ""), g1(e25.wrapperEl, "--swiper-centered-offset-after", ""));
                const C = a.grid && a.grid.rows > 1 && e25.grid;
                let $;
                C && e25.grid.initSlides(p);
                const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e)=>void 0 !== a.breakpoints[e].slidesPerView
                ).length > 0;
                for(let i3 = 0; i3 < p; i3 += 1){
                    $ = 0;
                    const n = c.eq(i3);
                    if (C && e25.grid.updateSlide(i3, n, p, t15), "none" !== n.css("display")) {
                        if ("auto" === a.slidesPerView) {
                            S && (c[i3].style[t15("width")] = "");
                            const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                            if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e25.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                            else {
                                const e = s10(r, "width"), t = s10(r, "padding-left"), a = s10(r, "padding-right"), i = s10(r, "margin-left"), l = s10(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                                if (o && "border-box" === o) $ = e + i + l;
                                else {
                                    const { clientWidth: s , offsetWidth: r  } = n[0];
                                    $ = e + t + a + i + l + (r - s);
                                }
                            }
                            l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
                        } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i3] && (c[i3].style[t15("width")] = `${$}px`);
                        c[i3] && (c[i3].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i3 && (y = y - r / 2 - x), 0 === i3 && (y = y - r / 2 - x), Math.abs(y) < 0.001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e25.params.slidesPerGroupSkip, T)) % e25.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e25.virtualSize += $ + x, E = $, T += 1;
                    }
                }
                if (e25.virtualSize = Math.max(e25.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                    width: `${e25.virtualSize + a.spaceBetween}px`
                }), a.setWrapperSize && i.css({
                    [t15("width")]: `${e25.virtualSize + a.spaceBetween}px`
                }), C && e25.grid.updateWrapperSize($, u, t15), !a.centeredSlides) {
                    const t = [];
                    for(let s = 0; s < u.length; s += 1){
                        let i = u[s];
                        a.roundLengths && (i = Math.floor(i)), u[s] <= e25.virtualSize - r && t.push(i);
                    }
                    u = t, Math.floor(e25.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e25.virtualSize - r);
                }
                if (0 === u.length && (u = [
                    0
                ]), 0 !== a.spaceBetween) {
                    const s = e25.isHorizontal() && n ? "marginLeft" : t15("marginRight");
                    c.filter((e, t)=>!a.cssMode || t !== c.length - 1
                    ).css({
                        [s]: `${x}px`
                    });
                }
                if (a.centeredSlides && a.centeredSlidesBounds) {
                    let e26 = 0;
                    m.forEach((t)=>{
                        e26 += t + (a.spaceBetween ? a.spaceBetween : 0);
                    }), e26 -= a.spaceBetween;
                    const t16 = e26 - r;
                    u = u.map((e)=>e < 0 ? -f : e > t16 ? t16 + v : e
                    );
                }
                if (a.centerInsufficientSlides) {
                    let e27 = 0;
                    if (m.forEach((t)=>{
                        e27 += t + (a.spaceBetween ? a.spaceBetween : 0);
                    }), e27 -= a.spaceBetween, e27 < r) {
                        const t = (r - e27) / 2;
                        u.forEach((e, s)=>{
                            u[s] = e - t;
                        }), h.forEach((e, s)=>{
                            h[s] = e + t;
                        });
                    }
                }
                if (Object.assign(e25, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                    g1(e25.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g1(e25.wrapperEl, "--swiper-centered-offset-after", e25.size / 2 - m[m.length - 1] / 2 + "px");
                    const t = -e25.snapGrid[0], s = -e25.slidesGrid[0];
                    e25.snapGrid = e25.snapGrid.map((e)=>e + t
                    ), e25.slidesGrid = e25.slidesGrid.map((e)=>e + s
                    );
                }
                p !== d && e25.emit("slidesLengthChange"), u.length !== w && (e25.params.watchOverflow && e25.checkOverflow(), e25.emit("snapGridLengthChange")), h.length !== b && e25.emit("slidesGridLengthChange"), a.watchSlidesProgress && e25.updateSlidesOffset();
            },
            updateAutoHeight: function(e28) {
                const t17 = this, s = [], a = t17.virtual && t17.params.virtual.enabled;
                let i, r = 0;
                "number" == typeof e28 ? t17.setTransition(e28) : !0 === e28 && t17.setTransition(t17.params.speed);
                const n = (e)=>a ? t17.slides.filter((t)=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                    )[0] : t17.slides.eq(e)[0]
                ;
                if ("auto" !== t17.params.slidesPerView && t17.params.slidesPerView > 1) {
                    if (t17.params.centeredSlides) t17.visibleSlides.each((e)=>{
                        s.push(e);
                    });
                    else for(i = 0; i < Math.ceil(t17.params.slidesPerView); i += 1){
                        const e = t17.activeIndex + i;
                        if (e > t17.slides.length && !a) break;
                        s.push(n(e));
                    }
                } else s.push(n(t17.activeIndex));
                for(i = 0; i < s.length; i += 1)if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r;
                }
                r && t17.$wrapperEl.css("height", `${r}px`);
            },
            updateSlidesOffset: function() {
                const e = this, t = e.slides;
                for(let s = 0; s < t.length; s += 1)t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
            },
            updateSlidesProgress: function(e = this && this.translate || 0) {
                const t = this, s = t.params, { slides: a , rtlTranslate: i , snapGrid: r  } = t;
                if (0 === a.length) return;
                void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for(let e29 = 0; e29 < a.length; e29 += 1){
                    const l = a[e29];
                    let o = l.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                    const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), p = -(n - o), u = p + t.slidesSizesGrid[e29];
                    (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e29), a.eq(e29).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
                }
                t.visibleSlides = d1(t.visibleSlides);
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0;
                }
                const s = t.params, a = t.maxTranslate() - t.minTranslate();
                let { progress: i , isBeginning: r , isEnd: n  } = t;
                const l = r, o = n;
                0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                    progress: i,
                    isBeginning: r,
                    isEnd: n
                }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
            },
            updateSlidesClasses: function() {
                const e = this, { slides: t , params: s , $wrapperEl: a , activeIndex: i , realIndex: r  } = e, n = e.virtual && s.virtual.enabled;
                let l;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
            },
            updateActiveIndex: function(e) {
                const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { slidesGrid: a , snapGrid: i , params: r , activeIndex: n , realIndex: l , snapIndex: o  } = t;
                let d, c = e;
                if (void 0 === c) {
                    for(let e = 0; e < a.length; e += 1)void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                    r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                }
                if (i.indexOf(s) >= 0) d = i.indexOf(s);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, c);
                    d = e + Math.floor((c - e) / r.slidesPerGroup);
                }
                if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                Object.assign(t, {
                    snapIndex: d,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: c
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
            },
            updateClickedSlide: function(e) {
                const t = this, s = t.params, a = d1(e.target).closest(`.${s.slideClass}`)[0];
                let i, r = !1;
                if (a) {
                    for(let e30 = 0; e30 < t.slides.length; e30 += 1)if (t.slides[e30] === a) {
                        r = !0, i = e30;
                        break;
                    }
                }
                if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d1(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
            }
        },
        translate: {
            getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                const { params: t , rtlTranslate: s , translate: a , $wrapperEl: i  } = this;
                if (t.virtualTranslate) return s ? -a : a;
                if (t.cssMode) return a;
                let r = h1(i[0], e);
                return s && (r = -r), r || 0;
            },
            setTranslate: function(e, t) {
                const s = this, { rtlTranslate: a , params: i , $wrapperEl: r , wrapperEl: n , progress: l  } = s;
                let o, d = 0, c = 0;
                s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                const p = s.maxTranslate() - s.minTranslate();
                o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
            },
            minTranslate: function() {
                return -this.snapGrid[0];
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function(e31 = 0, t = this.params.speed, s = !0, a = !0, i) {
                const r = this, { params: n , wrapperEl: l  } = r;
                if (r.animating && n.preventInteractionOnTransition) return !1;
                const o = r.minTranslate(), d = r.maxTranslate();
                let c;
                if (c = a && e31 > o ? o : a && e31 < d ? d : e31, r.updateProgress(c), n.cssMode) {
                    const e = r.isHorizontal();
                    if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                    else {
                        if (!r.support.smoothScroll) return v1({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }), !0;
                        l.scrollTo({
                            [e ? "left" : "top"]: -c,
                            behavior: "smooth"
                        });
                    }
                    return !0;
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
            }
        },
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
            },
            transitionStart: function(e = !0, t) {
                const s = this, { params: a  } = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), $1({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }));
            },
            transitionEnd: function(e = !0, t) {
                const s = this, { params: a  } = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), $1({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }));
            }
        },
        slide: {
            slideTo: function(e33 = 0, t = this.params.speed, s = !0, a, i) {
                if ("number" != typeof e33 && "string" != typeof e33) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e33}] given.`);
                if ("string" == typeof e33) {
                    const t = parseInt(e33, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e33}] given.`);
                    e33 = t;
                }
                const r = this;
                let n = e33;
                n < 0 && (n = 0);
                const { params: l , snapGrid: o , slidesGrid: d , previousIndex: c , activeIndex: p , rtlTranslate: u , wrapperEl: h , enabled: m  } = r;
                if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
                const f = Math.min(r.params.slidesPerGroupSkip, n);
                let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                const w = -o[g];
                if (r.updateProgress(w), l.normalizeSlideIndex) for(let e32 = 0; e32 < d.length; e32 += 1){
                    const t = -Math.floor(100 * w), s = Math.floor(100 * d[e32]), a = Math.floor(100 * d[e32 + 1]);
                    void 0 !== d[e32 + 1] ? t >= s && t < a - (a - s) / 2 ? n = e32 : t >= s && t < a && (n = e32 + 1) : t >= s && (n = e32);
                }
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
                }
                let b;
                if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                if (l.cssMode) {
                    const e = r.isHorizontal(), s = u ? w : -w;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(()=>{
                            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
                        });
                    } else {
                        if (!r.support.smoothScroll) return v1({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        h.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        });
                    }
                    return !0;
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.transitionEnd(s, b)) : (r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
            },
            slideToLoop: function(e = 0, t = this.params.speed, s = !0, a) {
                const i = this;
                let r = e;
                return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
            },
            slideNext: function(e = this.params.speed, t = !0, s) {
                const a = this, { animating: i , enabled: r , params: n  } = a;
                if (!r) return a;
                let l = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                if (n.loop) {
                    if (i && n.loopPreventsSlide) return !1;
                    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
                }
                return a.slideTo(a.activeIndex + o, e, t, s);
            },
            slidePrev: function(e34 = this.params.speed, t18 = !0, s11) {
                const a = this, { params: i , animating: r , snapGrid: n , slidesGrid: l , rtlTranslate: o , enabled: d  } = a;
                if (!d) return a;
                if (i.loop) {
                    if (r && i.loopPreventsSlide) return !1;
                    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
                }
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                const p = c(o ? a.translate : -a.translate), u = n.map((e)=>c(e)
                );
                let h = n[u.indexOf(p) - 1];
                if (void 0 === h && i.cssMode) {
                    let e;
                    n.forEach((t, s)=>{
                        p >= t && (e = s);
                    }), void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
                }
                let m = 0;
                return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), a.slideTo(m, e34, t18, s11);
            },
            slideReset: function(e = this.params.speed, t = !0, s) {
                return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function(e = this.params.speed, t = !0, s, a = 0.5) {
                const i = this;
                let r = i.activeIndex;
                const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
                if (o >= i.snapGrid[l]) {
                    const e = i.snapGrid[l];
                    o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
                } else {
                    const e = i.snapGrid[l - 1];
                    o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
                }
                return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
            },
            slideToClickedSlide: function() {
                const e = this, { params: t , $wrapperEl: s  } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    i = parseInt(d1(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p1(()=>{
                        e.slideTo(r);
                    })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p1(()=>{
                        e.slideTo(r);
                    })) : e.slideTo(r);
                } else e.slideTo(r);
            }
        },
        loop: {
            loopCreate: function() {
                const e = this, t19 = a1(), { params: s12 , $wrapperEl: i  } = e, r = d1(i.children()[0].parentNode);
                r.children(`.${s12.slideClass}.${s12.slideDuplicateClass}`).remove();
                let n = r.children(`.${s12.slideClass}`);
                if (s12.loopFillGroupWithBlank) {
                    const e = s12.slidesPerGroup - n.length % s12.slidesPerGroup;
                    if (e !== s12.slidesPerGroup) {
                        for(let a = 0; a < e; a += 1){
                            const e = d1(t19.createElement("div")).addClass(`${s12.slideClass} ${s12.slideBlankClass}`);
                            r.append(e);
                        }
                        n = r.children(`.${s12.slideClass}`);
                    }
                }
                "auto" !== s12.slidesPerView || s12.loopedSlides || (s12.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s12.loopedSlides || s12.slidesPerView, 10)), e.loopedSlides += s12.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                const l = [], o = [];
                n.each((t, s)=>{
                    const a = d1(t);
                    s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
                });
                for(let e35 = 0; e35 < o.length; e35 += 1)r.append(d1(o[e35].cloneNode(!0)).addClass(s12.slideDuplicateClass));
                for(let e36 = l.length - 1; e36 >= 0; e36 -= 1)r.prepend(d1(l[e36].cloneNode(!0)).addClass(s12.slideDuplicateClass));
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const { activeIndex: t , slides: s , loopedSlides: a , allowSlidePrev: i , allowSlideNext: r , snapGrid: n , rtlTranslate: l  } = e;
                let o;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                const d = -n[t] - e.getTranslate();
                if (t < a) {
                    o = s.length - 3 * a + t, o += a;
                    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                } else if (t >= s.length - a) {
                    o = -s.length + t + a, o += a;
                    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                }
                e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
            },
            loopDestroy: function() {
                const { $wrapperEl: e , params: t , slides: s  } = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
            },
            unsetGrabCursor: function() {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
            }
        },
        events: {
            attachEvents: function() {
                const e = this, t = a1(), { params: s , support: i  } = e;
                e.onTouchStart = S1.bind(e), e.onTouchMove = M1.bind(e), e.onTouchEnd = P1.bind(e), s.cssMode && (e.onScroll = O1.bind(e)), e.onClick = z1.bind(e), i.touch && !I1 && (t.addEventListener("touchstart", L), I1 = !0), A(e, "on");
            },
            detachEvents: function() {
                A(this, "off");
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this, { activeIndex: t , initialized: s , loopedSlides: a = 0 , params: i , $el: r  } = e, n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : void 0) || e.originalParams, d = D(e, i), c = D(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                const u = o.direction && o.direction !== i.direction, h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), f1(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
            },
            getBreakpoint: function(e38, t20 = "window", s) {
                if (!e38 || "container" === t20 && !s) return;
                let a = !1;
                const i = r1(), n = "window" === t20 ? i.innerHeight : s.clientHeight, l = Object.keys(e38).map((e)=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        };
                    }
                    return {
                        value: e,
                        point: e
                    };
                });
                l.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10)
                );
                for(let e37 = 0; e37 < l.length; e37 += 1){
                    const { point: r , value: n  } = l[e37];
                    "window" === t20 ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
                }
                return a || "max";
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this, { isLocked: t , params: s  } = e, { slidesOffsetBefore: a  } = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            }
        },
        classes: {
            addClasses: function() {
                const e39 = this, { classNames: t21 , params: s13 , rtl: a2 , $el: i , device: r , support: n  } = e39, l = function(e40, t) {
                    const s = [];
                    return e40.forEach((e)=>{
                        "object" == typeof e ? Object.keys(e).forEach((a)=>{
                            e[a] && s.push(t + a);
                        }) : "string" == typeof e && s.push(t + e);
                    }), s;
                }([
                    "initialized",
                    s13.direction,
                    {
                        "pointer-events": !n.touch
                    },
                    {
                        "free-mode": e39.params.freeMode && s13.freeMode.enabled
                    },
                    {
                        autoheight: s13.autoHeight
                    },
                    {
                        rtl: a2
                    },
                    {
                        grid: s13.grid && s13.grid.rows > 1
                    },
                    {
                        "grid-column": s13.grid && s13.grid.rows > 1 && "column" === s13.grid.fill
                    },
                    {
                        android: r.android
                    },
                    {
                        ios: r.ios
                    },
                    {
                        "css-mode": s13.cssMode
                    },
                    {
                        centered: s13.cssMode && s13.centeredSlides
                    }
                ], s13.containerModifierClass);
                t21.push(...l), i.addClass([
                    ...t21
                ].join(" ")), e39.emitContainerClasses();
            },
            removeClasses: function() {
                const { $el: e , classNames: t  } = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses();
            }
        },
        images: {
            loadImage: function(e, t, s, a, i, n) {
                const l = r1();
                let o;
                function c() {
                    n && n();
                }
                d1(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for(let s = 0; s < e.imagesToLoad.length; s += 1){
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, X = {
    };
    class H {
        constructor(...e41){
            let t22, s;
            if (1 === e41.length && e41[0].constructor && "Object" === Object.prototype.toString.call(e41[0]).slice(8, -1) ? s = e41[0] : [t22, s] = e41, s || (s = {
            }), s = f1({
            }, s), t22 && !s.el && (s.el = t22), s.el && d1(s.el).length > 1) {
                const e = [];
                return d1(s.el).each((t)=>{
                    const a = f1({
                    }, s, {
                        el: t
                    });
                    e.push(new H(a));
                }), e;
            }
            const a3 = this;
            a3.__swiper__ = !0, a3.support = y1(), a3.device = E1({
                userAgent: s.userAgent
            }), a3.browser = T1(), a3.eventsListeners = {
            }, a3.eventsAnyListeners = [], a3.modules = [
                ...a3.__modules__
            ], s.modules && Array.isArray(s.modules) && a3.modules.push(...s.modules);
            const i = {
            };
            a3.modules.forEach((e)=>{
                e({
                    swiper: a3,
                    extendParams: N(s, i),
                    on: a3.on.bind(a3),
                    once: a3.once.bind(a3),
                    off: a3.off.bind(a3),
                    emit: a3.emit.bind(a3)
                });
            });
            const r = f1({
            }, G, i);
            return a3.params = f1({
            }, r, X, s), a3.originalParams = f1({
            }, a3.params), a3.passedParams = f1({
            }, s), a3.params && a3.params.on && Object.keys(a3.params.on).forEach((e)=>{
                a3.on(e, a3.params.on[e]);
            }), a3.params && a3.params.onAny && a3.onAny(a3.params.onAny), a3.$ = d1, Object.assign(a3, {
                enabled: a3.params.enabled,
                el: t22,
                classNames: [],
                slides: d1(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === a3.params.direction
                ,
                isVertical: ()=>"vertical" === a3.params.direction
                ,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a3.params.allowSlideNext,
                allowSlidePrev: a3.params.allowSlidePrev,
                touchEvents: function() {
                    const e = [
                        "touchstart",
                        "touchmove",
                        "touchend",
                        "touchcancel"
                    ], t = [
                        "pointerdown",
                        "pointermove",
                        "pointerup"
                    ];
                    return a3.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, a3.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, a3.support.touch || !a3.params.simulateTouch ? a3.touchEventsTouch : a3.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a3.params.focusableElements,
                    lastClickTime: u1(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a3.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), a3.emit("_swiper"), a3.params.init && a3.init(), a3;
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e43, t24) {
            const s = this;
            e43 = Math.min(Math.max(e43, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e43 + a;
            s.translateTo(i, void 0 === t24 ? 0 : t24), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t23 = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
            );
            e.emit("_containerClasses", t23.join(" "));
        }
        getSlideClasses(e42) {
            const t = this;
            return e42.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            ).join(" ");
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s)=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a);
            }), e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e48 = "current", t27 = !1) {
            const { params: s , slides: a , slidesGrid: i , slidesSizesGrid: r , size: n , activeIndex: l  } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for(let s = l + 1; s < a.length; s += 1)a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for(let s14 = l - 1; s14 >= 0; s14 -= 1)a[s14] && !e && (t += a[s14].swiperSlideSize, o += 1, t > n && (e = !0));
            } else if ("current" === e48) for(let e45 = l + 1; e45 < a.length; e45 += 1)(t27 ? i[e45] + r[e45] - i[l] < n : i[e45] - i[l] < n) && (o += 1);
            else for(let e44 = l - 1; e44 >= 0; e44 -= 1)i[l] - i[e44] < n && (o += 1);
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t25 , params: s15  } = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            s15.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s15.watchOverflow && t25 !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        changeDirection(e46, t26 = !0) {
            const s = this, a = s.params.direction;
            return e46 || (e46 = "horizontal" === a ? "vertical" : "horizontal"), e46 === a || "horizontal" !== e46 && "vertical" !== e46 || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e46}`), s.emitContainerClasses(), s.params.direction = e46, s.slides.each((t)=>{
                "vertical" === e46 ? t.style.width = "" : t.style.height = "";
            }), s.emit("changeDirection"), t26 && s.update()), s;
        }
        mount(e47) {
            const t28 = this;
            if (t28.mounted) return !0;
            const s = d1(e47 || t28.params.el);
            if (!(e47 = s[0])) return !1;
            e47.swiper = t28;
            const i = ()=>`.${(t28.params.wrapperClass || "").trim().split(" ").join(".")}`
            ;
            let r = (()=>{
                if (e47 && e47.shadowRoot && e47.shadowRoot.querySelector) {
                    const t = d1(e47.shadowRoot.querySelector(i()));
                    return t.children = (e)=>s.children(e)
                    , t;
                }
                return s.children(i());
            })();
            if (0 === r.length && t28.params.createElements) {
                const e49 = a1().createElement("div");
                r = d1(e49), e49.className = t28.params.wrapperClass, s.append(e49), s.children(`.${t28.params.slideClass}`).each((e)=>{
                    r.append(e);
                });
            }
            return Object.assign(t28, {
                $el: s,
                el: e47,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e47.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t28.params.direction && ("rtl" === e47.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0;
        }
        init(e51) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e51) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
        }
        destroy(e50 = !0, t29 = !0) {
            const s = this, { params: a , $el: i , $wrapperEl: r , slides: n  } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t29 && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([
                a.slideVisibleClass,
                a.slideActiveClass,
                a.slideNextClass,
                a.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
                s.off(e);
            }), !1 !== e50 && (s.$el[0].swiper = null, (function(e) {
                const t = e;
                Object.keys(t).forEach((e)=>{
                    try {
                        t[e] = null;
                    } catch (e52) {
                    }
                    try {
                        delete t[e];
                    } catch (e53) {
                    }
                });
            })(s)), s.destroyed = !0), null;
        }
        static extendDefaults(e56) {
            f1(X, e56);
        }
        static get extendedDefaults() {
            return X;
        }
        static get defaults() {
            return G;
        }
        static installModule(e54) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e54 && t.indexOf(e54) < 0 && t.push(e54);
        }
        static use(e55) {
            return Array.isArray(e55) ? (e55.forEach((e)=>H.installModule(e)
            ), H) : (H.installModule(e55), H);
        }
    }
    function Y(e, t, s, i) {
        const r = a1();
        return e.params.createElements && Object.keys(i).forEach((a)=>{
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n;
            }
        }), s;
    }
    function W(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function R(e) {
        const t = this, { $wrapperEl: s , params: a  } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for(let t30 = 0; t30 < e.length; t30 += 1)e[t30] && s.append(e[t30]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update();
    }
    function j(e) {
        const t = this, { params: s , $wrapperEl: a , activeIndex: i  } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for(let t = 0; t < e.length; t += 1)e[t] && a.prepend(e[t]);
            r = i + e.length;
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
    }
    function _(e, t) {
        const s = this, { $wrapperEl: a , params: i , activeIndex: r  } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for(let t31 = l - 1; t31 >= e; t31 -= 1){
            const e = s.slides.eq(t31);
            e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
            for(let e58 = 0; e58 < t.length; e58 += 1)t[e58] && a.append(t[e58]);
            o = n > e ? n + t.length : n;
        } else a.append(t);
        for(let e57 = 0; e57 < d.length; e57 += 1)a.append(d[e57]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function V(e) {
        const t = this, { params: s , $wrapperEl: a , activeIndex: i  } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for(let s = 0; s < e.length; s += 1)n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0);
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }
    function q() {
        const e = this, t = [];
        for(let s = 0; s < e.slides.length; s += 1)t.push(s);
        e.removeSlide(t);
    }
    function F(e59) {
        const { effect: t , swiper: s , on: a4 , setTranslate: i , setTransition: r , overwriteParams: n , perspective: l  } = e59;
        a4("beforeInit", ()=>{
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {
            };
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }), a4("setTranslate", ()=>{
            s.params.effect === t && i();
        }), a4("setTransition", (e, a)=>{
            s.params.effect === t && r(a);
        });
    }
    function U(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t;
    }
    function K({ swiper: e , duration: t33 , transformEl: s , allSlides: a  }) {
        const { slides: i , activeIndex: r , $wrapperEl: n  } = e;
        if (e.params.virtualTranslate && 0 !== t33) {
            let t32, l = !1;
            t32 = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), t32.transitionEnd(()=>{
                if (l) return;
                if (!e || e.destroyed) return;
                l = !0, e.animating = !1;
                const t = [
                    "webkitTransitionEnd",
                    "transitionend"
                ];
                for(let e60 = 0; e60 < t.length; e60 += 1)n.trigger(t[e60]);
            });
        }
    }
    function Z(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d1(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r;
    }
    Object.keys(B).forEach((e)=>{
        Object.keys(B[e]).forEach((t)=>{
            H.prototype[t] = B[e][t];
        });
    }), H.use([
        function({ swiper: e , on: t34 , emit: s16  }) {
            const a5 = r1();
            let i4 = null;
            const n = ()=>{
                e && !e.destroyed && e.initialized && (s16("beforeResize"), s16("resize"));
            }, l = ()=>{
                e && !e.destroyed && e.initialized && s16("orientationchange");
            };
            t34("init", ()=>{
                e.params.resizeObserver && void 0 !== a5.ResizeObserver ? e && !e.destroyed && e.initialized && (i4 = new ResizeObserver((t35)=>{
                    const { width: s17 , height: a6  } = e;
                    let i = s17, r = a6;
                    t35.forEach(({ contentBoxSize: t , contentRect: s , target: a  })=>{
                        a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize);
                    }), i === s17 && r === a6 || n();
                }), i4.observe(e.el)) : (a5.addEventListener("resize", n), a5.addEventListener("orientationchange", l));
            }), t34("destroy", ()=>{
                i4 && i4.unobserve && e.el && (i4.unobserve(e.el), i4 = null), a5.removeEventListener("resize", n), a5.removeEventListener("orientationchange", l);
            });
        },
        function({ swiper: e61 , extendParams: t36 , on: s18 , emit: a  }) {
            const i = [], n = r1(), l = (e62, t37 = {
            })=>{
                const s = new (n.MutationObserver || n.WebkitMutationObserver)((e)=>{
                    if (1 === e.length) return void a("observerUpdate", e[0]);
                    const t = function() {
                        a("observerUpdate", e[0]);
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
                });
                s.observe(e62, {
                    attributes: void 0 === t37.attributes || t37.attributes,
                    childList: void 0 === t37.childList || t37.childList,
                    characterData: void 0 === t37.characterData || t37.characterData
                }), i.push(s);
            };
            t36({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), s18("init", ()=>{
                if (e61.params.observer) {
                    if (e61.params.observeParents) {
                        const t = e61.$el.parents();
                        for(let e = 0; e < t.length; e += 1)l(t[e]);
                    }
                    l(e61.$el[0], {
                        childList: e61.params.observeSlideChildren
                    }), l(e61.$wrapperEl[0], {
                        attributes: !1
                    });
                }
            }), s18("destroy", ()=>{
                i.forEach((e)=>{
                    e.disconnect();
                }), i.splice(0, i.length);
            });
        }
    ]);
    const J = [
        function({ swiper: e64 , extendParams: t38 , on: s19  }) {
            let a7;
            function i5(t, s) {
                const a = e64.params.virtual;
                if (a.cache && e64.virtual.cache[s]) return e64.virtual.cache[s];
                const i = a.renderSlide ? d1(a.renderSlide.call(e64, t, s)) : d1(`<div class="${e64.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
                return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e64.virtual.cache[s] = i), i;
            }
            function r2(t40) {
                const { slidesPerView: s , slidesPerGroup: a , centeredSlides: r  } = e64.params, { addSlidesBefore: n , addSlidesAfter: l  } = e64.params.virtual, { from: o , to: d , slides: c , slidesGrid: p , offset: u  } = e64.virtual;
                e64.params.cssMode || e64.updateActiveIndex();
                const h = e64.activeIndex || 0;
                let m, f, g;
                m = e64.rtlTranslate ? "right" : e64.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a + l, g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l, g = a + n);
                const v = Math.max((h || 0) - g, 0), w = Math.min((h || 0) + f, c.length - 1), b = (e64.slidesGrid[v] || 0) - (e64.slidesGrid[0] || 0);
                function x() {
                    e64.updateSlides(), e64.updateProgress(), e64.updateSlidesClasses(), e64.lazy && e64.params.lazy.enabled && e64.lazy.load();
                }
                if (Object.assign(e64.virtual, {
                    from: v,
                    to: w,
                    offset: b,
                    slidesGrid: e64.slidesGrid
                }), o === v && d === w && !t40) return e64.slidesGrid !== p && b !== u && e64.slides.css(m, `${b}px`), void e64.updateProgress();
                if (e64.params.virtual.renderExternal) return e64.params.virtual.renderExternal.call(e64, {
                    offset: b,
                    from: v,
                    to: w,
                    slides: function() {
                        const e = [];
                        for(let t = v; t <= w; t += 1)e.push(c[t]);
                        return e;
                    }()
                }), void (e64.params.virtual.renderExternalUpdate && x());
                const y = [], E = [];
                if (t40) e64.$wrapperEl.find(`.${e64.params.slideClass}`).remove();
                else for(let t39 = o; t39 <= d; t39 += 1)(t39 < v || t39 > w) && e64.$wrapperEl.find(`.${e64.params.slideClass}[data-swiper-slide-index="${t39}"]`).remove();
                for(let e63 = 0; e63 < c.length; e63 += 1)e63 >= v && e63 <= w && (void 0 === d || t40 ? E.push(e63) : (e63 > d && E.push(e63), e63 < o && y.push(e63)));
                E.forEach((t)=>{
                    e64.$wrapperEl.append(i5(c[t], t));
                }), y.sort((e, t)=>t - e
                ).forEach((t)=>{
                    e64.$wrapperEl.prepend(i5(c[t], t));
                }), e64.$wrapperEl.children(".swiper-slide").css(m, `${b}px`), x();
            }
            t38({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }), e64.virtual = {
                cache: {
                },
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            }, s19("beforeInit", ()=>{
                e64.params.virtual.enabled && (e64.virtual.slides = e64.params.virtual.slides, e64.classNames.push(`${e64.params.containerModifierClass}virtual`), e64.params.watchSlidesProgress = !0, e64.originalParams.watchSlidesProgress = !0, e64.params.initialSlide || r2());
            }), s19("setTranslate", ()=>{
                e64.params.virtual.enabled && (e64.params.cssMode && !e64._immediateVirtual ? (clearTimeout(a7), a7 = setTimeout(()=>{
                    r2();
                }, 100)) : r2());
            }), s19("init update resize", ()=>{
                e64.params.virtual.enabled && e64.params.cssMode && g1(e64.wrapperEl, "--swiper-virtual-size", `${e64.virtualSize}px`);
            }), Object.assign(e64.virtual, {
                appendSlide: function(t) {
                    if ("object" == typeof t && "length" in t) for(let s = 0; s < t.length; s += 1)t[s] && e64.virtual.slides.push(t[s]);
                    else e64.virtual.slides.push(t);
                    r2(!0);
                },
                prependSlide: function(t) {
                    const s = e64.activeIndex;
                    let a8 = s + 1, i = 1;
                    if (Array.isArray(t)) {
                        for(let s20 = 0; s20 < t.length; s20 += 1)t[s20] && e64.virtual.slides.unshift(t[s20]);
                        a8 = s + t.length, i = t.length;
                    } else e64.virtual.slides.unshift(t);
                    if (e64.params.virtual.cache) {
                        const t = e64.virtual.cache, s = {
                        };
                        Object.keys(t).forEach((e)=>{
                            const a = t[e], r = a.attr("data-swiper-slide-index");
                            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), s[parseInt(e, 10) + i] = a;
                        }), e64.virtual.cache = s;
                    }
                    r2(!0), e64.slideTo(a8, 0);
                },
                removeSlide: function(t) {
                    if (null == t) return;
                    let s = e64.activeIndex;
                    if (Array.isArray(t)) for(let a = t.length - 1; a >= 0; a -= 1)e64.virtual.slides.splice(t[a], 1), e64.params.virtual.cache && delete e64.virtual.cache[t[a]], t[a] < s && (s -= 1), s = Math.max(s, 0);
                    else e64.virtual.slides.splice(t, 1), e64.params.virtual.cache && delete e64.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
                    r2(!0), e64.slideTo(s, 0);
                },
                removeAllSlides: function() {
                    e64.virtual.slides = [], e64.params.virtual.cache && (e64.virtual.cache = {
                    }), r2(!0), e64.slideTo(0, 0);
                },
                update: r2
            });
        },
        function({ swiper: e , extendParams: t41 , on: s21 , emit: i6  }) {
            const n2 = a1(), l = r1();
            function o2(t) {
                if (!e.enabled) return;
                const { rtlTranslate: s  } = e;
                let a = t;
                a.originalEvent && (a = a.originalEvent);
                const r = a.keyCode || a.charCode, o = e.params.keyboard.pageUpDown, d = o && 33 === r, c = o && 34 === r, p = 37 === r, u = 39 === r, h = 38 === r, m = 40 === r;
                if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c)) return !1;
                if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n2.activeElement && n2.activeElement.nodeName && ("input" === n2.activeElement.nodeName.toLowerCase() || "textarea" === n2.activeElement.nodeName.toLowerCase()))) {
                    if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                        let t = !1;
                        if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                        const a = e.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = l.innerWidth, o = l.innerHeight, d = e.$el.offset();
                        s && (d.left -= e.$el[0].scrollLeft);
                        const c = [
                            [
                                d.left,
                                d.top
                            ],
                            [
                                d.left + i,
                                d.top
                            ],
                            [
                                d.left,
                                d.top + r
                            ],
                            [
                                d.left + i,
                                d.top + r
                            ]
                        ];
                        for(let e65 = 0; e65 < c.length; e65 += 1){
                            const s = c[e65];
                            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                t = !0;
                            }
                        }
                        if (!t) return;
                    }
                    e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && e.slideNext(), ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && e.slideNext(), (d || h) && e.slidePrev()), i6("keyPress", r);
                }
            }
            function c2() {
                e.keyboard.enabled || (d1(n2).on("keydown", o2), e.keyboard.enabled = !0);
            }
            function p2() {
                e.keyboard.enabled && (d1(n2).off("keydown", o2), e.keyboard.enabled = !1);
            }
            e.keyboard = {
                enabled: !1
            }, t41({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s21("init", ()=>{
                e.params.keyboard.enabled && c2();
            }), s21("destroy", ()=>{
                e.keyboard.enabled && p2();
            }), Object.assign(e.keyboard, {
                enable: c2,
                disable: p2
            });
        },
        function({ swiper: e66 , extendParams: t42 , on: s22 , emit: a9  }) {
            const i7 = r1();
            let n;
            t42({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }), e66.mousewheel = {
                enabled: !1
            };
            let l, o3 = u1();
            const c = [];
            function h2() {
                e66.enabled && (e66.mouseEntered = !0);
            }
            function m2() {
                e66.enabled && (e66.mouseEntered = !1);
            }
            function f(t) {
                return !(e66.params.mousewheel.thresholdDelta && t.delta < e66.params.mousewheel.thresholdDelta) && !(e66.params.mousewheel.thresholdTime && u1() - o3 < e66.params.mousewheel.thresholdTime) && (t.delta >= 6 && u1() - o3 < 60 || (t.direction < 0 ? e66.isEnd && !e66.params.loop || e66.animating || (e66.slideNext(), a9("scroll", t.raw)) : e66.isBeginning && !e66.params.loop || e66.animating || (e66.slidePrev(), a9("scroll", t.raw)), o3 = (new i7.Date).getTime(), !1));
            }
            function g2(t43) {
                let s23 = t43, i8 = !0;
                if (!e66.enabled) return;
                const r = e66.params.mousewheel;
                e66.params.cssMode && s23.preventDefault();
                let o = e66.$el;
                if ("container" !== e66.params.mousewheel.eventsTarget && (o = d1(e66.params.mousewheel.eventsTarget)), !e66.mouseEntered && !o[0].contains(s23.target) && !r.releaseOnEdges) return !0;
                s23.originalEvent && (s23 = s23.originalEvent);
                let h = 0;
                const m = e66.rtlTranslate ? -1 : 1, g = function(e) {
                    let t = 0, s = 0, a = 0, i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    };
                }(s23);
                if (r.forceToAxis) {
                    if (e66.isHorizontal()) {
                        if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                        h = -g.pixelX * m;
                    } else {
                        if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                        h = -g.pixelY;
                    }
                } else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
                if (0 === h) return !0;
                r.invert && (h = -h);
                let v = e66.getTranslate() + h * r.sensitivity;
                if (v >= e66.minTranslate() && (v = e66.minTranslate()), v <= e66.maxTranslate() && (v = e66.maxTranslate()), i8 = !!e66.params.loop || !(v === e66.minTranslate() || v === e66.maxTranslate()), i8 && e66.params.nested && s23.stopPropagation(), e66.params.freeMode && e66.params.freeMode.enabled) {
                    const t = {
                        time: u1(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    }, i = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                    if (!i) {
                        l = void 0, e66.params.loop && e66.loopFix();
                        let o = e66.getTranslate() + h * r.sensitivity;
                        const d = e66.isBeginning, u = e66.isEnd;
                        if (o >= e66.minTranslate() && (o = e66.minTranslate()), o <= e66.maxTranslate() && (o = e66.maxTranslate()), e66.setTransition(0), e66.setTranslate(o), e66.updateProgress(), e66.updateActiveIndex(), e66.updateSlidesClasses(), (!d && e66.isBeginning || !u && e66.isEnd) && e66.updateSlidesClasses(), e66.params.freeMode.sticky) {
                            clearTimeout(n), n = void 0, c.length >= 15 && c.shift();
                            const s = c.length ? c[c.length - 1] : void 0, a = c[0];
                            if (c.push(t), s && (t.delta > s.delta || t.direction !== s.direction)) c.splice(0);
                            else if (c.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                                const s = h > 0 ? 0.8 : 0.2;
                                l = t, c.splice(0), n = p1(()=>{
                                    e66.slideToClosest(e66.params.speed, !0, void 0, s);
                                }, 0);
                            }
                            n || (n = p1(()=>{
                                l = t, c.splice(0), e66.slideToClosest(e66.params.speed, !0, void 0, 0.5);
                            }, 500));
                        }
                        if (i || a9("scroll", s23), e66.params.autoplay && e66.params.autoplayDisableOnInteraction && e66.autoplay.stop(), o === e66.minTranslate() || o === e66.maxTranslate()) return !0;
                    }
                } else {
                    const s24 = {
                        time: u1(),
                        delta: Math.abs(h),
                        direction: Math.sign(h),
                        raw: t43
                    };
                    c.length >= 2 && c.shift();
                    const a = c.length ? c[c.length - 1] : void 0;
                    if (c.push(s24), a ? (s24.direction !== a.direction || s24.delta > a.delta || s24.time > a.time + 150) && f(s24) : f(s24), (function(t) {
                        const s = e66.params.mousewheel;
                        if (t.direction < 0) {
                            if (e66.isEnd && !e66.params.loop && s.releaseOnEdges) return !0;
                        } else if (e66.isBeginning && !e66.params.loop && s.releaseOnEdges) return !0;
                        return !1;
                    })(s24)) return !0;
                }
                return s23.preventDefault ? s23.preventDefault() : s23.returnValue = !1, !1;
            }
            function v2(t) {
                let s = e66.$el;
                "container" !== e66.params.mousewheel.eventsTarget && (s = d1(e66.params.mousewheel.eventsTarget)), s[t]("mouseenter", h2), s[t]("mouseleave", m2), s[t]("wheel", g2);
            }
            function w() {
                return e66.params.cssMode ? (e66.wrapperEl.removeEventListener("wheel", g2), !0) : !e66.mousewheel.enabled && (v2("on"), e66.mousewheel.enabled = !0, !0);
            }
            function b() {
                return e66.params.cssMode ? (e66.wrapperEl.addEventListener(event, g2), !0) : !!e66.mousewheel.enabled && (v2("off"), e66.mousewheel.enabled = !1, !0);
            }
            s22("init", ()=>{
                !e66.params.mousewheel.enabled && e66.params.cssMode && b(), e66.params.mousewheel.enabled && w();
            }), s22("destroy", ()=>{
                e66.params.cssMode && w(), e66.mousewheel.enabled && b();
            }), Object.assign(e66.mousewheel, {
                enable: w,
                disable: b
            });
        },
        function({ swiper: e , extendParams: t44 , on: s25 , emit: a10  }) {
            function i9(t) {
                let s;
                return t && (s = d1(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
            }
            function r3(t, s) {
                const a = e.params.navigation;
                t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass));
            }
            function n3() {
                if (e.params.loop) return;
                const { $nextEl: t , $prevEl: s  } = e.navigation;
                r3(s, e.isBeginning), r3(t, e.isEnd);
            }
            function l(t) {
                t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev();
            }
            function o(t) {
                t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext();
            }
            function c() {
                const t = e.params.navigation;
                if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
                const s = i9(t.nextEl), a = i9(t.prevEl);
                s && s.length > 0 && s.on("click", o), a && a.length > 0 && a.on("click", l), Object.assign(e.navigation, {
                    $nextEl: s,
                    nextEl: s && s[0],
                    $prevEl: a,
                    prevEl: a && a[0]
                }), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
            }
            function p() {
                const { $nextEl: t , $prevEl: s  } = e.navigation;
                t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
            }
            t44({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            }), e.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, s25("init", ()=>{
                c(), n3();
            }), s25("toEdge fromEdge lock unlock", ()=>{
                n3();
            }), s25("destroy", ()=>{
                p();
            }), s25("enable disable", ()=>{
                const { $nextEl: t , $prevEl: s  } = e.navigation;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
            }), s25("click", (t, s)=>{
                const { $nextEl: i , $prevEl: r  } = e.navigation, n = s.target;
                if (e.params.navigation.hideOnClick && !d1(n).is(r) && !d1(n).is(i)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                    let t;
                    i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), a10(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
                }
            }), Object.assign(e.navigation, {
                update: n3,
                init: c,
                destroy: p
            });
        },
        function({ swiper: e67 , extendParams: t45 , on: s26 , emit: a11  }) {
            const i10 = "swiper-pagination";
            let r4;
            t45({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e)=>e
                    ,
                    formatFractionTotal: (e)=>e
                    ,
                    bulletClass: `${i10}-bullet`,
                    bulletActiveClass: `${i10}-bullet-active`,
                    modifierClass: `${i10}-`,
                    currentClass: `${i10}-current`,
                    totalClass: `${i10}-total`,
                    hiddenClass: `${i10}-hidden`,
                    progressbarFillClass: `${i10}-progressbar-fill`,
                    progressbarOppositeClass: `${i10}-progressbar-opposite`,
                    clickableClass: `${i10}-clickable`,
                    lockClass: `${i10}-lock`,
                    horizontalClass: `${i10}-horizontal`,
                    verticalClass: `${i10}-vertical`
                }
            }), e67.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let n4 = 0;
            function l2() {
                return !e67.params.pagination.el || !e67.pagination.el || !e67.pagination.$el || 0 === e67.pagination.$el.length;
            }
            function o(t, s) {
                const { bulletActiveClass: a  } = e67.params.pagination;
                t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
            }
            function c3() {
                const t46 = e67.rtl, s = e67.params.pagination;
                if (l2()) return;
                const i = e67.virtual && e67.params.virtual.enabled ? e67.virtual.slides.length : e67.slides.length, c = e67.pagination.$el;
                let p;
                const u = e67.params.loop ? Math.ceil((i - 2 * e67.loopedSlides) / e67.params.slidesPerGroup) : e67.snapGrid.length;
                if (e67.params.loop ? (p = Math.ceil((e67.activeIndex - e67.loopedSlides) / e67.params.slidesPerGroup), p > i - 1 - 2 * e67.loopedSlides && (p -= i - 2 * e67.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e67.params.paginationType && (p = u + p)) : p = void 0 !== e67.snapIndex ? e67.snapIndex : e67.activeIndex || 0, "bullets" === s.type && e67.pagination.bullets && e67.pagination.bullets.length > 0) {
                    const a12 = e67.pagination.bullets;
                    let i, l, u;
                    if (s.dynamicBullets && (r4 = a12.eq(0)[e67.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e67.isHorizontal() ? "width" : "height", r4 * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e67.previousIndex && (n4 += p - e67.previousIndex, n4 > s.dynamicMainBullets - 1 ? n4 = s.dynamicMainBullets - 1 : n4 < 0 && (n4 = 0)), i = p - n4, l = i + (Math.min(a12.length, s.dynamicMainBullets) - 1), u = (l + i) / 2), a12.removeClass([
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((e)=>`${s.bulletActiveClass}${e}`
                    ).join(" ")), c.length > 1) a12.each((e)=>{
                        const t = d1(e), a = t.index();
                        a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= l && t.addClass(`${s.bulletActiveClass}-main`), a === i && o(t, "prev"), a === l && o(t, "next"));
                    });
                    else {
                        const t = a12.eq(p), r = t.index();
                        if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                            const t = a12.eq(i), n = a12.eq(l);
                            for(let e = i; e <= l; e += 1)a12.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            if (e67.params.loop) {
                                if (r >= a12.length - s.dynamicMainBullets) {
                                    for(let e = s.dynamicMainBullets; e >= 0; e -= 1)a12.eq(a12.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    a12.eq(a12.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                } else o(t, "prev"), o(n, "next");
                            } else o(t, "prev"), o(n, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(a12.length, s.dynamicMainBullets + 4), n = (r4 * i - r4) / 2 - u * r4, l = t46 ? "right" : "left";
                        a12.css(e67.isHorizontal() ? l : "top", `${n}px`);
                    }
                }
                if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)), c.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                    let t;
                    t = s.progressbarOpposite ? e67.isHorizontal() ? "vertical" : "horizontal" : e67.isHorizontal() ? "horizontal" : "vertical";
                    const a = (p + 1) / u;
                    let i = 1, r = 1;
                    "horizontal" === t ? i = a : r = a, c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e67.params.speed);
                }
                "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e67, p + 1, u)), a11("paginationRender", c[0])) : a11("paginationUpdate", c[0]), e67.params.watchOverflow && e67.enabled && c[e67.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }
            function p3() {
                const t = e67.params.pagination;
                if (l2()) return;
                const s = e67.virtual && e67.params.virtual.enabled ? e67.virtual.slides.length : e67.slides.length, i = e67.pagination.$el;
                let r = "";
                if ("bullets" === t.type) {
                    let a = e67.params.loop ? Math.ceil((s - 2 * e67.loopedSlides) / e67.params.slidesPerGroup) : e67.snapGrid.length;
                    e67.params.freeMode && e67.params.freeMode.enabled && !e67.params.loop && a > s && (a = s);
                    for(let s27 = 0; s27 < a; s27 += 1)t.renderBullet ? r += t.renderBullet.call(e67, s27, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    i.html(r), e67.pagination.bullets = i.find(W(t.bulletClass));
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e67, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e67, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && a11("paginationRender", e67.pagination.$el[0]);
            }
            function u2() {
                e67.params.pagination = Y(e67, e67.originalParams.pagination, e67.params.pagination, {
                    el: "swiper-pagination"
                });
                const t47 = e67.params.pagination;
                if (!t47.el) return;
                let s28 = d1(t47.el);
                0 !== s28.length && (e67.params.uniqueNavElements && "string" == typeof t47.el && s28.length > 1 && (s28 = e67.$el.find(t47.el), s28.length > 1 && (s28 = s28.filter((t)=>d1(t).parents(".swiper")[0] === e67.el
                ))), "bullets" === t47.type && t47.clickable && s28.addClass(t47.clickableClass), s28.addClass(t47.modifierClass + t47.type), s28.addClass(t47.modifierClass + e67.params.direction), "bullets" === t47.type && t47.dynamicBullets && (s28.addClass(`${t47.modifierClass}${t47.type}-dynamic`), n4 = 0, t47.dynamicMainBullets < 1 && (t47.dynamicMainBullets = 1)), "progressbar" === t47.type && t47.progressbarOpposite && s28.addClass(t47.progressbarOppositeClass), t47.clickable && s28.on("click", W(t47.bulletClass), function(t) {
                    t.preventDefault();
                    let s = d1(this).index() * e67.params.slidesPerGroup;
                    e67.params.loop && (s += e67.loopedSlides), e67.slideTo(s);
                }), Object.assign(e67.pagination, {
                    $el: s28,
                    el: s28[0]
                }), e67.enabled || s28.addClass(t47.lockClass));
            }
            function h() {
                const t = e67.params.pagination;
                if (l2()) return;
                const s = e67.pagination.$el;
                s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e67.params.direction), e67.pagination.bullets && e67.pagination.bullets.removeClass && e67.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", W(t.bulletClass));
            }
            s26("init", ()=>{
                u2(), p3(), c3();
            }), s26("activeIndexChange", ()=>{
                (e67.params.loop || void 0 === e67.snapIndex) && c3();
            }), s26("snapIndexChange", ()=>{
                e67.params.loop || c3();
            }), s26("slidesLengthChange", ()=>{
                e67.params.loop && (p3(), c3());
            }), s26("snapGridLengthChange", ()=>{
                e67.params.loop || (p3(), c3());
            }), s26("destroy", ()=>{
                h();
            }), s26("enable disable", ()=>{
                const { $el: t  } = e67.pagination;
                t && t[e67.enabled ? "removeClass" : "addClass"](e67.params.pagination.lockClass);
            }), s26("lock unlock", ()=>{
                c3();
            }), s26("click", (t, s)=>{
                const i = s.target, { $el: r  } = e67.pagination;
                if (e67.params.pagination.el && e67.params.pagination.hideOnClick && r.length > 0 && !d1(i).hasClass(e67.params.pagination.bulletClass)) {
                    if (e67.navigation && (e67.navigation.nextEl && i === e67.navigation.nextEl || e67.navigation.prevEl && i === e67.navigation.prevEl)) return;
                    const t = r.hasClass(e67.params.pagination.hiddenClass);
                    a11(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e67.params.pagination.hiddenClass);
                }
            }), Object.assign(e67.pagination, {
                render: p3,
                update: c3,
                init: u2,
                destroy: h
            });
        },
        function({ swiper: e , extendParams: t48 , on: s29 , emit: i11  }) {
            const r5 = a1();
            let n5, l3, o4, c4, u = !1, h = null, m = null;
            function f() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t , rtlTranslate: s , progress: a  } = e, { $dragEl: i , $el: r  } = t, n = e.params.scrollbar;
                let d = l3, c = (o4 - l3) * a;
                s ? (c = -c, c > 0 ? (d = l3 - c, c = 0) : -c + l3 > o4 && (d = o4 + c)) : c < 0 ? (d = l3 + c, c = 0) : c + l3 > o4 && (d = o4 - c), e.isHorizontal() ? (i.transform(`translate3d(${c}px, 0, 0)`), i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${c}px, 0)`), i[0].style.height = `${d}px`), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout(()=>{
                    r[0].style.opacity = 0, r.transition(400);
                }, 1000));
            }
            function g() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t  } = e, { $dragEl: s , $el: a  } = t;
                s[0].style.width = "", s[0].style.height = "", o4 = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, c4 = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l3 = "auto" === e.params.scrollbar.dragSize ? o4 * c4 : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l3}px` : s[0].style.height = `${l3}px`, a[0].style.display = c4 >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
            }
            function v(t) {
                return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
            }
            function w(t) {
                const { scrollbar: s , rtlTranslate: a  } = e, { $el: i  } = s;
                let r;
                r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n5 ? n5 : l3 / 2)) / (o4 - l3), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
                const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
                e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            function b(t) {
                const s = e.params.scrollbar, { scrollbar: a , $wrapperEl: r  } = e, { $el: l , $dragEl: o  } = a;
                u = !0, n5 = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), w(t), clearTimeout(m), l.transition(0), s.hide && l.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i11("scrollbarDragStart", t);
            }
            function x(t) {
                const { scrollbar: s , $wrapperEl: a  } = e, { $el: r , $dragEl: n  } = s;
                u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, w(t), a.transition(0), r.transition(0), n.transition(0), i11("scrollbarDragMove", t));
            }
            function y(t) {
                const s = e.params.scrollbar, { scrollbar: a , $wrapperEl: r  } = e, { $el: n  } = a;
                u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = p1(()=>{
                    n.css("opacity", 0), n.transition(400);
                }, 1000)), i11("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest());
            }
            function E(t) {
                const { scrollbar: s , touchEventsTouch: a , touchEventsDesktop: i , params: n , support: l  } = e, o = s.$el[0], d = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, c = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                if (!o) return;
                const p = "on" === t ? "addEventListener" : "removeEventListener";
                l.touch ? (o[p](a.start, b, d), o[p](a.move, x, d), o[p](a.end, y, c)) : (o[p](i.start, b, d), r5[p](i.move, x, d), r5[p](i.end, y, c));
            }
            function T() {
                const { scrollbar: t , $el: s  } = e;
                e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const a = e.params.scrollbar;
                if (!a.el) return;
                let i = d1(a.el);
                e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
                let r = i.find(`.${e.params.scrollbar.dragClass}`);
                0 === r.length && (r = d1(`<div class="${e.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(t, {
                    $el: i,
                    el: i[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), a.draggable && e.params.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
            }
            function C() {
                e.params.scrollbar.el && E("off");
            }
            t48({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            }), e.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            }, s29("init", ()=>{
                T(), g(), f();
            }), s29("update resize observerUpdate lock unlock", ()=>{
                g();
            }), s29("setTranslate", ()=>{
                f();
            }), s29("setTransition", (t49, s)=>{
                !function(t) {
                    e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t);
                }(s);
            }), s29("enable disable", ()=>{
                const { $el: t  } = e.scrollbar;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
            }), s29("destroy", ()=>{
                C();
            }), Object.assign(e.scrollbar, {
                updateSize: g,
                setTranslate: f,
                init: T,
                destroy: C
            });
        },
        function({ swiper: e68 , extendParams: t50 , on: s30  }) {
            t50({
                parallax: {
                    enabled: !1
                }
            });
            const a13 = (t, s)=>{
                const { rtl: a  } = e68, i = d1(t), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : e68.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e;
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
                }
            }, i12 = ()=>{
                const { $el: t51 , slides: s31 , progress: i , snapGrid: r  } = e68;
                t51.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                    a13(e, i);
                }), s31.each((t, s)=>{
                    let n = t.progress;
                    e68.params.slidesPerGroup > 1 && "auto" !== e68.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d1(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                        a13(e, n);
                    });
                });
            };
            s30("beforeInit", ()=>{
                e68.params.parallax.enabled && (e68.params.watchSlidesProgress = !0, e68.originalParams.watchSlidesProgress = !0);
            }), s30("init", ()=>{
                e68.params.parallax.enabled && i12();
            }), s30("setTranslate", ()=>{
                e68.params.parallax.enabled && i12();
            }), s30("setTransition", (t52, s32)=>{
                e68.params.parallax.enabled && ((t = e68.params.speed)=>{
                    const { $el: s33  } = e68;
                    s33.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                        const s = d1(e);
                        let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (a = 0), s.transition(a);
                    });
                })(s32);
            });
        },
        function({ swiper: e69 , extendParams: t53 , on: s34 , emit: a14  }) {
            const i13 = r1();
            t53({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), e69.zoom = {
                enabled: !1
            };
            let n6, l4, o5, c5 = 1, p4 = !1;
            const u = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            }, m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {
                },
                touchesCurrent: {
                }
            }, f2 = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
            let g3 = 1;
            function v3(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX, i = e.targetTouches[1].pageY;
                return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
            }
            function w2(t) {
                const s = e69.support, a = e69.params.zoom;
                if (l4 = !1, o5 = !1, !s.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    l4 = !0, u.scaleStart = v3(t);
                }
                u.$slideEl && u.$slideEl.length || (u.$slideEl = d1(t.target).closest(`.${e69.params.slideClass}`), 0 === u.$slideEl.length && (u.$slideEl = e69.slides.eq(e69.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), p4 = !0) : u.$imageEl = void 0;
            }
            function b2(t) {
                const s = e69.support, a = e69.params.zoom, i = e69.zoom;
                if (!s.gestures) {
                    if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                    o5 = !0, u.scaleMove = v3(t);
                }
                u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c5 : i.scale = u.scaleMove / u.scaleStart * c5, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** 0.5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5), u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === t.type && w2(t);
            }
            function x2(t) {
                const s = e69.device, a = e69.support, i = e69.params.zoom, r = e69.zoom;
                if (!a.gestures) {
                    if (!l4 || !o5) return;
                    if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android) return;
                    l4 = !1, o5 = !1;
                }
                u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e69.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), c5 = r.scale, p4 = !1, 1 === r.scale && (u.$slideEl = void 0));
            }
            function y2(t) {
                const s = e69.zoom;
                if (!u.$imageEl || 0 === u.$imageEl.length) return;
                if (e69.allowClick = !1, !m.isTouched || !u.$slideEl) return;
                m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h1(u.$imageWrapEl[0], "x") || 0, m.startY = h1(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
                const a = m.width * s.scale, i = m.height * s.scale;
                if (!(a < u.slideWidth && i < u.slideHeight)) {
                    if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !p4) {
                        if (e69.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
                        if (!e69.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1);
                    }
                    t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8), f2.prevPositionX || (f2.prevPositionX = m.touchesCurrent.x), f2.prevPositionY || (f2.prevPositionY = m.touchesCurrent.y), f2.prevTime || (f2.prevTime = Date.now()), f2.x = (m.touchesCurrent.x - f2.prevPositionX) / (Date.now() - f2.prevTime) / 2, f2.y = (m.touchesCurrent.y - f2.prevPositionY) / (Date.now() - f2.prevTime) / 2, Math.abs(m.touchesCurrent.x - f2.prevPositionX) < 2 && (f2.x = 0), Math.abs(m.touchesCurrent.y - f2.prevPositionY) < 2 && (f2.y = 0), f2.prevPositionX = m.touchesCurrent.x, f2.prevPositionY = m.touchesCurrent.y, f2.prevTime = Date.now(), u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                }
            }
            function E2() {
                const t = e69.zoom;
                u.$slideEl && e69.previousIndex !== e69.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, c5 = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0);
            }
            function T2(t) {
                const s = e69.zoom, a = e69.params.zoom;
                if (u.$slideEl || (t && t.target && (u.$slideEl = d1(t.target).closest(`.${e69.params.slideClass}`)), u.$slideEl || (e69.params.virtual && e69.params.virtual.enabled && e69.virtual ? u.$slideEl = e69.$wrapperEl.children(`.${e69.params.slideActiveClass}`) : u.$slideEl = e69.slides.eq(e69.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
                let r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
                e69.params.cssMode && (e69.wrapperEl.style.overflow = "hidden", e69.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y), s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, c5 = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i13.scrollX, o = u.$slideEl.offset().top + i13.scrollY, p = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = p * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`), u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
            }
            function C2() {
                const t = e69.zoom, s = e69.params.zoom;
                u.$slideEl || (e69.params.virtual && e69.params.virtual.enabled && e69.virtual ? u.$slideEl = e69.$wrapperEl.children(`.${e69.params.slideActiveClass}`) : u.$slideEl = e69.slides.eq(e69.activeIndex), u.$imageEl = u.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`)), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e69.params.cssMode && (e69.wrapperEl.style.overflow = "", e69.wrapperEl.style.touchAction = ""), t.scale = 1, c5 = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass(`${s.zoomedSlideClass}`), u.$slideEl = void 0);
            }
            function $2(t) {
                const s = e69.zoom;
                s.scale && 1 !== s.scale ? C2() : T2(t);
            }
            function S2() {
                const t = e69.support;
                return {
                    passiveListener: !("touchstart" !== e69.touchEvents.start || !t.passiveListener || !e69.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !t.passiveListener || {
                        passive: !1,
                        capture: !0
                    }
                };
            }
            function M() {
                return `.${e69.params.slideClass}`;
            }
            function P(t) {
                const { passiveListener: s  } = S2(), a = M();
                e69.$wrapperEl[t]("gesturestart", a, w2, s), e69.$wrapperEl[t]("gesturechange", a, b2, s), e69.$wrapperEl[t]("gestureend", a, x2, s);
            }
            function k() {
                n6 || (n6 = !0, P("on"));
            }
            function z() {
                n6 && (n6 = !1, P("off"));
            }
            function O() {
                const t = e69.zoom;
                if (t.enabled) return;
                t.enabled = !0;
                const s = e69.support, { passiveListener: a , activeListenerWithCapture: i  } = S2(), r = M();
                s.gestures ? (e69.$wrapperEl.on(e69.touchEvents.start, k, a), e69.$wrapperEl.on(e69.touchEvents.end, z, a)) : "touchstart" === e69.touchEvents.start && (e69.$wrapperEl.on(e69.touchEvents.start, r, w2, a), e69.$wrapperEl.on(e69.touchEvents.move, r, b2, i), e69.$wrapperEl.on(e69.touchEvents.end, r, x2, a), e69.touchEvents.cancel && e69.$wrapperEl.on(e69.touchEvents.cancel, r, x2, a)), e69.$wrapperEl.on(e69.touchEvents.move, `.${e69.params.zoom.containerClass}`, y2, i);
            }
            function I() {
                const t = e69.zoom;
                if (!t.enabled) return;
                const s = e69.support;
                t.enabled = !1;
                const { passiveListener: a , activeListenerWithCapture: i  } = S2(), r = M();
                s.gestures ? (e69.$wrapperEl.off(e69.touchEvents.start, k, a), e69.$wrapperEl.off(e69.touchEvents.end, z, a)) : "touchstart" === e69.touchEvents.start && (e69.$wrapperEl.off(e69.touchEvents.start, r, w2, a), e69.$wrapperEl.off(e69.touchEvents.move, r, b2, i), e69.$wrapperEl.off(e69.touchEvents.end, r, x2, a), e69.touchEvents.cancel && e69.$wrapperEl.off(e69.touchEvents.cancel, r, x2, a)), e69.$wrapperEl.off(e69.touchEvents.move, `.${e69.params.zoom.containerClass}`, y2, i);
            }
            Object.defineProperty(e69.zoom, "scale", {
                get: ()=>g3
                ,
                set (e) {
                    if (g3 !== e) {
                        const t = u.$imageEl ? u.$imageEl[0] : void 0, s = u.$slideEl ? u.$slideEl[0] : void 0;
                        a14("zoomChange", e, t, s);
                    }
                    g3 = e;
                }
            }), s34("init", ()=>{
                e69.params.zoom.enabled && O();
            }), s34("destroy", ()=>{
                I();
            }), s34("touchStart", (t54, s35)=>{
                e69.zoom.enabled && (function(t) {
                    const s = e69.device;
                    u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
                })(s35);
            }), s34("touchEnd", (t55, s36)=>{
                e69.zoom.enabled && (function() {
                    const t = e69.zoom;
                    if (!u.$imageEl || 0 === u.$imageEl.length) return;
                    if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void (m.isMoved = !1);
                    m.isTouched = !1, m.isMoved = !1;
                    let s = 300, a = 300;
                    const i = f2.x * s, r = m.currentX + i, n = f2.y * a, l = m.currentY + n;
                    0 !== f2.x && (s = Math.abs((r - m.currentX) / f2.x)), 0 !== f2.y && (a = Math.abs((l - m.currentY) / f2.y));
                    const o = Math.max(s, a);
                    m.currentX = r, m.currentY = l;
                    const d = m.width * t.scale, c = m.height * t.scale;
                    m.minX = Math.min(u.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                })();
            }), s34("doubleTap", (t, s)=>{
                !e69.animating && e69.params.zoom.enabled && e69.zoom.enabled && e69.params.zoom.toggle && $2(s);
            }), s34("transitionEnd", ()=>{
                e69.zoom.enabled && e69.params.zoom.enabled && E2();
            }), s34("slideChange", ()=>{
                e69.zoom.enabled && e69.params.zoom.enabled && e69.params.cssMode && E2();
            }), Object.assign(e69.zoom, {
                enable: O,
                disable: I,
                in: T2,
                out: C2,
                toggle: $2
            });
        },
        function({ swiper: e70 , extendParams: t56 , on: s37 , emit: a15  }) {
            t56({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), e70.lazy = {
            };
            let i14 = !1, n7 = !1;
            function l5(t57, s = !0) {
                const i = e70.params.lazy;
                if (void 0 === t57) return;
                if (0 === e70.slides.length) return;
                const r = e70.virtual && e70.params.virtual.enabled ? e70.$wrapperEl.children(`.${e70.params.slideClass}[data-swiper-slide-index="${t57}"]`) : e70.slides.eq(t57), n8 = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n8.push(r[0]), 0 !== n8.length && n8.each((t58)=>{
                    const n = d1(t58);
                    n.addClass(i.loadingClass);
                    const o = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"), u = n.attr("data-sizes"), h = n.parent("picture");
                    e70.loadImage(n[0], c || o, p, u, !1, ()=>{
                        if (null != e70 && e70 && (!e70 || e70.params) && !e70.destroyed) {
                            if (o ? (n.css("background-image", `url("${o}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e)=>{
                                const t = d1(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(`.${i.preloaderClass}`).remove(), e70.params.loop && s) {
                                const t = r.attr("data-swiper-slide-index");
                                if (r.hasClass(e70.params.slideDuplicateClass)) l5(e70.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e70.params.slideDuplicateClass})`).index(), !1);
                                else l5(e70.$wrapperEl.children(`.${e70.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1);
                            }
                            a15("lazyImageReady", r[0], n[0]), e70.params.autoHeight && e70.updateAutoHeight();
                        }
                    }), a15("lazyImageLoad", r[0], n[0]);
                });
            }
            function o6() {
                const { $wrapperEl: t , params: s , slides: a , activeIndex: i  } = e70, r = e70.virtual && s.virtual.enabled, o = s.lazy;
                let c = s.slidesPerView;
                function p(e) {
                    if (r) {
                        if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0;
                    } else if (a[e]) return !0;
                    return !1;
                }
                function u(e) {
                    return r ? d1(e).attr("data-swiper-slide-index") : d1(e).index();
                }
                if ("auto" === c && (c = 0), n7 || (n7 = !0), e70.params.watchSlidesProgress) t.children(`.${s.slideVisibleClass}`).each((e)=>{
                    l5(r ? d1(e).attr("data-swiper-slide-index") : d1(e).index());
                });
                else if (c > 1) for(let e71 = i; e71 < i + c; e71 += 1)p(e71) && l5(e71);
                else l5(i);
                if (o.loadPrevNext) {
                    if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        const e = o.loadPrevNextAmount, t = c, s = Math.min(i + t + Math.max(e, t), a.length), r = Math.max(i - Math.max(t, e), 0);
                        for(let e72 = i + c; e72 < s; e72 += 1)p(e72) && l5(e72);
                        for(let e73 = r; e73 < i; e73 += 1)p(e73) && l5(e73);
                    } else {
                        const e = t.children(`.${s.slideNextClass}`);
                        e.length > 0 && l5(u(e));
                        const a = t.children(`.${s.slidePrevClass}`);
                        a.length > 0 && l5(u(a));
                    }
                }
            }
            function c6() {
                const t = r1();
                if (!e70 || e70.destroyed) return;
                const s = e70.params.lazy.scrollingElement ? d1(e70.params.lazy.scrollingElement) : d1(t), a = s[0] === t, n = a ? t.innerWidth : s[0].offsetWidth, l = a ? t.innerHeight : s[0].offsetHeight, p = e70.$el.offset(), { rtlTranslate: u  } = e70;
                let h = !1;
                u && (p.left -= e70.$el[0].scrollLeft);
                const m = [
                    [
                        p.left,
                        p.top
                    ],
                    [
                        p.left + e70.width,
                        p.top
                    ],
                    [
                        p.left,
                        p.top + e70.height
                    ],
                    [
                        p.left + e70.width,
                        p.top + e70.height
                    ]
                ];
                for(let e = 0; e < m.length; e += 1){
                    const t = m[e];
                    if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        h = !0;
                    }
                }
                const f = !("touchstart" !== e70.touchEvents.start || !e70.support.passiveListener || !e70.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h ? (o6(), s.off("scroll", c6, f)) : i14 || (i14 = !0, s.on("scroll", c6, f));
            }
            s37("beforeInit", ()=>{
                e70.params.lazy.enabled && e70.params.preloadImages && (e70.params.preloadImages = !1);
            }), s37("init", ()=>{
                e70.params.lazy.enabled && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("scroll", ()=>{
                e70.params.freeMode && e70.params.freeMode.enabled && !e70.params.freeMode.sticky && o6();
            }), s37("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
                e70.params.lazy.enabled && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("transitionStart", ()=>{
                e70.params.lazy.enabled && (e70.params.lazy.loadOnTransitionStart || !e70.params.lazy.loadOnTransitionStart && !n7) && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("transitionEnd", ()=>{
                e70.params.lazy.enabled && !e70.params.lazy.loadOnTransitionStart && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("slideChange", ()=>{
                const { lazy: t , cssMode: s , watchSlidesProgress: a , touchReleaseOnEdges: i , resistanceRatio: r  } = e70.params;
                t.enabled && (s || a && (i || 0 === r)) && o6();
            }), Object.assign(e70.lazy, {
                load: o6,
                loadInSlide: l5
            });
        },
        function({ swiper: e74 , extendParams: t59 , on: s38  }) {
            function a16(e75, t60) {
                const s39 = function() {
                    let e, t, s;
                    return (a, i)=>{
                        for(t = -1, e = a.length; e - t > 1;)s = e + t >> 1, a[s] <= i ? t = s : e = s;
                        return e;
                    };
                }();
                let a17, i16;
                return this.x = e75, this.y = t60, this.lastIndex = e75.length - 1, this.interpolate = function(e) {
                    return e ? (i16 = s39(this.x, e), a17 = i16 - 1, (e - this.x[a17]) * (this.y[i16] - this.y[a17]) / (this.x[i16] - this.x[a17]) + this.y[a17]) : 0;
                }, this;
            }
            function i15() {
                e74.controller.control && e74.controller.spline && (e74.controller.spline = void 0, delete e74.controller.spline);
            }
            t59({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), e74.controller = {
                control: void 0
            }, s38("beforeInit", ()=>{
                e74.controller.control = e74.params.controller.control;
            }), s38("update", ()=>{
                i15();
            }), s38("resize", ()=>{
                i15();
            }), s38("observerUpdate", ()=>{
                i15();
            }), s38("setTranslate", (t, s, a)=>{
                e74.controller.control && e74.controller.setTranslate(s, a);
            }), s38("setTransition", (t, s, a)=>{
                e74.controller.control && e74.controller.setTransition(s, a);
            }), Object.assign(e74.controller, {
                setTranslate: function(t61, s40) {
                    const i = e74.controller.control;
                    let r, n;
                    const l = e74.constructor;
                    function o(t62) {
                        const s = e74.rtlTranslate ? -e74.translate : e74.translate;
                        "slide" === e74.params.controller.by && (!function(t) {
                            e74.controller.spline || (e74.controller.spline = e74.params.loop ? new a16(e74.slidesGrid, t.slidesGrid) : new a16(e74.snapGrid, t.snapGrid));
                        }(t62), n = -e74.controller.spline.interpolate(-s)), n && "container" !== e74.params.controller.by || (r = (t62.maxTranslate() - t62.minTranslate()) / (e74.maxTranslate() - e74.minTranslate()), n = (s - e74.minTranslate()) * r + t62.minTranslate()), e74.params.controller.inverse && (n = t62.maxTranslate() - n), t62.updateProgress(n), t62.setTranslate(n, e74), t62.updateActiveIndex(), t62.updateSlidesClasses();
                    }
                    if (Array.isArray(i)) for(let e = 0; e < i.length; e += 1)i[e] !== s40 && i[e] instanceof l && o(i[e]);
                    else i instanceof l && s40 !== i && o(i);
                },
                setTransition: function(t, s41) {
                    const a = e74.constructor, i = e74.controller.control;
                    let r;
                    function n(s) {
                        s.setTransition(t, e74), 0 !== t && (s.transitionStart(), s.params.autoHeight && p1(()=>{
                            s.updateAutoHeight();
                        }), s.$wrapperEl.transitionEnd(()=>{
                            i && (s.params.loop && "slide" === e74.params.controller.by && s.loopFix(), s.transitionEnd());
                        }));
                    }
                    if (Array.isArray(i)) for(r = 0; r < i.length; r += 1)i[r] !== s41 && i[r] instanceof a && n(i[r]);
                    else i instanceof a && s41 !== i && n(i);
                }
            });
        },
        function({ swiper: e76 , extendParams: t63 , on: s42  }) {
            t63({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group"
                }
            });
            let a18 = null;
            function i17(e) {
                const t = a18;
                0 !== t.length && (t.html(""), t.html(e));
            }
            function r6(e) {
                e.attr("tabIndex", "0");
            }
            function n9(e) {
                e.attr("tabIndex", "-1");
            }
            function l(e, t) {
                e.attr("role", t);
            }
            function o(e, t) {
                e.attr("aria-roledescription", t);
            }
            function c(e, t) {
                e.attr("aria-label", t);
            }
            function p5(e) {
                e.attr("aria-disabled", !0);
            }
            function u3(e) {
                e.attr("aria-disabled", !1);
            }
            function h(t) {
                if (13 !== t.keyCode && 32 !== t.keyCode) return;
                const s = e76.params.a11y, a = d1(t.target);
                e76.navigation && e76.navigation.$nextEl && a.is(e76.navigation.$nextEl) && (e76.isEnd && !e76.params.loop || e76.slideNext(), e76.isEnd ? i17(s.lastSlideMessage) : i17(s.nextSlideMessage)), e76.navigation && e76.navigation.$prevEl && a.is(e76.navigation.$prevEl) && (e76.isBeginning && !e76.params.loop || e76.slidePrev(), e76.isBeginning ? i17(s.firstSlideMessage) : i17(s.prevSlideMessage)), e76.pagination && a.is(W(e76.params.pagination.bulletClass)) && a[0].click();
            }
            function m3() {
                if (e76.params.loop || !e76.navigation) return;
                const { $nextEl: t , $prevEl: s  } = e76.navigation;
                s && s.length > 0 && (e76.isBeginning ? (p5(s), n9(s)) : (u3(s), r6(s))), t && t.length > 0 && (e76.isEnd ? (p5(t), n9(t)) : (u3(t), r6(t)));
            }
            function f() {
                return e76.pagination && e76.params.pagination.clickable && e76.pagination.bullets && e76.pagination.bullets.length;
            }
            const g = (e77, t64, s)=>{
                r6(e77), "BUTTON" !== e77[0].tagName && (l(e77, "button"), e77.on("keydown", h)), c(e77, s), (function(e, t) {
                    e.attr("aria-controls", t);
                })(e77, t64);
            };
            function v4() {
                const t65 = e76.params.a11y;
                e76.$el.append(a18);
                const s43 = e76.$el;
                t65.containerRoleDescriptionMessage && o(s43, t65.containerRoleDescriptionMessage), t65.containerMessage && c(s43, t65.containerMessage);
                const i18 = e76.$wrapperEl, r7 = i18.attr("id") || `swiper-wrapper-${function(e = 16) {
                    return "x".repeat(e).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16)
                    );
                }(16)}`, n = e76.params.autoplay && e76.params.autoplay.enabled ? "off" : "polite";
                var p;
                p = r7, i18.attr("id", p), (function(e, t) {
                    e.attr("aria-live", t);
                })(i18, n), t65.itemRoleDescriptionMessage && o(d1(e76.slides), t65.itemRoleDescriptionMessage), l(d1(e76.slides), t65.slideRole);
                const u = e76.params.loop ? e76.slides.filter((t)=>!t.classList.contains(e76.params.slideDuplicateClass)
                ).length : e76.slides.length;
                let m, v;
                e76.slides.each((s, a)=>{
                    const i = d1(s), r = e76.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                    c(i, t65.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u));
                }), e76.navigation && e76.navigation.$nextEl && (m = e76.navigation.$nextEl), e76.navigation && e76.navigation.$prevEl && (v = e76.navigation.$prevEl), m && m.length && g(m, r7, t65.nextSlideMessage), v && v.length && g(v, r7, t65.prevSlideMessage), f() && e76.pagination.$el.on("keydown", W(e76.params.pagination.bulletClass), h);
            }
            s42("beforeInit", ()=>{
                a18 = d1(`<span class="${e76.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            }), s42("afterInit", ()=>{
                e76.params.a11y.enabled && (v4(), m3());
            }), s42("toEdge", ()=>{
                e76.params.a11y.enabled && m3();
            }), s42("fromEdge", ()=>{
                e76.params.a11y.enabled && m3();
            }), s42("paginationUpdate", ()=>{
                e76.params.a11y.enabled && (function() {
                    const t = e76.params.a11y;
                    f() && e76.pagination.bullets.each((s)=>{
                        const a = d1(s);
                        r6(a), e76.params.pagination.renderBullet || (l(a, "button"), c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)));
                    });
                })();
            }), s42("destroy", ()=>{
                e76.params.a11y.enabled && (function() {
                    let t, s;
                    a18 && a18.length > 0 && a18.remove(), e76.navigation && e76.navigation.$nextEl && (t = e76.navigation.$nextEl), e76.navigation && e76.navigation.$prevEl && (s = e76.navigation.$prevEl), t && t.off("keydown", h), s && s.off("keydown", h), f() && e76.pagination.$el.off("keydown", W(e76.params.pagination.bulletClass), h);
                })();
            });
        },
        function({ swiper: e78 , extendParams: t66 , on: s44  }) {
            t66({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides"
                }
            });
            let a19 = !1, i19 = {
            };
            const n = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            , l6 = (e79)=>{
                const t = r1();
                let s;
                s = e79 ? new URL(e79) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e)=>"" !== e
                ), i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                };
            }, o7 = (t, s)=>{
                const i = r1();
                if (!a19 || !e78.params.history.enabled) return;
                let l;
                l = e78.params.url ? new URL(e78.params.url) : i.location;
                const o = e78.slides.eq(s);
                let d = n(o.attr("data-history"));
                if (e78.params.history.root.length > 0) {
                    let s = e78.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${t}/${d}`;
                } else l.pathname.includes(t) || (d = `${t}/${d}`);
                const c = i.history.state;
                c && c.value === d || (e78.params.history.replaceState ? i.history.replaceState({
                    value: d
                }, null, d) : i.history.pushState({
                    value: d
                }, null, d));
            }, d3 = (t, s, a)=>{
                if (s) for(let i = 0, r = e78.slides.length; i < r; i += 1){
                    const r = e78.slides.eq(i);
                    if (n(r.attr("data-history")) === s && !r.hasClass(e78.params.slideDuplicateClass)) {
                        const s = r.index();
                        e78.slideTo(s, t, a);
                    }
                }
                else e78.slideTo(0, t, a);
            }, c7 = ()=>{
                i19 = l6(e78.params.url), d3(e78.params.speed, e78.paths.value, !1);
            };
            s44("init", ()=>{
                e78.params.history.enabled && (()=>{
                    const t = r1();
                    if (e78.params.history) {
                        if (!t.history || !t.history.pushState) return e78.params.history.enabled = !1, void (e78.params.hashNavigation.enabled = !0);
                        a19 = !0, i19 = l6(e78.params.url), (i19.key || i19.value) && (d3(0, i19.value, e78.params.runCallbacksOnInit), e78.params.history.replaceState || t.addEventListener("popstate", c7));
                    }
                })();
            }), s44("destroy", ()=>{
                e78.params.history.enabled && (()=>{
                    const t = r1();
                    e78.params.history.replaceState || t.removeEventListener("popstate", c7);
                })();
            }), s44("transitionEnd _freeModeNoMomentumRelease", ()=>{
                a19 && o7(e78.params.history.key, e78.activeIndex);
            }), s44("slideChange", ()=>{
                a19 && e78.params.cssMode && o7(e78.params.history.key, e78.activeIndex);
            });
        },
        function({ swiper: e , extendParams: t67 , emit: s45 , on: i20  }) {
            let n = !1;
            const l = a1(), o = r1();
            t67({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            const c = ()=>{
                s45("hashChange");
                const t = l.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === s) return;
                    e.slideTo(s);
                }
            }, p = ()=>{
                if (n && e.params.hashNavigation.enabled) {
                    if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), s45("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history");
                        l.location.hash = a || "", s45("hashSet");
                    }
                }
            };
            i20("init", ()=>{
                e.params.hashNavigation.enabled && (()=>{
                    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                    n = !0;
                    const t = l.location.hash.replace("#", "");
                    if (t) {
                        const s = 0;
                        for(let a = 0, i = e.slides.length; a < i; a += 1){
                            const i = e.slides.eq(a);
                            if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                                const t = i.index();
                                e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && d1(o).on("hashchange", c);
                })();
            }), i20("destroy", ()=>{
                e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d1(o).off("hashchange", c);
            }), i20("transitionEnd _freeModeNoMomentumRelease", ()=>{
                n && p();
            }), i20("slideChange", ()=>{
                n && e.params.cssMode && p();
            });
        },
        function({ swiper: e , extendParams: t68 , on: s46 , emit: i  }) {
            let r;
            function n() {
                const t69 = e.slides.eq(e.activeIndex);
                let s = e.params.autoplay.delay;
                t69.attr("data-swiper-autoplay") && (s = t69.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = p1(()=>{
                    let t;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && n();
                }, s);
            }
            function l() {
                return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0);
            }
            function o() {
                return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0);
            }
            function d(t70) {
                e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t70 && e.params.autoplay.waitForTransition ? [
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((t)=>{
                    e.$wrapperEl[0].addEventListener(t, u);
                }) : (e.autoplay.paused = !1, n())));
            }
            function c() {
                const t = a1();
                "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1);
            }
            function u(t71) {
                e && !e.destroyed && e.$wrapperEl && t71.target === e.$wrapperEl[0] && ([
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((t)=>{
                    e.$wrapperEl[0].removeEventListener(t, u);
                }), e.autoplay.paused = !1, e.autoplay.running ? n() : o());
            }
            function h() {
                e.params.autoplay.disableOnInteraction ? o() : d(), [
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((t)=>{
                    e.$wrapperEl[0].removeEventListener(t, u);
                });
            }
            function m() {
                e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n());
            }
            e.autoplay = {
                running: !1,
                paused: !1
            }, t68({
                autoplay: {
                    enabled: !1,
                    delay: 3000,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), s46("init", ()=>{
                if (e.params.autoplay.enabled) {
                    l();
                    a1().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m));
                }
            }), s46("beforeTransitionStart", (t, s, a)=>{
                e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
            }), s46("sliderFirstMove", ()=>{
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
            }), s46("touchEnd", ()=>{
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n();
            }), s46("destroy", ()=>{
                e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && o();
                a1().removeEventListener("visibilitychange", c);
            }), Object.assign(e.autoplay, {
                pause: d,
                run: n,
                start: l,
                stop: o
            });
        },
        function({ swiper: e , extendParams: t72 , on: s47  }) {
            t72({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let a20 = !1, i21 = !1;
            function r8() {
                const t = e.thumbs.swiper;
                if (!t) return;
                const s = t.clickedIndex, a = t.clickedSlide;
                if (a && d1(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let i;
                if (i = t.params.loop ? parseInt(d1(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                    const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(), a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                    i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s;
                }
                e.slideTo(i);
            }
            function n10() {
                const { thumbs: t  } = e.params;
                if (a20) return !1;
                a20 = !0;
                const s = e.constructor;
                if (t.swiper instanceof s) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
                else if (m1(t.swiper)) {
                    const a = Object.assign({
                    }, t.swiper);
                    Object.assign(a, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), e.thumbs.swiper = new s(a), i21 = !0;
                }
                return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", r8), !0;
            }
            function l7(t) {
                const s = e.thumbs.swiper;
                if (!s) return;
                const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView, i = e.params.thumbs.autoScrollOffset, r = i && !s.params.loop;
                if (e.realIndex !== s.realIndex || r) {
                    let n, l, o = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                        const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(), a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                        n = void 0 === t ? a : void 0 === a ? t : a - o == o - t ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - t ? a : t, l = e.activeIndex > e.previousIndex ? "next" : "prev";
                    } else n = e.realIndex, l = n > e.previousIndex ? "next" : "prev";
                    r && (n += "next" === l ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, t ? 0 : void 0));
                }
                let n = 1;
                const l = e.params.thumbs.slideThumbActiveClass;
                if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for(let t73 = 0; t73 < n; t73 += 1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t73}"]`).addClass(l);
                else for(let t74 = 0; t74 < n; t74 += 1)s.slides.eq(e.realIndex + t74).addClass(l);
            }
            e.thumbs = {
                swiper: null
            }, s47("beforeInit", ()=>{
                const { thumbs: t  } = e.params;
                t && t.swiper && (n10(), l7(!0));
            }), s47("slideChange update resize observerUpdate", ()=>{
                e.thumbs.swiper && l7();
            }), s47("setTransition", (t, s)=>{
                const a = e.thumbs.swiper;
                a && a.setTransition(s);
            }), s47("beforeDestroy", ()=>{
                const t = e.thumbs.swiper;
                t && i21 && t && t.destroy();
            }), Object.assign(e.thumbs, {
                init: n10,
                update: l7
            });
        },
        function({ swiper: e80 , extendParams: t75 , emit: s48 , once: a21  }) {
            t75({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: 0.02
                }
            }), Object.assign(e80, {
                freeMode: {
                    onTouchMove: function() {
                        const { touchEventsData: t , touches: s  } = e80;
                        0 === t.velocities.length && t.velocities.push({
                            position: s[e80.isHorizontal() ? "startX" : "startY"],
                            time: t.touchStartTime
                        }), t.velocities.push({
                            position: s[e80.isHorizontal() ? "currentX" : "currentY"],
                            time: u1()
                        });
                    },
                    onTouchEnd: function({ currentPos: t  }) {
                        const { params: i , $wrapperEl: r , rtlTranslate: n , snapGrid: l , touchEventsData: o  } = e80, d = u1() - o.touchStartTime;
                        if (t < -e80.minTranslate()) e80.slideTo(e80.activeIndex);
                        else if (t > -e80.maxTranslate()) e80.slides.length < l.length ? e80.slideTo(l.length - 1) : e80.slideTo(e80.slides.length - 1);
                        else {
                            if (i.freeMode.momentum) {
                                if (o.velocities.length > 1) {
                                    const t = o.velocities.pop(), s = o.velocities.pop(), a = t.position - s.position, r = t.time - s.time;
                                    e80.velocity = a / r, e80.velocity /= 2, Math.abs(e80.velocity) < i.freeMode.minimumVelocity && (e80.velocity = 0), (r > 150 || u1() - t.time > 300) && (e80.velocity = 0);
                                } else e80.velocity = 0;
                                e80.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;
                                let t = 1000 * i.freeMode.momentumRatio;
                                const d = e80.velocity * t;
                                let c = e80.translate + d;
                                n && (c = -c);
                                let p, h = !1;
                                const m = 20 * Math.abs(e80.velocity) * i.freeMode.momentumBounceRatio;
                                let f;
                                if (c < e80.maxTranslate()) i.freeMode.momentumBounce ? (c + e80.maxTranslate() < -m && (c = e80.maxTranslate() - m), p = e80.maxTranslate(), h = !0, o.allowMomentumBounce = !0) : c = e80.maxTranslate(), i.loop && i.centeredSlides && (f = !0);
                                else if (c > e80.minTranslate()) i.freeMode.momentumBounce ? (c - e80.minTranslate() > m && (c = e80.minTranslate() + m), p = e80.minTranslate(), h = !0, o.allowMomentumBounce = !0) : c = e80.minTranslate(), i.loop && i.centeredSlides && (f = !0);
                                else if (i.freeMode.sticky) {
                                    let t;
                                    for(let e = 0; e < l.length; e += 1)if (l[e] > -c) {
                                        t = e;
                                        break;
                                    }
                                    c = Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) || "next" === e80.swipeDirection ? l[t] : l[t - 1], c = -c;
                                }
                                if (f && a21("transitionEnd", ()=>{
                                    e80.loopFix();
                                }), 0 !== e80.velocity) {
                                    if (t = n ? Math.abs((-c - e80.translate) / e80.velocity) : Math.abs((c - e80.translate) / e80.velocity), i.freeMode.sticky) {
                                        const s = Math.abs((n ? -c : c) - e80.translate), a = e80.slidesSizesGrid[e80.activeIndex];
                                        t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed;
                                    }
                                } else if (i.freeMode.sticky) return void e80.slideToClosest();
                                i.freeMode.momentumBounce && h ? (e80.updateProgress(p), e80.setTransition(t), e80.setTranslate(c), e80.transitionStart(!0, e80.swipeDirection), e80.animating = !0, r.transitionEnd(()=>{
                                    e80 && !e80.destroyed && o.allowMomentumBounce && (s48("momentumBounce"), e80.setTransition(i.speed), setTimeout(()=>{
                                        e80.setTranslate(p), r.transitionEnd(()=>{
                                            e80 && !e80.destroyed && e80.transitionEnd();
                                        });
                                    }, 0));
                                })) : e80.velocity ? (s48("_freeModeNoMomentumRelease"), e80.updateProgress(c), e80.setTransition(t), e80.setTranslate(c), e80.transitionStart(!0, e80.swipeDirection), e80.animating || (e80.animating = !0, r.transitionEnd(()=>{
                                    e80 && !e80.destroyed && e80.transitionEnd();
                                }))) : e80.updateProgress(c), e80.updateActiveIndex(), e80.updateSlidesClasses();
                            } else {
                                if (i.freeMode.sticky) return void e80.slideToClosest();
                                i.freeMode && s48("_freeModeNoMomentumRelease");
                            }
                            (!i.freeMode.momentum || d >= i.longSwipesMs) && (e80.updateProgress(), e80.updateActiveIndex(), e80.updateSlidesClasses());
                        }
                    }
                }
            });
        },
        function({ swiper: e81 , extendParams: t76  }) {
            let s49, a22, i22;
            t76({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            }), e81.grid = {
                initSlides: (t)=>{
                    const { slidesPerView: r  } = e81.params, { rows: n , fill: l  } = e81.params.grid;
                    a22 = s49 / n, i22 = Math.floor(t / n), s49 = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== r && "row" === l && (s49 = Math.max(s49, r * n));
                },
                updateSlide: (t, r, n, l)=>{
                    const { slidesPerGroup: o , spaceBetween: d  } = e81.params, { rows: c , fill: p  } = e81.params.grid;
                    let u, h, m;
                    if ("row" === p && o > 1) {
                        const e = Math.floor(t / (o * c)), a = t - c * o * e, i = 0 === e ? o : Math.min(Math.ceil((n - e * c * o) / c), o);
                        m = Math.floor(a / i), h = a - m * i + e * o, u = h + m * s49 / c, r.css({
                            "-webkit-order": u,
                            order: u
                        });
                    } else "column" === p ? (h = Math.floor(t / c), m = t - h * c, (h > i22 || h === i22 && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(t / a22), h = t - m * a22);
                    r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
                },
                updateWrapperSize: (t, a, i)=>{
                    const { spaceBetween: r , centeredSlides: n , roundLengths: l  } = e81.params, { rows: o  } = e81.params.grid;
                    if (e81.virtualSize = (t + r) * s49, e81.virtualSize = Math.ceil(e81.virtualSize / o) - r, e81.$wrapperEl.css({
                        [i("width")]: `${e81.virtualSize + r}px`
                    }), n) {
                        a.splice(0, a.length);
                        const t = [];
                        for(let s = 0; s < a.length; s += 1){
                            let i = a[s];
                            l && (i = Math.floor(i)), a[s] < e81.virtualSize + a[0] && t.push(i);
                        }
                        a.push(...t);
                    }
                }
            };
        },
        function({ swiper: e  }) {
            Object.assign(e, {
                appendSlide: R.bind(e),
                prependSlide: j.bind(e),
                addSlide: _.bind(e),
                removeSlide: V.bind(e),
                removeAllSlides: q.bind(e)
            });
        },
        function({ swiper: e , extendParams: t77 , on: s50  }) {
            t77({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            }), F({
                effect: "fade",
                swiper: e,
                on: s50,
                setTranslate: ()=>{
                    const { slides: t  } = e, s = e.params.fadeEffect;
                    for(let a = 0; a < t.length; a += 1){
                        const t = e.slides.eq(a);
                        let i = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (i -= e.translate);
                        let r = 0;
                        e.isHorizontal() || (r = i, i = 0);
                        const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        U(s, t).css({
                            opacity: n
                        }).transform(`translate3d(${i}px, ${r}px, 0px)`);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e.params.fadeEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t), K({
                        swiper: e,
                        duration: t,
                        transformEl: s,
                        allSlides: !0
                    });
                },
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
            });
        },
        function({ swiper: e83 , extendParams: t78 , on: s51  }) {
            t78({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            }), F({
                effect: "cube",
                swiper: e83,
                on: s51,
                setTranslate: ()=>{
                    const { $el: t , $wrapperEl: s , slides: a , width: i , height: r , rtlTranslate: n , size: l , browser: o  } = e83, c = e83.params.cubeEffect, p = e83.isHorizontal(), u = e83.virtual && e83.params.virtual.enabled;
                    let h, m = 0;
                    c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d1('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
                        height: `${i}px`
                    })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d1('<div class="swiper-cube-shadow"></div>'), t.append(h))));
                    for(let e82 = 0; e82 < a.length; e82 += 1){
                        const t = a.eq(e82);
                        let s = e82;
                        u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let i = 90 * s, r = Math.floor(i / 360);
                        n && (i = -i, r = Math.floor(-i / 360));
                        const o = Math.max(Math.min(t[0].progress, 1), -1);
                        let h = 0, f = 0, g = 0;
                        s % 4 == 0 ? (h = 4 * -r * l, g = 0) : (s - 1) % 4 == 0 ? (h = 0, g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l, g = l) : (s - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * r), n && (h = -h), p || (f = h, h = 0);
                        const v = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                        if (o <= 1 && o > -1 && (m = 90 * s + 90 * o, n && (m = 90 * -s - 90 * o)), t.transform(v), c.slideShadows) {
                            let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = d1(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`), t.append(e)), 0 === s.length && (s = d1(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`), t.append(s)), e.length && (e[0].style.opacity = Math.max(-o, 0)), s.length && (s[0].style.opacity = Math.max(o, 0));
                        }
                    }
                    if (s.css({
                        "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                        "transform-origin": `50% 50% -${l / 2}px`
                    }), c.shadow) {
                        if (p) h.transform(`translate3d(0px, ${i / 2 + c.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                        else {
                            const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = c.shadowScale, a = c.shadowScale / t, i = c.shadowOffset;
                            h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`);
                        }
                    }
                    const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                    s.transform(`translate3d(0px,0,${f}px) rotateX(${e83.isHorizontal() ? 0 : m}deg) rotateY(${e83.isHorizontal() ? -m : 0}deg)`);
                },
                setTransition: (t)=>{
                    const { $el: s , slides: a  } = e83;
                    a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e83.params.cubeEffect.shadow && !e83.isHorizontal() && s.find(".swiper-cube-shadow").transition(t);
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
            });
        },
        function({ swiper: e , extendParams: t79 , on: s52  }) {
            t79({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            }), F({
                effect: "flip",
                swiper: e,
                on: s52,
                setTranslate: ()=>{
                    const { slides: t , rtlTranslate: s  } = e, a = e.params.flipEffect;
                    for(let i = 0; i < t.length; i += 1){
                        const r = t.eq(i);
                        let n = r[0].progress;
                        e.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                        const l = r[0].swiperSlideOffset;
                        let o = -180 * n, d = 0, c = e.params.cssMode ? -l - e.translate : -l, p = 0;
                        if (e.isHorizontal() ? s && (o = -o) : (p = c, c = 0, d = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, a.slideShadows) {
                            let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), s = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = Z(a, r, e.isHorizontal() ? "left" : "top")), 0 === s.length && (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")), t.length && (t[0].style.opacity = Math.max(-n, 0)), s.length && (s[0].style.opacity = Math.max(n, 0));
                        }
                        const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                        U(a, r).transform(u);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e.params.flipEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), K({
                        swiper: e,
                        duration: t,
                        transformEl: s
                    });
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
            });
        },
        function({ swiper: e85 , extendParams: t81 , on: s53  }) {
            t81({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), F({
                effect: "coverflow",
                swiper: e85,
                on: s53,
                setTranslate: ()=>{
                    const { width: t , height: s , slides: a , slidesSizesGrid: i  } = e85, r = e85.params.coverflowEffect, n = e85.isHorizontal(), l = e85.translate, o = n ? t / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                    for(let e84 = 0, t80 = a.length; e84 < t80; e84 += 1){
                        const t80 = a.eq(e84), s = i[e84], l = (o - t80[0].swiperSlideOffset - s / 2) / s * r.modifier;
                        let p = n ? d * l : 0, u = n ? 0 : d * l, h = -c * Math.abs(l), m = r.stretch;
                        "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * s);
                        let f = n ? 0 : m * l, g = n ? m * l : 0, v = 1 - (1 - r.scale) * Math.abs(l);
                        Math.abs(g) < 0.001 && (g = 0), Math.abs(f) < 0.001 && (f = 0), Math.abs(h) < 0.001 && (h = 0), Math.abs(p) < 0.001 && (p = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(v) < 0.001 && (v = 0);
                        const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
                        if (U(r, t80).transform(w), t80[0].style.zIndex = 1 - Math.abs(Math.round(l)), r.slideShadows) {
                            let e = n ? t80.find(".swiper-slide-shadow-left") : t80.find(".swiper-slide-shadow-top"), s = n ? t80.find(".swiper-slide-shadow-right") : t80.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = Z(r, t80, n ? "left" : "top")), 0 === s.length && (s = Z(r, t80, n ? "right" : "bottom")), e.length && (e[0].style.opacity = l > 0 ? l : 0), s.length && (s[0].style.opacity = -l > 0 ? -l : 0);
                        }
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e85.params.coverflowEffect;
                    (s ? e85.slides.find(s) : e85.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0
                    })
            });
        },
        function({ swiper: e86 , extendParams: t82 , on: s55  }) {
            t82({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const a = (e)=>"string" == typeof e ? e : `${e}px`
            ;
            F({
                effect: "creative",
                swiper: e86,
                on: s55,
                setTranslate: ()=>{
                    const { slides: t , $wrapperEl: s , slidesSizesGrid: i  } = e86, r = e86.params.creativeEffect, { progressMultiplier: n  } = r, l = e86.params.centeredSlides;
                    if (l) {
                        const t = i[0] / 2 - e86.params.slidesOffsetBefore || 0;
                        s.transform(`translateX(calc(50% - ${t}px))`);
                    }
                    for(let s54 = 0; s54 < t.length; s54 += 1){
                        const i = t.eq(s54), o = i[0].progress, d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
                        let c = d;
                        l || (c = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
                        const p = i[0].swiperSlideOffset, u = [
                            e86.params.cssMode ? -p - e86.translate : -p,
                            0,
                            0
                        ], h = [
                            0,
                            0,
                            0
                        ];
                        let m = !1;
                        e86.isHorizontal() || (u[1] = u[0], u[0] = 0);
                        let f = {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            scale: 1,
                            opacity: 1
                        };
                        d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach((e, t)=>{
                            u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`;
                        }), h.forEach((e, t)=>{
                            h[t] = f.rotate[t] * Math.abs(d * n);
                        }), i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
                        const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`, w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`, b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n, x = `translate3d(${g}) ${v} ${w}`;
                        if (m && f.shadow || !m) {
                            let e = i.children(".swiper-slide-shadow");
                            if (0 === e.length && f.shadow && (e = Z(r, i)), e.length) {
                                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                            }
                        }
                        const y = U(r, i);
                        y.transform(x).css({
                            opacity: b
                        }), f.origin && y.css("transform-origin", f.origin);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e86.params.creativeEffect;
                    (s ? e86.slides.find(s) : e86.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
                        swiper: e86,
                        duration: t,
                        transformEl: s,
                        allSlides: !0
                    });
                },
                perspective: ()=>e86.params.creativeEffect.perspective
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e86.params.cssMode
                    })
            });
        },
        function({ swiper: e87 , extendParams: t83 , on: s56  }) {
            t83({
                cardsEffect: {
                    slideShadows: !0,
                    transformEl: null
                }
            }), F({
                effect: "cards",
                swiper: e87,
                on: s56,
                setTranslate: ()=>{
                    const { slides: t , activeIndex: s  } = e87, a = e87.params.cardsEffect, { startTranslate: i , isTouched: r  } = e87.touchEventsData, n = e87.translate;
                    for(let l = 0; l < t.length; l += 1){
                        const o = t.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                        let p = o[0].swiperSlideOffset;
                        e87.params.centeredSlides && !e87.params.cssMode && e87.$wrapperEl.transform(`translateX(${e87.minTranslate()}px)`), e87.params.centeredSlides && e87.params.cssMode && (p -= t[0].swiperSlideOffset);
                        let u = e87.params.cssMode ? -p - e87.translate : -p, h = 0;
                        const m = -100 * Math.abs(c);
                        let f = 1, g = -2 * c, v = 8 - 0.75 * Math.abs(c);
                        const w = (l === s || l === s - 1) && c > 0 && c < 1 && (r || e87.params.cssMode) && n < i, b = (l === s || l === s + 1) && c < 0 && c > -1 && (r || e87.params.cssMode) && n > i;
                        if (w || b) {
                            const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                            g += -28 * c * e, f += -0.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%";
                        }
                        if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !e87.isHorizontal()) {
                            const e = h;
                            h = u, u = e;
                        }
                        const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
                        if (a.slideShadows) {
                            let e = o.find(".swiper-slide-shadow");
                            0 === e.length && (e = Z(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                        }
                        o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                        U(a, o).transform(x);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e87.params.cardsEffect;
                    (s ? e87.slides.find(s) : e87.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
                        swiper: e87,
                        duration: t,
                        transformEl: s
                    });
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e87.params.cssMode
                    })
            });
        }
    ];
    return H.use(J), H;
}); //# sourceMappingURL=swiper-bundle.min.js.map

//# sourceMappingURL=index.54f14f8f.js.map
