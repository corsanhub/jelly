import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../../components/forms/login.jsx';


class App extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <Login />
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Facebook</li>
          </ul>
        </div>
      );
    }
}

export default App;
