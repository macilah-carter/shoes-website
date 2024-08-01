import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About";
import Home from "./components/home";
import Navigation from "./components/Navigation";
import Shop from "./components/shop";
import "./index.css";
import SingleShoe from './components/SingleShoe';
import Footer from './components/footer';
import Login from './components/login';
import Profile from './components/Profile';

function App() {

  return (
    <>
      <Router>
          <Navigation />
        <Routes>
          <Route path="/single/:id" element={<SingleShoe/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
