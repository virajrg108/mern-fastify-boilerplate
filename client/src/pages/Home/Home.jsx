import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
};

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
        {this.props.count}
        <button onClick={this.props.handleIncrementClick}>Inc</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));