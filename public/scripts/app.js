"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _reactRedux = require("react-redux");
var _AppRouter = _interopRequireDefault(require("./routers/AppRouter"));
var _configureStore = _interopRequireDefault(require("./store/configureStore"));
var _expenses = _interopRequireDefault(require("./selectors/expenses"));
var _expenses2 = require("./actions/expenses");
var _filters = require("./actions/filters");
require("react-dates/initialize");
require("react-dates/lib/css/_datepicker.css");
require("normalize.css/normalize.css");
require("./styles/styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var store = (0, _configureStore["default"])();
console.log('testing');
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

var root = _client["default"].createRoot(document.getElementById('app'));
var jsx = /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_AppRouter["default"], null));
root.render(jsx);
