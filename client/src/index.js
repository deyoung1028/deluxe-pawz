import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import Reducer from './store/reducers/reducer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Register';
import UserLogin from './components/UserLogin';
import AddPet from './components/AddPet';
import BaseLayout from './components/BaseLayout'; 
import Profile from './pages/Profile';
import Services from './components/Services';
import AddServices from './components/AddServices';
import About from './components/About';



const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
              <Route exact path = '/' component={Home}/>
              <Route path = '/login' component = {UserLogin}/>
              <Route path = '/profile' component = {Profile}/>
              <Route path = '/register' component = {Register}/> 
              <Route path = '/add-pet' component = {AddPet}/>
              <Route path = '/services' component = {Services}/>
              <Route path = '/About' component = {About}/>
              <Route path = '/AddServices' component = {AddServices}/>
           </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
