// src/App.js
import React ,{Component} from 'react';
import './App.css';
import Auth from './components/login';

class App extends Component {
  constructor(props) {     //constructor, that initializes the default state.
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch('http://localhost:9000/')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }
  render(){
    return (
      <div className="App">
        <Auth />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
  
}

export default App;
