import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../src/pages/Home'
import History from '../src/pages/History'
import './styles/global.scss';
import NavBar from './cmps/NavBar';
import DataContextProvider from './contexts/WeightContext';
import Months from './pages/Months';
import Footer from './cmps/Footer';

const history = createBrowserHistory();
function App() {

  return (
    <BrowserRouter history={history}>
    <DataContextProvider>
      <NavBar></NavBar>
      <Switch>
        <Route path="/history" component={History} exact></Route>
        <Route path="/months" component={Months} exact></Route>
        <Route path="/" component={Home} exact></Route>
      </Switch>
      <Footer></Footer>
      </DataContextProvider>
    </BrowserRouter>

  );  
}

export default App;
