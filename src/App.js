import { NavBar, Footer, Home, Movie, ErrorPage } from './components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Movie />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
      <Footer />
      {/* 10A5F5 */}
    </Router>
    </>
  );
}

export default App;
