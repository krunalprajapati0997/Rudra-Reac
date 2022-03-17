import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loging from './Component/Loging'
import Registration from './Component/Registration'

import Table from './Component/Table'
import Update from './Component/Update'
import AddUser from './Component/AddUser'
import Forgate from './Component/Forgate'

function App() {
  return (
    <div className="App">
      {/* <Sd/> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Loging}/>
          <Route  exact path='/reg' component={Registration}/>
      
          <Route exact path='/forgate' component={Forgate}/>
          <Route exact path='/add' component={AddUser}/>
          <Route exact path='/table' component={Table}/>
          <Route exact path='/:id' component={Update}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
