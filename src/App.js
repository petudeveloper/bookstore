import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route path="/Categories" component={Categories} />
  </Router>
);

export default App;
