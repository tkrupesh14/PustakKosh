import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Donor from './components/donor/donor';
import Home from './components/home';
/*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */
function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donor" element={<Donor />}></Route>
      </Routes>
    </BrowserRouter> 
   </> 
  );
}

export default App;
