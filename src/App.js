import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Api key: d8b176050b0f4f77b9aa8b9b8f67e0c3

const App =()=> {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"> <News pageSize={6} country="in" category="general" key="general"  /> </Route>
            <Route exact path="/business"> <News pageSize={6} country="in" category="business" key="general" /> </Route>
            <Route exact path="/sports"> <News pageSize={6} country="in" category="sports" key="sports" /> </Route>
            <Route exact path="/entertainment"> <News pageSize={6} country="in" category="entertainment" key="entertainment" /> </Route>
            <Route exact path="/technology"> <News pageSize={6} country="in" category="technology" key="technology" /> </Route>
            <Route exact path="/health"> <News pageSize={6} country="in" category="health" key="health" /> </Route>
            <Route exact path="/science"> <News pageSize={6} country="in" category="science" key="science" /> </Route>
          </Switch>
        </div>
      </Router>
    )
  
}

export default App