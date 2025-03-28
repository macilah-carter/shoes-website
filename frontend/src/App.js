import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import About from "./components/About";
import Home from "./components/home";
import Navigation from "./components/Navigation";
import Shop from "./components/shop";
import "./index.css";
import SingleShoe from './components/SingleShoe';
import Footer from './components/footer';
import Login from './components/login';
import Profile from './components/Profile';
import Nav from './components/nav';
import Orders from './components/Order';
import TrackOrders from './components/trackOrders';

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/profile' || location.pathname === "/nav";

  return (
    <>
      
        {!hideHeaderFooter && <Nav />}
        <Routes>
          <Route path="/single/:id" element={<SingleShoe/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/track-orders' element={<TrackOrders/>}/>
          {/* <Route path='/nav' element={<Nav/>}/> */}
          
        </Routes>
        
        {!hideHeaderFooter && <Footer />}
      
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
