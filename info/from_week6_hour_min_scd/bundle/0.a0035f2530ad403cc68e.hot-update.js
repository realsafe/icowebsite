webpackHotUpdate(0,{

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _auth = __webpack_require__(166);

var _redux = __webpack_require__(49);

var _reactRouterDom = __webpack_require__(56);

var _autobindDecorator = __webpack_require__(115);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRedux = __webpack_require__(117);

var _bluebird = __webpack_require__(116);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var actions = {
        register: _auth.register
    };

    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
};

var Register = (_dec = (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _reactRouterDom.withRouter)(_class = _dec(_class = (0, _autobindDecorator2.default)(_class = function (_PureComponent) {
    _inherits(Register, _PureComponent);

    function Register(props) {
        _classCallCheck(this, Register);

        console.log(' this.props-Register::: ', props);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

        _this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                retypedPassword: ''
            },
            submitted: false
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            this.setState({ submitted: true });

            var fields = ['firstName', 'lastName', 'password', 'retypedPassword'];

            var user = this.state.user;


            var fieldsValues = _rutils2.default.pick(fields, user);

            var _props = this.props,
                history = _props.history,
                actions = _props.actions;


            var isNotEmpty = _rutils2.default.o(_rutils2.default.eq(false), _rutils2.default.isEmpty);

            var allValid = _rutils2.default.all(function (x) {
                return _rutils2.default.isNotNil(x) && isNotEmpty(x);
            });

            var areUserInputsValid = allValid(_rutils2.default.values(fieldsValues)) && user.password === user.retypedPassword;

            _bluebird2.default.resolve(areUserInputValid).then(_rutils2.default.when(_rutils2.default.equals(true), function () {
                return actions.register(fieldsValues).then(_rutils2.default.T);
            })).then(_rutils2.default.when(_rutils2.default.equals(true), function () {
                console.log('store at registering ', _store.store.getState());
                history.push('/register/email_sent');
            })).catch(function (err) {
                console.log('Err-register', err);
                // [ TODO ] --> we should show alert
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;
            var user = this.state.user;

            this.setState({
                user: _extends({}, user, _defineProperty({}, name, value))
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                user = _state.user,
                submitted = _state.submitted;

            return _react2.default.createElement(
                'div',
                { className: 'team-section section' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-12' },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center' },
                                'Welcome to registering'
                            ),
                            _react2.default.createElement(
                                'form',
                                { name: 'form', onSubmit: this.handleSubmit },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' + (submitted && !user.firstName ? ' has-error' : '') },
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'firstName' },
                                        'First Name'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'firstName', value: user.firstName, onChange: this.handleChange }),
                                    submitted && !user.firstName && _react2.default.createElement(
                                        'div',
                                        { className: 'help-block' },
                                        'First Name is required'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' + (submitted && !user.lastName ? ' has-error' : '') },
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'lastName' },
                                        'Last Name'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'lastName', value: user.lastName, onChange: this.handleChange }),
                                    submitted && !user.lastName && _react2.default.createElement(
                                        'div',
                                        { className: 'help-block' },
                                        'Last Name is required'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' + (submitted && !user.email ? ' has-error' : '') },
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'email' },
                                        'Email'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', value: user.email, onChange: this.handleChange }),
                                    submitted && !user.email && _react2.default.createElement(
                                        'div',
                                        { className: 'help-block' },
                                        'Email is required'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' + (submitted && !user.password ? ' has-error' : '') },
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'password' },
                                        'Password'
                                    ),
                                    _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', value: user.password, onChange: this.handleChange }),
                                    submitted && !user.password && _react2.default.createElement(
                                        'div',
                                        { className: 'help-block' },
                                        'Password is required'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' + (submitted && !user.password ? ' has-error' : '') },
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'retypedPassword' },
                                        'Retype Password'
                                    ),
                                    _react2.default.createElement('input', { type: 'retypedPassword', className: 'form-control', name: 'retypedPassword', value: user.retypedPassword, onChange: this.handleChange }),
                                    submitted && !user.retypedPassword && _react2.default.createElement(
                                        'div',
                                        { className: 'help-block' },
                                        'Password is required'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn btn-primary' },
                                        'Register'
                                    ),
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/', className: 'btn btn-link' },
                                        'Cancel'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Register;
}(_react.PureComponent)) || _class) || _class) || _class);
exports.default = Register;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})