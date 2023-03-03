import './App.css';
import Navbar from './components/Navbar';
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
    <Navbar/>
   </> 
  );
}

export default App;
