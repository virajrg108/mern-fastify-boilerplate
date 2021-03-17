import React from 'react';
import { withRouter } from "react-router-dom"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { history: this.props.history };
  }
  gotoLogin = () => {
    this.state.history.push('/login');
  }
  render() {
    return (
      <div>Home
        <button onClick={this.gotoLogin}>Go to login</button>
      </div>
    )
  }
}

export default withRouter(Home);