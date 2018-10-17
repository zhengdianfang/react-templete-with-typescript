var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { message } from 'antd';
import { isEmpty, isEqual } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearErrorMessage } from './features/common/redux/actions';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isReceivceNewErrorMessage = function (oldErrorMessage, newErrorMessage) {
            return !isEmpty(newErrorMessage) && !isEqual(oldErrorMessage, newErrorMessage);
        };
        return _this;
    }
    App.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.isReceivceNewErrorMessage(this.props.errorMessage, nextProps.errorMessage)) {
            message.error(nextProps.errorMessage, 2, this.props.clearErrorMessage);
        }
    };
    App.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) { return ({
    errorMessage: state.miscs.error,
}); };
var mapDispatchToProps = function (dispath) { return bindActionCreators({
    clearErrorMessage: clearErrorMessage,
}, dispath); };
export default connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map