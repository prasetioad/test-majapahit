import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux'
import store  from './redux/store';
import Home from '../src/page/home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {

  return (
    <Provider store ={store}>
      <BrowserRouter>
        <Switch>
          <Home />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
