import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login } from './Views/Login/Login'
import { Principal } from './Views/Principal/Principal'
import { SignUp } from './Views/SignUp/SignUp'
import { Profile } from './Views/Profile/Profile'
import { Lessons } from './Views/Lessons/Lessons'
import { Lesson } from './Views/Lesson/Lesson'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Principal} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/profile' component={Profile} />
        <Route path='/lessons' component={Lessons} />
        <Route path='/lesson' component={Lesson} />
      </Switch>
    </Router>
  );
}

export default App;