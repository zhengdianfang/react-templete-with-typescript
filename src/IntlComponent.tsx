import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
// tslint:disable-next-line:no-submodule-imports
import * as en from 'react-intl/locale-data/en';
// tslint:disable-next-line:no-submodule-imports
import * as zh from 'react-intl/locale-data/zh';
import { connect } from 'react-redux';
import { IRootStates } from './features/common/types';
import translations from './translations';

addLocaleData([ ...en, ...zh ]);

interface IOwnProps {
  children: React.ReactElement<any>;
}

interface IStateProps {
  lang: string;
}

const mapStateToProps = (state: IRootStates) => ({
  lang: state.miscs.lang,
});

export default connect<IStateProps, {}, IOwnProps>(mapStateToProps)((props: IStateProps & IOwnProps) => (
  <IntlProvider
    locale={props.lang}
    key={props.lang}
    messages={translations[props.lang]}
  >
    {props.children}
  </IntlProvider>
));
