import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import logo from './logo.svg';
import Greeting from './components/Greeting/greeting';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="img-con">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>

);

export default App;
