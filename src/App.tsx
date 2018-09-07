import * as React from 'react';

interface IProps { 
  children: React.ReactElement<any>;
}

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div>
          {this.props.children}
        </div>
    );
  }
}

export default App;
