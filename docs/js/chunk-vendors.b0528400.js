;(self['webpackChunksan_diego_cyber'] =
  self['webpackChunksan_diego_cyber'] || []).push([
  [504],
  {
    953: function (e, t, n) {
      'use strict'
      n.d(t, {
        C4: function () {
          return g
        },
        EW: function () {
          return Se
        },
        Gc: function () {
          return ve
        },
        IG: function () {
          return Ee
        },
        KR: function () {
          return Ae
        },
        Kh: function () {
          return fe
        },
        Pr: function () {
          return We
        },
        X2: function () {
          return u
        },
        bl: function () {
          return y
        },
        fE: function () {
          return be
        },
        g8: function () {
          return ye
        },
        hZ: function () {
          return x
        },
        i9: function () {
          return Oe
        },
        ju: function () {
          return _e
        },
        o5: function () {
          return a
        },
        u4: function () {
          return M
        },
        ux: function () {
          return De
        },
        yC: function () {
          return o
        },
      })
      var i = n(33)
      /**
       * @vue/reactivity v3.4.27
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/ let s, r
      class o {
        constructor(e = !1) {
          ;(this.detached = e),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = s),
            !e &&
              s &&
              (this.index = (s.scopes || (s.scopes = [])).push(this) - 1)
        }
        get active() {
          return this._active
        }
        run(e) {
          if (this._active) {
            const t = s
            try {
              return (s = this), e()
            } finally {
              s = t
            }
          } else 0
        }
        on() {
          s = this
        }
        off() {
          s = this.parent
        }
        stop(e) {
          if (this._active) {
            let t, n
            for (t = 0, n = this.effects.length; t < n; t++)
              this.effects[t].stop()
            for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]()
            if (this.scopes)
              for (t = 0, n = this.scopes.length; t < n; t++)
                this.scopes[t].stop(!0)
            if (!this.detached && this.parent && !e) {
              const e = this.parent.scopes.pop()
              e &&
                e !== this &&
                ((this.parent.scopes[this.index] = e), (e.index = this.index))
            }
            ;(this.parent = void 0), (this._active = !1)
          }
        }
      }
      function l(e, t = s) {
        t && t.active && t.effects.push(e)
      }
      function a() {
        return s
      }
      class u {
        constructor(e, t, n, i) {
          ;(this.fn = e),
            (this.trigger = t),
            (this.scheduler = n),
            (this.active = !0),
            (this.deps = []),
            (this._dirtyLevel = 4),
            (this._trackId = 0),
            (this._runnings = 0),
            (this._shouldSchedule = !1),
            (this._depsLength = 0),
            l(this, i)
        }
        get dirty() {
          if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
            ;(this._dirtyLevel = 1), g()
            for (let e = 0; e < this._depsLength; e++) {
              const t = this.deps[e]
              if (t.computed && (c(t.computed), this._dirtyLevel >= 4)) break
            }
            1 === this._dirtyLevel && (this._dirtyLevel = 0), y()
          }
          return this._dirtyLevel >= 4
        }
        set dirty(e) {
          this._dirtyLevel = e ? 4 : 0
        }
        run() {
          if (((this._dirtyLevel = 0), !this.active)) return this.fn()
          let e = f,
            t = r
          try {
            return (f = !0), (r = this), this._runnings++, d(this), this.fn()
          } finally {
            h(this), this._runnings--, (r = t), (f = e)
          }
        }
        stop() {
          this.active &&
            (d(this), h(this), this.onStop && this.onStop(), (this.active = !1))
        }
      }
      function c(e) {
        return e.value
      }
      function d(e) {
        e._trackId++, (e._depsLength = 0)
      }
      function h(e) {
        if (e.deps.length > e._depsLength) {
          for (let t = e._depsLength; t < e.deps.length; t++) p(e.deps[t], e)
          e.deps.length = e._depsLength
        }
      }
      function p(e, t) {
        const n = e.get(t)
        void 0 !== n &&
          t._trackId !== n &&
          (e.delete(t), 0 === e.size && e.cleanup())
      }
      let f = !0,
        v = 0
      const m = []
      function g() {
        m.push(f), (f = !1)
      }
      function y() {
        const e = m.pop()
        f = void 0 === e || e
      }
      function w() {
        v++
      }
      function b() {
        v--
        while (!v && D.length) D.shift()()
      }
      function _(e, t, n) {
        if (t.get(e) !== e._trackId) {
          t.set(e, e._trackId)
          const n = e.deps[e._depsLength]
          n !== t
            ? (n && p(n, e), (e.deps[e._depsLength++] = t))
            : e._depsLength++
        }
      }
      const D = []
      function E(e, t, n) {
        w()
        for (const i of e.keys()) {
          let n
          i._dirtyLevel < t &&
            (null != n ? n : (n = e.get(i) === i._trackId)) &&
            (i._shouldSchedule || (i._shouldSchedule = 0 === i._dirtyLevel),
            (i._dirtyLevel = t)),
            i._shouldSchedule &&
              (null != n ? n : (n = e.get(i) === i._trackId)) &&
              (i.trigger(),
              (i._runnings && !i.allowRecurse) ||
                2 === i._dirtyLevel ||
                ((i._shouldSchedule = !1), i.scheduler && D.push(i.scheduler)))
        }
        b()
      }
      const T = (e, t) => {
          const n = new Map()
          return (n.cleanup = e), (n.computed = t), n
        },
        C = new WeakMap(),
        k = Symbol(''),
        S = Symbol('')
      function M(e, t, n) {
        if (f && r) {
          let t = C.get(e)
          t || C.set(e, (t = new Map()))
          let i = t.get(n)
          i || t.set(n, (i = T(() => t.delete(n)))), _(r, i, void 0)
        }
      }
      function x(e, t, n, s, r, o) {
        const l = C.get(e)
        if (!l) return
        let a = []
        if ('clear' === t) a = [...l.values()]
        else if ('length' === n && (0, i.cy)(e)) {
          const e = Number(s)
          l.forEach((t, n) => {
            ;('length' === n || (!(0, i.Bm)(n) && n >= e)) && a.push(t)
          })
        } else
          switch ((void 0 !== n && a.push(l.get(n)), t)) {
            case 'add':
              ;(0, i.cy)(e)
                ? (0, i.yI)(n) && a.push(l.get('length'))
                : (a.push(l.get(k)), (0, i.CE)(e) && a.push(l.get(S)))
              break
            case 'delete':
              ;(0, i.cy)(e) ||
                (a.push(l.get(k)), (0, i.CE)(e) && a.push(l.get(S)))
              break
            case 'set':
              ;(0, i.CE)(e) && a.push(l.get(k))
              break
          }
        w()
        for (const i of a) i && E(i, 4, void 0)
        b()
      }
      const O = (0, i.pD)('__proto__,__v_isRef,__isVue'),
        A = new Set(
          Object.getOwnPropertyNames(Symbol)
            .filter((e) => 'arguments' !== e && 'caller' !== e)
            .map((e) => Symbol[e])
            .filter(i.Bm),
        ),
        L = $()
      function $() {
        const e = {}
        return (
          ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
            e[t] = function (...e) {
              const n = De(this)
              for (let t = 0, s = this.length; t < s; t++) M(n, 'get', t + '')
              const i = n[t](...e)
              return -1 === i || !1 === i ? n[t](...e.map(De)) : i
            }
          }),
          ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
            e[t] = function (...e) {
              g(), w()
              const n = De(this)[t].apply(this, e)
              return b(), y(), n
            }
          }),
          e
        )
      }
      function N(e) {
        ;(0, i.Bm)(e) || (e = String(e))
        const t = De(this)
        return M(t, 'has', e), t.hasOwnProperty(e)
      }
      class R {
        constructor(e = !1, t = !1) {
          ;(this._isReadonly = e), (this._isShallow = t)
        }
        get(e, t, n) {
          const s = this._isReadonly,
            r = this._isShallow
          if ('__v_isReactive' === t) return !s
          if ('__v_isReadonly' === t) return s
          if ('__v_isShallow' === t) return r
          if ('__v_raw' === t)
            return n === (s ? (r ? de : ce) : r ? ue : ae).get(e) ||
              Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
              ? e
              : void 0
          const o = (0, i.cy)(e)
          if (!s) {
            if (o && (0, i.$3)(L, t)) return Reflect.get(L, t, n)
            if ('hasOwnProperty' === t) return N
          }
          const l = Reflect.get(e, t, n)
          return ((0, i.Bm)(t) ? A.has(t) : O(t))
            ? l
            : (s || M(e, 'get', t),
              r
                ? l
                : Oe(l)
                  ? o && (0, i.yI)(t)
                    ? l
                    : l.value
                  : (0, i.Gv)(l)
                    ? s
                      ? me(l)
                      : fe(l)
                    : l)
        }
      }
      class W extends R {
        constructor(e = !1) {
          super(!1, e)
        }
        set(e, t, n, s) {
          let r = e[t]
          if (!this._isShallow) {
            const t = we(r)
            if (
              (be(n) || we(n) || ((r = De(r)), (n = De(n))),
              !(0, i.cy)(e) && Oe(r) && !Oe(n))
            )
              return !t && ((r.value = n), !0)
          }
          const o =
              (0, i.cy)(e) && (0, i.yI)(t)
                ? Number(t) < e.length
                : (0, i.$3)(e, t),
            l = Reflect.set(e, t, n, s)
          return (
            e === De(s) &&
              (o ? (0, i.$H)(n, r) && x(e, 'set', t, n, r) : x(e, 'add', t, n)),
            l
          )
        }
        deleteProperty(e, t) {
          const n = (0, i.$3)(e, t),
            s = e[t],
            r = Reflect.deleteProperty(e, t)
          return r && n && x(e, 'delete', t, void 0, s), r
        }
        has(e, t) {
          const n = Reflect.has(e, t)
          return ((0, i.Bm)(t) && A.has(t)) || M(e, 'has', t), n
        }
        ownKeys(e) {
          return (
            M(e, 'iterate', (0, i.cy)(e) ? 'length' : k), Reflect.ownKeys(e)
          )
        }
      }
      class j extends R {
        constructor(e = !1) {
          super(!0, e)
        }
        set(e, t) {
          return !0
        }
        deleteProperty(e, t) {
          return !0
        }
      }
      const F = new W(),
        I = new j(),
        H = new W(!0),
        P = (e) => e,
        V = (e) => Reflect.getPrototypeOf(e)
      function B(e, t, n = !1, s = !1) {
        e = e['__v_raw']
        const r = De(e),
          o = De(t)
        n || ((0, i.$H)(t, o) && M(r, 'get', t), M(r, 'get', o))
        const { has: l } = V(r),
          a = s ? P : n ? Ce : Te
        return l.call(r, t)
          ? a(e.get(t))
          : l.call(r, o)
            ? a(e.get(o))
            : void (e !== r && e.get(t))
      }
      function U(e, t = !1) {
        const n = this['__v_raw'],
          s = De(n),
          r = De(e)
        return (
          t || ((0, i.$H)(e, r) && M(s, 'has', e), M(s, 'has', r)),
          e === r ? n.has(e) : n.has(e) || n.has(r)
        )
      }
      function X(e, t = !1) {
        return (
          (e = e['__v_raw']),
          !t && M(De(e), 'iterate', k),
          Reflect.get(e, 'size', e)
        )
      }
      function Y(e) {
        e = De(e)
        const t = De(this),
          n = V(t),
          i = n.has.call(t, e)
        return i || (t.add(e), x(t, 'add', e, e)), this
      }
      function z(e, t) {
        t = De(t)
        const n = De(this),
          { has: s, get: r } = V(n)
        let o = s.call(n, e)
        o || ((e = De(e)), (o = s.call(n, e)))
        const l = r.call(n, e)
        return (
          n.set(e, t),
          o ? (0, i.$H)(t, l) && x(n, 'set', e, t, l) : x(n, 'add', e, t),
          this
        )
      }
      function G(e) {
        const t = De(this),
          { has: n, get: i } = V(t)
        let s = n.call(t, e)
        s || ((e = De(e)), (s = n.call(t, e)))
        const r = i ? i.call(t, e) : void 0,
          o = t.delete(e)
        return s && x(t, 'delete', e, void 0, r), o
      }
      function K() {
        const e = De(this),
          t = 0 !== e.size,
          n = void 0,
          i = e.clear()
        return t && x(e, 'clear', void 0, void 0, n), i
      }
      function Q(e, t) {
        return function (n, i) {
          const s = this,
            r = s['__v_raw'],
            o = De(r),
            l = t ? P : e ? Ce : Te
          return (
            !e && M(o, 'iterate', k),
            r.forEach((e, t) => n.call(i, l(e), l(t), s))
          )
        }
      }
      function Z(e, t, n) {
        return function (...s) {
          const r = this['__v_raw'],
            o = De(r),
            l = (0, i.CE)(o),
            a = 'entries' === e || (e === Symbol.iterator && l),
            u = 'keys' === e && l,
            c = r[e](...s),
            d = n ? P : t ? Ce : Te
          return (
            !t && M(o, 'iterate', u ? S : k),
            {
              next() {
                const { value: e, done: t } = c.next()
                return t
                  ? { value: e, done: t }
                  : { value: a ? [d(e[0]), d(e[1])] : d(e), done: t }
              },
              [Symbol.iterator]() {
                return this
              },
            }
          )
        }
      }
      function q(e) {
        return function (...t) {
          return 'delete' !== e && ('clear' === e ? void 0 : this)
        }
      }
      function J() {
        const e = {
            get(e) {
              return B(this, e)
            },
            get size() {
              return X(this)
            },
            has: U,
            add: Y,
            set: z,
            delete: G,
            clear: K,
            forEach: Q(!1, !1),
          },
          t = {
            get(e) {
              return B(this, e, !1, !0)
            },
            get size() {
              return X(this)
            },
            has: U,
            add: Y,
            set: z,
            delete: G,
            clear: K,
            forEach: Q(!1, !0),
          },
          n = {
            get(e) {
              return B(this, e, !0)
            },
            get size() {
              return X(this, !0)
            },
            has(e) {
              return U.call(this, e, !0)
            },
            add: q('add'),
            set: q('set'),
            delete: q('delete'),
            clear: q('clear'),
            forEach: Q(!0, !1),
          },
          i = {
            get(e) {
              return B(this, e, !0, !0)
            },
            get size() {
              return X(this, !0)
            },
            has(e) {
              return U.call(this, e, !0)
            },
            add: q('add'),
            set: q('set'),
            delete: q('delete'),
            clear: q('clear'),
            forEach: Q(!0, !0),
          },
          s = ['keys', 'values', 'entries', Symbol.iterator]
        return (
          s.forEach((s) => {
            ;(e[s] = Z(s, !1, !1)),
              (n[s] = Z(s, !0, !1)),
              (t[s] = Z(s, !1, !0)),
              (i[s] = Z(s, !0, !0))
          }),
          [e, n, t, i]
        )
      }
      const [ee, te, ne, ie] = J()
      function se(e, t) {
        const n = t ? (e ? ie : ne) : e ? te : ee
        return (t, s, r) =>
          '__v_isReactive' === s
            ? !e
            : '__v_isReadonly' === s
              ? e
              : '__v_raw' === s
                ? t
                : Reflect.get((0, i.$3)(n, s) && s in t ? n : t, s, r)
      }
      const re = { get: se(!1, !1) },
        oe = { get: se(!1, !0) },
        le = { get: se(!0, !1) }
      const ae = new WeakMap(),
        ue = new WeakMap(),
        ce = new WeakMap(),
        de = new WeakMap()
      function he(e) {
        switch (e) {
          case 'Object':
          case 'Array':
            return 1
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
            return 2
          default:
            return 0
        }
      }
      function pe(e) {
        return e['__v_skip'] || !Object.isExtensible(e) ? 0 : he((0, i.Zf)(e))
      }
      function fe(e) {
        return we(e) ? e : ge(e, !1, F, re, ae)
      }
      function ve(e) {
        return ge(e, !1, H, oe, ue)
      }
      function me(e) {
        return ge(e, !0, I, le, ce)
      }
      function ge(e, t, n, s, r) {
        if (!(0, i.Gv)(e)) return e
        if (e['__v_raw'] && (!t || !e['__v_isReactive'])) return e
        const o = r.get(e)
        if (o) return o
        const l = pe(e)
        if (0 === l) return e
        const a = new Proxy(e, 2 === l ? s : n)
        return r.set(e, a), a
      }
      function ye(e) {
        return we(e) ? ye(e['__v_raw']) : !(!e || !e['__v_isReactive'])
      }
      function we(e) {
        return !(!e || !e['__v_isReadonly'])
      }
      function be(e) {
        return !(!e || !e['__v_isShallow'])
      }
      function _e(e) {
        return !!e && !!e['__v_raw']
      }
      function De(e) {
        const t = e && e['__v_raw']
        return t ? De(t) : e
      }
      function Ee(e) {
        return Object.isExtensible(e) && (0, i.yQ)(e, '__v_skip', !0), e
      }
      const Te = (e) => ((0, i.Gv)(e) ? fe(e) : e),
        Ce = (e) => ((0, i.Gv)(e) ? me(e) : e)
      class ke {
        constructor(e, t, n, i) {
          ;(this.getter = e),
            (this._setter = t),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this['__v_isReadonly'] = !1),
            (this.effect = new u(
              () => e(this._value),
              () => xe(this, 2 === this.effect._dirtyLevel ? 2 : 3),
            )),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !i),
            (this['__v_isReadonly'] = n)
        }
        get value() {
          const e = De(this)
          return (
            (e._cacheable && !e.effect.dirty) ||
              !(0, i.$H)(e._value, (e._value = e.effect.run())) ||
              xe(e, 4),
            Me(e),
            e.effect._dirtyLevel >= 2 && xe(e, 2),
            e._value
          )
        }
        set value(e) {
          this._setter(e)
        }
        get _dirty() {
          return this.effect.dirty
        }
        set _dirty(e) {
          this.effect.dirty = e
        }
      }
      function Se(e, t, n = !1) {
        let s, r
        const o = (0, i.Tn)(e)
        o ? ((s = e), (r = i.tE)) : ((s = e.get), (r = e.set))
        const l = new ke(s, r, o || !r, n)
        return l
      }
      function Me(e) {
        var t
        f &&
          r &&
          ((e = De(e)),
          _(
            r,
            null != (t = e.dep)
              ? t
              : (e.dep = T(
                  () => (e.dep = void 0),
                  e instanceof ke ? e : void 0,
                )),
            void 0,
          ))
      }
      function xe(e, t = 4, n) {
        e = De(e)
        const i = e.dep
        i && E(i, t, void 0)
      }
      function Oe(e) {
        return !(!e || !0 !== e.__v_isRef)
      }
      function Ae(e) {
        return Le(e, !1)
      }
      function Le(e, t) {
        return Oe(e) ? e : new $e(e, t)
      }
      class $e {
        constructor(e, t) {
          ;(this.__v_isShallow = t),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._rawValue = t ? e : De(e)),
            (this._value = t ? e : Te(e))
        }
        get value() {
          return Me(this), this._value
        }
        set value(e) {
          const t = this.__v_isShallow || be(e) || we(e)
          ;(e = t ? e : De(e)),
            (0, i.$H)(e, this._rawValue) &&
              ((this._rawValue = e),
              (this._value = t ? e : Te(e)),
              xe(this, 4, e))
        }
      }
      function Ne(e) {
        return Oe(e) ? e.value : e
      }
      const Re = {
        get: (e, t, n) => Ne(Reflect.get(e, t, n)),
        set: (e, t, n, i) => {
          const s = e[t]
          return Oe(s) && !Oe(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i)
        },
      }
      function We(e) {
        return ye(e) ? e : new Proxy(e, Re)
      }
    },
    641: function (e, t, n) {
      'use strict'
      n.d(t, {
        $u: function () {
          return We
        },
        $y: function () {
          return z
        },
        CE: function () {
          return an
        },
        Df: function () {
          return be
        },
        E3: function () {
          return yn
        },
        EW: function () {
          return Gn
        },
        FK: function () {
          return Qt
        },
        Gt: function () {
          return gt
        },
        Gy: function () {
          return ce
        },
        K9: function () {
          return Pt
        },
        Lk: function () {
          return fn
        },
        MZ: function () {
          return we
        },
        OW: function () {
          return me
        },
        Q3: function () {
          return bn
        },
        QP: function () {
          return he
        },
        Qi: function () {
          return R
        },
        RG: function () {
          return Xe
        },
        WQ: function () {
          return yt
        },
        Wv: function () {
          return un
        },
        bF: function () {
          return vn
        },
        bo: function () {
          return oe
        },
        dY: function () {
          return y
        },
        eW: function () {
          return wn
        },
        eX: function () {
          return Ue
        },
        g2: function () {
          return X
        },
        h: function () {
          return Kn
        },
        hi: function () {
          return Fe
        },
        jt: function () {
          return W
        },
        k6: function () {
          return j
        },
        nI: function () {
          return On
        },
        pI: function () {
          return Be
        },
        pM: function () {
          return _e
        },
        pR: function () {
          return fe
        },
        qL: function () {
          return o
        },
        sV: function () {
          return Ne
        },
        uX: function () {
          return nn
        },
        v6: function () {
          return Tn
        },
        wB: function () {
          return te
        },
      })
      var i = n(953),
        s = n(33)
      function r(e, t, n, i) {
        try {
          return i ? e(...i) : e()
        } catch (s) {
          l(s, t, n)
        }
      }
      function o(e, t, n, i) {
        if ((0, s.Tn)(e)) {
          const o = r(e, t, n, i)
          return (
            o &&
              (0, s.yL)(o) &&
              o.catch((e) => {
                l(e, t, n)
              }),
            o
          )
        }
        if ((0, s.cy)(e)) {
          const s = []
          for (let r = 0; r < e.length; r++) s.push(o(e[r], t, n, i))
          return s
        }
      }
      function l(e, t, n, s = !0) {
        const o = t ? t.vnode : null
        if (t) {
          let s = t.parent
          const o = t.proxy,
            l = `https://vuejs.org/error-reference/#runtime-${n}`
          while (s) {
            const t = s.ec
            if (t)
              for (let n = 0; n < t.length; n++)
                if (!1 === t[n](e, o, l)) return
            s = s.parent
          }
          const a = t.appContext.config.errorHandler
          if (a) return (0, i.C4)(), r(a, null, 10, [e, o, l]), void (0, i.bl)()
        }
        a(e, n, o, s)
      }
      function a(e, t, n, i = !0) {
        console.error(e)
      }
      let u = !1,
        c = !1
      const d = []
      let h = 0
      const p = []
      let f = null,
        v = 0
      const m = Promise.resolve()
      let g = null
      function y(e) {
        const t = g || m
        return e ? t.then(this ? e.bind(this) : e) : t
      }
      function w(e) {
        let t = h + 1,
          n = d.length
        while (t < n) {
          const i = (t + n) >>> 1,
            s = d[i],
            r = k(s)
          r < e || (r === e && s.pre) ? (t = i + 1) : (n = i)
        }
        return t
      }
      function b(e) {
        ;(d.length && d.includes(e, u && e.allowRecurse ? h + 1 : h)) ||
          (null == e.id ? d.push(e) : d.splice(w(e.id), 0, e), _())
      }
      function _() {
        u || c || ((c = !0), (g = m.then(M)))
      }
      function D(e) {
        const t = d.indexOf(e)
        t > h && d.splice(t, 1)
      }
      function E(e) {
        ;(0, s.cy)(e)
          ? p.push(...e)
          : (f && f.includes(e, e.allowRecurse ? v + 1 : v)) || p.push(e),
          _()
      }
      function T(e, t, n = u ? h + 1 : 0) {
        for (0; n < d.length; n++) {
          const t = d[n]
          if (t && t.pre) {
            if (e && t.id !== e.uid) continue
            0, d.splice(n, 1), n--, t()
          }
        }
      }
      function C(e) {
        if (p.length) {
          const e = [...new Set(p)].sort((e, t) => k(e) - k(t))
          if (((p.length = 0), f)) return void f.push(...e)
          for (f = e, v = 0; v < f.length; v++) f[v]()
          ;(f = null), (v = 0)
        }
      }
      const k = (e) => (null == e.id ? 1 / 0 : e.id),
        S = (e, t) => {
          const n = k(e) - k(t)
          if (0 === n) {
            if (e.pre && !t.pre) return -1
            if (t.pre && !e.pre) return 1
          }
          return n
        }
      function M(e) {
        ;(c = !1), (u = !0), d.sort(S)
        s.tE
        try {
          for (h = 0; h < d.length; h++) {
            const e = d[h]
            e && !1 !== e.active && r(e, null, 14)
          }
        } finally {
          ;(h = 0),
            (d.length = 0),
            C(e),
            (u = !1),
            (g = null),
            (d.length || p.length) && M(e)
        }
      }
      function x(e, t, ...n) {
        if (e.isUnmounted) return
        const i = e.vnode.props || s.MZ
        let r = n
        const l = t.startsWith('update:'),
          a = l && t.slice(7)
        if (a && a in i) {
          const e = `${'modelValue' === a ? 'model' : a}Modifiers`,
            { number: t, trim: o } = i[e] || s.MZ
          o && (r = n.map((e) => ((0, s.Kg)(e) ? e.trim() : e))),
            t && (r = n.map(s.bB))
        }
        let u
        let c = i[(u = (0, s.rU)(t))] || i[(u = (0, s.rU)((0, s.PT)(t)))]
        !c && l && (c = i[(u = (0, s.rU)((0, s.Tg)(t)))]), c && o(c, e, 6, r)
        const d = i[u + 'Once']
        if (d) {
          if (e.emitted) {
            if (e.emitted[u]) return
          } else e.emitted = {}
          ;(e.emitted[u] = !0), o(d, e, 6, r)
        }
      }
      function O(e, t, n = !1) {
        const i = t.emitsCache,
          r = i.get(e)
        if (void 0 !== r) return r
        const o = e.emits
        let l = {},
          a = !1
        if (!(0, s.Tn)(e)) {
          const i = (e) => {
            const n = O(e, t, !0)
            n && ((a = !0), (0, s.X$)(l, n))
          }
          !n && t.mixins.length && t.mixins.forEach(i),
            e.extends && i(e.extends),
            e.mixins && e.mixins.forEach(i)
        }
        return o || a
          ? ((0, s.cy)(o) ? o.forEach((e) => (l[e] = null)) : (0, s.X$)(l, o),
            (0, s.Gv)(e) && i.set(e, l),
            l)
          : ((0, s.Gv)(e) && i.set(e, null), null)
      }
      function A(e, t) {
        return (
          !(!e || !(0, s.Mp)(t)) &&
          ((t = t.slice(2).replace(/Once$/, '')),
          (0, s.$3)(e, t[0].toLowerCase() + t.slice(1)) ||
            (0, s.$3)(e, (0, s.Tg)(t)) ||
            (0, s.$3)(e, t))
        )
      }
      let L = null,
        $ = null
      function N(e) {
        const t = L
        return (L = e), ($ = (e && e.type.__scopeId) || null), t
      }
      function R(e) {
        $ = e
      }
      function W() {
        $ = null
      }
      function j(e, t = L, n) {
        if (!t) return e
        if (e._n) return e
        const i = (...n) => {
          i._d && on(-1)
          const s = N(t)
          let r
          try {
            r = e(...n)
          } finally {
            N(s), i._d && on(1)
          }
          return r
        }
        return (i._n = !0), (i._c = !0), (i._d = !0), i
      }
      function F(e) {
        const {
            type: t,
            vnode: n,
            proxy: i,
            withProxy: r,
            propsOptions: [o],
            slots: a,
            attrs: u,
            emit: c,
            render: d,
            renderCache: h,
            props: p,
            data: f,
            setupState: v,
            ctx: m,
            inheritAttrs: g,
          } = e,
          y = N(e)
        let w, b
        try {
          if (4 & n.shapeFlag) {
            const e = r || i,
              t = e
            ;(w = _n(d.call(t, e, h, p, v, f, m))), (b = u)
          } else {
            const e = t
            0,
              (w = _n(
                e.length > 1
                  ? e(p, { attrs: u, slots: a, emit: c })
                  : e(p, null),
              )),
              (b = t.props ? u : I(u))
          }
        } catch (D) {
          ;(en.length = 0), l(D, e, 1), (w = vn(qt))
        }
        let _ = w
        if (b && !1 !== g) {
          const e = Object.keys(b),
            { shapeFlag: t } = _
          e.length &&
            7 & t &&
            (o && e.some(s.CP) && (b = H(b, o)), (_ = yn(_, b, !1, !0)))
        }
        return (
          n.dirs &&
            ((_ = yn(_, null, !1, !0)),
            (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
          n.transition && (_.transition = n.transition),
          (w = _),
          N(y),
          w
        )
      }
      const I = (e) => {
          let t
          for (const n in e)
            ('class' === n || 'style' === n || (0, s.Mp)(n)) &&
              ((t || (t = {}))[n] = e[n])
          return t
        },
        H = (e, t) => {
          const n = {}
          for (const i in e) ((0, s.CP)(i) && i.slice(9) in t) || (n[i] = e[i])
          return n
        }
      function P(e, t, n) {
        const { props: i, children: s, component: r } = e,
          { props: o, children: l, patchFlag: a } = t,
          u = r.emitsOptions
        if (t.dirs || t.transition) return !0
        if (!(n && a >= 0))
          return (
            !((!s && !l) || (l && l.$stable)) ||
            (i !== o && (i ? !o || V(i, o, u) : !!o))
          )
        if (1024 & a) return !0
        if (16 & a) return i ? V(i, o, u) : !!o
        if (8 & a) {
          const e = t.dynamicProps
          for (let t = 0; t < e.length; t++) {
            const n = e[t]
            if (o[n] !== i[n] && !A(u, n)) return !0
          }
        }
        return !1
      }
      function V(e, t, n) {
        const i = Object.keys(t)
        if (i.length !== Object.keys(e).length) return !0
        for (let s = 0; s < i.length; s++) {
          const r = i[s]
          if (t[r] !== e[r] && !A(n, r)) return !0
        }
        return !1
      }
      function B({ vnode: e, parent: t }, n) {
        while (t) {
          const i = t.subTree
          if (
            (i.suspense && i.suspense.activeBranch === e && (i.el = e.el),
            i !== e)
          )
            break
          ;((e = t.vnode).el = n), (t = t.parent)
        }
      }
      const U = 'components'
      function X(e, t) {
        return G(U, e, !0, t) || e
      }
      const Y = Symbol.for('v-ndc')
      function z(e) {
        return (0, s.Kg)(e) ? G(U, e, !1) || e : e || Y
      }
      function G(e, t, n = !0, i = !1) {
        const r = L || xn
        if (r) {
          const n = r.type
          if (e === U) {
            const e = Yn(n, !1)
            if (
              e &&
              (e === t || e === (0, s.PT)(t) || e === (0, s.ZH)((0, s.PT)(t)))
            )
              return n
          }
          const o = K(r[e] || n[e], t) || K(r.appContext[e], t)
          return !o && i ? n : o
        }
      }
      function K(e, t) {
        return e && (e[t] || e[(0, s.PT)(t)] || e[(0, s.ZH)((0, s.PT)(t))])
      }
      const Q = (e) => e.__isSuspense
      function Z(e, t) {
        t && t.pendingBranch
          ? (0, s.cy)(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
          : E(e)
      }
      const q = Symbol.for('v-scx'),
        J = () => {
          {
            const e = yt(q)
            return e
          }
        }
      const ee = {}
      function te(e, t, n) {
        return ne(e, t, n)
      }
      function ne(
        e,
        t,
        {
          immediate: n,
          deep: l,
          flush: a,
          once: u,
          onTrack: c,
          onTrigger: d,
        } = s.MZ,
      ) {
        if (t && u) {
          const e = t
          t = (...t) => {
            e(...t), k()
          }
        }
        const h = xn,
          p = (e) => (!0 === l ? e : re(e, !1 === l ? 1 : void 0))
        let f,
          v,
          m = !1,
          g = !1
        if (
          ((0, i.i9)(e)
            ? ((f = () => e.value), (m = (0, i.fE)(e)))
            : (0, i.g8)(e)
              ? ((f = () => p(e)), (m = !0))
              : (0, s.cy)(e)
                ? ((g = !0),
                  (m = e.some((e) => (0, i.g8)(e) || (0, i.fE)(e))),
                  (f = () =>
                    e.map((e) =>
                      (0, i.i9)(e)
                        ? e.value
                        : (0, i.g8)(e)
                          ? p(e)
                          : (0, s.Tn)(e)
                            ? r(e, h, 2)
                            : void 0,
                    )))
                : (f = (0, s.Tn)(e)
                    ? t
                      ? () => r(e, h, 2)
                      : () => (v && v(), o(e, h, 3, [w]))
                    : s.tE),
          t && l)
        ) {
          const e = f
          f = () => re(e())
        }
        let y,
          w = (e) => {
            v = T.onStop = () => {
              r(e, h, 4), (v = T.onStop = void 0)
            }
          }
        if (Fn) {
          if (
            ((w = s.tE),
            t ? n && o(t, h, 3, [f(), g ? [] : void 0, w]) : f(),
            'sync' !== a)
          )
            return s.tE
          {
            const e = J()
            y = e.__watcherHandles || (e.__watcherHandles = [])
          }
        }
        let _ = g ? new Array(e.length).fill(ee) : ee
        const D = () => {
          if (T.active && T.dirty)
            if (t) {
              const e = T.run()
              ;(l ||
                m ||
                (g ? e.some((e, t) => (0, s.$H)(e, _[t])) : (0, s.$H)(e, _))) &&
                (v && v(),
                o(t, h, 3, [
                  e,
                  _ === ee ? void 0 : g && _[0] === ee ? [] : _,
                  w,
                ]),
                (_ = e))
            } else T.run()
        }
        let E
        ;(D.allowRecurse = !!t),
          'sync' === a
            ? (E = D)
            : 'post' === a
              ? (E = () => Ht(D, h && h.suspense))
              : ((D.pre = !0), h && (D.id = h.uid), (E = () => b(D)))
        const T = new i.X2(f, s.tE, E),
          C = (0, i.o5)(),
          k = () => {
            T.stop(), C && (0, s.TF)(C.effects, T)
          }
        return (
          t
            ? n
              ? D()
              : (_ = T.run())
            : 'post' === a
              ? Ht(T.run.bind(T), h && h.suspense)
              : T.run(),
          y && y.push(k),
          k
        )
      }
      function ie(e, t, n) {
        const i = this.proxy,
          r = (0, s.Kg)(e)
            ? e.includes('.')
              ? se(i, e)
              : () => i[e]
            : e.bind(i, i)
        let o
        ;(0, s.Tn)(t) ? (o = t) : ((o = t.handler), (n = t))
        const l = $n(this),
          a = ne(r, o.bind(i), n)
        return l(), a
      }
      function se(e, t) {
        const n = t.split('.')
        return () => {
          let t = e
          for (let e = 0; e < n.length && t; e++) t = t[n[e]]
          return t
        }
      }
      function re(e, t = 1 / 0, n) {
        if (t <= 0 || !(0, s.Gv)(e) || e['__v_skip']) return e
        if (((n = n || new Set()), n.has(e))) return e
        if ((n.add(e), t--, (0, i.i9)(e))) re(e.value, t, n)
        else if ((0, s.cy)(e)) for (let i = 0; i < e.length; i++) re(e[i], t, n)
        else if ((0, s.vM)(e) || (0, s.CE)(e))
          e.forEach((e) => {
            re(e, t, n)
          })
        else if ((0, s.Qd)(e)) for (const i in e) re(e[i], t, n)
        return e
      }
      function oe(e, t) {
        if (null === L) return e
        const n = Xn(L) || L.proxy,
          i = e.dirs || (e.dirs = [])
        for (let r = 0; r < t.length; r++) {
          let [e, o, l, a = s.MZ] = t[r]
          e &&
            ((0, s.Tn)(e) && (e = { mounted: e, updated: e }),
            e.deep && re(o),
            i.push({
              dir: e,
              instance: n,
              value: o,
              oldValue: void 0,
              arg: l,
              modifiers: a,
            }))
        }
        return e
      }
      function le(e, t, n, s) {
        const r = e.dirs,
          l = t && t.dirs
        for (let a = 0; a < r.length; a++) {
          const u = r[a]
          l && (u.oldValue = l[a].value)
          let c = u.dir[s]
          c && ((0, i.C4)(), o(c, n, 8, [e.el, u, e, t]), (0, i.bl)())
        }
      }
      const ae = Symbol('_leaveCb'),
        ue = Symbol('_enterCb')
      function ce() {
        const e = {
          isMounted: !1,
          isLeaving: !1,
          isUnmounting: !1,
          leavingVNodes: new Map(),
        }
        return (
          Ne(() => {
            e.isMounted = !0
          }),
          je(() => {
            e.isUnmounting = !0
          }),
          e
        )
      }
      const de = [Function, Array],
        he = {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          onBeforeEnter: de,
          onEnter: de,
          onAfterEnter: de,
          onEnterCancelled: de,
          onBeforeLeave: de,
          onLeave: de,
          onAfterLeave: de,
          onLeaveCancelled: de,
          onBeforeAppear: de,
          onAppear: de,
          onAfterAppear: de,
          onAppearCancelled: de,
        },
        pe = {
          name: 'BaseTransition',
          props: he,
          setup(e, { slots: t }) {
            const n = On(),
              s = ce()
            return () => {
              const r = t.default && be(t.default(), !0)
              if (!r || !r.length) return
              let o = r[0]
              if (r.length > 1) {
                let e = !1
                for (const t of r)
                  if (t.type !== qt) {
                    0, (o = t), (e = !0)
                    break
                  }
              }
              const l = (0, i.ux)(e),
                { mode: a } = l
              if (s.isLeaving) return ge(o)
              const u = ye(o)
              if (!u) return ge(o)
              const c = me(u, l, s, n)
              we(u, c)
              const d = n.subTree,
                h = d && ye(d)
              if (h && h.type !== qt && !dn(u, h)) {
                const e = me(h, l, s, n)
                if ((we(h, e), 'out-in' === a && u.type !== qt))
                  return (
                    (s.isLeaving = !0),
                    (e.afterLeave = () => {
                      ;(s.isLeaving = !1),
                        !1 !== n.update.active &&
                          ((n.effect.dirty = !0), n.update())
                    }),
                    ge(o)
                  )
                'in-out' === a &&
                  u.type !== qt &&
                  (e.delayLeave = (e, t, n) => {
                    const i = ve(s, h)
                    ;(i[String(h.key)] = h),
                      (e[ae] = () => {
                        t(), (e[ae] = void 0), delete c.delayedLeave
                      }),
                      (c.delayedLeave = n)
                  })
              }
              return o
            }
          },
        },
        fe = pe
      function ve(e, t) {
        const { leavingVNodes: n } = e
        let i = n.get(t.type)
        return i || ((i = Object.create(null)), n.set(t.type, i)), i
      }
      function me(e, t, n, i) {
        const {
            appear: r,
            mode: l,
            persisted: a = !1,
            onBeforeEnter: u,
            onEnter: c,
            onAfterEnter: d,
            onEnterCancelled: h,
            onBeforeLeave: p,
            onLeave: f,
            onAfterLeave: v,
            onLeaveCancelled: m,
            onBeforeAppear: g,
            onAppear: y,
            onAfterAppear: w,
            onAppearCancelled: b,
          } = t,
          _ = String(e.key),
          D = ve(n, e),
          E = (e, t) => {
            e && o(e, i, 9, t)
          },
          T = (e, t) => {
            const n = t[1]
            E(e, t),
              (0, s.cy)(e)
                ? e.every((e) => e.length <= 1) && n()
                : e.length <= 1 && n()
          },
          C = {
            mode: l,
            persisted: a,
            beforeEnter(t) {
              let i = u
              if (!n.isMounted) {
                if (!r) return
                i = g || u
              }
              t[ae] && t[ae](!0)
              const s = D[_]
              s && dn(e, s) && s.el[ae] && s.el[ae](), E(i, [t])
            },
            enter(e) {
              let t = c,
                i = d,
                s = h
              if (!n.isMounted) {
                if (!r) return
                ;(t = y || c), (i = w || d), (s = b || h)
              }
              let o = !1
              const l = (e[ue] = (t) => {
                o ||
                  ((o = !0),
                  E(t ? s : i, [e]),
                  C.delayedLeave && C.delayedLeave(),
                  (e[ue] = void 0))
              })
              t ? T(t, [e, l]) : l()
            },
            leave(t, i) {
              const s = String(e.key)
              if ((t[ue] && t[ue](!0), n.isUnmounting)) return i()
              E(p, [t])
              let r = !1
              const o = (t[ae] = (n) => {
                r ||
                  ((r = !0),
                  i(),
                  E(n ? m : v, [t]),
                  (t[ae] = void 0),
                  D[s] === e && delete D[s])
              })
              ;(D[s] = e), f ? T(f, [t, o]) : o()
            },
            clone(e) {
              return me(e, t, n, i)
            },
          }
        return C
      }
      function ge(e) {
        if (Ee(e)) return (e = yn(e)), (e.children = null), e
      }
      function ye(e) {
        if (!Ee(e)) return e
        const { shapeFlag: t, children: n } = e
        if (n) {
          if (16 & t) return n[0]
          if (32 & t && (0, s.Tn)(n.default)) return n.default()
        }
      }
      function we(e, t) {
        6 & e.shapeFlag && e.component
          ? we(e.component.subTree, t)
          : 128 & e.shapeFlag
            ? ((e.ssContent.transition = t.clone(e.ssContent)),
              (e.ssFallback.transition = t.clone(e.ssFallback)))
            : (e.transition = t)
      }
      function be(e, t = !1, n) {
        let i = [],
          s = 0
        for (let r = 0; r < e.length; r++) {
          let o = e[r]
          const l =
            null == n ? o.key : String(n) + String(null != o.key ? o.key : r)
          o.type === Qt
            ? (128 & o.patchFlag && s++, (i = i.concat(be(o.children, t, l))))
            : (t || o.type !== qt) && i.push(null != l ? yn(o, { key: l }) : o)
        }
        if (s > 1) for (let r = 0; r < i.length; r++) i[r].patchFlag = -2
        return i
      }
      /*! #__NO_SIDE_EFFECTS__ */ function _e(e, t) {
        return (0, s.Tn)(e)
          ? (() => (0, s.X$)({ name: e.name }, t, { setup: e }))()
          : e
      }
      const De = (e) => !!e.type.__asyncLoader
      /*! #__NO_SIDE_EFFECTS__ */ const Ee = (e) => e.type.__isKeepAlive
      RegExp, RegExp
      function Te(e, t) {
        return (0, s.cy)(e)
          ? e.some((e) => Te(e, t))
          : (0, s.Kg)(e)
            ? e.split(',').includes(t)
            : !!(0, s.gd)(e) && e.test(t)
      }
      function Ce(e, t) {
        Se(e, 'a', t)
      }
      function ke(e, t) {
        Se(e, 'da', t)
      }
      function Se(e, t, n = xn) {
        const i =
          e.__wdc ||
          (e.__wdc = () => {
            let t = n
            while (t) {
              if (t.isDeactivated) return
              t = t.parent
            }
            return e()
          })
        if ((Ae(t, i, n), n)) {
          let e = n.parent
          while (e && e.parent)
            Ee(e.parent.vnode) && Me(i, t, n, e), (e = e.parent)
        }
      }
      function Me(e, t, n, i) {
        const r = Ae(t, e, i, !0)
        Fe(() => {
          ;(0, s.TF)(i[t], r)
        }, n)
      }
      function xe(e) {
        ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
      }
      function Oe(e) {
        return 128 & e.shapeFlag ? e.ssContent : e
      }
      function Ae(e, t, n = xn, s = !1) {
        if (n) {
          const r = n[e] || (n[e] = []),
            l =
              t.__weh ||
              (t.__weh = (...s) => {
                if (n.isUnmounted) return
                ;(0, i.C4)()
                const r = $n(n),
                  l = o(t, n, e, s)
                return r(), (0, i.bl)(), l
              })
          return s ? r.unshift(l) : r.push(l), l
        }
      }
      const Le =
          (e) =>
          (t, n = xn) =>
            (!Fn || 'sp' === e) && Ae(e, (...e) => t(...e), n),
        $e = Le('bm'),
        Ne = Le('m'),
        Re = Le('bu'),
        We = Le('u'),
        je = Le('bum'),
        Fe = Le('um'),
        Ie = Le('sp'),
        He = Le('rtg'),
        Pe = Le('rtc')
      function Ve(e, t = xn) {
        Ae('ec', e, t)
      }
      function Be(e, t, n, i) {
        let r
        const o = n && n[i]
        if ((0, s.cy)(e) || (0, s.Kg)(e)) {
          r = new Array(e.length)
          for (let n = 0, i = e.length; n < i; n++)
            r[n] = t(e[n], n, void 0, o && o[n])
        } else if ('number' === typeof e) {
          0, (r = new Array(e))
          for (let n = 0; n < e; n++) r[n] = t(n + 1, n, void 0, o && o[n])
        } else if ((0, s.Gv)(e))
          if (e[Symbol.iterator])
            r = Array.from(e, (e, n) => t(e, n, void 0, o && o[n]))
          else {
            const n = Object.keys(e)
            r = new Array(n.length)
            for (let i = 0, s = n.length; i < s; i++) {
              const s = n[i]
              r[i] = t(e[s], s, i, o && o[i])
            }
          }
        else r = []
        return n && (n[i] = r), r
      }
      function Ue(e, t) {
        for (let n = 0; n < t.length; n++) {
          const i = t[n]
          if ((0, s.cy)(i))
            for (let t = 0; t < i.length; t++) e[i[t].name] = i[t].fn
          else
            i &&
              (e[i.name] = i.key
                ? (...e) => {
                    const t = i.fn(...e)
                    return t && (t.key = i.key), t
                  }
                : i.fn)
        }
        return e
      }
      function Xe(e, t, n = {}, i, s) {
        if (L.isCE || (L.parent && De(L.parent) && L.parent.isCE))
          return 'default' !== t && (n.name = t), vn('slot', n, i && i())
        let r = e[t]
        r && r._c && (r._d = !1), nn()
        const o = r && Ye(r(n)),
          l = un(
            Qt,
            { key: n.key || (o && o.key) || `_${t}` },
            o || (i ? i() : []),
            o && 1 === e._ ? 64 : -2,
          )
        return (
          !s && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
          r && r._c && (r._d = !0),
          l
        )
      }
      function Ye(e) {
        return e.some(
          (e) =>
            !cn(e) || (e.type !== qt && !(e.type === Qt && !Ye(e.children))),
        )
          ? e
          : null
      }
      const ze = (e) => (e ? (Rn(e) ? Xn(e) || e.proxy : ze(e.parent)) : null),
        Ge = (0, s.X$)(Object.create(null), {
          $: (e) => e,
          $el: (e) => e.vnode.el,
          $data: (e) => e.data,
          $props: (e) => e.props,
          $attrs: (e) => e.attrs,
          $slots: (e) => e.slots,
          $refs: (e) => e.refs,
          $parent: (e) => ze(e.parent),
          $root: (e) => ze(e.root),
          $emit: (e) => e.emit,
          $options: (e) => it(e),
          $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
              ;(e.effect.dirty = !0), b(e.update)
            }),
          $nextTick: (e) => e.n || (e.n = y.bind(e.proxy)),
          $watch: (e) => ie.bind(e),
        }),
        Ke = (e, t) => e !== s.MZ && !e.__isScriptSetup && (0, s.$3)(e, t),
        Qe = {
          get({ _: e }, t) {
            if ('__v_skip' === t) return !0
            const {
              ctx: n,
              setupState: r,
              data: o,
              props: l,
              accessCache: a,
              type: u,
              appContext: c,
            } = e
            let d
            if ('$' !== t[0]) {
              const i = a[t]
              if (void 0 !== i)
                switch (i) {
                  case 1:
                    return r[t]
                  case 2:
                    return o[t]
                  case 4:
                    return n[t]
                  case 3:
                    return l[t]
                }
              else {
                if (Ke(r, t)) return (a[t] = 1), r[t]
                if (o !== s.MZ && (0, s.$3)(o, t)) return (a[t] = 2), o[t]
                if ((d = e.propsOptions[0]) && (0, s.$3)(d, t))
                  return (a[t] = 3), l[t]
                if (n !== s.MZ && (0, s.$3)(n, t)) return (a[t] = 4), n[t]
                qe && (a[t] = 0)
              }
            }
            const h = Ge[t]
            let p, f
            return h
              ? ('$attrs' === t && (0, i.u4)(e.attrs, 'get', ''), h(e))
              : (p = u.__cssModules) && (p = p[t])
                ? p
                : n !== s.MZ && (0, s.$3)(n, t)
                  ? ((a[t] = 4), n[t])
                  : ((f = c.config.globalProperties),
                    (0, s.$3)(f, t) ? f[t] : void 0)
          },
          set({ _: e }, t, n) {
            const { data: i, setupState: r, ctx: o } = e
            return Ke(r, t)
              ? ((r[t] = n), !0)
              : i !== s.MZ && (0, s.$3)(i, t)
                ? ((i[t] = n), !0)
                : !(0, s.$3)(e.props, t) &&
                  ('$' !== t[0] || !(t.slice(1) in e)) &&
                  ((o[t] = n), !0)
          },
          has(
            {
              _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: i,
                appContext: r,
                propsOptions: o,
              },
            },
            l,
          ) {
            let a
            return (
              !!n[l] ||
              (e !== s.MZ && (0, s.$3)(e, l)) ||
              Ke(t, l) ||
              ((a = o[0]) && (0, s.$3)(a, l)) ||
              (0, s.$3)(i, l) ||
              (0, s.$3)(Ge, l) ||
              (0, s.$3)(r.config.globalProperties, l)
            )
          },
          defineProperty(e, t, n) {
            return (
              null != n.get
                ? (e._.accessCache[t] = 0)
                : (0, s.$3)(n, 'value') && this.set(e, t, n.value, null),
              Reflect.defineProperty(e, t, n)
            )
          },
        }
      function Ze(e) {
        return (0, s.cy)(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e
      }
      let qe = !0
      function Je(e) {
        const t = it(e),
          n = e.proxy,
          r = e.ctx
        ;(qe = !1), t.beforeCreate && tt(t.beforeCreate, e, 'bc')
        const {
            data: o,
            computed: l,
            methods: a,
            watch: u,
            provide: c,
            inject: d,
            created: h,
            beforeMount: p,
            mounted: f,
            beforeUpdate: v,
            updated: m,
            activated: g,
            deactivated: y,
            beforeDestroy: w,
            beforeUnmount: b,
            destroyed: _,
            unmounted: D,
            render: E,
            renderTracked: T,
            renderTriggered: C,
            errorCaptured: k,
            serverPrefetch: S,
            expose: M,
            inheritAttrs: x,
            components: O,
            directives: A,
            filters: L,
          } = t,
          $ = null
        if ((d && et(d, r, $), a))
          for (const i in a) {
            const e = a[i]
            ;(0, s.Tn)(e) && (r[i] = e.bind(n))
          }
        if (o) {
          0
          const t = o.call(n, n)
          0, (0, s.Gv)(t) && (e.data = (0, i.Kh)(t))
        }
        if (((qe = !0), l))
          for (const i in l) {
            const e = l[i],
              t = (0, s.Tn)(e)
                ? e.bind(n, n)
                : (0, s.Tn)(e.get)
                  ? e.get.bind(n, n)
                  : s.tE
            0
            const o = !(0, s.Tn)(e) && (0, s.Tn)(e.set) ? e.set.bind(n) : s.tE,
              a = Gn({ get: t, set: o })
            Object.defineProperty(r, i, {
              enumerable: !0,
              configurable: !0,
              get: () => a.value,
              set: (e) => (a.value = e),
            })
          }
        if (u) for (const i in u) nt(u[i], r, n, i)
        if (c) {
          const e = (0, s.Tn)(c) ? c.call(n) : c
          Reflect.ownKeys(e).forEach((t) => {
            gt(t, e[t])
          })
        }
        function N(e, t) {
          ;(0, s.cy)(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n))
        }
        if (
          (h && tt(h, e, 'c'),
          N($e, p),
          N(Ne, f),
          N(Re, v),
          N(We, m),
          N(Ce, g),
          N(ke, y),
          N(Ve, k),
          N(Pe, T),
          N(He, C),
          N(je, b),
          N(Fe, D),
          N(Ie, S),
          (0, s.cy)(M))
        )
          if (M.length) {
            const t = e.exposed || (e.exposed = {})
            M.forEach((e) => {
              Object.defineProperty(t, e, {
                get: () => n[e],
                set: (t) => (n[e] = t),
              })
            })
          } else e.exposed || (e.exposed = {})
        E && e.render === s.tE && (e.render = E),
          null != x && (e.inheritAttrs = x),
          O && (e.components = O),
          A && (e.directives = A)
      }
      function et(e, t, n = s.tE) {
        ;(0, s.cy)(e) && (e = at(e))
        for (const r in e) {
          const n = e[r]
          let o
          ;(o = (0, s.Gv)(n)
            ? 'default' in n
              ? yt(n.from || r, n.default, !0)
              : yt(n.from || r)
            : yt(n)),
            (0, i.i9)(o)
              ? Object.defineProperty(t, r, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => o.value,
                  set: (e) => (o.value = e),
                })
              : (t[r] = o)
        }
      }
      function tt(e, t, n) {
        o((0, s.cy)(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n)
      }
      function nt(e, t, n, i) {
        const r = i.includes('.') ? se(n, i) : () => n[i]
        if ((0, s.Kg)(e)) {
          const n = t[e]
          ;(0, s.Tn)(n) && te(r, n)
        } else if ((0, s.Tn)(e)) te(r, e.bind(n))
        else if ((0, s.Gv)(e))
          if ((0, s.cy)(e)) e.forEach((e) => nt(e, t, n, i))
          else {
            const i = (0, s.Tn)(e.handler) ? e.handler.bind(n) : t[e.handler]
            ;(0, s.Tn)(i) && te(r, i, e)
          }
        else 0
      }
      function it(e) {
        const t = e.type,
          { mixins: n, extends: i } = t,
          {
            mixins: r,
            optionsCache: o,
            config: { optionMergeStrategies: l },
          } = e.appContext,
          a = o.get(t)
        let u
        return (
          a
            ? (u = a)
            : r.length || n || i
              ? ((u = {}),
                r.length && r.forEach((e) => st(u, e, l, !0)),
                st(u, t, l))
              : (u = t),
          (0, s.Gv)(t) && o.set(t, u),
          u
        )
      }
      function st(e, t, n, i = !1) {
        const { mixins: s, extends: r } = t
        r && st(e, r, n, !0), s && s.forEach((t) => st(e, t, n, !0))
        for (const o in t)
          if (i && 'expose' === o);
          else {
            const i = rt[o] || (n && n[o])
            e[o] = i ? i(e[o], t[o]) : t[o]
          }
        return e
      }
      const rt = {
        data: ot,
        props: dt,
        emits: dt,
        methods: ct,
        computed: ct,
        beforeCreate: ut,
        created: ut,
        beforeMount: ut,
        mounted: ut,
        beforeUpdate: ut,
        updated: ut,
        beforeDestroy: ut,
        beforeUnmount: ut,
        destroyed: ut,
        unmounted: ut,
        activated: ut,
        deactivated: ut,
        errorCaptured: ut,
        serverPrefetch: ut,
        components: ct,
        directives: ct,
        watch: ht,
        provide: ot,
        inject: lt,
      }
      function ot(e, t) {
        return t
          ? e
            ? function () {
                return (0, s.X$)(
                  (0, s.Tn)(e) ? e.call(this, this) : e,
                  (0, s.Tn)(t) ? t.call(this, this) : t,
                )
              }
            : t
          : e
      }
      function lt(e, t) {
        return ct(at(e), at(t))
      }
      function at(e) {
        if ((0, s.cy)(e)) {
          const t = {}
          for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
          return t
        }
        return e
      }
      function ut(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
      }
      function ct(e, t) {
        return e ? (0, s.X$)(Object.create(null), e, t) : t
      }
      function dt(e, t) {
        return e
          ? (0, s.cy)(e) && (0, s.cy)(t)
            ? [...new Set([...e, ...t])]
            : (0, s.X$)(Object.create(null), Ze(e), Ze(null != t ? t : {}))
          : t
      }
      function ht(e, t) {
        if (!e) return t
        if (!t) return e
        const n = (0, s.X$)(Object.create(null), e)
        for (const i in t) n[i] = ut(e[i], t[i])
        return n
      }
      function pt() {
        return {
          app: null,
          config: {
            isNativeTag: s.NO,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null),
          optionsCache: new WeakMap(),
          propsCache: new WeakMap(),
          emitsCache: new WeakMap(),
        }
      }
      let ft = 0
      function vt(e, t) {
        return function (n, i = null) {
          ;(0, s.Tn)(n) || (n = (0, s.X$)({}, n)),
            null == i || (0, s.Gv)(i) || (i = null)
          const r = pt(),
            o = new WeakSet()
          let l = !1
          const a = (r.app = {
            _uid: ft++,
            _component: n,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: Qn,
            get config() {
              return r.config
            },
            set config(e) {
              0
            },
            use(e, ...t) {
              return (
                o.has(e) ||
                  (e && (0, s.Tn)(e.install)
                    ? (o.add(e), e.install(a, ...t))
                    : (0, s.Tn)(e) && (o.add(e), e(a, ...t))),
                a
              )
            },
            mixin(e) {
              return r.mixins.includes(e) || r.mixins.push(e), a
            },
            component(e, t) {
              return t ? ((r.components[e] = t), a) : r.components[e]
            },
            directive(e, t) {
              return t ? ((r.directives[e] = t), a) : r.directives[e]
            },
            mount(s, o, u) {
              if (!l) {
                0
                const c = vn(n, i)
                return (
                  (c.appContext = r),
                  !0 === u ? (u = 'svg') : !1 === u && (u = void 0),
                  o && t ? t(c, s) : e(c, s, u),
                  (l = !0),
                  (a._container = s),
                  (s.__vue_app__ = a),
                  Xn(c.component) || c.component.proxy
                )
              }
            },
            unmount() {
              l && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(e, t) {
              return (r.provides[e] = t), a
            },
            runWithContext(e) {
              const t = mt
              mt = a
              try {
                return e()
              } finally {
                mt = t
              }
            },
          })
          return a
        }
      }
      let mt = null
      function gt(e, t) {
        if (xn) {
          let n = xn.provides
          const i = xn.parent && xn.parent.provides
          i === n && (n = xn.provides = Object.create(i)), (n[e] = t)
        } else 0
      }
      function yt(e, t, n = !1) {
        const i = xn || L
        if (i || mt) {
          const r = i
            ? null == i.parent
              ? i.vnode.appContext && i.vnode.appContext.provides
              : i.parent.provides
            : mt._context.provides
          if (r && e in r) return r[e]
          if (arguments.length > 1)
            return n && (0, s.Tn)(t) ? t.call(i && i.proxy) : t
        } else 0
      }
      const wt = {},
        bt = () => Object.create(wt),
        _t = (e) => Object.getPrototypeOf(e) === wt
      function Dt(e, t, n, s = !1) {
        const r = {},
          o = bt()
        ;(e.propsDefaults = Object.create(null)), Tt(e, t, r, o)
        for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
        n
          ? (e.props = s ? r : (0, i.Gc)(r))
          : e.type.props
            ? (e.props = r)
            : (e.props = o),
          (e.attrs = o)
      }
      function Et(e, t, n, r) {
        const {
            props: o,
            attrs: l,
            vnode: { patchFlag: a },
          } = e,
          u = (0, i.ux)(o),
          [c] = e.propsOptions
        let d = !1
        if (!(r || a > 0) || 16 & a) {
          let i
          Tt(e, t, o, l) && (d = !0)
          for (const r in u)
            (t &&
              ((0, s.$3)(t, r) ||
                ((i = (0, s.Tg)(r)) !== r && (0, s.$3)(t, i)))) ||
              (c
                ? !n ||
                  (void 0 === n[r] && void 0 === n[i]) ||
                  (o[r] = Ct(c, u, r, void 0, e, !0))
                : delete o[r])
          if (l !== u)
            for (const e in l) (t && (0, s.$3)(t, e)) || (delete l[e], (d = !0))
        } else if (8 & a) {
          const n = e.vnode.dynamicProps
          for (let i = 0; i < n.length; i++) {
            let r = n[i]
            if (A(e.emitsOptions, r)) continue
            const a = t[r]
            if (c)
              if ((0, s.$3)(l, r)) a !== l[r] && ((l[r] = a), (d = !0))
              else {
                const t = (0, s.PT)(r)
                o[t] = Ct(c, u, t, a, e, !1)
              }
            else a !== l[r] && ((l[r] = a), (d = !0))
          }
        }
        d && (0, i.hZ)(e.attrs, 'set', '')
      }
      function Tt(e, t, n, r) {
        const [o, l] = e.propsOptions
        let a,
          u = !1
        if (t)
          for (let i in t) {
            if ((0, s.SU)(i)) continue
            const c = t[i]
            let d
            o && (0, s.$3)(o, (d = (0, s.PT)(i)))
              ? l && l.includes(d)
                ? ((a || (a = {}))[d] = c)
                : (n[d] = c)
              : A(e.emitsOptions, i) ||
                (i in r && c === r[i]) ||
                ((r[i] = c), (u = !0))
          }
        if (l) {
          const t = (0, i.ux)(n),
            r = a || s.MZ
          for (let i = 0; i < l.length; i++) {
            const a = l[i]
            n[a] = Ct(o, t, a, r[a], e, !(0, s.$3)(r, a))
          }
        }
        return u
      }
      function Ct(e, t, n, i, r, o) {
        const l = e[n]
        if (null != l) {
          const e = (0, s.$3)(l, 'default')
          if (e && void 0 === i) {
            const e = l.default
            if (l.type !== Function && !l.skipFactory && (0, s.Tn)(e)) {
              const { propsDefaults: s } = r
              if (n in s) i = s[n]
              else {
                const o = $n(r)
                ;(i = s[n] = e.call(null, t)), o()
              }
            } else i = e
          }
          l[0] &&
            (o && !e
              ? (i = !1)
              : !l[1] || ('' !== i && i !== (0, s.Tg)(n)) || (i = !0))
        }
        return i
      }
      function kt(e, t, n = !1) {
        const i = t.propsCache,
          r = i.get(e)
        if (r) return r
        const o = e.props,
          l = {},
          a = []
        let u = !1
        if (!(0, s.Tn)(e)) {
          const i = (e) => {
            u = !0
            const [n, i] = kt(e, t, !0)
            ;(0, s.X$)(l, n), i && a.push(...i)
          }
          !n && t.mixins.length && t.mixins.forEach(i),
            e.extends && i(e.extends),
            e.mixins && e.mixins.forEach(i)
        }
        if (!o && !u) return (0, s.Gv)(e) && i.set(e, s.Oj), s.Oj
        if ((0, s.cy)(o))
          for (let d = 0; d < o.length; d++) {
            0
            const e = (0, s.PT)(o[d])
            St(e) && (l[e] = s.MZ)
          }
        else if (o) {
          0
          for (const e in o) {
            const t = (0, s.PT)(e)
            if (St(t)) {
              const n = o[e],
                i = (l[t] =
                  (0, s.cy)(n) || (0, s.Tn)(n) ? { type: n } : (0, s.X$)({}, n))
              if (i) {
                const e = Ot(Boolean, i.type),
                  n = Ot(String, i.type)
                ;(i[0] = e > -1),
                  (i[1] = n < 0 || e < n),
                  (e > -1 || (0, s.$3)(i, 'default')) && a.push(t)
              }
            }
          }
        }
        const c = [l, a]
        return (0, s.Gv)(e) && i.set(e, c), c
      }
      function St(e) {
        return '$' !== e[0] && !(0, s.SU)(e)
      }
      function Mt(e) {
        if (null === e) return 'null'
        if ('function' === typeof e) return e.name || ''
        if ('object' === typeof e) {
          const t = e.constructor && e.constructor.name
          return t || ''
        }
        return ''
      }
      function xt(e, t) {
        return Mt(e) === Mt(t)
      }
      function Ot(e, t) {
        return (0, s.cy)(t)
          ? t.findIndex((t) => xt(t, e))
          : (0, s.Tn)(t) && xt(t, e)
            ? 0
            : -1
      }
      const At = (e) => '_' === e[0] || '$stable' === e,
        Lt = (e) => ((0, s.cy)(e) ? e.map(_n) : [_n(e)]),
        $t = (e, t, n) => {
          if (t._n) return t
          const i = j((...e) => Lt(t(...e)), n)
          return (i._c = !1), i
        },
        Nt = (e, t, n) => {
          const i = e._ctx
          for (const r in e) {
            if (At(r)) continue
            const n = e[r]
            if ((0, s.Tn)(n)) t[r] = $t(r, n, i)
            else if (null != n) {
              0
              const e = Lt(n)
              t[r] = () => e
            }
          }
        },
        Rt = (e, t) => {
          const n = Lt(t)
          e.slots.default = () => n
        },
        Wt = (e, t) => {
          const n = (e.slots = bt())
          if (32 & e.vnode.shapeFlag) {
            const e = t._
            e ? ((0, s.X$)(n, t), (0, s.yQ)(n, '_', e, !0)) : Nt(t, n)
          } else t && Rt(e, t)
        },
        jt = (e, t, n) => {
          const { vnode: i, slots: r } = e
          let o = !0,
            l = s.MZ
          if (32 & i.shapeFlag) {
            const e = t._
            e
              ? n && 1 === e
                ? (o = !1)
                : ((0, s.X$)(r, t), n || 1 !== e || delete r._)
              : ((o = !t.$stable), Nt(t, r)),
              (l = t)
          } else t && (Rt(e, t), (l = { default: 1 }))
          if (o) for (const s in r) At(s) || null != l[s] || delete r[s]
        }
      function Ft(e, t, n, o, l = !1) {
        if ((0, s.cy)(e))
          return void e.forEach((e, i) =>
            Ft(e, t && ((0, s.cy)(t) ? t[i] : t), n, o, l),
          )
        if (De(o) && !l) return
        const a = 4 & o.shapeFlag ? Xn(o.component) || o.component.proxy : o.el,
          u = l ? null : a,
          { i: c, r: d } = e
        const h = t && t.r,
          p = c.refs === s.MZ ? (c.refs = {}) : c.refs,
          f = c.setupState
        if (
          (null != h &&
            h !== d &&
            ((0, s.Kg)(h)
              ? ((p[h] = null), (0, s.$3)(f, h) && (f[h] = null))
              : (0, i.i9)(h) && (h.value = null)),
          (0, s.Tn)(d))
        )
          r(d, c, 12, [u, p])
        else {
          const t = (0, s.Kg)(d),
            r = (0, i.i9)(d)
          if (t || r) {
            const i = () => {
              if (e.f) {
                const n = t ? ((0, s.$3)(f, d) ? f[d] : p[d]) : d.value
                l
                  ? (0, s.cy)(n) && (0, s.TF)(n, a)
                  : (0, s.cy)(n)
                    ? n.includes(a) || n.push(a)
                    : t
                      ? ((p[d] = [a]), (0, s.$3)(f, d) && (f[d] = p[d]))
                      : ((d.value = [a]), e.k && (p[e.k] = d.value))
              } else
                t
                  ? ((p[d] = u), (0, s.$3)(f, d) && (f[d] = u))
                  : r && ((d.value = u), e.k && (p[e.k] = u))
            }
            u ? ((i.id = -1), Ht(i, n)) : i()
          } else 0
        }
      }
      function It() {}
      const Ht = Z
      function Pt(e) {
        return Vt(e)
      }
      function Vt(e, t) {
        It()
        const n = (0, s.We)()
        n.__VUE__ = !0
        const {
            insert: r,
            remove: o,
            patchProp: l,
            createElement: a,
            createText: u,
            createComment: c,
            setText: d,
            setElementText: h,
            parentNode: p,
            nextSibling: f,
            setScopeId: v = s.tE,
            insertStaticContent: m,
          } = e,
          g = (
            e,
            t,
            n,
            i = null,
            s = null,
            r = null,
            o = void 0,
            l = null,
            a = !!t.dynamicChildren,
          ) => {
            if (e === t) return
            e && !dn(e, t) && ((i = q(e)), z(e, s, r, !0), (e = null)),
              -2 === t.patchFlag && ((a = !1), (t.dynamicChildren = null))
            const { type: u, ref: c, shapeFlag: d } = t
            switch (u) {
              case Zt:
                y(e, t, n, i)
                break
              case qt:
                w(e, t, n, i)
                break
              case Jt:
                null == e && _(t, n, i, o)
                break
              case Qt:
                N(e, t, n, i, s, r, o, l, a)
                break
              default:
                1 & d
                  ? S(e, t, n, i, s, r, o, l, a)
                  : 6 & d
                    ? R(e, t, n, i, s, r, o, l, a)
                    : (64 & d || 128 & d) &&
                      u.process(e, t, n, i, s, r, o, l, a, te)
            }
            null != c && s && Ft(c, e && e.ref, r, t || e, !t)
          },
          y = (e, t, n, i) => {
            if (null == e) r((t.el = u(t.children)), n, i)
            else {
              const n = (t.el = e.el)
              t.children !== e.children && d(n, t.children)
            }
          },
          w = (e, t, n, i) => {
            null == e ? r((t.el = c(t.children || '')), n, i) : (t.el = e.el)
          },
          _ = (e, t, n, i) => {
            ;[e.el, e.anchor] = m(e.children, t, n, i, e.el, e.anchor)
          },
          E = ({ el: e, anchor: t }, n, i) => {
            let s
            while (e && e !== t) (s = f(e)), r(e, n, i), (e = s)
            r(t, n, i)
          },
          k = ({ el: e, anchor: t }) => {
            let n
            while (e && e !== t) (n = f(e)), o(e), (e = n)
            o(t)
          },
          S = (e, t, n, i, s, r, o, l, a) => {
            'svg' === t.type
              ? (o = 'svg')
              : 'math' === t.type && (o = 'mathml'),
              null == e ? M(t, n, i, s, r, o, l, a) : A(e, t, s, r, o, l, a)
          },
          M = (e, t, n, i, o, u, c, d) => {
            let p, f
            const { props: v, shapeFlag: m, transition: g, dirs: y } = e
            if (
              ((p = e.el = a(e.type, u, v && v.is, v)),
              8 & m
                ? h(p, e.children)
                : 16 & m && O(e.children, p, null, i, o, Bt(e, u), c, d),
              y && le(e, null, i, 'created'),
              x(p, e, e.scopeId, c, i),
              v)
            ) {
              for (const t in v)
                'value' === t ||
                  (0, s.SU)(t) ||
                  l(p, t, null, v[t], u, e.children, i, o, Z)
              'value' in v && l(p, 'value', null, v.value, u),
                (f = v.onVnodeBeforeMount) && Cn(f, i, e)
            }
            y && le(e, null, i, 'beforeMount')
            const w = Xt(o, g)
            w && g.beforeEnter(p),
              r(p, t, n),
              ((f = v && v.onVnodeMounted) || w || y) &&
                Ht(() => {
                  f && Cn(f, i, e),
                    w && g.enter(p),
                    y && le(e, null, i, 'mounted')
                }, o)
          },
          x = (e, t, n, i, s) => {
            if ((n && v(e, n), i)) for (let r = 0; r < i.length; r++) v(e, i[r])
            if (s) {
              let n = s.subTree
              if (t === n) {
                const t = s.vnode
                x(e, t, t.scopeId, t.slotScopeIds, s.parent)
              }
            }
          },
          O = (e, t, n, i, s, r, o, l, a = 0) => {
            for (let u = a; u < e.length; u++) {
              const a = (e[u] = l ? Dn(e[u]) : _n(e[u]))
              g(null, a, t, n, i, s, r, o, l)
            }
          },
          A = (e, t, n, i, r, o, a) => {
            const u = (t.el = e.el)
            let { patchFlag: c, dynamicChildren: d, dirs: p } = t
            c |= 16 & e.patchFlag
            const f = e.props || s.MZ,
              v = t.props || s.MZ
            let m
            if (
              (n && Ut(n, !1),
              (m = v.onVnodeBeforeUpdate) && Cn(m, n, t, e),
              p && le(t, e, n, 'beforeUpdate'),
              n && Ut(n, !0),
              d
                ? L(e.dynamicChildren, d, u, n, i, Bt(t, r), o)
                : a || V(e, t, u, null, n, i, Bt(t, r), o, !1),
              c > 0)
            ) {
              if (16 & c) $(u, t, f, v, n, i, r)
              else if (
                (2 & c &&
                  f.class !== v.class &&
                  l(u, 'class', null, v.class, r),
                4 & c && l(u, 'style', f.style, v.style, r),
                8 & c)
              ) {
                const s = t.dynamicProps
                for (let t = 0; t < s.length; t++) {
                  const o = s[t],
                    a = f[o],
                    c = v[o]
                  ;(c === a && 'value' !== o) ||
                    l(u, o, a, c, r, e.children, n, i, Z)
                }
              }
              1 & c && e.children !== t.children && h(u, t.children)
            } else a || null != d || $(u, t, f, v, n, i, r)
            ;((m = v.onVnodeUpdated) || p) &&
              Ht(() => {
                m && Cn(m, n, t, e), p && le(t, e, n, 'updated')
              }, i)
          },
          L = (e, t, n, i, s, r, o) => {
            for (let l = 0; l < t.length; l++) {
              const a = e[l],
                u = t[l],
                c =
                  a.el && (a.type === Qt || !dn(a, u) || 70 & a.shapeFlag)
                    ? p(a.el)
                    : n
              g(a, u, c, null, i, s, r, o, !0)
            }
          },
          $ = (e, t, n, i, r, o, a) => {
            if (n !== i) {
              if (n !== s.MZ)
                for (const u in n)
                  (0, s.SU)(u) ||
                    u in i ||
                    l(e, u, n[u], null, a, t.children, r, o, Z)
              for (const u in i) {
                if ((0, s.SU)(u)) continue
                const c = i[u],
                  d = n[u]
                c !== d &&
                  'value' !== u &&
                  l(e, u, d, c, a, t.children, r, o, Z)
              }
              'value' in i && l(e, 'value', n.value, i.value, a)
            }
          },
          N = (e, t, n, i, s, o, l, a, c) => {
            const d = (t.el = e ? e.el : u('')),
              h = (t.anchor = e ? e.anchor : u(''))
            let { patchFlag: p, dynamicChildren: f, slotScopeIds: v } = t
            v && (a = a ? a.concat(v) : v),
              null == e
                ? (r(d, n, i),
                  r(h, n, i),
                  O(t.children || [], n, h, s, o, l, a, c))
                : p > 0 && 64 & p && f && e.dynamicChildren
                  ? (L(e.dynamicChildren, f, n, s, o, l, a),
                    (null != t.key || (s && t === s.subTree)) && Yt(e, t, !0))
                  : V(e, t, n, h, s, o, l, a, c)
          },
          R = (e, t, n, i, s, r, o, l, a) => {
            ;(t.slotScopeIds = l),
              null == e
                ? 512 & t.shapeFlag
                  ? s.ctx.activate(t, n, i, o, a)
                  : W(t, n, i, s, r, o, a)
                : j(e, t, a)
          },
          W = (e, t, n, i, s, r, o) => {
            const l = (e.component = Mn(e, i, s))
            if ((Ee(e) && (l.ctx.renderer = te), In(l), l.asyncDep)) {
              if ((s && s.registerDep(l, I), !e.el)) {
                const e = (l.subTree = vn(qt))
                w(null, e, t, n)
              }
            } else I(l, e, t, n, s, r, o)
          },
          j = (e, t, n) => {
            const i = (t.component = e.component)
            if (P(e, t, n)) {
              if (i.asyncDep && !i.asyncResolved) return void H(i, t, n)
              ;(i.next = t), D(i.update), (i.effect.dirty = !0), i.update()
            } else (t.el = e.el), (i.vnode = t)
          },
          I = (e, t, n, r, o, l, a) => {
            const u = () => {
                if (e.isMounted) {
                  let { next: t, bu: n, u: i, parent: r, vnode: c } = e
                  {
                    const n = Gt(e)
                    if (n)
                      return (
                        t && ((t.el = c.el), H(e, t, a)),
                        void n.asyncDep.then(() => {
                          e.isUnmounted || u()
                        })
                      )
                  }
                  let d,
                    h = t
                  0,
                    Ut(e, !1),
                    t ? ((t.el = c.el), H(e, t, a)) : (t = c),
                    n && (0, s.DY)(n),
                    (d = t.props && t.props.onVnodeBeforeUpdate) &&
                      Cn(d, r, t, c),
                    Ut(e, !0)
                  const f = F(e)
                  0
                  const v = e.subTree
                  ;(e.subTree = f),
                    g(v, f, p(v.el), q(v), e, o, l),
                    (t.el = f.el),
                    null === h && B(e, f.el),
                    i && Ht(i, o),
                    (d = t.props && t.props.onVnodeUpdated) &&
                      Ht(() => Cn(d, r, t, c), o)
                } else {
                  let i
                  const { el: a, props: u } = t,
                    { bm: c, m: d, parent: h } = e,
                    p = De(t)
                  if (
                    (Ut(e, !1),
                    c && (0, s.DY)(c),
                    !p && (i = u && u.onVnodeBeforeMount) && Cn(i, h, t),
                    Ut(e, !0),
                    a && ie)
                  ) {
                    const n = () => {
                      ;(e.subTree = F(e)), ie(a, e.subTree, e, o, null)
                    }
                    p
                      ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                      : n()
                  } else {
                    0
                    const i = (e.subTree = F(e))
                    0, g(null, i, n, r, e, o, l), (t.el = i.el)
                  }
                  if ((d && Ht(d, o), !p && (i = u && u.onVnodeMounted))) {
                    const e = t
                    Ht(() => Cn(i, h, e), o)
                  }
                  ;(256 & t.shapeFlag ||
                    (h && De(h.vnode) && 256 & h.vnode.shapeFlag)) &&
                    e.a &&
                    Ht(e.a, o),
                    (e.isMounted = !0),
                    (t = n = r = null)
                }
              },
              c = (e.effect = new i.X2(u, s.tE, () => b(d), e.scope)),
              d = (e.update = () => {
                c.dirty && c.run()
              })
            ;(d.id = e.uid), Ut(e, !0), d()
          },
          H = (e, t, n) => {
            t.component = e
            const s = e.vnode.props
            ;(e.vnode = t),
              (e.next = null),
              Et(e, t.props, s, n),
              jt(e, t.children, n),
              (0, i.C4)(),
              T(e),
              (0, i.bl)()
          },
          V = (e, t, n, i, s, r, o, l, a = !1) => {
            const u = e && e.children,
              c = e ? e.shapeFlag : 0,
              d = t.children,
              { patchFlag: p, shapeFlag: f } = t
            if (p > 0) {
              if (128 & p) return void X(u, d, n, i, s, r, o, l, a)
              if (256 & p) return void U(u, d, n, i, s, r, o, l, a)
            }
            8 & f
              ? (16 & c && Z(u, s, r), d !== u && h(n, d))
              : 16 & c
                ? 16 & f
                  ? X(u, d, n, i, s, r, o, l, a)
                  : Z(u, s, r, !0)
                : (8 & c && h(n, ''), 16 & f && O(d, n, i, s, r, o, l, a))
          },
          U = (e, t, n, i, r, o, l, a, u) => {
            ;(e = e || s.Oj), (t = t || s.Oj)
            const c = e.length,
              d = t.length,
              h = Math.min(c, d)
            let p
            for (p = 0; p < h; p++) {
              const i = (t[p] = u ? Dn(t[p]) : _n(t[p]))
              g(e[p], i, n, null, r, o, l, a, u)
            }
            c > d ? Z(e, r, o, !0, !1, h) : O(t, n, i, r, o, l, a, u, h)
          },
          X = (e, t, n, i, r, o, l, a, u) => {
            let c = 0
            const d = t.length
            let h = e.length - 1,
              p = d - 1
            while (c <= h && c <= p) {
              const i = e[c],
                s = (t[c] = u ? Dn(t[c]) : _n(t[c]))
              if (!dn(i, s)) break
              g(i, s, n, null, r, o, l, a, u), c++
            }
            while (c <= h && c <= p) {
              const i = e[h],
                s = (t[p] = u ? Dn(t[p]) : _n(t[p]))
              if (!dn(i, s)) break
              g(i, s, n, null, r, o, l, a, u), h--, p--
            }
            if (c > h) {
              if (c <= p) {
                const e = p + 1,
                  s = e < d ? t[e].el : i
                while (c <= p)
                  g(
                    null,
                    (t[c] = u ? Dn(t[c]) : _n(t[c])),
                    n,
                    s,
                    r,
                    o,
                    l,
                    a,
                    u,
                  ),
                    c++
              }
            } else if (c > p) while (c <= h) z(e[c], r, o, !0), c++
            else {
              const f = c,
                v = c,
                m = new Map()
              for (c = v; c <= p; c++) {
                const e = (t[c] = u ? Dn(t[c]) : _n(t[c]))
                null != e.key && m.set(e.key, c)
              }
              let y,
                w = 0
              const b = p - v + 1
              let _ = !1,
                D = 0
              const E = new Array(b)
              for (c = 0; c < b; c++) E[c] = 0
              for (c = f; c <= h; c++) {
                const i = e[c]
                if (w >= b) {
                  z(i, r, o, !0)
                  continue
                }
                let s
                if (null != i.key) s = m.get(i.key)
                else
                  for (y = v; y <= p; y++)
                    if (0 === E[y - v] && dn(i, t[y])) {
                      s = y
                      break
                    }
                void 0 === s
                  ? z(i, r, o, !0)
                  : ((E[s - v] = c + 1),
                    s >= D ? (D = s) : (_ = !0),
                    g(i, t[s], n, null, r, o, l, a, u),
                    w++)
              }
              const T = _ ? zt(E) : s.Oj
              for (y = T.length - 1, c = b - 1; c >= 0; c--) {
                const e = v + c,
                  s = t[e],
                  h = e + 1 < d ? t[e + 1].el : i
                0 === E[c]
                  ? g(null, s, n, h, r, o, l, a, u)
                  : _ && (y < 0 || c !== T[y] ? Y(s, n, h, 2) : y--)
              }
            }
          },
          Y = (e, t, n, i, s = null) => {
            const {
              el: o,
              type: l,
              transition: a,
              children: u,
              shapeFlag: c,
            } = e
            if (6 & c) return void Y(e.component.subTree, t, n, i)
            if (128 & c) return void e.suspense.move(t, n, i)
            if (64 & c) return void l.move(e, t, n, te)
            if (l === Qt) {
              r(o, t, n)
              for (let e = 0; e < u.length; e++) Y(u[e], t, n, i)
              return void r(e.anchor, t, n)
            }
            if (l === Jt) return void E(e, t, n)
            const d = 2 !== i && 1 & c && a
            if (d)
              if (0 === i) a.beforeEnter(o), r(o, t, n), Ht(() => a.enter(o), s)
              else {
                const { leave: e, delayLeave: i, afterLeave: s } = a,
                  l = () => r(o, t, n),
                  u = () => {
                    e(o, () => {
                      l(), s && s()
                    })
                  }
                i ? i(o, l, u) : u()
              }
            else r(o, t, n)
          },
          z = (e, t, n, i = !1, s = !1) => {
            const {
              type: r,
              props: o,
              ref: l,
              children: a,
              dynamicChildren: u,
              shapeFlag: c,
              patchFlag: d,
              dirs: h,
            } = e
            if ((null != l && Ft(l, null, n, e, !0), 256 & c))
              return void t.ctx.deactivate(e)
            const p = 1 & c && h,
              f = !De(e)
            let v
            if ((f && (v = o && o.onVnodeBeforeUnmount) && Cn(v, t, e), 6 & c))
              Q(e.component, n, i)
            else {
              if (128 & c) return void e.suspense.unmount(n, i)
              p && le(e, null, t, 'beforeUnmount'),
                64 & c
                  ? e.type.remove(e, t, n, s, te, i)
                  : u && (r !== Qt || (d > 0 && 64 & d))
                    ? Z(u, t, n, !1, !0)
                    : ((r === Qt && 384 & d) || (!s && 16 & c)) && Z(a, t, n),
                i && G(e)
            }
            ;((f && (v = o && o.onVnodeUnmounted)) || p) &&
              Ht(() => {
                v && Cn(v, t, e), p && le(e, null, t, 'unmounted')
              }, n)
          },
          G = (e) => {
            const { type: t, el: n, anchor: i, transition: s } = e
            if (t === Qt) return void K(n, i)
            if (t === Jt) return void k(e)
            const r = () => {
              o(n), s && !s.persisted && s.afterLeave && s.afterLeave()
            }
            if (1 & e.shapeFlag && s && !s.persisted) {
              const { leave: t, delayLeave: i } = s,
                o = () => t(n, r)
              i ? i(e.el, r, o) : o()
            } else r()
          },
          K = (e, t) => {
            let n
            while (e !== t) (n = f(e)), o(e), (e = n)
            o(t)
          },
          Q = (e, t, n) => {
            const { bum: i, scope: r, update: o, subTree: l, um: a } = e
            i && (0, s.DY)(i),
              r.stop(),
              o && ((o.active = !1), z(l, e, t, n)),
              a && Ht(a, t),
              Ht(() => {
                e.isUnmounted = !0
              }, t),
              t &&
                t.pendingBranch &&
                !t.isUnmounted &&
                e.asyncDep &&
                !e.asyncResolved &&
                e.suspenseId === t.pendingId &&
                (t.deps--, 0 === t.deps && t.resolve())
          },
          Z = (e, t, n, i = !1, s = !1, r = 0) => {
            for (let o = r; o < e.length; o++) z(e[o], t, n, i, s)
          },
          q = (e) =>
            6 & e.shapeFlag
              ? q(e.component.subTree)
              : 128 & e.shapeFlag
                ? e.suspense.next()
                : f(e.anchor || e.el)
        let J = !1
        const ee = (e, t, n) => {
            null == e
              ? t._vnode && z(t._vnode, null, null, !0)
              : g(t._vnode || null, e, t, null, null, null, n),
              J || ((J = !0), T(), C(), (J = !1)),
              (t._vnode = e)
          },
          te = {
            p: g,
            um: z,
            m: Y,
            r: G,
            mt: W,
            mc: O,
            pc: V,
            pbc: L,
            n: q,
            o: e,
          }
        let ne, ie
        return (
          t && ([ne, ie] = t(te)),
          { render: ee, hydrate: ne, createApp: vt(ee, ne) }
        )
      }
      function Bt({ type: e, props: t }, n) {
        return ('svg' === n && 'foreignObject' === e) ||
          ('mathml' === n &&
            'annotation-xml' === e &&
            t &&
            t.encoding &&
            t.encoding.includes('html'))
          ? void 0
          : n
      }
      function Ut({ effect: e, update: t }, n) {
        e.allowRecurse = t.allowRecurse = n
      }
      function Xt(e, t) {
        return (!e || (e && !e.pendingBranch)) && t && !t.persisted
      }
      function Yt(e, t, n = !1) {
        const i = e.children,
          r = t.children
        if ((0, s.cy)(i) && (0, s.cy)(r))
          for (let s = 0; s < i.length; s++) {
            const e = i[s]
            let t = r[s]
            1 & t.shapeFlag &&
              !t.dynamicChildren &&
              ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
                ((t = r[s] = Dn(r[s])), (t.el = e.el)),
              n || Yt(e, t)),
              t.type === Zt && (t.el = e.el)
          }
      }
      function zt(e) {
        const t = e.slice(),
          n = [0]
        let i, s, r, o, l
        const a = e.length
        for (i = 0; i < a; i++) {
          const a = e[i]
          if (0 !== a) {
            if (((s = n[n.length - 1]), e[s] < a)) {
              ;(t[i] = s), n.push(i)
              continue
            }
            ;(r = 0), (o = n.length - 1)
            while (r < o)
              (l = (r + o) >> 1), e[n[l]] < a ? (r = l + 1) : (o = l)
            a < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), (n[r] = i))
          }
        }
        ;(r = n.length), (o = n[r - 1])
        while (r-- > 0) (n[r] = o), (o = t[o])
        return n
      }
      function Gt(e) {
        const t = e.subTree.component
        if (t) return t.asyncDep && !t.asyncResolved ? t : Gt(t)
      }
      const Kt = (e) => e.__isTeleport
      const Qt = Symbol.for('v-fgt'),
        Zt = Symbol.for('v-txt'),
        qt = Symbol.for('v-cmt'),
        Jt = Symbol.for('v-stc'),
        en = []
      let tn = null
      function nn(e = !1) {
        en.push((tn = e ? null : []))
      }
      function sn() {
        en.pop(), (tn = en[en.length - 1] || null)
      }
      let rn = 1
      function on(e) {
        rn += e
      }
      function ln(e) {
        return (
          (e.dynamicChildren = rn > 0 ? tn || s.Oj : null),
          sn(),
          rn > 0 && tn && tn.push(e),
          e
        )
      }
      function an(e, t, n, i, s, r) {
        return ln(fn(e, t, n, i, s, r, !0))
      }
      function un(e, t, n, i, s) {
        return ln(vn(e, t, n, i, s, !0))
      }
      function cn(e) {
        return !!e && !0 === e.__v_isVNode
      }
      function dn(e, t) {
        return e.type === t.type && e.key === t.key
      }
      const hn = ({ key: e }) => (null != e ? e : null),
        pn = ({ ref: e, ref_key: t, ref_for: n }) => (
          'number' === typeof e && (e = '' + e),
          null != e
            ? (0, s.Kg)(e) || (0, i.i9)(e) || (0, s.Tn)(e)
              ? { i: L, r: e, k: t, f: !!n }
              : e
            : null
        )
      function fn(
        e,
        t = null,
        n = null,
        i = 0,
        r = null,
        o = e === Qt ? 0 : 1,
        l = !1,
        a = !1,
      ) {
        const u = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e,
          props: t,
          key: t && hn(t),
          ref: t && pn(t),
          scopeId: $,
          slotScopeIds: null,
          children: n,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: o,
          patchFlag: i,
          dynamicProps: r,
          dynamicChildren: null,
          appContext: null,
          ctx: L,
        }
        return (
          a
            ? (En(u, n), 128 & o && e.normalize(u))
            : n && (u.shapeFlag |= (0, s.Kg)(n) ? 8 : 16),
          rn > 0 &&
            !l &&
            tn &&
            (u.patchFlag > 0 || 6 & o) &&
            32 !== u.patchFlag &&
            tn.push(u),
          u
        )
      }
      const vn = mn
      function mn(e, t = null, n = null, r = 0, o = null, l = !1) {
        if (((e && e !== Y) || (e = qt), cn(e))) {
          const i = yn(e, t, !0)
          return (
            n && En(i, n),
            rn > 0 &&
              !l &&
              tn &&
              (6 & i.shapeFlag ? (tn[tn.indexOf(e)] = i) : tn.push(i)),
            (i.patchFlag |= -2),
            i
          )
        }
        if ((zn(e) && (e = e.__vccOpts), t)) {
          t = gn(t)
          let { class: e, style: n } = t
          e && !(0, s.Kg)(e) && (t.class = (0, s.C4)(e)),
            (0, s.Gv)(n) &&
              ((0, i.ju)(n) && !(0, s.cy)(n) && (n = (0, s.X$)({}, n)),
              (t.style = (0, s.Tr)(n)))
        }
        const a = (0, s.Kg)(e)
          ? 1
          : Q(e)
            ? 128
            : Kt(e)
              ? 64
              : (0, s.Gv)(e)
                ? 4
                : (0, s.Tn)(e)
                  ? 2
                  : 0
        return fn(e, t, n, r, o, a, l, !0)
      }
      function gn(e) {
        return e ? ((0, i.ju)(e) || _t(e) ? (0, s.X$)({}, e) : e) : null
      }
      function yn(e, t, n = !1, i = !1) {
        const {
            props: r,
            ref: o,
            patchFlag: l,
            children: a,
            transition: u,
          } = e,
          c = t ? Tn(r || {}, t) : r,
          d = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: c,
            key: c && hn(c),
            ref:
              t && t.ref
                ? n && o
                  ? (0, s.cy)(o)
                    ? o.concat(pn(t))
                    : [o, pn(t)]
                  : pn(t)
                : o,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: a,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Qt ? (-1 === l ? 16 : 16 | l) : l,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: u,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && yn(e.ssContent),
            ssFallback: e.ssFallback && yn(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
          }
        return u && i && (d.transition = u.clone(d)), d
      }
      function wn(e = ' ', t = 0) {
        return vn(Zt, null, e, t)
      }
      function bn(e = '', t = !1) {
        return t ? (nn(), un(qt, null, e)) : vn(qt, null, e)
      }
      function _n(e) {
        return null == e || 'boolean' === typeof e
          ? vn(qt)
          : (0, s.cy)(e)
            ? vn(Qt, null, e.slice())
            : 'object' === typeof e
              ? Dn(e)
              : vn(Zt, null, String(e))
      }
      function Dn(e) {
        return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : yn(e)
      }
      function En(e, t) {
        let n = 0
        const { shapeFlag: i } = e
        if (null == t) t = null
        else if ((0, s.cy)(t)) n = 16
        else if ('object' === typeof t) {
          if (65 & i) {
            const n = t.default
            return void (
              n && (n._c && (n._d = !1), En(e, n()), n._c && (n._d = !0))
            )
          }
          {
            n = 32
            const i = t._
            i || _t(t)
              ? 3 === i &&
                L &&
                (1 === L.slots._
                  ? (t._ = 1)
                  : ((t._ = 2), (e.patchFlag |= 1024)))
              : (t._ctx = L)
          }
        } else
          (0, s.Tn)(t)
            ? ((t = { default: t, _ctx: L }), (n = 32))
            : ((t = String(t)), 64 & i ? ((n = 16), (t = [wn(t)])) : (n = 8))
        ;(e.children = t), (e.shapeFlag |= n)
      }
      function Tn(...e) {
        const t = {}
        for (let n = 0; n < e.length; n++) {
          const i = e[n]
          for (const e in i)
            if ('class' === e)
              t.class !== i.class && (t.class = (0, s.C4)([t.class, i.class]))
            else if ('style' === e) t.style = (0, s.Tr)([t.style, i.style])
            else if ((0, s.Mp)(e)) {
              const n = t[e],
                r = i[e]
              !r ||
                n === r ||
                ((0, s.cy)(n) && n.includes(r)) ||
                (t[e] = n ? [].concat(n, r) : r)
            } else '' !== e && (t[e] = i[e])
        }
        return t
      }
      function Cn(e, t, n, i = null) {
        o(e, t, 7, [n, i])
      }
      const kn = pt()
      let Sn = 0
      function Mn(e, t, n) {
        const r = e.type,
          o = (t ? t.appContext : e.appContext) || kn,
          l = {
            uid: Sn++,
            vnode: e,
            type: r,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new i.yC(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: kt(r, o),
            emitsOptions: O(r, o),
            emit: null,
            emitted: null,
            propsDefaults: s.MZ,
            inheritAttrs: r.inheritAttrs,
            ctx: s.MZ,
            data: s.MZ,
            props: s.MZ,
            attrs: s.MZ,
            slots: s.MZ,
            refs: s.MZ,
            setupState: s.MZ,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
          }
        return (
          (l.ctx = { _: l }),
          (l.root = t ? t.root : l),
          (l.emit = x.bind(null, l)),
          e.ce && e.ce(l),
          l
        )
      }
      let xn = null
      const On = () => xn || L
      let An, Ln
      {
        const e = (0, s.We)(),
          t = (t, n) => {
            let i
            return (
              (i = e[t]) || (i = e[t] = []),
              i.push(n),
              (e) => {
                i.length > 1 ? i.forEach((t) => t(e)) : i[0](e)
              }
            )
          }
        ;(An = t('__VUE_INSTANCE_SETTERS__', (e) => (xn = e))),
          (Ln = t('__VUE_SSR_SETTERS__', (e) => (Fn = e)))
      }
      const $n = (e) => {
          const t = xn
          return (
            An(e),
            e.scope.on(),
            () => {
              e.scope.off(), An(t)
            }
          )
        },
        Nn = () => {
          xn && xn.scope.off(), An(null)
        }
      function Rn(e) {
        return 4 & e.vnode.shapeFlag
      }
      let Wn,
        jn,
        Fn = !1
      function In(e, t = !1) {
        t && Ln(t)
        const { props: n, children: i } = e.vnode,
          s = Rn(e)
        Dt(e, n, s, t), Wt(e, i)
        const r = s ? Hn(e, t) : void 0
        return t && Ln(!1), r
      }
      function Hn(e, t) {
        const n = e.type
        ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Qe))
        const { setup: o } = n
        if (o) {
          const n = (e.setupContext = o.length > 1 ? Un(e) : null),
            a = $n(e)
          ;(0, i.C4)()
          const u = r(o, e, 0, [e.props, n])
          if (((0, i.bl)(), a(), (0, s.yL)(u))) {
            if ((u.then(Nn, Nn), t))
              return u
                .then((n) => {
                  Pn(e, n, t)
                })
                .catch((t) => {
                  l(t, e, 0)
                })
            e.asyncDep = u
          } else Pn(e, u, t)
        } else Vn(e, t)
      }
      function Pn(e, t, n) {
        ;(0, s.Tn)(t)
          ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
          : (0, s.Gv)(t) && (e.setupState = (0, i.Pr)(t)),
          Vn(e, n)
      }
      function Vn(e, t, n) {
        const r = e.type
        if (!e.render) {
          if (!t && Wn && !r.render) {
            const t = r.template || it(e).template
            if (t) {
              0
              const { isCustomElement: n, compilerOptions: i } =
                  e.appContext.config,
                { delimiters: o, compilerOptions: l } = r,
                a = (0, s.X$)(
                  (0, s.X$)({ isCustomElement: n, delimiters: o }, i),
                  l,
                )
              r.render = Wn(t, a)
            }
          }
          ;(e.render = r.render || s.tE), jn && jn(e)
        }
        {
          const t = $n(e)
          ;(0, i.C4)()
          try {
            Je(e)
          } finally {
            ;(0, i.bl)(), t()
          }
        }
      }
      const Bn = {
        get(e, t) {
          return (0, i.u4)(e, 'get', ''), e[t]
        },
      }
      function Un(e) {
        const t = (t) => {
          e.exposed = t || {}
        }
        return {
          attrs: new Proxy(e.attrs, Bn),
          slots: e.slots,
          emit: e.emit,
          expose: t,
        }
      }
      function Xn(e) {
        if (e.exposed)
          return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy((0, i.Pr)((0, i.IG)(e.exposed)), {
              get(t, n) {
                return n in t ? t[n] : n in Ge ? Ge[n](e) : void 0
              },
              has(e, t) {
                return t in e || t in Ge
              },
            }))
          )
      }
      function Yn(e, t = !0) {
        return (0, s.Tn)(e)
          ? e.displayName || e.name
          : e.name || (t && e.__name)
      }
      function zn(e) {
        return (0, s.Tn)(e) && '__vccOpts' in e
      }
      const Gn = (e, t) => {
        const n = (0, i.EW)(e, t, Fn)
        return n
      }
      function Kn(e, t, n) {
        const i = arguments.length
        return 2 === i
          ? (0, s.Gv)(t) && !(0, s.cy)(t)
            ? cn(t)
              ? vn(e, null, [t])
              : vn(e, t)
            : vn(e, null, t)
          : (i > 3
              ? (n = Array.prototype.slice.call(arguments, 2))
              : 3 === i && cn(n) && (n = [n]),
            vn(e, t, n))
      }
      const Qn = '3.4.27'
    },
    3751: function (e, t, n) {
      'use strict'
      n.d(t, {
        D$: function () {
          return _e
        },
        Ef: function () {
          return Se
        },
        F: function () {
          return ce
        },
        XL: function () {
          return ge
        },
        eB: function () {
          return f
        },
        jR: function () {
          return Ee
        },
      })
      var i = n(641),
        s = n(33),
        r = n(953)
      /**
       * @vue/runtime-dom v3.4.27
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/
      const o = 'http://www.w3.org/2000/svg',
        l = 'http://www.w3.org/1998/Math/MathML',
        a = 'undefined' !== typeof document ? document : null,
        u = a && a.createElement('template'),
        c = {
          insert: (e, t, n) => {
            t.insertBefore(e, n || null)
          },
          remove: (e) => {
            const t = e.parentNode
            t && t.removeChild(e)
          },
          createElement: (e, t, n, i) => {
            const s =
              'svg' === t
                ? a.createElementNS(o, e)
                : 'mathml' === t
                  ? a.createElementNS(l, e)
                  : a.createElement(e, n ? { is: n } : void 0)
            return (
              'select' === e &&
                i &&
                null != i.multiple &&
                s.setAttribute('multiple', i.multiple),
              s
            )
          },
          createText: (e) => a.createTextNode(e),
          createComment: (e) => a.createComment(e),
          setText: (e, t) => {
            e.nodeValue = t
          },
          setElementText: (e, t) => {
            e.textContent = t
          },
          parentNode: (e) => e.parentNode,
          nextSibling: (e) => e.nextSibling,
          querySelector: (e) => a.querySelector(e),
          setScopeId(e, t) {
            e.setAttribute(t, '')
          },
          insertStaticContent(e, t, n, i, s, r) {
            const o = n ? n.previousSibling : t.lastChild
            if (s && (s === r || s.nextSibling)) {
              while (1)
                if (
                  (t.insertBefore(s.cloneNode(!0), n),
                  s === r || !(s = s.nextSibling))
                )
                  break
            } else {
              u.innerHTML =
                'svg' === i
                  ? `<svg>${e}</svg>`
                  : 'mathml' === i
                    ? `<math>${e}</math>`
                    : e
              const s = u.content
              if ('svg' === i || 'mathml' === i) {
                const e = s.firstChild
                while (e.firstChild) s.appendChild(e.firstChild)
                s.removeChild(e)
              }
              t.insertBefore(s, n)
            }
            return [
              o ? o.nextSibling : t.firstChild,
              n ? n.previousSibling : t.lastChild,
            ]
          },
        },
        d = 'transition',
        h = 'animation',
        p = Symbol('_vtc'),
        f = (e, { slots: t }) => (0, i.h)(i.pR, w(e), t)
      f.displayName = 'Transition'
      const v = {
          name: String,
          type: String,
          css: { type: Boolean, default: !0 },
          duration: [String, Number, Object],
          enterFromClass: String,
          enterActiveClass: String,
          enterToClass: String,
          appearFromClass: String,
          appearActiveClass: String,
          appearToClass: String,
          leaveFromClass: String,
          leaveActiveClass: String,
          leaveToClass: String,
        },
        m = (f.props = (0, s.X$)({}, i.QP, v)),
        g = (e, t = []) => {
          ;(0, s.cy)(e) ? e.forEach((e) => e(...t)) : e && e(...t)
        },
        y = (e) =>
          !!e && ((0, s.cy)(e) ? e.some((e) => e.length > 1) : e.length > 1)
      function w(e) {
        const t = {}
        for (const s in e) s in v || (t[s] = e[s])
        if (!1 === e.css) return t
        const {
            name: n = 'v',
            type: i,
            duration: r,
            enterFromClass: o = `${n}-enter-from`,
            enterActiveClass: l = `${n}-enter-active`,
            enterToClass: a = `${n}-enter-to`,
            appearFromClass: u = o,
            appearActiveClass: c = l,
            appearToClass: d = a,
            leaveFromClass: h = `${n}-leave-from`,
            leaveActiveClass: p = `${n}-leave-active`,
            leaveToClass: f = `${n}-leave-to`,
          } = e,
          m = b(r),
          w = m && m[0],
          _ = m && m[1],
          {
            onBeforeEnter: C,
            onEnter: S,
            onEnterCancelled: M,
            onLeave: x,
            onLeaveCancelled: A,
            onBeforeAppear: L = C,
            onAppear: $ = S,
            onAppearCancelled: N = M,
          } = t,
          R = (e, t, n) => {
            E(e, t ? d : a), E(e, t ? c : l), n && n()
          },
          W = (e, t) => {
            ;(e._isLeaving = !1), E(e, h), E(e, f), E(e, p), t && t()
          },
          j = (e) => (t, n) => {
            const s = e ? $ : S,
              r = () => R(t, e, n)
            g(s, [t, r]),
              T(() => {
                E(t, e ? u : o), D(t, e ? d : a), y(s) || k(t, i, w, r)
              })
          }
        return (0, s.X$)(t, {
          onBeforeEnter(e) {
            g(C, [e]), D(e, o), D(e, l)
          },
          onBeforeAppear(e) {
            g(L, [e]), D(e, u), D(e, c)
          },
          onEnter: j(!1),
          onAppear: j(!0),
          onLeave(e, t) {
            e._isLeaving = !0
            const n = () => W(e, t)
            D(e, h),
              D(e, p),
              O(),
              T(() => {
                e._isLeaving && (E(e, h), D(e, f), y(x) || k(e, i, _, n))
              }),
              g(x, [e, n])
          },
          onEnterCancelled(e) {
            R(e, !1), g(M, [e])
          },
          onAppearCancelled(e) {
            R(e, !0), g(N, [e])
          },
          onLeaveCancelled(e) {
            W(e), g(A, [e])
          },
        })
      }
      function b(e) {
        if (null == e) return null
        if ((0, s.Gv)(e)) return [_(e.enter), _(e.leave)]
        {
          const t = _(e)
          return [t, t]
        }
      }
      function _(e) {
        const t = (0, s.Ro)(e)
        return t
      }
      function D(e, t) {
        t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
          (e[p] || (e[p] = new Set())).add(t)
      }
      function E(e, t) {
        t.split(/\s+/).forEach((t) => t && e.classList.remove(t))
        const n = e[p]
        n && (n.delete(t), n.size || (e[p] = void 0))
      }
      function T(e) {
        requestAnimationFrame(() => {
          requestAnimationFrame(e)
        })
      }
      let C = 0
      function k(e, t, n, i) {
        const s = (e._endId = ++C),
          r = () => {
            s === e._endId && i()
          }
        if (n) return setTimeout(r, n)
        const { type: o, timeout: l, propCount: a } = S(e, t)
        if (!o) return i()
        const u = o + 'end'
        let c = 0
        const d = () => {
            e.removeEventListener(u, h), r()
          },
          h = (t) => {
            t.target === e && ++c >= a && d()
          }
        setTimeout(() => {
          c < a && d()
        }, l + 1),
          e.addEventListener(u, h)
      }
      function S(e, t) {
        const n = window.getComputedStyle(e),
          i = (e) => (n[e] || '').split(', '),
          s = i(`${d}Delay`),
          r = i(`${d}Duration`),
          o = M(s, r),
          l = i(`${h}Delay`),
          a = i(`${h}Duration`),
          u = M(l, a)
        let c = null,
          p = 0,
          f = 0
        t === d
          ? o > 0 && ((c = d), (p = o), (f = r.length))
          : t === h
            ? u > 0 && ((c = h), (p = u), (f = a.length))
            : ((p = Math.max(o, u)),
              (c = p > 0 ? (o > u ? d : h) : null),
              (f = c ? (c === d ? r.length : a.length) : 0))
        const v =
          c === d && /\b(transform|all)(,|$)/.test(i(`${d}Property`).toString())
        return { type: c, timeout: p, propCount: f, hasTransform: v }
      }
      function M(e, t) {
        while (e.length < t.length) e = e.concat(e)
        return Math.max(...t.map((t, n) => x(t) + x(e[n])))
      }
      function x(e) {
        return 'auto' === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(',', '.'))
      }
      function O() {
        return document.body.offsetHeight
      }
      function A(e, t, n) {
        const i = e[p]
        i && (t = (t ? [t, ...i] : [...i]).join(' ')),
          null == t
            ? e.removeAttribute('class')
            : n
              ? e.setAttribute('class', t)
              : (e.className = t)
      }
      const L = Symbol('_vod'),
        $ = Symbol('_vsh')
      const N = Symbol('')
      const R = /(^|;)\s*display\s*:/
      function W(e, t, n) {
        const i = e.style,
          r = (0, s.Kg)(n)
        let o = !1
        if (n && !r) {
          if (t)
            if ((0, s.Kg)(t))
              for (const e of t.split(';')) {
                const t = e.slice(0, e.indexOf(':')).trim()
                null == n[t] && F(i, t, '')
              }
            else for (const e in t) null == n[e] && F(i, e, '')
          for (const e in n) 'display' === e && (o = !0), F(i, e, n[e])
        } else if (r) {
          if (t !== n) {
            const e = i[N]
            e && (n += ';' + e), (i.cssText = n), (o = R.test(n))
          }
        } else t && e.removeAttribute('style')
        L in e && ((e[L] = o ? i.display : ''), e[$] && (i.display = 'none'))
      }
      const j = /\s*!important$/
      function F(e, t, n) {
        if ((0, s.cy)(n)) n.forEach((n) => F(e, t, n))
        else if ((null == n && (n = ''), t.startsWith('--')))
          e.setProperty(t, n)
        else {
          const i = P(e, t)
          j.test(n)
            ? e.setProperty((0, s.Tg)(i), n.replace(j, ''), 'important')
            : (e[i] = n)
        }
      }
      const I = ['Webkit', 'Moz', 'ms'],
        H = {}
      function P(e, t) {
        const n = H[t]
        if (n) return n
        let i = (0, s.PT)(t)
        if ('filter' !== i && i in e) return (H[t] = i)
        i = (0, s.ZH)(i)
        for (let s = 0; s < I.length; s++) {
          const n = I[s] + i
          if (n in e) return (H[t] = n)
        }
        return t
      }
      const V = 'http://www.w3.org/1999/xlink'
      function B(e, t, n, i, r) {
        if (i && t.startsWith('xlink:'))
          null == n
            ? e.removeAttributeNS(V, t.slice(6, t.length))
            : e.setAttributeNS(V, t, n)
        else {
          const i = (0, s.J$)(t)
          null == n || (i && !(0, s.Y2)(n))
            ? e.removeAttribute(t)
            : e.setAttribute(t, i ? '' : n)
        }
      }
      function U(e, t, n, i, r, o, l) {
        if ('innerHTML' === t || 'textContent' === t)
          return i && l(i, r, o), void (e[t] = null == n ? '' : n)
        const a = e.tagName
        if ('value' === t && 'PROGRESS' !== a && !a.includes('-')) {
          const i = 'OPTION' === a ? e.getAttribute('value') || '' : e.value,
            s = null == n ? '' : n
          return (
            (i === s && '_value' in e) || (e.value = s),
            null == n && e.removeAttribute(t),
            void (e._value = n)
          )
        }
        let u = !1
        if ('' === n || null == n) {
          const i = typeof e[t]
          'boolean' === i
            ? (n = (0, s.Y2)(n))
            : null == n && 'string' === i
              ? ((n = ''), (u = !0))
              : 'number' === i && ((n = 0), (u = !0))
        }
        try {
          e[t] = n
        } catch (c) {
          0
        }
        u && e.removeAttribute(t)
      }
      function X(e, t, n, i) {
        e.addEventListener(t, n, i)
      }
      function Y(e, t, n, i) {
        e.removeEventListener(t, n, i)
      }
      const z = Symbol('_vei')
      function G(e, t, n, i, s = null) {
        const r = e[z] || (e[z] = {}),
          o = r[t]
        if (i && o) o.value = i
        else {
          const [n, l] = Q(t)
          if (i) {
            const o = (r[t] = ee(i, s))
            X(e, n, o, l)
          } else o && (Y(e, n, o, l), (r[t] = void 0))
        }
      }
      const K = /(?:Once|Passive|Capture)$/
      function Q(e) {
        let t
        if (K.test(e)) {
          let n
          t = {}
          while ((n = e.match(K)))
            (e = e.slice(0, e.length - n[0].length)),
              (t[n[0].toLowerCase()] = !0)
        }
        const n = ':' === e[2] ? e.slice(3) : (0, s.Tg)(e.slice(2))
        return [n, t]
      }
      let Z = 0
      const q = Promise.resolve(),
        J = () => Z || (q.then(() => (Z = 0)), (Z = Date.now()))
      function ee(e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return
          } else e._vts = Date.now()
          ;(0, i.qL)(te(e, n.value), t, 5, [e])
        }
        return (n.value = e), (n.attached = J()), n
      }
      function te(e, t) {
        if ((0, s.cy)(t)) {
          const n = e.stopImmediatePropagation
          return (
            (e.stopImmediatePropagation = () => {
              n.call(e), (e._stopped = !0)
            }),
            t.map((e) => (t) => !t._stopped && e && e(t))
          )
        }
        return t
      }
      const ne = (e) =>
          111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) > 96 &&
          e.charCodeAt(2) < 123,
        ie = (e, t, n, i, r, o, l, a, u) => {
          const c = 'svg' === r
          'class' === t
            ? A(e, i, c)
            : 'style' === t
              ? W(e, n, i)
              : (0, s.Mp)(t)
                ? (0, s.CP)(t) || G(e, t, n, i, l)
                : (
                      '.' === t[0]
                        ? ((t = t.slice(1)), 1)
                        : '^' === t[0]
                          ? ((t = t.slice(1)), 0)
                          : se(e, t, i, c)
                    )
                  ? U(e, t, i, o, l, a, u)
                  : ('true-value' === t
                      ? (e._trueValue = i)
                      : 'false-value' === t && (e._falseValue = i),
                    B(e, t, i, c))
        }
      function se(e, t, n, i) {
        if (i)
          return (
            'innerHTML' === t ||
            'textContent' === t ||
            !!(t in e && ne(t) && (0, s.Tn)(n))
          )
        if ('spellcheck' === t || 'draggable' === t || 'translate' === t)
          return !1
        if ('form' === t) return !1
        if ('list' === t && 'INPUT' === e.tagName) return !1
        if ('type' === t && 'TEXTAREA' === e.tagName) return !1
        if ('width' === t || 'height' === t) {
          const t = e.tagName
          if ('IMG' === t || 'VIDEO' === t || 'CANVAS' === t || 'SOURCE' === t)
            return !1
        }
        return (!ne(t) || !(0, s.Kg)(n)) && t in e
      }
      /*! #__NO_SIDE_EFFECTS__ */
      /*! #__NO_SIDE_EFFECTS__ */
      'undefined' !== typeof HTMLElement && HTMLElement
      const re = new WeakMap(),
        oe = new WeakMap(),
        le = Symbol('_moveCb'),
        ae = Symbol('_enterCb'),
        ue = {
          name: 'TransitionGroup',
          props: (0, s.X$)({}, m, { tag: String, moveClass: String }),
          setup(e, { slots: t }) {
            const n = (0, i.nI)(),
              s = (0, i.Gy)()
            let o, l
            return (
              (0, i.$u)(() => {
                if (!o.length) return
                const t = e.moveClass || `${e.name || 'v'}-move`
                if (!fe(o[0].el, n.vnode.el, t)) return
                o.forEach(de), o.forEach(he)
                const i = o.filter(pe)
                O(),
                  i.forEach((e) => {
                    const n = e.el,
                      i = n.style
                    D(n, t),
                      (i.transform =
                        i.webkitTransform =
                        i.transitionDuration =
                          '')
                    const s = (n[le] = (e) => {
                      ;(e && e.target !== n) ||
                        (e && !/transform$/.test(e.propertyName)) ||
                        (n.removeEventListener('transitionend', s),
                        (n[le] = null),
                        E(n, t))
                    })
                    n.addEventListener('transitionend', s)
                  })
              }),
              () => {
                const a = (0, r.ux)(e),
                  u = w(a)
                let c = a.tag || i.FK
                if (((o = []), l))
                  for (let e = 0; e < l.length; e++) {
                    const t = l[e]
                    t.el &&
                      t.el instanceof Element &&
                      (o.push(t),
                      (0, i.MZ)(t, (0, i.OW)(t, u, s, n)),
                      re.set(t, t.el.getBoundingClientRect()))
                  }
                l = t.default ? (0, i.Df)(t.default()) : []
                for (let e = 0; e < l.length; e++) {
                  const t = l[e]
                  null != t.key && (0, i.MZ)(t, (0, i.OW)(t, u, s, n))
                }
                return (0, i.bF)(c, null, l)
              }
            )
          },
        }
      ue.props
      const ce = ue
      function de(e) {
        const t = e.el
        t[le] && t[le](), t[ae] && t[ae]()
      }
      function he(e) {
        oe.set(e, e.el.getBoundingClientRect())
      }
      function pe(e) {
        const t = re.get(e),
          n = oe.get(e),
          i = t.left - n.left,
          s = t.top - n.top
        if (i || s) {
          const t = e.el.style
          return (
            (t.transform = t.webkitTransform = `translate(${i}px,${s}px)`),
            (t.transitionDuration = '0s'),
            e
          )
        }
      }
      function fe(e, t, n) {
        const i = e.cloneNode(),
          s = e[p]
        s &&
          s.forEach((e) => {
            e.split(/\s+/).forEach((e) => e && i.classList.remove(e))
          }),
          n.split(/\s+/).forEach((e) => e && i.classList.add(e)),
          (i.style.display = 'none')
        const r = 1 === t.nodeType ? t : t.parentNode
        r.appendChild(i)
        const { hasTransform: o } = S(i)
        return r.removeChild(i), o
      }
      const ve = (e) => {
        const t = e.props['onUpdate:modelValue'] || !1
        return (0, s.cy)(t) ? (e) => (0, s.DY)(t, e) : t
      }
      const me = Symbol('_assign')
      const ge = {
        created(e, { value: t }, n) {
          ;(e.checked = (0, s.BX)(t, n.props.value)),
            (e[me] = ve(n)),
            X(e, 'change', () => {
              e[me](ye(e))
            })
        },
        beforeUpdate(e, { value: t, oldValue: n }, i) {
          ;(e[me] = ve(i)), t !== n && (e.checked = (0, s.BX)(t, i.props.value))
        },
      }
      function ye(e) {
        return '_value' in e ? e._value : e.value
      }
      const we = ['ctrl', 'shift', 'alt', 'meta'],
        be = {
          stop: (e) => e.stopPropagation(),
          prevent: (e) => e.preventDefault(),
          self: (e) => e.target !== e.currentTarget,
          ctrl: (e) => !e.ctrlKey,
          shift: (e) => !e.shiftKey,
          alt: (e) => !e.altKey,
          meta: (e) => !e.metaKey,
          left: (e) => 'button' in e && 0 !== e.button,
          middle: (e) => 'button' in e && 1 !== e.button,
          right: (e) => 'button' in e && 2 !== e.button,
          exact: (e, t) => we.some((n) => e[`${n}Key`] && !t.includes(n)),
        },
        _e = (e, t) => {
          const n = e._withMods || (e._withMods = {}),
            i = t.join('.')
          return (
            n[i] ||
            (n[i] = (n, ...i) => {
              for (let e = 0; e < t.length; e++) {
                const i = be[t[e]]
                if (i && i(n, t)) return
              }
              return e(n, ...i)
            })
          )
        },
        De = {
          esc: 'escape',
          space: ' ',
          up: 'arrow-up',
          left: 'arrow-left',
          right: 'arrow-right',
          down: 'arrow-down',
          delete: 'backspace',
        },
        Ee = (e, t) => {
          const n = e._withKeys || (e._withKeys = {}),
            i = t.join('.')
          return (
            n[i] ||
            (n[i] = (n) => {
              if (!('key' in n)) return
              const i = (0, s.Tg)(n.key)
              return t.some((e) => e === i || De[e] === i) ? e(n) : void 0
            })
          )
        },
        Te = (0, s.X$)({ patchProp: ie }, c)
      let Ce
      function ke() {
        return Ce || (Ce = (0, i.K9)(Te))
      }
      const Se = (...e) => {
        const t = ke().createApp(...e)
        const { mount: n } = t
        return (
          (t.mount = (e) => {
            const i = xe(e)
            if (!i) return
            const r = t._component
            ;(0, s.Tn)(r) ||
              r.render ||
              r.template ||
              (r.template = i.innerHTML),
              (i.innerHTML = '')
            const o = n(i, !1, Me(i))
            return (
              i instanceof Element &&
                (i.removeAttribute('v-cloak'),
                i.setAttribute('data-v-app', '')),
              o
            )
          }),
          t
        )
      }
      function Me(e) {
        return e instanceof SVGElement
          ? 'svg'
          : 'function' === typeof MathMLElement && e instanceof MathMLElement
            ? 'mathml'
            : void 0
      }
      function xe(e) {
        if ((0, s.Kg)(e)) {
          const t = document.querySelector(e)
          return t
        }
        return e
      }
    },
    33: function (e, t, n) {
      'use strict'
      /**
       * @vue/shared v3.4.27
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/
      /*! #__NO_SIDE_EFFECTS__ */
      function i(e, t) {
        const n = new Set(e.split(','))
        return t ? (e) => n.has(e.toLowerCase()) : (e) => n.has(e)
      }
      n.d(t, {
        $3: function () {
          return p
        },
        $H: function () {
          return j
        },
        BH: function () {
          return X
        },
        BX: function () {
          return ie
        },
        Bm: function () {
          return _
        },
        C4: function () {
          return Z
        },
        CE: function () {
          return v
        },
        CP: function () {
          return u
        },
        DY: function () {
          return F
        },
        Gv: function () {
          return D
        },
        J$: function () {
          return ee
        },
        Kg: function () {
          return b
        },
        MZ: function () {
          return s
        },
        Mp: function () {
          return a
        },
        NO: function () {
          return l
        },
        Oj: function () {
          return r
        },
        PT: function () {
          return L
        },
        Qd: function () {
          return S
        },
        Ro: function () {
          return P
        },
        SU: function () {
          return x
        },
        TF: function () {
          return d
        },
        Tg: function () {
          return N
        },
        Tn: function () {
          return w
        },
        Tr: function () {
          return Y
        },
        We: function () {
          return B
        },
        X$: function () {
          return c
        },
        Y2: function () {
          return te
        },
        ZH: function () {
          return R
        },
        Zf: function () {
          return k
        },
        _B: function () {
          return q
        },
        bB: function () {
          return H
        },
        cy: function () {
          return f
        },
        gd: function () {
          return y
        },
        pD: function () {
          return i
        },
        rU: function () {
          return W
        },
        tE: function () {
          return o
        },
        u3: function () {
          return se
        },
        vM: function () {
          return m
        },
        v_: function () {
          return re
        },
        yI: function () {
          return M
        },
        yL: function () {
          return E
        },
        yQ: function () {
          return I
        },
      })
      const s = {},
        r = [],
        o = () => {},
        l = () => !1,
        a = (e) =>
          111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
        u = (e) => e.startsWith('onUpdate:'),
        c = Object.assign,
        d = (e, t) => {
          const n = e.indexOf(t)
          n > -1 && e.splice(n, 1)
        },
        h = Object.prototype.hasOwnProperty,
        p = (e, t) => h.call(e, t),
        f = Array.isArray,
        v = (e) => '[object Map]' === C(e),
        m = (e) => '[object Set]' === C(e),
        g = (e) => '[object Date]' === C(e),
        y = (e) => '[object RegExp]' === C(e),
        w = (e) => 'function' === typeof e,
        b = (e) => 'string' === typeof e,
        _ = (e) => 'symbol' === typeof e,
        D = (e) => null !== e && 'object' === typeof e,
        E = (e) => (D(e) || w(e)) && w(e.then) && w(e.catch),
        T = Object.prototype.toString,
        C = (e) => T.call(e),
        k = (e) => C(e).slice(8, -1),
        S = (e) => '[object Object]' === C(e),
        M = (e) =>
          b(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
        x = i(
          ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
        ),
        O = (e) => {
          const t = Object.create(null)
          return (n) => {
            const i = t[n]
            return i || (t[n] = e(n))
          }
        },
        A = /-(\w)/g,
        L = O((e) => e.replace(A, (e, t) => (t ? t.toUpperCase() : ''))),
        $ = /\B([A-Z])/g,
        N = O((e) => e.replace($, '-$1').toLowerCase()),
        R = O((e) => e.charAt(0).toUpperCase() + e.slice(1)),
        W = O((e) => {
          const t = e ? `on${R(e)}` : ''
          return t
        }),
        j = (e, t) => !Object.is(e, t),
        F = (e, t) => {
          for (let n = 0; n < e.length; n++) e[n](t)
        },
        I = (e, t, n, i = !1) => {
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: i,
            value: n,
          })
        },
        H = (e) => {
          const t = parseFloat(e)
          return isNaN(t) ? e : t
        },
        P = (e) => {
          const t = b(e) ? Number(e) : NaN
          return isNaN(t) ? e : t
        }
      let V
      const B = () =>
        V ||
        (V =
          'undefined' !== typeof globalThis
            ? globalThis
            : 'undefined' !== typeof self
              ? self
              : 'undefined' !== typeof window
                ? window
                : 'undefined' !== typeof n.g
                  ? n.g
                  : {})
      const U =
          'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error',
        X = i(U)
      function Y(e) {
        if (f(e)) {
          const t = {}
          for (let n = 0; n < e.length; n++) {
            const i = e[n],
              s = b(i) ? Q(i) : Y(i)
            if (s) for (const e in s) t[e] = s[e]
          }
          return t
        }
        if (b(e) || D(e)) return e
      }
      const z = /;(?![^(]*\))/g,
        G = /:([^]+)/,
        K = /\/\*[^]*?\*\//g
      function Q(e) {
        const t = {}
        return (
          e
            .replace(K, '')
            .split(z)
            .forEach((e) => {
              if (e) {
                const n = e.split(G)
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
              }
            }),
          t
        )
      }
      function Z(e) {
        let t = ''
        if (b(e)) t = e
        else if (f(e))
          for (let n = 0; n < e.length; n++) {
            const i = Z(e[n])
            i && (t += i + ' ')
          }
        else if (D(e)) for (const n in e) e[n] && (t += n + ' ')
        return t.trim()
      }
      function q(e) {
        if (!e) return null
        let { class: t, style: n } = e
        return t && !b(t) && (e.class = Z(t)), n && (e.style = Y(n)), e
      }
      const J =
          'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
        ee = i(J)
      function te(e) {
        return !!e || '' === e
      }
      function ne(e, t) {
        if (e.length !== t.length) return !1
        let n = !0
        for (let i = 0; n && i < e.length; i++) n = ie(e[i], t[i])
        return n
      }
      function ie(e, t) {
        if (e === t) return !0
        let n = g(e),
          i = g(t)
        if (n || i) return !(!n || !i) && e.getTime() === t.getTime()
        if (((n = _(e)), (i = _(t)), n || i)) return e === t
        if (((n = f(e)), (i = f(t)), n || i)) return !(!n || !i) && ne(e, t)
        if (((n = D(e)), (i = D(t)), n || i)) {
          if (!n || !i) return !1
          const s = Object.keys(e).length,
            r = Object.keys(t).length
          if (s !== r) return !1
          for (const n in e) {
            const i = e.hasOwnProperty(n),
              s = t.hasOwnProperty(n)
            if ((i && !s) || (!i && s) || !ie(e[n], t[n])) return !1
          }
        }
        return String(e) === String(t)
      }
      function se(e, t) {
        return e.findIndex((e) => ie(e, t))
      }
      const re = (e) =>
          b(e)
            ? e
            : null == e
              ? ''
              : f(e) || (D(e) && (e.toString === T || !w(e.toString)))
                ? JSON.stringify(e, oe, 2)
                : String(e),
        oe = (e, t) =>
          t && t.__v_isRef
            ? oe(e, t.value)
            : v(t)
              ? {
                  [`Map(${t.size})`]: [...t.entries()].reduce(
                    (e, [t, n], i) => ((e[le(t, i) + ' =>'] = n), e),
                    {},
                  ),
                }
              : m(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((e) => le(e)) }
                : _(t)
                  ? le(t)
                  : !D(t) || f(t) || S(t)
                    ? t
                    : String(t),
        le = (e, t = '') => {
          var n
          return _(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e
        }
    },
    2838: function (e) {
      /*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */
      ;(function (t, n) {
        e.exports = n()
      })(0, function () {
        'use strict'
        const {
          entries: e,
          setPrototypeOf: t,
          isFrozen: n,
          getPrototypeOf: i,
          getOwnPropertyDescriptor: s,
        } = Object
        let { freeze: r, seal: o, create: l } = Object,
          { apply: a, construct: u } = 'undefined' !== typeof Reflect && Reflect
        r ||
          (r = function (e) {
            return e
          }),
          o ||
            (o = function (e) {
              return e
            }),
          a ||
            (a = function (e, t, n) {
              return e.apply(t, n)
            }),
          u ||
            (u = function (e, t) {
              return new e(...t)
            })
        const c = D(Array.prototype.forEach),
          d = D(Array.prototype.pop),
          h = D(Array.prototype.push),
          p = D(String.prototype.toLowerCase),
          f = D(String.prototype.toString),
          v = D(String.prototype.match),
          m = D(String.prototype.replace),
          g = D(String.prototype.indexOf),
          y = D(String.prototype.trim),
          w = D(Object.prototype.hasOwnProperty),
          b = D(RegExp.prototype.test),
          _ = E(TypeError)
        function D(e) {
          return function (t) {
            for (
              var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1;
              s < n;
              s++
            )
              i[s - 1] = arguments[s]
            return a(e, t, i)
          }
        }
        function E(e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
              n[i] = arguments[i]
            return u(e, n)
          }
        }
        function T(e, i) {
          let s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p
          t && t(e, null)
          let r = i.length
          while (r--) {
            let t = i[r]
            if ('string' === typeof t) {
              const e = s(t)
              e !== t && (n(i) || (i[r] = e), (t = e))
            }
            e[t] = !0
          }
          return e
        }
        function C(e) {
          for (let t = 0; t < e.length; t++) {
            const n = w(e, t)
            n || (e[t] = null)
          }
          return e
        }
        function k(t) {
          const n = l(null)
          for (const [i, s] of e(t)) {
            const e = w(t, i)
            e &&
              (Array.isArray(s)
                ? (n[i] = C(s))
                : s && 'object' === typeof s && s.constructor === Object
                  ? (n[i] = k(s))
                  : (n[i] = s))
          }
          return n
        }
        function S(e, t) {
          while (null !== e) {
            const n = s(e, t)
            if (n) {
              if (n.get) return D(n.get)
              if ('function' === typeof n.value) return D(n.value)
            }
            e = i(e)
          }
          function n() {
            return null
          }
          return n
        }
        const M = r([
            'a',
            'abbr',
            'acronym',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'bdi',
            'bdo',
            'big',
            'blink',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'center',
            'cite',
            'code',
            'col',
            'colgroup',
            'content',
            'data',
            'datalist',
            'dd',
            'decorator',
            'del',
            'details',
            'dfn',
            'dialog',
            'dir',
            'div',
            'dl',
            'dt',
            'element',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'font',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meter',
            'nav',
            'nobr',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'section',
            'select',
            'shadow',
            'small',
            'source',
            'spacer',
            'span',
            'strike',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'template',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'track',
            'tt',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
          ]),
          x = r([
            'svg',
            'a',
            'altglyph',
            'altglyphdef',
            'altglyphitem',
            'animatecolor',
            'animatemotion',
            'animatetransform',
            'circle',
            'clippath',
            'defs',
            'desc',
            'ellipse',
            'filter',
            'font',
            'g',
            'glyph',
            'glyphref',
            'hkern',
            'image',
            'line',
            'lineargradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialgradient',
            'rect',
            'stop',
            'style',
            'switch',
            'symbol',
            'text',
            'textpath',
            'title',
            'tref',
            'tspan',
            'view',
            'vkern',
          ]),
          O = r([
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feDropShadow',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
          ]),
          A = r([
            'animate',
            'color-profile',
            'cursor',
            'discard',
            'font-face',
            'font-face-format',
            'font-face-name',
            'font-face-src',
            'font-face-uri',
            'foreignobject',
            'hatch',
            'hatchpath',
            'mesh',
            'meshgradient',
            'meshpatch',
            'meshrow',
            'missing-glyph',
            'script',
            'set',
            'solidcolor',
            'unknown',
            'use',
          ]),
          L = r([
            'math',
            'menclose',
            'merror',
            'mfenced',
            'mfrac',
            'mglyph',
            'mi',
            'mlabeledtr',
            'mmultiscripts',
            'mn',
            'mo',
            'mover',
            'mpadded',
            'mphantom',
            'mroot',
            'mrow',
            'ms',
            'mspace',
            'msqrt',
            'mstyle',
            'msub',
            'msup',
            'msubsup',
            'mtable',
            'mtd',
            'mtext',
            'mtr',
            'munder',
            'munderover',
            'mprescripts',
          ]),
          $ = r([
            'maction',
            'maligngroup',
            'malignmark',
            'mlongdiv',
            'mscarries',
            'mscarry',
            'msgroup',
            'mstack',
            'msline',
            'msrow',
            'semantics',
            'annotation',
            'annotation-xml',
            'mprescripts',
            'none',
          ]),
          N = r(['#text']),
          R = r([
            'accept',
            'action',
            'align',
            'alt',
            'autocapitalize',
            'autocomplete',
            'autopictureinpicture',
            'autoplay',
            'background',
            'bgcolor',
            'border',
            'capture',
            'cellpadding',
            'cellspacing',
            'checked',
            'cite',
            'class',
            'clear',
            'color',
            'cols',
            'colspan',
            'controls',
            'controlslist',
            'coords',
            'crossorigin',
            'datetime',
            'decoding',
            'default',
            'dir',
            'disabled',
            'disablepictureinpicture',
            'disableremoteplayback',
            'download',
            'draggable',
            'enctype',
            'enterkeyhint',
            'face',
            'for',
            'headers',
            'height',
            'hidden',
            'high',
            'href',
            'hreflang',
            'id',
            'inputmode',
            'integrity',
            'ismap',
            'kind',
            'label',
            'lang',
            'list',
            'loading',
            'loop',
            'low',
            'max',
            'maxlength',
            'media',
            'method',
            'min',
            'minlength',
            'multiple',
            'muted',
            'name',
            'nonce',
            'noshade',
            'novalidate',
            'nowrap',
            'open',
            'optimum',
            'pattern',
            'placeholder',
            'playsinline',
            'popover',
            'popovertarget',
            'popovertargetaction',
            'poster',
            'preload',
            'pubdate',
            'radiogroup',
            'readonly',
            'rel',
            'required',
            'rev',
            'reversed',
            'role',
            'rows',
            'rowspan',
            'spellcheck',
            'scope',
            'selected',
            'shape',
            'size',
            'sizes',
            'span',
            'srclang',
            'start',
            'src',
            'srcset',
            'step',
            'style',
            'summary',
            'tabindex',
            'title',
            'translate',
            'type',
            'usemap',
            'valign',
            'value',
            'width',
            'wrap',
            'xmlns',
            'slot',
          ]),
          W = r([
            'accent-height',
            'accumulate',
            'additive',
            'alignment-baseline',
            'ascent',
            'attributename',
            'attributetype',
            'azimuth',
            'basefrequency',
            'baseline-shift',
            'begin',
            'bias',
            'by',
            'class',
            'clip',
            'clippathunits',
            'clip-path',
            'clip-rule',
            'color',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'cx',
            'cy',
            'd',
            'dx',
            'dy',
            'diffuseconstant',
            'direction',
            'display',
            'divisor',
            'dur',
            'edgemode',
            'elevation',
            'end',
            'fill',
            'fill-opacity',
            'fill-rule',
            'filter',
            'filterunits',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'fx',
            'fy',
            'g1',
            'g2',
            'glyph-name',
            'glyphref',
            'gradientunits',
            'gradienttransform',
            'height',
            'href',
            'id',
            'image-rendering',
            'in',
            'in2',
            'k',
            'k1',
            'k2',
            'k3',
            'k4',
            'kerning',
            'keypoints',
            'keysplines',
            'keytimes',
            'lang',
            'lengthadjust',
            'letter-spacing',
            'kernelmatrix',
            'kernelunitlength',
            'lighting-color',
            'local',
            'marker-end',
            'marker-mid',
            'marker-start',
            'markerheight',
            'markerunits',
            'markerwidth',
            'maskcontentunits',
            'maskunits',
            'max',
            'mask',
            'media',
            'method',
            'mode',
            'min',
            'name',
            'numoctaves',
            'offset',
            'operator',
            'opacity',
            'order',
            'orient',
            'orientation',
            'origin',
            'overflow',
            'paint-order',
            'path',
            'pathlength',
            'patterncontentunits',
            'patterntransform',
            'patternunits',
            'points',
            'preservealpha',
            'preserveaspectratio',
            'primitiveunits',
            'r',
            'rx',
            'ry',
            'radius',
            'refx',
            'refy',
            'repeatcount',
            'repeatdur',
            'restart',
            'result',
            'rotate',
            'scale',
            'seed',
            'shape-rendering',
            'specularconstant',
            'specularexponent',
            'spreadmethod',
            'startoffset',
            'stddeviation',
            'stitchtiles',
            'stop-color',
            'stop-opacity',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke',
            'stroke-width',
            'style',
            'surfacescale',
            'systemlanguage',
            'tabindex',
            'targetx',
            'targety',
            'transform',
            'transform-origin',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'textlength',
            'type',
            'u1',
            'u2',
            'unicode',
            'values',
            'viewbox',
            'visibility',
            'version',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'width',
            'word-spacing',
            'wrap',
            'writing-mode',
            'xchannelselector',
            'ychannelselector',
            'x',
            'x1',
            'x2',
            'xmlns',
            'y',
            'y1',
            'y2',
            'z',
            'zoomandpan',
          ]),
          j = r([
            'accent',
            'accentunder',
            'align',
            'bevelled',
            'close',
            'columnsalign',
            'columnlines',
            'columnspan',
            'denomalign',
            'depth',
            'dir',
            'display',
            'displaystyle',
            'encoding',
            'fence',
            'frame',
            'height',
            'href',
            'id',
            'largeop',
            'length',
            'linethickness',
            'lspace',
            'lquote',
            'mathbackground',
            'mathcolor',
            'mathsize',
            'mathvariant',
            'maxsize',
            'minsize',
            'movablelimits',
            'notation',
            'numalign',
            'open',
            'rowalign',
            'rowlines',
            'rowspacing',
            'rowspan',
            'rspace',
            'rquote',
            'scriptlevel',
            'scriptminsize',
            'scriptsizemultiplier',
            'selection',
            'separator',
            'separators',
            'stretchy',
            'subscriptshift',
            'supscriptshift',
            'symmetric',
            'voffset',
            'width',
            'xmlns',
          ]),
          F = r([
            'xlink:href',
            'xml:id',
            'xlink:title',
            'xml:space',
            'xmlns:xlink',
          ]),
          I = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          H = o(/<%[\w\W]*|[\w\W]*%>/gm),
          P = o(/\${[\w\W]*}/gm),
          V = o(/^data-[\-\w.\u00B7-\uFFFF]/),
          B = o(/^aria-[\-\w]+$/),
          U = o(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          X = o(/^(?:\w+script|data):/i),
          Y = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          z = o(/^html$/i),
          G = o(/^[a-z][.\w]*(-[.\w]+)+$/i)
        var K = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: I,
          ERB_EXPR: H,
          TMPLIT_EXPR: P,
          DATA_ATTR: V,
          ARIA_ATTR: B,
          IS_ALLOWED_URI: U,
          IS_SCRIPT_OR_DATA: X,
          ATTR_WHITESPACE: Y,
          DOCTYPE_NAME: z,
          CUSTOM_ELEMENT: G,
        })
        const Q = {
            element: 1,
            attribute: 2,
            text: 3,
            cdataSection: 4,
            entityReference: 5,
            entityNode: 6,
            progressingInstruction: 7,
            comment: 8,
            document: 9,
            documentType: 10,
            documentFragment: 11,
            notation: 12,
          },
          Z = function () {
            return 'undefined' === typeof window ? null : window
          },
          q = function (e, t) {
            if ('object' !== typeof e || 'function' !== typeof e.createPolicy)
              return null
            let n = null
            const i = 'data-tt-policy-suffix'
            t && t.hasAttribute(i) && (n = t.getAttribute(i))
            const s = 'dompurify' + (n ? '#' + n : '')
            try {
              return e.createPolicy(s, {
                createHTML(e) {
                  return e
                },
                createScriptURL(e) {
                  return e
                },
              })
            } catch (r) {
              return (
                console.warn(
                  'TrustedTypes policy ' + s + ' could not be created.',
                ),
                null
              )
            }
          }
        function J() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z()
          const n = (e) => J(e)
          if (
            ((n.version = '3.1.5'),
            (n.removed = []),
            !t || !t.document || t.document.nodeType !== Q.document)
          )
            return (n.isSupported = !1), n
          let { document: i } = t
          const s = i,
            o = s.currentScript,
            {
              DocumentFragment: a,
              HTMLTemplateElement: u,
              Node: D,
              Element: E,
              NodeFilter: C,
              NamedNodeMap: I = t.NamedNodeMap || t.MozNamedAttrMap,
              HTMLFormElement: H,
              DOMParser: P,
              trustedTypes: V,
            } = t,
            B = E.prototype,
            X = S(B, 'cloneNode'),
            Y = S(B, 'nextSibling'),
            G = S(B, 'childNodes'),
            ee = S(B, 'parentNode')
          if ('function' === typeof u) {
            const e = i.createElement('template')
            e.content &&
              e.content.ownerDocument &&
              (i = e.content.ownerDocument)
          }
          let te,
            ne = ''
          const {
              implementation: ie,
              createNodeIterator: se,
              createDocumentFragment: re,
              getElementsByTagName: oe,
            } = i,
            { importNode: le } = s
          let ae = {}
          n.isSupported =
            'function' === typeof e &&
            'function' === typeof ee &&
            ie &&
            void 0 !== ie.createHTMLDocument
          const {
            MUSTACHE_EXPR: ue,
            ERB_EXPR: ce,
            TMPLIT_EXPR: de,
            DATA_ATTR: he,
            ARIA_ATTR: pe,
            IS_SCRIPT_OR_DATA: fe,
            ATTR_WHITESPACE: ve,
            CUSTOM_ELEMENT: me,
          } = K
          let { IS_ALLOWED_URI: ge } = K,
            ye = null
          const we = T({}, [...M, ...x, ...O, ...L, ...N])
          let be = null
          const _e = T({}, [...R, ...W, ...j, ...F])
          let De = Object.seal(
              l(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              }),
            ),
            Ee = null,
            Te = null,
            Ce = !0,
            ke = !0,
            Se = !1,
            Me = !0,
            xe = !1,
            Oe = !0,
            Ae = !1,
            Le = !1,
            $e = !1,
            Ne = !1,
            Re = !1,
            We = !1,
            je = !0,
            Fe = !1
          const Ie = 'user-content-'
          let He = !0,
            Pe = !1,
            Ve = {},
            Be = null
          const Ue = T({}, [
            'annotation-xml',
            'audio',
            'colgroup',
            'desc',
            'foreignobject',
            'head',
            'iframe',
            'math',
            'mi',
            'mn',
            'mo',
            'ms',
            'mtext',
            'noembed',
            'noframes',
            'noscript',
            'plaintext',
            'script',
            'style',
            'svg',
            'template',
            'thead',
            'title',
            'video',
            'xmp',
          ])
          let Xe = null
          const Ye = T({}, [
            'audio',
            'video',
            'img',
            'source',
            'image',
            'track',
          ])
          let ze = null
          const Ge = T({}, [
              'alt',
              'class',
              'for',
              'id',
              'label',
              'name',
              'pattern',
              'placeholder',
              'role',
              'summary',
              'title',
              'value',
              'style',
              'xmlns',
            ]),
            Ke = 'http://www.w3.org/1998/Math/MathML',
            Qe = 'http://www.w3.org/2000/svg',
            Ze = 'http://www.w3.org/1999/xhtml'
          let qe = Ze,
            Je = !1,
            et = null
          const tt = T({}, [Ke, Qe, Ze], f)
          let nt = null
          const it = ['application/xhtml+xml', 'text/html'],
            st = 'text/html'
          let rt = null,
            ot = null
          const lt = i.createElement('form'),
            at = function (e) {
              return e instanceof RegExp || e instanceof Function
            },
            ut = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              if (!ot || ot !== e) {
                if (
                  ((e && 'object' === typeof e) || (e = {}),
                  (e = k(e)),
                  (nt =
                    -1 === it.indexOf(e.PARSER_MEDIA_TYPE)
                      ? st
                      : e.PARSER_MEDIA_TYPE),
                  (rt = 'application/xhtml+xml' === nt ? f : p),
                  (ye = w(e, 'ALLOWED_TAGS') ? T({}, e.ALLOWED_TAGS, rt) : we),
                  (be = w(e, 'ALLOWED_ATTR') ? T({}, e.ALLOWED_ATTR, rt) : _e),
                  (et = w(e, 'ALLOWED_NAMESPACES')
                    ? T({}, e.ALLOWED_NAMESPACES, f)
                    : tt),
                  (ze = w(e, 'ADD_URI_SAFE_ATTR')
                    ? T(k(Ge), e.ADD_URI_SAFE_ATTR, rt)
                    : Ge),
                  (Xe = w(e, 'ADD_DATA_URI_TAGS')
                    ? T(k(Ye), e.ADD_DATA_URI_TAGS, rt)
                    : Ye),
                  (Be = w(e, 'FORBID_CONTENTS')
                    ? T({}, e.FORBID_CONTENTS, rt)
                    : Ue),
                  (Ee = w(e, 'FORBID_TAGS') ? T({}, e.FORBID_TAGS, rt) : {}),
                  (Te = w(e, 'FORBID_ATTR') ? T({}, e.FORBID_ATTR, rt) : {}),
                  (Ve = !!w(e, 'USE_PROFILES') && e.USE_PROFILES),
                  (Ce = !1 !== e.ALLOW_ARIA_ATTR),
                  (ke = !1 !== e.ALLOW_DATA_ATTR),
                  (Se = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Me = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                  (xe = e.SAFE_FOR_TEMPLATES || !1),
                  (Oe = !1 !== e.SAFE_FOR_XML),
                  (Ae = e.WHOLE_DOCUMENT || !1),
                  (Ne = e.RETURN_DOM || !1),
                  (Re = e.RETURN_DOM_FRAGMENT || !1),
                  (We = e.RETURN_TRUSTED_TYPE || !1),
                  ($e = e.FORCE_BODY || !1),
                  (je = !1 !== e.SANITIZE_DOM),
                  (Fe = e.SANITIZE_NAMED_PROPS || !1),
                  (He = !1 !== e.KEEP_CONTENT),
                  (Pe = e.IN_PLACE || !1),
                  (ge = e.ALLOWED_URI_REGEXP || U),
                  (qe = e.NAMESPACE || Ze),
                  (De = e.CUSTOM_ELEMENT_HANDLING || {}),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    at(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (De.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    at(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (De.attributeNameCheck =
                      e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    'boolean' ===
                      typeof e.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (De.allowCustomizedBuiltInElements =
                      e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  xe && (ke = !1),
                  Re && (Ne = !0),
                  Ve &&
                    ((ye = T({}, N)),
                    (be = []),
                    !0 === Ve.html && (T(ye, M), T(be, R)),
                    !0 === Ve.svg && (T(ye, x), T(be, W), T(be, F)),
                    !0 === Ve.svgFilters && (T(ye, O), T(be, W), T(be, F)),
                    !0 === Ve.mathMl && (T(ye, L), T(be, j), T(be, F))),
                  e.ADD_TAGS &&
                    (ye === we && (ye = k(ye)), T(ye, e.ADD_TAGS, rt)),
                  e.ADD_ATTR &&
                    (be === _e && (be = k(be)), T(be, e.ADD_ATTR, rt)),
                  e.ADD_URI_SAFE_ATTR && T(ze, e.ADD_URI_SAFE_ATTR, rt),
                  e.FORBID_CONTENTS &&
                    (Be === Ue && (Be = k(Be)), T(Be, e.FORBID_CONTENTS, rt)),
                  He && (ye['#text'] = !0),
                  Ae && T(ye, ['html', 'head', 'body']),
                  ye.table && (T(ye, ['tbody']), delete Ee.tbody),
                  e.TRUSTED_TYPES_POLICY)
                ) {
                  if ('function' !== typeof e.TRUSTED_TYPES_POLICY.createHTML)
                    throw _(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    )
                  if (
                    'function' !== typeof e.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw _(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    )
                  ;(te = e.TRUSTED_TYPES_POLICY), (ne = te.createHTML(''))
                } else
                  void 0 === te && (te = q(V, o)),
                    null !== te &&
                      'string' === typeof ne &&
                      (ne = te.createHTML(''))
                r && r(e), (ot = e)
              }
            },
            ct = T({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
            dt = T({}, ['foreignobject', 'annotation-xml']),
            ht = T({}, ['title', 'style', 'font', 'a', 'script']),
            pt = T({}, [...x, ...O, ...A]),
            ft = T({}, [...L, ...$]),
            vt = function (e) {
              let t = ee(e)
              ;(t && t.tagName) ||
                (t = { namespaceURI: qe, tagName: 'template' })
              const n = p(e.tagName),
                i = p(t.tagName)
              return (
                !!et[e.namespaceURI] &&
                (e.namespaceURI === Qe
                  ? t.namespaceURI === Ze
                    ? 'svg' === n
                    : t.namespaceURI === Ke
                      ? 'svg' === n && ('annotation-xml' === i || ct[i])
                      : Boolean(pt[n])
                  : e.namespaceURI === Ke
                    ? t.namespaceURI === Ze
                      ? 'math' === n
                      : t.namespaceURI === Qe
                        ? 'math' === n && dt[i]
                        : Boolean(ft[n])
                    : e.namespaceURI === Ze
                      ? !(t.namespaceURI === Qe && !dt[i]) &&
                        !(t.namespaceURI === Ke && !ct[i]) &&
                        !ft[n] &&
                        (ht[n] || !pt[n])
                      : !(
                          'application/xhtml+xml' !== nt || !et[e.namespaceURI]
                        ))
              )
            },
            mt = function (e) {
              h(n.removed, { element: e })
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                e.remove()
              }
            },
            gt = function (e, t) {
              try {
                h(n.removed, { attribute: t.getAttributeNode(e), from: t })
              } catch (i) {
                h(n.removed, { attribute: null, from: t })
              }
              if ((t.removeAttribute(e), 'is' === e && !be[e]))
                if (Ne || Re)
                  try {
                    mt(t)
                  } catch (i) {}
                else
                  try {
                    t.setAttribute(e, '')
                  } catch (i) {}
            },
            yt = function (e) {
              let t = null,
                n = null
              if ($e) e = '<remove></remove>' + e
              else {
                const t = v(e, /^[\r\n\t ]+/)
                n = t && t[0]
              }
              'application/xhtml+xml' === nt &&
                qe === Ze &&
                (e =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  e +
                  '</body></html>')
              const s = te ? te.createHTML(e) : e
              if (qe === Ze)
                try {
                  t = new P().parseFromString(s, nt)
                } catch (o) {}
              if (!t || !t.documentElement) {
                t = ie.createDocument(qe, 'template', null)
                try {
                  t.documentElement.innerHTML = Je ? ne : s
                } catch (o) {}
              }
              const r = t.body || t.documentElement
              return (
                e &&
                  n &&
                  r.insertBefore(i.createTextNode(n), r.childNodes[0] || null),
                qe === Ze
                  ? oe.call(t, Ae ? 'html' : 'body')[0]
                  : Ae
                    ? t.documentElement
                    : r
              )
            },
            wt = function (e) {
              return se.call(
                e.ownerDocument || e,
                e,
                C.SHOW_ELEMENT |
                  C.SHOW_COMMENT |
                  C.SHOW_TEXT |
                  C.SHOW_PROCESSING_INSTRUCTION |
                  C.SHOW_CDATA_SECTION,
                null,
              )
            },
            bt = function (e) {
              return (
                e instanceof H &&
                ('string' !== typeof e.nodeName ||
                  'string' !== typeof e.textContent ||
                  'function' !== typeof e.removeChild ||
                  !(e.attributes instanceof I) ||
                  'function' !== typeof e.removeAttribute ||
                  'function' !== typeof e.setAttribute ||
                  'string' !== typeof e.namespaceURI ||
                  'function' !== typeof e.insertBefore ||
                  'function' !== typeof e.hasChildNodes)
              )
            },
            _t = function (e) {
              return 'function' === typeof D && e instanceof D
            },
            Dt = function (e, t, i) {
              ae[e] &&
                c(ae[e], (e) => {
                  e.call(n, t, i, ot)
                })
            },
            Et = function (e) {
              let t = null
              if ((Dt('beforeSanitizeElements', e, null), bt(e)))
                return mt(e), !0
              const i = rt(e.nodeName)
              if (
                (Dt('uponSanitizeElement', e, { tagName: i, allowedTags: ye }),
                e.hasChildNodes() &&
                  !_t(e.firstElementChild) &&
                  b(/<[/\w]/g, e.innerHTML) &&
                  b(/<[/\w]/g, e.textContent))
              )
                return mt(e), !0
              if (e.nodeType === Q.progressingInstruction) return mt(e), !0
              if (Oe && e.nodeType === Q.comment && b(/<[/\w]/g, e.data))
                return mt(e), !0
              if (!ye[i] || Ee[i]) {
                if (!Ee[i] && Ct(i)) {
                  if (
                    De.tagNameCheck instanceof RegExp &&
                    b(De.tagNameCheck, i)
                  )
                    return !1
                  if (De.tagNameCheck instanceof Function && De.tagNameCheck(i))
                    return !1
                }
                if (He && !Be[i]) {
                  const t = ee(e) || e.parentNode,
                    n = G(e) || e.childNodes
                  if (n && t) {
                    const i = n.length
                    for (let s = i - 1; s >= 0; --s) {
                      const i = X(n[s], !0)
                      ;(i.__removalCount = (e.__removalCount || 0) + 1),
                        t.insertBefore(i, Y(e))
                    }
                  }
                }
                return mt(e), !0
              }
              return e instanceof E && !vt(e)
                ? (mt(e), !0)
                : ('noscript' !== i && 'noembed' !== i && 'noframes' !== i) ||
                    !b(/<\/no(script|embed|frames)/i, e.innerHTML)
                  ? (xe &&
                      e.nodeType === Q.text &&
                      ((t = e.textContent),
                      c([ue, ce, de], (e) => {
                        t = m(t, e, ' ')
                      }),
                      e.textContent !== t &&
                        (h(n.removed, { element: e.cloneNode() }),
                        (e.textContent = t))),
                    Dt('afterSanitizeElements', e, null),
                    !1)
                  : (mt(e), !0)
            },
            Tt = function (e, t, n) {
              if (je && ('id' === t || 'name' === t) && (n in i || n in lt))
                return !1
              if (ke && !Te[t] && b(he, t));
              else if (Ce && b(pe, t));
              else if (!be[t] || Te[t]) {
                if (
                  !(
                    (Ct(e) &&
                      ((De.tagNameCheck instanceof RegExp &&
                        b(De.tagNameCheck, e)) ||
                        (De.tagNameCheck instanceof Function &&
                          De.tagNameCheck(e))) &&
                      ((De.attributeNameCheck instanceof RegExp &&
                        b(De.attributeNameCheck, t)) ||
                        (De.attributeNameCheck instanceof Function &&
                          De.attributeNameCheck(t)))) ||
                    ('is' === t &&
                      De.allowCustomizedBuiltInElements &&
                      ((De.tagNameCheck instanceof RegExp &&
                        b(De.tagNameCheck, n)) ||
                        (De.tagNameCheck instanceof Function &&
                          De.tagNameCheck(n))))
                  )
                )
                  return !1
              } else if (ze[t]);
              else if (b(ge, m(n, ve, '')));
              else if (
                ('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
                'script' === e ||
                0 !== g(n, 'data:') ||
                !Xe[e]
              ) {
                if (Se && !b(fe, m(n, ve, '')));
                else if (n) return !1
              } else;
              return !0
            },
            Ct = function (e) {
              return 'annotation-xml' !== e && v(e, me)
            },
            kt = function (e) {
              Dt('beforeSanitizeAttributes', e, null)
              const { attributes: t } = e
              if (!t) return
              const i = {
                attrName: '',
                attrValue: '',
                keepAttr: !0,
                allowedAttributes: be,
              }
              let s = t.length
              while (s--) {
                const o = t[s],
                  { name: l, namespaceURI: a, value: u } = o,
                  h = rt(l)
                let p = 'value' === l ? u : y(u)
                if (
                  ((i.attrName = h),
                  (i.attrValue = p),
                  (i.keepAttr = !0),
                  (i.forceKeepAttr = void 0),
                  Dt('uponSanitizeAttribute', e, i),
                  (p = i.attrValue),
                  i.forceKeepAttr)
                )
                  continue
                if ((gt(l, e), !i.keepAttr)) continue
                if (!Me && b(/\/>/i, p)) {
                  gt(l, e)
                  continue
                }
                if (Oe && b(/((--!?|])>)|<\/(style|title)/i, p)) {
                  gt(l, e)
                  continue
                }
                xe &&
                  c([ue, ce, de], (e) => {
                    p = m(p, e, ' ')
                  })
                const f = rt(e.nodeName)
                if (Tt(f, h, p)) {
                  if (
                    (!Fe ||
                      ('id' !== h && 'name' !== h) ||
                      (gt(l, e), (p = Ie + p)),
                    te &&
                      'object' === typeof V &&
                      'function' === typeof V.getAttributeType)
                  )
                    if (a);
                    else
                      switch (V.getAttributeType(f, h)) {
                        case 'TrustedHTML':
                          p = te.createHTML(p)
                          break
                        case 'TrustedScriptURL':
                          p = te.createScriptURL(p)
                          break
                      }
                  try {
                    a ? e.setAttributeNS(a, l, p) : e.setAttribute(l, p),
                      bt(e) ? mt(e) : d(n.removed)
                  } catch (r) {}
                }
              }
              Dt('afterSanitizeAttributes', e, null)
            },
            St = function e(t) {
              let n = null
              const i = wt(t)
              Dt('beforeSanitizeShadowDOM', t, null)
              while ((n = i.nextNode()))
                Dt('uponSanitizeShadowNode', n, null),
                  Et(n) || (n.content instanceof a && e(n.content), kt(n))
              Dt('afterSanitizeShadowDOM', t, null)
            }
          return (
            (n.sanitize = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = null,
                r = null,
                o = null,
                l = null
              if (
                ((Je = !e),
                Je && (e = '\x3c!--\x3e'),
                'string' !== typeof e && !_t(e))
              ) {
                if ('function' !== typeof e.toString)
                  throw _('toString is not a function')
                if (((e = e.toString()), 'string' !== typeof e))
                  throw _('dirty is not a string, aborting')
              }
              if (!n.isSupported) return e
              if (
                (Le || ut(t),
                (n.removed = []),
                'string' === typeof e && (Pe = !1),
                Pe)
              ) {
                if (e.nodeName) {
                  const t = rt(e.nodeName)
                  if (!ye[t] || Ee[t])
                    throw _(
                      'root node is forbidden and cannot be sanitized in-place',
                    )
                }
              } else if (e instanceof D)
                (i = yt('\x3c!----\x3e')),
                  (r = i.ownerDocument.importNode(e, !0)),
                  (r.nodeType === Q.element && 'BODY' === r.nodeName) ||
                  'HTML' === r.nodeName
                    ? (i = r)
                    : i.appendChild(r)
              else {
                if (!Ne && !xe && !Ae && -1 === e.indexOf('<'))
                  return te && We ? te.createHTML(e) : e
                if (((i = yt(e)), !i)) return Ne ? null : We ? ne : ''
              }
              i && $e && mt(i.firstChild)
              const u = wt(Pe ? e : i)
              while ((o = u.nextNode()))
                Et(o) || (o.content instanceof a && St(o.content), kt(o))
              if (Pe) return e
              if (Ne) {
                if (Re) {
                  l = re.call(i.ownerDocument)
                  while (i.firstChild) l.appendChild(i.firstChild)
                } else l = i
                return (
                  (be.shadowroot || be.shadowrootmode) &&
                    (l = le.call(s, l, !0)),
                  l
                )
              }
              let d = Ae ? i.outerHTML : i.innerHTML
              return (
                Ae &&
                  ye['!doctype'] &&
                  i.ownerDocument &&
                  i.ownerDocument.doctype &&
                  i.ownerDocument.doctype.name &&
                  b(z, i.ownerDocument.doctype.name) &&
                  (d = '<!DOCTYPE ' + i.ownerDocument.doctype.name + '>\n' + d),
                xe &&
                  c([ue, ce, de], (e) => {
                    d = m(d, e, ' ')
                  }),
                te && We ? te.createHTML(d) : d
              )
            }),
            (n.setConfig = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              ut(e), (Le = !0)
            }),
            (n.clearConfig = function () {
              ;(ot = null), (Le = !1)
            }),
            (n.isValidAttribute = function (e, t, n) {
              ot || ut({})
              const i = rt(e),
                s = rt(t)
              return Tt(i, s, n)
            }),
            (n.addHook = function (e, t) {
              'function' === typeof t && ((ae[e] = ae[e] || []), h(ae[e], t))
            }),
            (n.removeHook = function (e) {
              if (ae[e]) return d(ae[e])
            }),
            (n.removeHooks = function (e) {
              ae[e] && (ae[e] = [])
            }),
            (n.removeAllHooks = function () {
              ae = {}
            }),
            n
          )
        }
        var ee = J()
        return ee
      })
    },
    6150: function (e, t, n) {
      'use strict'
      n.d(t, {
        A: function () {
          return xe
        },
      })
      var i = n(641),
        s = n(33),
        r = n(3751),
        o = Object.defineProperty,
        l = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        a = (e, t, n) => (l(e, 'symbol' != typeof t ? t + '' : t, n), n)
      /**
       * vue-cal v4.8.1
       * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
       * @license MIT
       */ let u,
        c,
        d,
        h,
        p,
        f,
        v,
        m = {},
        g = {}
      class y {
        constructor(e) {
          a(this, '_vuecal', null),
            a(this, 'selectCell', (e = !1, t, n) => {
              this._vuecal.$emit('cell-click', n ? { date: t, split: n } : t),
                this._vuecal.clickToNavigate || e
                  ? this._vuecal.switchToNarrowerView()
                  : this._vuecal.dblclickToNavigate &&
                    'ontouchstart' in window &&
                    (this._vuecal.domEvents.dblTapACell.taps++,
                    setTimeout(
                      () => (this._vuecal.domEvents.dblTapACell.taps = 0),
                      this._vuecal.domEvents.dblTapACell.timeout,
                    ),
                    this._vuecal.domEvents.dblTapACell.taps >= 2 &&
                      ((this._vuecal.domEvents.dblTapACell.taps = 0),
                      this._vuecal.switchToNarrowerView(),
                      this._vuecal.$emit(
                        'cell-dblclick',
                        n ? { date: t, split: n } : t,
                      )))
            }),
            a(this, 'keyPressEnterCell', (e, t) => {
              this._vuecal.$emit(
                'cell-keypress-enter',
                t ? { date: e, split: t } : e,
              ),
                this._vuecal.switchToNarrowerView()
            }),
            a(this, 'getPosition', (e) => {
              const { left: t, top: n } =
                  this._vuecal.cellsEl.getBoundingClientRect(),
                { clientX: i, clientY: s } =
                  'ontouchstart' in window && e.touches ? e.touches[0] : e
              return { x: i - t, y: s - n }
            }),
            a(this, 'minutesAtCursor', (e) => {
              let t = 0,
                n = { x: 0, y: 0 }
              const {
                timeStep: i,
                timeCellHeight: s,
                timeFrom: r,
              } = this._vuecal.$props
              return (
                'number' == typeof e
                  ? (t = e)
                  : 'object' == typeof e &&
                    ((n = this.getPosition(e)),
                    (t = Math.round((n.y * i) / parseInt(s) + r))),
                { minutes: Math.max(Math.min(t, 1440), 0), cursorCoords: n }
              )
            }),
            (this._vuecal = e)
        }
      }
      class w {
        constructor(e, t) {
          a(this, '_vuecal', null),
            a(this, 'eventDefaults', {
              _eid: null,
              start: '',
              startTimeMinutes: 0,
              end: '',
              endTimeMinutes: 0,
              title: '',
              content: '',
              background: !1,
              allDay: !1,
              segments: null,
              repeat: null,
              daysCount: 1,
              deletable: !0,
              deleting: !1,
              titleEditable: !0,
              resizable: !0,
              resizing: !1,
              draggable: !0,
              dragging: !1,
              draggingStatic: !1,
              focused: !1,
              class: '',
            }),
            (this._vuecal = e),
            (p = t)
        }
        createAnEvent(e, t, n) {
          if (
            ('string' == typeof e && (e = p.stringToDate(e)),
            !(e instanceof Date))
          )
            return !1
          const i = p.dateToMinutes(e),
            s = i + (t = 1 * t || 120),
            r = p.addMinutes(new Date(e), t)
          n.end &&
            ('string' == typeof n.end && (n.end = p.stringToDate(n.end)),
            (n.endTimeMinutes = p.dateToMinutes(n.end)))
          const o = {
            ...this.eventDefaults,
            _eid: `${this._vuecal._.uid}_${this._vuecal.eventIdIncrement++}`,
            start: e,
            startTimeMinutes: i,
            end: r,
            endTimeMinutes: s,
            segments: null,
            ...n,
          }
          return 'function' != typeof this._vuecal.onEventCreate ||
            this._vuecal.onEventCreate(o, () => this.deleteAnEvent(o))
            ? (o.startDateF !== o.endDateF &&
                (o.daysCount = p.countDays(o.start, o.end)),
              this._vuecal.mutableEvents.push(o),
              this._vuecal.addEventsToView([o]),
              this._vuecal.emitWithEvent('event-create', o),
              this._vuecal.$emit('event-change', {
                event: this._vuecal.cleanupEvent(o),
                originalEvent: null,
              }),
              o)
            : void 0
        }
        addEventSegment(e) {
          e.segments ||
            ((e.segments = {}),
            (e.segments[p.formatDateLite(e.start)] = {
              start: e.start,
              startTimeMinutes: e.startTimeMinutes,
              endTimeMinutes: 1440,
              isFirstDay: !0,
              isLastDay: !1,
            }))
          const t = e.segments[p.formatDateLite(e.end)]
          t && ((t.isLastDay = !1), (t.endTimeMinutes = 1440))
          const n = p.addDays(e.end, 1),
            i = p.formatDateLite(n)
          return (
            n.setHours(0, 0, 0, 0),
            (e.segments[i] = {
              start: n,
              startTimeMinutes: 0,
              endTimeMinutes: e.endTimeMinutes,
              isFirstDay: !1,
              isLastDay: !0,
            }),
            (e.end = p.addMinutes(n, e.endTimeMinutes)),
            (e.daysCount = Object.keys(e.segments).length),
            i
          )
        }
        removeEventSegment(e) {
          let t = Object.keys(e.segments).length
          if (t <= 1) return p.formatDateLite(e.end)
          delete e.segments[p.formatDateLite(e.end)], t--
          const n = p.subtractDays(e.end, 1),
            i = p.formatDateLite(n),
            s = e.segments[i]
          return (
            t
              ? s && ((s.isLastDay = !0), (s.endTimeMinutes = e.endTimeMinutes))
              : (e.segments = null),
            (e.daysCount = t || 1),
            (e.end = n),
            i
          )
        }
        createEventSegments(e, t, n) {
          const i = t.getTime(),
            s = n.getTime()
          let r,
            o,
            l,
            a = e.start.getTime(),
            u = e.end.getTime(),
            c = !1
          for (
            e.end.getHours() || e.end.getMinutes() || (u -= 1e3),
              e.segments = {},
              e.repeat
                ? ((r = i),
                  (o = Math.min(
                    s,
                    e.repeat.until
                      ? p.stringToDate(e.repeat.until).getTime()
                      : s,
                  )))
                : ((r = Math.max(i, a)), (o = Math.min(s, u)));
            r <= o;

          ) {
            let t = !1
            const n = p.addDays(new Date(r), 1).setHours(0, 0, 0, 0)
            let i, s, d, h
            if (e.repeat) {
              const n = new Date(r),
                o = p.formatDateLite(n)
              ;(c || (e.occurrences && e.occurrences[o])) &&
                (c ||
                  ((a = e.occurrences[o].start),
                  (l = new Date(a).setHours(0, 0, 0, 0)),
                  (u = e.occurrences[o].end)),
                (c = !0),
                (t = !0)),
                (i = r === l),
                (s = o === p.formatDateLite(new Date(u))),
                (d = new Date(i ? a : r)),
                (h = p.formatDateLite(d)),
                s && (c = !1)
            } else
              (t = !0),
                (i = r === a),
                (s = o === u && n > o),
                (d = i ? e.start : new Date(r)),
                (h = p.formatDateLite(i ? e.start : d))
            t &&
              (e.segments[h] = {
                start: d,
                startTimeMinutes: i ? e.startTimeMinutes : 0,
                endTimeMinutes: s ? e.endTimeMinutes : 1440,
                isFirstDay: i,
                isLastDay: s,
              }),
              (r = n)
          }
          return e
        }
        deleteAnEvent(e) {
          this._vuecal.emitWithEvent('event-delete', e),
            (this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter(
              (t) => t._eid !== e._eid,
            )),
            (this._vuecal.view.events = this._vuecal.view.events.filter(
              (t) => t._eid !== e._eid,
            ))
        }
        checkCellOverlappingEvents(e, t) {
          ;(v = e.slice(0)),
            (f = {}),
            e.forEach((e) => {
              v.shift(),
                f[e._eid] ||
                  (f[e._eid] = { overlaps: [], start: e.start, position: 0 }),
                (f[e._eid].position = 0),
                v.forEach((n) => {
                  f[n._eid] ||
                    (f[n._eid] = { overlaps: [], start: n.start, position: 0 })
                  const i = this.eventInRange(n, e.start, e.end),
                    s = t.overlapsPerTimeStep
                      ? p.datesInSameTimeStep(e.start, n.start, t.timeStep)
                      : 1
                  if (
                    e.background ||
                    e.allDay ||
                    n.background ||
                    n.allDay ||
                    !i ||
                    !s
                  ) {
                    let t, i
                    ;(t = (f[e._eid] || { overlaps: [] }).overlaps.indexOf(
                      n._eid,
                    )) > -1 && f[e._eid].overlaps.splice(t, 1),
                      (i = (f[n._eid] || { overlaps: [] }).overlaps.indexOf(
                        e._eid,
                      )) > -1 && f[n._eid].overlaps.splice(i, 1),
                      f[n._eid].position--
                  } else
                    f[e._eid].overlaps.push(n._eid),
                      (f[e._eid].overlaps = [...new Set(f[e._eid].overlaps)]),
                      f[n._eid].overlaps.push(e._eid),
                      (f[n._eid].overlaps = [...new Set(f[n._eid].overlaps)]),
                      f[n._eid].position++
                })
            })
          let n = 0
          for (const i in f) {
            const e = f[i],
              t = e.overlaps.map((e) => ({ id: e, start: f[e].start }))
            t.push({ id: i, start: e.start }),
              t.sort((e, t) =>
                e.start < t.start
                  ? -1
                  : e.start > t.start
                    ? 1
                    : e.id > t.id
                      ? -1
                      : 1,
              ),
              (e.position = t.findIndex((e) => e.id === i)),
              (n = Math.max(this.getOverlapsStreak(e, f), n))
          }
          return [f, n]
        }
        getOverlapsStreak(e, t = {}) {
          let n = e.overlaps.length + 1,
            i = []
          return (
            e.overlaps.forEach((n) => {
              i.includes(n) ||
                e.overlaps
                  .filter((e) => e !== n)
                  .forEach((e) => {
                    t[e].overlaps.includes(n) || i.push(e)
                  })
            }),
            (i = [...new Set(i)]),
            (n -= i.length),
            n
          )
        }
        eventInRange(e, t, n) {
          if (e.allDay || !this._vuecal.time) {
            const i = new Date(e.start).setHours(0, 0, 0, 0)
            return (
              new Date(e.end).setHours(23, 59, 0, 0) >=
                new Date(t).setHours(0, 0, 0, 0) &&
              i <= new Date(n).setHours(0, 0, 0, 0)
            )
          }
          const i = e.start.getTime(),
            s = e.end.getTime()
          return i < n.getTime() && s > t.getTime()
        }
      }
      const b = { class: 'vuecal__flex vuecal__weekdays-headings' },
        _ = ['onClick'],
        D = { class: 'vuecal__flex weekday-label', grow: '' },
        E = { class: 'full' },
        T = { class: 'small' },
        C = { class: 'xsmall' },
        k = { key: 0 },
        S = {
          key: 0,
          class: 'vuecal__flex vuecal__split-days-headers',
          grow: '',
        },
        M = (e, t) => {
          const n = e.__vccOpts || e
          for (const [i, s] of t) n[i] = s
          return n
        },
        x = M(
          {
            inject: ['vuecal', 'utils', 'view'],
            props: {
              transitionDirection: { type: String, default: 'right' },
              weekDays: { type: Array, default: () => [] },
              switchToNarrowerView: { type: Function, default: () => {} },
            },
            methods: {
              selectCell(e, t) {
                e.getTime() !== this.view.selectedDate.getTime() &&
                  (this.view.selectedDate = e),
                  this.utils.cell.selectCell(!1, e, t)
              },
              cleanupHeading: (e) => ({
                label: e.full,
                date: e.date,
                ...(e.today ? { today: e.today } : {}),
              }),
            },
            computed: {
              headings() {
                if (!['month', 'week'].includes(this.view.id)) return []
                let e = !1
                return this.weekDays.map((t, n) => {
                  const i = this.utils.date.addDays(
                    this.view.startDate,
                    this.vuecal.startWeekOnSunday ? n - 1 : n,
                  )
                  return {
                    hide: t.hide,
                    full: t.label,
                    small: t.short || t.label.substr(0, 3),
                    xsmall: t.short || t.label.substr(0, 1),
                    ...('week' === this.view.id
                      ? {
                          dayOfMonth: i.getDate(),
                          date: i,
                          today: !e && this.utils.date.isToday(i) && !e++,
                        }
                      : {}),
                  }
                })
              },
              cellWidth() {
                return 100 / (7 - this.weekDays.reduce((e, t) => e + t.hide, 0))
              },
              weekdayCellStyles() {
                return {
                  ...(this.vuecal.hideWeekdays.length
                    ? { width: `${this.cellWidth}%` }
                    : {}),
                }
              },
              cellHeadingsClickable() {
                return (
                  'week' === this.view.id &&
                  (this.vuecal.clickToNavigate ||
                    this.vuecal.dblclickToNavigate)
                )
              },
            },
          },
          [
            [
              'render',
              function (e, t, n, o, l, a) {
                return (
                  (0, i.uX)(),
                  (0, i.CE)('div', b, [
                    ((0, i.uX)(!0),
                    (0, i.CE)(
                      i.FK,
                      null,
                      (0, i.pI)(
                        a.headings,
                        (o, l) => (
                          (0, i.uX)(),
                          (0, i.CE)(
                            i.FK,
                            { key: l },
                            [
                              o.hide
                                ? (0, i.Q3)('', !0)
                                : ((0, i.uX)(),
                                  (0, i.CE)(
                                    'div',
                                    {
                                      key: 0,
                                      class: (0, s.C4)([
                                        'vuecal__flex vuecal__heading',
                                        {
                                          today: o.today,
                                          clickable: a.cellHeadingsClickable,
                                        },
                                      ]),
                                      style: (0, s.Tr)(a.weekdayCellStyles),
                                      onClick: (e) =>
                                        'week' === a.view.id &&
                                        a.selectCell(o.date, e),
                                      onDblclick:
                                        t[0] ||
                                        (t[0] = (e) =>
                                          'week' === a.view.id &&
                                          a.vuecal.dblclickToNavigate &&
                                          n.switchToNarrowerView()),
                                    },
                                    [
                                      (0, i.bF)(
                                        r.eB,
                                        {
                                          name: `slide-fade--${n.transitionDirection}`,
                                          appear: a.vuecal.transitions,
                                        },
                                        {
                                          default: (0, i.k6)(() => [
                                            ((0, i.uX)(),
                                            (0, i.CE)(
                                              'div',
                                              {
                                                class: 'vuecal__flex',
                                                column: '',
                                                key:
                                                  !!a.vuecal.transitions &&
                                                  `${l}-${o.dayOfMonth}`,
                                              },
                                              [
                                                (0, i.Lk)('div', D, [
                                                  (0, i.RG)(
                                                    e.$slots,
                                                    'weekday-heading',
                                                    {
                                                      heading:
                                                        a.cleanupHeading(o),
                                                      view: a.view,
                                                    },
                                                    () => [
                                                      (0, i.Lk)(
                                                        'span',
                                                        E,
                                                        (0, s.v_)(o.full),
                                                        1,
                                                      ),
                                                      (0, i.Lk)(
                                                        'span',
                                                        T,
                                                        (0, s.v_)(o.small),
                                                        1,
                                                      ),
                                                      (0, i.Lk)(
                                                        'span',
                                                        C,
                                                        (0, s.v_)(o.xsmall),
                                                        1,
                                                      ),
                                                      o.dayOfMonth
                                                        ? ((0, i.uX)(),
                                                          (0, i.CE)(
                                                            'span',
                                                            k,
                                                            ' ' +
                                                              (0, s.v_)(
                                                                o.dayOfMonth,
                                                              ),
                                                            1,
                                                          ))
                                                        : (0, i.Q3)('', !0),
                                                    ],
                                                  ),
                                                ]),
                                                a.vuecal.hasSplits &&
                                                a.vuecal.stickySplitLabels
                                                  ? ((0, i.uX)(),
                                                    (0, i.CE)('div', S, [
                                                      ((0, i.uX)(!0),
                                                      (0, i.CE)(
                                                        i.FK,
                                                        null,
                                                        (0, i.pI)(
                                                          a.vuecal.daySplits,
                                                          (t, n) => (
                                                            (0, i.uX)(),
                                                            (0, i.CE)(
                                                              'div',
                                                              {
                                                                class: (0,
                                                                s.C4)([
                                                                  'day-split-header',
                                                                  t.class || !1,
                                                                ]),
                                                                key: n,
                                                              },
                                                              [
                                                                (0, i.RG)(
                                                                  e.$slots,
                                                                  'split-label',
                                                                  {
                                                                    split: t,
                                                                    view: a.view,
                                                                  },
                                                                  () => [
                                                                    (0, i.eW)(
                                                                      (0, s.v_)(
                                                                        t.label,
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ],
                                                                ),
                                                              ],
                                                              2,
                                                            )
                                                          ),
                                                        ),
                                                        128,
                                                      )),
                                                    ]))
                                                  : (0, i.Q3)('', !0),
                                              ],
                                            )),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['name', 'appear'],
                                      ),
                                    ],
                                    46,
                                    _,
                                  )),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ])
                )
              },
            ],
          ],
        ),
        O = { class: 'vuecal__header' },
        A = {
          key: 0,
          class: 'vuecal__flex vuecal__menu',
          role: 'tablist',
          'aria-label': 'Calendar views navigation',
        },
        L = ['onDragenter', 'onDragleave', 'onClick', 'aria-label'],
        $ = { key: 1, class: 'vuecal__title-bar' },
        N = ['aria-label'],
        R = { class: 'vuecal__flex vuecal__title', grow: '' },
        W = ['aria-label'],
        j = { key: 0, class: 'vuecal__flex vuecal__split-days-headers' },
        F = M(
          {
            inject: [
              'vuecal',
              'previous',
              'next',
              'switchView',
              'updateSelectedDate',
              'modules',
              'view',
            ],
            components: { WeekdaysHeadings: x },
            props: {
              options: { type: Object, default: () => ({}) },
              editEvents: { type: Object, required: !0 },
              hasSplits: { type: [Boolean, Number], default: !1 },
              daySplits: { type: Array, default: () => [] },
              viewProps: { type: Object, default: () => ({}) },
              weekDays: { type: Array, default: () => [] },
              switchToNarrowerView: { type: Function, default: () => {} },
            },
            data: () => ({ highlightedControl: null }),
            methods: {
              goToToday() {
                this.updateSelectedDate(
                  new Date(new Date().setHours(0, 0, 0, 0)),
                )
              },
              switchToBroaderView() {
                ;(this.transitionDirection = 'left'),
                  this.broaderView && this.switchView(this.broaderView)
              },
            },
            computed: {
              transitionDirection: {
                get() {
                  return this.vuecal.transitionDirection
                },
                set(e) {
                  this.vuecal.transitionDirection = e
                },
              },
              broaderView() {
                const { enabledViews: e } = this.vuecal
                return e[e.indexOf(this.view.id) - 1]
              },
              showDaySplits() {
                return (
                  'day' === this.view.id &&
                  this.hasSplits &&
                  this.options.stickySplitLabels &&
                  !this.options.minSplitWidth
                )
              },
              dnd() {
                return this.modules.dnd
              },
            },
          },
          [
            [
              'render',
              function (e, t, n, o, l, a) {
                const u = (0, i.g2)('weekdays-headings')
                return (
                  (0, i.uX)(),
                  (0, i.CE)('div', O, [
                    n.options.hideViewSelector
                      ? (0, i.Q3)('', !0)
                      : ((0, i.uX)(),
                        (0, i.CE)('div', A, [
                          ((0, i.uX)(!0),
                          (0, i.CE)(
                            i.FK,
                            null,
                            (0, i.pI)(
                              n.viewProps.views,
                              (t, r) => (
                                (0, i.uX)(),
                                (0, i.CE)(
                                  i.FK,
                                  { key: r },
                                  [
                                    t.enabled
                                      ? ((0, i.uX)(),
                                        (0, i.CE)(
                                          'button',
                                          {
                                            key: 0,
                                            class: (0, s.C4)([
                                              'vuecal__view-btn',
                                              {
                                                'vuecal__view-btn--active':
                                                  a.view.id === r,
                                                'vuecal__view-btn--highlighted':
                                                  e.highlightedControl === r,
                                              },
                                            ]),
                                            type: 'button',
                                            onDragenter: (t) =>
                                              n.editEvents.drag &&
                                              a.dnd &&
                                              a.dnd.viewSelectorDragEnter(
                                                t,
                                                r,
                                                e.$data,
                                              ),
                                            onDragleave: (t) =>
                                              n.editEvents.drag &&
                                              a.dnd &&
                                              a.dnd.viewSelectorDragLeave(
                                                t,
                                                r,
                                                e.$data,
                                              ),
                                            onClick: (e) =>
                                              a.switchView(r, null, !0),
                                            'aria-label': `${t.label} view`,
                                          },
                                          (0, s.v_)(t.label),
                                          43,
                                          L,
                                        ))
                                      : (0, i.Q3)('', !0),
                                  ],
                                  64,
                                )
                              ),
                            ),
                            128,
                          )),
                        ])),
                    n.options.hideTitleBar
                      ? (0, i.Q3)('', !0)
                      : ((0, i.uX)(),
                        (0, i.CE)('div', $, [
                          (0, i.Lk)(
                            'button',
                            {
                              class: (0, s.C4)([
                                'vuecal__arrow vuecal__arrow--prev',
                                {
                                  'vuecal__arrow--highlighted':
                                    'previous' === e.highlightedControl,
                                },
                              ]),
                              type: 'button',
                              onClick:
                                t[0] ||
                                (t[0] = (...e) =>
                                  a.previous && a.previous(...e)),
                              onDragenter:
                                t[1] ||
                                (t[1] = (t) =>
                                  n.editEvents.drag &&
                                  a.dnd &&
                                  a.dnd.viewSelectorDragEnter(
                                    t,
                                    'previous',
                                    e.$data,
                                  )),
                              onDragleave:
                                t[2] ||
                                (t[2] = (t) =>
                                  n.editEvents.drag &&
                                  a.dnd &&
                                  a.dnd.viewSelectorDragLeave(
                                    t,
                                    'previous',
                                    e.$data,
                                  )),
                              'aria-label': `Previous ${a.view.id}`,
                            },
                            [(0, i.RG)(e.$slots, 'arrow-prev')],
                            42,
                            N,
                          ),
                          (0, i.Lk)('div', R, [
                            (0, i.bF)(
                              r.eB,
                              {
                                name: n.options.transitions
                                  ? `slide-fade--${a.transitionDirection}`
                                  : '',
                              },
                              {
                                default: (0, i.k6)(() => [
                                  ((0, i.uX)(),
                                  (0, i.Wv)(
                                    (0, i.$y)(
                                      a.broaderView ? 'button' : 'span',
                                    ),
                                    {
                                      type: !!a.broaderView && 'button',
                                      key: `${a.view.id}${a.view.startDate.toString()}`,
                                      onClick:
                                        t[3] ||
                                        (t[3] = (e) =>
                                          !!a.broaderView &&
                                          a.switchToBroaderView()),
                                      'aria-label':
                                        !!a.broaderView &&
                                        `Go to ${a.broaderView} view`,
                                    },
                                    {
                                      default: (0, i.k6)(() => [
                                        (0, i.RG)(e.$slots, 'title'),
                                      ]),
                                      _: 3,
                                    },
                                    8,
                                    ['type', 'aria-label'],
                                  )),
                                ]),
                                _: 3,
                              },
                              8,
                              ['name'],
                            ),
                          ]),
                          n.options.todayButton
                            ? ((0, i.uX)(),
                              (0, i.CE)(
                                'button',
                                {
                                  key: 0,
                                  class: (0, s.C4)([
                                    'vuecal__today-btn',
                                    {
                                      'vuecal__today-btn--highlighted':
                                        'today' === e.highlightedControl,
                                    },
                                  ]),
                                  type: 'button',
                                  onClick:
                                    t[4] ||
                                    (t[4] = (...e) =>
                                      a.goToToday && a.goToToday(...e)),
                                  onDragenter:
                                    t[5] ||
                                    (t[5] = (t) =>
                                      n.editEvents.drag &&
                                      a.dnd &&
                                      a.dnd.viewSelectorDragEnter(
                                        t,
                                        'today',
                                        e.$data,
                                      )),
                                  onDragleave:
                                    t[6] ||
                                    (t[6] = (t) =>
                                      n.editEvents.drag &&
                                      a.dnd &&
                                      a.dnd.viewSelectorDragLeave(
                                        t,
                                        'today',
                                        e.$data,
                                      )),
                                  'aria-label': 'Today',
                                },
                                [(0, i.RG)(e.$slots, 'today-button')],
                                34,
                              ))
                            : (0, i.Q3)('', !0),
                          (0, i.Lk)(
                            'button',
                            {
                              class: (0, s.C4)([
                                'vuecal__arrow vuecal__arrow--next',
                                {
                                  'vuecal__arrow--highlighted':
                                    'next' === e.highlightedControl,
                                },
                              ]),
                              type: 'button',
                              onClick:
                                t[7] ||
                                (t[7] = (...e) => a.next && a.next(...e)),
                              onDragenter:
                                t[8] ||
                                (t[8] = (t) =>
                                  n.editEvents.drag &&
                                  a.dnd &&
                                  a.dnd.viewSelectorDragEnter(
                                    t,
                                    'next',
                                    e.$data,
                                  )),
                              onDragleave:
                                t[9] ||
                                (t[9] = (t) =>
                                  n.editEvents.drag &&
                                  a.dnd &&
                                  a.dnd.viewSelectorDragLeave(
                                    t,
                                    'next',
                                    e.$data,
                                  )),
                              'aria-label': `Next ${a.view.id}`,
                            },
                            [(0, i.RG)(e.$slots, 'arrow-next')],
                            42,
                            W,
                          ),
                        ])),
                    n.viewProps.weekDaysInHeader
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          u,
                          {
                            key: 2,
                            'week-days': n.weekDays,
                            'transition-direction': a.transitionDirection,
                            'switch-to-narrower-view': n.switchToNarrowerView,
                          },
                          (0, i.eX)({ _: 2 }, [
                            e.$slots['weekday-heading']
                              ? {
                                  name: 'weekday-heading',
                                  fn: (0, i.k6)(({ heading: t, view: n }) => [
                                    (0, i.RG)(e.$slots, 'weekday-heading', {
                                      heading: t,
                                      view: n,
                                    }),
                                  ]),
                                  key: '0',
                                }
                              : void 0,
                            e.$slots['split-label']
                              ? {
                                  name: 'split-label',
                                  fn: (0, i.k6)(({ split: t }) => [
                                    (0, i.RG)(e.$slots, 'split-label', {
                                      split: t,
                                      view: a.view,
                                    }),
                                  ]),
                                  key: '1',
                                }
                              : void 0,
                          ]),
                          1032,
                          [
                            'week-days',
                            'transition-direction',
                            'switch-to-narrower-view',
                          ],
                        ))
                      : (0, i.Q3)('', !0),
                    (0, i.bF)(
                      r.eB,
                      { name: `slide-fade--${a.transitionDirection}` },
                      {
                        default: (0, i.k6)(() => [
                          a.showDaySplits
                            ? ((0, i.uX)(),
                              (0, i.CE)('div', j, [
                                ((0, i.uX)(!0),
                                (0, i.CE)(
                                  i.FK,
                                  null,
                                  (0, i.pI)(
                                    n.daySplits,
                                    (t, n) => (
                                      (0, i.uX)(),
                                      (0, i.CE)(
                                        'div',
                                        {
                                          class: (0, s.C4)([
                                            'day-split-header',
                                            t.class || !1,
                                          ]),
                                          key: n,
                                        },
                                        [
                                          (0, i.RG)(
                                            e.$slots,
                                            'split-label',
                                            { split: t, view: a.view.id },
                                            () => [
                                              (0, i.eW)((0, s.v_)(t.label), 1),
                                            ],
                                          ),
                                        ],
                                        2,
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]))
                            : (0, i.Q3)('', !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ['name'],
                    ),
                  ])
                )
              },
            ],
          ],
        ),
        I = ['draggable'],
        H = {
          inject: [
            'vuecal',
            'utils',
            'modules',
            'view',
            'domEvents',
            'editEvents',
          ],
          props: {
            cellFormattedDate: { type: String, default: '' },
            event: { type: Object, default: () => ({}) },
            cellEvents: { type: Array, default: () => [] },
            overlaps: { type: Array, default: () => [] },
            eventPosition: { type: Number, default: 0 },
            overlapsStreak: { type: Number, default: 0 },
            allDay: { type: Boolean, default: !1 },
          },
          data: () => ({
            touch: { dragThreshold: 30, startX: 0, startY: 0, dragged: !1 },
          }),
          methods: {
            onMouseDown(e, t = !1) {
              if ('ontouchstart' in window && !t) return !1
              const {
                clickHoldAnEvent: n,
                focusAnEvent: i,
                resizeAnEvent: s,
                dragAnEvent: r,
              } = this.domEvents
              if (i._eid === this.event._eid && n._eid === this.event._eid)
                return !0
              this.focusEvent(),
                (n._eid = null),
                this.vuecal.editEvents.delete &&
                  this.event.deletable &&
                  (n.timeoutId = setTimeout(() => {
                    s._eid ||
                      r._eid ||
                      ((n._eid = this.event._eid), (this.event.deleting = !0))
                  }, n.timeout))
            },
            onMouseUp(e) {
              this.domEvents.focusAnEvent._eid !== this.event._eid ||
                this.touch.dragged ||
                (this.domEvents.focusAnEvent.mousedUp = !0),
                (this.touch.dragged = !1)
            },
            onMouseEnter(e) {
              e.preventDefault(),
                this.vuecal.emitWithEvent('event-mouse-enter', this.event)
            },
            onMouseLeave(e) {
              e.preventDefault(),
                this.vuecal.emitWithEvent('event-mouse-leave', this.event)
            },
            onTouchMove(e) {
              if ('function' != typeof this.vuecal.onEventClick) return
              const { clientX: t, clientY: n } = e.touches[0],
                { startX: i, startY: s, dragThreshold: r } = this.touch
              ;(Math.abs(t - i) > r || Math.abs(n - s) > r) &&
                (this.touch.dragged = !0)
            },
            onTouchStart(e) {
              ;(this.touch.startX = e.touches[0].clientX),
                (this.touch.startY = e.touches[0].clientY),
                this.onMouseDown(e, !0)
            },
            onEnterKeypress(e) {
              if ('function' == typeof this.vuecal.onEventClick)
                return this.vuecal.onEventClick(this.event, e)
            },
            onDblClick(e) {
              if ('function' == typeof this.vuecal.onEventDblclick)
                return this.vuecal.onEventDblclick(this.event, e)
            },
            onDragStart(e) {
              this.dnd && this.dnd.eventDragStart(e, this.event)
            },
            onDragEnd() {
              this.dnd && this.dnd.eventDragEnd(this.event)
            },
            onResizeHandleMouseDown() {
              this.focusEvent(),
                (this.domEvents.dragAnEvent._eid = null),
                (this.domEvents.resizeAnEvent = Object.assign(
                  this.domEvents.resizeAnEvent,
                  {
                    _eid: this.event._eid,
                    start: (this.segment || this.event).start,
                    split: this.event.split || null,
                    segment:
                      !!this.segment &&
                      this.utils.date.formatDateLite(this.segment.start),
                    originalEnd: new Date((this.segment || this.event).end),
                    originalEndTimeMinutes: this.event.endTimeMinutes,
                  },
                )),
                (this.event.resizing = !0)
            },
            deleteEvent(e = !1) {
              if ('ontouchstart' in window && !e) return !1
              this.utils.event.deleteAnEvent(this.event)
            },
            touchDeleteEvent(e) {
              this.deleteEvent(!0)
            },
            cancelDeleteEvent() {
              this.event.deleting = !1
            },
            focusEvent() {
              const { focusAnEvent: e } = this.domEvents,
                t = e._eid
              if (t !== this.event._eid) {
                if (t) {
                  const e = this.view.events.find((e) => e._eid === t)
                  e && (e.focused = !1)
                }
                this.vuecal.cancelDelete(),
                  this.vuecal.emitWithEvent('event-focus', this.event),
                  (e._eid = this.event._eid),
                  (this.event.focused = !0)
              }
            },
          },
          computed: {
            eventDimensions() {
              const { startTimeMinutes: e, endTimeMinutes: t } =
                this.segment || this.event
              let n = e - this.vuecal.timeFrom
              const i = Math.max(
                Math.round(
                  (n * this.vuecal.timeCellHeight) / this.vuecal.timeStep,
                ),
                0,
              )
              n = Math.min(t, this.vuecal.timeTo) - this.vuecal.timeFrom
              const s = Math.round(
                (n * this.vuecal.timeCellHeight) / this.vuecal.timeStep,
              )
              return { top: i, height: Math.max(s - i, 5) }
            },
            eventStyles() {
              if (
                this.event.allDay ||
                !this.vuecal.time ||
                !this.event.endTimeMinutes ||
                'month' === this.view.id ||
                this.allDay
              )
                return {}
              let e =
                  100 / Math.min(this.overlaps.length + 1, this.overlapsStreak),
                t = (100 / (this.overlaps.length + 1)) * this.eventPosition
              this.vuecal.minEventWidth &&
                e < this.vuecal.minEventWidth &&
                ((e = this.vuecal.minEventWidth),
                (t =
                  ((100 - this.vuecal.minEventWidth) / this.overlaps.length) *
                  this.eventPosition))
              const { top: n, height: i } = this.eventDimensions
              return {
                top: `${n}px`,
                height: `${i}px`,
                width: `${e}%`,
                left: (this.event.left && `${this.event.left}px`) || `${t}%`,
              }
            },
            eventClasses() {
              const { isFirstDay: e, isLastDay: t } = this.segment || {}
              return {
                [this.event.class]: !!this.event.class,
                'vuecal__event--focus': this.event.focused,
                'vuecal__event--resizing': this.event.resizing,
                'vuecal__event--background': this.event.background,
                'vuecal__event--deletable': this.event.deleting,
                'vuecal__event--all-day': this.event.allDay,
                'vuecal__event--dragging':
                  !this.event.draggingStatic && this.event.dragging,
                'vuecal__event--static':
                  this.event.dragging && this.event.draggingStatic,
                'vuecal__event--multiple-days': !!this.segment,
                'event-start': this.segment && e && !t,
                'event-middle': this.segment && !e && !t,
                'event-end': this.segment && t && !e,
              }
            },
            segment() {
              return (
                (this.event.segments &&
                  this.event.segments[this.cellFormattedDate]) ||
                null
              )
            },
            draggable() {
              const { draggable: e, background: t, daysCount: n } = this.event
              return this.vuecal.editEvents.drag && e && !t && 1 === n
            },
            resizable() {
              const { editEvents: e, time: t } = this.vuecal
              return (
                e.resize &&
                this.event.resizable &&
                t &&
                !this.allDay &&
                (!this.segment || (this.segment && this.segment.isLastDay)) &&
                'month' !== this.view.id
              )
            },
            dnd() {
              return this.modules.dnd
            },
          },
        },
        P = [
          'data-split',
          'aria-label',
          'onTouchstart',
          'onMousedown',
          'onDragover',
          'onDrop',
        ],
        V = { key: 0, class: 'cell-time-labels' },
        B = ['innerHTML'],
        U = { key: 2, class: 'vuecal__cell-events' },
        X = ['title'],
        Y = M(
          {
            inject: ['vuecal', 'utils', 'modules', 'view', 'domEvents'],
            components: {
              Event: M(H, [
                [
                  'render',
                  function (e, t, n, o, l, a) {
                    return (
                      (0, i.uX)(),
                      (0, i.CE)(
                        'div',
                        {
                          class: (0, s.C4)(['vuecal__event', a.eventClasses]),
                          style: (0, s.Tr)(a.eventStyles),
                          tabindex: '0',
                          onFocus:
                            t[4] ||
                            (t[4] = (...e) =>
                              a.focusEvent && a.focusEvent(...e)),
                          onKeypress:
                            t[5] ||
                            (t[5] = (0, r.jR)(
                              (0, r.D$)(
                                (...e) =>
                                  a.onEnterKeypress && a.onEnterKeypress(...e),
                                ['stop'],
                              ),
                              ['enter'],
                            )),
                          onMouseenter:
                            t[6] ||
                            (t[6] = (...e) =>
                              a.onMouseEnter && a.onMouseEnter(...e)),
                          onMouseleave:
                            t[7] ||
                            (t[7] = (...e) =>
                              a.onMouseLeave && a.onMouseLeave(...e)),
                          onTouchstart:
                            t[8] ||
                            (t[8] = (0, r.D$)(
                              (...e) => a.onTouchStart && a.onTouchStart(...e),
                              ['stop'],
                            )),
                          onMousedown: t[9] || (t[9] = (e) => a.onMouseDown(e)),
                          onMouseup:
                            t[10] ||
                            (t[10] = (...e) =>
                              a.onMouseUp && a.onMouseUp(...e)),
                          onTouchend:
                            t[11] ||
                            (t[11] = (...e) =>
                              a.onMouseUp && a.onMouseUp(...e)),
                          onTouchmove:
                            t[12] ||
                            (t[12] = (...e) =>
                              a.onTouchMove && a.onTouchMove(...e)),
                          onDblclick:
                            t[13] ||
                            (t[13] = (...e) =>
                              a.onDblClick && a.onDblClick(...e)),
                          draggable: a.draggable,
                          onDragstart:
                            t[14] ||
                            (t[14] = (e) => a.draggable && a.onDragStart(e)),
                          onDragend:
                            t[15] ||
                            (t[15] = (e) => a.draggable && a.onDragEnd()),
                        },
                        [
                          a.vuecal.editEvents.delete && n.event.deletable
                            ? ((0, i.uX)(),
                              (0, i.CE)(
                                'div',
                                {
                                  key: 0,
                                  class: 'vuecal__event-delete',
                                  onClick:
                                    t[0] ||
                                    (t[0] = (0, r.D$)(
                                      (...e) =>
                                        a.deleteEvent && a.deleteEvent(...e),
                                      ['stop'],
                                    )),
                                  onTouchstart:
                                    t[1] ||
                                    (t[1] = (0, r.D$)(
                                      (...e) =>
                                        a.touchDeleteEvent &&
                                        a.touchDeleteEvent(...e),
                                      ['stop'],
                                    )),
                                },
                                (0, s.v_)(a.vuecal.texts.deleteEvent),
                                33,
                              ))
                            : (0, i.Q3)('', !0),
                          (0, i.RG)(e.$slots, 'event', {
                            event: n.event,
                            view: a.view.id,
                          }),
                          a.resizable
                            ? ((0, i.uX)(),
                              (0, i.CE)(
                                'div',
                                {
                                  key: 1,
                                  class: 'vuecal__event-resize-handle',
                                  contenteditable: 'false',
                                  onMousedown:
                                    t[2] ||
                                    (t[2] = (0, r.D$)(
                                      (...e) =>
                                        a.onResizeHandleMouseDown &&
                                        a.onResizeHandleMouseDown(...e),
                                      ['stop', 'prevent'],
                                    )),
                                  onTouchstart:
                                    t[3] ||
                                    (t[3] = (0, r.D$)(
                                      (...e) =>
                                        a.onResizeHandleMouseDown &&
                                        a.onResizeHandleMouseDown(...e),
                                      ['stop', 'prevent'],
                                    )),
                                },
                                null,
                                32,
                              ))
                            : (0, i.Q3)('', !0),
                        ],
                        46,
                        I,
                      )
                    )
                  },
                ],
              ]),
            },
            props: {
              options: { type: Object, default: () => ({}) },
              editEvents: { type: Object, required: !0 },
              data: { type: Object, required: !0 },
              cellSplits: { type: Array, default: () => [] },
              minTimestamp: { type: [Number, null], default: null },
              maxTimestamp: { type: [Number, null], default: null },
              cellWidth: { type: [Number, Boolean], default: !1 },
              allDay: { type: Boolean, default: !1 },
            },
            data: () => ({
              cellOverlaps: {},
              cellOverlapsStreak: 1,
              timeAtCursor: null,
              highlighted: !1,
              highlightedSplit: null,
            }),
            methods: {
              getSplitAtCursor({ target: e }) {
                let t = e.classList.contains('vuecal__cell-split')
                  ? e
                  : this.vuecal.findAncestor(e, 'vuecal__cell-split')
                return (
                  t &&
                    ((t = t.attributes['data-split'].value),
                    parseInt(t).toString() === t.toString() &&
                      (t = parseInt(t))),
                  t || null
                )
              },
              splitClasses(e) {
                return {
                  'vuecal__cell-split': !0,
                  'vuecal__cell-split--highlighted':
                    this.highlightedSplit === e.id,
                  [e.class]: !!e.class,
                }
              },
              checkCellOverlappingEvents() {
                this.options.time &&
                  this.eventsCount &&
                  !this.splitsCount &&
                  (1 === this.eventsCount
                    ? ((this.cellOverlaps = []), (this.cellOverlapsStreak = 1))
                    : ([this.cellOverlaps, this.cellOverlapsStreak] =
                        this.utils.event.checkCellOverlappingEvents(
                          this.events,
                          this.options,
                        )))
              },
              isDOMElementAnEvent(e) {
                return this.vuecal.isDOMElementAnEvent(e)
              },
              selectCell(e, t = !1) {
                const n = this.splitsCount ? this.getSplitAtCursor(e) : null
                this.utils.cell.selectCell(t, this.timeAtCursor, n),
                  (this.timeAtCursor = null)
              },
              onCellkeyPressEnter(e) {
                this.isSelected || this.onCellFocus(e)
                const t = this.splitsCount ? this.getSplitAtCursor(e) : null
                this.utils.cell.keyPressEnterCell(this.timeAtCursor, t),
                  (this.timeAtCursor = null)
              },
              onCellFocus(e) {
                if (!this.isSelected && !this.isDisabled) {
                  this.isSelected = this.data.startDate
                  const t = this.splitsCount ? this.getSplitAtCursor(e) : null,
                    n = this.timeAtCursor || this.data.startDate
                  this.vuecal.$emit('cell-focus', t ? { date: n, split: t } : n)
                }
              },
              onCellMouseDown(e, t = null, n = !1) {
                if ('ontouchstart' in window && !n) return !1
                this.isSelected || this.onCellFocus(e)
                const { clickHoldACell: i, focusAnEvent: s } = this.domEvents
                ;(this.domEvents.cancelClickEventCreation = !1),
                  (i.eventCreated = !1),
                  (this.timeAtCursor = new Date(this.data.startDate))
                const {
                  minutes: r,
                  cursorCoords: { y: o },
                } = this.vuecal.minutesAtCursor(e)
                this.timeAtCursor.setMinutes(r)
                const l = this.isDOMElementAnEvent(e.target)
                !l &&
                  s._eid &&
                  ((
                    this.view.events.find((e) => e._eid === s._eid) || {}
                  ).focused = !1),
                  this.editEvents.create && !l && this.setUpEventCreation(e, o)
              },
              setUpEventCreation(e, t) {
                if (
                  this.options.dragToCreateEvent &&
                  ['week', 'day'].includes(this.view.id)
                ) {
                  const { dragCreateAnEvent: n } = this.domEvents
                  if (
                    ((n.startCursorY = t),
                    (n.split = this.splitsCount
                      ? this.getSplitAtCursor(e)
                      : null),
                    (n.start = this.timeAtCursor),
                    this.options.snapToTime)
                  ) {
                    let e =
                      60 * this.timeAtCursor.getHours() +
                      this.timeAtCursor.getMinutes()
                    const t = e + this.options.snapToTime / 2
                    ;(e = t - (t % this.options.snapToTime)),
                      n.start.setHours(0, e, 0, 0)
                  }
                } else
                  this.options.cellClickHold &&
                    ['month', 'week', 'day'].includes(this.view.id) &&
                    this.setUpCellHoldTimer(e)
              },
              setUpCellHoldTimer(e) {
                const { clickHoldACell: t } = this.domEvents
                ;(t.cellId = `${this.vuecal._.uid}_${this.data.formattedDate}`),
                  (t.split = this.splitsCount
                    ? this.getSplitAtCursor(e)
                    : null),
                  (t.timeoutId = setTimeout(() => {
                    if (t.cellId && !this.domEvents.cancelClickEventCreation) {
                      const { _eid: e } = this.utils.event.createAnEvent(
                        this.timeAtCursor,
                        null,
                        t.split ? { split: t.split } : {},
                      )
                      t.eventCreated = e
                    }
                  }, t.timeout))
              },
              onCellTouchStart(e, t = null) {
                this.onCellMouseDown(e, t, !0)
              },
              onCellClick(e) {
                this.isDOMElementAnEvent(e.target) || this.selectCell(e)
              },
              onCellDblClick(e) {
                const t = new Date(this.data.startDate)
                t.setMinutes(this.vuecal.minutesAtCursor(e).minutes)
                const n = this.splitsCount ? this.getSplitAtCursor(e) : null
                this.vuecal.$emit(
                  'cell-dblclick',
                  n ? { date: t, split: n } : t,
                ),
                  this.options.dblclickToNavigate &&
                    this.vuecal.switchToNarrowerView()
              },
              onCellContextMenu(e) {
                e.stopPropagation(), e.preventDefault()
                const t = new Date(this.data.startDate),
                  { cursorCoords: n, minutes: i } =
                    this.vuecal.minutesAtCursor(e)
                t.setMinutes(i)
                const s = this.splitsCount ? this.getSplitAtCursor(e) : null
                this.vuecal.$emit('cell-contextmenu', {
                  date: t,
                  ...n,
                  ...(s || {}),
                  e: e,
                })
              },
            },
            computed: {
              dnd() {
                return this.modules.dnd
              },
              nowInMinutes() {
                return this.utils.date.dateToMinutes(this.vuecal.now)
              },
              isBeforeMinDate() {
                return (
                  null !== this.minTimestamp &&
                  this.minTimestamp > this.data.endDate.getTime()
                )
              },
              isAfterMaxDate() {
                return (
                  this.maxTimestamp &&
                  this.maxTimestamp < this.data.startDate.getTime()
                )
              },
              isDisabled() {
                const { disableDays: e } = this.options,
                  { isYearsOrYearView: t } = this.vuecal
                return (
                  !(!e.length || !e.includes(this.data.formattedDate) || t) ||
                  this.isBeforeMinDate ||
                  this.isAfterMaxDate
                )
              },
              isSelected: {
                get() {
                  let e = !1
                  const { selectedDate: t } = this.view
                  return (
                    (e =
                      'years' === this.view.id
                        ? t.getFullYear() === this.data.startDate.getFullYear()
                        : 'year' === this.view.id
                          ? t.getFullYear() ===
                              this.data.startDate.getFullYear() &&
                            t.getMonth() === this.data.startDate.getMonth()
                          : t.getTime() === this.data.startDate.getTime()),
                    e
                  )
                },
                set(e) {
                  ;(this.view.selectedDate = e),
                    this.vuecal.$emit(
                      'update:selected-date',
                      this.view.selectedDate,
                    )
                },
              },
              isWeekOrDayView() {
                return ['week', 'day'].includes(this.view.id)
              },
              transitionDirection() {
                return this.vuecal.transitionDirection
              },
              specialHours() {
                return this.data.specialHours.map((e) => {
                  let { from: t, to: n } = e
                  return (
                    (t = Math.max(t, this.options.timeFrom)),
                    (n = Math.min(n, this.options.timeTo)),
                    {
                      ...e,
                      height: (n - t) * this.timeScale,
                      top: (t - this.options.timeFrom) * this.timeScale,
                    }
                  )
                })
              },
              events() {
                const { startDate: e, endDate: t } = this.data
                let n = []
                if (
                  !['years', 'year'].includes(this.view.id) ||
                  this.options.eventsCountOnYearView
                ) {
                  if (
                    ((n = this.view.events.slice(0)),
                    'month' === this.view.id &&
                      n.push(...this.view.outOfScopeEvents),
                    (n = n.filter((n) =>
                      this.utils.event.eventInRange(n, e, t),
                    )),
                    this.options.showAllDayEvents &&
                      'month' !== this.view.id &&
                      (n = n.filter((e) => !!e.allDay === this.allDay)),
                    this.options.time && this.isWeekOrDayView && !this.allDay)
                  ) {
                    const { timeFrom: e, timeTo: t } = this.options
                    n = n.filter((n) => {
                      const i =
                          (n.daysCount > 1 &&
                            n.segments[this.data.formattedDate]) ||
                          {},
                        s =
                          1 === n.daysCount &&
                          n.startTimeMinutes < t &&
                          n.endTimeMinutes > e,
                        r =
                          n.daysCount > 1 &&
                          i.startTimeMinutes < t &&
                          i.endTimeMinutes > e
                      return n.allDay || s || r || !1
                    })
                  }
                  !this.options.time ||
                    !this.isWeekOrDayView ||
                    (this.options.showAllDayEvents && this.allDay) ||
                    n.sort((e, t) => (e.start < t.start ? -1 : 1)),
                    this.cellSplits.length ||
                      this.$nextTick(this.checkCellOverlappingEvents)
                }
                return n
              },
              eventsCount() {
                return this.events.length
              },
              splits() {
                return this.cellSplits.map((e, t) => {
                  const n = this.events.filter((t) => t.split === e.id),
                    [i, s] = this.utils.event.checkCellOverlappingEvents(
                      n.filter((e) => !e.background && !e.allDay),
                      this.options,
                    )
                  return { ...e, overlaps: i, overlapsStreak: s, events: n }
                })
              },
              splitsCount() {
                return this.splits.length
              },
              cellClasses() {
                return {
                  [this.data.class]: !!this.data.class,
                  'vuecal__cell--current': this.data.current,
                  'vuecal__cell--today': this.data.today,
                  'vuecal__cell--out-of-scope': this.data.outOfScope,
                  'vuecal__cell--before-min':
                    this.isDisabled && this.isBeforeMinDate,
                  'vuecal__cell--after-max':
                    this.isDisabled && this.isAfterMaxDate,
                  'vuecal__cell--disabled': this.isDisabled,
                  'vuecal__cell--selected': this.isSelected,
                  'vuecal__cell--highlighted': this.highlighted,
                  'vuecal__cell--has-splits': this.splitsCount,
                  'vuecal__cell--has-events': this.eventsCount,
                }
              },
              cellStyles() {
                return {
                  ...(this.cellWidth ? { width: `${this.cellWidth}%` } : {}),
                }
              },
              timelineVisible() {
                const { time: e, timeTo: t } = this.options
                return (
                  this.data.today &&
                  this.isWeekOrDayView &&
                  e &&
                  !this.allDay &&
                  this.nowInMinutes <= t
                )
              },
              todaysTimePosition() {
                if (!this.data.today || !this.options.time) return
                const e = this.nowInMinutes - this.options.timeFrom
                return Math.round(e * this.timeScale)
              },
              timeScale() {
                return this.options.timeCellHeight / this.options.timeStep
              },
            },
          },
          [
            [
              'render',
              function (e, t, n, o, l, a) {
                const u = (0, i.g2)('event')
                return (
                  (0, i.uX)(),
                  (0, i.Wv)(
                    r.F,
                    {
                      class: (0, s.C4)(['vuecal__cell', a.cellClasses]),
                      name: `slide-fade--${a.transitionDirection}`,
                      tag: 'div',
                      appear: n.options.transitions,
                      style: (0, s.Tr)(a.cellStyles),
                    },
                    {
                      default: (0, i.k6)(() => [
                        ((0, i.uX)(!0),
                        (0, i.CE)(
                          i.FK,
                          null,
                          (0, i.pI)(
                            a.splitsCount ? a.splits : 1,
                            (o, l) => (
                              (0, i.uX)(),
                              (0, i.CE)(
                                'div',
                                {
                                  class: (0, s.C4)([
                                    'vuecal__flex vuecal__cell-content',
                                    a.splitsCount && a.splitClasses(o),
                                  ]),
                                  key: n.options.transitions
                                    ? `${a.view.id}-${n.data.content}-${l}`
                                    : l,
                                  'data-split': !!a.splitsCount && o.id,
                                  column: '',
                                  tabindex: '0',
                                  'aria-label': n.data.content,
                                  onFocus:
                                    t[0] || (t[0] = (e) => a.onCellFocus(e)),
                                  onKeypress:
                                    t[1] ||
                                    (t[1] = (0, r.jR)(
                                      (e) => a.onCellkeyPressEnter(e),
                                      ['enter'],
                                    )),
                                  onTouchstart: (e) =>
                                    !a.isDisabled &&
                                    a.onCellTouchStart(
                                      e,
                                      a.splitsCount ? o.id : null,
                                    ),
                                  onMousedown: (e) =>
                                    !a.isDisabled &&
                                    a.onCellMouseDown(
                                      e,
                                      a.splitsCount ? o.id : null,
                                    ),
                                  onClick:
                                    t[2] ||
                                    (t[2] = (e) =>
                                      !a.isDisabled && a.onCellClick(e)),
                                  onDblclick:
                                    t[3] ||
                                    (t[3] = (e) =>
                                      !a.isDisabled && a.onCellDblClick(e)),
                                  onContextmenu:
                                    t[4] ||
                                    (t[4] = (e) =>
                                      !a.isDisabled &&
                                      n.options.cellContextmenu &&
                                      a.onCellContextMenu(e)),
                                  onDragenter:
                                    t[5] ||
                                    (t[5] = (t) =>
                                      !a.isDisabled &&
                                      n.editEvents.drag &&
                                      a.dnd &&
                                      a.dnd.cellDragEnter(
                                        t,
                                        e.$data,
                                        n.data.startDate,
                                      )),
                                  onDragover: (t) =>
                                    !a.isDisabled &&
                                    n.editEvents.drag &&
                                    a.dnd &&
                                    a.dnd.cellDragOver(
                                      t,
                                      e.$data,
                                      n.data.startDate,
                                      a.splitsCount ? o.id : null,
                                    ),
                                  onDragleave:
                                    t[6] ||
                                    (t[6] = (t) =>
                                      !a.isDisabled &&
                                      n.editEvents.drag &&
                                      a.dnd &&
                                      a.dnd.cellDragLeave(
                                        t,
                                        e.$data,
                                        n.data.startDate,
                                      )),
                                  onDrop: (t) =>
                                    !a.isDisabled &&
                                    n.editEvents.drag &&
                                    a.dnd &&
                                    a.dnd.cellDragDrop(
                                      t,
                                      e.$data,
                                      n.data.startDate,
                                      a.splitsCount ? o.id : null,
                                    ),
                                },
                                [
                                  n.options.showTimeInCells &&
                                  n.options.time &&
                                  a.isWeekOrDayView &&
                                  !n.allDay
                                    ? ((0, i.uX)(),
                                      (0, i.CE)('div', V, [
                                        ((0, i.uX)(!0),
                                        (0, i.CE)(
                                          i.FK,
                                          null,
                                          (0, i.pI)(
                                            a.vuecal.timeCells,
                                            (e, t) => (
                                              (0, i.uX)(),
                                              (0, i.CE)(
                                                'span',
                                                {
                                                  class: 'cell-time-label',
                                                  key: t,
                                                },
                                                (0, s.v_)(e.label),
                                                1,
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]))
                                    : (0, i.Q3)('', !0),
                                  a.isWeekOrDayView &&
                                  !n.allDay &&
                                  a.specialHours.length
                                    ? ((0, i.uX)(!0),
                                      (0, i.CE)(
                                        i.FK,
                                        { key: 1 },
                                        (0, i.pI)(
                                          a.specialHours,
                                          (e, t) => (
                                            (0, i.uX)(),
                                            (0, i.CE)(
                                              'div',
                                              {
                                                class: (0, s.C4)([
                                                  'vuecal__special-hours',
                                                  `vuecal__special-hours--day${e.day} ${e.class}`,
                                                ]),
                                                style: (0, s.Tr)(
                                                  `height: ${e.height}px;top: ${e.top}px`,
                                                ),
                                              },
                                              [
                                                e.label
                                                  ? ((0, i.uX)(),
                                                    (0, i.CE)(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class:
                                                          'special-hours-label',
                                                        innerHTML: e.label,
                                                      },
                                                      null,
                                                      8,
                                                      B,
                                                    ))
                                                  : (0, i.Q3)('', !0),
                                              ],
                                              6,
                                            )
                                          ),
                                        ),
                                        256,
                                      ))
                                    : (0, i.Q3)('', !0),
                                  (0, i.RG)(e.$slots, 'cell-content', {
                                    events: a.events,
                                    selectCell: (e) => a.selectCell(e, !0),
                                    split: !!a.splitsCount && o,
                                  }),
                                  a.eventsCount &&
                                  (a.isWeekOrDayView ||
                                    ('month' === a.view.id &&
                                      n.options.eventsOnMonthView))
                                    ? ((0, i.uX)(),
                                      (0, i.CE)('div', U, [
                                        ((0, i.uX)(!0),
                                        (0, i.CE)(
                                          i.FK,
                                          null,
                                          (0, i.pI)(
                                            a.splitsCount ? o.events : a.events,
                                            (t, s) => (
                                              (0, i.uX)(),
                                              (0, i.Wv)(
                                                u,
                                                {
                                                  key: s,
                                                  'cell-formatted-date':
                                                    n.data.formattedDate,
                                                  event: t,
                                                  'all-day': n.allDay,
                                                  'cell-events': a.splitsCount
                                                    ? o.events
                                                    : a.events,
                                                  overlaps: (
                                                    (a.splitsCount
                                                      ? o.overlaps[t._eid]
                                                      : e.cellOverlaps[
                                                          t._eid
                                                        ]) || []
                                                  ).overlaps,
                                                  'event-position': (
                                                    (a.splitsCount
                                                      ? o.overlaps[t._eid]
                                                      : e.cellOverlaps[
                                                          t._eid
                                                        ]) || []
                                                  ).position,
                                                  'overlaps-streak':
                                                    a.splitsCount
                                                      ? o.overlapsStreak
                                                      : e.cellOverlapsStreak,
                                                },
                                                {
                                                  event: (0, i.k6)(
                                                    ({ event: t, view: n }) => [
                                                      (0, i.RG)(
                                                        e.$slots,
                                                        'event',
                                                        { view: n, event: t },
                                                      ),
                                                    ],
                                                  ),
                                                  _: 2,
                                                },
                                                1032,
                                                [
                                                  'cell-formatted-date',
                                                  'event',
                                                  'all-day',
                                                  'cell-events',
                                                  'overlaps',
                                                  'event-position',
                                                  'overlaps-streak',
                                                ],
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]))
                                    : (0, i.Q3)('', !0),
                                ],
                                42,
                                P,
                              )
                            ),
                          ),
                          128,
                        )),
                        a.timelineVisible
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              'div',
                              {
                                class: 'vuecal__now-line',
                                style: (0, s.Tr)(
                                  `top: ${a.todaysTimePosition}px`,
                                ),
                                key: n.options.transitions
                                  ? `${a.view.id}-now-line`
                                  : 'now-line',
                                title: a.utils.date.formatTime(a.vuecal.now),
                              },
                              null,
                              12,
                              X,
                            ))
                          : (0, i.Q3)('', !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['class', 'name', 'appear', 'style'],
                  )
                )
              },
            ],
          ],
        ),
        z = { key: 0, class: 'vuecal__all-day-text', style: { width: '3em' } },
        G = M(
          {
            inject: ['vuecal', 'view', 'editEvents'],
            components: { 'vuecal-cell': Y },
            props: {
              options: { type: Object, required: !0 },
              cells: { type: Array, required: !0 },
              label: { type: String, required: !0 },
              daySplits: { type: Array, default: () => [] },
              shortEvents: { type: Boolean, default: !0 },
              height: { type: String, default: '' },
              cellOrSplitMinWidth: { type: Number, default: null },
            },
            computed: {
              hasCellOrSplitWidth() {
                return !!(
                  this.options.minCellWidth ||
                  (this.daySplits.length && this.options.minSplitWidth)
                )
              },
            },
          },
          [
            [
              'render',
              function (e, t, n, r, o, l) {
                const a = (0, i.g2)('vuecal-cell')
                return (
                  (0, i.uX)(),
                  (0, i.CE)(
                    'div',
                    {
                      class: 'vuecal__flex vuecal__all-day',
                      style: (0, s.Tr)(
                        n.cellOrSplitMinWidth && { height: n.height },
                      ),
                    },
                    [
                      n.cellOrSplitMinWidth
                        ? (0, i.Q3)('', !0)
                        : ((0, i.uX)(),
                          (0, i.CE)('div', z, [
                            (0, i.Lk)('span', null, (0, s.v_)(n.label), 1),
                          ])),
                      (0, i.Lk)(
                        'div',
                        {
                          class: (0, s.C4)([
                            'vuecal__flex vuecal__cells',
                            `${l.view.id}-view`,
                          ]),
                          grow: '',
                          style: (0, s.Tr)(
                            n.cellOrSplitMinWidth
                              ? `min-width: ${n.cellOrSplitMinWidth}px`
                              : '',
                          ),
                        },
                        [
                          ((0, i.uX)(!0),
                          (0, i.CE)(
                            i.FK,
                            null,
                            (0, i.pI)(
                              n.cells,
                              (t, s) => (
                                (0, i.uX)(),
                                (0, i.Wv)(
                                  a,
                                  {
                                    key: s,
                                    options: n.options,
                                    'edit-events': l.editEvents,
                                    data: t,
                                    'all-day': !0,
                                    'cell-width':
                                      n.options.hideWeekdays.length &&
                                      (l.vuecal.isWeekView ||
                                        l.vuecal.isMonthView) &&
                                      l.vuecal.cellWidth,
                                    'min-timestamp': n.options.minTimestamp,
                                    'max-timestamp': n.options.maxTimestamp,
                                    'cell-splits': n.daySplits,
                                  },
                                  {
                                    event: (0, i.k6)(
                                      ({ event: t, view: n }) => [
                                        (0, i.RG)(e.$slots, 'event', {
                                          view: n,
                                          event: t,
                                        }),
                                      ],
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  [
                                    'options',
                                    'edit-events',
                                    'data',
                                    'cell-width',
                                    'min-timestamp',
                                    'max-timestamp',
                                    'cell-splits',
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        6,
                      ),
                    ],
                    4,
                  )
                )
              },
            ],
          ],
        ),
        K = ['lang'],
        Q = (0, i.Lk)('i', { class: 'angle' }, null, -1),
        Z = (0, i.Lk)('i', { class: 'angle' }, null, -1),
        q = { class: 'default' },
        J = { key: 0, class: 'vuecal__flex vuecal__body', grow: '' },
        ee = ['onBlur', 'innerHTML'],
        te = ['innerHTML'],
        ne = ['innerHTML'],
        ie = { class: 'vuecal__flex', row: '', grow: '' },
        se = { key: 0, class: 'vuecal__time-column' },
        re = (0, i.Lk)('span', { class: 'vuecal__time-cell-line' }, null, -1),
        oe = { class: 'vuecal__time-cell-label' },
        le = { key: 1, class: 'vuecal__flex vuecal__week-numbers', column: '' },
        ae = ['wrap', 'column'],
        ue = ['onBlur', 'innerHTML'],
        ce = ['innerHTML'],
        de = ['innerHTML'],
        he = ['wrap'],
        pe = ['innerHTML'],
        fe = ['innerHTML'],
        ve = { key: 2, class: 'vuecal__cell-events-count' },
        me = { key: 3, class: 'vuecal__no-event' },
        ge = ['onBlur', 'innerHTML'],
        ye = ['innerHTML'],
        we = { key: 2, class: 'vuecal__event-time' },
        be = { key: 0 },
        _e = { key: 1, class: 'days-to-end' },
        De = ['innerHTML'],
        Ee = { key: 0, class: 'vuecal__scrollbar-check' },
        Te = [(0, i.Lk)('div', null, null, -1)],
        Ce = {
          weekDays: Array(7).fill(''),
          weekDaysShort: [],
          months: Array(12).fill(''),
          years: '',
          year: '',
          month: '',
          week: '',
          day: '',
          today: '',
          noEvent: '',
          allDay: '',
          deleteEvent: '',
          createEvent: '',
          dateFormat: 'dddd MMMM D, YYYY',
          am: 'am',
          pm: 'pm',
        },
        ke = ['years', 'year', 'month', 'week', 'day'],
        Se = new (class {
          constructor(e, t = !1) {
            a(this, 'texts', {}),
              a(
                this,
                'dateToMinutes',
                (e) => 60 * e.getHours() + e.getMinutes(),
              ),
              (h = this),
              (this._texts = e),
              t || !Date || Date.prototype.addDays || this._initDatePrototypes()
          }
          _initDatePrototypes() {
            ;(Date.prototype.addDays = function (e) {
              return h.addDays(this, e)
            }),
              (Date.prototype.subtractDays = function (e) {
                return h.subtractDays(this, e)
              }),
              (Date.prototype.addHours = function (e) {
                return h.addHours(this, e)
              }),
              (Date.prototype.subtractHours = function (e) {
                return h.subtractHours(this, e)
              }),
              (Date.prototype.addMinutes = function (e) {
                return h.addMinutes(this, e)
              }),
              (Date.prototype.subtractMinutes = function (e) {
                return h.subtractMinutes(this, e)
              }),
              (Date.prototype.getWeek = function () {
                return h.getWeek(this)
              }),
              (Date.prototype.isToday = function () {
                return h.isToday(this)
              }),
              (Date.prototype.isLeapYear = function () {
                return h.isLeapYear(this)
              }),
              (Date.prototype.format = function (e = 'YYYY-MM-DD') {
                return h.formatDate(this, e)
              }),
              (Date.prototype.formatTime = function (e = 'HH:mm') {
                return h.formatTime(this, e)
              })
          }
          removePrototypes() {
            delete Date.prototype.addDays,
              delete Date.prototype.subtractDays,
              delete Date.prototype.addHours,
              delete Date.prototype.subtractHours,
              delete Date.prototype.addMinutes,
              delete Date.prototype.subtractMinutes,
              delete Date.prototype.getWeek,
              delete Date.prototype.isToday,
              delete Date.prototype.isLeapYear,
              delete Date.prototype.format,
              delete Date.prototype.formatTime
          }
          updateTexts(e) {
            this._texts = e
          }
          _todayFormatted() {
            return (
              c !== new Date().getDate() &&
                ((u = new Date()),
                (c = u.getDate()),
                (d = `${u.getFullYear()}-${u.getMonth()}-${u.getDate()}`)),
              d
            )
          }
          addDays(e, t) {
            const n = new Date(e.valueOf())
            return n.setDate(n.getDate() + t), n
          }
          subtractDays(e, t) {
            const n = new Date(e.valueOf())
            return n.setDate(n.getDate() - t), n
          }
          addHours(e, t) {
            const n = new Date(e.valueOf())
            return n.setHours(n.getHours() + t), n
          }
          subtractHours(e, t) {
            const n = new Date(e.valueOf())
            return n.setHours(n.getHours() - t), n
          }
          addMinutes(e, t) {
            const n = new Date(e.valueOf())
            return n.setMinutes(n.getMinutes() + t), n
          }
          subtractMinutes(e, t) {
            const n = new Date(e.valueOf())
            return n.setMinutes(n.getMinutes() - t), n
          }
          getWeek(e) {
            const t = new Date(
                Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
              ),
              n = t.getUTCDay() || 7
            t.setUTCDate(t.getUTCDate() + 4 - n)
            const i = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
            return Math.ceil(((t - i) / 864e5 + 1) / 7)
          }
          isToday(e) {
            return (
              `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}` ===
              this._todayFormatted()
            )
          }
          isLeapYear(e) {
            const t = e.getFullYear()
            return !(t % 400) || (t % 100 && !(t % 4))
          }
          getPreviousFirstDayOfWeek(e = null, t) {
            const n = (e && new Date(e.valueOf())) || new Date(),
              i = t ? 7 : 6
            return n.setDate(n.getDate() - ((n.getDay() + i) % 7)), n
          }
          stringToDate(e) {
            return e instanceof Date
              ? e
              : (10 === e.length && (e += ' 00:00'),
                new Date(e.replace(/-/g, '/')))
          }
          countDays(e, t) {
            'string' == typeof e && (e = e.replace(/-/g, '/')),
              'string' == typeof t && (t = t.replace(/-/g, '/')),
              (e = new Date(e).setHours(0, 0, 0, 0)),
              (t = new Date(t).setHours(0, 0, 1, 0))
            const n =
              60 *
              (new Date(t).getTimezoneOffset() -
                new Date(e).getTimezoneOffset()) *
              1e3
            return Math.ceil((t - e - n) / 864e5)
          }
          datesInSameTimeStep(e, t, n) {
            return Math.abs(e.getTime() - t.getTime()) <= 60 * n * 1e3
          }
          formatDate(e, t = 'YYYY-MM-DD', n = null) {
            if (
              (n || (n = this._texts),
              t || (t = 'YYYY-MM-DD'),
              'YYYY-MM-DD' === t)
            )
              return this.formatDateLite(e)
            ;(m = {}), (g = {})
            const i = {
              YYYY: () => this._hydrateDateObject(e, n).YYYY,
              YY: () => this._hydrateDateObject(e, n).YY(),
              M: () => this._hydrateDateObject(e, n).M,
              MM: () => this._hydrateDateObject(e, n).MM(),
              MMM: () => this._hydrateDateObject(e, n).MMM(),
              MMMM: () => this._hydrateDateObject(e, n).MMMM(),
              MMMMG: () => this._hydrateDateObject(e, n).MMMMG(),
              D: () => this._hydrateDateObject(e, n).D,
              DD: () => this._hydrateDateObject(e, n).DD(),
              S: () => this._hydrateDateObject(e, n).S(),
              d: () => this._hydrateDateObject(e, n).d,
              dd: () => this._hydrateDateObject(e, n).dd(),
              ddd: () => this._hydrateDateObject(e, n).ddd(),
              dddd: () => this._hydrateDateObject(e, n).dddd(),
              HH: () => this._hydrateTimeObject(e, n).HH,
              H: () => this._hydrateTimeObject(e, n).H,
              hh: () => this._hydrateTimeObject(e, n).hh,
              h: () => this._hydrateTimeObject(e, n).h,
              am: () => this._hydrateTimeObject(e, n).am,
              AM: () => this._hydrateTimeObject(e, n).AM,
              mm: () => this._hydrateTimeObject(e, n).mm,
              m: () => this._hydrateTimeObject(e, n).m,
            }
            return t.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (e, t) => {
              const n = i[t.replace(/\{|\}/g, '')]
              return void 0 !== n ? n() : t
            })
          }
          formatDateLite(e) {
            const t = e.getMonth() + 1,
              n = e.getDate()
            return `${e.getFullYear()}-${t < 10 ? '0' : ''}${t}-${n < 10 ? '0' : ''}${n}`
          }
          formatTime(e, t = 'HH:mm', n = null, i = !1) {
            let s = !1
            if (i) {
              const [t, n, i] = [e.getHours(), e.getMinutes(), e.getSeconds()]
              t + n + i === 141 && (s = !0)
            }
            if (e instanceof Date && 'HH:mm' === t)
              return s ? '24:00' : this.formatTimeLite(e)
            ;(g = {}), n || (n = this._texts)
            const r = this._hydrateTimeObject(e, n),
              o = t.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (e, t) => {
                const n = r[t.replace(/\{|\}/g, '')]
                return void 0 !== n ? n : t
              })
            return s ? o.replace('23:59', '24:00') : o
          }
          formatTimeLite(e) {
            const t = e.getHours(),
              n = e.getMinutes()
            return `${(t < 10 ? '0' : '') + t}:${(n < 10 ? '0' : '') + n}`
          }
          _nth(e) {
            if (e > 3 && e < 21) return 'th'
            switch (e % 10) {
              case 1:
                return 'st'
              case 2:
                return 'nd'
              case 3:
                return 'rd'
              default:
                return 'th'
            }
          }
          _hydrateDateObject(e, t) {
            if (m.D) return m
            const n = e.getFullYear(),
              i = e.getMonth() + 1,
              s = e.getDate(),
              r = (e.getDay() - 1 + 7) % 7
            return (
              (m = {
                YYYY: n,
                YY: () => n.toString().substring(2),
                M: i,
                MM: () => (i < 10 ? '0' : '') + i,
                MMM: () => t.months[i - 1].substring(0, 3),
                MMMM: () => t.months[i - 1],
                MMMMG: () => (t.monthsGenitive || t.months)[i - 1],
                D: s,
                DD: () => (s < 10 ? '0' : '') + s,
                S: () => this._nth(s),
                d: r + 1,
                dd: () => t.weekDays[r][0],
                ddd: () => t.weekDays[r].substr(0, 3),
                dddd: () => t.weekDays[r],
              }),
              m
            )
          }
          _hydrateTimeObject(e, t) {
            if (g.am) return g
            let n, i
            e instanceof Date
              ? ((n = e.getHours()), (i = e.getMinutes()))
              : ((n = Math.floor(e / 60)), (i = Math.floor(e % 60)))
            const s = n % 12 ? n % 12 : 12,
              r = (t || { am: 'am', pm: 'pm' })[
                24 === n || n < 12 ? 'am' : 'pm'
              ]
            return (
              (g = {
                H: n,
                h: s,
                HH: (n < 10 ? '0' : '') + n,
                hh: (s < 10 ? '0' : '') + s,
                am: r,
                AM: r.toUpperCase(),
                m: i,
                mm: (i < 10 ? '0' : '') + i,
              }),
              g
            )
          }
        })(Ce),
        Me = {
          name: 'vue-cal',
          components: {
            'vuecal-cell': Y,
            'vuecal-header': F,
            WeekdaysHeadings: x,
            AllDayBar: G,
          },
          provide() {
            return {
              vuecal: this,
              utils: this.utils,
              modules: this.modules,
              previous: this.previous,
              next: this.next,
              switchView: this.switchView,
              updateSelectedDate: this.updateSelectedDate,
              editEvents: this.editEvents,
              view: this.view,
              domEvents: this.domEvents,
            }
          },
          props: {
            activeView: { type: String, default: 'week' },
            allDayBarHeight: { type: [String, Number], default: '25px' },
            cellClickHold: { type: Boolean, default: !0 },
            cellContextmenu: { type: Boolean, default: !1 },
            clickToNavigate: { type: Boolean, default: !1 },
            dblclickToNavigate: { type: Boolean, default: !0 },
            disableDatePrototypes: { type: Boolean, default: !1 },
            disableDays: { type: Array, default: () => [] },
            disableViews: { type: Array, default: () => [] },
            dragToCreateEvent: { type: Boolean, default: !0 },
            dragToCreateThreshold: { type: Number, default: 15 },
            editableEvents: { type: [Boolean, Object], default: !1 },
            events: { type: Array, default: () => [] },
            eventsCountOnYearView: { type: Boolean, default: !1 },
            eventsOnMonthView: { type: [Boolean, String], default: !1 },
            hideBody: { type: Boolean, default: !1 },
            hideTitleBar: { type: Boolean, default: !1 },
            hideViewSelector: { type: Boolean, default: !1 },
            hideWeekdays: { type: Array, default: () => [] },
            hideWeekends: { type: Boolean, default: !1 },
            locale: { type: [String, Object], default: 'en' },
            maxDate: { type: [String, Date], default: '' },
            minCellWidth: { type: Number, default: 0 },
            minDate: { type: [String, Date], default: '' },
            minEventWidth: { type: Number, default: 0 },
            minSplitWidth: { type: Number, default: 0 },
            onEventClick: { type: [Function, null], default: null },
            onEventCreate: { type: [Function, null], default: null },
            onEventDblclick: { type: [Function, null], default: null },
            overlapsPerTimeStep: { type: Boolean, default: !1 },
            resizeX: { type: Boolean, default: !1 },
            selectedDate: { type: [String, Date], default: '' },
            showAllDayEvents: { type: [Boolean, String], default: !1 },
            showTimeInCells: { type: Boolean, default: !1 },
            showWeekNumbers: { type: [Boolean, String], default: !1 },
            snapToTime: { type: Number, default: 0 },
            small: { type: Boolean, default: !1 },
            specialHours: { type: Object, default: () => ({}) },
            splitDays: { type: Array, default: () => [] },
            startWeekOnSunday: { type: Boolean, default: !1 },
            stickySplitLabels: { type: Boolean, default: !1 },
            time: { type: Boolean, default: !0 },
            timeCellHeight: { type: Number, default: 40 },
            timeFormat: { type: String, default: '' },
            timeFrom: { type: Number, default: 0 },
            timeStep: { type: Number, default: 60 },
            timeTo: { type: Number, default: 1440 },
            todayButton: { type: Boolean, default: !1 },
            transitions: { type: Boolean, default: !0 },
            twelveHour: { type: Boolean, default: !1 },
            watchRealTime: { type: Boolean, default: !1 },
            xsmall: { type: Boolean, default: !1 },
          },
          data() {
            return {
              ready: !1,
              texts: { ...Ce },
              utils: {
                date:
                  (!!this.disableDatePrototypes && Se.removePrototypes()) || Se,
                cell: null,
                event: null,
              },
              modules: { dnd: null },
              cellsEl: null,
              view: {
                id: '',
                title: '',
                startDate: null,
                endDate: null,
                firstCellDate: null,
                lastCellDate: null,
                selectedDate: null,
                events: [],
              },
              eventIdIncrement: 1,
              now: new Date(),
              timeTickerIds: [null, null],
              domEvents: {
                resizeAnEvent: {
                  _eid: null,
                  start: null,
                  split: null,
                  segment: null,
                  originalEndTimeMinutes: 0,
                  originalEnd: null,
                  end: null,
                  startCell: null,
                  endCell: null,
                },
                dragAnEvent: { _eid: null },
                dragCreateAnEvent: {
                  startCursorY: null,
                  start: null,
                  split: null,
                  event: null,
                },
                focusAnEvent: { _eid: null, mousedUp: !1 },
                clickHoldAnEvent: {
                  _eid: null,
                  timeout: 1200,
                  timeoutId: null,
                },
                dblTapACell: { taps: 0, timeout: 500 },
                clickHoldACell: {
                  cellId: null,
                  split: null,
                  timeout: 1200,
                  timeoutId: null,
                  eventCreated: !1,
                },
                cancelClickEventCreation: !1,
              },
              mutableEvents: [],
              transitionDirection: 'right',
            }
          },
          methods: {
            async loadLocale(e) {
              if ('object' == typeof this.locale)
                return (
                  (this.texts = Object.assign({}, Ce, e)),
                  void this.utils.date.updateTexts(this.texts)
                )
              if ('en' === this.locale) {
                const e = await n.e(743).then(n.bind(n, 7743))
                this.texts = Object.assign({}, Ce, e)
              } else
                ((e, t) => {
                  const n = e[t]
                  return n
                    ? 'function' == typeof n
                      ? n()
                      : Promise.resolve(n)
                    : new Promise((e, n) => {
                        ;('function' == typeof queueMicrotask
                          ? queueMicrotask
                          : setTimeout)(
                          n.bind(
                            null,
                            new Error('Unknown variable dynamic import: ' + t),
                          ),
                        )
                      })
                })(
                  Object.assign({
                    './i18n/ar.json': () => n.e(359).then(n.bind(n, 1359)),
                    './i18n/bg.json': () => n.e(155).then(n.bind(n, 5155)),
                    './i18n/bn.json': () => n.e(466).then(n.bind(n, 9466)),
                    './i18n/bs.json': () => n.e(335).then(n.bind(n, 3335)),
                    './i18n/ca.json': () => n.e(170).then(n.bind(n, 4170)),
                    './i18n/cs.json': () => n.e(724).then(n.bind(n, 724)),
                    './i18n/da.json': () => n.e(859).then(n.bind(n, 7859)),
                    './i18n/de.json': () => n.e(863).then(n.bind(n, 5863)),
                    './i18n/el.json': () => n.e(689).then(n.bind(n, 3689)),
                    './i18n/en.json': () => n.e(743).then(n.bind(n, 7743)),
                    './i18n/es.json': () => n.e(722).then(n.bind(n, 722)),
                    './i18n/et.json': () => n.e(233).then(n.bind(n, 1233)),
                    './i18n/fa.json': () => n.e(613).then(n.bind(n, 613)),
                    './i18n/fr.json': () => n.e(970).then(n.bind(n, 2970)),
                    './i18n/he.json': () => n.e(595).then(n.bind(n, 4595)),
                    './i18n/hr.json': () => n.e(400).then(n.bind(n, 8400)),
                    './i18n/hu.json': () => n.e(131).then(n.bind(n, 2131)),
                    './i18n/id.json': () => n.e(245).then(n.bind(n, 5245)),
                    './i18n/is.json': () => n.e(326).then(n.bind(n, 8326)),
                    './i18n/it.json': () => n.e(269).then(n.bind(n, 269)),
                    './i18n/ja.json': () => n.e(841).then(n.bind(n, 8841)),
                    './i18n/ka.json': () => n.e(514).then(n.bind(n, 4514)),
                    './i18n/ko.json': () => n.e(216).then(n.bind(n, 8216)),
                    './i18n/lt.json': () => n.e(238).then(n.bind(n, 238)),
                    './i18n/mn.json': () => n.e(127).then(n.bind(n, 3127)),
                    './i18n/nl.json': () => n.e(448).then(n.bind(n, 3448)),
                    './i18n/no.json': () => n.e(543).then(n.bind(n, 4543)),
                    './i18n/pl.json': () => n.e(442).then(n.bind(n, 1442)),
                    './i18n/pt-br.json': () => n.e(533).then(n.bind(n, 7533)),
                    './i18n/ro.json': () => n.e(219).then(n.bind(n, 219)),
                    './i18n/ru.json': () => n.e(829).then(n.bind(n, 6829)),
                    './i18n/sk.json': () => n.e(332).then(n.bind(n, 2332)),
                    './i18n/sl.json': () => n.e(775).then(n.bind(n, 775)),
                    './i18n/sq.json': () => n.e(634).then(n.bind(n, 2634)),
                    './i18n/sr.json': () => n.e(677).then(n.bind(n, 8677)),
                    './i18n/sv.json': () => n.e(913).then(n.bind(n, 5913)),
                    './i18n/tr.json': () => n.e(324).then(n.bind(n, 1324)),
                    './i18n/uk.json': () => n.e(274).then(n.bind(n, 5274)),
                    './i18n/vi.json': () => n.e(573).then(n.bind(n, 4573)),
                    './i18n/zh-cn.json': () => n.e(444).then(n.bind(n, 444)),
                    './i18n/zh-hk.json': () => n.e(836).then(n.bind(n, 8836)),
                  }),
                  `./i18n/${e}.json`,
                ).then((e) => {
                  ;(this.texts = Object.assign({}, Ce, e.default)),
                    this.utils.date.updateTexts(this.texts)
                })
            },
            loadDragAndDrop() {
              n.e(785)
                .then(n.bind(n, 3785))
                .then((e) => {
                  const { DragAndDrop: t } = e
                  this.modules.dnd = new t(this)
                })
                .catch(() =>
                  console.warn('Vue Cal: Missing drag & drop module.'),
                )
            },
            validateView(e) {
              return (
                ke.includes(e) ||
                  (console.error(
                    `Vue Cal: invalid active-view parameter provided: "${e}".\nA valid view must be one of: ${ke.join(', ')}.`,
                  ),
                  (e = 'week')),
                this.enabledViews.includes(e) ||
                  (console.warn(
                    `Vue Cal: the provided active-view "${e}" is disabled. Using the "${this.enabledViews[0]}" view instead.`,
                  ),
                  (e = this.enabledViews[0])),
                e
              )
            },
            switchToNarrowerView(e = null) {
              this.transitionDirection = 'right'
              const t =
                this.enabledViews[this.enabledViews.indexOf(this.view.id) + 1]
              t && this.switchView(t, e)
            },
            switchView(e, t = null, n = !1) {
              e = this.validateView(e)
              const i = this.utils.date,
                s = this.view.startDate && this.view.startDate.getTime()
              if (this.transitions && n) {
                if (this.view.id === e) return
                const t = this.enabledViews
                this.transitionDirection =
                  t.indexOf(this.view.id) > t.indexOf(e) ? 'left' : 'right'
              }
              const r = this.view.id
              switch (
                ((this.view.events = []),
                (this.view.id = e),
                (this.view.firstCellDate = null),
                (this.view.lastCellDate = null),
                t || (t = this.view.selectedDate || this.view.startDate),
                e)
              ) {
                case 'years':
                  ;(this.view.startDate = new Date(
                    25 * Math.floor(t.getFullYear() / 25) || 2e3,
                    0,
                    1,
                  )),
                    (this.view.endDate = new Date(
                      this.view.startDate.getFullYear() + 25,
                      0,
                      1,
                    )),
                    this.view.endDate.setSeconds(-1)
                  break
                case 'year':
                  ;(this.view.startDate = new Date(t.getFullYear(), 0, 1)),
                    (this.view.endDate = new Date(t.getFullYear() + 1, 0, 1)),
                    this.view.endDate.setSeconds(-1)
                  break
                case 'month': {
                  ;(this.view.startDate = new Date(
                    t.getFullYear(),
                    t.getMonth(),
                    1,
                  )),
                    (this.view.endDate = new Date(
                      t.getFullYear(),
                      t.getMonth() + 1,
                      1,
                    )),
                    this.view.endDate.setSeconds(-1)
                  let e = new Date(this.view.startDate)
                  if (
                    (e.getDay() !== (this.startWeekOnSunday ? 0 : 1) &&
                      (e = i.getPreviousFirstDayOfWeek(
                        e,
                        this.startWeekOnSunday,
                      )),
                    (this.view.firstCellDate = e),
                    (this.view.lastCellDate = i.addDays(e, 41)),
                    this.view.lastCellDate.setHours(23, 59, 59, 0),
                    this.hideWeekends)
                  ) {
                    if ([0, 6].includes(this.view.firstCellDate.getDay())) {
                      const e =
                        6 !== this.view.firstCellDate.getDay() ||
                        this.startWeekOnSunday
                          ? 1
                          : 2
                      this.view.firstCellDate = i.addDays(
                        this.view.firstCellDate,
                        e,
                      )
                    }
                    if ([0, 6].includes(this.view.startDate.getDay())) {
                      const e = 6 === this.view.startDate.getDay() ? 2 : 1
                      this.view.startDate = i.addDays(this.view.startDate, e)
                    }
                    if ([0, 6].includes(this.view.lastCellDate.getDay())) {
                      const e =
                        0 !== this.view.lastCellDate.getDay() ||
                        this.startWeekOnSunday
                          ? 1
                          : 2
                      this.view.lastCellDate = i.subtractDays(
                        this.view.lastCellDate,
                        e,
                      )
                    }
                    if ([0, 6].includes(this.view.endDate.getDay())) {
                      const e = 0 === this.view.endDate.getDay() ? 2 : 1
                      this.view.endDate = i.subtractDays(this.view.endDate, e)
                    }
                  }
                  break
                }
                case 'week': {
                  t = i.getPreviousFirstDayOfWeek(t, this.startWeekOnSunday)
                  const e = this.hideWeekends ? 5 : 7
                  ;(this.view.startDate =
                    this.hideWeekends && this.startWeekOnSunday
                      ? i.addDays(t, 1)
                      : t),
                    this.view.startDate.setHours(0, 0, 0, 0),
                    (this.view.endDate = i.addDays(t, e)),
                    this.view.endDate.setSeconds(-1)
                  break
                }
                case 'day':
                  ;(this.view.startDate = t),
                    this.view.startDate.setHours(0, 0, 0, 0),
                    (this.view.endDate = new Date(t)),
                    this.view.endDate.setHours(23, 59, 59, 0)
              }
              this.addEventsToView()
              const o = this.view.startDate && this.view.startDate.getTime()
              if (
                (r !== e || o !== s) &&
                (this.$emit('update:activeView', e), this.ready)
              ) {
                const t = this.view.startDate,
                  n = {
                    view: e,
                    startDate: t,
                    endDate: this.view.endDate,
                    ...(this.isMonthView
                      ? {
                          firstCellDate: this.view.firstCellDate,
                          lastCellDate: this.view.lastCellDate,
                          outOfScopeEvents: this.view.outOfScopeEvents.map(
                            this.cleanupEvent,
                          ),
                        }
                      : {}),
                    events: this.view.events.map(this.cleanupEvent),
                    ...(this.isWeekView
                      ? {
                          week: i.getWeek(
                            this.startWeekOnSunday ? i.addDays(t, 1) : t,
                          ),
                        }
                      : {}),
                  }
                this.$emit('view-change', n)
              }
            },
            previous() {
              this.previousNext(!1)
            },
            next() {
              this.previousNext()
            },
            previousNext(e = !0) {
              const t = this.utils.date
              this.transitionDirection = e ? 'right' : 'left'
              const n = e ? 1 : -1
              let i = null
              const { startDate: s, id: r } = this.view
              switch (r) {
                case 'years':
                  i = new Date(s.getFullYear() + 25 * n, 0, 1)
                  break
                case 'year':
                  i = new Date(s.getFullYear() + 1 * n, 1, 1)
                  break
                case 'month':
                  i = new Date(s.getFullYear(), s.getMonth() + 1 * n, 1)
                  break
                case 'week':
                  i = t[e ? 'addDays' : 'subtractDays'](
                    t.getPreviousFirstDayOfWeek(s, this.startWeekOnSunday),
                    7,
                  )
                  break
                case 'day':
                  i = t[e ? 'addDays' : 'subtractDays'](s, 1)
                  const r = i.getDay(),
                    o = this.startWeekOnSunday ? r : (r || 7) - 1
                  if (this.weekDays[o].hide) {
                    const n = this.weekDays.map((e, t) => ({ ...e, i: t }))
                    let s = 0
                    e
                      ? ([...n.slice(o), ...n].find((e) => (s++, !e.hide)).i,
                        s--)
                      : [...n, ...n.slice(0, o)]
                          .reverse()
                          .find((e) => (s++, !e.hide)).i,
                      (i = t[e ? 'addDays' : 'subtractDays'](i, s))
                  }
              }
              i && this.switchView(r, i)
            },
            addEventsToView(e = []) {
              const t = this.utils.event,
                {
                  startDate: n,
                  endDate: i,
                  firstCellDate: s,
                  lastCellDate: r,
                } = this.view
              if (
                (e.length || (this.view.events = []),
                !(e = e.length ? e : [...this.mutableEvents]) ||
                  (this.isYearsOrYearView && !this.eventsCountOnYearView))
              )
                return
              let o = e.filter((e) => t.eventInRange(e, n, i))
              this.isYearsOrYearView ||
                (this.isMonthView && !this.eventsOnMonthView) ||
                (o = o.map((e) =>
                  e.daysCount > 1
                    ? t.createEventSegments(e, s || n, r || i)
                    : e,
                )),
                this.view.events.push(...o),
                this.isMonthView &&
                  ((this.view.outOfScopeEvents = []),
                  e.forEach((e) => {
                    ;(t.eventInRange(e, s, n) || t.eventInRange(e, i, r)) &&
                      (this.view.events.some((t) => t._eid === e._eid) ||
                        this.view.outOfScopeEvents.push(e))
                  }))
            },
            findAncestor(e, t) {
              for (; (e = e.parentElement) && !e.classList.contains(t); );
              return e
            },
            isDOMElementAnEvent(e) {
              return (
                e.classList.contains('vuecal__event') ||
                this.findAncestor(e, 'vuecal__event')
              )
            },
            onMouseMove(e) {
              const {
                resizeAnEvent: t,
                dragAnEvent: n,
                dragCreateAnEvent: i,
              } = this.domEvents
              ;(null !== t._eid || null !== n._eid || i.start) &&
                (e.preventDefault(),
                t._eid
                  ? this.eventResizing(e)
                  : this.dragToCreateEvent &&
                    i.start &&
                    this.eventDragCreation(e))
            },
            onMouseUp(e) {
              const {
                  focusAnEvent: t,
                  resizeAnEvent: n,
                  clickHoldAnEvent: i,
                  clickHoldACell: s,
                  dragCreateAnEvent: r,
                } = this.domEvents,
                { _eid: o } = i,
                { _eid: l } = n
              let a = !1
              const { event: u, start: c } = r,
                d = this.isDOMElementAnEvent(e.target),
                h = t.mousedUp
              if (
                ((t.mousedUp = !1),
                d && (this.domEvents.cancelClickEventCreation = !0),
                s.eventCreated)
              )
                return
              if (l) {
                const {
                    originalEnd: e,
                    originalEndTimeMinutes: t,
                    endTimeMinutes: i,
                  } = n,
                  s = this.view.events.find((e) => e._eid === n._eid)
                if (
                  ((a = i && i !== t), s && s.end.getTime() !== e.getTime())
                ) {
                  const t = this.mutableEvents.find((e) => e._eid === n._eid)
                  ;(t.endTimeMinutes = s.endTimeMinutes), (t.end = s.end)
                  const i = this.cleanupEvent(s),
                    r = {
                      ...this.cleanupEvent(s),
                      end: e,
                      endTimeMinutes: s.originalEndTimeMinutes,
                    }
                  this.$emit('event-duration-change', {
                    event: i,
                    oldDate: n.originalEnd,
                    originalEvent: r,
                  }),
                    this.$emit('event-change', { event: i, originalEvent: r })
                }
                s && (s.resizing = !1),
                  (n._eid = null),
                  (n.start = null),
                  (n.split = null),
                  (n.segment = null),
                  (n.originalEndTimeMinutes = null),
                  (n.originalEnd = null),
                  (n.endTimeMinutes = null),
                  (n.startCell = null),
                  (n.endCell = null)
              } else
                c &&
                  (u &&
                    (this.emitWithEvent('event-drag-create', u),
                    (r.event.resizing = !1)),
                  (r.start = null),
                  (r.split = null),
                  (r.event = null))
              d || l || this.unfocusEvent(),
                i.timeoutId &&
                  !o &&
                  (clearTimeout(i.timeoutId), (i.timeoutId = null)),
                s.timeoutId && (clearTimeout(s.timeoutId), (s.timeoutId = null))
              const p = 'function' == typeof this.onEventClick
              if (h && !a && !o && !u && p) {
                let n = this.view.events.find((e) => e._eid === t._eid)
                return (
                  !n &&
                    this.isMonthView &&
                    (n = this.view.outOfScopeEvents.find(
                      (e) => e._eid === t._eid,
                    )),
                  n && this.onEventClick(n, e)
                )
              }
            },
            onKeyUp(e) {
              27 === e.keyCode && this.cancelDelete()
            },
            eventResizing(e) {
              const { resizeAnEvent: t } = this.domEvents,
                n = this.view.events.find((e) => e._eid === t._eid) || {
                  segments: {},
                },
                { minutes: i, cursorCoords: s } = this.minutesAtCursor(e),
                r = n.segments && n.segments[t.segment],
                { date: o, event: l } = this.utils,
                a = Math.max(
                  i,
                  this.timeFrom + 1,
                  (r || n).startTimeMinutes + 1,
                )
              if (
                ((n.endTimeMinutes = t.endTimeMinutes = a), this.snapToTime)
              ) {
                const e = n.endTimeMinutes + this.snapToTime / 2
                n.endTimeMinutes = e - (e % this.snapToTime)
              }
              if (
                (r && (r.endTimeMinutes = n.endTimeMinutes),
                n.end.setHours(
                  0,
                  n.endTimeMinutes,
                  1440 === n.endTimeMinutes ? -1 : 0,
                  0,
                ),
                this.resizeX && this.isWeekView)
              ) {
                n.daysCount = o.countDays(n.start, n.end)
                const e = this.cellsEl,
                  i = e.offsetWidth / e.childElementCount,
                  r = Math.floor(s.x / i)
                if (
                  (null === t.startCell &&
                    (t.startCell = r - (n.daysCount - 1)),
                  t.endCell !== r)
                ) {
                  t.endCell = r
                  const e = o.addDays(n.start, r - t.startCell),
                    i = Math.max(o.countDays(n.start, e), 1)
                  if (i !== n.daysCount) {
                    let e = null
                    ;(e =
                      i > n.daysCount
                        ? l.addEventSegment(n)
                        : l.removeEventSegment(n)),
                      (t.segment = e),
                      (n.endTimeMinutes += 0.001)
                  }
                }
              }
              this.$emit('event-resizing', {
                _eid: n._eid,
                end: n.end,
                endTimeMinutes: n.endTimeMinutes,
              })
            },
            eventDragCreation(e) {
              const { dragCreateAnEvent: t } = this.domEvents,
                { start: n, startCursorY: i, split: s } = t,
                r = new Date(n),
                {
                  minutes: o,
                  cursorCoords: { y: l },
                } = this.minutesAtCursor(e)
              if (t.event || !(Math.abs(i - l) < this.dragToCreateThreshold))
                if (t.event) {
                  if (
                    (r.setHours(0, o, 1440 === o ? -1 : 0, 0), this.snapToTime)
                  ) {
                    let e = 60 * r.getHours() + r.getMinutes()
                    const t = e + this.snapToTime / 2
                    ;(e = t - (t % this.snapToTime)), r.setHours(0, e, 0, 0)
                  }
                  const e = n < r,
                    { event: i } = t
                  ;(i.start = e ? n : r),
                    (i.end = e ? r : n),
                    (i.startTimeMinutes =
                      60 * i.start.getHours() + i.start.getMinutes()),
                    (i.endTimeMinutes =
                      60 * i.end.getHours() + i.end.getMinutes())
                } else {
                  if (
                    ((t.event = this.utils.event.createAnEvent(n, 1, {
                      split: s,
                    })),
                    !t.event)
                  )
                    return (
                      (t.start = null), (t.split = null), void (t.event = null)
                    )
                  t.event.resizing = !0
                }
            },
            unfocusEvent() {
              const { focusAnEvent: e, clickHoldAnEvent: t } = this.domEvents,
                n = this.view.events.find((n) => n._eid === (e._eid || t._eid))
              ;(e._eid = null),
                (t._eid = null),
                n && ((n.focused = !1), (n.deleting = !1))
            },
            cancelDelete() {
              const { clickHoldAnEvent: e } = this.domEvents
              if (e._eid) {
                const t = this.view.events.find((t) => t._eid === e._eid)
                t && (t.deleting = !1), (e._eid = null), (e.timeoutId = null)
              }
            },
            onEventTitleBlur(e, t) {
              if (t.title === e.target.innerHTML) return
              const n = t.title
              t.title = e.target.innerHTML
              const i = this.cleanupEvent(t)
              this.$emit('event-title-change', { event: i, oldTitle: n }),
                this.$emit('event-change', {
                  event: i,
                  originalEvent: { ...i, title: n },
                })
            },
            updateMutableEvents() {
              const e = this.utils.date
              ;(this.mutableEvents = []),
                this.events.forEach((t) => {
                  const n =
                      'string' == typeof t.start
                        ? e.stringToDate(t.start)
                        : t.start,
                    i = e.formatDateLite(n),
                    s = e.dateToMinutes(n)
                  let r = null
                  'string' == typeof t.end && t.end.includes('24:00')
                    ? ((r = new Date(t.end.replace(' 24:00', ''))),
                      r.setHours(23, 59, 59, 0))
                    : (r =
                        'string' == typeof t.end
                          ? e.stringToDate(t.end)
                          : t.end)
                  let o = e.formatDateLite(r),
                    l = e.dateToMinutes(r)
                  ;(l && 1440 !== l) ||
                    (!this.time ||
                    ('string' == typeof t.end && 10 === t.end.length)
                      ? r.setHours(23, 59, 59, 0)
                      : r.setSeconds(r.getSeconds() - 1),
                    (o = e.formatDateLite(r)),
                    (l = 1440))
                  const a = i !== o
                  ;(t = Object.assign(
                    { ...this.utils.event.eventDefaults },
                    t,
                    {
                      _eid: `${this._.uid}_${this.eventIdIncrement++}`,
                      segments: a ? {} : null,
                      start: n,
                      startTimeMinutes: s,
                      end: r,
                      endTimeMinutes: l,
                      daysCount: a ? e.countDays(n, r) : 1,
                      class: t.class,
                    },
                  )),
                    this.mutableEvents.push(t)
                })
            },
            minutesAtCursor(e) {
              return this.utils.cell.minutesAtCursor(e)
            },
            createEvent(e, t, n = {}) {
              return this.utils.event.createAnEvent(e, t, n)
            },
            cleanupEvent(e) {
              return (
                (e = { ...e }),
                [
                  'segments',
                  'deletable',
                  'deleting',
                  'titleEditable',
                  'resizable',
                  'resizing',
                  'draggable',
                  'dragging',
                  'draggingStatic',
                  'focused',
                ].forEach((t) => {
                  t in e && delete e[t]
                }),
                e.repeat || delete e.repeat,
                e
              )
            },
            emitWithEvent(e, t) {
              this.$emit(e, this.cleanupEvent(t))
            },
            updateSelectedDate(e) {
              if (
                (e =
                  e && 'string' == typeof e
                    ? this.utils.date.stringToDate(e)
                    : new Date(e)) &&
                e instanceof Date
              ) {
                const { selectedDate: t } = this.view
                t &&
                  (this.transitionDirection =
                    t.getTime() > e.getTime() ? 'left' : 'right'),
                  e.setHours(0, 0, 0, 0),
                  (t && t.getTime() === e.getTime()) ||
                    (this.view.selectedDate = e),
                  this.switchView(this.view.id)
              }
              this.$emit('update:selected-date', this.view.selectedDate)
            },
            getWeekNumber(e) {
              const t = this.utils.date,
                n = this.firstCellDateWeekNumber + e,
                i = this.startWeekOnSunday ? 1 : 0
              return n > 52
                ? t.getWeek(t.addDays(this.view.firstCellDate, 7 * e + i))
                : n
            },
            timeTick() {
              ;(this.now = new Date()),
                (this.timeTickerIds[1] = setTimeout(this.timeTick, 6e4))
            },
            updateDateTexts() {
              this.utils.date.updateTexts(this.texts)
            },
            alignWithScrollbar() {
              if (document.getElementById('vuecal-align-with-scrollbar')) return
              const e = this.$refs.vuecal.getElementsByClassName(
                  'vuecal__scrollbar-check',
                )[0],
                t = e.offsetWidth - e.children[0].offsetWidth
              if (t) {
                const e = document.createElement('style')
                ;(e.id = 'vuecal-align-with-scrollbar'),
                  (e.type = 'text/css'),
                  (e.innerHTML = `.vuecal--view-with-time .vuecal__weekdays-headings,.vuecal--view-with-time .vuecal__all-day {padding-right: ${t}px}`),
                  document.head.appendChild(e)
              }
            },
            cellOrSplitHasEvents: (e, t = null) =>
              e.length &&
              ((!t && e.length) || (t && e.some((e) => e.split === t.id))),
          },
          created() {
            ;(this.utils.cell = new y(this)),
              (this.utils.event = new w(this, this.utils.date)),
              this.loadLocale(this.locale),
              this.editEvents.drag && this.loadDragAndDrop(),
              this.updateMutableEvents(this.events),
              (this.view.id = this.currentView),
              this.selectedDate
                ? this.updateSelectedDate(this.selectedDate)
                : ((this.view.selectedDate = new Date()),
                  this.switchView(this.currentView)),
              this.time &&
                this.watchRealTime &&
                (this.timeTickerIds[0] = setTimeout(
                  this.timeTick,
                  1e3 * (60 - this.now.getSeconds()),
                ))
          },
          mounted() {
            const e = this.utils.date,
              t = 'ontouchstart' in window,
              {
                resize: n,
                drag: i,
                create: s,
                delete: r,
                title: o,
              } = this.editEvents,
              l = this.onEventClick && 'function' == typeof this.onEventClick
            ;(n || i || s || r || o || l) &&
              window.addEventListener(
                t ? 'touchend' : 'mouseup',
                this.onMouseUp,
              ),
              (n || i || (s && this.dragToCreateEvent)) &&
                window.addEventListener(
                  t ? 'touchmove' : 'mousemove',
                  this.onMouseMove,
                  { passive: !1 },
                ),
              o && window.addEventListener('keyup', this.onKeyUp),
              t &&
                (this.$refs.vuecal.oncontextmenu = function (e) {
                  e.preventDefault(), e.stopPropagation()
                }),
              this.hideBody || this.alignWithScrollbar()
            const a = this.view.startDate,
              u = {
                view: this.view.id,
                startDate: a,
                endDate: this.view.endDate,
                ...(this.isMonthView
                  ? {
                      firstCellDate: this.view.firstCellDate,
                      lastCellDate: this.view.lastCellDate,
                    }
                  : {}),
                events: this.view.events.map(this.cleanupEvent),
                ...(this.isWeekView
                  ? {
                      week: e.getWeek(
                        this.startWeekOnSunday ? e.addDays(a, 1) : a,
                      ),
                    }
                  : {}),
              }
            this.$emit('ready', u), (this.ready = !0)
          },
          beforeUnmount() {
            const e = 'ontouchstart' in window
            window.removeEventListener(
              e ? 'touchmove' : 'mousemove',
              this.onMouseMove,
              { passive: !1 },
            ),
              window.removeEventListener(
                e ? 'touchend' : 'mouseup',
                this.onMouseUp,
              ),
              window.removeEventListener('keyup', this.onKeyUp),
              this.timeTickerIds[0] && clearTimeout(this.timeTickerIds[0]),
              this.timeTickerIds[1] && clearTimeout(this.timeTickerIds[1]),
              (this.timeTickerIds = [null, null])
          },
          computed: {
            editEvents() {
              return this.editableEvents &&
                'object' == typeof this.editableEvents
                ? {
                    title: !!this.editableEvents.title,
                    drag: !!this.editableEvents.drag,
                    resize: !!this.editableEvents.resize,
                    create: !!this.editableEvents.create,
                    delete: !!this.editableEvents.delete,
                  }
                : {
                    title: !!this.editableEvents,
                    drag: !!this.editableEvents,
                    resize: !!this.editableEvents,
                    create: !!this.editableEvents,
                    delete: !!this.editableEvents,
                  }
            },
            views() {
              return {
                years: {
                  label: this.texts.years,
                  enabled: !this.disableViews.includes('years'),
                },
                year: {
                  label: this.texts.year,
                  enabled: !this.disableViews.includes('year'),
                },
                month: {
                  label: this.texts.month,
                  enabled: !this.disableViews.includes('month'),
                },
                week: {
                  label: this.texts.week,
                  enabled: !this.disableViews.includes('week'),
                },
                day: {
                  label: this.texts.day,
                  enabled: !this.disableViews.includes('day'),
                },
              }
            },
            currentView() {
              return this.validateView(this.activeView)
            },
            enabledViews() {
              return Object.keys(this.views).filter(
                (e) => this.views[e].enabled,
              )
            },
            hasTimeColumn() {
              return this.time && this.isWeekOrDayView
            },
            isShortMonthView() {
              return this.isMonthView && 'short' === this.eventsOnMonthView
            },
            firstCellDateWeekNumber() {
              const e = this.utils.date,
                t = this.view.firstCellDate
              return e.getWeek(this.startWeekOnSunday ? e.addDays(t, 1) : t)
            },
            timeCells() {
              const e = []
              for (
                let t = this.timeFrom, n = this.timeTo;
                t < n;
                t += this.timeStep
              )
                e.push({
                  hours: Math.floor(t / 60),
                  minutes: t % 60,
                  label: this.utils.date.formatTime(t, this.TimeFormat),
                  value: t,
                })
              return e
            },
            TimeFormat() {
              return this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm')
            },
            daySplits() {
              return (this.splitDays.filter((e) => !e.hide) || []).map(
                (e, t) => ({ ...e, id: e.id || t + 1 }),
              )
            },
            hasSplits() {
              return this.daySplits.length && this.isWeekOrDayView
            },
            hasShortEvents() {
              return 'short' === this.showAllDayEvents
            },
            cellOrSplitMinWidth() {
              let e = null
              return (
                this.hasSplits && this.minSplitWidth
                  ? (e =
                      this.visibleDaysCount *
                      this.minSplitWidth *
                      this.daySplits.length)
                  : this.minCellWidth &&
                    this.isWeekView &&
                    (e = this.visibleDaysCount * this.minCellWidth),
                e
              )
            },
            allDayBar() {
              let e = this.allDayBarHeight || null
              return (
                e && !isNaN(e) && (e += 'px'),
                {
                  cells: this.viewCells,
                  options: this.$props,
                  label: this.texts.allDay,
                  shortEvents: this.hasShortEvents,
                  daySplits: (this.hasSplits && this.daySplits) || [],
                  cellOrSplitMinWidth: this.cellOrSplitMinWidth,
                  height: e,
                }
              )
            },
            minTimestamp() {
              let e = null
              return (
                this.minDate && 'string' == typeof this.minDate
                  ? (e = this.utils.date.stringToDate(this.minDate))
                  : this.minDate &&
                    this.minDate instanceof Date &&
                    (e = this.minDate),
                e ? e.getTime() : null
              )
            },
            maxTimestamp() {
              let e = null
              return (
                this.maxDate && 'string' == typeof this.maxDate
                  ? (e = this.utils.date.stringToDate(this.maxDate))
                  : this.maxDate &&
                    this.minDate instanceof Date &&
                    (e = this.maxDate),
                e ? e.getTime() : null
              )
            },
            weekDays() {
              let { weekDays: e, weekDaysShort: t = [] } = this.texts
              return (
                (e = e.slice(0).map((e, n) => ({
                  label: e,
                  ...(t.length ? { short: t[n] } : {}),
                  hide:
                    (this.hideWeekends && n >= 5) ||
                    (this.hideWeekdays.length &&
                      this.hideWeekdays.includes(n + 1)),
                }))),
                this.startWeekOnSunday && e.unshift(e.pop()),
                e
              )
            },
            weekDaysInHeader() {
              return (
                this.isMonthView ||
                (this.isWeekView &&
                  !this.minCellWidth &&
                  !(this.hasSplits && this.minSplitWidth))
              )
            },
            months() {
              return this.texts.months.map((e) => ({ label: e }))
            },
            specialDayHours() {
              return this.specialHours && Object.keys(this.specialHours).length
                ? Array(7)
                    .fill('')
                    .map((e, t) => {
                      let n = this.specialHours[t + 1] || []
                      return (
                        Array.isArray(n) || (n = [n]),
                        (e = []),
                        n.forEach(
                          ({ from: n, to: i, class: s, label: r }, o) => {
                            e[o] = {
                              day: t + 1,
                              from: [null, void 0].includes(n) ? null : 1 * n,
                              to: [null, void 0].includes(i) ? null : 1 * i,
                              class: s || '',
                              label: r || '',
                            }
                          },
                        ),
                        e
                      )
                    })
                : {}
            },
            viewTitle() {
              const e = this.utils.date
              let t = ''
              const n = this.view.startDate,
                i = n.getFullYear(),
                s = n.getMonth()
              switch (this.view.id) {
                case 'years':
                  t = this.texts.years
                  break
                case 'year':
                  t = i
                  break
                case 'month':
                  t = `${this.months[s].label} ${i}`
                  break
                case 'week': {
                  const i = this.view.endDate,
                    s = n.getFullYear()
                  let r = this.texts.months[n.getMonth()]
                  this.xsmall && (r = r.substring(0, 3))
                  let o = `${r} ${s}`
                  if (i.getMonth() !== n.getMonth()) {
                    const e = i.getFullYear()
                    let t = this.texts.months[i.getMonth()]
                    this.xsmall && (t = t.substring(0, 3)),
                      (o =
                        s === e
                          ? `${r} - ${t} ${s}`
                          : this.small
                            ? `${r.substring(0, 3)} ${s} - ${t.substring(0, 3)} ${e}`
                            : `${r} ${s} - ${t} ${e}`)
                  }
                  t = `${this.texts.week} ${e.getWeek(this.startWeekOnSunday ? e.addDays(n, 1) : n)} (${o})`
                  break
                }
                case 'day':
                  t = this.utils.date.formatDate(
                    n,
                    this.texts.dateFormat,
                    this.texts,
                  )
              }
              return t
            },
            viewCells() {
              const e = this.utils.date
              let t = [],
                n = null,
                i = !1
              this.watchRealTime || (this.now = new Date())
              const s = this.now
              switch (this.view.id) {
                case 'years':
                  ;(n = this.view.startDate.getFullYear()),
                    (t = Array.apply(null, Array(25)).map((t, i) => {
                      const r = new Date(n + i, 0, 1),
                        o = new Date(n + i + 1, 0, 1)
                      return (
                        o.setSeconds(-1),
                        {
                          startDate: r,
                          formattedDate: e.formatDateLite(r),
                          endDate: o,
                          content: n + i,
                          current: n + i === s.getFullYear(),
                        }
                      )
                    }))
                  break
                case 'year':
                  ;(n = this.view.startDate.getFullYear()),
                    (t = Array.apply(null, Array(12)).map((t, i) => {
                      const r = new Date(n, i, 1),
                        o = new Date(n, i + 1, 1)
                      return (
                        o.setSeconds(-1),
                        {
                          startDate: r,
                          formattedDate: e.formatDateLite(r),
                          endDate: o,
                          content: this.xsmall
                            ? this.months[i].label.substr(0, 3)
                            : this.months[i].label,
                          current: i === s.getMonth() && n === s.getFullYear(),
                        }
                      )
                    }))
                  break
                case 'month': {
                  const n = this.view.startDate.getMonth(),
                    s = new Date(this.view.firstCellDate)
                  ;(i = !1),
                    (t = Array.apply(null, Array(42)).map((t, r) => {
                      const o = e.addDays(s, r),
                        l = new Date(o)
                      l.setHours(23, 59, 59, 0)
                      const a = !i && e.isToday(o) && !i++
                      return {
                        startDate: o,
                        formattedDate: e.formatDateLite(o),
                        endDate: l,
                        content: o.getDate(),
                        today: a,
                        outOfScope: o.getMonth() !== n,
                        class: `vuecal__cell--day${o.getDay() || 7}`,
                      }
                    })),
                    (this.hideWeekends || this.hideWeekdays.length) &&
                      (t = t.filter((e) => {
                        const t = e.startDate.getDay() || 7
                        return !(
                          (this.hideWeekends && t >= 6) ||
                          (this.hideWeekdays.length &&
                            this.hideWeekdays.includes(t))
                        )
                      }))
                  break
                }
                case 'week': {
                  i = !1
                  const n = this.view.startDate,
                    s = this.weekDays
                  t = s
                    .map((t, s) => {
                      const r = e.addDays(
                          n,
                          this.startWeekOnSunday ? s - 1 : s,
                        ),
                        o = new Date(r)
                      o.setHours(23, 59, 59, 0)
                      const l = (r.getDay() || 7) - 1
                      return {
                        startDate: r,
                        formattedDate: e.formatDateLite(r),
                        endDate: o,
                        today: !i && e.isToday(r) && !i++,
                        specialHours: this.specialDayHours[l] || [],
                      }
                    })
                    .filter((e, t) => !s[t].hide)
                  break
                }
                case 'day': {
                  const n = this.view.startDate,
                    i = new Date(this.view.startDate)
                  i.setHours(23, 59, 59, 0)
                  const s = (n.getDay() || 7) - 1
                  t = [
                    {
                      startDate: n,
                      formattedDate: e.formatDateLite(n),
                      endDate: i,
                      today: e.isToday(n),
                      specialHours: this.specialDayHours[s] || [],
                    },
                  ]
                  break
                }
              }
              return t
            },
            visibleDaysCount() {
              return this.isDayView
                ? 1
                : 7 - this.weekDays.reduce((e, t) => e + t.hide, 0)
            },
            cellWidth() {
              return 100 / this.visibleDaysCount
            },
            cssClasses() {
              const {
                resizeAnEvent: e,
                dragAnEvent: t,
                dragCreateAnEvent: n,
              } = this.domEvents
              return {
                [`vuecal--${this.view.id}-view`]: !0,
                [`vuecal--${this.locale}`]: this.locale,
                'vuecal--no-time': !this.time,
                'vuecal--view-with-time': this.hasTimeColumn,
                'vuecal--week-numbers':
                  this.showWeekNumbers && this.isMonthView,
                'vuecal--twelve-hour': this.twelveHour,
                'vuecal--click-to-navigate': this.clickToNavigate,
                'vuecal--hide-weekends': this.hideWeekends,
                'vuecal--split-days': this.hasSplits,
                'vuecal--sticky-split-labels':
                  this.hasSplits && this.stickySplitLabels,
                'vuecal--overflow-x':
                  (this.minCellWidth && this.isWeekView) ||
                  (this.hasSplits && this.minSplitWidth),
                'vuecal--small': this.small,
                'vuecal--xsmall': this.xsmall,
                'vuecal--resizing-event': e._eid,
                'vuecal--drag-creating-event': n.event,
                'vuecal--dragging-event': t._eid,
                'vuecal--events-on-month-view': this.eventsOnMonthView,
                'vuecal--short-events':
                  this.isMonthView && 'short' === this.eventsOnMonthView,
                'vuecal--has-touch':
                  typeof window < 'u' && 'ontouchstart' in window,
              }
            },
            isYearsOrYearView() {
              return ['years', 'year'].includes(this.view.id)
            },
            isYearsView() {
              return 'years' === this.view.id
            },
            isYearView() {
              return 'year' === this.view.id
            },
            isMonthView() {
              return 'month' === this.view.id
            },
            isWeekOrDayView() {
              return ['week', 'day'].includes(this.view.id)
            },
            isWeekView() {
              return 'week' === this.view.id
            },
            isDayView() {
              return 'day' === this.view.id
            },
          },
          watch: {
            events: {
              handler(e, t) {
                this.updateMutableEvents(e), this.addEventsToView()
              },
              deep: !0,
            },
            locale(e) {
              this.loadLocale(e)
            },
            selectedDate(e) {
              this.updateSelectedDate(e)
            },
            activeView(e) {
              this.switchView(e)
            },
          },
        },
        xe = M(Me, [
          [
            'render',
            function (e, t, n, o, l, a) {
              const u = (0, i.g2)('vuecal-header'),
                c = (0, i.g2)('all-day-bar'),
                d = (0, i.g2)('weekdays-headings'),
                h = (0, i.g2)('vuecal-cell')
              return (
                (0, i.uX)(),
                (0, i.CE)(
                  'div',
                  {
                    class: (0, s.C4)(['vuecal__flex vuecal', a.cssClasses]),
                    column: '',
                    ref: 'vuecal',
                    lang: n.locale,
                  },
                  [
                    (0, i.bF)(
                      u,
                      {
                        options: e.$props,
                        'edit-events': a.editEvents,
                        'view-props': {
                          views: a.views,
                          weekDaysInHeader: a.weekDaysInHeader,
                        },
                        'week-days': a.weekDays,
                        'has-splits': a.hasSplits,
                        'day-splits': a.daySplits,
                        'switch-to-narrower-view': a.switchToNarrowerView,
                      },
                      (0, i.eX)(
                        {
                          'arrow-prev': (0, i.k6)(() => [
                            (0, i.RG)(e.$slots, 'arrow-prev', {}, () => [
                              (0, i.eW)(' '),
                              Q,
                              (0, i.eW)(' '),
                            ]),
                          ]),
                          'arrow-next': (0, i.k6)(() => [
                            (0, i.RG)(e.$slots, 'arrow-next', {}, () => [
                              (0, i.eW)(' '),
                              Z,
                              (0, i.eW)(' '),
                            ]),
                          ]),
                          'today-button': (0, i.k6)(() => [
                            (0, i.RG)(e.$slots, 'today-button', {}, () => [
                              (0, i.Lk)('span', q, (0, s.v_)(l.texts.today), 1),
                            ]),
                          ]),
                          title: (0, i.k6)(() => [
                            (0, i.RG)(
                              e.$slots,
                              'title',
                              { title: a.viewTitle, view: l.view },
                              () => [(0, i.eW)((0, s.v_)(a.viewTitle), 1)],
                            ),
                          ]),
                          _: 2,
                        },
                        [
                          e.$slots['weekday-heading']
                            ? {
                                name: 'weekday-heading',
                                fn: (0, i.k6)(({ heading: t, view: n }) => [
                                  (0, i.RG)(e.$slots, 'weekday-heading', {
                                    heading: t,
                                    view: n,
                                  }),
                                ]),
                                key: '0',
                              }
                            : void 0,
                          e.$slots['split-label']
                            ? {
                                name: 'split-label',
                                fn: (0, i.k6)(({ split: t }) => [
                                  (0, i.RG)(e.$slots, 'split-label', {
                                    split: t,
                                    view: l.view.id,
                                  }),
                                ]),
                                key: '1',
                              }
                            : void 0,
                        ],
                      ),
                      1032,
                      [
                        'options',
                        'edit-events',
                        'view-props',
                        'week-days',
                        'has-splits',
                        'day-splits',
                        'switch-to-narrower-view',
                      ],
                    ),
                    n.hideBody
                      ? (0, i.Q3)('', !0)
                      : ((0, i.uX)(),
                        (0, i.CE)('div', J, [
                          (0, i.bF)(
                            r.eB,
                            {
                              name: `slide-fade--${l.transitionDirection}`,
                              appear: n.transitions,
                            },
                            {
                              default: (0, i.k6)(() => [
                                ((0, i.uX)(),
                                (0, i.CE)(
                                  'div',
                                  {
                                    class: 'vuecal__flex',
                                    style: { 'min-width': '100%' },
                                    key: !!n.transitions && l.view.id,
                                    column: '',
                                  },
                                  [
                                    n.showAllDayEvents &&
                                    a.hasTimeColumn &&
                                    (!a.cellOrSplitMinWidth ||
                                      (a.isDayView && !n.minSplitWidth))
                                      ? ((0, i.uX)(),
                                        (0, i.Wv)(
                                          c,
                                          (0, s._B)(
                                            (0, i.v6)({ key: 0 }, a.allDayBar),
                                          ),
                                          {
                                            event: (0, i.k6)(
                                              ({ event: t, view: n }) => [
                                                (0, i.RG)(
                                                  e.$slots,
                                                  'event',
                                                  { view: n, event: t },
                                                  () => [
                                                    a.editEvents.title &&
                                                    t.titleEditable
                                                      ? ((0, i.uX)(),
                                                        (0, i.CE)(
                                                          'div',
                                                          {
                                                            key: 0,
                                                            class:
                                                              'vuecal__event-title vuecal__event-title--edit',
                                                            contenteditable: '',
                                                            onBlur: (e) =>
                                                              a.onEventTitleBlur(
                                                                e,
                                                                t,
                                                              ),
                                                            innerHTML: t.title,
                                                          },
                                                          null,
                                                          40,
                                                          ee,
                                                        ))
                                                      : t.title
                                                        ? ((0, i.uX)(),
                                                          (0, i.CE)(
                                                            'div',
                                                            {
                                                              key: 1,
                                                              class:
                                                                'vuecal__event-title',
                                                              innerHTML:
                                                                t.title,
                                                            },
                                                            null,
                                                            8,
                                                            te,
                                                          ))
                                                        : (0, i.Q3)('', !0),
                                                    !t.content ||
                                                    a.hasShortEvents ||
                                                    a.isShortMonthView
                                                      ? (0, i.Q3)('', !0)
                                                      : ((0, i.uX)(),
                                                        (0, i.CE)(
                                                          'div',
                                                          {
                                                            key: 2,
                                                            class:
                                                              'vuecal__event-content',
                                                            innerHTML:
                                                              t.content,
                                                          },
                                                          null,
                                                          8,
                                                          ne,
                                                        )),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            _: 3,
                                          },
                                          16,
                                        ))
                                      : (0, i.Q3)('', !0),
                                    (0, i.Lk)(
                                      'div',
                                      {
                                        class: (0, s.C4)([
                                          'vuecal__bg',
                                          { vuecal__flex: !a.hasTimeColumn },
                                        ]),
                                        column: '',
                                      },
                                      [
                                        (0, i.Lk)('div', ie, [
                                          a.hasTimeColumn
                                            ? ((0, i.uX)(),
                                              (0, i.CE)('div', se, [
                                                n.showAllDayEvents &&
                                                a.cellOrSplitMinWidth &&
                                                (!a.isDayView ||
                                                  n.minSplitWidth)
                                                  ? ((0, i.uX)(),
                                                    (0, i.CE)(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class:
                                                          'vuecal__all-day-text',
                                                        style: (0, s.Tr)({
                                                          height:
                                                            a.allDayBar.height,
                                                        }),
                                                      },
                                                      [
                                                        (0, i.Lk)(
                                                          'span',
                                                          null,
                                                          (0, s.v_)(
                                                            l.texts.allDay,
                                                          ),
                                                          1,
                                                        ),
                                                      ],
                                                      4,
                                                    ))
                                                  : (0, i.Q3)('', !0),
                                                ((0, i.uX)(!0),
                                                (0, i.CE)(
                                                  i.FK,
                                                  null,
                                                  (0, i.pI)(
                                                    a.timeCells,
                                                    (t, r) => (
                                                      (0, i.uX)(),
                                                      (0, i.CE)(
                                                        'div',
                                                        {
                                                          class:
                                                            'vuecal__time-cell',
                                                          key: r,
                                                          style: (0, s.Tr)(
                                                            `height: ${n.timeCellHeight}px`,
                                                          ),
                                                        },
                                                        [
                                                          (0, i.RG)(
                                                            e.$slots,
                                                            'time-cell',
                                                            {
                                                              hours: t.hours,
                                                              minutes:
                                                                t.minutes,
                                                            },
                                                            () => [
                                                              re,
                                                              (0, i.Lk)(
                                                                'span',
                                                                oe,
                                                                (0, s.v_)(
                                                                  t.label,
                                                                ),
                                                                1,
                                                              ),
                                                            ],
                                                          ),
                                                        ],
                                                        4,
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                              ]))
                                            : (0, i.Q3)('', !0),
                                          n.showWeekNumbers && a.isMonthView
                                            ? ((0, i.uX)(),
                                              (0, i.CE)('div', le, [
                                                ((0, i.uX)(),
                                                (0, i.CE)(
                                                  i.FK,
                                                  null,
                                                  (0, i.pI)(6, (t) =>
                                                    (0, i.Lk)(
                                                      'div',
                                                      {
                                                        class:
                                                          'vuecal__flex vuecal__week-number-cell',
                                                        key: t,
                                                        grow: '',
                                                      },
                                                      [
                                                        (0, i.RG)(
                                                          e.$slots,
                                                          'week-number-cell',
                                                          {
                                                            week: a.getWeekNumber(
                                                              t - 1,
                                                            ),
                                                          },
                                                          () => [
                                                            (0, i.eW)(
                                                              (0, s.v_)(
                                                                a.getWeekNumber(
                                                                  t - 1,
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                          ],
                                                        ),
                                                      ],
                                                    ),
                                                  ),
                                                  64,
                                                )),
                                              ]))
                                            : (0, i.Q3)('', !0),
                                          (0, i.Lk)(
                                            'div',
                                            {
                                              class: (0, s.C4)([
                                                'vuecal__flex vuecal__cells',
                                                `${l.view.id}-view`,
                                              ]),
                                              grow: '',
                                              wrap:
                                                !a.cellOrSplitMinWidth ||
                                                !a.isWeekView,
                                              column: !!a.cellOrSplitMinWidth,
                                            },
                                            [
                                              a.cellOrSplitMinWidth &&
                                              a.isWeekView
                                                ? ((0, i.uX)(),
                                                  (0, i.Wv)(
                                                    d,
                                                    {
                                                      key: 0,
                                                      'transition-direction':
                                                        l.transitionDirection,
                                                      'week-days': a.weekDays,
                                                      'switch-to-narrower-view':
                                                        a.switchToNarrowerView,
                                                      style: (0, s.Tr)(
                                                        a.cellOrSplitMinWidth
                                                          ? `min-width: ${a.cellOrSplitMinWidth}px`
                                                          : '',
                                                      ),
                                                    },
                                                    (0, i.eX)({ _: 2 }, [
                                                      e.$slots[
                                                        'weekday-heading'
                                                      ]
                                                        ? {
                                                            name: 'weekday-heading',
                                                            fn: (0, i.k6)(
                                                              ({
                                                                heading: t,
                                                                view: n,
                                                              }) => [
                                                                (0, i.RG)(
                                                                  e.$slots,
                                                                  'weekday-heading',
                                                                  {
                                                                    heading: t,
                                                                    view: n,
                                                                  },
                                                                ),
                                                              ],
                                                            ),
                                                            key: '0',
                                                          }
                                                        : void 0,
                                                      e.$slots['split-label']
                                                        ? {
                                                            name: 'split-label',
                                                            fn: (0, i.k6)(
                                                              ({
                                                                split: t,
                                                              }) => [
                                                                (0, i.RG)(
                                                                  e.$slots,
                                                                  'split-label',
                                                                  {
                                                                    split: t,
                                                                    view: l.view
                                                                      .id,
                                                                  },
                                                                ),
                                                              ],
                                                            ),
                                                            key: '1',
                                                          }
                                                        : void 0,
                                                    ]),
                                                    1032,
                                                    [
                                                      'transition-direction',
                                                      'week-days',
                                                      'switch-to-narrower-view',
                                                      'style',
                                                    ],
                                                  ))
                                                : a.hasSplits &&
                                                    n.stickySplitLabels &&
                                                    n.minSplitWidth
                                                  ? ((0, i.uX)(),
                                                    (0, i.CE)(
                                                      'div',
                                                      {
                                                        key: 1,
                                                        class:
                                                          'vuecal__flex vuecal__split-days-headers',
                                                        style: (0, s.Tr)(
                                                          a.cellOrSplitMinWidth
                                                            ? `min-width: ${a.cellOrSplitMinWidth}px`
                                                            : '',
                                                        ),
                                                      },
                                                      [
                                                        ((0, i.uX)(!0),
                                                        (0, i.CE)(
                                                          i.FK,
                                                          null,
                                                          (0, i.pI)(
                                                            a.daySplits,
                                                            (t, n) => (
                                                              (0, i.uX)(),
                                                              (0, i.CE)(
                                                                'div',
                                                                {
                                                                  class: (0,
                                                                  s.C4)([
                                                                    'day-split-header',
                                                                    t.class ||
                                                                      !1,
                                                                  ]),
                                                                  key: n,
                                                                },
                                                                [
                                                                  (0, i.RG)(
                                                                    e.$slots,
                                                                    'split-label',
                                                                    {
                                                                      split: t,
                                                                      view: l
                                                                        .view
                                                                        .id,
                                                                    },
                                                                    () => [
                                                                      (0, i.eW)(
                                                                        (0,
                                                                        s.v_)(
                                                                          t.label,
                                                                        ),
                                                                        1,
                                                                      ),
                                                                    ],
                                                                  ),
                                                                ],
                                                                2,
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                      ],
                                                      4,
                                                    ))
                                                  : (0, i.Q3)('', !0),
                                              n.showAllDayEvents &&
                                              a.hasTimeColumn &&
                                              ((a.isWeekView &&
                                                a.cellOrSplitMinWidth) ||
                                                (a.isDayView &&
                                                  a.hasSplits &&
                                                  n.minSplitWidth))
                                                ? ((0, i.uX)(),
                                                  (0, i.Wv)(
                                                    c,
                                                    (0, s._B)(
                                                      (0, i.v6)(
                                                        { key: 2 },
                                                        a.allDayBar,
                                                      ),
                                                    ),
                                                    {
                                                      event: (0, i.k6)(
                                                        ({
                                                          event: t,
                                                          view: n,
                                                        }) => [
                                                          (0, i.RG)(
                                                            e.$slots,
                                                            'event',
                                                            {
                                                              view: n,
                                                              event: t,
                                                            },
                                                            () => [
                                                              a.editEvents
                                                                .title &&
                                                              t.titleEditable
                                                                ? ((0, i.uX)(),
                                                                  (0, i.CE)(
                                                                    'div',
                                                                    {
                                                                      key: 0,
                                                                      class:
                                                                        'vuecal__event-title vuecal__event-title--edit',
                                                                      contenteditable:
                                                                        '',
                                                                      onBlur: (
                                                                        e,
                                                                      ) =>
                                                                        a.onEventTitleBlur(
                                                                          e,
                                                                          t,
                                                                        ),
                                                                      innerHTML:
                                                                        t.title,
                                                                    },
                                                                    null,
                                                                    40,
                                                                    ue,
                                                                  ))
                                                                : t.title
                                                                  ? ((0,
                                                                    i.uX)(),
                                                                    (0, i.CE)(
                                                                      'div',
                                                                      {
                                                                        key: 1,
                                                                        class:
                                                                          'vuecal__event-title',
                                                                        innerHTML:
                                                                          t.title,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ce,
                                                                    ))
                                                                  : (0, i.Q3)(
                                                                      '',
                                                                      !0,
                                                                    ),
                                                              !t.content ||
                                                              a.hasShortEvents ||
                                                              a.isShortMonthView
                                                                ? (0, i.Q3)(
                                                                    '',
                                                                    !0,
                                                                  )
                                                                : ((0, i.uX)(),
                                                                  (0, i.CE)(
                                                                    'div',
                                                                    {
                                                                      key: 2,
                                                                      class:
                                                                        'vuecal__event-content',
                                                                      innerHTML:
                                                                        t.content,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    de,
                                                                  )),
                                                            ],
                                                          ),
                                                        ],
                                                      ),
                                                      _: 3,
                                                    },
                                                    16,
                                                  ))
                                                : (0, i.Q3)('', !0),
                                              (0, i.Lk)(
                                                'div',
                                                {
                                                  class: 'vuecal__flex',
                                                  ref: (e) => (l.cellsEl = e),
                                                  grow: '',
                                                  wrap:
                                                    !a.cellOrSplitMinWidth ||
                                                    !a.isWeekView,
                                                  style: (0, s.Tr)(
                                                    a.cellOrSplitMinWidth
                                                      ? `min-width: ${a.cellOrSplitMinWidth}px`
                                                      : '',
                                                  ),
                                                },
                                                [
                                                  ((0, i.uX)(!0),
                                                  (0, i.CE)(
                                                    i.FK,
                                                    null,
                                                    (0, i.pI)(
                                                      a.viewCells,
                                                      (t, r) => (
                                                        (0, i.uX)(),
                                                        (0, i.Wv)(
                                                          h,
                                                          {
                                                            key: r,
                                                            options: e.$props,
                                                            'edit-events':
                                                              a.editEvents,
                                                            data: t,
                                                            'cell-width':
                                                              n.hideWeekdays
                                                                .length &&
                                                              (a.isWeekView ||
                                                                a.isMonthView) &&
                                                              a.cellWidth,
                                                            'min-timestamp':
                                                              a.minTimestamp,
                                                            'max-timestamp':
                                                              a.maxTimestamp,
                                                            'cell-splits':
                                                              (a.hasSplits &&
                                                                a.daySplits) ||
                                                              [],
                                                          },
                                                          {
                                                            'cell-content': (0,
                                                            i.k6)(
                                                              ({
                                                                events: r,
                                                                split: o,
                                                                selectCell: u,
                                                              }) => [
                                                                (0, i.RG)(
                                                                  e.$slots,
                                                                  'cell-content',
                                                                  {
                                                                    cell: t,
                                                                    view: l.view,
                                                                    goNarrower:
                                                                      u,
                                                                    events: r,
                                                                  },
                                                                  () => [
                                                                    o &&
                                                                    !n.stickySplitLabels
                                                                      ? ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          {
                                                                            key: 0,
                                                                            class:
                                                                              'split-label',
                                                                            innerHTML:
                                                                              o.label,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          pe,
                                                                        ))
                                                                      : (0,
                                                                        i.Q3)(
                                                                          '',
                                                                          !0,
                                                                        ),
                                                                    t.content
                                                                      ? ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          {
                                                                            key: 1,
                                                                            class:
                                                                              'vuecal__cell-date',
                                                                            innerHTML:
                                                                              t.content,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          fe,
                                                                        ))
                                                                      : (0,
                                                                        i.Q3)(
                                                                          '',
                                                                          !0,
                                                                        ),
                                                                    ((a.isMonthView &&
                                                                      !n.eventsOnMonthView) ||
                                                                      (a.isYearsOrYearView &&
                                                                        n.eventsCountOnYearView)) &&
                                                                    r.length
                                                                      ? ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          ve,
                                                                          [
                                                                            (0,
                                                                            i.RG)(
                                                                              e.$slots,
                                                                              'events-count',
                                                                              {
                                                                                view: l.view,
                                                                                events:
                                                                                  r,
                                                                              },
                                                                              () => [
                                                                                (0,
                                                                                i.eW)(
                                                                                  (0,
                                                                                  s.v_)(
                                                                                    r.length,
                                                                                  ),
                                                                                  1,
                                                                                ),
                                                                              ],
                                                                            ),
                                                                          ],
                                                                        ))
                                                                      : (0,
                                                                        i.Q3)(
                                                                          '',
                                                                          !0,
                                                                        ),
                                                                    !a.cellOrSplitHasEvents(
                                                                      r,
                                                                      o,
                                                                    ) &&
                                                                    a.isWeekOrDayView
                                                                      ? ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          me,
                                                                          [
                                                                            (0,
                                                                            i.RG)(
                                                                              e.$slots,
                                                                              'no-event',
                                                                              {},
                                                                              () => [
                                                                                (0,
                                                                                i.eW)(
                                                                                  (0,
                                                                                  s.v_)(
                                                                                    l
                                                                                      .texts
                                                                                      .noEvent,
                                                                                  ),
                                                                                  1,
                                                                                ),
                                                                              ],
                                                                            ),
                                                                          ],
                                                                        ))
                                                                      : (0,
                                                                        i.Q3)(
                                                                          '',
                                                                          !0,
                                                                        ),
                                                                  ],
                                                                ),
                                                              ],
                                                            ),
                                                            event: (0, i.k6)(
                                                              ({
                                                                event: r,
                                                                view: o,
                                                              }) => [
                                                                (0, i.RG)(
                                                                  e.$slots,
                                                                  'event',
                                                                  {
                                                                    view: o,
                                                                    event: r,
                                                                  },
                                                                  () => [
                                                                    a.editEvents
                                                                      .title &&
                                                                    r.titleEditable
                                                                      ? ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          {
                                                                            key: 0,
                                                                            class:
                                                                              'vuecal__event-title vuecal__event-title--edit',
                                                                            contenteditable:
                                                                              '',
                                                                            onBlur:
                                                                              (
                                                                                e,
                                                                              ) =>
                                                                                a.onEventTitleBlur(
                                                                                  e,
                                                                                  r,
                                                                                ),
                                                                            innerHTML:
                                                                              r.title,
                                                                          },
                                                                          null,
                                                                          40,
                                                                          ge,
                                                                        ))
                                                                      : r.title
                                                                        ? ((0,
                                                                          i.uX)(),
                                                                          (0,
                                                                          i.CE)(
                                                                            'div',
                                                                            {
                                                                              key: 1,
                                                                              class:
                                                                                'vuecal__event-title',
                                                                              innerHTML:
                                                                                r.title,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ye,
                                                                          ))
                                                                        : (0,
                                                                          i.Q3)(
                                                                            '',
                                                                            !0,
                                                                          ),
                                                                    !n.time ||
                                                                    r.allDay ||
                                                                    (a.isMonthView &&
                                                                      (r.allDay ||
                                                                        'short' ===
                                                                          n.showAllDayEvents)) ||
                                                                    a.isShortMonthView
                                                                      ? (0,
                                                                        i.Q3)(
                                                                          '',
                                                                          !0,
                                                                        )
                                                                      : ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          we,
                                                                          [
                                                                            (0,
                                                                            i.eW)(
                                                                              (0,
                                                                              s.v_)(
                                                                                l.utils.date.formatTime(
                                                                                  r.start,
                                                                                  a.TimeFormat,
                                                                                ),
                                                                              ),
                                                                              1,
                                                                            ),
                                                                            r.endTimeMinutes
                                                                              ? ((0,
                                                                                i.uX)(),
                                                                                (0,
                                                                                i.CE)(
                                                                                  'span',
                                                                                  be,
                                                                                  ' - ' +
                                                                                    (0,
                                                                                    s.v_)(
                                                                                      l.utils.date.formatTime(
                                                                                        r.end,
                                                                                        a.TimeFormat,
                                                                                        null,
                                                                                        !0,
                                                                                      ),
                                                                                    ),
                                                                                  1,
                                                                                ))
                                                                              : (0,
                                                                                i.Q3)(
                                                                                  '',
                                                                                  !0,
                                                                                ),
                                                                            r.daysCount >
                                                                              1 &&
                                                                            (
                                                                              r
                                                                                .segments[
                                                                                t
                                                                                  .formattedDate
                                                                              ] ||
                                                                              {}
                                                                            )
                                                                              .isFirstDay
                                                                              ? ((0,
                                                                                i.uX)(),
                                                                                (0,
                                                                                i.CE)(
                                                                                  'small',
                                                                                  _e,
                                                                                  ' +' +
                                                                                    (0,
                                                                                    s.v_)(
                                                                                      r.daysCount -
                                                                                        1,
                                                                                    ) +
                                                                                    (0,
                                                                                    s.v_)(
                                                                                      (
                                                                                        l
                                                                                          .texts
                                                                                          .day[0] ||
                                                                                        ''
                                                                                      ).toLowerCase(),
                                                                                    ),
                                                                                  1,
                                                                                ))
                                                                              : (0,
                                                                                i.Q3)(
                                                                                  '',
                                                                                  !0,
                                                                                ),
                                                                          ],
                                                                        )),
                                                                    !r.content ||
                                                                    (a.isMonthView &&
                                                                      r.allDay &&
                                                                      'short' ===
                                                                        n.showAllDayEvents) ||
                                                                    a.isShortMonthView
                                                                      ? (0,
                                                                        i.Q3)(
                                                                          '',
                                                                          !0,
                                                                        )
                                                                      : ((0,
                                                                        i.uX)(),
                                                                        (0,
                                                                        i.CE)(
                                                                          'div',
                                                                          {
                                                                            key: 3,
                                                                            class:
                                                                              'vuecal__event-content',
                                                                            innerHTML:
                                                                              r.content,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          De,
                                                                        )),
                                                                  ],
                                                                ),
                                                              ],
                                                            ),
                                                            'no-event': (0,
                                                            i.k6)(() => [
                                                              (0, i.RG)(
                                                                e.$slots,
                                                                'no-event',
                                                                {},
                                                                () => [
                                                                  (0, i.eW)(
                                                                    (0, s.v_)(
                                                                      l.texts
                                                                        .noEvent,
                                                                    ),
                                                                    1,
                                                                  ),
                                                                ],
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          [
                                                            'options',
                                                            'edit-events',
                                                            'data',
                                                            'cell-width',
                                                            'min-timestamp',
                                                            'max-timestamp',
                                                            'cell-splits',
                                                          ],
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                ],
                                                12,
                                                he,
                                              ),
                                            ],
                                            10,
                                            ae,
                                          ),
                                        ]),
                                      ],
                                      2,
                                    ),
                                  ],
                                )),
                              ]),
                              _: 3,
                            },
                            8,
                            ['name', 'appear'],
                          ),
                          l.ready
                            ? (0, i.Q3)('', !0)
                            : ((0, i.uX)(), (0, i.CE)('div', Ee, Te)),
                        ])),
                  ],
                  10,
                  K,
                )
              )
            },
          ],
        ])
    },
    6262: function (e, t) {
      'use strict'
      t.A = (e, t) => {
        const n = e.__vccOpts || e
        for (const [i, s] of t) n[i] = s
        return n
      }
    },
    9306: function (e, t, n) {
      'use strict'
      var i = n(4901),
        s = n(6823),
        r = TypeError
      e.exports = function (e) {
        if (i(e)) return e
        throw new r(s(e) + ' is not a function')
      }
    },
    8551: function (e, t, n) {
      'use strict'
      var i = n(34),
        s = String,
        r = TypeError
      e.exports = function (e) {
        if (i(e)) return e
        throw new r(s(e) + ' is not an object')
      }
    },
    9617: function (e, t, n) {
      'use strict'
      var i = n(5397),
        s = n(5610),
        r = n(6198),
        o = function (e) {
          return function (t, n, o) {
            var l = i(t),
              a = r(l)
            if (0 === a) return !e && -1
            var u,
              c = s(o, a)
            if (e && n !== n) {
              while (a > c) if (((u = l[c++]), u !== u)) return !0
            } else
              for (; a > c; c++)
                if ((e || c in l) && l[c] === n) return e || c || 0
            return !e && -1
          }
        }
      e.exports = { includes: o(!0), indexOf: o(!1) }
    },
    4527: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(4376),
        r = TypeError,
        o = Object.getOwnPropertyDescriptor,
        l =
          i &&
          !(function () {
            if (void 0 !== this) return !0
            try {
              Object.defineProperty([], 'length', { writable: !1 }).length = 1
            } catch (e) {
              return e instanceof TypeError
            }
          })()
      e.exports = l
        ? function (e, t) {
            if (s(e) && !o(e, 'length').writable)
              throw new r('Cannot set read only .length')
            return (e.length = t)
          }
        : function (e, t) {
            return (e.length = t)
          }
    },
    4576: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = i({}.toString),
        r = i(''.slice)
      e.exports = function (e) {
        return r(s(e), 8, -1)
      }
    },
    7740: function (e, t, n) {
      'use strict'
      var i = n(9297),
        s = n(5031),
        r = n(7347),
        o = n(4913)
      e.exports = function (e, t, n) {
        for (var l = s(t), a = o.f, u = r.f, c = 0; c < l.length; c++) {
          var d = l[c]
          i(e, d) || (n && i(n, d)) || a(e, d, u(t, d))
        }
      }
    },
    6699: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(4913),
        r = n(6980)
      e.exports = i
        ? function (e, t, n) {
            return s.f(e, t, r(1, n))
          }
        : function (e, t, n) {
            return (e[t] = n), e
          }
    },
    6980: function (e) {
      'use strict'
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        }
      }
    },
    6840: function (e, t, n) {
      'use strict'
      var i = n(4901),
        s = n(4913),
        r = n(283),
        o = n(9433)
      e.exports = function (e, t, n, l) {
        l || (l = {})
        var a = l.enumerable,
          u = void 0 !== l.name ? l.name : t
        if ((i(n) && r(n, u, l), l.global)) a ? (e[t] = n) : o(t, n)
        else {
          try {
            l.unsafe ? e[t] && (a = !0) : delete e[t]
          } catch (c) {}
          a
            ? (e[t] = n)
            : s.f(e, t, {
                value: n,
                enumerable: !1,
                configurable: !l.nonConfigurable,
                writable: !l.nonWritable,
              })
        }
        return e
      }
    },
    9433: function (e, t, n) {
      'use strict'
      var i = n(4475),
        s = Object.defineProperty
      e.exports = function (e, t) {
        try {
          s(i, e, { value: t, configurable: !0, writable: !0 })
        } catch (n) {
          i[e] = t
        }
        return t
      }
    },
    3724: function (e, t, n) {
      'use strict'
      var i = n(9039)
      e.exports = !i(function () {
        return (
          7 !==
          Object.defineProperty({}, 1, {
            get: function () {
              return 7
            },
          })[1]
        )
      })
    },
    4055: function (e, t, n) {
      'use strict'
      var i = n(4475),
        s = n(34),
        r = i.document,
        o = s(r) && s(r.createElement)
      e.exports = function (e) {
        return o ? r.createElement(e) : {}
      }
    },
    6837: function (e) {
      'use strict'
      var t = TypeError,
        n = 9007199254740991
      e.exports = function (e) {
        if (e > n) throw t('Maximum allowed index exceeded')
        return e
      }
    },
    9392: function (e) {
      'use strict'
      e.exports =
        ('undefined' != typeof navigator && String(navigator.userAgent)) || ''
    },
    7388: function (e, t, n) {
      'use strict'
      var i,
        s,
        r = n(4475),
        o = n(9392),
        l = r.process,
        a = r.Deno,
        u = (l && l.versions) || (a && a.version),
        c = u && u.v8
      c &&
        ((i = c.split('.')), (s = i[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1]))),
        !s &&
          o &&
          ((i = o.match(/Edge\/(\d+)/)),
          (!i || i[1] >= 74) &&
            ((i = o.match(/Chrome\/(\d+)/)), i && (s = +i[1]))),
        (e.exports = s)
    },
    8727: function (e) {
      'use strict'
      e.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ]
    },
    6518: function (e, t, n) {
      'use strict'
      var i = n(4475),
        s = n(7347).f,
        r = n(6699),
        o = n(6840),
        l = n(9433),
        a = n(7740),
        u = n(2796)
      e.exports = function (e, t) {
        var n,
          c,
          d,
          h,
          p,
          f,
          v = e.target,
          m = e.global,
          g = e.stat
        if (((c = m ? i : g ? i[v] || l(v, {}) : i[v] && i[v].prototype), c))
          for (d in t) {
            if (
              ((p = t[d]),
              e.dontCallGetSet
                ? ((f = s(c, d)), (h = f && f.value))
                : (h = c[d]),
              (n = u(m ? d : v + (g ? '.' : '#') + d, e.forced)),
              !n && void 0 !== h)
            ) {
              if (typeof p == typeof h) continue
              a(p, h)
            }
            ;(e.sham || (h && h.sham)) && r(p, 'sham', !0), o(c, d, p, e)
          }
      }
    },
    9039: function (e) {
      'use strict'
      e.exports = function (e) {
        try {
          return !!e()
        } catch (t) {
          return !0
        }
      }
    },
    616: function (e, t, n) {
      'use strict'
      var i = n(9039)
      e.exports = !i(function () {
        var e = function () {}.bind()
        return 'function' != typeof e || e.hasOwnProperty('prototype')
      })
    },
    9565: function (e, t, n) {
      'use strict'
      var i = n(616),
        s = Function.prototype.call
      e.exports = i
        ? s.bind(s)
        : function () {
            return s.apply(s, arguments)
          }
    },
    350: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(9297),
        r = Function.prototype,
        o = i && Object.getOwnPropertyDescriptor,
        l = s(r, 'name'),
        a = l && 'something' === function () {}.name,
        u = l && (!i || (i && o(r, 'name').configurable))
      e.exports = { EXISTS: l, PROPER: a, CONFIGURABLE: u }
    },
    9504: function (e, t, n) {
      'use strict'
      var i = n(616),
        s = Function.prototype,
        r = s.call,
        o = i && s.bind.bind(r, r)
      e.exports = i
        ? o
        : function (e) {
            return function () {
              return r.apply(e, arguments)
            }
          }
    },
    7751: function (e, t, n) {
      'use strict'
      var i = n(4475),
        s = n(4901),
        r = function (e) {
          return s(e) ? e : void 0
        }
      e.exports = function (e, t) {
        return arguments.length < 2 ? r(i[e]) : i[e] && i[e][t]
      }
    },
    5966: function (e, t, n) {
      'use strict'
      var i = n(9306),
        s = n(4117)
      e.exports = function (e, t) {
        var n = e[t]
        return s(n) ? void 0 : i(n)
      }
    },
    4475: function (e, t, n) {
      'use strict'
      var i = function (e) {
        return e && e.Math === Math && e
      }
      e.exports =
        i('object' == typeof globalThis && globalThis) ||
        i('object' == typeof window && window) ||
        i('object' == typeof self && self) ||
        i('object' == typeof n.g && n.g) ||
        i('object' == typeof this && this) ||
        (function () {
          return this
        })() ||
        Function('return this')()
    },
    9297: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = n(8981),
        r = i({}.hasOwnProperty)
      e.exports =
        Object.hasOwn ||
        function (e, t) {
          return r(s(e), t)
        }
    },
    421: function (e) {
      'use strict'
      e.exports = {}
    },
    5917: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(9039),
        r = n(4055)
      e.exports =
        !i &&
        !s(function () {
          return (
            7 !==
            Object.defineProperty(r('div'), 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    7055: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = n(9039),
        r = n(4576),
        o = Object,
        l = i(''.split)
      e.exports = s(function () {
        return !o('z').propertyIsEnumerable(0)
      })
        ? function (e) {
            return 'String' === r(e) ? l(e, '') : o(e)
          }
        : o
    },
    3706: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = n(4901),
        r = n(7629),
        o = i(Function.toString)
      s(r.inspectSource) ||
        (r.inspectSource = function (e) {
          return o(e)
        }),
        (e.exports = r.inspectSource)
    },
    1181: function (e, t, n) {
      'use strict'
      var i,
        s,
        r,
        o = n(8622),
        l = n(4475),
        a = n(34),
        u = n(6699),
        c = n(9297),
        d = n(7629),
        h = n(6119),
        p = n(421),
        f = 'Object already initialized',
        v = l.TypeError,
        m = l.WeakMap,
        g = function (e) {
          return r(e) ? s(e) : i(e, {})
        },
        y = function (e) {
          return function (t) {
            var n
            if (!a(t) || (n = s(t)).type !== e)
              throw new v('Incompatible receiver, ' + e + ' required')
            return n
          }
        }
      if (o || d.state) {
        var w = d.state || (d.state = new m())
        ;(w.get = w.get),
          (w.has = w.has),
          (w.set = w.set),
          (i = function (e, t) {
            if (w.has(e)) throw new v(f)
            return (t.facade = e), w.set(e, t), t
          }),
          (s = function (e) {
            return w.get(e) || {}
          }),
          (r = function (e) {
            return w.has(e)
          })
      } else {
        var b = h('state')
        ;(p[b] = !0),
          (i = function (e, t) {
            if (c(e, b)) throw new v(f)
            return (t.facade = e), u(e, b, t), t
          }),
          (s = function (e) {
            return c(e, b) ? e[b] : {}
          }),
          (r = function (e) {
            return c(e, b)
          })
      }
      e.exports = { set: i, get: s, has: r, enforce: g, getterFor: y }
    },
    4376: function (e, t, n) {
      'use strict'
      var i = n(4576)
      e.exports =
        Array.isArray ||
        function (e) {
          return 'Array' === i(e)
        }
    },
    4901: function (e) {
      'use strict'
      var t = 'object' == typeof document && document.all
      e.exports =
        'undefined' == typeof t && void 0 !== t
          ? function (e) {
              return 'function' == typeof e || e === t
            }
          : function (e) {
              return 'function' == typeof e
            }
    },
    2796: function (e, t, n) {
      'use strict'
      var i = n(9039),
        s = n(4901),
        r = /#|\.prototype\./,
        o = function (e, t) {
          var n = a[l(e)]
          return n === c || (n !== u && (s(t) ? i(t) : !!t))
        },
        l = (o.normalize = function (e) {
          return String(e).replace(r, '.').toLowerCase()
        }),
        a = (o.data = {}),
        u = (o.NATIVE = 'N'),
        c = (o.POLYFILL = 'P')
      e.exports = o
    },
    4117: function (e) {
      'use strict'
      e.exports = function (e) {
        return null === e || void 0 === e
      }
    },
    34: function (e, t, n) {
      'use strict'
      var i = n(4901)
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : i(e)
      }
    },
    6395: function (e) {
      'use strict'
      e.exports = !1
    },
    757: function (e, t, n) {
      'use strict'
      var i = n(7751),
        s = n(4901),
        r = n(1625),
        o = n(7040),
        l = Object
      e.exports = o
        ? function (e) {
            return 'symbol' == typeof e
          }
        : function (e) {
            var t = i('Symbol')
            return s(t) && r(t.prototype, l(e))
          }
    },
    6198: function (e, t, n) {
      'use strict'
      var i = n(8014)
      e.exports = function (e) {
        return i(e.length)
      }
    },
    283: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = n(9039),
        r = n(4901),
        o = n(9297),
        l = n(3724),
        a = n(350).CONFIGURABLE,
        u = n(3706),
        c = n(1181),
        d = c.enforce,
        h = c.get,
        p = String,
        f = Object.defineProperty,
        v = i(''.slice),
        m = i(''.replace),
        g = i([].join),
        y =
          l &&
          !s(function () {
            return 8 !== f(function () {}, 'length', { value: 8 }).length
          }),
        w = String(String).split('String'),
        b = (e.exports = function (e, t, n) {
          'Symbol(' === v(p(t), 0, 7) &&
            (t = '[' + m(p(t), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
            n && n.getter && (t = 'get ' + t),
            n && n.setter && (t = 'set ' + t),
            (!o(e, 'name') || (a && e.name !== t)) &&
              (l ? f(e, 'name', { value: t, configurable: !0 }) : (e.name = t)),
            y &&
              n &&
              o(n, 'arity') &&
              e.length !== n.arity &&
              f(e, 'length', { value: n.arity })
          try {
            n && o(n, 'constructor') && n.constructor
              ? l && f(e, 'prototype', { writable: !1 })
              : e.prototype && (e.prototype = void 0)
          } catch (s) {}
          var i = d(e)
          return (
            o(i, 'source') || (i.source = g(w, 'string' == typeof t ? t : '')),
            e
          )
        })
      Function.prototype.toString = b(function () {
        return (r(this) && h(this).source) || u(this)
      }, 'toString')
    },
    741: function (e) {
      'use strict'
      var t = Math.ceil,
        n = Math.floor
      e.exports =
        Math.trunc ||
        function (e) {
          var i = +e
          return (i > 0 ? n : t)(i)
        }
    },
    4913: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(5917),
        r = n(8686),
        o = n(8551),
        l = n(6969),
        a = TypeError,
        u = Object.defineProperty,
        c = Object.getOwnPropertyDescriptor,
        d = 'enumerable',
        h = 'configurable',
        p = 'writable'
      t.f = i
        ? r
          ? function (e, t, n) {
              if (
                (o(e),
                (t = l(t)),
                o(n),
                'function' === typeof e &&
                  'prototype' === t &&
                  'value' in n &&
                  p in n &&
                  !n[p])
              ) {
                var i = c(e, t)
                i &&
                  i[p] &&
                  ((e[t] = n.value),
                  (n = {
                    configurable: h in n ? n[h] : i[h],
                    enumerable: d in n ? n[d] : i[d],
                    writable: !1,
                  }))
              }
              return u(e, t, n)
            }
          : u
        : function (e, t, n) {
            if ((o(e), (t = l(t)), o(n), s))
              try {
                return u(e, t, n)
              } catch (i) {}
            if ('get' in n || 'set' in n) throw new a('Accessors not supported')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    7347: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(9565),
        r = n(8773),
        o = n(6980),
        l = n(5397),
        a = n(6969),
        u = n(9297),
        c = n(5917),
        d = Object.getOwnPropertyDescriptor
      t.f = i
        ? d
        : function (e, t) {
            if (((e = l(e)), (t = a(t)), c))
              try {
                return d(e, t)
              } catch (n) {}
            if (u(e, t)) return o(!s(r.f, e, t), e[t])
          }
    },
    8480: function (e, t, n) {
      'use strict'
      var i = n(1828),
        s = n(8727),
        r = s.concat('length', 'prototype')
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return i(e, r)
        }
    },
    3717: function (e, t) {
      'use strict'
      t.f = Object.getOwnPropertySymbols
    },
    1625: function (e, t, n) {
      'use strict'
      var i = n(9504)
      e.exports = i({}.isPrototypeOf)
    },
    1828: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = n(9297),
        r = n(5397),
        o = n(9617).indexOf,
        l = n(421),
        a = i([].push)
      e.exports = function (e, t) {
        var n,
          i = r(e),
          u = 0,
          c = []
        for (n in i) !s(l, n) && s(i, n) && a(c, n)
        while (t.length > u) s(i, (n = t[u++])) && (~o(c, n) || a(c, n))
        return c
      }
    },
    8773: function (e, t) {
      'use strict'
      var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        s = i && !n.call({ 1: 2 }, 1)
      t.f = s
        ? function (e) {
            var t = i(this, e)
            return !!t && t.enumerable
          }
        : n
    },
    4270: function (e, t, n) {
      'use strict'
      var i = n(9565),
        s = n(4901),
        r = n(34),
        o = TypeError
      e.exports = function (e, t) {
        var n, l
        if ('string' === t && s((n = e.toString)) && !r((l = i(n, e)))) return l
        if (s((n = e.valueOf)) && !r((l = i(n, e)))) return l
        if ('string' !== t && s((n = e.toString)) && !r((l = i(n, e)))) return l
        throw new o("Can't convert object to primitive value")
      }
    },
    5031: function (e, t, n) {
      'use strict'
      var i = n(7751),
        s = n(9504),
        r = n(8480),
        o = n(3717),
        l = n(8551),
        a = s([].concat)
      e.exports =
        i('Reflect', 'ownKeys') ||
        function (e) {
          var t = r.f(l(e)),
            n = o.f
          return n ? a(t, n(e)) : t
        }
    },
    7750: function (e, t, n) {
      'use strict'
      var i = n(4117),
        s = TypeError
      e.exports = function (e) {
        if (i(e)) throw new s("Can't call method on " + e)
        return e
      }
    },
    6119: function (e, t, n) {
      'use strict'
      var i = n(5745),
        s = n(3392),
        r = i('keys')
      e.exports = function (e) {
        return r[e] || (r[e] = s(e))
      }
    },
    7629: function (e, t, n) {
      'use strict'
      var i = n(6395),
        s = n(4475),
        r = n(9433),
        o = '__core-js_shared__',
        l = (e.exports = s[o] || r(o, {}))
      ;(l.versions || (l.versions = [])).push({
        version: '3.37.1',
        mode: i ? 'pure' : 'global',
        copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
        source: 'https://github.com/zloirock/core-js',
      })
    },
    5745: function (e, t, n) {
      'use strict'
      var i = n(7629)
      e.exports = function (e, t) {
        return i[e] || (i[e] = t || {})
      }
    },
    4495: function (e, t, n) {
      'use strict'
      var i = n(7388),
        s = n(9039),
        r = n(4475),
        o = r.String
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !s(function () {
          var e = Symbol('symbol detection')
          return (
            !o(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && i && i < 41)
          )
        })
    },
    5610: function (e, t, n) {
      'use strict'
      var i = n(1291),
        s = Math.max,
        r = Math.min
      e.exports = function (e, t) {
        var n = i(e)
        return n < 0 ? s(n + t, 0) : r(n, t)
      }
    },
    5397: function (e, t, n) {
      'use strict'
      var i = n(7055),
        s = n(7750)
      e.exports = function (e) {
        return i(s(e))
      }
    },
    1291: function (e, t, n) {
      'use strict'
      var i = n(741)
      e.exports = function (e) {
        var t = +e
        return t !== t || 0 === t ? 0 : i(t)
      }
    },
    8014: function (e, t, n) {
      'use strict'
      var i = n(1291),
        s = Math.min
      e.exports = function (e) {
        var t = i(e)
        return t > 0 ? s(t, 9007199254740991) : 0
      }
    },
    8981: function (e, t, n) {
      'use strict'
      var i = n(7750),
        s = Object
      e.exports = function (e) {
        return s(i(e))
      }
    },
    2777: function (e, t, n) {
      'use strict'
      var i = n(9565),
        s = n(34),
        r = n(757),
        o = n(5966),
        l = n(4270),
        a = n(8227),
        u = TypeError,
        c = a('toPrimitive')
      e.exports = function (e, t) {
        if (!s(e) || r(e)) return e
        var n,
          a = o(e, c)
        if (a) {
          if (
            (void 0 === t && (t = 'default'), (n = i(a, e, t)), !s(n) || r(n))
          )
            return n
          throw new u("Can't convert object to primitive value")
        }
        return void 0 === t && (t = 'number'), l(e, t)
      }
    },
    6969: function (e, t, n) {
      'use strict'
      var i = n(2777),
        s = n(757)
      e.exports = function (e) {
        var t = i(e, 'string')
        return s(t) ? t : t + ''
      }
    },
    6823: function (e) {
      'use strict'
      var t = String
      e.exports = function (e) {
        try {
          return t(e)
        } catch (n) {
          return 'Object'
        }
      }
    },
    3392: function (e, t, n) {
      'use strict'
      var i = n(9504),
        s = 0,
        r = Math.random(),
        o = i((1).toString)
      e.exports = function (e) {
        return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + o(++s + r, 36)
      }
    },
    7040: function (e, t, n) {
      'use strict'
      var i = n(4495)
      e.exports = i && !Symbol.sham && 'symbol' == typeof Symbol.iterator
    },
    8686: function (e, t, n) {
      'use strict'
      var i = n(3724),
        s = n(9039)
      e.exports =
        i &&
        s(function () {
          return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
              value: 42,
              writable: !1,
            }).prototype
          )
        })
    },
    8622: function (e, t, n) {
      'use strict'
      var i = n(4475),
        s = n(4901),
        r = i.WeakMap
      e.exports = s(r) && /native code/.test(String(r))
    },
    8227: function (e, t, n) {
      'use strict'
      var i = n(4475),
        s = n(5745),
        r = n(9297),
        o = n(3392),
        l = n(4495),
        a = n(7040),
        u = i.Symbol,
        c = s('wks'),
        d = a ? u['for'] || u : (u && u.withoutSetter) || o
      e.exports = function (e) {
        return r(c, e) || (c[e] = l && r(u, e) ? u[e] : d('Symbol.' + e)), c[e]
      }
    },
    4114: function (e, t, n) {
      'use strict'
      var i = n(6518),
        s = n(8981),
        r = n(6198),
        o = n(4527),
        l = n(6837),
        a = n(9039),
        u = a(function () {
          return 4294967297 !== [].push.call({ length: 4294967296 }, 1)
        }),
        c = function () {
          try {
            Object.defineProperty([], 'length', { writable: !1 }).push()
          } catch (e) {
            return e instanceof TypeError
          }
        },
        d = u || !c()
      i(
        { target: 'Array', proto: !0, arity: 1, forced: d },
        {
          push: function (e) {
            var t = s(this),
              n = r(t),
              i = arguments.length
            l(n + i)
            for (var a = 0; a < i; a++) (t[n] = arguments[a]), n++
            return o(t, n), n
          },
        },
      )
    },
    2091: function (e, t, n) {
      'use strict'
      n.d(t, {
        FN: function () {
          return y
        },
        Vx: function () {
          return D
        },
        q7: function () {
          return E
        },
      })
      var i = n(641),
        s = n(953)
      /**
       * Vue 3 Carousel 0.3.3
       * (c) 2024
       * @license MIT
       */
      const r = {
          itemsToShow: 1,
          itemsToScroll: 1,
          modelValue: 0,
          transition: 300,
          autoplay: 0,
          snapAlign: 'center',
          wrapAround: !1,
          throttle: 16,
          pauseAutoplayOnHover: !1,
          mouseDrag: !0,
          touchDrag: !0,
          dir: 'ltr',
          breakpoints: void 0,
          i18n: {
            ariaNextSlide: 'Navigate to next slide',
            ariaPreviousSlide: 'Navigate to previous slide',
            ariaNavigateToSlide: 'Navigate to slide {slideNumber}',
            ariaGallery: 'Gallery',
            itemXofY: 'Item {currentSlide} of {slidesCount}',
            iconArrowUp: 'Arrow pointing upwards',
            iconArrowDown: 'Arrow pointing downwards',
            iconArrowRight: 'Arrow pointing to the right',
            iconArrowLeft: 'Arrow pointing to the left',
          },
        },
        o = {
          itemsToShow: { default: r.itemsToShow, type: Number },
          itemsToScroll: { default: r.itemsToScroll, type: Number },
          wrapAround: { default: r.wrapAround, type: Boolean },
          throttle: { default: r.throttle, type: Number },
          snapAlign: {
            default: r.snapAlign,
            validator(e) {
              return [
                'start',
                'end',
                'center',
                'center-even',
                'center-odd',
              ].includes(e)
            },
          },
          transition: { default: r.transition, type: Number },
          breakpoints: { default: r.breakpoints, type: Object },
          autoplay: { default: r.autoplay, type: Number },
          pauseAutoplayOnHover: {
            default: r.pauseAutoplayOnHover,
            type: Boolean,
          },
          modelValue: { default: void 0, type: Number },
          mouseDrag: { default: r.mouseDrag, type: Boolean },
          touchDrag: { default: r.touchDrag, type: Boolean },
          dir: {
            default: r.dir,
            validator(e) {
              return ['rtl', 'ltr'].includes(e)
            },
          },
          i18n: { default: r.i18n, type: Object },
          settings: {
            default() {
              return {}
            },
            type: Object,
          },
        }
      function l({ config: e, slidesCount: t }) {
        const { snapAlign: n, wrapAround: i, itemsToShow: s = 1 } = e
        if (i) return Math.max(t - 1, 0)
        let r
        switch (n) {
          case 'start':
            r = t - s
            break
          case 'end':
            r = t - 1
            break
          case 'center':
          case 'center-odd':
            r = t - Math.ceil((s - 0.5) / 2)
            break
          case 'center-even':
            r = t - Math.ceil(s / 2)
            break
          default:
            r = 0
            break
        }
        return Math.max(r, 0)
      }
      function a({ config: e, slidesCount: t }) {
        const { wrapAround: n, snapAlign: i, itemsToShow: s = 1 } = e
        let r = 0
        if (n || s > t) return r
        switch (i) {
          case 'start':
            r = 0
            break
          case 'end':
            r = s - 1
            break
          case 'center':
          case 'center-odd':
            r = Math.floor((s - 1) / 2)
            break
          case 'center-even':
            r = Math.floor((s - 2) / 2)
            break
          default:
            r = 0
            break
        }
        return r
      }
      function u({ val: e, max: t, min: n }) {
        return t < n ? e : Math.min(Math.max(e, n), t)
      }
      function c({ config: e, currentSlide: t, slidesCount: n }) {
        const { snapAlign: i, wrapAround: s, itemsToShow: r = 1 } = e
        let o = t
        switch (i) {
          case 'center':
          case 'center-odd':
            o -= (r - 1) / 2
            break
          case 'center-even':
            o -= (r - 2) / 2
            break
          case 'end':
            o -= r - 1
            break
        }
        return s ? o : u({ val: o, max: n - r, min: 0 })
      }
      function d(e) {
        return e
          ? e.reduce((e, t) => {
              var n
              return t.type === i.FK
                ? [...e, ...d(t.children)]
                : 'CarouselSlide' ===
                    (null === (n = t.type) || void 0 === n ? void 0 : n.name)
                  ? [...e, t]
                  : e
            }, [])
          : []
      }
      function h({ val: e, max: t, min: n = 0 }) {
        return e > t
          ? h({ val: e - (t + 1), max: t, min: n })
          : e < n
            ? h({ val: e + (t + 1), max: t, min: n })
            : e
      }
      function p(e, t) {
        let n
        return t
          ? function (...i) {
              const s = this
              n || (e.apply(s, i), (n = !0), setTimeout(() => (n = !1), t))
            }
          : e
      }
      function f(e, t) {
        let n
        return function (...i) {
          n && clearTimeout(n),
            (n = setTimeout(() => {
              e(...i), (n = null)
            }, t))
        }
      }
      function v(e = '', t = {}) {
        return Object.entries(t).reduce(
          (e, [t, n]) => e.replace(`{${t}}`, String(n)),
          e,
        )
      }
      var m,
        g = (0, i.pM)({
          name: 'ARIA',
          setup() {
            const e = (0, i.WQ)('config', (0, s.Kh)(Object.assign({}, r))),
              t = (0, i.WQ)('currentSlide', (0, s.KR)(0)),
              n = (0, i.WQ)('slidesCount', (0, s.KR)(0))
            return () =>
              (0, i.h)(
                'div',
                {
                  class: ['carousel__liveregion', 'carousel__sr-only'],
                  'aria-live': 'polite',
                  'aria-atomic': 'true',
                },
                v(e.i18n['itemXofY'], {
                  currentSlide: t.value + 1,
                  slidesCount: n.value,
                }),
              )
          },
        }),
        y = (0, i.pM)({
          name: 'Carousel',
          props: o,
          setup(e, { slots: t, emit: n, expose: v }) {
            var m
            const y = (0, s.KR)(null),
              w = (0, s.KR)([]),
              b = (0, s.KR)(0),
              _ = (0, s.KR)(0),
              D = (0, s.Kh)(Object.assign({}, r))
            let E,
              T = Object.assign({}, r)
            const C = (0, s.KR)(
                null !== (m = e.modelValue) && void 0 !== m ? m : 0,
              ),
              k = (0, s.KR)(0),
              S = (0, s.KR)(0),
              M = (0, s.KR)(0),
              x = (0, s.KR)(0)
            let O, A
            function L() {
              ;(E = Object.assign({}, e.breakpoints)),
                (T = Object.assign(Object.assign(Object.assign({}, T), e), {
                  i18n: Object.assign(Object.assign({}, T.i18n), e.i18n),
                  breakpoints: void 0,
                })),
                N(T)
            }
            function $() {
              if (!E || !Object.keys(E).length) return
              const e = Object.keys(E)
                .map((e) => Number(e))
                .sort((e, t) => +t - +e)
              let t = Object.assign({}, T)
              e.some((e) => {
                const n = window.matchMedia(`(min-width: ${e}px)`).matches
                return n && (t = Object.assign(Object.assign({}, t), E[e])), n
              }),
                N(t)
            }
            function N(e) {
              Object.entries(e).forEach(([e, t]) => (D[e] = t))
            }
            ;(0, i.Gt)('config', D),
              (0, i.Gt)('slidesCount', _),
              (0, i.Gt)('currentSlide', C),
              (0, i.Gt)('maxSlide', M),
              (0, i.Gt)('minSlide', x),
              (0, i.Gt)('slideWidth', b)
            const R = f(() => {
              $(), j(), W()
            }, 16)
            function W() {
              if (!y.value) return
              const e = y.value.getBoundingClientRect()
              b.value = e.width / D.itemsToShow
            }
            function j() {
              _.value <= 0 ||
                ((S.value = Math.ceil((_.value - 1) / 2)),
                (M.value = l({ config: D, slidesCount: _.value })),
                (x.value = a({ config: D, slidesCount: _.value })),
                D.wrapAround ||
                  (C.value = u({ val: C.value, max: M.value, min: x.value })))
            }
            ;(0, i.sV)(() => {
              ;(0, i.dY)(() => W()),
                setTimeout(() => W(), 1e3),
                $(),
                K(),
                window.addEventListener('resize', R, { passive: !0 }),
                n('init')
            }),
              (0, i.hi)(() => {
                A && clearTimeout(A),
                  O && clearInterval(O),
                  window.removeEventListener('resize', R, { passive: !0 })
              })
            let F = !1
            const I = { x: 0, y: 0 },
              H = { x: 0, y: 0 },
              P = (0, s.Kh)({ x: 0, y: 0 }),
              V = (0, s.KR)(!1),
              B = (0, s.KR)(!1),
              U = () => {
                V.value = !0
              },
              X = () => {
                V.value = !1
              }
            function Y(e) {
              ;['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) ||
                ((F = 'touchstart' === e.type),
                F || e.preventDefault(),
                (!F && 0 !== e.button) ||
                  Z.value ||
                  ((I.x = F ? e.touches[0].clientX : e.clientX),
                  (I.y = F ? e.touches[0].clientY : e.clientY),
                  document.addEventListener(
                    F ? 'touchmove' : 'mousemove',
                    z,
                    !0,
                  ),
                  document.addEventListener(F ? 'touchend' : 'mouseup', G, !0)))
            }
            const z = p((e) => {
              ;(B.value = !0),
                (H.x = F ? e.touches[0].clientX : e.clientX),
                (H.y = F ? e.touches[0].clientY : e.clientY)
              const t = H.x - I.x,
                n = H.y - I.y
              ;(P.y = n), (P.x = t)
            }, D.throttle)
            function G() {
              const e = 'rtl' === D.dir ? -1 : 1,
                t = 0.4 * Math.sign(P.x),
                n = Math.round(P.x / b.value + t) * e
              if (n && !F) {
                const e = (t) => {
                  window.removeEventListener('click', e, !0)
                }
                window.addEventListener('click', e, !0)
              }
              q(C.value - n),
                (P.x = 0),
                (P.y = 0),
                (B.value = !1),
                document.removeEventListener(
                  F ? 'touchmove' : 'mousemove',
                  z,
                  !0,
                ),
                document.removeEventListener(F ? 'touchend' : 'mouseup', G, !0)
            }
            function K() {
              !D.autoplay ||
                D.autoplay <= 0 ||
                (O = setInterval(() => {
                  ;(D.pauseAutoplayOnHover && V.value) || J()
                }, D.autoplay))
            }
            function Q() {
              O && (clearInterval(O), (O = null)), K()
            }
            const Z = (0, s.KR)(!1)
            function q(e) {
              const t = D.wrapAround
                ? e
                : u({ val: e, max: M.value, min: x.value })
              C.value === t ||
                Z.value ||
                (n('slide-start', {
                  slidingToIndex: e,
                  currentSlideIndex: C.value,
                  prevSlideIndex: k.value,
                  slidesCount: _.value,
                }),
                (Z.value = !0),
                (k.value = C.value),
                (C.value = t),
                (A = setTimeout(() => {
                  if (D.wrapAround) {
                    const i = h({ val: t, max: M.value, min: 0 })
                    i !== C.value &&
                      ((C.value = i),
                      n('loop', {
                        currentSlideIndex: C.value,
                        slidingToIndex: e,
                      }))
                  }
                  n('update:modelValue', C.value),
                    n('slide-end', {
                      currentSlideIndex: C.value,
                      prevSlideIndex: k.value,
                      slidesCount: _.value,
                    }),
                    (Z.value = !1),
                    Q()
                }, D.transition)))
            }
            function J() {
              q(C.value + D.itemsToScroll)
            }
            function ee() {
              q(C.value - D.itemsToScroll)
            }
            const te = { slideTo: q, next: J, prev: ee }
            ;(0, i.Gt)('nav', te), (0, i.Gt)('isSliding', Z)
            const ne = (0, i.EW)(() =>
              c({ config: D, currentSlide: C.value, slidesCount: _.value }),
            )
            ;(0, i.Gt)('slidesToScroll', ne)
            const ie = (0, i.EW)(() => {
              const e = 'rtl' === D.dir ? -1 : 1,
                t = ne.value * b.value * e
              return {
                transform: `translateX(${P.x - t}px)`,
                transition: `${Z.value ? D.transition : 0}ms`,
                margin: D.wrapAround ? `0 -${_.value * b.value}px` : '',
                width: '100%',
              }
            })
            function se() {
              L(), $(), j(), W(), Q()
            }
            Object.keys(o).forEach((t) => {
              ;['modelValue'].includes(t) || (0, i.wB)(() => e[t], se)
            }),
              (0, i.wB)(
                () => e['modelValue'],
                (e) => {
                  e !== C.value && q(Number(e))
                },
              ),
              (0, i.wB)(_, j),
              n('before-init'),
              L()
            const re = {
              config: D,
              slidesCount: _,
              slideWidth: b,
              next: J,
              prev: ee,
              slideTo: q,
              currentSlide: C,
              maxSlide: M,
              minSlide: x,
              middleSlide: S,
            }
            v({
              updateBreakpointsConfigs: $,
              updateSlidesData: j,
              updateSlideWidth: W,
              initDefaultConfigs: L,
              restartCarousel: se,
              slideTo: q,
              next: J,
              prev: ee,
              nav: te,
              data: re,
            })
            const oe = t.default || t.slides,
              le = t.addons,
              ae = (0, s.Kh)(re)
            return () => {
              const e = d(null === oe || void 0 === oe ? void 0 : oe(ae)),
                t = (null === le || void 0 === le ? void 0 : le(ae)) || []
              e.forEach((e, t) => (e.props.index = t))
              let n = e
              if (D.wrapAround) {
                const t = e.map((t, n) =>
                    (0, i.E3)(t, {
                      index: -e.length + n,
                      isClone: !0,
                      key: `clone-before-${n}`,
                    }),
                  ),
                  s = e.map((t, n) =>
                    (0, i.E3)(t, {
                      index: e.length + n,
                      isClone: !0,
                      key: `clone-after-${n}`,
                    }),
                  )
                n = [...t, ...e, ...s]
              }
              ;(w.value = e), (_.value = Math.max(e.length, 1))
              const s = (0, i.h)(
                  'ol',
                  {
                    class: 'carousel__track',
                    style: ie.value,
                    onMousedownCapture: D.mouseDrag ? Y : null,
                    onTouchstartPassiveCapture: D.touchDrag ? Y : null,
                  },
                  n,
                ),
                r = (0, i.h)('div', { class: 'carousel__viewport' }, s)
              return (0, i.h)(
                'section',
                {
                  ref: y,
                  class: {
                    carousel: !0,
                    'is-sliding': Z.value,
                    'is-dragging': B.value,
                    'is-hover': V.value,
                    'carousel--rtl': 'rtl' === D.dir,
                  },
                  dir: D.dir,
                  'aria-label': D.i18n['ariaGallery'],
                  tabindex: '0',
                  onMouseenter: U,
                  onMouseleave: X,
                },
                [r, t, (0, i.h)(g)],
              )
            }
          },
        })
      ;(function (e) {
        ;(e['arrowUp'] = 'arrowUp'),
          (e['arrowDown'] = 'arrowDown'),
          (e['arrowRight'] = 'arrowRight'),
          (e['arrowLeft'] = 'arrowLeft')
      })(m || (m = {}))
      const w = {
        arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
        arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
        arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
        arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
      }
      function b(e) {
        return e in m
      }
      const _ = (e) => {
        const t = (0, i.WQ)('config', (0, s.Kh)(Object.assign({}, r))),
          n = String(e.name),
          o = `icon${n.charAt(0).toUpperCase() + n.slice(1)}`
        if (!n || 'string' !== typeof n || !b(n)) return
        const l = w[n],
          a = (0, i.h)('path', { d: l }),
          u = t.i18n[o] || e.title || n,
          c = (0, i.h)('title', u)
        return (0, i.h)(
          'svg',
          {
            class: 'carousel__icon',
            viewBox: '0 0 24 24',
            role: 'img',
            'aria-label': u,
          },
          [c, a],
        )
      }
      _.props = { name: String, title: String }
      const D = (e, { slots: t, attrs: n }) => {
        const { next: o, prev: l } = t || {},
          a = (0, i.WQ)('config', (0, s.Kh)(Object.assign({}, r))),
          u = (0, i.WQ)('maxSlide', (0, s.KR)(1)),
          c = (0, i.WQ)('minSlide', (0, s.KR)(1)),
          d = (0, i.WQ)('currentSlide', (0, s.KR)(1)),
          h = (0, i.WQ)('nav', {}),
          { dir: p, wrapAround: f, i18n: v } = a,
          m = 'rtl' === p,
          g = (0, i.h)(
            'button',
            {
              type: 'button',
              class: [
                'carousel__prev',
                !f && d.value <= c.value && 'carousel__prev--disabled',
                null === n || void 0 === n ? void 0 : n.class,
              ],
              'aria-label': v['ariaPreviousSlide'],
              onClick: h.prev,
            },
            (null === l || void 0 === l ? void 0 : l()) ||
              (0, i.h)(_, { name: m ? 'arrowRight' : 'arrowLeft' }),
          ),
          y = (0, i.h)(
            'button',
            {
              type: 'button',
              class: [
                'carousel__next',
                !f && d.value >= u.value && 'carousel__next--disabled',
                null === n || void 0 === n ? void 0 : n.class,
              ],
              'aria-label': v['ariaNextSlide'],
              onClick: h.next,
            },
            (null === o || void 0 === o ? void 0 : o()) ||
              (0, i.h)(_, { name: m ? 'arrowLeft' : 'arrowRight' }),
          )
        return [g, y]
      }
      var E = (0, i.pM)({
        name: 'CarouselSlide',
        props: {
          index: { type: Number, default: 1 },
          isClone: { type: Boolean, default: !1 },
        },
        setup(e, { slots: t }) {
          const n = (0, i.WQ)('config', (0, s.Kh)(Object.assign({}, r))),
            o = (0, i.WQ)('currentSlide', (0, s.KR)(0)),
            l = (0, i.WQ)('slidesToScroll', (0, s.KR)(0)),
            a = (0, i.WQ)('isSliding', (0, s.KR)(!1)),
            u = (0, i.EW)(() => e.index === o.value),
            c = (0, i.EW)(() => e.index === o.value - 1),
            d = (0, i.EW)(() => e.index === o.value + 1),
            h = (0, i.EW)(() => {
              const t = Math.floor(l.value),
                i = Math.ceil(l.value + n.itemsToShow - 1)
              return e.index >= t && e.index <= i
            })
          return () => {
            var s
            return (0, i.h)(
              'li',
              {
                style: { width: 100 / n.itemsToShow + '%' },
                class: {
                  carousel__slide: !0,
                  'carousel__slide--clone': e.isClone,
                  'carousel__slide--visible': h.value,
                  'carousel__slide--active': u.value,
                  'carousel__slide--prev': c.value,
                  'carousel__slide--next': d.value,
                  'carousel__slide--sliding': a.value,
                },
                'aria-hidden': !h.value,
              },
              null === (s = t.default) || void 0 === s
                ? void 0
                : s.call(t, {
                    isActive: u.value,
                    isClone: e.isClone,
                    isPrev: c.value,
                    isNext: d.value,
                    isSliding: a.value,
                    isVisible: h.value,
                  }),
            )
          }
        },
      })
    },
  },
])
//# sourceMappingURL=chunk-vendors.b0528400.js.map
