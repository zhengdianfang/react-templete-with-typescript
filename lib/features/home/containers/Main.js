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
import * as React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchTestList, switchAppLanguage } from '../../common/redux/actions';
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.switchLanguage = function () {
            _this.props.switchAppLanguage('zh');
        };
        _this.fetchTestList = function () {
            _this.props.fetchTestList();
        };
        return _this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(FormattedMessage, { id: "test" }),
            React.createElement("br", null),
            React.createElement(Link, { to: "/login" }, "Start Login"),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.switchLanguage }, "Switch Language"),
            React.createElement("button", { onClick: this.fetchTestList }, "Fetch Test List")));
    };
    return Main;
}(React.Component));
var mapDispatchToProps = function (dispath) { return bindActionCreators({
    switchAppLanguage: switchAppLanguage,
    fetchTestList: fetchTestList,
}, dispath); };
export default connect(null, mapDispatchToProps)(injectIntl(Main));
//# sourceMappingURL=Main.js.map