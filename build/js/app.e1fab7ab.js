;(function (e) {
  function t(t) {
    for (
      var r, u, a = t[0], i = t[1], l = t[2], s = 0, p = [];
      s < a.length;
      s++
    )
      (u = a[s]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && p.push(o[u][0]),
        (o[u] = 0)
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
    f && f(t)
    while (p.length) p.shift()()
    return c.push.apply(c, l || []), n()
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, u = 1; u < n.length; u++) {
        var i = n[u]
        0 !== o[i] && (r = !1)
      }
      r && (c.splice(t--, 1), (e = a((a.s = n[0]))))
    }
    return e
  }
  var r = {},
    o = { app: 0 },
    c = []
  function u(e) {
    return (
      a.p +
      'js/' +
      ({}[e] || e) +
      '.' +
      { 'chunk-2d0e2760': '10c84b32', 'chunk-2d229481': '65030eef' }[e] +
      '.js'
    )
  }
  function a(t) {
    if (r[t]) return r[t].exports
    var n = (r[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports
  }
  ;(a.e = function (e) {
    var t = [],
      n = o[e]
    if (0 !== n)
      if (n) t.push(n[2])
      else {
        var r = new Promise(function (t, r) {
          n = o[e] = [t, r]
        })
        t.push((n[2] = r))
        var c,
          i = document.createElement('script')
        ;(i.charset = 'utf-8'),
          (i.timeout = 120),
          a.nc && i.setAttribute('nonce', a.nc),
          (i.src = u(e))
        var l = new Error()
        c = function (t) {
          ;(i.onerror = i.onload = null), clearTimeout(s)
          var n = o[e]
          if (0 !== n) {
            if (n) {
              var r = t && ('load' === t.type ? 'missing' : t.type),
                c = t && t.target && t.target.src
              ;(l.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + c + ')'),
                (l.name = 'ChunkLoadError'),
                (l.type = r),
                (l.request = c),
                n[1](l)
            }
            o[e] = void 0
          }
        }
        var s = setTimeout(function () {
          c({ type: 'timeout', target: i })
        }, 12e4)
        ;(i.onerror = i.onload = c), document.head.appendChild(i)
      }
    return Promise.all(t)
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (a.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function (t) {
              return e[t]
            }.bind(null, r)
          )
      return n
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return a.d(t, 'a', t), t
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a.p = ''),
    (a.oe = function (e) {
      throw (console.error(e), e)
    })
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = i.push.bind(i)
  ;(i.push = t), (i = i.slice())
  for (var s = 0; s < i.length; s++) t(i[s])
  var f = l
  c.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('cd49')
  },
  7160: function (e, t, n) {},
  bdb5: function (e, t, n) {
    'use strict'
    n('7160')
  },
  cd49: function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var r = n('7a23'),
      o = n('b4bc'),
      c = (n('94a1'), n('e472')),
      u =
        (n('13ad'),
        n('b0c0'),
        Object(r['f'])('h2', null, '这是我的第一次构建的过程', -1)),
      a = Object(r['f'])('h2', null, '看看到底会不会成功', -1),
      i = Object(r['g'])('登录'),
      l = Object(r['g'])('首页'),
      s = Object(r['g'])('哈哈哈'),
      f = Object(r['g'])('哈哈哈')
    function p(e, t, n, p, b, d) {
      var h = Object(r['A'])('router-link'),
        g = o['a'],
        j = c['a'],
        O = Object(r['A'])('router-view')
      return (
        Object(r['v'])(),
        Object(r['e'])(
          r['a'],
          null,
          [
            Object(r['f'])('h2', null, Object(r['C'])(e.$store.state.name), 1),
            u,
            a,
            Object(r['h'])(
              h,
              { to: './login' },
              {
                default: Object(r['G'])(function () {
                  return [i]
                }),
                _: 1
              }
            ),
            Object(r['h'])(
              h,
              { to: './main' },
              {
                default: Object(r['G'])(function () {
                  return [l]
                }),
                _: 1
              }
            ),
            Object(r['h'])(g, null, {
              default: Object(r['G'])(function () {
                return [s]
              }),
              _: 1
            }),
            Object(r['h'])(
              g,
              { type: 'primary' },
              {
                default: Object(r['G'])(function () {
                  return [f]
                }),
                _: 1
              }
            ),
            Object(r['h'])(j),
            Object(r['h'])(O)
          ],
          64
        )
      )
    }
    var b = Object(r['i'])({ name: 'App', components: {} }),
      d = (n('bdb5'), n('6b0d')),
      h = n.n(d)
    const g = h()(b, [['render', p]])
    var j = g,
      O = (n('d3b7'), n('3ca3'), n('ddb0'), n('6c02')),
      m = [
        { path: '/', redirect: '/login' },
        {
          path: '/login',
          component: function () {
            return n.e('chunk-2d229481').then(n.bind(null, 'dd7b'))
          }
        },
        {
          path: '/main',
          component: function () {
            return n.e('chunk-2d0e2760').then(n.bind(null, '7f94'))
          }
        }
      ],
      v = Object(O['a'])({ routes: m, history: Object(O['b'])() }),
      y = v,
      w = n('5502'),
      k = Object(w['a'])({
        state: function () {
          return { name: 'wh' }
        }
      }),
      _ = k,
      P = n('b85c'),
      x = [o['a'], c['a']]
    function S(e) {
      var t,
        n = Object(P['a'])(x)
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var r = t.value
          e.component(r.name, r)
        }
      } catch (o) {
        n.e(o)
      } finally {
        n.f()
      }
    }
    function A(e) {
      S(e)
    }
    var G = n('bc3a'),
      M = n.n(G)
    ;(M.a.defaults.baseURL = 'http://httpbin.org'),
      (M.a.defaults.timeout = 6e3),
      M.a
        .get('/get', { params: { name: 'why', age: 18 }, timeout: 2e3 })
        .then(function (e) {
          return console.log(e)
        }),
      M.a.post('/post', { data: { name: 'why' } }).then(function (e) {
        console.log(e)
      }),
      console.log('----'),
      M.a
        .all([
          M.a.get('/get', { params: { name: 'wh', age: 18 } }),
          M.a.post('./post', { data: { name: 'wh' } })
        ])
        .then(function (e) {
          console.log(e[0]), console.log(e[1])
        }),
      M.a.interceptors.request.use(
        function (e) {
          return (e.url = '/post'), e
        },
        function (e) {
          return console.log('请求发送错误'), e
        }
      ),
      M.a.interceptors.response.use(
        function (e) {
          return e.data
        },
        function (e) {
          return console.log('服务器响应失败'), e
        }
      )
    var T = Object(r['c'])(j)
    A(T), T.use(y), T.use(_), T.mount('#app'), console.log('whwh1233')
  }
})
//# sourceMappingURL=app.e1fab7ab.js.map
