
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Mint from './Components/Mint/Mint';
import {ToastContainer} from 'react-toastify'
import Mint_Ref from './Components/Mint_Ref/Mint_Ref';
import My_Collection from './Components/MyCollection/My_Collection';
import Navbar from './Components/Navbar/Navbar';

import axios from 'axios';
import Minting_Page from './Components/Minting_Page/Minting_Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* <Mint_Ref/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mint' element={<Mint_Ref />} />
        <Route path='/My_Collection' element={<My_Collection />} />
        <Route path='/Mint' element={<Minting_Page />} />

      


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
