import * as React from 'react';
import { injectIntl, FormattedMessage, InjectedIntlProps } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchTestList, switchAppLanguage } from '../../common/redux/actions';
import { Language } from '../../common/types';

interface IOwnProps extends InjectedIntlProps {}
interface IDispatchProps {
  switchAppLanguage: (lang: Language) => void;
  fetchTestList: () => void;
}

class Main extends React.Component<IOwnProps & IDispatchProps> {
  constructor(props: IOwnProps & IDispatchProps) {
    super(props);
  }
  switchLanguage = () => {
    this.props.switchAppLanguage('zh');
  }
  fetchTestList = () => {
    this.props.fetchTestList();
  }
  render() {
    return (
      <div>
        <FormattedMessage id="test" />
        <br />
        <Link to="/login">Start Login</Link>
        <br />
        <button onClick={this.switchLanguage}>Switch Language</button>
        <button onClick={this.fetchTestList}>Fetch Test List</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispath: Dispatch) => bindActionCreators({
   switchAppLanguage,
   fetchTestList,
}, dispath);

export default connect(null, mapDispatchToProps)(injectIntl(Main));
