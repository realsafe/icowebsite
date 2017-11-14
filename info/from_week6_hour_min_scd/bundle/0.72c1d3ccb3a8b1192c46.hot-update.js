webpackHotUpdate(0,{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(15), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crypto = exports.auth = undefined;

var _bluebird = __webpack_require__(73);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _rutils = __webpack_require__(35);

var _rutils2 = _interopRequireDefault(_rutils);

var _store = __webpack_require__(108);

var _api = __webpack_require__(1021);

var _api2 = _interopRequireDefault(_api);

var _crypto = __webpack_require__(1025);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newRegistry = false;

console.log('crypto::: ', _crypto2.default);

var rejectIfError = _rutils2.default.curry(function (fn, res) {

  var go = _rutils2.default.pipe(JSON.parse, _rutils2.default.cond([[_rutils2.default.o(_rutils2.default.isNotNil, _rutils2.default.path(['data', 'httpCode'])), function (r) {
    return _bluebird2.default.reject(r.data);
  }], [_rutils2.default.T, fn]]));

  return go(res);
});

var login = function login(credentials) {
  var api = (0, _api2.default)();

  return api.post('session', credentials).then(rejectIfError(function (res) {
    var data = res.data,
        token = res.token;


    return {
      user: data.initialData.user,
      token: token
    };
  }));
};

var register = function register(data) {
  var api = (0, _api2.default)();

  return api.post('signup', data).then(rejectIfError(_rutils2.default.K(true)));
};

var logOut = function logOut(token) {
  var api = (0, _api2.default)(token);
  return api.put('logout');
};

var auth = {
  login: login,
  register: register,
  logout: function logout(spec) {
    return _bluebird2.default.resolve('Logged out');
  },
  isLoggedIn: function isLoggedIn() {
    return _store.store.getState().user.isLoggedIn;
  },
  isNewRegistry: function isNewRegistry() {
    return newRegistry;
  },
  setNewRegistryStatus: function setNewRegistryStatus(s) {
    newRegistry = s;
  }
};

exports.auth = auth;
exports.crypto = _crypto2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})