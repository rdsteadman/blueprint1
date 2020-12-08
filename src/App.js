import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import PrototypePage from './components/pages/PrototypePage';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";


function App() {
  return (
    <div className="wrapper">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/prototype" exact component={PrototypePage} />
    </div>

  );
}

function App_old4() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body chord-editor" style={{ marginTop: "10px", paddingTop: "10px" }} >
        <NavTree />
        <Body />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function App_old3() {
  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content" style={{ padding: "1em" }}>
            <div className="workspace">
              <Route exact path="/songs" render={(props) => {
                return <SongList songs={this.state.songs} />
              }} />
              <Route path="/songs/:songId" render={(props) => {
                const song = this.state.songs[props.match.params.songId];
                return (
                  song
                    ? <ChordEditor song={song} updateSong={this.updateSong} />
                    : <h1>Song not found</h1>
                )
              }} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3>Hello</h3>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

//export default App;
export default connect(mapStateToProps)(App);
