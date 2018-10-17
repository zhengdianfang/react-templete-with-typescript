import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
// tslint:disable-next-line:no-submodule-imports
import * as en from 'react-intl/locale-data/en';
// tslint:disable-next-line:no-submodule-imports
import * as zh from 'react-intl/locale-data/zh';
import { connect } from 'react-redux';
import translations from './translations';
addLocaleData(en.concat(zh));
var mapStateToProps = function (state) { return ({
    lang: state.miscs.lang,
}); };
export default connect(mapStateToProps)(function (props) { return (React.createElement(IntlProvider, { locale: props.lang, key: props.lang, messages: translations[props.lang] }, props.children)); });
//# sourceMappingURL=IntlComponent.js.map