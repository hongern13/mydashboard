import { c as create_ssr_component, e as escape, s as subscribe, o as onDestroy, v as validate_component } from "./app-747dfeb6.js";
import { _ as _registerComponent, r as registerVersion, C as Component, L as Logger, a as LogLevel, S as SDK_VERSION, F as FirebaseError } from "./firebase-f379b5e1.js";
import { a as authStore, g as goto } from "./navigation-c4464c84.js";
import "stream";
import "http";
import "url";
import "punycode";
import "https";
import "zlib";
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quote = "Patience is the key to a good life.";
  let author = "Unknown";
  return `<main>\xA0 <button>Get me a quote!</button>
\xA0 <h1>${escape(quote)}</h1>
\xA0 <p>- ${escape(author)} -</p></main>`;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var k, goog = goog || {}, l = commonjsGlobal || self;
function aa() {
}
function ba$1(a) {
  var b = typeof a;
  b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  return b == "array" || b == "object" && typeof a.length == "number";
}
function p(a) {
  var b = typeof a;
  return b == "object" && a != null || b == "function";
}
function da(a) {
  return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
}
var ea = "closure_uid_" + (1e9 * Math.random() >>> 0), fa = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia(a, b, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function q(a, b, c) {
  Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? q = ha : q = ia;
  return q.apply(null, arguments);
}
function ja(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Z = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Vb = function(d, e, f) {
    for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
      h[n - 2] = arguments[n];
    return b.prototype[e].apply(d, h);
  };
}
function v() {
  this.s = this.s;
  this.o = this.o;
}
var ka = 0, la = {};
v.prototype.s = false;
v.prototype.na = function() {
  if (!this.s && (this.s = true, this.M(), ka != 0)) {
    var a = da(this);
    delete la[a];
  }
};
v.prototype.M = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
const ma$1 = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
  if (typeof a === "string")
    return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
  for (let c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
      return c;
  return -1;
}, na = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  const d = a.length, e = typeof a === "string" ? a.split("") : a;
  for (let f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a);
};
function oa(a) {
  a: {
    var b = pa;
    const c = a.length, d = typeof a === "string" ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : typeof a === "string" ? a.charAt(b) : a[b];
}
function qa(a) {
  return Array.prototype.concat.apply([], arguments);
}
function ra(a) {
  const b = a.length;
  if (0 < b) {
    const c = Array(b);
    for (let d = 0; d < b; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function sa(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ta = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function w(a, b) {
  return a.indexOf(b) != -1;
}
function ua(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var x$1;
a: {
  var va = l.navigator;
  if (va) {
    var wa = va.userAgent;
    if (wa) {
      x$1 = wa;
      break a;
    }
  }
  x$1 = "";
}
function xa(a, b, c) {
  for (const d in a)
    b.call(c, a[d], d, a);
}
function ya$1(a) {
  const b = {};
  for (const c in a)
    b[c] = a[c];
  return b;
}
var za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Aa(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (let f = 0; f < za.length; f++)
      c = za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ca(a) {
  Ca[" "](a);
  return a;
}
Ca[" "] = aa;
function Fa(a) {
  var b = Ga;
  return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9);
}
var Ha = w(x$1, "Opera"), y = w(x$1, "Trident") || w(x$1, "MSIE"), Ia = w(x$1, "Edge"), Ja = Ia || y, Ka$1 = w(x$1, "Gecko") && !(w(x$1.toLowerCase(), "webkit") && !w(x$1, "Edge")) && !(w(x$1, "Trident") || w(x$1, "MSIE")) && !w(x$1, "Edge"), La = w(x$1.toLowerCase(), "webkit") && !w(x$1, "Edge");
function Ma$1() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Na;
a: {
  var Oa = "", Pa = function() {
    var a = x$1;
    if (Ka$1)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia)
      return /Edge\/([\d\.]+)/.exec(a);
    if (y)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La)
      return /WebKit\/(\S+)/.exec(a);
    if (Ha)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Pa && (Oa = Pa ? Pa[1] : "");
  if (y) {
    var Qa = Ma$1();
    if (Qa != null && Qa > parseFloat(Oa)) {
      Na = String(Qa);
      break a;
    }
  }
  Na = Oa;
}
var Ga = {};
function Ra$1() {
  return Fa(function() {
    let a = 0;
    const b = ta(String(Na)).split("."), c = ta("9").split("."), d = Math.max(b.length, c.length);
    for (let h = 0; a == 0 && h < d; h++) {
      var e = b[h] || "", f = c[h] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (e[0].length == 0 && f[0].length == 0)
          break;
        a = ua(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || ua(e[2].length == 0, f[2].length == 0) || ua(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (a == 0);
    }
    return 0 <= a;
  });
}
if (l.document && y) {
  Ma$1();
}
var Va = function() {
  if (!l.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    l.addEventListener("test", aa, b), l.removeEventListener("test", aa, b);
  } catch (c) {
  }
  return a;
}();
function z$1(a, b) {
  this.type = a;
  this.g = this.target = b;
  this.defaultPrevented = false;
}
z$1.prototype.h = function() {
  this.defaultPrevented = true;
};
function A(a, b) {
  z$1.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    if (b = a.relatedTarget) {
      if (Ka$1) {
        a: {
          try {
            Ca(b.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b = null);
      }
    } else
      c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Wa[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && A.Z.h.call(this);
  }
}
t(A, z$1);
var Wa = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.h = function() {
  A.Z.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var B$1 = "closure_listenable_" + (1e6 * Math.random() | 0);
var Xa = 0;
function Ya(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.ia = e;
  this.key = ++Xa;
  this.ca = this.fa = false;
}
function Za(a) {
  a.ca = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ia = null;
}
function $a(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
$a.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || (a = this.g[f] = [], this.h++);
  var h = ab(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.fa = false)) : (b = new Ya(b, this.src, f, !!d, e), b.fa = c, a.push(b));
  return b;
};
function bb(a, b) {
  var c = b.type;
  if (c in a.g) {
    var d = a.g[c], e = ma$1(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Za(b), a.g[c].length == 0 && (delete a.g[c], a.h--));
  }
}
function ab(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.ca && f.listener == b && f.capture == !!c && f.ia == d)
      return e;
  }
  return -1;
}
var cb = "closure_lm_" + (1e6 * Math.random() | 0), db = {};
function fb(a, b, c, d, e) {
  if (d && d.once)
    return gb(a, b, c, d, e);
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      fb(a, b[f], c, d, e);
    return null;
  }
  c = hb(c);
  return a && a[B$1] ? a.N(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, false, d, e);
}
function ib(a, b, c, d, e, f) {
  if (!b)
    throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n = jb(a);
  n || (a[cb] = n = new $a(a));
  c = n.add(b, c, d, h, f);
  if (c.proxy)
    return c;
  d = kb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Va || (e = h), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(lb(b.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function kb() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = mb;
  return a;
}
function gb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      gb(a, b[f], c, d, e);
    return null;
  }
  c = hb(c);
  return a && a[B$1] ? a.O(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, true, d, e);
}
function nb(a, b, c, d, e) {
  if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
      nb(a, b[f], c, d, e);
  else
    (d = p(d) ? !!d.capture : !!d, c = hb(c), a && a[B$1]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = ab(f, c, d, e), -1 < c && (Za(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.g[b], a.h--)))) : a && (a = jb(a)) && (b = a.g[b.toString()], a = -1, b && (a = ab(b, c, d, e)), (c = -1 < a ? b[a] : null) && ob(c));
}
function ob(a) {
  if (typeof a !== "number" && a && !a.ca) {
    var b = a.src;
    if (b && b[B$1])
      bb(b.i, a);
    else {
      var c = a.type, d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      (c = jb(b)) ? (bb(c, a), c.h == 0 && (c.src = null, b[cb] = null)) : Za(a);
    }
  }
}
function lb(a) {
  return a in db ? db[a] : db[a] = "on" + a;
}
function mb(a, b) {
  if (a.ca)
    a = true;
  else {
    b = new A(b, this);
    var c = a.listener, d = a.ia || a.src;
    a.fa && ob(a);
    a = c.call(d, b);
  }
  return a;
}
function jb(a) {
  a = a[cb];
  return a instanceof $a ? a : null;
}
var pb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function hb(a) {
  if (typeof a === "function")
    return a;
  a[pb] || (a[pb] = function(b) {
    return a.handleEvent(b);
  });
  return a[pb];
}
function C$1() {
  v.call(this);
  this.i = new $a(this);
  this.P = this;
  this.I = null;
}
t(C$1, v);
C$1.prototype[B$1] = true;
C$1.prototype.removeEventListener = function(a, b, c, d) {
  nb(this, a, b, c, d);
};
function D$1(a, b) {
  var c, d = a.I;
  if (d)
    for (c = []; d; d = d.I)
      c.push(d);
  a = a.P;
  d = b.type || b;
  if (typeof b === "string")
    b = new z$1(b, a);
  else if (b instanceof z$1)
    b.target = b.target || a;
  else {
    var e = b;
    b = new z$1(d, a);
    Aa(b, e);
  }
  e = true;
  if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
      var h = b.g = c[f];
      e = qb(h, d, true, b) && e;
    }
  h = b.g = a;
  e = qb(h, d, true, b) && e;
  e = qb(h, d, false, b) && e;
  if (c)
    for (f = 0; f < c.length; f++)
      h = b.g = c[f], e = qb(h, d, false, b) && e;
}
C$1.prototype.M = function() {
  C$1.Z.M.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++)
        Za(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.I = null;
};
C$1.prototype.N = function(a, b, c, d) {
  return this.i.add(String(a), b, false, c, d);
};
C$1.prototype.O = function(a, b, c, d) {
  return this.i.add(String(a), b, true, c, d);
};
function qb(a, b, c, d) {
  b = a.i.g[String(b)];
  if (!b)
    return true;
  b = b.concat();
  for (var e = true, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.ca && h.capture == c) {
      var n = h.listener, u = h.ia || h.src;
      h.fa && bb(a.i, h);
      e = n.call(u, d) !== false && e;
    }
  }
  return e && !d.defaultPrevented;
}
var rb = l.JSON.stringify;
function sb() {
  var a = tb;
  let b = null;
  a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
  return b;
}
class ub {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b) {
    const c = vb.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
}
var vb = new class {
  constructor(a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
}(() => new wb(), (a) => a.reset());
class wb {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function yb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
function zb(a, b) {
  Ab || Bb();
  Cb || (Ab(), Cb = true);
  tb.add(a, b);
}
var Ab;
function Bb() {
  var a = l.Promise.resolve(void 0);
  Ab = function() {
    a.then(Db);
  };
}
var Cb = false, tb = new ub();
function Db() {
  for (var a; a = sb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      yb(c);
    }
    var b = vb;
    b.j(a);
    100 > b.h && (b.h++, a.next = b.g, b.g = a);
  }
  Cb = false;
}
function Eb(a, b) {
  C$1.call(this);
  this.h = a || 1;
  this.g = b || l;
  this.j = q(this.kb, this);
  this.l = Date.now();
}
t(Eb, C$1);
k = Eb.prototype;
k.da = false;
k.S = null;
k.kb = function() {
  if (this.da) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - a) : (this.S && (this.g.clearTimeout(this.S), this.S = null), D$1(this, "tick"), this.da && (Fb(this), this.start()));
  }
};
k.start = function() {
  this.da = true;
  this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function Fb(a) {
  a.da = false;
  a.S && (a.g.clearTimeout(a.S), a.S = null);
}
k.M = function() {
  Eb.Z.M.call(this);
  Fb(this);
  delete this.g;
};
function Gb(a, b, c) {
  if (typeof a === "function")
    c && (a = q(a, c));
  else if (a && typeof a.handleEvent == "function")
    a = q(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
}
function Hb(a) {
  a.g = Gb(() => {
    a.g = null;
    a.i && (a.i = false, Hb(a));
  }, a.j);
  const b = a.h;
  a.h = null;
  a.m.apply(null, b);
}
class Ib extends v {
  constructor(a, b) {
    super();
    this.m = a;
    this.j = b;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : Hb(this);
  }
  M() {
    super.M();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
}
function E(a) {
  v.call(this);
  this.h = a;
  this.g = {};
}
t(E, v);
var Jb = [];
function Kb(a, b, c, d) {
  Array.isArray(c) || (c && (Jb[0] = c.toString()), c = Jb);
  for (var e = 0; e < c.length; e++) {
    var f = fb(b, c[e], d || a.handleEvent, false, a.h || a);
    if (!f)
      break;
    a.g[f.key] = f;
  }
}
function Lb(a) {
  xa(a.g, function(b, c) {
    this.g.hasOwnProperty(c) && ob(b);
  }, a);
  a.g = {};
}
E.prototype.M = function() {
  E.Z.M.call(this);
  Lb(this);
};
E.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Mb() {
  this.g = true;
}
Mb.prototype.Aa = function() {
  this.g = false;
};
function Nb(a, b, c, d, e, f) {
  a.info(function() {
    if (a.g)
      if (f) {
        var h = "";
        for (var n = f.split("&"), u = 0; u < n.length; u++) {
          var m = n[u].split("=");
          if (1 < m.length) {
            var r = m[0];
            m = m[1];
            var G2 = r.split("_");
            h = 2 <= G2.length && G2[1] == "type" ? h + (r + "=" + m + "&") : h + (r + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
  });
}
function Ob(a, b, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
  });
}
function F$1(a, b, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b + "): " + Pb(a, c) + (d ? " " + d : "");
  });
}
function Qb(a, b) {
  a.info(function() {
    return "TIMEOUT: " + b;
  });
}
Mb.prototype.info = function() {
};
function Pb(a, b) {
  if (!a.g)
    return b;
  if (!b)
    return null;
  try {
    var c = JSON.parse(b);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if (f != "noop" && f != "stop" && f != "close")
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return rb(c);
  } catch (n) {
    return b;
  }
}
var H = {}, Rb = null;
function Sb() {
  return Rb = Rb || new C$1();
}
H.Ma = "serverreachability";
function Tb(a) {
  z$1.call(this, H.Ma, a);
}
t(Tb, z$1);
function I(a) {
  const b = Sb();
  D$1(b, new Tb(b, a));
}
H.STAT_EVENT = "statevent";
function Ub(a, b) {
  z$1.call(this, H.STAT_EVENT, a);
  this.stat = b;
}
t(Ub, z$1);
function J$1(a) {
  const b = Sb();
  D$1(b, new Ub(b, a));
}
H.Na = "timingevent";
function Vb(a, b) {
  z$1.call(this, H.Na, a);
  this.size = b;
}
t(Vb, z$1);
function K(a, b) {
  if (typeof a !== "function")
    throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b);
}
var Wb = { NO_ERROR: 0, lb: 1, yb: 2, xb: 3, sb: 4, wb: 5, zb: 6, Ja: 7, TIMEOUT: 8, Cb: 9 };
var Xb = { qb: "complete", Mb: "success", Ka: "error", Ja: "abort", Eb: "ready", Fb: "readystatechange", TIMEOUT: "timeout", Ab: "incrementaldata", Db: "progress", tb: "downloadprogress", Ub: "uploadprogress" };
function Yb() {
}
Yb.prototype.h = null;
function Zb(a) {
  return a.h || (a.h = a.i());
}
var L$1 = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
function ac() {
  z$1.call(this, "d");
}
t(ac, z$1);
function bc() {
  z$1.call(this, "c");
}
t(bc, z$1);
var cc;
function dc() {
}
t(dc, Yb);
dc.prototype.g = function() {
  return new XMLHttpRequest();
};
dc.prototype.i = function() {
  return {};
};
cc = new dc();
function M(a, b, c, d) {
  this.l = a;
  this.j = b;
  this.m = c;
  this.X = d || 1;
  this.V = new E(this);
  this.P = ec;
  a = Ja ? 125 : void 0;
  this.W = new Eb(a);
  this.H = null;
  this.i = false;
  this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null;
  this.D = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.N = -1;
  this.I = false;
  this.O = 0;
  this.L = null;
  this.aa = this.J = this.$ = this.U = false;
  this.h = new fc();
}
function fc() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var ec = 45e3, gc = {}, hc = {};
k = M.prototype;
k.setTimeout = function(a) {
  this.P = a;
};
function ic(a, b, c) {
  a.K = 1;
  a.v = jc(N$1(b));
  a.s = c;
  a.U = true;
  kc(a, null);
}
function kc(a, b) {
  a.F = Date.now();
  lc(a);
  a.A = N$1(a.v);
  var c = a.A, d = a.X;
  Array.isArray(d) || (d = [String(d)]);
  mc(c.h, "t", d);
  a.C = 0;
  c = a.l.H;
  a.h = new fc();
  a.g = nc(a.l, c ? b : null, !a.s);
  0 < a.O && (a.L = new Ib(q(a.Ia, a, a.g), a.O));
  Kb(a.V, a.g, "readystatechange", a.gb);
  b = a.H ? ya$1(a.H) : {};
  a.s ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.s, b)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b));
  I(1);
  Nb(a.j, a.u, a.A, a.m, a.X, a.s);
}
k.gb = function(a) {
  a = a.target;
  const b = this.L;
  b && O$1(a) == 3 ? b.l() : this.Ia(a);
};
k.Ia = function(a) {
  try {
    if (a == this.g)
      a: {
        const r = O$1(this.g);
        var b = this.g.Da();
        const G2 = this.g.ba();
        if (!(3 > r) && (r != 3 || Ja || this.g && (this.h.h || this.g.ga() || oc(this.g)))) {
          this.I || r != 4 || b == 7 || (b == 8 || 0 >= G2 ? I(3) : I(2));
          pc(this);
          var c = this.g.ba();
          this.N = c;
          b:
            if (qc(this)) {
              var d = oc(this.g);
              a = "";
              var e = d.length, f = O$1(this.g) == 4;
              if (!this.h.i) {
                if (typeof TextDecoder === "undefined") {
                  P(this);
                  rc(this);
                  var h = "";
                  break b;
                }
                this.h.i = new l.TextDecoder();
              }
              for (b = 0; b < e; b++)
                this.h.h = true, a += this.h.i.decode(d[b], { stream: f && b == e - 1 });
              d.splice(0, e);
              this.h.g += a;
              this.C = 0;
              h = this.h.g;
            } else
              h = this.g.ga();
          this.i = c == 200;
          Ob(this.j, this.u, this.A, this.m, this.X, r, c);
          if (this.i) {
            if (this.$ && !this.J) {
              b: {
                if (this.g) {
                  var n, u = this.g;
                  if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(n)) {
                    var m = n;
                    break b;
                  }
                }
                m = null;
              }
              if (c = m)
                F$1(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, sc(this, c);
              else {
                this.i = false;
                this.o = 3;
                J$1(12);
                P(this);
                rc(this);
                break a;
              }
            }
            this.U ? (tc(this, r, h), Ja && this.i && r == 3 && (Kb(this.V, this.W, "tick", this.fb), this.W.start())) : (F$1(this.j, this.m, h, null), sc(this, h));
            r == 4 && P(this);
            this.i && !this.I && (r == 4 ? uc(this.l, this) : (this.i = false, lc(this)));
          } else
            c == 400 && 0 < h.indexOf("Unknown SID") ? (this.o = 3, J$1(12)) : (this.o = 0, J$1(13)), P(this), rc(this);
        }
      }
  } catch (r) {
  } finally {
  }
};
function qc(a) {
  return a.g ? a.u == "GET" && a.K != 2 && a.l.Ba : false;
}
function tc(a, b, c) {
  let d = true, e;
  for (; !a.I && a.C < c.length; )
    if (e = vc(a, c), e == hc) {
      b == 4 && (a.o = 4, J$1(14), d = false);
      F$1(a.j, a.m, null, "[Incomplete Response]");
      break;
    } else if (e == gc) {
      a.o = 4;
      J$1(15);
      F$1(a.j, a.m, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      F$1(a.j, a.m, e, null), sc(a, e);
  qc(a) && e != hc && e != gc && (a.h.g = "", a.C = 0);
  b != 4 || c.length != 0 || a.h.h || (a.o = 1, J$1(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.aa && (a.aa = true, b = a.l, b.g == a && b.$ && !b.L && (b.h.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.L = true, J$1(11))) : (F$1(a.j, a.m, c, "[Invalid Chunked Response]"), P(a), rc(a));
}
k.fb = function() {
  if (this.g) {
    var a = O$1(this.g), b = this.g.ga();
    this.C < b.length && (pc(this), tc(this, a, b), this.i && a != 4 && lc(this));
  }
};
function vc(a, b) {
  var c = a.C, d = b.indexOf("\n", c);
  if (d == -1)
    return hc;
  c = Number(b.substring(c, d));
  if (isNaN(c))
    return gc;
  d += 1;
  if (d + c > b.length)
    return hc;
  b = b.substr(d, c);
  a.C = d + c;
  return b;
}
k.cancel = function() {
  this.I = true;
  P(this);
};
function lc(a) {
  a.Y = Date.now() + a.P;
  xc(a, a.P);
}
function xc(a, b) {
  if (a.B != null)
    throw Error("WatchDog timer not null");
  a.B = K(q(a.eb, a), b);
}
function pc(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k.eb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.Y ? (Qb(this.j, this.A), this.K != 2 && (I(3), J$1(17)), P(this), this.o = 2, rc(this)) : xc(this, this.Y - a);
};
function rc(a) {
  a.l.G == 0 || a.I || uc(a.l, a);
}
function P(a) {
  pc(a);
  var b = a.L;
  b && typeof b.na == "function" && b.na();
  a.L = null;
  Fb(a.W);
  Lb(a.V);
  a.g && (b = a.g, a.g = null, b.abort(), b.na());
}
function sc(a, b) {
  try {
    var c = a.l;
    if (c.G != 0 && (c.g == a || yc(c.i, a))) {
      if (c.I = a.N, !a.J && yc(c.i, a) && c.G == 3) {
        try {
          var d = c.Ca.g.parse(b);
        } catch (m) {
          d = null;
        }
        if (Array.isArray(d) && d.length == 3) {
          var e = d;
          if (e[0] == 0)
            a: {
              if (!c.u) {
                if (c.g)
                  if (c.g.F + 3e3 < a.F)
                    zc(c), Ac(c);
                  else
                    break a;
                Bc(c);
                J$1(18);
              }
            }
          else
            c.ta = e[1], 0 < c.ta - c.U && 37500 > e[2] && c.N && c.A == 0 && !c.v && (c.v = K(q(c.ab, c), 6e3));
          if (1 >= Cc(c.i) && c.ka) {
            try {
              c.ka();
            } catch (m) {
            }
            c.ka = void 0;
          }
        } else
          Q$1(c, 11);
      } else if ((a.J || c.g == a) && zc(c), !sa(b))
        for (e = c.Ca.g.parse(b), b = 0; b < e.length; b++) {
          let m = e[b];
          c.U = m[0];
          m = m[1];
          if (c.G == 2)
            if (m[0] == "c") {
              c.J = m[1];
              c.la = m[2];
              const r = m[3];
              r != null && (c.ma = r, c.h.info("VER=" + c.ma));
              const G2 = m[4];
              G2 != null && (c.za = G2, c.h.info("SVER=" + c.za));
              const Da = m[5];
              Da != null && typeof Da === "number" && 0 < Da && (d = 1.5 * Da, c.K = d, c.h.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const ca = a.g;
              if (ca) {
                const Ea = ca.g ? ca.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (Ea) {
                  var f = d.i;
                  !f.g && (w(Ea, "spdy") || w(Ea, "quic") || w(Ea, "h2")) && (f.j = f.l, f.g = new Set(), f.h && (Dc(f, f.h), f.h = null));
                }
                if (d.D) {
                  const xb = ca.g ? ca.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  xb && (d.sa = xb, R(d.F, d.D, xb));
                }
              }
              c.G = 3;
              c.j && c.j.xa();
              c.$ && (c.O = Date.now() - a.F, c.h.info("Handshake RTT: " + c.O + "ms"));
              d = c;
              var h = a;
              d.oa = Ec(d, d.H ? d.la : null, d.W);
              if (h.J) {
                Fc(d.i, h);
                var n = h, u = d.K;
                u && n.setTimeout(u);
                n.B && (pc(n), lc(n));
                d.g = h;
              } else
                Gc(d);
              0 < c.l.length && Hc(c);
            } else
              m[0] != "stop" && m[0] != "close" || Q$1(c, 7);
          else
            c.G == 3 && (m[0] == "stop" || m[0] == "close" ? m[0] == "stop" ? Q$1(c, 7) : Ic(c) : m[0] != "noop" && c.j && c.j.wa(m), c.A = 0);
        }
    }
    I(4);
  } catch (m) {
  }
}
function Jc$1(a) {
  if (a.R && typeof a.R == "function")
    return a.R();
  if (typeof a === "string")
    return a.split("");
  if (ba$1(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d]);
    return b;
  }
  b = [];
  c = 0;
  for (d in a)
    b[c++] = a[d];
  return b;
}
function Kc(a, b) {
  if (a.forEach && typeof a.forEach == "function")
    a.forEach(b, void 0);
  else if (ba$1(a) || typeof a === "string")
    na(a, b, void 0);
  else {
    if (a.T && typeof a.T == "function")
      var c = a.T();
    else if (a.R && typeof a.R == "function")
      c = void 0;
    else if (ba$1(a) || typeof a === "string") {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Jc$1(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b.call(void 0, d[f], c && c[f], a);
  }
}
function S(a, b) {
  this.h = {};
  this.g = [];
  this.i = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof S)
      for (c = a.T(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
k = S.prototype;
k.R = function() {
  Lc(this);
  for (var a = [], b = 0; b < this.g.length; b++)
    a.push(this.h[this.g[b]]);
  return a;
};
k.T = function() {
  Lc(this);
  return this.g.concat();
};
function Lc(a) {
  if (a.i != a.g.length) {
    for (var b = 0, c = 0; b < a.g.length; ) {
      var d = a.g[b];
      T(a.h, d) && (a.g[c++] = d);
      b++;
    }
    a.g.length = c;
  }
  if (a.i != a.g.length) {
    var e = {};
    for (c = b = 0; b < a.g.length; )
      d = a.g[b], T(e, d) || (a.g[c++] = d, e[d] = 1), b++;
    a.g.length = c;
  }
}
k.get = function(a, b) {
  return T(this.h, a) ? this.h[a] : b;
};
k.set = function(a, b) {
  T(this.h, a) || (this.i++, this.g.push(a));
  this.h[a] = b;
};
k.forEach = function(a, b) {
  for (var c = this.T(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
function T(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var Mc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Nc(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function U$1(a, b) {
  this.i = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.g = false;
  if (a instanceof U$1) {
    this.g = b !== void 0 ? b : a.g;
    Oc(this, a.j);
    this.s = a.s;
    Pc(this, a.i);
    Qc(this, a.m);
    this.l = a.l;
    b = a.h;
    var c = new Rc();
    c.i = b.i;
    b.g && (c.g = new S(b.g), c.h = b.h);
    Sc(this, c);
    this.o = a.o;
  } else
    a && (c = String(a).match(Mc)) ? (this.g = !!b, Oc(this, c[1] || "", true), this.s = Tc(c[2] || ""), Pc(this, c[3] || "", true), Qc(this, c[4]), this.l = Tc(c[5] || "", true), Sc(this, c[6] || "", true), this.o = Tc(c[7] || "")) : (this.g = !!b, this.h = new Rc(null, this.g));
}
U$1.prototype.toString = function() {
  var a = [], b = this.j;
  b && a.push(Uc(b, Vc, true), ":");
  var c = this.i;
  if (c || b == "file")
    a.push("//"), (b = this.s) && a.push(Uc(b, Vc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, c != null && a.push(":", String(c));
  if (c = this.l)
    this.i && c.charAt(0) != "/" && a.push("/"), a.push(Uc(c, c.charAt(0) == "/" ? Wc : Xc, true));
  (c = this.h.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Uc(c, Yc));
  return a.join("");
};
function N$1(a) {
  return new U$1(a);
}
function Oc(a, b, c) {
  a.j = c ? Tc(b, true) : b;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Pc(a, b, c) {
  a.i = c ? Tc(b, true) : b;
}
function Qc(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
      throw Error("Bad port number " + b);
    a.m = b;
  } else
    a.m = null;
}
function Sc(a, b, c) {
  b instanceof Rc ? (a.h = b, Zc(a.h, a.g)) : (c || (b = Uc(b, $c)), a.h = new Rc(b, a.g));
}
function R(a, b, c) {
  a.h.set(b, c);
}
function jc(a) {
  R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function ad(a) {
  return a instanceof U$1 ? N$1(a) : new U$1(a, void 0);
}
function bd(a, b, c, d) {
  var e = new U$1(null, void 0);
  a && Oc(e, a);
  b && Pc(e, b);
  c && Qc(e, c);
  d && (e.l = d);
  return e;
}
function Tc(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Uc(a, b, c) {
  return typeof a === "string" ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Vc = /[#\/\?@]/g, Xc = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc = /#/g;
function Rc(a, b) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b;
}
function V(a) {
  a.g || (a.g = new S(), a.h = 0, a.i && Nc(a.i, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
k = Rc.prototype;
k.add = function(a, b) {
  V(this);
  this.i = null;
  a = W$1(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b);
  this.h += 1;
  return this;
};
function dd(a, b) {
  V(a);
  b = W$1(a, b);
  T(a.g.h, b) && (a.i = null, a.h -= a.g.get(b).length, a = a.g, T(a.h, b) && (delete a.h[b], a.i--, a.g.length > 2 * a.i && Lc(a)));
}
function ed(a, b) {
  V(a);
  b = W$1(a, b);
  return T(a.g.h, b);
}
k.forEach = function(a, b) {
  V(this);
  this.g.forEach(function(c, d) {
    na(c, function(e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
k.T = function() {
  V(this);
  for (var a = this.g.R(), b = this.g.T(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b[d]);
  return c;
};
k.R = function(a) {
  V(this);
  var b = [];
  if (typeof a === "string")
    ed(this, a) && (b = qa(b, this.g.get(W$1(this, a))));
  else {
    a = this.g.R();
    for (var c = 0; c < a.length; c++)
      b = qa(b, a[c]);
  }
  return b;
};
k.set = function(a, b) {
  V(this);
  this.i = null;
  a = W$1(this, a);
  ed(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b]);
  this.h += 1;
  return this;
};
k.get = function(a, b) {
  if (!a)
    return b;
  a = this.R(a);
  return 0 < a.length ? String(a[0]) : b;
};
function mc(a, b, c) {
  dd(a, b);
  0 < c.length && (a.i = null, a.g.set(W$1(a, b), ra(c)), a.h += c.length);
}
k.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  for (var a = [], b = this.g.T(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.R(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      d[f] !== "" && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.i = a.join("&");
};
function W$1(a, b) {
  b = String(b);
  a.j && (b = b.toLowerCase());
  return b;
}
function Zc(a, b) {
  b && !a.j && (V(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), mc(this, e, c));
  }, a));
  a.j = b;
}
var fd = class {
  constructor(a, b) {
    this.h = a;
    this.g = b;
  }
};
function gd(a) {
  this.l = a || hd;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(l.g && l.g.Ea && l.g.Ea() && l.g.Ea().Zb);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = new Set());
  this.h = null;
  this.i = [];
}
var hd = 10;
function id(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function Cc(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function yc(a, b) {
  return a.h ? a.h == b : a.g ? a.g.has(b) : false;
}
function Dc(a, b) {
  a.g ? a.g.add(b) : a.h = b;
}
function Fc(a, b) {
  a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
}
gd.prototype.cancel = function() {
  this.i = jd(this);
  if (this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && this.g.size !== 0) {
    for (const a of this.g.values())
      a.cancel();
    this.g.clear();
  }
};
function jd(a) {
  if (a.h != null)
    return a.i.concat(a.h.D);
  if (a.g != null && a.g.size !== 0) {
    let b = a.i;
    for (const c of a.g.values())
      b = b.concat(c.D);
    return b;
  }
  return ra(a.i);
}
function kd() {
}
kd.prototype.stringify = function(a) {
  return l.JSON.stringify(a, void 0);
};
kd.prototype.parse = function(a) {
  return l.JSON.parse(a, void 0);
};
function ld() {
  this.g = new kd();
}
function md(a, b, c) {
  const d = c || "";
  try {
    Kc(a, function(e, f) {
      let h = e;
      p(e) && (h = rb(e));
      b.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function nd(a, b) {
  const c = new Mb();
  if (l.Image) {
    const d = new Image();
    d.onload = ja(od, c, d, "TestLoadImage: loaded", true, b);
    d.onerror = ja(od, c, d, "TestLoadImage: error", false, b);
    d.onabort = ja(od, c, d, "TestLoadImage: abort", false, b);
    d.ontimeout = ja(od, c, d, "TestLoadImage: timeout", false, b);
    l.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b(false);
}
function od(a, b, c, d, e) {
  try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
  } catch (f) {
  }
}
function pd(a) {
  this.l = a.$b || null;
  this.j = a.ib || false;
}
t(pd, Yb);
pd.prototype.g = function() {
  return new qd(this.l, this.j);
};
pd.prototype.i = function(a) {
  return function() {
    return a;
  };
}({});
function qd(a, b) {
  C$1.call(this);
  this.D = a;
  this.u = b;
  this.m = void 0;
  this.readyState = rd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
t(qd, C$1);
var rd = 0;
k = qd.prototype;
k.open = function(a, b) {
  if (this.readyState != rd)
    throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b;
  this.readyState = 1;
  sd(this);
};
k.send = function(a) {
  if (this.readyState != 1)
    throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  a && (b.body = a);
  (this.D || l).fetch(new Request(this.B, b)).then(this.Va.bind(this), this.ha.bind(this));
};
k.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.");
  1 <= this.readyState && this.g && this.readyState != 4 && (this.g = false, td(this));
  this.readyState = rd;
};
k.Va = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, sd(this)), this.g && (this.readyState = 3, sd(this), this.g)))
    if (this.responseType === "arraybuffer")
      a.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
    else if (typeof l.ReadableStream !== "undefined" && "body" in a) {
      this.j = a.body.getReader();
      if (this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      ud(this);
    } else
      a.text().then(this.Ua.bind(this), this.ha.bind(this));
};
function ud(a) {
  a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a));
}
k.Sa = function(a) {
  if (this.g) {
    if (this.u && a.value)
      this.response.push(a.value);
    else if (!this.u) {
      var b = a.value ? a.value : new Uint8Array(0);
      if (b = this.A.decode(b, { stream: !a.done }))
        this.response = this.responseText += b;
    }
    a.done ? td(this) : sd(this);
    this.readyState == 3 && ud(this);
  }
};
k.Ua = function(a) {
  this.g && (this.response = this.responseText = a, td(this));
};
k.Ta = function(a) {
  this.g && (this.response = a, td(this));
};
k.ha = function() {
  this.g && td(this);
};
function td(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  sd(a);
}
k.setRequestHeader = function(a, b) {
  this.v.append(a, b);
};
k.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const a = [], b = this.h.entries();
  for (var c = b.next(); !c.done; )
    c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
  return a.join("\r\n");
};
function sd(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(qd.prototype, "withCredentials", { get: function() {
  return this.m === "include";
}, set: function(a) {
  this.m = a ? "include" : "same-origin";
} });
var vd = l.JSON.parse;
function X$1(a) {
  C$1.call(this);
  this.headers = new S();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.H = "";
  this.m = 0;
  this.j = "";
  this.l = this.F = this.v = this.D = false;
  this.B = 0;
  this.A = null;
  this.J = wd;
  this.K = this.L = false;
}
t(X$1, C$1);
var wd = "", xd = /^https?$/i, yd = ["POST", "PUT"];
k = X$1.prototype;
k.ea = function(a, b, c, d) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.H = a;
  this.j = "";
  this.m = 0;
  this.D = false;
  this.h = true;
  this.g = this.u ? this.u.g() : cc.g();
  this.C = this.u ? Zb(this.u) : Zb(cc);
  this.g.onreadystatechange = q(this.Fa, this);
  try {
    this.F = true, this.g.open(b, String(a), true), this.F = false;
  } catch (f) {
    zd(this, f);
    return;
  }
  a = c || "";
  const e = new S(this.headers);
  d && Kc(d, function(f, h) {
    e.set(h, f);
  });
  d = oa(e.T());
  c = l.FormData && a instanceof l.FormData;
  !(0 <= ma$1(yd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.g.setRequestHeader(h, f);
  }, this);
  this.J && (this.g.responseType = this.J);
  "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
  try {
    Ad(this), 0 < this.B && ((this.K = Bd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.pa, this)) : this.A = Gb(this.pa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f) {
    zd(this, f);
  }
};
function Bd(a) {
  return y && Ra$1() && typeof a.timeout === "number" && a.ontimeout !== void 0;
}
function pa(a) {
  return a.toLowerCase() == "content-type";
}
k.pa = function() {
  typeof goog != "undefined" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, D$1(this, "timeout"), this.abort(8));
};
function zd(a, b) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b;
  a.m = 5;
  Cd(a);
  Dd(a);
}
function Cd(a) {
  a.D || (a.D = true, D$1(a, "complete"), D$1(a, "error"));
}
k.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, D$1(this, "complete"), D$1(this, "abort"), Dd(this));
};
k.M = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), Dd(this, true));
  X$1.Z.M.call(this);
};
k.Fa = function() {
  this.s || (this.F || this.v || this.l ? Ed(this) : this.cb());
};
k.cb = function() {
  Ed(this);
};
function Ed(a) {
  if (a.h && typeof goog != "undefined" && (!a.C[1] || O$1(a) != 4 || a.ba() != 2)) {
    if (a.v && O$1(a) == 4)
      Gb(a.Fa, 0, a);
    else if (D$1(a, "readystatechange"), O$1(a) == 4) {
      a.h = false;
      try {
        const n = a.ba();
        a:
          switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b = true;
              break a;
            default:
              b = false;
          }
        var c;
        if (!(c = b)) {
          var d;
          if (d = n === 0) {
            var e = String(a.H).match(Mc)[1] || null;
            if (!e && l.self && l.self.location) {
              var f = l.self.location.protocol;
              e = f.substr(0, f.length - 1);
            }
            d = !xd.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c)
          D$1(a, "complete"), D$1(a, "success");
        else {
          a.m = 6;
          try {
            var h = 2 < O$1(a) ? a.g.statusText : "";
          } catch (u) {
            h = "";
          }
          a.j = h + " [" + a.ba() + "]";
          Cd(a);
        }
      } finally {
        Dd(a);
      }
    }
  }
}
function Dd(a, b) {
  if (a.g) {
    Ad(a);
    const c = a.g, d = a.C[0] ? aa : null;
    a.g = null;
    a.C = null;
    b || D$1(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Ad(a) {
  a.g && a.K && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
function O$1(a) {
  return a.g ? a.g.readyState : 0;
}
k.ba = function() {
  try {
    return 2 < O$1(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k.ga = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k.Qa = function(a) {
  if (this.g) {
    var b = this.g.responseText;
    a && b.indexOf(a) == 0 && (b = b.substring(a.length));
    return vd(b);
  }
};
function oc(a) {
  try {
    if (!a.g)
      return null;
    if ("response" in a.g)
      return a.g.response;
    switch (a.J) {
      case wd:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g)
          return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b) {
    return null;
  }
}
k.Da = function() {
  return this.m;
};
k.La = function() {
  return typeof this.j === "string" ? this.j : String(this.j);
};
function Fd(a) {
  let b = "";
  xa(a, function(c, d) {
    b += d;
    b += ":";
    b += c;
    b += "\r\n";
  });
  return b;
}
function Gd(a, b, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = Fd(c), typeof a === "string" ? c != null && encodeURIComponent(String(c)) : R(a, b, c));
}
function Hd(a, b, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
}
function Id(a) {
  this.za = 0;
  this.l = [];
  this.h = new Mb();
  this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null;
  this.Za = this.V = 0;
  this.Xa = Hd("failFast", false, a);
  this.N = this.v = this.u = this.m = this.j = null;
  this.X = true;
  this.I = this.ta = this.U = -1;
  this.Y = this.A = this.C = 0;
  this.Pa = Hd("baseRetryDelayMs", 5e3, a);
  this.$a = Hd("retryDelaySeedMs", 1e4, a);
  this.Ya = Hd("forwardChannelMaxRetries", 2, a);
  this.ra = Hd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.qa = a && a.xmlHttpFactory || void 0;
  this.Ba = a && a.Yb || false;
  this.K = void 0;
  this.H = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.i = new gd(a && a.concurrentRequestLimit);
  this.Ca = new ld();
  this.ja = a && a.fastHandshake || false;
  this.Ra = a && a.Wb || false;
  a && a.Aa && this.h.Aa();
  a && a.forceLongPolling && (this.X = false);
  this.$ = !this.ja && this.X && a && a.detectBufferingProxy || false;
  this.ka = void 0;
  this.O = 0;
  this.L = false;
  this.B = null;
  this.Wa = !a || a.Xb !== false;
}
k = Id.prototype;
k.ma = 8;
k.G = 1;
function Ic(a) {
  Jd(a);
  if (a.G == 3) {
    var b = a.V++, c = N$1(a.F);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Kd(a, c);
    b = new M(a, a.h, b, void 0);
    b.K = 2;
    b.v = jc(N$1(c));
    c = false;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b.v.toString(), ""));
    !c && l.Image && (new Image().src = b.v, c = true);
    c || (b.g = nc(b.l, null), b.g.ea(b.v));
    b.F = Date.now();
    lc(b);
  }
  Ld(a);
}
k.hb = function(a) {
  try {
    this.h.info("Origin Trials invoked: " + a);
  } catch (b) {
  }
};
function Ac(a) {
  a.g && (wc(a), a.g.cancel(), a.g = null);
}
function Jd(a) {
  Ac(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  zc(a);
  a.i.cancel();
  a.m && (typeof a.m === "number" && l.clearTimeout(a.m), a.m = null);
}
function Md(a, b) {
  a.l.push(new fd(a.Za++, b));
  a.G == 3 && Hc(a);
}
function Hc(a) {
  id(a.i) || a.m || (a.m = true, zb(a.Ha, a), a.C = 0);
}
function Nd(a, b) {
  if (Cc(a.i) >= a.i.j - (a.m ? 1 : 0))
    return false;
  if (a.m)
    return a.l = b.D.concat(a.l), true;
  if (a.G == 1 || a.G == 2 || a.C >= (a.Xa ? 0 : a.Ya))
    return false;
  a.m = K(q(a.Ha, a, b), Od(a, a.C));
  a.C++;
  return true;
}
k.Ha = function(a) {
  if (this.m)
    if (this.m = null, this.G == 1) {
      if (!a) {
        this.V = Math.floor(1e5 * Math.random());
        a = this.V++;
        const e = new M(this, this.h, a, void 0);
        let f = this.s;
        this.P && (f ? (f = ya$1(f), Aa(f, this.P)) : f = this.P);
        this.o === null && (e.H = f);
        if (this.ja)
          a: {
            var b = 0;
            for (var c = 0; c < this.l.length; c++) {
              b: {
                var d = this.l[c];
                if ("__data__" in d.g && (d = d.g.__data__, typeof d === "string")) {
                  d = d.length;
                  break b;
                }
                d = void 0;
              }
              if (d === void 0)
                break;
              b += d;
              if (4096 < b) {
                b = c;
                break a;
              }
              if (b === 4096 || c === this.l.length - 1) {
                b = c + 1;
                break a;
              }
            }
            b = 1e3;
          }
        else
          b = 1e3;
        b = Pd(this, e, b);
        c = N$1(this.F);
        R(c, "RID", a);
        R(c, "CVER", 22);
        this.D && R(c, "X-HTTP-Session-Id", this.D);
        Kd(this, c);
        this.o && f && Gd(c, this.o, f);
        Dc(this.i, e);
        this.Ra && R(c, "TYPE", "init");
        this.ja ? (R(c, "$req", b), R(c, "SID", "null"), e.$ = true, ic(e, c, null)) : ic(e, c, b);
        this.G = 2;
      }
    } else
      this.G == 3 && (a ? Qd(this, a) : this.l.length == 0 || id(this.i) || Qd(this));
};
function Qd(a, b) {
  var c;
  b ? c = b.m : c = a.V++;
  const d = N$1(a.F);
  R(d, "SID", a.J);
  R(d, "RID", c);
  R(d, "AID", a.U);
  Kd(a, d);
  a.o && a.s && Gd(d, a.o, a.s);
  c = new M(a, a.h, c, a.C + 1);
  a.o === null && (c.H = a.s);
  b && (a.l = b.D.concat(a.l));
  b = Pd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ra) + Math.round(0.5 * a.ra * Math.random()));
  Dc(a.i, c);
  ic(c, d, b);
}
function Kd(a, b) {
  a.j && Kc({}, function(c, d) {
    R(b, d, c);
  });
}
function Pd(a, b, c) {
  c = Math.min(a.l.length, c);
  var d = a.j ? q(a.j.Oa, a.j, a) : null;
  a: {
    var e = a.l;
    let f = -1;
    for (; ; ) {
      const h = ["count=" + c];
      f == -1 ? 0 < c ? (f = e[0].h, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      let n = true;
      for (let u = 0; u < c; u++) {
        let m = e[u].h;
        const r = e[u].g;
        m -= f;
        if (0 > m)
          f = Math.max(0, e[u].h - 100), n = false;
        else
          try {
            md(r, h, "req" + m + "_");
          } catch (G2) {
            d && d(r);
          }
      }
      if (n) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.l.splice(0, c);
  b.D = a;
  return d;
}
function Gc(a) {
  a.g || a.u || (a.Y = 1, zb(a.Ga, a), a.A = 0);
}
function Bc(a) {
  if (a.g || a.u || 3 <= a.A)
    return false;
  a.Y++;
  a.u = K(q(a.Ga, a), Od(a, a.A));
  a.A++;
  return true;
}
k.Ga = function() {
  this.u = null;
  Rd(this);
  if (this.$ && !(this.L || this.g == null || 0 >= this.O)) {
    var a = 2 * this.O;
    this.h.info("BP detection timer enabled: " + a);
    this.B = K(q(this.bb, this), a);
  }
};
k.bb = function() {
  this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = false, this.L = true, J$1(10), Ac(this), Rd(this));
};
function wc(a) {
  a.B != null && (l.clearTimeout(a.B), a.B = null);
}
function Rd(a) {
  a.g = new M(a, a.h, "rpc", a.Y);
  a.o === null && (a.g.H = a.s);
  a.g.O = 0;
  var b = N$1(a.oa);
  R(b, "RID", "rpc");
  R(b, "SID", a.J);
  R(b, "CI", a.N ? "0" : "1");
  R(b, "AID", a.U);
  Kd(a, b);
  R(b, "TYPE", "xmlhttp");
  a.o && a.s && Gd(b, a.o, a.s);
  a.K && a.g.setTimeout(a.K);
  var c = a.g;
  a = a.la;
  c.K = 1;
  c.v = jc(N$1(b));
  c.s = null;
  c.U = true;
  kc(c, a);
}
k.ab = function() {
  this.v != null && (this.v = null, Ac(this), Bc(this), J$1(19));
};
function zc(a) {
  a.v != null && (l.clearTimeout(a.v), a.v = null);
}
function uc(a, b) {
  var c = null;
  if (a.g == b) {
    zc(a);
    wc(a);
    a.g = null;
    var d = 2;
  } else if (yc(a.i, b))
    c = b.D, Fc(a.i, b), d = 1;
  else
    return;
  a.I = b.N;
  if (a.G != 0) {
    if (b.i)
      if (d == 1) {
        c = b.s ? b.s.length : 0;
        b = Date.now() - b.F;
        var e = a.C;
        d = Sb();
        D$1(d, new Vb(d, c, b, e));
        Hc(a);
      } else
        Gc(a);
    else if (e = b.o, e == 3 || e == 0 && 0 < a.I || !(d == 1 && Nd(a, b) || d == 2 && Bc(a)))
      switch (c && 0 < c.length && (b = a.i, b.i = b.i.concat(c)), e) {
        case 1:
          Q$1(a, 5);
          break;
        case 4:
          Q$1(a, 10);
          break;
        case 3:
          Q$1(a, 6);
          break;
        default:
          Q$1(a, 2);
      }
  }
}
function Od(a, b) {
  let c = a.Pa + Math.floor(Math.random() * a.$a);
  a.j || (c *= 2);
  return c * b;
}
function Q$1(a, b) {
  a.h.info("Error code " + b);
  if (b == 2) {
    var c = null;
    a.j && (c = null);
    var d = q(a.jb, a);
    c || (c = new U$1("//www.google.com/images/cleardot.gif"), l.location && l.location.protocol == "http" || Oc(c, "https"), jc(c));
    nd(c.toString(), d);
  } else
    J$1(2);
  a.G = 0;
  a.j && a.j.va(b);
  Ld(a);
  Jd(a);
}
k.jb = function(a) {
  a ? (this.h.info("Successfully pinged google.com"), J$1(2)) : (this.h.info("Failed to ping google.com"), J$1(1));
};
function Ld(a) {
  a.G = 0;
  a.I = -1;
  if (a.j) {
    if (jd(a.i).length != 0 || a.l.length != 0)
      a.i.i.length = 0, ra(a.l), a.l.length = 0;
    a.j.ua();
  }
}
function Ec(a, b, c) {
  let d = ad(c);
  if (d.i != "")
    b && Pc(d, b + "." + d.i), Qc(d, d.m);
  else {
    const e = l.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.aa && xa(a.aa, function(e, f) {
    R(d, f, e);
  });
  b = a.D;
  c = a.sa;
  b && c && R(d, b, c);
  R(d, "VER", a.ma);
  Kd(a, d);
  return d;
}
function nc(a, b, c) {
  if (b && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b = c && a.Ba && !a.qa ? new X$1(new pd({ ib: true })) : new X$1(a.qa);
  b.L = a.H;
  return b;
}
function Sd() {
}
k = Sd.prototype;
k.xa = function() {
};
k.wa = function() {
};
k.va = function() {
};
k.ua = function() {
};
k.Oa = function() {
};
function Y$1(a, b) {
  C$1.call(this);
  this.g = new Id(b);
  this.l = a;
  this.h = b && b.messageUrlParams || null;
  a = b && b.messageHeaders || null;
  b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.g.s = a;
  a = b && b.initMessageHeaders || null;
  b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
  b && b.ya && (a ? a["X-WebChannel-Client-Profile"] = b.ya : a = { "X-WebChannel-Client-Profile": b.ya });
  this.g.P = a;
  (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.g.o = a);
  this.A = b && b.supportsCrossDomainXhr || false;
  this.v = b && b.sendRawJson || false;
  (b = b && b.httpSessionIdParam) && !sa(b) && (this.g.D = b, a = this.h, a !== null && b in a && (a = this.h, b in a && delete a[b]));
  this.j = new Z$1(this);
}
t(Y$1, C$1);
Y$1.prototype.m = function() {
  this.g.j = this.j;
  this.A && (this.g.H = true);
  var a = this.g, b = this.l, c = this.h || void 0;
  a.Wa && (a.h.info("Origin Trials enabled."), zb(q(a.hb, a, b)));
  J$1(0);
  a.W = b;
  a.aa = c || {};
  a.N = a.X;
  a.F = Ec(a, null, a.W);
  Hc(a);
};
Y$1.prototype.close = function() {
  Ic(this.g);
};
Y$1.prototype.u = function(a) {
  if (typeof a === "string") {
    var b = {};
    b.__data__ = a;
    Md(this.g, b);
  } else
    this.v ? (b = {}, b.__data__ = rb(a), Md(this.g, b)) : Md(this.g, a);
};
Y$1.prototype.M = function() {
  this.g.j = null;
  delete this.j;
  Ic(this.g);
  delete this.g;
  Y$1.Z.M.call(this);
};
function Ud(a) {
  ac.call(this);
  var b = a.__sm__;
  if (b) {
    a: {
      for (const c in b) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a)
      a = this.i, b = b !== null && a in b ? b[a] : void 0;
    this.data = b;
  } else
    this.data = a;
}
t(Ud, ac);
function Vd() {
  bc.call(this);
  this.status = 1;
}
t(Vd, bc);
function Z$1(a) {
  this.g = a;
}
t(Z$1, Sd);
Z$1.prototype.xa = function() {
  D$1(this.g, "a");
};
Z$1.prototype.wa = function(a) {
  D$1(this.g, new Ud(a));
};
Z$1.prototype.va = function(a) {
  D$1(this.g, new Vd(a));
};
Z$1.prototype.ua = function() {
  D$1(this.g, "b");
};
Y$1.prototype.send = Y$1.prototype.u;
Y$1.prototype.open = Y$1.prototype.m;
Y$1.prototype.close = Y$1.prototype.close;
Wb.NO_ERROR = 0;
Wb.TIMEOUT = 8;
Wb.HTTP_ERROR = 6;
Xb.COMPLETE = "complete";
L$1.OPEN = "a";
L$1.CLOSE = "b";
L$1.ERROR = "c";
L$1.MESSAGE = "d";
C$1.prototype.listen = C$1.prototype.N;
X$1.prototype.listenOnce = X$1.prototype.O;
X$1.prototype.getLastError = X$1.prototype.La;
X$1.prototype.getLastErrorCode = X$1.prototype.Da;
X$1.prototype.getStatus = X$1.prototype.ba;
X$1.prototype.getResponseJson = X$1.prototype.Qa;
X$1.prototype.getResponseText = X$1.prototype.ga;
X$1.prototype.send = X$1.prototype.ea;
const D = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C {
  constructor(t2) {
    this.uid = t2;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t2) {
    return t2.uid === this.uid;
  }
}
C.UNAUTHENTICATED = new C(null), C.GOOGLE_CREDENTIALS = new C("google-credentials-uid"), C.FIRST_PARTY = new C("first-party-uid"), C.MOCK_USER = new C("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let x = "9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N = new Logger("@firebase/firestore");
function O(t2, ...e) {
  if (N.logLevel <= LogLevel.DEBUG) {
    const n = e.map(B);
    N.debug(`Firestore (${x}): ${t2}`, ...n);
  }
}
function F(t2, ...e) {
  if (N.logLevel <= LogLevel.ERROR) {
    const n = e.map(B);
    N.error(`Firestore (${x}): ${t2}`, ...n);
  }
}
function B(t2) {
  if (typeof t2 == "string")
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t2 = "Unexpected state") {
  const e = `FIRESTORE (${x}) INTERNAL ASSERTION FAILED: ` + t2;
  throw F(e), new Error(e);
}
function U(t2, e) {
  t2 || L();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class Q extends FirebaseError {
  constructor(t2, e) {
    super(t2, e), this.code = t2, this.message = e, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j {
  constructor() {
    this.promise = new Promise((t2, e) => {
      this.resolve = t2, this.reject = e;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W {
  constructor(t2, e) {
    this.user = e, this.type = "OAuth", this.headers = new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
  }
}
class z {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(C.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class J {
  constructor(t2) {
    this.t = t2, this.currentUser = C.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t2, e) {
    let n = this.i;
    const s = (t3) => this.i !== n ? (n = this.i, e(t3)) : Promise.resolve();
    let i = new j();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new j(), t2.enqueueRetryable(() => s(this.currentUser));
    };
    const r = () => {
      const e2 = i;
      t2.enqueueRetryable(async () => {
        await e2.promise, await s(this.currentUser);
      });
    }, o = (t3) => {
      O("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r();
    };
    this.t.onInit((t3) => o(t3)), setTimeout(() => {
      if (!this.auth) {
        const t3 = this.t.getImmediate({
          optional: true
        });
        t3 ? o(t3) : (O("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new j());
      }
    }, 0), r();
  }
  getToken() {
    const t2 = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => this.i !== t2 ? (O("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (U(typeof e2.accessToken == "string"), new W(e2.accessToken, this.currentUser)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t2 = this.auth && this.auth.getUid();
    return U(t2 === null || typeof t2 == "string"), new C(t2);
  }
}
class Y {
  constructor(t2, e, n) {
    this.type = "FirstParty", this.user = C.FIRST_PARTY, this.headers = new Map(), this.headers.set("X-Goog-AuthUser", e);
    const s = t2.auth.getAuthHeaderValueForFirstParty([]);
    s && this.headers.set("Authorization", s), n && this.headers.set("X-Goog-Iam-Authorization-Token", n);
  }
}
class X {
  constructor(t2, e, n) {
    this.h = t2, this.l = e, this.m = n;
  }
  getToken() {
    return Promise.resolve(new Y(this.h, this.l, this.m));
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(C.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class Z {
  constructor(t2) {
    this.value = t2, this.type = "AppCheck", this.headers = new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class tt {
  constructor(t2) {
    this.g = t2, this.forceRefresh = false, this.appCheck = null, this.p = null;
  }
  start(t2, e) {
    const n = (t3) => {
      t3.error != null && O("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t3.error.message}`);
      const n2 = t3.token !== this.p;
      return this.p = t3.token, O("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? e(t3.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t2.enqueueRetryable(() => n(e2));
    };
    const s = (t3) => {
      O("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t3, this.appCheck.addTokenListener(this.o);
    };
    this.g.onInit((t3) => s(t3)), setTimeout(() => {
      if (!this.appCheck) {
        const t3 = this.g.getImmediate({
          optional: true
        });
        t3 ? s(t3) : O("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
      }
    }, 0);
  }
  getToken() {
    const t2 = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t2).then((t3) => t3 ? (U(typeof t3.token == "string"), this.p = t3.token, new Z(t3.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nt(t2) {
  const e = typeof self != "undefined" && (self.crypto || self.msCrypto), n = new Uint8Array(t2);
  if (e && typeof e.getRandomValues == "function")
    e.getRandomValues(n);
  else
    for (let e2 = 0; e2 < t2; e2++)
      n[e2] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st {
  static I() {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
    let n = "";
    for (; n.length < 20; ) {
      const s = nt(40);
      for (let i = 0; i < s.length; ++i)
        n.length < 20 && s[i] < e && (n += t2.charAt(s[i] % t2.length));
    }
    return n;
  }
}
function Nt(t2) {
  return t2.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe {
  constructor(t2, e, n, s, i, r, o, u) {
    this.databaseId = t2, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = u;
  }
}
class ue {
  constructor(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  static empty() {
    return new ue("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t2) {
    return t2 instanceof ue && t2.projectId === this.projectId && t2.database === this.database;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns, ss;
(ss = ns || (ns = {}))[ss.OK = 0] = "OK", ss[ss.CANCELLED = 1] = "CANCELLED", ss[ss.UNKNOWN = 2] = "UNKNOWN", ss[ss.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ss[ss.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ss[ss.NOT_FOUND = 5] = "NOT_FOUND", ss[ss.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ss[ss.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ss[ss.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ss[ss.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ss[ss.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ss[ss.ABORTED = 10] = "ABORTED", ss[ss.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ss[ss.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ss[ss.INTERNAL = 13] = "INTERNAL", ss[ss.UNAVAILABLE = 14] = "UNAVAILABLE", ss[ss.DATA_LOSS = 15] = "DATA_LOSS";
function su() {
  return typeof document != "undefined" ? document : null;
}
class ru {
  constructor(t2, e, n = 1e3, s = 1.5, i = 6e4) {
    this.js = t2, this.timerId = e, this.lo = n, this.fo = s, this._o = i, this.wo = 0, this.mo = null, this.yo = Date.now(), this.reset();
  }
  reset() {
    this.wo = 0;
  }
  po() {
    this.wo = this._o;
  }
  Io(t2) {
    this.cancel();
    const e = Math.floor(this.wo + this.To()), n = Math.max(0, Date.now() - this.yo), s = Math.max(0, e - n);
    s > 0 && O("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.mo = this.js.enqueueAfterDelay(this.timerId, s, () => (this.yo = Date.now(), t2())), this.wo *= this.fo, this.wo < this.lo && (this.wo = this.lo), this.wo > this._o && (this.wo = this._o);
  }
  Eo() {
    this.mo !== null && (this.mo.skipDelay(), this.mo = null);
  }
  cancel() {
    this.mo !== null && (this.mo.cancel(), this.mo = null);
  }
  To() {
    return (Math.random() - 0.5) * this.wo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new j(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t3) => {
    });
  }
  static createAndSchedule(t2, e, n, s, i) {
    const r = Date.now() + n, o = new Lu(t2, e, r, s, i);
    return o.start(n), o;
  }
  start(t2) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t2) {
    this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new Q(G.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
  }
  clearTimeout() {
    this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Uu(t2, e) {
  if (F("AsyncQueue", `${e}: ${t2}`), Nt(t2))
    return new Q(G.UNAVAILABLE, `${e}: ${t2}`);
  throw t2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc {
  constructor(t2, e, n, s) {
    this.authCredentials = t2, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, this.user = C.UNAUTHENTICATED, this.clientId = st.I(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async (t3) => {
      O("FirestoreClient", "Received user=", t3.uid), await this.authCredentialListener(t3), this.user = t3;
    }), this.appCheckCredentials.start(n, (t3) => (O("FirestoreClient", "Received new app check token=", t3), this.appCheckCredentialListener(t3, this.user)));
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t2) {
    this.authCredentialListener = t2;
  }
  setAppCheckTokenChangeListener(t2) {
    this.appCheckCredentialListener = t2;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new Q(G.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t2 = new j();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t2.resolve();
      } catch (e) {
        const n = Uu(e, "Failed to shutdown persistence");
        t2.reject(n);
      }
    }), t2.promise;
  }
}
const ma = new Map();
function ya(t2, e, n, s) {
  if (e === true && s === true)
    throw new Q(G.INVALID_ARGUMENT, `${t2} and ${n} cannot be used together.`);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra {
  constructor(t2) {
    var e;
    if (t2.host === void 0) {
      if (t2.ssl !== void 0)
        throw new Q(G.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t2.host, this.ssl = (e = t2.ssl) === null || e === void 0 || e;
    if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, t2.cacheSizeBytes === void 0)
      this.cacheSizeBytes = 41943040;
    else {
      if (t2.cacheSizeBytes !== -1 && t2.cacheSizeBytes < 1048576)
        throw new Q(G.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, ya("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
  }
  isEqual(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba {
  constructor(t2, e, n) {
    this._authCredentials = e, this._appCheckCredentials = n, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Ra({}), this._settingsFrozen = false, t2 instanceof ue ? this._databaseId = t2 : (this._app = t2, this._databaseId = function(t3) {
      if (!Object.prototype.hasOwnProperty.apply(t3.options, ["projectId"]))
        throw new Q(G.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ue(t3.options.projectId);
    }(t2));
  }
  get app() {
    if (!this._app)
      throw new Q(G.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t2) {
    if (this._settingsFrozen)
      throw new Q(G.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Ra(t2), t2.credentials !== void 0 && (this._authCredentials = function(t3) {
      if (!t3)
        return new z();
      switch (t3.type) {
        case "gapi":
          const e = t3.client;
          return U(!(typeof e != "object" || e === null || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new X(e, t3.sessionIndex || "0", t3.iamToken || null);
        case "provider":
          return t3.client;
        default:
          throw new Q(G.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t2.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    return function(t2) {
      const e = ma.get(t2);
      e && (O("ComponentProvider", "Removing Datastore"), ma.delete(t2), e.terminate());
    }(this), Promise.resolve();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma {
  constructor() {
    this.Mc = Promise.resolve(), this.Oc = [], this.Fc = false, this.$c = [], this.Bc = null, this.Lc = false, this.Uc = false, this.qc = [], this.So = new ru(this, "async_queue_retry"), this.Kc = () => {
      const t3 = su();
      t3 && O("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.So.Eo();
    };
    const t2 = su();
    t2 && typeof t2.addEventListener == "function" && t2.addEventListener("visibilitychange", this.Kc);
  }
  get isShuttingDown() {
    return this.Fc;
  }
  enqueueAndForget(t2) {
    this.enqueue(t2);
  }
  enqueueAndForgetEvenWhileRestricted(t2) {
    this.Gc(), this.Qc(t2);
  }
  enterRestrictedMode(t2) {
    if (!this.Fc) {
      this.Fc = true, this.Uc = t2 || false;
      const e = su();
      e && typeof e.removeEventListener == "function" && e.removeEventListener("visibilitychange", this.Kc);
    }
  }
  enqueue(t2) {
    if (this.Gc(), this.Fc)
      return new Promise(() => {
      });
    const e = new j();
    return this.Qc(() => this.Fc && this.Uc ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t2) {
    this.enqueueAndForget(() => (this.Oc.push(t2), this.jc()));
  }
  async jc() {
    if (this.Oc.length !== 0) {
      try {
        await this.Oc[0](), this.Oc.shift(), this.So.reset();
      } catch (t2) {
        if (!Nt(t2))
          throw t2;
        O("AsyncQueue", "Operation failed with retryable error: " + t2);
      }
      this.Oc.length > 0 && this.So.Io(() => this.jc());
    }
  }
  Qc(t2) {
    const e = this.Mc.then(() => (this.Lc = true, t2().catch((t3) => {
      this.Bc = t3, this.Lc = false;
      const e2 = function(t4) {
        let e3 = t4.message || "";
        t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
        return e3;
      }(t3);
      throw F("INTERNAL UNHANDLED ERROR: ", e2), t3;
    }).then((t3) => (this.Lc = false, t3))));
    return this.Mc = e, e;
  }
  enqueueAfterDelay(t2, e, n) {
    this.Gc(), this.qc.indexOf(t2) > -1 && (e = 0);
    const s = Lu.createAndSchedule(this, t2, e, n, (t3) => this.Wc(t3));
    return this.$c.push(s), s;
  }
  Gc() {
    this.Bc && L();
  }
  verifyOperationInProgress() {
  }
  async zc() {
    let t2;
    do {
      t2 = this.Mc, await t2;
    } while (t2 !== this.Mc);
  }
  Hc(t2) {
    for (const e of this.$c)
      if (e.timerId === t2)
        return true;
    return false;
  }
  Jc(t2) {
    return this.zc().then(() => {
      this.$c.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
      for (const e of this.$c)
        if (e.skipDelay(), t2 !== "all" && e.timerId === t2)
          break;
      return this.zc();
    });
  }
  Yc(t2) {
    this.qc.push(t2);
  }
  Wc(t2) {
    const e = this.$c.indexOf(t2);
    this.$c.splice(e, 1);
  }
}
class Ba extends ba {
  constructor(t2, e, n) {
    super(t2, e, n), this.type = "firestore", this._queue = new Ma(), this._persistenceKey = "name" in t2 ? t2.name : "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || Ka(this), this._firestoreClient.terminate();
  }
}
function Ka(t2) {
  var e;
  const n = t2._freezeSettings(), s = function(t3, e2, n2, s2) {
    return new oe(t3, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
  }(t2._databaseId, ((e = t2._app) === null || e === void 0 ? void 0 : e.options.appId) || "", t2._persistenceKey, n);
  t2._firestoreClient = new Jc(t2._authCredentials, t2._appCheckCredentials, t2._queue, s);
}
!function(t2, e = true) {
  !function(t3) {
    x = t3;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { options: n }) => {
    const s = t3.getProvider("app").getImmediate(), i = new Ba(s, new J(t3.getProvider("auth-internal")), new tt(t3.getProvider("app-check-internal")));
    return n = Object.assign({
      useFetchStreams: e
    }, n), i._setSettings(n), i;
  }, "PUBLIC")), registerVersion(D, "3.4.14", t2), registerVersion(D, "3.4.14", "esm2017");
}();
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  const sub = authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
    if (!isLoggedIn && firebaseControlled) {
      await goto("/login");
    }
  });
  onDestroy(() => {
    sub();
  });
  $$unsubscribe_authStore();
  return `

<nav class="${"navbar navbar-expand-lg navbar-dark bg-dark"}"><div class="${"container-fluid"}"><h1 class="${"navbar-brand"}">My Dashboard</h1>
    <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
    <div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav mr-auto"}"><li class="${"nav-item"}"><a class="${"nav-link"}">Home</a></li>
        <li class="${"nav-item"}"><a class="${"nav-link"}">Blogs</a></li></ul>
      <div class="${"d-flex ms-auto"}"><button class="${"btn btn-danger"}">Sign Out</button></div></div></div></nav>

<div class="${"container-fluid mt-5"}"><div class="${"row"}"><div class="${"col-md"}"><div class="${"card h-100"}"><div class="${"card-header bg-dark text-white"}">Quote of the Day
        </div>
        <div class="${"card-body"}">${validate_component(Quote, "Quote").$$render($$result, {}, {}, {})}</div></div></div>
    <div class="${"col-md"}">\xA0 \xA0 \xA0 <div class="${"card h-100"}"><div class="${"card-header bg-dark text-white"}">To Do List
        </div>
        <div class="${"card-body"}"><col-md></col-md>
          <col-md></col-md></div></div></div></div></div>`;
});
export { Routes as default };
