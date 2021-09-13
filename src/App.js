import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './bootstrap.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Pay from './pages/Pay';
import TopUp from './pages/TopUp';
import Settings from './pages/Settings';
import ForgetPassword from './pages/ForgetPassword';

function App() {
  return (
    <div className="App">
     
     <Router>
 
    <Switch>
    <Route path="/" exact component={Pay} />


    <Route path="/login" component={Login} />

    <Route path="/pay" component={Pay} />

    <Route path="/settings" component={Settings} />

    <Route path="/forgot-password" component={ForgetPassword} />

    <Route path="/topup" component={TopUp} />
 
    <Route path="/register" component={Register} />


    




    </Switch>
    </Router>

    </div>
  );
}

export default App;
