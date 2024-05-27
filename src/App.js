
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import SignUpForm from './SignUpForm';
import AboutUs from './About';
import HomePage from './home';
import MenuPage from './menu';
import OrderFood from './OrderFood';
import Login from './Login';
import logo from './1600w-ZQLGomV0knk.webp';
import { AuthProvider } from './AuthContext';
import TableBookingForm from './order';
import PaymentPage from './PaymentPage';
import AdminDashboard from './Admin/AdminDashboard';
import BookedTablesReport from './booktbl';
import OrdersReport from './orders';
import Register from './signup';
import { NotFound } from './notfound';



const handleLogoClick = () => {
  // Add functionality here, such as redirecting users to another page
  // For example:
  window.location.href = '/'; // Redirect to the home page
};




function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Router>
      <nav className="navbar">
    
      <div className="logo" onClick={handleLogoClick}> {/* Add onClick event */}
      <img src={logo} alt="RESTRO" /> {/* Use the imported logo */}
    
        </div>
            <div className="navbar-items">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
             
          
              <Link to="/orderfood">Order Food</Link>
              <Link to="/book">Book Table</Link>
              <Link to="/signup">SignUp</Link>
              <Link to="/aboutUs">AboutUs</Link>
             
              <Link to="/pay"></Link>
              <Link to="/admin"></Link>
              <Link to="/urlpattern2"></Link>
          <Link to="/urlpattern3"></Link>
          <Link to="/urlpattern4"></Link>
          <Link to="/urlpattern1"></Link>

              
              
            </div>
          </nav>
       
      
         <Routes>
         <Route path='/' Component={HomePage}> </Route>
         <Route path='/orderfood' Component={OrderFood}> </Route>
         <Route path='/menu' Component={MenuPage}></Route>
         <Route path='/signup' Component={SignUpForm}> </Route>
          <Route path='/aboutUs' Component={AboutUs}></Route>
         <Route path='/book' Component={TableBookingForm}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/pay' Component={ PaymentPage}></Route>
          <Route path='urlpattern1' Component={Login}></Route>
          <Route path='urlpattern2' Component={BookedTablesReport}></Route>
          <Route path='urlpattern3' Component={OrdersReport}></Route>
          <Route path='urlpattern4' Component={Register}></Route>
          <Route path='*' Component={NotFound}></Route>
          <Route path='/admin' Component={AdminDashboard}></Route>

         


          
          
          
        

        </Routes>





      </Router>
      </AuthProvider>

      
    </div>
   
  );
}

export default App;
