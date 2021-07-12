
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import PubNubReact from 'pubnub-react';
// import PropTypes from 'prop-types';
// import Hooks from './components/Hooks';
// import ClassComponents from './components/Class';
import BaseLayout from './components/layout/BaseLayout';
import Registration from './components/Register';
// import Dashboard from './components/Dashboard';
import About from './components/About';
import Listings from './components/Listings';
// import Starships from './components/Starships';
import User1 from './components/User1';
import { BrowserRouter as 
  Router, Route, Switch } from 'react-router-dom';



const saveToLocalStorage = (reduxGlobalState) => {
  
  //serialization = convert a js object to a string
  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  
  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);
  }
}

const persistedState = loadFromLocalStorage();

let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveToLocalStorage(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path='/listings' component={Listings}/>
            {/* <Route path='/starships' component={Starships}/> */}
            <Route path='/about' component={About}/>
            <Route path='/user' component={User1}/>
            {/* <Route path='/dashboard' component={Dashboard}/> */}
            {/* <Route path='/hooks' component={Hooks}/> */}
            {/* <Route path='/class' component={ClassComponents} /> */}
            <Route path='/registration' component={Registration} />
            <Route path='/listings' component={Listings}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

