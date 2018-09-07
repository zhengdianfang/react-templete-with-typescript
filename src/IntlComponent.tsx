import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';
import translations from './translations';
import { connect } from 'react-redux';
import { IRootStates } from './features/common/types';

addLocaleData([ ...en, ...zh ]);

interface IOwnProps {
  children: React.ReactElement<any>;
}

interface IStateProps {
  lang: string;
}

const mapStateToProps = (state: IRootStates) => ({
  lang: state.miscs.lang,
})

export default connect<IStateProps, {}, IOwnProps>(mapStateToProps)((props: IStateProps & IOwnProps) => (
  <IntlProvider
    locale={props.lang}
    key={props.lang}
    messages={translations[props.lang]}
  >
    {props.children} 
  </IntlProvider> 
));