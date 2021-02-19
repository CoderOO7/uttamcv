import React, { Component } from 'react';
import Home from '../Home/index';
import Welcome from '../Welcome/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      isUserNameSet: false,
    };

    this.setUserName = this.setUserName.bind(this);
  }

  setUserName(userName) {
    this.setState((prevState) => ({
      userName,
      isUserNameSet: !prevState.isUserNameSet,
    }));
  }

  render() {
    return (
      <div className='app'>
        {!this.state.isUserNameSet ? (
          <Welcome setUserName={this.setUserName} />
        ) : (
          <Home userName={this.state.userName} />
        )}
      </div>
    );
  }
}

export default App;
