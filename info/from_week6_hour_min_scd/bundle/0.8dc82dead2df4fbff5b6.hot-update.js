webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TopBar = __webpack_require__(427);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Footer = __webpack_require__(635);

var _Footer2 = _interopRequireDefault(_Footer);

var _Login = __webpack_require__(636);

var _Login2 = _interopRequireDefault(_Login);

var _ForgotPassword = __webpack_require__(834);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _Register = __webpack_require__(836);

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(837);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _reactRedux = __webpack_require__(125);

var _store = __webpack_require__(84);

var _react3 = __webpack_require__(838);

var _reactRouterDom = __webpack_require__(45);

var _PrivateRoute = __webpack_require__(839);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TopBar2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/',
            render: function render(props) {
              return auth.isLoggedIn() ? _react2.default.createElement(Redirect, { to: { pathname: '/dashboard', state: { from: props.location } } }) : _react2.default.createElement(Redirect, { to: { pathname: '/login', state: { from: props.location } } });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/password_reset', component: _ForgotPassword2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
          _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard', component: _Dashboard2.default })
        )
      );
    }
  }]);

  return App;
}(_react.PureComponent);

var AppWrapper = function (_PureComponent2) {
  _inherits(AppWrapper, _PureComponent2);

  function AppWrapper(props) {
    _classCallCheck(this, AppWrapper);

    return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this, props));
  }

  _createClass(AppWrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store.store },
        _react2.default.createElement(
          _react3.PersistGate,
          {
            loading: _react2.default.createElement(
              'div',
              null,
              'I am loading'
            ),
            persistor: _store.persistor },
          _react2.default.createElement(App, null)
        )
      );
    }
  }]);

  return AppWrapper;
}(_react.PureComponent);

exports.default = AppWrapper;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})