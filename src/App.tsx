import { message } from 'antd';
import { isEmpty, isEqual } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { clearErrorMessage } from './features/common/redux/actions';
import { IRootStates } from './features/common/types';

interface IOwnProps {
  children: React.ReactElement<any>;
}
interface IStateProps {
  errorMessage: string;
}

interface IDispatchProps {
  clearErrorMessage: () => void;
}

type IProps = IOwnProps & IStateProps & IDispatchProps;

class App extends React.Component<IProps> {

  componentWillReceiveProps(nextProps: IProps) {
    if (this.isReceivceNewErrorMessage(this.props.errorMessage, nextProps.errorMessage)) {
      message.error(nextProps.errorMessage, 2, this.props.clearErrorMessage);
    }
  }

  isReceivceNewErrorMessage = (oldErrorMessage: string, newErrorMessage: string): boolean =>
   !isEmpty(newErrorMessage) && !isEqual(oldErrorMessage, newErrorMessage)

  render() {
    return (
      <div>
          {this.props.children}
        </div>
    );
  }
}
const mapStateToProps = (state: IRootStates) => ({
  errorMessage: state.miscs.error,
});
const mapDispatchToProps = (dispath: Dispatch) => bindActionCreators({
  clearErrorMessage,
}, dispath);
export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(App);
