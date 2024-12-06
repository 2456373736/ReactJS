import './App.css';
import Navbar from './ETP/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './ETP/Home';
import About from './ETP/About';
import Contact from './ETP/Contact';
// import Navbar from './practice/Navbar';
// import Home from './practice/Home';
// import About from './practice/About';
// import OrderSum from './practice/OrderSum';
// import NoMatch from './practice/NoMatch';
// import Products from './practice/products';
// import Featured from './practice/featured';
// import Newly from './practice/newly';
// import Users from './practice/Users';
// import UserDetails from './practice/UserDetails';
// import Profile from './practice/Profile';

// import Calculator from './Questions/calculator';
// import CountdownTimer from './Questions/Countdowm';
// import Bleh from './bleh'
// import YoutubeForm from './Forms/YoutubeForm';
// import Axiosget from './Questions/API_Fetching/axiosget';
// import Counter from './practice/Counter';
// import Welcome from './practice/Welcome';
// import ProcessData from './practice/ProcessData';
// import Theme from './practice/Theme';


function App() {
  return (
    <>

    <div className="App">
      <header className="App-header">
        

    <Navbar/>

    <Routes>

    <Route path = '/' element={<Home/>}/>
    <Route path = 'about' element ={<About/>}/>
    <Route path = 'contact' element= {<Contact/>}/>

    </Routes>



      {/* <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='about' element= {<About/>}/>
        <Route path='order-summary' element= {<OrderSum/>}/> */}
        {/*Nested Routes */}
        {/* <Route path='products' element={<Products/>}> */}
        {/* Index Routes */}
          {/* <Route index element={<Featured/>}/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<Newly/>}/>
        </Route>
        <Route path='users' element={<Users/>}/>
        <Route path= '*' element= {<NoMatch/>} /> */}
        {/* Dynamic Routing */}
        {/* <Route path='users/:userId' element={<UserDetails/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes> */}
      {/* Component Calling:  */}
      {/* <Bleh/> */}
      {/* <CountdownTimer/> */}
      {/* <Axiosget/>   */}
      {/* <Counter/> */}
      {/* <Welcome/> */}
      {/* <ProcessData/> */}
      {/* <Theme/> */}
      {/* <YoutubeForm/> */}
      {/* <Calculator/> */}

      </header>
    </div>
    </>
  );
}


export default App;
