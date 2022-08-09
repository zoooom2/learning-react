import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useGlobalContext } from './context';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route
          exact
          path='/singlecocktail/:drinkID'
          element={<SingleCocktail />}
        />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
