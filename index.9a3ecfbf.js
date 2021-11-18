!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.datepicker = t() : e.datepicker = t();
}(window, function() {
    return (function(e1) {
        var t1 = {
        };
        function n(a) {
            if (t1[a]) return t1[a].exports;
            var r = t1[a] = {
                i: a,
                l: !1,
                exports: {
                }
            };
            return e1[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = e1, n.c = t1, n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var r in e)n.d(a, r, (function(t) {
                return e[t];
            }).bind(null, r));
            return a;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 0);
    })([
        function(e2, t2, n1) {
            "use strict";
            n1.r(t2);
            var a1 = [], r1 = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ], i1 = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ], o1 = {
                t: "top",
                r: "right",
                b: "bottom",
                l: "left",
                c: "centered"
            };
            function s1() {
            }
            var l1 = [
                "click",
                "focusin",
                "keydown",
                "input"
            ];
            function d1(e) {
                l1.forEach(function(t) {
                    e.addEventListener(t, e === document ? L1 : Y1);
                });
            }
            function c1(e) {
                return Array.isArray(e) ? e.map(c1) : "[object Object]" === x1(e) ? Object.keys(e).reduce(function(t, n) {
                    return t[n] = c1(e[n]), t;
                }, {
                }) : e;
            }
            function u1(e, t) {
                var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [
                    h1(t, e, a),
                    f1(t, e, a),
                    v1(e, a)
                ].join(""), a && window.requestAnimationFrame(function() {
                    M1(!0, e);
                });
            }
            function h1(e, t, n) {
                return [
                    '<div class="qs-controls' + (n ? " qs-blur" : "") + '">',
                    '<div class="qs-arrow qs-left"></div>',
                    '<div class="qs-month-year">',
                    '<span class="qs-month">' + t.months[e.getMonth()] + "</span>",
                    '<span class="qs-year">' + e.getFullYear() + "</span>",
                    "</div>",
                    '<div class="qs-arrow qs-right"></div>',
                    "</div>"
                ].join("");
            }
            function f1(e3, t, n) {
                var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {
                }, m = +v.start, y = +v.end, p = g1(new Date(e3).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                p.setMonth(p.getMonth() + 1), p.setDate(0);
                var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                S += (w + b) % 7 ? 7 : 0;
                for(var M = 1; M <= S; M++){
                    var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, P = j ? C < 1 ? -1 : 1 : 0, k = j && !l, O = k ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                    Y && !k && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !k && (A += " qs-disabled"), +g1(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), k && (A += " qs-empty", O = ""), q.push('<div class="' + A + '" data-direction="' + P + '">' + O + "</div>");
                }
                var R = d.map(function(e) {
                    return '<div class="qs-square qs-day">' + e + "</div>";
                }).concat(q);
                return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), R.join("");
            }
            function v1(e4, t3) {
                var n = e4.overlayPlaceholder, a = e4.overlayButton;
                return [
                    '<div class="qs-overlay' + (t3 ? "" : " qs-hidden") + '">',
                    "<div>",
                    '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />',
                    '<div class="qs-close">&#10005;</div>',
                    "</div>",
                    '<div class="qs-overlay-month-container">' + e4.overlayMonths.map(function(e, t) {
                        return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                    }).join("") + "</div>",
                    '<div class="qs-submit qs-disabled">' + a + "</div>",
                    "</div>"
                ].join("");
            }
            function m1(e, t, n) {
                var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p1(a, t, n), n || q1(t), o && (y1({
                    instance: t,
                    deselect: n
                }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, o.currentMonthName = t.currentMonthName), u1(t), u1(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
            }
            function y1(e) {
                var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
            }
            function p1(e, t, n) {
                if (!t.nonInput) return n ? e.value = "" : t.formatter !== s1 ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
            }
            function w1(e, t, n, a) {
                n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u1(t), t.onMonthChange(t);
            }
            function D1(e) {
                if (!e.noPosition) {
                    var t = e.position.top, n = e.position.right;
                    if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                    var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                    e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                }
            }
            function b1(e) {
                return "[object Date]" === x1(e) && "Invalid Date" !== e.toString();
            }
            function g1(e) {
                if (b1(e) || "number" == typeof e && !isNaN(e)) {
                    var t = new Date(+e);
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                }
            }
            function q1(e) {
                e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M1(!0, e), e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
            }
            function S1(e) {
                e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M1(!1, e), D1(e), e.onShow(e));
            }
            function M1(e, t) {
                var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), r.focus());
            }
            function E1(e, t, n, a) {
                var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w1(null, n, i, a) : r || t.classList.contains("qs-disabled") || w1(null, n, i);
                else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
            }
            function x1(e) {
                return ({
                }).toString.call(e);
            }
            function C1(e) {
                a1.forEach(function(t) {
                    t !== e && q1(t);
                });
            }
            function L1(e5) {
                if (!e5.__qs_shadow_dom) {
                    var t4 = e5.which || e5.keyCode, n = e5.type, r = e5.target, o = r.classList, s = a1.filter(function(e) {
                        return e.calendar.contains(r) || e.el === r;
                    })[0], l = s && s.calendar.contains(r);
                    if (!(s && s.isMobile && s.disableMobile)) {
                        if ("click" === n) {
                            if (!s) return a1.forEach(q1);
                            if (s.disabled) return;
                            var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                            if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S1 : q1)(s);
                            else if (o.contains("qs-arrow")) w1(o, s);
                            else if (p || o.contains("qs-close")) h || M1(!y, s);
                            else if (D) E1(e5, v, s, D);
                            else {
                                if (o.contains("qs-disabled")) return;
                                if (o.contains("qs-num")) {
                                    var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                    if (g) {
                                        s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i1[s.currentMonth], u1(s);
                                        for(var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L;){
                                            var P = Y[j];
                                            P.textContent === b && (L = P), j++;
                                        }
                                        r = L;
                                    }
                                    return void (+x == +s.dateSelected ? m1(r, s, !0) : r.classList.contains("qs-disabled") || m1(r, s));
                                }
                                o.contains("qs-submit") ? E1(e5, v, s) : f && r === s.el && (S1(s), C1(s));
                            }
                        } else if ("focusin" === n && s) S1(s), C1(s);
                        else if ("keydown" === n && 9 === t4 && s) q1(s);
                        else if ("keydown" === n && s && !s.disabled) {
                            var k = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                            13 === t4 && k && l ? E1(e5, r, s) : 27 === t4 && k && l && M1(!0, s);
                        } else if ("input" === n) {
                            if (!s || !s.calendar.contains(r)) return;
                            var O = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce(function(e, t) {
                                return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                            }, "").slice(0, 4);
                            r.value = N, O.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                        }
                    }
                }
            }
            function Y1(e) {
                L1(e), e.__qs_shadow_dom = !0;
            }
            function j1(e, t) {
                l1.forEach(function(n) {
                    e.removeEventListener(n, t);
                });
            }
            function P1() {
                S1(this);
            }
            function k1() {
                q1(this);
            }
            function O1(e, t) {
                var n = g1(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                if (null == e) return this.dateSelected = void 0, p1(this.el, this, !0), i && (y1({
                    instance: this,
                    deselect: !0
                }), u1(i)), u1(this), this;
                if (!b1(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()]), p1(this.el, this), i && (y1({
                    instance: this
                }), u1(i));
                var o = a === n.getFullYear() && r === n.getMonth();
                return o || t ? u1(this, n) : o || u1(this, new Date(a, r, 1)), this;
            }
            function N1(e) {
                return I1(this, e, !0);
            }
            function _1(e) {
                return I1(this, e);
            }
            function I1(e, t, n) {
                var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g1(t), d = n ? "Min" : "Max";
                function c() {
                    return "original" + d + "Date";
                }
                function h() {
                    return d.toLowerCase() + "Date";
                }
                function f() {
                    return "set" + d;
                }
                function v() {
                    throw new Error("Out-of-range date passed to " + f());
                }
                if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, i.maxDate = void 0)) : e[h()] = void 0;
                else {
                    if (!b1(t)) throw new Error("Invalid date passed to " + f());
                    i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                }
                return i && u1(i), u1(e), e;
            }
            function A1() {
                var e = this.first ? this : this.sibling, t = e.sibling;
                return {
                    start: e.dateSelected,
                    end: t.dateSelected
                };
            }
            function R1() {
                var e6 = this.shadowDom, t5 = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                this.inlinePosition && (a1.some(function(e) {
                    return e !== i && e.positionedEl === t5;
                }) || t5.style.setProperty("position", null));
                n.remove(), a1 = a1.filter(function(e) {
                    return e !== i;
                }), r && delete r.sibling, a1.length || j1(document, L1);
                var o = a1.some(function(t) {
                    return t.shadowDom === e6;
                });
                for(var s in e6 && !o && j1(e6, Y1), this)delete this[s];
                a1.length || l1.forEach(function(e) {
                    document.removeEventListener(e, L1);
                });
            }
            function F(e, t) {
                var n = new Date(e);
                if (!b1(n)) throw new Error("Invalid date passed to `navigate`");
                this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u1(this), t && this.onMonthChange(this);
            }
            function B() {
                var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                e && M1(t, this);
            }
            t2.default = function(e7, t6) {
                var n2 = function(e8, t7) {
                    var n3, l3, d2 = function(e9) {
                        var t8 = c1(e9);
                        t8.events && (t8.events = t8.events.reduce(function(e, t) {
                            if (!b1(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                            return e[+g1(t)] = !0, e;
                        }, {
                        }));
                        [
                            "startDate",
                            "dateSelected",
                            "minDate",
                            "maxDate"
                        ].forEach(function(e) {
                            var n = t8[e];
                            if (n && !b1(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                            t8[e] = g1(n);
                        });
                        var n4 = t8.position, i = t8.maxDate, l = t8.minDate, d = t8.dateSelected, u = t8.overlayPlaceholder, h = t8.overlayButton, f = t8.startDay, v = t8.id;
                        if (t8.startDate = g1(t8.startDate || d || new Date), t8.disabledDates = (t8.disabledDates || []).reduce(function(e, t) {
                            var n = +g1(t);
                            if (!b1(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                            if (n === +g1(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                            return e[n] = 1, e;
                        }, {
                        }), t8.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                        if (null != v) {
                            var m = a1.filter(function(e) {
                                return e.id === v;
                            });
                            if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                            m.length ? (t8.second = !0, t8.sibling = m[0]) : t8.first = !0;
                        }
                        var y = [
                            "tr",
                            "tl",
                            "br",
                            "bl",
                            "c"
                        ].some(function(e) {
                            return n4 === e;
                        });
                        if (n4 && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                        function p(e) {
                            throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                        }
                        if (t8.position = (function(e) {
                            var t = e[0], n = e[1], a = {
                            };
                            a[o1[t]] = 1, n && (a[o1[n]] = 1);
                            return a;
                        })(n4 || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                        d && (l > d && p("min"), i < d && p());
                        if ([
                            "onSelect",
                            "onShow",
                            "onHide",
                            "onMonthChange",
                            "formatter",
                            "disabler"
                        ].forEach(function(e) {
                            "function" != typeof t8[e] && (t8[e] = s1);
                        }), [
                            "customDays",
                            "customMonths",
                            "customOverlayMonths"
                        ].forEach(function(e10, n) {
                            var a = t8[e10], r = n ? 12 : 7;
                            if (a) {
                                if (!Array.isArray(a) || a.length !== r || a.some(function(e) {
                                    return "string" != typeof e;
                                })) throw new Error('"' + e10 + '" must be an array with ' + r + " strings.");
                                t8[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                            }
                        }), f && f > 0 && f < 7) {
                            var w = (t8.customDays || r1).slice(), D = w.splice(0, f);
                            t8.customDays = w.concat(D), t8.startDay = +f, t8.weekendIndices = [
                                w.length - 1,
                                w.length
                            ];
                        } else t8.startDay = 0, t8.weekendIndices = [
                            6,
                            0
                        ];
                        "string" != typeof u && delete t8.overlayPlaceholder;
                        "string" != typeof h && delete t8.overlayButton;
                        var q = t8.defaultView;
                        if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                        return t8.defaultView = q || "calendar", t8;
                    }(t7 || {
                        startDate: g1(new Date),
                        position: "bl",
                        defaultView: "calendar"
                    }), u2 = e8;
                    if ("string" == typeof u2) u2 = "#" === u2[0] ? document.getElementById(u2.slice(1)) : document.querySelector(u2);
                    else {
                        if ("[object ShadowRoot]" === x1(u2)) throw new Error("Using a shadow DOM as your selector is not supported.");
                        for(var h2, f2 = u2.parentNode; !h2;){
                            var v2 = x1(f2);
                            "[object HTMLDocument]" === v2 ? h2 = !0 : "[object ShadowRoot]" === v2 ? (h2 = !0, n3 = f2, l3 = f2.host) : f2 = f2.parentNode;
                        }
                    }
                    if (!u2) throw new Error("No selector / element found.");
                    if (a1.some(function(e) {
                        return e.el === u2;
                    })) throw new Error("A datepicker already exists on that element.");
                    var m2 = u2 === document.body, y2 = n3 ? u2.parentElement || n3 : m2 ? document.body : u2.parentElement, w2 = n3 ? u2.parentElement || l3 : y2, D2 = document.createElement("div"), q2 = document.createElement("div");
                    D2.className = "qs-datepicker-container qs-hidden", q2.className = "qs-datepicker";
                    var M = {
                        shadowDom: n3,
                        customElement: l3,
                        positionedEl: w2,
                        el: u2,
                        parent: y2,
                        nonInput: "INPUT" !== u2.nodeName,
                        noPosition: m2,
                        position: !m2 && d2.position,
                        startDate: d2.startDate,
                        dateSelected: d2.dateSelected,
                        disabledDates: d2.disabledDates,
                        minDate: d2.minDate,
                        maxDate: d2.maxDate,
                        noWeekends: !!d2.noWeekends,
                        weekendIndices: d2.weekendIndices,
                        calendarContainer: D2,
                        calendar: q2,
                        currentMonth: (d2.startDate || d2.dateSelected).getMonth(),
                        currentMonthName: (d2.months || i1)[(d2.startDate || d2.dateSelected).getMonth()],
                        currentYear: (d2.startDate || d2.dateSelected).getFullYear(),
                        events: d2.events || {
                        },
                        defaultView: d2.defaultView,
                        setDate: O1,
                        remove: R1,
                        setMin: N1,
                        setMax: _1,
                        show: P1,
                        hide: k1,
                        navigate: F,
                        toggleOverlay: B,
                        onSelect: d2.onSelect,
                        onShow: d2.onShow,
                        onHide: d2.onHide,
                        onMonthChange: d2.onMonthChange,
                        formatter: d2.formatter,
                        disabler: d2.disabler,
                        months: d2.months || i1,
                        days: d2.customDays || r1,
                        startDay: d2.startDay,
                        overlayMonths: d2.overlayMonths || (d2.months || i1).map(function(e) {
                            return e.slice(0, 3);
                        }),
                        overlayPlaceholder: d2.overlayPlaceholder || "4-digit year",
                        overlayButton: d2.overlayButton || "Submit",
                        disableYearOverlay: !!d2.disableYearOverlay,
                        disableMobile: !!d2.disableMobile,
                        isMobile: "ontouchstart" in window,
                        alwaysShow: !!d2.alwaysShow,
                        id: d2.id,
                        showAllDates: !!d2.showAllDates,
                        respectDisabledReadOnly: !!d2.respectDisabledReadOnly,
                        first: d2.first,
                        second: d2.second
                    };
                    if (d2.sibling) {
                        var E = d2.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                        C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, E.getRange = A1, C.getRange = A1;
                    }
                    d2.dateSelected && p1(u2, M);
                    var j = getComputedStyle(w2).position;
                    m2 || j && "static" !== j || (M.inlinePosition = !0, w2.style.setProperty("position", "relative"));
                    var I = a1.filter(function(e) {
                        return e.positionedEl === M.positionedEl;
                    });
                    I.some(function(e) {
                        return e.inlinePosition;
                    }) && (M.inlinePosition = !0, I.forEach(function(e) {
                        e.inlinePosition = !0;
                    }));
                    D2.appendChild(q2), y2.appendChild(D2), M.alwaysShow && S1(M);
                    return M;
                }(e7, t6);
                if (a1.length || d1(document), n2.shadowDom && (a1.some(function(e) {
                    return e.shadowDom === n2.shadowDom;
                }) || d1(n2.shadowDom)), a1.push(n2), n2.second) {
                    var l2 = n2.sibling;
                    y1({
                        instance: n2,
                        deselect: !n2.dateSelected
                    }), y1({
                        instance: l2,
                        deselect: !l2.dateSelected
                    }), u1(l2);
                }
                return u1(n2, n2.startDate || n2.dateSelected), n2.alwaysShow && D1(n2), n2;
            };
        }
    ]).default;
});

//# sourceMappingURL=index.9a3ecfbf.js.map
