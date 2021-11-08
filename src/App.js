
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import ExceptionalDentalCare from './pages/ExceptionalDentalCare/ExceptionalDentalCare';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/make-admin">
              <MakeAdmin></MakeAdmin>
            </Route>
            {/* <Route exact path="/exceptionalDentalCare">
            <ExceptionalDentalCare></ExceptionalDentalCare>
          </Route> */}
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
