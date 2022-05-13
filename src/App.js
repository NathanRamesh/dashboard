
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
import Login from './Login';
import Overview from './Overview'
import Register from './Register';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/overview" element={
          <>
              <Header />
              <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-2 nav'>
                <Nav></Nav>
              </div>
              <div className='col-md-10'>
                <Content/>
                <Footer/>  
              </div>
            </div>
          </div>
              </>
          }>
          </Route>
          </Routes>   
      </div>

      <Routes>
        <Route path="/" element={<><Header /><Nav /><div className="w3-main" style={{ marginLeft: "200px", marginTop: '23px' }}><Login /></div></>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<><Header /><Nav /><div className="w3-main" style={{ marginLeft: "200px", marginTop: '23px' }}><Register /></div></>}></Route>
      </Routes>
      <Routes>
        <Route path="/overview" element={
        <>
        <Header />
        <Nav />
        <div className="w3-main" style={{ marginLeft: "400px", marginTop: '83px' }}>
            <Overview />
            </div>
            </>
        }> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
