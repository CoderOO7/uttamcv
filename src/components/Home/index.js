import React, { Component } from 'react';
import PersonalDetails from '../PersonalDetails/index';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userName } = this.props;
    return (
      <div>
        <PersonalDetails userName={userName} />
      </div>
    );
  }
}

export default Home;
