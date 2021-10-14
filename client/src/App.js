import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Upload from './pages/Upload';
import Post from './pages/Post';
import Loading from './components/Loading/Loading'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/upload" exact component={Upload}/>
          <Route path="/post" exact component={Post}/>
          <Route path="/loading" exact component={Loading}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
