import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App =()=> {
  const apikey= 'd8b176050b0f4f77b9aa8b9b8f67e0c3';

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"> <News pageSize={6} country="in" category="general" key="general" apikey={apikey} /> </Route>
            <Route exact path="/business"> <News pageSize={6} country="in" category="business" key="general"apikey={apikey} /> </Route>
            <Route exact path="/sports"> <News pageSize={6} country="in" category="sports" key="sports" apikey={apikey}/> </Route>
            <Route exact path="/entertainment"> <News pageSize={6} country="in" category="entertainment" key="entertainment" apikey={apikey} /> </Route>
            <Route exact path="/technology"> <News pageSize={6} country="in" category="technology" key="technology" apikey={apikey}/> </Route>
            <Route exact path="/health"> <News pageSize={6} country="in" category="health" key="health" apikey={apikey}/> </Route>
            <Route exact path="/science"> <News pageSize={6} country="in" category="science" key="science" apikey={apikey}/> </Route>
          </Switch>
        </div>
      </Router>
    )
  
}

export default App