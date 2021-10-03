import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login } from './Views/Login/Login'
import { Principal } from './Views/Principal/Principal'

function App() {
  return (
    <Router>

      <Switch>
        <Route path='/' exact component={Principal} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;