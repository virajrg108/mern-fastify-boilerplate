import React from 'react';
import { useHistory } from "react-router-dom";
// import history from '../../history';

function Home() {
  let history = useHistory();
  const gotoLogin = () => {
    history.push('/login');
  }
  return (
    <div>Home
      <button onClick={gotoLogin}>Go to login</button>
    </div>
  )
}

export default Home;