import * as React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { switchAppLanguage } from '../../common/redux/actions';
import { Language } from '../../common/types';

interface IOwnProps extends InjectedIntlProps {}
interface IDispatchProps {
  switchAppLanguage: (lang: Language) => void; 
}

class Main extends React.Component<IOwnProps & IDispatchProps> {
  constructor(props: IOwnProps & IDispatchProps) {
    super(props);
  }
  switchLanguage = () => {
    this.props.switchAppLanguage('zh');
  };
  render() {
    return (
      <div>
        <FormattedMessage id='test' />
        <br />
        <Link to="/login">Start Login</Link>
        <br />
        <button onClick={this.switchLanguage}>Switch Language</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispath: Dispatch) => bindActionCreators({
   switchAppLanguage,
}, dispath); 

export default connect(null, mapDispatchToProps)(injectIntl(Main));
