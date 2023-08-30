// import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import userList from './pages/userList/userList';

function App() {
  return (
    <Router >
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/users'element={<userList/>}/>    
        </Routes>     
      </div>        
    </Router>
  );
}

export default App;
