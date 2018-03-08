/**

  FORK FOR DIVI 3.0.93

This block possibly needs slight changes for new versions of Divi,
because internal references changes with each update.
The below module is based on the Divi "Code" module.
So you have to locate that module in the bundle.js code 
and compare it to the code below.
Here are some tipps to do this:
1. Go to the place where you added snippet1.js and identify the ID of the code block
   It might be `code: b.default` (next: find `b`)
   Scroll up until you find a line like `b = o(g)`, and directly above `g = n(397)`
   This means you have to locate module 397!
2. Now the annoying part: Find that module. You have to check each module ID via trial-and-error to identify the module.
   To see the ID of a module simply insert following JS right before a "use strict" line:
   
   console.log( 'module ID', e.id);
   
   (modules are in order, so e.g. when you found the module you have to scroll down a bit further)
   Hint: The module should be in the lower half of the file, around line 37.500
3. Now compare the code of the both modules. The top two thirds should be equal.
   Pay attention to the letters and numbers in the block `l = n(1), u = o(2), ...`
   (or simply copy-paste that block from Divi to your custom modification below)
*/

// ---- START OF MODIFICATION ---- ##CHANGE2
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var i = n(0)
      , s = n.n(i)
      , l = n(3)
      , u = n.n(l)
      , c = n(42)
      , d = (n.n(c),
    n(6))
      , p = n.n(d)
      , f = n(1)
      , _ = n(19)
      , h = n(35)
      , m = n(13)
      , g = n(18)
      , b = n(12)
      , v = n(14)
      , y = n(20)
      , w = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , k = new c.AllHtmlEntities
      , C = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.shouldComponentUpdate = u.a.shouldComponentUpdate.bind(n),
            n.defaultClasses = b.e.bind(n),
            n.componentWillMount = b.b.bind(n),
            n.componentWillReceiveProps = b.c.bind(n),
            n.inheritModuleClassName = b.i.bind(n),
            n.addModuleClassName = b.a.bind(n),
            n.removeModuleClassName = b.o.bind(n),
            n.orderClassName = b.n.bind(n),
            n.hideOnMobileClassName = b.h.bind(n),
            n.moduleClassNameArray = b.l.bind(n),
            n.moduleClassName = b.k.bind(n),
            n.moduleID = b.m.bind(n),
            n.globalSavingClass = b.g.bind(n),
            n.globalModuleClass = b.f.bind(n),
            n.textOrientationClassName = b.p.bind(n),
            n.reinitAttrsList = Object(g.a)("unifiedBackground"),
            n.reinitAttrs = {},
            n._shouldReinit = v.d.bind(n),
            n._updateLoadingStatus = v.f.bind(n),
            n._isDoneLoading = v.c.bind(n),
            n._initParallaxImageBackground = y.b.bind(n),
            n._initVideoBackground = y.c.bind(n),
            n._renderParallaxImageBackground = y.d.bind(n),
            n._renderVideoBackground = y.e.bind(n),
            n
        }
        return r(t, e),
        w(t, [{
            key: "componentDidMount",
            value: function() {
                this._initParallaxImageBackground(),
                this._initVideoBackground(),
                this._shouldReinit(),
                this._updateLoadingStatus()
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.rerender = this._shouldReinit()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                (this.rerender || this._isDoneLoading()) && (this._initVideoBackground(),
                this._initParallaxImageBackground()),
                this._updateLoadingStatus()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.attrs
                  , t = this._renderVideoBackground()
                  , n = this._renderParallaxImageBackground()
                  , o = [];
                f.a.hasValue(t) && this.addModuleClassName("et_pb_section_video"),
                f.a.isOn(e.parallax) && this.addModuleClassName("et_pb_section_parallax");
                var a = k.decode(this.props.content);
                a = a.split("\x3c!-- [et_pb_line_break_holder] --\x3e").join("\n");
                var r = p()({
                    additional_css: o,
                    moduleClassName: this.moduleClassNameArray()
                }, this.props);

                 // This is the modified/important part:
                var previewText = '', previewCallback = this.props.type + '_preview';

                if ('function' === typeof window[previewCallback]) {
                    previewText = window[previewCallback].call(this, this.props.attrs, this.props);
                } else {
                    previewText = '<div style="text-align:center;border:2px solid rgba(0,0,0,0.5);background:rgba(0,0,0,0.05);padding:10px">No Preview Available</div>';
                }

                return s.a.createElement(_.a, r, n, t, s.a.createElement("div", {
                    className: "et_pb_code_inner"
                }, s.a.createElement(h.a, {
                    text: a,
                    dangerouslySetInnerHTML: {
                        __html: previewText
                    },
                    tagName: "div",
                    module: this,
                    allModuleProps: this.props,
                    name: "content",
                    allowHTML: !0,
                    doShortcode: !0
                })))
            }
        }]),
        t
    }(i.Component);
    C.propTypes = m.a,
    t.a = C
}