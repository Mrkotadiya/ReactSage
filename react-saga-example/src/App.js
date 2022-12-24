import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import {Routes,Route} from "react-router-dom"
import Cart from './Components/Cart';


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route/>
      </Routes>
        
        {/* <Main/> */}
    </div>
  );
}

export default App;
