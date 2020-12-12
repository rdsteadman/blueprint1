import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import PrototypePage from './components/pages/PrototypePage';
import DashboardPage from './components/pages/DashboardPage';
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
      <Route path="/prototype" exact component={PrototypePage} />
      <UserRoute path="/dashboard" exact component={DashboardPage} />
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
