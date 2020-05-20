import React, { useReducer } from 'react';
import UserContext from './UserContext/UserContext';
import userReducer from './reducer/userReducer'
import './stylesheet/style.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Logout from './components/UserAuth/Logout';
import Main from './components/Main/Main';



import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const initialState = {
  UserEmail: '',
  Password: '',
  isLoggedIn: false
}

function App() {
  let [userDet, dispatch] = useReducer(userReducer, initialState)
  return (
    <Router>
      <UserContext.Provider value={{ userDet, dispatch }}>
        <Navbar />
        <Switch>
        <Route path="/Main" component={Main}></Route>
          <section class="mainBody">
            <Route exact path="/" render={props => <Home {...props} />}></Route>
            <Route path="/Logout" render={props => <Logout {...props} />}></Route>
          </section>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
