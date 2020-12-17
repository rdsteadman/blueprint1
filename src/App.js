//import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import PrototypePage from './components/pages/PrototypePage';
import VersionPage from './components/pages/VersionPage';
import DashboardPage from './components/pages/DashboardPage';
import BPTest1Page from './components/pages/BPTest1Page';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
//import PropTypes from 'prop-types';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


function App() {
  return (
    <div className="wrapper">
      <Route path="/" exact component={HomePage} />
      <GuestRoute path="/login" exact component={LoginPage} />
      <GuestRoute path="/signup" exact component={SignupPage} />
      <UserRoute path="/dashboard" exact component={DashboardPage} />
      <Route path="/prototype" exact component={PrototypePage} />
      <Route path="/version" exact component={VersionPage} />
      <Route path="/bptest1" exact component={BPTest1Page} />
    </div>
  );
}


//  App.propTypes = {
//    /*location: PropTypes.shape({
//      pathname: PropTypes.string.isRequired
//    }).isRequired,*/
//    isAuthenticated: PropTypes.bool.isRequired
//  };


// function mapStateToProps(state) {
//   return {
//     isAuthenticated: !!state.user.email
//   };
// }

export default App;
//export default connect(mapStateToProps)(App);
