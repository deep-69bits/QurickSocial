import logo from './logo.svg';
import './App.css';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className="App">
    <Router>  
    <Layout>
      <Routes>  
       <Route exact path='/' element={< Home />}></Route>  
       <Route exact path='/about' element={< About />}></Route>  
      </Routes>
      </Layout>
     </Router>
    </div>
  );
}

export default App;
