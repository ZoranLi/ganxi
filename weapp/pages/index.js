"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  data: {},
  computed: {},
  methods: {
    handleViewTap: function handleViewTap() {
      console.log('ss');
    }
  },
  created: function created() {}
}, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {}, models: {} });