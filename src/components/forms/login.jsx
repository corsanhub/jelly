import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <form name="login">
          Usuario: <input type="text" />
          Password: <input type="password" />
          </form>
        </div>
      );
    }
}

export default Login;
