"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Rivets.js + Sightglass.js
// version: 0.9.6
// author: Michael Richards
// license: MIT
(function () {
  function t(t, s, i, h) {
    return new e(t, s, i, h);
  }function e(t, e, i, h) {
    this.options = h || {}, this.options.adapters = this.options.adapters || {}, this.obj = t, this.keypath = e, this.callback = i, this.objectPath = [], this.update = this.update.bind(this), this.parse(), s(this.target = this.realize()) && this.set(!0, this.key, this.target, this.callback);
  }function s(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
  }function i(t) {
    throw new Error("[sightglass] " + t);
  }t.adapters = {}, e.tokenize = function (t, e, s) {
    var i,
        h,
        a = [],
        o = { i: s, path: "" };for (i = 0; i < t.length; i++) {
      h = t.charAt(i), ~e.indexOf(h) ? (a.push(o), o = { i: h, path: "" }) : o.path += h;
    }return a.push(o), a;
  }, e.prototype.parse = function () {
    var s,
        h,
        a = this.interfaces();a.length || i("Must define at least one adapter interface."), ~a.indexOf(this.keypath[0]) ? (s = this.keypath[0], h = this.keypath.substr(1)) : ("undefined" == typeof (s = this.options.root || t.root) && i("Must define a default root adapter."), h = this.keypath), this.tokens = e.tokenize(h, a, s), this.key = this.tokens.pop();
  }, e.prototype.realize = function () {
    var t,
        e = this.obj,
        i = !1;return this.tokens.forEach(function (h, a) {
      s(e) ? ("undefined" != typeof this.objectPath[a] ? e !== (t = this.objectPath[a]) && (this.set(!1, h, t, this.update), this.set(!0, h, e, this.update), this.objectPath[a] = e) : (this.set(!0, h, e, this.update), this.objectPath[a] = e), e = this.get(h, e)) : (i === !1 && (i = a), (t = this.objectPath[a]) && this.set(!1, h, t, this.update));
    }, this), i !== !1 && this.objectPath.splice(i), e;
  }, e.prototype.update = function () {
    var t, e;(t = this.realize()) !== this.target && (s(this.target) && this.set(!1, this.key, this.target, this.callback), s(t) && this.set(!0, this.key, t, this.callback), e = this.value(), this.target = t, (this.value() instanceof Function || this.value() !== e) && this.callback());
  }, e.prototype.value = function () {
    return s(this.target) ? this.get(this.key, this.target) : void 0;
  }, e.prototype.setValue = function (t) {
    s(this.target) && this.adapter(this.key).set(this.target, this.key.path, t);
  }, e.prototype.get = function (t, e) {
    return this.adapter(t).get(e, t.path);
  }, e.prototype.set = function (t, e, s, i) {
    var h = t ? "observe" : "unobserve";this.adapter(e)[h](s, e.path, i);
  }, e.prototype.interfaces = function () {
    var e = Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function (t) {
      ~e.indexOf(t) || e.push(t);
    }), e;
  }, e.prototype.adapter = function (e) {
    return this.options.adapters[e.i] || t.adapters[e.i];
  }, e.prototype.unobserve = function () {
    var t;this.tokens.forEach(function (e, s) {
      (t = this.objectPath[s]) && this.set(!1, e, t, this.update);
    }, this), s(this.target) && this.set(!1, this.key, this.target, this.callback);
  }, "undefined" != typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd ? define([], function () {
    return this.sightglass = t;
  }) : this.sightglass = t;
}).call(undefined);
(function () {
  var t,
      e,
      i,
      n,
      r,
      s = function s(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  },
      o = [].slice,
      u = {}.hasOwnProperty,
      l = function l(t, e) {
    function i() {
      this.constructor = t;
    }for (var n in e) {
      u.call(e, n) && (t[n] = e[n]);
    }return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
  },
      h = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) {
      if (e in this && this[e] === t) return e;
    }return -1;
  };t = { options: ["prefix", "templateDelimiters", "rootInterface", "preloadData", "handler", "executeFunctions"], extensions: ["binders", "formatters", "components", "adapters"], "public": { binders: {}, components: {}, formatters: {}, adapters: {}, prefix: "rv", templateDelimiters: ["{", "}"], rootInterface: ".", preloadData: !0, executeFunctions: !1, iterationAlias: function iterationAlias(t) {
        return "%" + t + "%";
      }, handler: function handler(t, e, i) {
        return this.call(t, e, i.view.models);
      }, configure: function configure(e) {
        var i, n, r, s;null == e && (e = {});for (r in e) {
          if (s = e[r], "binders" === r || "components" === r || "formatters" === r || "adapters" === r) for (n in s) {
            i = s[n], t[r][n] = i;
          } else t["public"][r] = s;
        }
      }, bind: function bind(e, i, n) {
        var r;return null == i && (i = {}), null == n && (n = {}), r = new t.View(e, i, n), r.bind(), r;
      }, init: function init(e, i, n) {
        var r, s, o;if (null == n && (n = {}), null == i && (i = document.createElement("div")), e = t["public"].components[e], s = e.template.call(this, i), s instanceof HTMLElement) {
          for (; i.firstChild;) {
            i.removeChild(i.firstChild);
          }i.appendChild(s);
        } else i.innerHTML = s;return r = e.initialize.call(this, i, n), o = new t.View(i, r), o.bind(), o;
      } } }, window.jQuery || window.$ ? (i = window.jQuery || window.$, r = "on" in i.prototype ? ["on", "off"] : ["bind", "unbind"], e = r[0], n = r[1], t.Util = { bindEvent: function bindEvent(t, n, r) {
      return i(t)[e](n, r);
    }, unbindEvent: function unbindEvent(t, e, r) {
      return i(t)[n](e, r);
    }, getInputValue: function getInputValue(t) {
      var e;return e = i(t), "checkbox" === e.attr("type") ? e.is(":checked") : e.val();
    } }) : t.Util = { bindEvent: function () {
      return "addEventListener" in window ? function (t, e, i) {
        return t.addEventListener(e, i, !1);
      } : function (t, e, i) {
        return t.attachEvent("on" + e, i);
      };
    }(), unbindEvent: function () {
      return "removeEventListener" in window ? function (t, e, i) {
        return t.removeEventListener(e, i, !1);
      } : function (t, e, i) {
        return t.detachEvent("on" + e, i);
      };
    }(), getInputValue: function getInputValue(t) {
      var e, i, n, r;if ("checkbox" === t.type) return t.checked;if ("select-multiple" === t.type) {
        for (r = [], i = 0, n = t.length; n > i; i++) {
          e = t[i], e.selected && r.push(e.value);
        }return r;
      }return t.value;
    } }, t.TypeParser = function () {
    function t() {}return t.types = { primitive: 0, keypath: 1 }, t.parse = function (t) {
      return (/^'.*'$|^".*"$/.test(t) ? { type: this.types.primitive, value: t.slice(1, -1) } : "true" === t ? { type: this.types.primitive, value: !0 } : "false" === t ? { type: this.types.primitive, value: !1 } : "null" === t ? { type: this.types.primitive, value: null } : "undefined" === t ? { type: this.types.primitive, value: void 0 } : "" === t ? { type: this.types.primitive, value: void 0 } : isNaN(Number(t)) === !1 ? { type: this.types.primitive, value: Number(t) } : { type: this.types.keypath, value: t }
      );
    }, t;
  }(), t.TextTemplateParser = function () {
    function t() {}return t.types = { text: 0, binding: 1 }, t.parse = function (t, e) {
      var i, n, r, s, o, u, l;for (u = [], s = t.length, i = 0, n = 0; s > n;) {
        if (i = t.indexOf(e[0], n), 0 > i) {
          u.push({ type: this.types.text, value: t.slice(n) });break;
        }if (i > 0 && i > n && u.push({ type: this.types.text, value: t.slice(n, i) }), n = i + e[0].length, i = t.indexOf(e[1], n), 0 > i) {
          o = t.slice(n - e[1].length), r = u[u.length - 1], (null != r ? r.type : void 0) === this.types.text ? r.value += o : u.push({ type: this.types.text, value: o });break;
        }l = t.slice(n, i).trim(), u.push({ type: this.types.binding, value: l }), n = i + e[1].length;
      }return u;
    }, t;
  }(), t.View = function () {
    function e(e, i, n) {
      var r, o, u, l, h, a, p, d, c, f, b, v, m;for (this.els = e, this.models = i, null == n && (n = {}), this.update = s(this.update, this), this.publish = s(this.publish, this), this.sync = s(this.sync, this), this.unbind = s(this.unbind, this), this.bind = s(this.bind, this), this.select = s(this.select, this), this.traverse = s(this.traverse, this), this.build = s(this.build, this), this.buildBinding = s(this.buildBinding, this), this.bindingRegExp = s(this.bindingRegExp, this), this.options = s(this.options, this), this.els.jquery || this.els instanceof Array || (this.els = [this.els]), c = t.extensions, h = 0, p = c.length; p > h; h++) {
        if (o = c[h], this[o] = {}, n[o]) {
          f = n[o];for (r in f) {
            u = f[r], this[o][r] = u;
          }
        }b = t["public"][o];for (r in b) {
          u = b[r], null == (l = this[o])[r] && (l[r] = u);
        }
      }for (v = t.options, a = 0, d = v.length; d > a; a++) {
        o = v[a], this[o] = null != (m = n[o]) ? m : t["public"][o];
      }this.build();
    }return e.prototype.options = function () {
      var e, i, n, r, s;for (i = {}, s = t.extensions.concat(t.options), n = 0, r = s.length; r > n; n++) {
        e = s[n], i[e] = this[e];
      }return i;
    }, e.prototype.bindingRegExp = function () {
      return new RegExp("^" + this.prefix + "-");
    }, e.prototype.buildBinding = function (e, i, n, r) {
      var s, o, u, l, h, a, p;return h = {}, p = function () {
        var t, e, i, n;for (i = r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g), n = [], t = 0, e = i.length; e > t; t++) {
          a = i[t], n.push(a.trim());
        }return n;
      }(), s = function () {
        var t, e, i, n;for (i = p.shift().split("<"), n = [], t = 0, e = i.length; e > t; t++) {
          o = i[t], n.push(o.trim());
        }return n;
      }(), l = s.shift(), h.formatters = p, (u = s.shift()) && (h.dependencies = u.split(/\s+/)), this.bindings.push(new t[e](this, i, n, l, h));
    }, e.prototype.build = function () {
      var e, i, n, r, s;for (this.bindings = [], i = function (e) {
        return function (n) {
          var r, s, o, u, l, h, a, p, d, c, f, b, v;if (3 === n.nodeType) {
            if (l = t.TextTemplateParser, (o = e.templateDelimiters) && (p = l.parse(n.data, o)).length && (1 !== p.length || p[0].type !== l.types.text)) {
              for (d = 0, f = p.length; f > d; d++) {
                a = p[d], h = document.createTextNode(a.value), n.parentNode.insertBefore(h, n), 1 === a.type && e.buildBinding("TextBinding", h, null, a.value);
              }n.parentNode.removeChild(n);
            }
          } else 1 === n.nodeType && (r = e.traverse(n));if (!r) for (v = function () {
            var t, e, i, r;for (i = n.childNodes, r = [], t = 0, e = i.length; e > t; t++) {
              u = i[t], r.push(u);
            }return r;
          }(), c = 0, b = v.length; b > c; c++) {
            s = v[c], i(s);
          }
        };
      }(this), s = this.els, n = 0, r = s.length; r > n; n++) {
        e = s[n], i(e);
      }this.bindings.sort(function (t, e) {
        var i, n;return ((null != (i = e.binder) ? i.priority : void 0) || 0) - ((null != (n = t.binder) ? n.priority : void 0) || 0);
      });
    }, e.prototype.traverse = function (e) {
      var i, n, r, s, o, u, l, h, a, p, d, c, f, b, v, m;for (s = this.bindingRegExp(), o = "SCRIPT" === e.nodeName || "STYLE" === e.nodeName, b = e.attributes, p = 0, c = b.length; c > p; p++) {
        if (i = b[p], s.test(i.name)) {
          if (h = i.name.replace(s, ""), !(r = this.binders[h])) {
            v = this.binders;for (u in v) {
              a = v[u], "*" !== u && -1 !== u.indexOf("*") && (l = new RegExp("^" + u.replace(/\*/g, ".+") + "$"), l.test(h) && (r = a));
            }
          }r || (r = this.binders["*"]), r.block && (o = !0, n = [i]);
        }
      }for (m = n || e.attributes, d = 0, f = m.length; f > d; d++) {
        i = m[d], s.test(i.name) && (h = i.name.replace(s, ""), this.buildBinding("Binding", e, h, i.value));
      }return o || (h = e.nodeName.toLowerCase(), this.components[h] && !e._bound && (this.bindings.push(new t.ComponentBinding(this, e, h)), o = !0)), o;
    }, e.prototype.select = function (t) {
      var e, i, n, r, s;for (r = this.bindings, s = [], i = 0, n = r.length; n > i; i++) {
        e = r[i], t(e) && s.push(e);
      }return s;
    }, e.prototype.bind = function () {
      var t, e, i, n;for (n = this.bindings, e = 0, i = n.length; i > e; e++) {
        t = n[e], t.bind();
      }
    }, e.prototype.unbind = function () {
      var t, e, i, n;for (n = this.bindings, e = 0, i = n.length; i > e; e++) {
        t = n[e], t.unbind();
      }
    }, e.prototype.sync = function () {
      var t, e, i, n;for (n = this.bindings, e = 0, i = n.length; i > e; e++) {
        t = n[e], "function" == typeof t.sync && t.sync();
      }
    }, e.prototype.publish = function () {
      var t, e, i, n;for (n = this.select(function (t) {
        var e;return null != (e = t.binder) ? e.publishes : void 0;
      }), e = 0, i = n.length; i > e; e++) {
        t = n[e], t.publish();
      }
    }, e.prototype.update = function (t) {
      var e, i, n, r, s, o;null == t && (t = {});for (i in t) {
        n = t[i], this.models[i] = n;
      }for (o = this.bindings, r = 0, s = o.length; s > r; r++) {
        e = o[r], "function" == typeof e.update && e.update(t);
      }
    }, e;
  }(), t.Binding = function () {
    function e(t, e, i, n, r) {
      this.view = t, this.el = e, this.type = i, this.keypath = n, this.options = null != r ? r : {}, this.getValue = s(this.getValue, this), this.update = s(this.update, this), this.unbind = s(this.unbind, this), this.bind = s(this.bind, this), this.publish = s(this.publish, this), this.sync = s(this.sync, this), this.set = s(this.set, this), this.eventHandler = s(this.eventHandler, this), this.formattedValue = s(this.formattedValue, this), this.parseFormatterArguments = s(this.parseFormatterArguments, this), this.parseTarget = s(this.parseTarget, this), this.observe = s(this.observe, this), this.setBinder = s(this.setBinder, this), this.formatters = this.options.formatters || [], this.dependencies = [], this.formatterObservers = {}, this.model = void 0, this.setBinder();
    }return e.prototype.setBinder = function () {
      var t, e, i, n;if (!(this.binder = this.view.binders[this.type])) {
        n = this.view.binders;for (t in n) {
          i = n[t], "*" !== t && -1 !== t.indexOf("*") && (e = new RegExp("^" + t.replace(/\*/g, ".+") + "$"), e.test(this.type) && (this.binder = i, this.args = new RegExp("^" + t.replace(/\*/g, "(.+)") + "$").exec(this.type), this.args.shift()));
        }
      }return this.binder || (this.binder = this.view.binders["*"]), this.binder instanceof Function ? this.binder = { routine: this.binder } : void 0;
    }, e.prototype.observe = function (e, i, n) {
      return t.sightglass(e, i, n, { root: this.view.rootInterface, adapters: this.view.adapters });
    }, e.prototype.parseTarget = function () {
      var e;return e = t.TypeParser.parse(this.keypath), e.type === t.TypeParser.types.primitive ? this.value = e.value : (this.observer = this.observe(this.view.models, this.keypath, this.sync), this.model = this.observer.target);
    }, e.prototype.parseFormatterArguments = function (e, i) {
      var n, r, s, o, u, l, h;for (e = function () {
        var i, n, s;for (s = [], i = 0, n = e.length; n > i; i++) {
          r = e[i], s.push(t.TypeParser.parse(r));
        }return s;
      }(), o = [], n = l = 0, h = e.length; h > l; n = ++l) {
        r = e[n], o.push(r.type === t.TypeParser.types.primitive ? r.value : ((u = this.formatterObservers)[i] || (u[i] = {}), (s = this.formatterObservers[i][n]) ? void 0 : (s = this.observe(this.view.models, r.value, this.sync), this.formatterObservers[i][n] = s), s.value()));
      }return o;
    }, e.prototype.formattedValue = function (t) {
      var e, i, n, r, s, u, l, h, a;for (h = this.formatters, i = u = 0, l = h.length; l > u; i = ++u) {
        n = h[i], e = n.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g), r = e.shift(), n = this.view.formatters[r], s = this.parseFormatterArguments(e, i), (null != n ? n.read : void 0) instanceof Function ? t = (a = n.read).call.apply(a, [this.model, t].concat(o.call(s))) : n instanceof Function && (t = n.call.apply(n, [this.model, t].concat(o.call(s))));
      }return t;
    }, e.prototype.eventHandler = function (t) {
      var e, i;return i = (e = this).view.handler, function (n) {
        return i.call(t, this, n, e);
      };
    }, e.prototype.set = function (e) {
      var i;return e = e instanceof Function && !this.binder["function"] && t["public"].executeFunctions ? this.formattedValue(e.call(this.model)) : this.formattedValue(e), null != (i = this.binder.routine) ? i.call(this, this.el, e) : void 0;
    }, e.prototype.sync = function () {
      var t, e;return this.set(function () {
        var i, n, r, s, o, u, l;if (this.observer) {
          if (this.model !== this.observer.target) {
            for (o = this.dependencies, i = 0, r = o.length; r > i; i++) {
              e = o[i], e.unobserve();
            }if (this.dependencies = [], null != (this.model = this.observer.target) && (null != (u = this.options.dependencies) ? u.length : void 0)) for (l = this.options.dependencies, n = 0, s = l.length; s > n; n++) {
              t = l[n], e = this.observe(this.model, t, this.sync), this.dependencies.push(e);
            }
          }return this.observer.value();
        }return this.value;
      }.call(this));
    }, e.prototype.publish = function () {
      var t, e, i, n, r, s, u, l, h, a, p, d, c;if (this.observer) {
        for (l = this.getValue(this.el), s = this.formatters.length - 1, p = this.formatters.slice(0).reverse(), i = h = 0, a = p.length; a > h; i = ++h) {
          n = p[i], e = s - i, t = n.split(/\s+/), r = t.shift(), u = this.parseFormatterArguments(t, e), (null != (d = this.view.formatters[r]) ? d.publish : void 0) && (l = (c = this.view.formatters[r]).publish.apply(c, [l].concat(o.call(u))));
        }return this.observer.setValue(l);
      }
    }, e.prototype.bind = function () {
      var t, e, i, n, r, s, o;if (this.parseTarget(), null != (r = this.binder.bind) && r.call(this, this.el), null != this.model && (null != (s = this.options.dependencies) ? s.length : void 0)) for (o = this.options.dependencies, i = 0, n = o.length; n > i; i++) {
        t = o[i], e = this.observe(this.model, t, this.sync), this.dependencies.push(e);
      }return this.view.preloadData ? this.sync() : void 0;
    }, e.prototype.unbind = function () {
      var t, e, i, n, r, s, o, u, l, h;for (null != (o = this.binder.unbind) && o.call(this, this.el), null != (u = this.observer) && u.unobserve(), l = this.dependencies, r = 0, s = l.length; s > r; r++) {
        n = l[r], n.unobserve();
      }this.dependencies = [], h = this.formatterObservers;for (i in h) {
        e = h[i];for (t in e) {
          n = e[t], n.unobserve();
        }
      }return this.formatterObservers = {};
    }, e.prototype.update = function (t) {
      var e, i;return null == t && (t = {}), this.model = null != (e = this.observer) ? e.target : void 0, null != (i = this.binder.update) ? i.call(this, t) : void 0;
    }, e.prototype.getValue = function (e) {
      return this.binder && null != this.binder.getValue ? this.binder.getValue.call(this, e) : t.Util.getInputValue(e);
    }, e;
  }(), t.ComponentBinding = function (e) {
    function i(e, i, n) {
      var r, o, u, l, a, p, d, c;for (this.view = e, this.el = i, this.type = n, this.unbind = s(this.unbind, this), this.bind = s(this.bind, this), this.locals = s(this.locals, this), this.component = this.view.components[this.type], this["static"] = {}, this.observers = {}, this.upstreamObservers = {}, o = e.bindingRegExp(), d = this.el.attributes || [], a = 0, p = d.length; p > a; a++) {
        r = d[a], o.test(r.name) || (u = this.camelCase(r.name), l = t.TypeParser.parse(r.value), h.call(null != (c = this.component["static"]) ? c : [], u) >= 0 ? this["static"][u] = r.value : l.type === t.TypeParser.types.primitive ? this["static"][u] = l.value : this.observers[u] = r.value);
      }
    }return l(i, e), i.prototype.sync = function () {}, i.prototype.update = function () {}, i.prototype.publish = function () {}, i.prototype.locals = function () {
      var t, e, i, n, r, s;i = {}, r = this["static"];for (t in r) {
        n = r[t], i[t] = n;
      }s = this.observers;for (t in s) {
        e = s[t], i[t] = e.value();
      }return i;
    }, i.prototype.camelCase = function (t) {
      return t.replace(/-([a-z])/g, function (t) {
        return t[1].toUpperCase();
      });
    }, i.prototype.bind = function () {
      var e, i, n, r, s, o, u, l, h, a, p, d, c, f, b, v, m, y, g, w;if (!this.bound) {
        f = this.observers;for (i in f) {
          n = f[i], this.observers[i] = this.observe(this.view.models, n, function (t) {
            return function (e) {
              return function () {
                return t.componentView.models[e] = t.observers[e].value();
              };
            };
          }(this).call(this, i));
        }this.bound = !0;
      }if (null != this.componentView) this.componentView.bind();else {
        for (this.el.innerHTML = this.component.template.call(this), u = this.component.initialize.call(this, this.el, this.locals()), this.el._bound = !0, o = {}, b = t.extensions, a = 0, d = b.length; d > a; a++) {
          if (s = b[a], o[s] = {}, this.component[s]) {
            v = this.component[s];for (e in v) {
              l = v[e], o[s][e] = l;
            }
          }m = this.view[s];for (e in m) {
            l = m[e], null == (h = o[s])[e] && (h[e] = l);
          }
        }for (y = t.options, p = 0, c = y.length; c > p; p++) {
          s = y[p], o[s] = null != (g = this.component[s]) ? g : this.view[s];
        }this.componentView = new t.View(Array.prototype.slice.call(this.el.childNodes), u, o), this.componentView.bind(), w = this.observers;for (i in w) {
          r = w[i], this.upstreamObservers[i] = this.observe(this.componentView.models, i, function (t) {
            return function (e, i) {
              return function () {
                return i.setValue(t.componentView.models[e]);
              };
            };
          }(this).call(this, i, r));
        }
      }
    }, i.prototype.unbind = function () {
      var t, e, i, n, r;i = this.upstreamObservers;for (t in i) {
        e = i[t], e.unobserve();
      }n = this.observers;for (t in n) {
        e = n[t], e.unobserve();
      }return null != (r = this.componentView) ? r.unbind.call(this) : void 0;
    }, i;
  }(t.Binding), t.TextBinding = function (t) {
    function e(t, e, i, n, r) {
      this.view = t, this.el = e, this.type = i, this.keypath = n, this.options = null != r ? r : {}, this.sync = s(this.sync, this), this.formatters = this.options.formatters || [], this.dependencies = [], this.formatterObservers = {};
    }return l(e, t), e.prototype.binder = { routine: function routine(t, e) {
        return t.data = null != e ? e : "";
      } }, e.prototype.sync = function () {
      return e.__super__.sync.apply(this, arguments);
    }, e;
  }(t.Binding), t["public"].binders.text = function (t, e) {
    return null != t.textContent ? t.textContent = null != e ? e : "" : t.innerText = null != e ? e : "";
  }, t["public"].binders.html = function (t, e) {
    return t.innerHTML = null != e ? e : "";
  }, t["public"].binders.show = function (t, e) {
    return t.style.display = e ? "" : "none";
  }, t["public"].binders.hide = function (t, e) {
    return t.style.display = e ? "none" : "";
  }, t["public"].binders.enabled = function (t, e) {
    return t.disabled = !e;
  }, t["public"].binders.disabled = function (t, e) {
    return t.disabled = !!e;
  }, t["public"].binders.checked = { publishes: !0, priority: 2e3, bind: function bind(e) {
      return t.Util.bindEvent(e, "change", this.publish);
    }, unbind: function unbind(e) {
      return t.Util.unbindEvent(e, "change", this.publish);
    }, routine: function routine(t, e) {
      var i;return t.checked = "radio" === t.type ? (null != (i = t.value) ? i.toString() : void 0) === (null != e ? e.toString() : void 0) : !!e;
    } }, t["public"].binders.unchecked = { publishes: !0, priority: 2e3, bind: function bind(e) {
      return t.Util.bindEvent(e, "change", this.publish);
    }, unbind: function unbind(e) {
      return t.Util.unbindEvent(e, "change", this.publish);
    }, routine: function routine(t, e) {
      var i;return t.checked = "radio" === t.type ? (null != (i = t.value) ? i.toString() : void 0) !== (null != e ? e.toString() : void 0) : !e;
    } }, t["public"].binders.value = { publishes: !0, priority: 3e3, bind: function bind(e) {
      return "INPUT" !== e.tagName || "radio" !== e.type ? (this.event = "SELECT" === e.tagName ? "change" : "input", t.Util.bindEvent(e, this.event, this.publish)) : void 0;
    }, unbind: function unbind(e) {
      return "INPUT" !== e.tagName || "radio" !== e.type ? t.Util.unbindEvent(e, this.event, this.publish) : void 0;
    }, routine: function routine(t, e) {
      var n, r, s, o, u, l, a;if ("INPUT" === t.tagName && "radio" === t.type) return t.setAttribute("value", e);if (null != window.jQuery) {
        if (t = i(t), (null != e ? e.toString() : void 0) !== (null != (o = t.val()) ? o.toString() : void 0)) return t.val(null != e ? e : "");
      } else if ("select-multiple" === t.type) {
        if (null != e) {
          for (a = [], r = 0, s = t.length; s > r; r++) {
            n = t[r], a.push(n.selected = (u = n.value, h.call(e, u) >= 0));
          }return a;
        }
      } else if ((null != e ? e.toString() : void 0) !== (null != (l = t.value) ? l.toString() : void 0)) return t.value = null != e ? e : "";
    } }, t["public"].binders["if"] = { block: !0, priority: 4e3, bind: function bind(t) {
      var e, i;return null == this.marker ? (e = [this.view.prefix, this.type].join("-").replace("--", "-"), i = t.getAttribute(e), this.marker = document.createComment(" rivets: " + this.type + " " + i + " "), this.bound = !1, t.removeAttribute(e), t.parentNode.insertBefore(this.marker, t), t.parentNode.removeChild(t)) : void 0;
    }, unbind: function unbind() {
      return this.nested ? (this.nested.unbind(), this.bound = !1) : void 0;
    }, routine: function routine(e, i) {
      var n, r, s, o;if (!!i == !this.bound) {
        if (i) {
          s = {}, o = this.view.models;for (n in o) {
            r = o[n], s[n] = r;
          }return (this.nested || (this.nested = new t.View(e, s, this.view.options()))).bind(), this.marker.parentNode.insertBefore(e, this.marker.nextSibling), this.bound = !0;
        }return e.parentNode.removeChild(e), this.nested.unbind(), this.bound = !1;
      }
    }, update: function update(t) {
      var e;return null != (e = this.nested) ? e.update(t) : void 0;
    } }, t["public"].binders.unless = { block: !0, priority: 4e3, bind: function bind(e) {
      return t["public"].binders["if"].bind.call(this, e);
    }, unbind: function unbind() {
      return t["public"].binders["if"].unbind.call(this);
    }, routine: function routine(e, i) {
      return t["public"].binders["if"].routine.call(this, e, !i);
    }, update: function update(e) {
      return t["public"].binders["if"].update.call(this, e);
    } }, t["public"].binders["on-*"] = { "function": !0, priority: 1e3, unbind: function unbind(e) {
      return this.handler ? t.Util.unbindEvent(e, this.args[0], this.handler) : void 0;
    }, routine: function routine(e, i) {
      return this.handler && t.Util.unbindEvent(e, this.args[0], this.handler), t.Util.bindEvent(e, this.args[0], this.handler = this.eventHandler(i));
    } }, t["public"].binders["each-*"] = { block: !0, priority: 4e3, bind: function bind(t) {
      var e, i, n, r, s;if (null == this.marker) e = [this.view.prefix, this.type].join("-").replace("--", "-"), this.marker = document.createComment(" rivets: " + this.type + " "), this.iterated = [], t.removeAttribute(e), t.parentNode.insertBefore(this.marker, t), t.parentNode.removeChild(t);else for (s = this.iterated, n = 0, r = s.length; r > n; n++) {
        i = s[n], i.bind();
      }
    }, unbind: function unbind() {
      var t, e, i, n;if (null != this.iterated) for (n = this.iterated, e = 0, i = n.length; i > e; e++) {
        t = n[e], t.unbind();
      }
    }, routine: function routine(e, i) {
      var n, r, s, o, u, l, h, a, p, d, c, f, b, v, m, y, g, w, k, x;if (h = this.args[0], i = i || [], this.iterated.length > i.length) for (w = Array(this.iterated.length - i.length), f = 0, m = w.length; m > f; f++) {
        s = w[f], c = this.iterated.pop(), c.unbind(), this.marker.parentNode.removeChild(c.els[0]);
      }for (o = b = 0, y = i.length; y > b; o = ++b) {
        if (l = i[o], r = { index: o }, r[t["public"].iterationAlias(h)] = o, r[h] = l, null == this.iterated[o]) {
          k = this.view.models;for (u in k) {
            l = k[u], null == r[u] && (r[u] = l);
          }p = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker, a = this.view.options(), a.preloadData = !0, d = e.cloneNode(!0), c = new t.View(d, r, a), c.bind(), this.iterated.push(c), this.marker.parentNode.insertBefore(d, p.nextSibling);
        } else this.iterated[o].models[h] !== l && this.iterated[o].update(r);
      }if ("OPTION" === e.nodeName) for (x = this.view.bindings, v = 0, g = x.length; g > v; v++) {
        n = x[v], n.el === this.marker.parentNode && "value" === n.type && n.sync();
      }
    }, update: function update(t) {
      var e, i, n, r, s, o, u;e = {};for (i in t) {
        n = t[i], i !== this.args[0] && (e[i] = n);
      }for (u = this.iterated, s = 0, o = u.length; o > s; s++) {
        r = u[s], r.update(e);
      }
    } }, t["public"].binders["class-*"] = function (t, e) {
    var i;return i = " " + t.className + " ", !e == (-1 !== i.indexOf(" " + this.args[0] + " ")) ? t.className = e ? "" + t.className + " " + this.args[0] : i.replace(" " + this.args[0] + " ", " ").trim() : void 0;
  }, t["public"].binders["*"] = function (t, e) {
    return null != e ? t.setAttribute(this.type, e) : t.removeAttribute(this.type);
  }, t["public"].formatters.call = function () {
    var t, e;return e = arguments[0], t = 2 <= arguments.length ? o.call(arguments, 1) : [], e.call.apply(e, [this].concat(o.call(t)));
  }, t["public"].adapters["."] = { id: "_rv", counter: 0, weakmap: {}, weakReference: function weakReference(t) {
      var e, i, n;return t.hasOwnProperty(this.id) || (e = this.counter++, Object.defineProperty(t, this.id, { value: e })), (i = this.weakmap)[n = t[this.id]] || (i[n] = { callbacks: {} });
    }, cleanupWeakReference: function cleanupWeakReference(t, e) {
      return Object.keys(t.callbacks).length || t.pointers && Object.keys(t.pointers).length ? void 0 : delete this.weakmap[e];
    }, stubFunction: function stubFunction(t, e) {
      var i, n, r;return n = t[e], i = this.weakReference(t), r = this.weakmap, t[e] = function () {
        var e, s, o, u, l, h, a, p, d, c;u = n.apply(t, arguments), a = i.pointers;for (o in a) {
          for (s = a[o], c = null != (p = null != (d = r[o]) ? d.callbacks[s] : void 0) ? p : [], l = 0, h = c.length; h > l; l++) {
            e = c[l], e();
          }
        }return u;
      };
    }, observeMutations: function observeMutations(t, e, i) {
      var n, r, s, o, u, l;if (Array.isArray(t)) {
        if (s = this.weakReference(t), null == s.pointers) for (s.pointers = {}, r = ["push", "pop", "shift", "unshift", "sort", "reverse", "splice"], u = 0, l = r.length; l > u; u++) {
          n = r[u], this.stubFunction(t, n);
        }if (null == (o = s.pointers)[e] && (o[e] = []), h.call(s.pointers[e], i) < 0) return s.pointers[e].push(i);
      }
    }, unobserveMutations: function unobserveMutations(t, e, i) {
      var n, r, s;return Array.isArray(t) && null != t[this.id] && (r = this.weakmap[t[this.id]]) && (s = r.pointers[e]) ? ((n = s.indexOf(i)) >= 0 && s.splice(n, 1), s.length || delete r.pointers[e], this.cleanupWeakReference(r, t[this.id])) : void 0;
    }, observe: function observe(t, e, i) {
      var n, r, s;return n = this.weakReference(t).callbacks, null == n[e] && (n[e] = [], r = Object.getOwnPropertyDescriptor(t, e), (null != r ? r.get : void 0) || (null != r ? r.set : void 0) || (s = t[e], Object.defineProperty(t, e, { enumerable: !0, get: function get() {
          return s;
        }, set: function (i) {
          return function (r) {
            var o, u, l, a, p;if (r !== s && (i.unobserveMutations(s, t[i.id], e), s = r, u = i.weakmap[t[i.id]])) {
              if (n = u.callbacks, n[e]) for (p = n[e].slice(), l = 0, a = p.length; a > l; l++) {
                o = p[l], h.call(n[e], o) >= 0 && o();
              }return i.observeMutations(r, t[i.id], e);
            }
          };
        }(this) }))), h.call(n[e], i) < 0 && n[e].push(i), this.observeMutations(t[e], t[this.id], e);
    }, unobserve: function unobserve(t, e, i) {
      var n, r, s;return (s = this.weakmap[t[this.id]]) && (n = s.callbacks[e]) ? ((r = n.indexOf(i)) >= 0 && (n.splice(r, 1), n.length || (delete s.callbacks[e], this.unobserveMutations(t[e], t[this.id], e))), this.cleanupWeakReference(s, t[this.id])) : void 0;
    }, get: function get(t, e) {
      return t[e];
    }, set: function set(t, e, i) {
      return t[e] = i;
    } }, t.factory = function (e) {
    return t.sightglass = e, t["public"]._ = t, t["public"];
  }, "object" == _typeof("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = t.factory(require("sightglass")) : "function" == typeof define && define.amd ? define(["sightglass"], function (e) {
    return this.rivets = t.factory(e);
  }) : this.rivets = t.factory(sightglass);
}).call(undefined);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (e, t) {
  'object' == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(undefined, function () {
  'use strict';
  function e(he) {
    var ce = he.offsetParent,
        ue = ce && ce.nodeName;return ue && 'BODY' !== ue && 'HTML' !== ue ? ce : window.document.documentElement;
  }function t(he, ce) {
    if (1 !== he.nodeType) return [];var ue = window.getComputedStyle(he, null);return ce ? ue[ce] : ue;
  }function o(he) {
    return 'HTML' === he.nodeName ? he : he.parentNode || he.host;
  }function r(he) {
    if (!he || -1 !== ['HTML', 'BODY', '#document'].indexOf(he.nodeName)) return window.document.body;
    var _t = t(he),
        ce = _t.overflow,
        ue = _t.overflowX,
        ge = _t.overflowY;

    return (/(auto|scroll)/.test(ce + ge + ue) ? he : r(o(he))
    );
  }function s(he) {
    var ce = he.nodeName;return 'BODY' === ce || 'HTML' === ce ? !1 : 'fixed' === t(he, 'position') || s(o(he));
  }function p(he) {
    var ce = e(he),
        ue = s(ce);return ue ? 'fixed' : 'absolute';
  }function f(he, ce) {
    var ue = 'x' === ce ? 'Left' : 'Top',
        ge = 'Left' == ue ? 'Right' : 'Bottom';return +he['border' + ue + 'Width'].split('px')[0] + +he['border' + ge + 'Width'].split('px')[0];
  }function d(he) {
    var ce = -1 !== navigator.appVersion.indexOf('MSIE 10');var ue = void 0;if (ce) try {
      ue = he.getBoundingClientRect();
    } catch (xe) {
      ue = {};
    } else ue = he.getBoundingClientRect();var ge = { left: ue.left, top: ue.top, right: ue.right, bottom: ue.bottom, width: ue.right - ue.left, height: ue.bottom - ue.top };if ('HTML' === he.nodeName && ce) {
      var _window$document$docu = window.document.documentElement,
          xe = _window$document$docu.scrollTop,
          ye = _window$document$docu.scrollLeft;
      ge.top -= xe, ge.bottom -= xe, ge.left -= ye, ge.right -= ye;
    }var be = ue.width - (he.clientWidth || ue.right - ue.left),
        we = ue.height - (he.clientHeight || ue.bottom - ue.top);if (be || we) {
      var _xe = t(he);be -= f(_xe, 'x'), we -= f(_xe, 'y');
    }return ge.right -= be, ge.width -= be, ge.bottom -= we, ge.height -= we, ge;
  }function l(he) {
    var ce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var ue = 'top' === ce ? 'scrollTop' : 'scrollLeft',
        ge = he.nodeName;if ('BODY' === ge || 'HTML' === ge) {
      var be = window.document.documentElement,
          we = window.document.scrollingElement || be;return we[ue];
    }return he[ue];
  }function m(he, ce) {
    var ue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var ge = l(ce, 'top'),
        be = l(ce, 'left'),
        we = ue ? -1 : 1;return he.top += ge * we, he.bottom += ge * we, he.left += be * we, he.right += be * we, he;
  }function h(he, ce) {
    var ue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var ge = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var be = r(ce),
        we = d(he),
        xe = d(ce);var ye = { top: we.top - xe.top, left: we.left - xe.left, bottom: we.top - xe.top + we.height, right: we.left - xe.left + we.width, width: we.width, height: we.height };ue && !ge ? ye = m(ye, be, !0) : e(he).contains(be) && 'BODY' !== be.nodeName && (ye = m(ye, ce));var ve = t(ce),
        Oe = +ve.borderTopWidth.split('px')[0],
        Ee = +ve.borderLeftWidth.split('px')[0];return ye.top -= Oe, ye.bottom -= Oe, ye.left -= Ee, ye.right -= Ee, ye;
  }function c() {
    var he = window.document.body,
        ce = window.document.documentElement;return { height: Math.max(he.scrollHeight, he.offsetHeight, ce.clientHeight, ce.scrollHeight, ce.offsetHeight), width: Math.max(he.scrollWidth, he.offsetWidth, ce.clientWidth, ce.scrollWidth, ce.offsetWidth) };
  }function u(he) {
    var ce = void 0;if ('HTML' === he.nodeName) {
      var _c = c(),
          ue = _c.width,
          ge = _c.height;

      ce = { width: ue, height: ge, left: 0, top: 0 };
    } else ce = { width: he.offsetWidth, height: he.offsetHeight, left: he.offsetLeft, top: he.offsetTop };return ce.right = ce.left + ce.width, ce.bottom = ce.top + ce.height, ce;
  }function g(he) {
    var ce = u(he);if ('HTML' !== he.nodeName) {
      var ue = e(he),
          ge = g(ue),
          be = { width: ce.offsetWidth, height: ce.offsetHeight, left: ce.left + ge.left, top: ce.top + ge.top, right: ce.right - ge.right, bottom: ce.bottom - ge.bottom };return be;
    }return ce;
  }function w(he) {
    var ce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var ue = r(he),
        ge = l(ue, ce);return -1 === ['BODY', 'HTML'].indexOf(ue.nodeName) ? ge + w(o(ue), ce) : ge;
  }function v(he, ce, ue) {
    var ge = { top: 0, left: 0 };var be = e(he);if ('viewport' === ue) {
      var _g = g(be),
          we = _g.left,
          xe = _g.top,
          _window$document$docu2 = window.document.documentElement,
          ye = _window$document$docu2.clientWidth,
          ve = _window$document$docu2.clientHeight;

      if ('fixed' === p(he)) ge.right = ye, ge.bottom = ve;else {
        var Oe = w(he, 'left'),
            Ee = w(he, 'top');ge = { top: 0 - xe, right: ye - we + Oe, bottom: ve - xe + Ee, left: 0 - we };
      }
    } else {
      var _we = void 0;if (_we = 'scrollParent' === ue ? r(o(he)) : 'window' === ue ? window.document.body : ue, 'BODY' === _we.nodeName) {
        var _c2 = c(),
            _xe2 = _c2.height,
            _ye = _c2.width;

        ge.right = _ye, ge.bottom = _xe2;
      } else ge = h(_we, be, s(he));
    }return ge.left += ce, ge.top += ce, ge.right -= ce, ge.bottom -= ce, ge;
  }function O(he, ce, ue) {
    if (-1 === he.indexOf('auto')) return he;var ge = v(ue, 0, 'scrollParent'),
        be = { top: ce.top - ge.top, right: ge.right - ce.right, bottom: ge.bottom - ce.bottom, left: ce.left - ge.left },
        we = Object.keys(be).sort(function (ye, ve) {
      return be[ve] - be[ye];
    })[0],
        xe = he.split('-')[1];return we + (xe ? '-' + xe : '');
  }function N(he, ce) {
    return Array.prototype.find ? he.find(ce) : he.filter(ce)[0];
  }function L(he, ce, ue) {
    if (Array.prototype.findIndex) return he.findIndex(function (be) {
      return be[ce] === ue;
    });var ge = N(he, function (be) {
      return be[ce] === ue;
    });return he.indexOf(ge);
  }function T(he) {
    return fe({}, he, { right: he.left + he.width, bottom: he.top + he.height });
  }function P(he) {
    var ce = window.getComputedStyle(he),
        ue = parseFloat(ce.marginTop) + parseFloat(ce.marginBottom),
        ge = parseFloat(ce.marginLeft) + parseFloat(ce.marginRight),
        be = { width: he.offsetWidth + ge, height: he.offsetHeight + ue };return be;
  }function B(he) {
    var ce = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return he.replace(/left|right|bottom|top/g, function (ue) {
      return ce[ue];
    });
  }function H(he, ce, ue, ge) {
    ge = ge.split('-')[0];var be = P(ce),
        we = { position: he, width: be.width, height: be.height },
        xe = -1 !== ['right', 'left'].indexOf(ge),
        ye = xe ? 'top' : 'left',
        ve = xe ? 'left' : 'top',
        Oe = xe ? 'height' : 'width',
        Ee = xe ? 'width' : 'height';return we[ye] = ue[ye] + ue[Oe] / 2 - be[Oe] / 2, we[ve] = ge === ve ? ue[ve] - be[Ee] : ue[B(ve)], we;
  }function W(he, ce, ue) {
    var ge = 'fixed' === he.position,
        be = he.isParentTransformed,
        we = e(ge && be ? ue : ce);return h(ue, we, ge, be);
  }function D(he) {
    var ce = [!1, 'ms', 'webkit', 'moz', 'o'],
        ue = he.charAt(0).toUpperCase() + he.slice(1);for (var ge = 0; ge < ce.length - 1; ge++) {
      var be = ce[ge],
          we = be ? '' + be + ue : he;if ('undefined' != typeof window.document.body.style[we]) return we;
    }return null;
  }function C(he) {
    return he && '[object Function]' === {}.toString.call(he);
  }function M(he, ce) {
    return he.some(function (_ref) {
      var ue = _ref.name,
          ge = _ref.enabled;
      return ge && ue === ce;
    });
  }function R(he, ce, ue) {
    var ge = N(he, function (_ref2) {
      var be = _ref2.name;
      return be === ce;
    });return !!ge && he.some(function (be) {
      return be.name === ue && be.enabled && be.order < ge.order;
    });
  }function A(he) {
    return '' !== he && !isNaN(parseFloat(he)) && isFinite(he);
  }function k(he) {
    return 'BODY' !== he.nodeName && ('none' !== t(he, 'transform') || (o(he) ? k(o(he)) : he));
  }function Y(he, ce) {
    return window.removeEventListener('resize', ce.updateBound), ce.scrollParents.forEach(function (ue) {
      ue.removeEventListener('scroll', ce.updateBound);
    }), ce.updateBound = null, ce.scrollParents = [], ce.scrollElement = null, ce.eventsEnabled = !1, ce;
  }function I(he, ce, ue) {
    var ge = void 0 === ue ? he : he.slice(0, L(he, 'name', ue));return ge.forEach(function (be) {
      be.enabled && C(be.function) && (ce = be.function(ce, be));
    }), ce;
  }function U(he, ce) {
    Object.keys(ce).forEach(function (ue) {
      var ge = ce[ue];!1 === ge ? he.removeAttribute(ue) : he.setAttribute(ue, ce[ue]);
    });
  }function q(he, ce) {
    Object.keys(ce).forEach(function (ue) {
      var ge = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(ue) && A(ce[ue]) && (ge = 'px'), he.style[ue] = ce[ue] + ge;
    });
  }function z(he, ce, ue, ge) {
    var be = 'BODY' === he.nodeName,
        we = be ? window : he;we.addEventListener(ce, ue, { passive: !0 }), be || z(r(we.parentNode), ce, ue, ge), ge.push(we);
  }function F(he, ce, ue, ge) {
    ue.updateBound = ge, window.addEventListener('resize', ue.updateBound, { passive: !0 });var be = r(he);return z(be, 'scroll', ue.updateBound, ue.scrollParents), ue.scrollElement = be, ue.eventsEnabled = !0, ue;
  }function X(he) {
    return 'end' === he ? 'start' : 'start' === he ? 'end' : he;
  }var te = ['native code', '[object MutationObserverConstructor]'];var oe = function oe(he) {
    return te.some(function (ce) {
      return -1 < (he || '').toString().indexOf(ce);
    });
  };var ie = 'undefined' != typeof window,
      re = ['Edge', 'Trident', 'Firefox'];var ne = 0;for (var he = 0; he < re.length; he += 1) {
    if (ie && 0 <= navigator.userAgent.indexOf(re[he])) {
      ne = 1;break;
    }
  }var se = ie && oe(window.MutationObserver);var pe = se ? function (he) {
    var ce = !1,
        ue = 0;var ge = document.createElement('span'),
        be = new MutationObserver(function () {
      he(), ce = !1;
    });return be.observe(ge, { attributes: !0 }), function () {
      ce || (ce = !0, ge.setAttribute('x-index', ue), ++ue);
    };
  } : function (he) {
    var ce = !1;return function () {
      ce || (ce = !0, setTimeout(function () {
        ce = !1, he();
      }, ne));
    };
  },
      fe = Object.assign || function (he) {
    for (var ue, ce = 1; ce < arguments.length; ce++) {
      for (var ge in ue = arguments[ce], ue) {
        Object.prototype.hasOwnProperty.call(ue, ge) && (he[ge] = ue[ge]);
      }
    }return he;
  };
  var me = function () {
    function me(he, ce) {
      var _this = this;

      var ue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, me);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      }, this.update = pe(this.update.bind(this)), this.options = fe({}, me.Defaults, ue), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = he.jquery ? he[0] : he, this.popper = ce.jquery ? ce[0] : ce, this.modifiers = Object.keys(me.Defaults.modifiers).map(function (be) {
        return fe({ name: be }, me.Defaults.modifiers[be]);
      }), this.modifiers = this.modifiers.map(function (be) {
        var we = ue.modifiers && ue.modifiers[be.name] || {};return fe({}, be, we);
      }), ue.modifiers && (this.options.modifiers = fe({}, me.Defaults.modifiers, ue.modifiers), Object.keys(ue.modifiers).forEach(function (be) {
        if (void 0 === me.Defaults.modifiers[be]) {
          var we = ue.modifiers[be];we.name = be, _this.modifiers.push(we);
        }
      })), this.state.position = p(this.reference), this.modifiers = this.modifiers.sort(function (be, we) {
        return be.order - we.order;
      }), this.modifiers.forEach(function (be) {
        be.enabled && C(be.onLoad) && be.onLoad(_this.reference, _this.popper, _this.options, be, _this.state);
      }), this.state.isParentTransformed = k(this.popper.parentNode), this.update();var ge = this.options.eventsEnabled;ge && this.enableEventListeners(), this.state.eventsEnabled = ge;
    }

    _createClass(me, [{
      key: 'update',
      value: function update() {
        if (!this.state.isDestroyed) {
          var _he = { instance: this, styles: {}, attributes: {}, flipped: !1, offsets: {} };this.state.position = p(this.reference), q(this.popper, { position: this.state.position }), _he.offsets.reference = W(this.state, this.popper, this.reference), _he.placement = O(this.options.placement, _he.offsets.reference, this.popper), _he.originalPlacement = this.options.placement, _he.offsets.popper = H(this.state, this.popper, _he.offsets.reference, _he.placement), _he = I(this.modifiers, _he), this.state.isCreated ? this.options.onUpdate(_he) : (this.state.isCreated = !0, this.options.onCreate(_he));
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this.state.isDestroyed = !0, M(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[D('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = Y(this.reference, this.state));
      }
    }]);

    return me;
  }();

  return me.Utils = { computeAutoPlacement: O, debounce: pe, findIndex: L, getBordersSize: f, getBoundaries: v, getBoundingClientRect: d, getClientRect: T, getOffsetParent: e, getOffsetRect: u, getOffsetRectRelativeToCustomParent: h, getOuterSizes: P, getParentNode: o, getPopperOffsets: H, getPosition: p, getReferenceOffsets: W, getScroll: l, getScrollParent: r, getStyleComputedProperty: t, getSupportedPropertyName: D, getTotalScroll: w, getWindowSizes: c, includeScroll: m, isFixed: s, isFunction: C, isModifierEnabled: M, isModifierRequired: R, isNative: oe, isNumeric: A, isTransformed: k, removeEventListeners: Y, runModifiers: I, setAttributes: U, setStyles: q, setupEventListeners: F }, me.placements = ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'], me.Defaults = { placement: 'bottom', eventsEnabled: !0, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, function: function _function(he) {
          var ce = he.placement,
              ue = ce.split('-')[0],
              ge = ce.split('-')[1];if (ge) {
            var be = he.offsets.reference,
                we = T(he.offsets.popper),
                xe = -1 !== ['bottom', 'top'].indexOf(ue),
                ye = xe ? 'left' : 'top',
                ve = xe ? 'width' : 'height',
                Oe = { start: _defineProperty({}, ye, be[ye]), end: _defineProperty({}, ye, be[ye] + be[ve] - we[ve]) };he.offsets.popper = fe({}, we, Oe[ge]);
          }return he;
        } }, offset: { order: 200, enabled: !0, function: function _function(he, ce) {
          var ue = he.placement,
              ge = he.offsets.popper;var be = void 0;return A(ce.offset) ? be = [ce.offset, 0] : (be = ce.offset.split(' '), be = be.map(function (we, xe) {
            var ye = we.match(/(\d*\.?\d*)(.*)/),
                ve = +ye[1],
                Oe = ye[2];var Ee = -1 !== ue.indexOf('right') || -1 !== ue.indexOf('left');1 === xe && (Ee = !Ee);var Se = Ee ? 'height' : 'width';if (0 === Oe.indexOf('%')) {
              var Ne = void 0;switch (Oe) {case '%p':
                  Ne = he.offsets.popper;break;case '%':case '$r':default:
                  Ne = he.offsets.reference;}var Le = T(Ne),
                  Te = Le[Se];return Te / 100 * ve;
            }if ('vh' === Oe || 'vw' === Oe) {
              var _Ne = void 0;return _Ne = 'vh' === Oe ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), _Ne / 100 * ve;
            }return 'px' === Oe ? +ve : +we;
          })), -1 === he.placement.indexOf('left') ? -1 === he.placement.indexOf('right') ? -1 === he.placement.indexOf('top') ? -1 !== he.placement.indexOf('bottom') && (ge.left += be[0], ge.top += be[1] || 0) : (ge.left += be[0], ge.top -= be[1] || 0) : (ge.top += be[0], ge.left += be[1] || 0) : (ge.top += be[0], ge.left -= be[1] || 0), he;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, function: function _function(he, ce) {
          var ue = ce.boundariesElement || e(he.instance.popper),
              ge = v(he.instance.popper, ce.padding, ue);ce.boundaries = ge;var be = ce.priority;var we = T(he.offsets.popper);var xe = {
            primary: function primary(ye) {
              var ve = we[ye];return we[ye] < ge[ye] && !ce.escapeWithReference && (ve = Math.max(we[ye], ge[ye])), _defineProperty({}, ye, ve);
            },
            secondary: function secondary(ye) {
              var ve = 'right' === ye ? 'left' : 'top';var Oe = we[ve];return we[ye] > ge[ye] && !ce.escapeWithReference && (Oe = Math.min(we[ve], ge[ye] - ('right' === ye ? we.width : we.height))), _defineProperty({}, ve, Oe);
            }
          };return be.forEach(function (ye) {
            var ve = -1 === ['left', 'top'].indexOf(ye) ? 'secondary' : 'primary';we = fe({}, we, xe[ve](ye));
          }), he.offsets.popper = we, he;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, function: function _function(he) {
          var ce = T(he.offsets.popper),
              ue = he.offsets.reference,
              ge = he.placement.split('-')[0],
              be = Math.floor,
              we = -1 !== ['top', 'bottom'].indexOf(ge),
              xe = we ? 'right' : 'bottom',
              ye = we ? 'left' : 'top',
              ve = we ? 'width' : 'height';return ce[xe] < be(ue[ye]) && (he.offsets.popper[ye] = be(ue[ye]) - ce[ve]), ce[ye] > be(ue[xe]) && (he.offsets.popper[ye] = be(ue[xe])), he;
        } }, arrow: { order: 500, enabled: !0, function: function _function(he, ce) {
          if (!R(he.instance.modifiers, 'arrow', 'keepTogether')) return console.warn('WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!'), he;var ue = ce.element;if ('string' == typeof ue) {
            if (ue = he.instance.popper.querySelector(ue), !ue) return he;
          } else if (!he.instance.popper.contains(ue)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), he;var ge = he.placement.split('-')[0],
              be = T(he.offsets.popper),
              we = he.offsets.reference,
              xe = -1 !== ['left', 'right'].indexOf(ge),
              ye = xe ? 'height' : 'width',
              ve = xe ? 'top' : 'left',
              Oe = xe ? 'left' : 'top',
              Ee = xe ? 'bottom' : 'right',
              Se = P(ue)[ye];we[Ee] - Se < be[ve] && (he.offsets.popper[ve] -= be[ve] - (we[Ee] - Se)), we[ve] + Se > be[Ee] && (he.offsets.popper[ve] += we[ve] + Se - be[Ee]);var Ne = we[ve] + we[ye] / 2 - Se / 2;var Le = Ne - T(he.offsets.popper)[ve];return Le = Math.max(Math.min(be[ye] - Se, Le), 0), he.arrowElement = ue, he.offsets.arrow = {}, he.offsets.arrow[ve] = Le, he.offsets.arrow[Oe] = '', he;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, function: function _function(he, ce) {
          if (M(he.instance.modifiers, 'inner')) return he;if (he.flipped && he.placement === he.originalPlacement) return he;var ue = v(he.instance.popper, ce.padding, ce.boundariesElement);var ge = he.placement.split('-')[0],
              be = B(ge),
              we = he.placement.split('-')[1] || '',
              xe = [];return xe = 'flip' === ce.behavior ? [ge, be] : ce.behavior, xe.forEach(function (ye, ve) {
            if (ge !== ye || xe.length === ve + 1) return he;ge = he.placement.split('-')[0], be = B(ge);var Oe = T(he.offsets.popper),
                Ee = he.offsets.reference,
                Se = Math.floor,
                Ne = 'left' === ge && Se(Oe.right) > Se(Ee.left) || 'right' === ge && Se(Oe.left) < Se(Ee.right) || 'top' === ge && Se(Oe.bottom) > Se(Ee.top) || 'bottom' === ge && Se(Oe.top) < Se(Ee.bottom),
                Le = Se(Oe.left) < Se(ue.left),
                Te = Se(Oe.right) > Se(ue.right),
                Pe = Se(Oe.top) < Se(ue.top),
                Be = Se(Oe.bottom) > Se(ue.bottom),
                He = 'left' === ge && Le || 'right' === ge && Te || 'top' === ge && Pe || 'bottom' === ge && Be,
                We = -1 !== ['top', 'bottom'].indexOf(ge),
                De = !!ce.flipVariations && (We && 'start' === we && Le || We && 'end' === we && Te || !We && 'start' === we && Pe || !We && 'end' === we && Be);(Ne || He || De) && (he.flipped = !0, (Ne || He) && (ge = xe[ve + 1]), De && (we = X(we)), he.placement = ge + (we ? '-' + we : ''), he.offsets.popper = H(he.instance.state.position, he.instance.popper, he.offsets.reference, he.placement), he = I(he.instance.modifiers, he, 'flip'));
          }), he;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, function: function _function(he) {
          var ce = he.placement,
              ue = ce.split('-')[0],
              ge = T(he.offsets.popper),
              be = T(he.offsets.reference),
              we = -1 !== ['left', 'right'].indexOf(ue),
              xe = -1 === ['top', 'left'].indexOf(ue);return ge[we ? 'left' : 'top'] = be[ce] - (xe ? ge[we ? 'width' : 'height'] : 0), he.placement = B(ce), he.offsets.popper = T(ge), he;
        } }, hide: { order: 800, enabled: !0, function: function _function(he) {
          if (!R(he.instance.modifiers, 'hide', 'preventOverflow')) return console.warn('WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!'), he;var ce = he.offsets.reference,
              ue = N(he.instance.modifiers, function (ge) {
            return 'preventOverflow' === ge.name;
          }).boundaries;if (ce.bottom < ue.top || ce.left > ue.right || ce.top > ue.bottom || ce.right < ue.left) {
            if (!0 === he.hide) return he;he.hide = !0, he.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === he.hide) return he;he.hide = !1, he.attributes['x-out-of-boundaries'] = !1;
          }return he;
        } }, applyStyle: { order: 900, enabled: !0, gpuAcceleration: !0, function: function _function(he, ce) {
          var ue = { position: he.offsets.popper.position },
              ge = { 'x-placement': he.placement },
              be = Math.round(he.offsets.popper.left),
              we = Math.round(he.offsets.popper.top),
              xe = D('transform');return ce.gpuAcceleration && xe ? (ue[xe] = 'translate3d(' + be + 'px, ' + we + 'px, 0)', ue.top = 0, ue.left = 0, ue.willChange = 'transform') : (ue.left = be, ue.top = we, ue.willChange = 'top, left'), q(he.instance.popper, fe({}, ue, he.styles)), U(he.instance.popper, fe({}, ge, he.attributes)), he.offsets.arrow && q(he.arrowElement, he.offsets.arrow), he;
        }, onLoad: function onLoad(he, ce, ue, ge, be) {
          var we = W(be, ce, he);return ue.placement = O(ue.placement, we, ce), ce.setAttribute('x-placement', ue.placement), ue;
        } } } }, me;
});

//# sourceMappingURL=popper.min.js.map
"use strict";

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");if (!o.element) throw new Error("No element option passed to Waypoint constructor");if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }var e = 0,
      i = {};t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t);
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function () {
    return this.enabled = !1, this;
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this;
  }, t.prototype.next = function () {
    return this.group.next(this);
  }, t.prototype.previous = function () {
    return this.group.previous(this);
  }, t.invokeAll = function (t) {
    var e = [];for (var o in i) {
      e.push(i[o]);
    }for (var n = 0, r = e.length; r > n; n++) {
      e[n][t]();
    }
  }, t.destroyAll = function () {
    t.invokeAll("destroy");
  }, t.disableAll = function () {
    t.invokeAll("disable");
  }, t.enableAll = function () {
    t.invokeAll("enable");
  }, t.refreshAll = function () {
    t.Context.refreshAll();
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    }, "right-in-view": function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    } }, window.Waypoint = t;
}(), function () {
  "use strict";
  function t(t) {
    window.setTimeout(t, 1e3 / 60);
  }function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";this.waypoints[e][t.key] = t, this.refresh();
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical);t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1;
    }var e = this;this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1;
    }var e = this;this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll();
  }, e.prototype.handleScroll = function () {
    var t = {},
        e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };for (var i in e) {
      var o = e[i],
          n = o.newScroll > o.oldScroll,
          r = n ? o.forward : o.backward;for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s],
            l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;(p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
      }
    }for (var c in t) {
      t[c].flushTriggers();
    }this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty();
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function () {
    var t = [];for (var e in this.waypoints) {
      for (var i in this.waypoints[e]) {
        t.push(this.waypoints[e][i]);
      }
    }for (var o = 0, n = t.length; n > o; o++) {
      t[o].destroy();
    }
  }, e.prototype.refresh = function () {
    var t,
        e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        o = {};this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };for (var r in t) {
      var s = t[r];for (var a in this.waypoints[r]) {
        var l,
            h,
            p,
            u,
            c,
            d = this.waypoints[r][a],
            f = d.options.offset,
            w = d.triggerPoint,
            y = 0,
            g = null == w;d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
      }
    }return n.requestAnimationFrame(function () {
      for (var t in o) {
        o[t].flushTriggers();
      }
    }), this;
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t);
  }, e.refreshAll = function () {
    for (var t in o) {
      o[t].refresh();
    }
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey];
  }, window.onload = function () {
    r && r(), e.refreshAll();
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;i.call(window, e);
  }, n.Context = e;
}(), function () {
  "use strict";
  function t(t, e) {
    return t.triggerPoint - e.triggerPoint;
  }function e(t, e) {
    return e.triggerPoint - t.triggerPoint;
  }function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
  }var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;i.prototype.add = function (t) {
    this.waypoints.push(t);
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = { up: [], down: [], left: [], right: [] };
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
          n = "up" === i || "left" === i;o.sort(n ? e : t);for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];(a.options.continuous || r === o.length - 1) && a.trigger([i]);
      }
    }this.clearTriggerQueues();
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);var i = n.Adapter.inArray(e, this.waypoints),
        o = i === this.waypoints.length - 1;return o ? null : this.waypoints[i + 1];
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);var i = n.Adapter.inArray(e, this.waypoints);return i ? this.waypoints[i - 1] : null;
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t);
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);e > -1 && this.waypoints.splice(e, 1);
  }, i.prototype.first = function () {
    return this.waypoints[0];
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t);
  }, n.Group = i;
}(), function () {
  "use strict";
  function t(t) {
    this.$element = e(t);
  }var e = window.jQuery,
      i = window.Waypoint;e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element, t);
    };
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o];
  }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t;
}(), function () {
  "use strict";
  function t(t) {
    return function () {
      var i = [],
          o = arguments[0];return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, { element: this });"string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
      }), i;
    };
  }var e = window.Waypoint;window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();
"use strict";

/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
var List = function (t) {
  function e(n) {
    if (r[n]) return r[n].exports;var i = r[n] = { i: n, l: !1, exports: {} };return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
  }var r = {};return e.m = t, e.c = r, e.i = function (t) {
    return t;
  }, e.d = function (t, r, n) {
    e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: n });
  }, e.n = function (t) {
    var r = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(r, "a", r), r;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 11);
}([function (t, e, r) {
  function n(t) {
    if (!t || !t.nodeType) throw new Error("A DOM element reference is required");this.el = t, this.list = t.classList;
  }var i = r(4),
      s = /\s+/;Object.prototype.toString;t.exports = function (t) {
    return new n(t);
  }, n.prototype.add = function (t) {
    if (this.list) return this.list.add(t), this;var e = this.array(),
        r = i(e, t);return ~r || e.push(t), this.el.className = e.join(" "), this;
  }, n.prototype.remove = function (t) {
    if (this.list) return this.list.remove(t), this;var e = this.array(),
        r = i(e, t);return ~r && e.splice(r, 1), this.el.className = e.join(" "), this;
  }, n.prototype.toggle = function (t, e) {
    return this.list ? ("undefined" != typeof e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this) : ("undefined" != typeof e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t), this);
  }, n.prototype.array = function () {
    var t = this.el.getAttribute("class") || "",
        e = t.replace(/^\s+|\s+$/g, ""),
        r = e.split(s);return "" === r[0] && r.shift(), r;
  }, n.prototype.has = n.prototype.contains = function (t) {
    return this.list ? this.list.contains(t) : !!~i(this.array(), t);
  };
}, function (t, e, r) {
  var n = window.addEventListener ? "addEventListener" : "attachEvent",
      i = window.removeEventListener ? "removeEventListener" : "detachEvent",
      s = "addEventListener" !== n ? "on" : "",
      a = r(5);e.bind = function (t, e, r, i) {
    t = a(t);for (var o = 0; o < t.length; o++) {
      t[o][n](s + e, r, i || !1);
    }
  }, e.unbind = function (t, e, r, n) {
    t = a(t);for (var o = 0; o < t.length; o++) {
      t[o][i](s + e, r, n || !1);
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    return function (e, r, n) {
      var i = this;this._values = {}, this.found = !1, this.filtered = !1;var s = function s(e, r, n) {
        if (void 0 === r) n ? i.values(e, n) : i.values(e);else {
          i.elm = r;var s = t.templater.get(i, e);i.values(s);
        }
      };this.values = function (e, r) {
        if (void 0 === e) return i._values;for (var n in e) {
          i._values[n] = e[n];
        }r !== !0 && t.templater.set(i, i.values());
      }, this.show = function () {
        t.templater.show(i);
      }, this.hide = function () {
        t.templater.hide(i);
      }, this.matching = function () {
        return t.filtered && t.searched && i.found && i.filtered || t.filtered && !t.searched && i.filtered || !t.filtered && t.searched && i.found || !t.filtered && !t.searched;
      }, this.visible = function () {
        return !(!i.elm || i.elm.parentNode != t.list);
      }, s(e, r, n);
    };
  };
}, function (t, e) {
  var r = function r(t, e, _r) {
    return _r ? t.getElementsByClassName(e)[0] : t.getElementsByClassName(e);
  },
      n = function n(t, e, r) {
    return e = "." + e, r ? t.querySelector(e) : t.querySelectorAll(e);
  },
      i = function i(t, e, r) {
    for (var n = [], i = "*", s = t.getElementsByTagName(i), a = s.length, o = new RegExp("(^|\\s)" + e + "(\\s|$)"), l = 0, u = 0; l < a; l++) {
      if (o.test(s[l].className)) {
        if (r) return s[l];n[u] = s[l], u++;
      }
    }return n;
  };t.exports = function () {
    return function (t, e, s, a) {
      return a = a || {}, a.test && a.getElementsByClassName || !a.test && document.getElementsByClassName ? r(t, e, s) : a.test && a.querySelector || !a.test && document.querySelector ? n(t, e, s) : i(t, e, s);
    };
  }();
}, function (t, e) {
  var r = [].indexOf;t.exports = function (t, e) {
    if (r) return t.indexOf(e);for (var n = 0; n < t.length; ++n) {
      if (t[n] === e) return n;
    }return -1;
  };
}, function (t, e) {
  function r(t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  }t.exports = function (t) {
    if ("undefined" == typeof t) return [];if (null === t) return [null];if (t === window) return [window];if ("string" == typeof t) return [t];if (r(t)) return t;if ("number" != typeof t.length) return [t];if ("function" == typeof t && t instanceof Function) return [t];for (var e = [], n = 0; n < t.length; n++) {
      (Object.prototype.hasOwnProperty.call(t, n) || n in t) && e.push(t[n]);
    }return e.length ? e : [];
  };
}, function (t, e) {
  t.exports = function (t) {
    return t = void 0 === t ? "" : t, t = null === t ? "" : t, t = t.toString();
  };
}, function (t, e) {
  t.exports = function (t) {
    for (var e, r = Array.prototype.slice.call(arguments, 1), n = 0; e = r[n]; n++) {
      if (e) for (var i in e) {
        t[i] = e[i];
      }
    }return t;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = function e(r, n, i) {
      var s = r.splice(0, 50);i = i || [], i = i.concat(t.add(s)), r.length > 0 ? setTimeout(function () {
        e(r, n, i);
      }, 1) : (t.update(), n(i));
    };return e;
  };
}, function (t, e) {
  t.exports = function (t) {
    return t.handlers.filterStart = t.handlers.filterStart || [], t.handlers.filterComplete = t.handlers.filterComplete || [], function (e) {
      if (t.trigger("filterStart"), t.i = 1, t.reset.filter(), void 0 === e) t.filtered = !1;else {
        t.filtered = !0;for (var r = t.items, n = 0, i = r.length; n < i; n++) {
          var s = r[n];e(s) ? s.filtered = !0 : s.filtered = !1;
        }
      }return t.update(), t.trigger("filterComplete"), t.visibleItems;
    };
  };
}, function (t, e, r) {
  var n = (r(0), r(1)),
      i = r(7),
      s = r(6),
      a = r(3),
      o = r(19);t.exports = function (t, e) {
    e = e || {}, e = i({ location: 0, distance: 100, threshold: .4, multiSearch: !0, searchClass: "fuzzy-search" }, e);var r = { search: function search(n, i) {
        for (var s = e.multiSearch ? n.replace(/ +$/, "").split(/ +/) : [n], a = 0, o = t.items.length; a < o; a++) {
          r.item(t.items[a], i, s);
        }
      }, item: function item(t, e, n) {
        for (var i = !0, s = 0; s < n.length; s++) {
          for (var a = !1, o = 0, l = e.length; o < l; o++) {
            r.values(t.values(), e[o], n[s]) && (a = !0);
          }a || (i = !1);
        }t.found = i;
      }, values: function values(t, r, n) {
        if (t.hasOwnProperty(r)) {
          var i = s(t[r]).toLowerCase();if (o(i, n, e)) return !0;
        }return !1;
      } };return n.bind(a(t.listContainer, e.searchClass), "keyup", function (e) {
      var n = e.target || e.srcElement;t.search(n.value, r.search);
    }), function (e, n) {
      t.search(e, n, r.search);
    };
  };
}, function (t, e, r) {
  var n = r(18),
      i = r(3),
      s = r(7),
      a = r(4),
      o = r(1),
      l = r(6),
      u = r(0),
      c = r(17),
      f = r(5);t.exports = function (t, e, h) {
    var d,
        v = this,
        m = r(2)(v),
        g = r(8)(v),
        p = r(12)(v);d = { start: function start() {
        v.listClass = "list", v.searchClass = "search", v.sortClass = "sort", v.page = 1e4, v.i = 1, v.items = [], v.visibleItems = [], v.matchingItems = [], v.searched = !1, v.filtered = !1, v.searchColumns = void 0, v.handlers = { updated: [] }, v.valueNames = [], v.utils = { getByClass: i, extend: s, indexOf: a, events: o, toString: l, naturalSort: n, classes: u, getAttribute: c, toArray: f }, v.utils.extend(v, e), v.listContainer = "string" == typeof t ? document.getElementById(t) : t, v.listContainer && (v.list = i(v.listContainer, v.listClass, !0), v.parse = r(13)(v), v.templater = r(16)(v), v.search = r(14)(v), v.filter = r(9)(v), v.sort = r(15)(v), v.fuzzySearch = r(10)(v, e.fuzzySearch), this.handlers(), this.items(), this.pagination(), v.update());
      }, handlers: function handlers() {
        for (var t in v.handlers) {
          v[t] && v.on(t, v[t]);
        }
      }, items: function items() {
        v.parse(v.list), void 0 !== h && v.add(h);
      }, pagination: function pagination() {
        if (void 0 !== e.pagination) {
          e.pagination === !0 && (e.pagination = [{}]), void 0 === e.pagination[0] && (e.pagination = [e.pagination]);for (var t = 0, r = e.pagination.length; t < r; t++) {
            p(e.pagination[t]);
          }
        }
      } }, this.reIndex = function () {
      v.items = [], v.visibleItems = [], v.matchingItems = [], v.searched = !1, v.filtered = !1, v.parse(v.list);
    }, this.toJSON = function () {
      for (var t = [], e = 0, r = v.items.length; e < r; e++) {
        t.push(v.items[e].values());
      }return t;
    }, this.add = function (t, e) {
      if (0 !== t.length) {
        if (e) return void g(t, e);var r = [],
            n = !1;void 0 === t[0] && (t = [t]);for (var i = 0, s = t.length; i < s; i++) {
          var a = null;n = v.items.length > v.page, a = new m(t[i], void 0, n), v.items.push(a), r.push(a);
        }return v.update(), r;
      }
    }, this.show = function (t, e) {
      return this.i = t, this.page = e, v.update(), v;
    }, this.remove = function (t, e, r) {
      for (var n = 0, i = 0, s = v.items.length; i < s; i++) {
        v.items[i].values()[t] == e && (v.templater.remove(v.items[i], r), v.items.splice(i, 1), s--, i--, n++);
      }return v.update(), n;
    }, this.get = function (t, e) {
      for (var r = [], n = 0, i = v.items.length; n < i; n++) {
        var s = v.items[n];s.values()[t] == e && r.push(s);
      }return r;
    }, this.size = function () {
      return v.items.length;
    }, this.clear = function () {
      return v.templater.clear(), v.items = [], v;
    }, this.on = function (t, e) {
      return v.handlers[t].push(e), v;
    }, this.off = function (t, e) {
      var r = v.handlers[t],
          n = a(r, e);return n > -1 && r.splice(n, 1), v;
    }, this.trigger = function (t) {
      for (var e = v.handlers[t].length; e--;) {
        v.handlers[t][e](v);
      }return v;
    }, this.reset = { filter: function filter() {
        for (var t = v.items, e = t.length; e--;) {
          t[e].filtered = !1;
        }return v;
      }, search: function search() {
        for (var t = v.items, e = t.length; e--;) {
          t[e].found = !1;
        }return v;
      } }, this.update = function () {
      var t = v.items,
          e = t.length;v.visibleItems = [], v.matchingItems = [], v.templater.clear();for (var r = 0; r < e; r++) {
        t[r].matching() && v.matchingItems.length + 1 >= v.i && v.visibleItems.length < v.page ? (t[r].show(), v.visibleItems.push(t[r]), v.matchingItems.push(t[r])) : t[r].matching() ? (v.matchingItems.push(t[r]), t[r].hide()) : t[r].hide();
      }return v.trigger("updated"), v;
    }, d.start();
  };
}, function (t, e, r) {
  var n = r(0),
      i = r(1),
      s = r(11);t.exports = function (t) {
    var e = function e(_e, i) {
      var s,
          o = t.matchingItems.length,
          l = t.i,
          u = t.page,
          c = Math.ceil(o / u),
          f = Math.ceil(l / u),
          h = i.innerWindow || 2,
          d = i.left || i.outerWindow || 0,
          v = i.right || i.outerWindow || 0;v = c - v, _e.clear();for (var m = 1; m <= c; m++) {
        var g = f === m ? "active" : "";r.number(m, d, v, f, h) ? (s = _e.add({ page: m, dotted: !1 })[0], g && n(s.elm).add(g), a(s.elm, m, u)) : r.dotted(_e, m, d, v, f, h, _e.size()) && (s = _e.add({ page: "...", dotted: !0 })[0], n(s.elm).add("disabled"));
      }
    },
        r = { number: function number(t, e, r, n, i) {
        return this.left(t, e) || this.right(t, r) || this.innerWindow(t, n, i);
      }, left: function left(t, e) {
        return t <= e;
      }, right: function right(t, e) {
        return t > e;
      }, innerWindow: function innerWindow(t, e, r) {
        return t >= e - r && t <= e + r;
      }, dotted: function dotted(t, e, r, n, i, s, a) {
        return this.dottedLeft(t, e, r, n, i, s) || this.dottedRight(t, e, r, n, i, s, a);
      }, dottedLeft: function dottedLeft(t, e, r, n, i, s) {
        return e == r + 1 && !this.innerWindow(e, i, s) && !this.right(e, n);
      }, dottedRight: function dottedRight(t, e, r, n, i, s, a) {
        return !t.items[a - 1].values().dotted && e == n && !this.innerWindow(e, i, s) && !this.right(e, n);
      } },
        a = function a(e, r, n) {
      i.bind(e, "click", function () {
        t.show((r - 1) * n + 1, n);
      });
    };return function (r) {
      var n = new s(t.listContainer.id, { listClass: r.paginationClass || "pagination", item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>", valueNames: ["page", "dotted"], searchClass: "pagination-search-that-is-not-supposed-to-exist", sortClass: "pagination-sort-that-is-not-supposed-to-exist" });t.on("updated", function () {
        e(n, r);
      }), e(n, r);
    };
  };
}, function (t, e, r) {
  t.exports = function (t) {
    var e = r(2)(t),
        n = function n(t) {
      for (var e = t.childNodes, r = [], n = 0, i = e.length; n < i; n++) {
        void 0 === e[n].data && r.push(e[n]);
      }return r;
    },
        i = function i(r, n) {
      for (var i = 0, s = r.length; i < s; i++) {
        t.items.push(new e(n, r[i]));
      }
    },
        s = function s(e, r) {
      var n = e.splice(0, 50);i(n, r), e.length > 0 ? setTimeout(function () {
        s(e, r);
      }, 1) : (t.update(), t.trigger("parseComplete"));
    };return t.handlers.parseComplete = t.handlers.parseComplete || [], function () {
      var e = n(t.list),
          r = t.valueNames;t.indexAsync ? s(e, r) : i(e, r);
    };
  };
}, function (t, e) {
  t.exports = function (t) {
    var e,
        r,
        n,
        i,
        s = { resetList: function resetList() {
        t.i = 1, t.templater.clear(), i = void 0;
      }, setOptions: function setOptions(t) {
        2 == t.length && t[1] instanceof Array ? r = t[1] : 2 == t.length && "function" == typeof t[1] ? (r = void 0, i = t[1]) : 3 == t.length ? (r = t[1], i = t[2]) : r = void 0;
      }, setColumns: function setColumns() {
        0 !== t.items.length && void 0 === r && (r = void 0 === t.searchColumns ? s.toArray(t.items[0].values()) : t.searchColumns);
      }, setSearchString: function setSearchString(e) {
        e = t.utils.toString(e).toLowerCase(), e = e.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), n = e;
      }, toArray: function toArray(t) {
        var e = [];for (var r in t) {
          e.push(r);
        }return e;
      } },
        a = { list: function list() {
        for (var e = 0, r = t.items.length; e < r; e++) {
          a.item(t.items[e]);
        }
      }, item: function item(t) {
        t.found = !1;for (var e = 0, n = r.length; e < n; e++) {
          if (a.values(t.values(), r[e])) return void (t.found = !0);
        }
      }, values: function values(r, i) {
        return !!(r.hasOwnProperty(i) && (e = t.utils.toString(r[i]).toLowerCase(), "" !== n && e.search(n) > -1));
      }, reset: function reset() {
        t.reset.search(), t.searched = !1;
      } },
        o = function o(e) {
      return t.trigger("searchStart"), s.resetList(), s.setSearchString(e), s.setOptions(arguments), s.setColumns(), "" === n ? a.reset() : (t.searched = !0, i ? i(n, r) : a.list()), t.update(), t.trigger("searchComplete"), t.visibleItems;
    };return t.handlers.searchStart = t.handlers.searchStart || [], t.handlers.searchComplete = t.handlers.searchComplete || [], t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function (e) {
      var r = e.target || e.srcElement,
          n = "" === r.value && !t.searched;n || o(r.value);
    }), t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function (t) {
      var e = t.target || t.srcElement;"" === e.value && o("");
    }), o;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = { els: void 0, clear: function clear() {
        for (var r = 0, n = e.els.length; r < n; r++) {
          t.utils.classes(e.els[r]).remove("asc"), t.utils.classes(e.els[r]).remove("desc");
        }
      }, getOrder: function getOrder(e) {
        var r = t.utils.getAttribute(e, "data-order");return "asc" == r || "desc" == r ? r : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc";
      }, getInSensitive: function getInSensitive(e, r) {
        var n = t.utils.getAttribute(e, "data-insensitive");"false" === n ? r.insensitive = !1 : r.insensitive = !0;
      }, setOrder: function setOrder(r) {
        for (var n = 0, i = e.els.length; n < i; n++) {
          var s = e.els[n];if (t.utils.getAttribute(s, "data-sort") === r.valueName) {
            var a = t.utils.getAttribute(s, "data-order");"asc" == a || "desc" == a ? a == r.order && t.utils.classes(s).add(r.order) : t.utils.classes(s).add(r.order);
          }
        }
      } },
        r = function r() {
      t.trigger("sortStart");var r = {},
          n = arguments[0].currentTarget || arguments[0].srcElement || void 0;n ? (r.valueName = t.utils.getAttribute(n, "data-sort"), e.getInSensitive(n, r), r.order = e.getOrder(n)) : (r = arguments[1] || r, r.valueName = arguments[0], r.order = r.order || "asc", r.insensitive = "undefined" == typeof r.insensitive || r.insensitive), e.clear(), e.setOrder(r);var i,
          s = r.sortFunction || t.sortFunction || null,
          a = "desc" === r.order ? -1 : 1;i = s ? function (t, e) {
        return s(t, e, r) * a;
      } : function (e, n) {
        var i = t.utils.naturalSort;return i.alphabet = t.alphabet || r.alphabet || void 0, !i.alphabet && r.insensitive && (i = t.utils.naturalSort.caseInsensitive), i(e.values()[r.valueName], n.values()[r.valueName]) * a;
      }, t.items.sort(i), t.update(), t.trigger("sortComplete");
    };return t.handlers.sortStart = t.handlers.sortStart || [], t.handlers.sortComplete = t.handlers.sortComplete || [], e.els = t.utils.getByClass(t.listContainer, t.sortClass), t.utils.events.bind(e.els, "click", r), t.on("searchStart", e.clear), t.on("filterStart", e.clear), r;
  };
}, function (t, e) {
  var r = function r(t) {
    var e,
        r = this,
        n = function n() {
      e = r.getItemSource(t.item), e && (e = r.clearSourceItem(e, t.valueNames));
    };this.clearSourceItem = function (e, r) {
      for (var n = 0, i = r.length; n < i; n++) {
        var s;if (r[n].data) for (var a = 0, o = r[n].data.length; a < o; a++) {
          e.setAttribute("data-" + r[n].data[a], "");
        } else r[n].attr && r[n].name ? (s = t.utils.getByClass(e, r[n].name, !0), s && s.setAttribute(r[n].attr, "")) : (s = t.utils.getByClass(e, r[n], !0), s && (s.innerHTML = ""));s = void 0;
      }return e;
    }, this.getItemSource = function (e) {
      if (void 0 === e) {
        for (var r = t.list.childNodes, n = 0, i = r.length; n < i; n++) {
          if (void 0 === r[n].data) return r[n].cloneNode(!0);
        }
      } else {
        if (/<tr[\s>]/g.exec(e)) {
          var s = document.createElement("tbody");return s.innerHTML = e, s.firstChild;
        }if (e.indexOf("<") !== -1) {
          var a = document.createElement("div");return a.innerHTML = e, a.firstChild;
        }var o = document.getElementById(t.item);if (o) return o;
      }
    }, this.get = function (e, n) {
      r.create(e);for (var i = {}, s = 0, a = n.length; s < a; s++) {
        var o;if (n[s].data) for (var l = 0, u = n[s].data.length; l < u; l++) {
          i[n[s].data[l]] = t.utils.getAttribute(e.elm, "data-" + n[s].data[l]);
        } else n[s].attr && n[s].name ? (o = t.utils.getByClass(e.elm, n[s].name, !0), i[n[s].name] = o ? t.utils.getAttribute(o, n[s].attr) : "") : (o = t.utils.getByClass(e.elm, n[s], !0), i[n[s]] = o ? o.innerHTML : "");o = void 0;
      }return i;
    }, this.set = function (e, n) {
      var i = function i(e) {
        for (var r = 0, n = t.valueNames.length; r < n; r++) {
          if (t.valueNames[r].data) {
            for (var i = t.valueNames[r].data, s = 0, a = i.length; s < a; s++) {
              if (i[s] === e) return { data: e };
            }
          } else {
            if (t.valueNames[r].attr && t.valueNames[r].name && t.valueNames[r].name == e) return t.valueNames[r];if (t.valueNames[r] === e) return e;
          }
        }
      },
          s = function s(r, n) {
        var s,
            a = i(r);a && (a.data ? e.elm.setAttribute("data-" + a.data, n) : a.attr && a.name ? (s = t.utils.getByClass(e.elm, a.name, !0), s && s.setAttribute(a.attr, n)) : (s = t.utils.getByClass(e.elm, a, !0), s && (s.innerHTML = n)), s = void 0);
      };if (!r.create(e)) for (var a in n) {
        n.hasOwnProperty(a) && s(a, n[a]);
      }
    }, this.create = function (t) {
      if (void 0 !== t.elm) return !1;if (void 0 === e) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n = e.cloneNode(!0);return n.removeAttribute("id"), t.elm = n, r.set(t, t.values()), !0;
    }, this.remove = function (e) {
      e.elm.parentNode === t.list && t.list.removeChild(e.elm);
    }, this.show = function (e) {
      r.create(e), t.list.appendChild(e.elm);
    }, this.hide = function (e) {
      void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm);
    }, this.clear = function () {
      if (t.list.hasChildNodes()) for (; t.list.childNodes.length >= 1;) {
        t.list.removeChild(t.list.firstChild);
      }
    }, n();
  };t.exports = function (t) {
    return new r(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    var r = t.getAttribute && t.getAttribute(e) || null;if (!r) for (var n = t.attributes, i = n.length, s = 0; s < i; s++) {
      void 0 !== e[s] && e[s].nodeName === e && (r = e[s].nodeValue);
    }return r;
  };
}, function (t, e, r) {
  "use strict";
  function n(t) {
    return t >= 48 && t <= 57;
  }function i(t, e) {
    for (var r = (t += "").length, i = (e += "").length, s = 0, l = 0; s < r && l < i;) {
      var u = t.charCodeAt(s),
          c = e.charCodeAt(l);if (n(u)) {
        if (!n(c)) return u - c;for (var f = s, h = l; 48 === u && ++f < r;) {
          u = t.charCodeAt(f);
        }for (; 48 === c && ++h < i;) {
          c = e.charCodeAt(h);
        }for (var d = f, v = h; d < r && n(t.charCodeAt(d));) {
          ++d;
        }for (; v < i && n(e.charCodeAt(v));) {
          ++v;
        }var m = d - f - v + h;if (m) return m;for (; f < d;) {
          if (m = t.charCodeAt(f++) - e.charCodeAt(h++)) return m;
        }s = d, l = v;
      } else {
        if (u !== c) return u < o && c < o && a[u] !== -1 && a[c] !== -1 ? a[u] - a[c] : u - c;++s, ++l;
      }
    }return r - i;
  }var s,
      a,
      o = 0;i.caseInsensitive = i.i = function (t, e) {
    return i(("" + t).toLowerCase(), ("" + e).toLowerCase());
  }, Object.defineProperties(i, { alphabet: { get: function get() {
        return s;
      }, set: function set(t) {
        s = t, a = [];var e = 0;if (s) for (; e < s.length; e++) {
          a[s.charCodeAt(e)] = e;
        }for (o = a.length, e = 0; e < o; e++) {
          void 0 === a[e] && (a[e] = -1);
        }
      } } }), t.exports = i;
}, function (t, e) {
  t.exports = function (t, e, r) {
    function n(t, r) {
      var n = t / e.length,
          i = Math.abs(o - r);return s ? n + i / s : i ? 1 : n;
    }var i = r.location || 0,
        s = r.distance || 100,
        a = r.threshold || .4;if (e === t) return !0;if (e.length > 32) return !1;var o = i,
        l = function () {
      var t,
          r = {};for (t = 0; t < e.length; t++) {
        r[e.charAt(t)] = 0;
      }for (t = 0; t < e.length; t++) {
        r[e.charAt(t)] |= 1 << e.length - t - 1;
      }return r;
    }(),
        u = a,
        c = t.indexOf(e, o);c != -1 && (u = Math.min(n(0, c), u), c = t.lastIndexOf(e, o + e.length), c != -1 && (u = Math.min(n(0, c), u)));var f = 1 << e.length - 1;c = -1;for (var h, d, v, m = e.length + t.length, g = 0; g < e.length; g++) {
      for (h = 0, d = m; h < d;) {
        n(g, o + d) <= u ? h = d : m = d, d = Math.floor((m - h) / 2 + h);
      }m = d;var p = Math.max(1, o - d + 1),
          C = Math.min(o + d, t.length) + e.length,
          y = Array(C + 2);y[C + 1] = (1 << g) - 1;for (var b = C; b >= p; b--) {
        var w = l[t.charAt(b - 1)];if (0 === g ? y[b] = (y[b + 1] << 1 | 1) & w : y[b] = (y[b + 1] << 1 | 1) & w | ((v[b + 1] | v[b]) << 1 | 1) | v[b + 1], y[b] & f) {
          var x = n(g, b - 1);if (x <= u) {
            if (u = x, c = b - 1, !(c > o)) break;p = Math.max(1, 2 * o - c);
          }
        }
      }if (n(g + 1, o) > u) break;v = y;
    }return !(c < 0);
  };
}]);
//THIS FILE PULLS IN ALL OF THE JAVASCRIPT DEPENDENCIES AND THE MODELS FOR EACH FUNCTIONAL AREA
"use strict";
'use strict';

function formatprice(amt) {
	if (amt === 0) return 0;else if (!amt) return null;

	var price;

	if ($('#js--body').hasClass('INR')) price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1<span class="divider"></span>');else price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '<span class="divider"></span>');

	return price;
};

rivets.formatters.price = function (value) {
	return formatprice(value);
};

rivets.formatters.compare = function (value, comparisons) {
	if (typeof value == "undefined" || typeof comparisons == "undefined") return false;

	if (typeof comparisons == "string") {
		var args = comparisons.split(',');
		if (args.includes(value)) return true;
	} else if (comparisons === value) return true;

	return false;
};

rivets.binders.addtextclass = function (el, value) {
	if (value === "") return false;
	$(el).removeClass().addClass('s-' + value);
};

rivets.binders.percenttowidth = function (el, value) {
	$(el).css({ 'transform': "scaleX(" + value / 100 + ")" });
};

rivets.binders.sortclasses = function (el, value) {
	var thiscolumn = $(el).data('column');
	var direction = dataObject.sortdirection;
	$(el).removeClass('s-active-sort s-sort-asc s-sort-desc');

	if (value === thiscolumn) $(el).addClass('s-active-sort s-sort-' + direction);
};

rivets.formatters.indexof = function (list, item) {
	console.log(list, item);
	if (list.indexOf(item) >= 0) return true;else return false;
};

rivets.formatters.divide = function (value, divisor) {
	return Math.floor(value / divisor * 100);
};

rivets.formatters.lengthToBool = function (value) {
	if (typeof value === 'undefined') return false;
	if (value.length === 0) return false;
	return true;
};

rivets.formatters.length = function (value) {
	if (typeof value === 'undefined') return 0;
	return value.length;
};

rivets.formatters.invert = function (value) {
	console.log(value);
	if (typeof value != "undefined") return false;
	return true;
};

rivets.formatters.propertyList = function (obj) {
	return function () {
		var properties = [];
		for (key in obj) {
			properties.push({ key: key, value: obj[key] });
		}
		return properties;
	};
};
"use strict";

var lotlist = [{
	"lotNumber": "2741",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp1.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false
}, {
	"lotNumber": "2745",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": [{ "src": "assets/img/vramp1.jpg" }],
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp5.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false
}, {
	"lotNumber": "2745A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/no-photo.jpg",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"unused": true
}, {
	"lotNumber": "2743",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2012 Manitou 4x4 Bucket Lift #2",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "90000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift #3",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "110000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2742",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2743",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2012 Manitou 4x4 Bucket Lift #2",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "90000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift #3",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "110000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2742",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2743",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2012 Manitou 4x4 Bucket Lift #2",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "90000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift #3",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "110000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2744",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift #3",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "110000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "out",
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2746",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": "sold",
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2747",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2749",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2750",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2751",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "27444A",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2753",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2754",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp4.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2755",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2756",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2757",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2758",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2759",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2760",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2761",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2762",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2763",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2764",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2765",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2766",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2767",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2768",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2769",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2770",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2771",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2772",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2773",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2774",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2775",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2776",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2777",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2778",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2779",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2780",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2781",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2782",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2783",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2784",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2785",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2786",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2787",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2788",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2789",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2012 Manitou 4x4 Bucket Lift for Liam",
	"photo": "assets/img/vramp2.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "100000 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2790",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}, {
	"lotNumber": "2791",
	"equipid": '1234567890A',
	"updated": '12/04/2017 3:55PM',
	"notes": '',
	"video": false,
	"status": null,
	"description": "2008 Manitou 4x4 Bucket Lift",
	"photo": "assets/img/vramp3.png",
	"photos": [{ "src": "assets/img/vramp1.jpg" }, { "src": "assets/img/vramp2.jpg" }, { "src": "assets/img/vramp3.jpg" }, { "src": "assets/img/vramp4.jpg" }],
	"usage": "4756 hrs",
	"comeswith": "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
	"unused": false,
	"active": false
}];
'use strict';

$(function () {
	medialist = new List('js-media-list', listOptions);
	medialist.sort(dataObject.sortedColumn, { order: dataObject.sortdirection });

	var waypoint = new Waypoint({
		element: $('.js-header-waypoint'),
		handler: function handler(direction) {
			$('.js-sticky-header').toggleClass('s-fixed');
		}
	});

	var reference = $('.my-button');
	var popper = $('.js-filter-popup');
	var anotherPopper = new Popper(reference, popper, {
		placement: 'bottom-start'
	});
});

var medialist;
var listOptions = {
	valueNames: ["js-lotnumber", "js-lotequipid", "js-lotvideo", "js-lotphoto", "js-lotnotes", "js-lotflagged", "js-lotupdated"]
};

var dataObject = {
	getOtherSalesVisible: false,
	dataCenterSwitchVisible: false,
	deleteEventVisible: false,
	addDisplayVisible: false,
	displayList: [],
	tempDisplay: {},
	saveDisplayAllowed: false,
	historyExpanded: false,
	CCYSettingsVisible: false,
	confirmDeleteDisplayVisible: false,
	downloadPhotosSettingsVisible: false,
	activeTab: window.location.pathname,
	lots: lotlist,
	sortedColumn: 'js-lotnumber',
	sortdirection: 'asc',
	mediaFilters: [],

	downloads: [{
		title: "Downloading Photos",
		progress: 8,
		items: 20,
		error: false,
		active: false
	}, {
		title: "Downloading Lots",
		progress: 5,
		items: 200,
		error: false,
		active: false
	}],
	downloadStarted: false
};

var controller = {
	gotoPage: function gotoPage(e) {
		var target = $(e.currentTarget).data('targetpage');
		window.location = target;
	},

	toggleGetOtherSales: function toggleGetOtherSales(e) {
		dataObject.getOtherSalesVisible = !dataObject.getOtherSalesVisible;
	},
	toggleDataCenterSwitch: function toggleDataCenterSwitch(e) {
		dataObject.dataCenterSwitchVisible = !dataObject.dataCenterSwitchVisible;
	},
	toggleDeleteEventVisible: function toggleDeleteEventVisible(e) {
		dataObject.deleteEventVisible = !dataObject.deleteEventVisible;
	},
	toggleAddDisplayVisible: function toggleAddDisplayVisible(e) {
		dataObject.addDisplayVisible = !dataObject.addDisplayVisible;
		dataObject.tempDisplay = null;
		dataObject.tempDisplay = {};
	},
	toggleHistoryExpanded: function toggleHistoryExpanded() {
		dataObject.historyExpanded = !dataObject.historyExpanded;
	},
	toggleCCYSettingsVisible: function toggleCCYSettingsVisible() {
		dataObject.CCYSettingsVisible = !dataObject.CCYSettingsVisible;
	},
	toggleDownloadPhotosSettingsVisible: function toggleDownloadPhotosSettingsVisible() {
		dataObject.downloadPhotosSettingsVisible = !dataObject.downloadPhotosSettingsVisible;
	},

	goToEventList: function goToEventList() {
		window.location = "/";
	},

	//DISPLAY SETUP CONTROLS
	setDisplayType: function setDisplayType(e) {
		dataObject.tempDisplay.type = $(e.currentTarget).data('type');
	},
	updateDisplayName: function updateDisplayName(e) {
		if ($(e.currentTarget).val().length > 0) dataObject.saveDisplayAllowed = true;else dataObject.saveDisplayAllowed = false;
	},
	createDisplay: function createDisplay(e) {
		dataObject.displayList.push(dataObject.tempDisplay);
		controller.toggleAddDisplayVisible();
	},
	editDisplay: function editDisplay(e, context) {
		dataObject.addDisplayVisible = true;
		dataObject.tempDisplay.type = context.display.type;
		dataObject.tempDisplay.name = context.display.name;
		dataObject.tempDisplay.editing = true;
	},
	toggleDisplay: function toggleDisplay(e, context) {
		context.display.status = context.display.status === "active" ? "inactive" : "active";
	},
	toggleConfirmDeleteDisplay: function toggleConfirmDeleteDisplay(e, context) {
		dataObject.confirmDeleteDisplayVisible = !dataObject.confirmDeleteDisplayVisible;
	},
	confirmDeleteDisplay: function confirmDeleteDisplay(e, context) {

		dataObject.confirmDeleteDisplayVisible = false;
		dataObject.addDisplayVisible = false;
		dataObject.displayList.pop();
	},

	//DOWNLOAD MONITOR
	startPhotoDownload: function startPhotoDownload() {
		dataObject.downloadStarted = true;
		dataObject.downloadPhotosSettingsVisible = false;
		startDownload(dataObject.downloads[0]);
	},
	startLotDownload: function startLotDownload() {
		dataObject.downloadStarted = true;
		startDownload(dataObject.downloads[1]);
	},
	cancelDownload: function cancelDownload(e, context) {
		context.download.active = false;
	},

	//MANAGE LOT MEDIA
	toggleExpandLot: function toggleExpandLot(e, context) {
		if (typeof context.lot.expanded === "undefined") context.lot.expanded = true;else context.lot.expanded = !context.lot.expanded;

		if (context.lot.expanded) $(e.currentTarget).parent().addClass('s-expanded');else $(e.currentTarget).parent().removeClass('s-expanded');
	},
	sortColumn: function sortColumn(e) {
		var targetColumn = $(e.currentTarget).data('column');
		if (dataObject.sortedColumn === targetColumn) dataObject.sortdirection = dataObject.sortdirection === 'asc' ? 'desc' : 'asc';else {
			dataObject.sortedColumn = targetColumn;
			dataObject.sortdirection = 'asc';
		}
		medialist.sort(dataObject.sortedColumn, { order: dataObject.sortdirection });
	}
};

var startDownload = function startDownload(target) {
	target.active = true;
	target.progress = 0;
	var progressTimer = setInterval(function () {
		target.progress++;
		if (target.progress >= target.items) {
			clearInterval(progressTimer);
			target.active = false;
		}
	}, 500);
};

var focusFirstInput = function focusFirstInput(container) {
	container.find('input').first().focus();
};

rivets.bind($('.js--data-context'), {
	dataObject: dataObject,
	controller: controller
});
