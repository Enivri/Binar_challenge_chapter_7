import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

//page
import Home from './components/home'
import Filter from './components/filter'
import Register from './components/register'
import Login from './components/login'

//styling
import GlobalStyle from "./globalStyle";

import { getData } from "./store/carSlice";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const allCars = useSelector(state => state.cars.allCars)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getData())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/filter' element={<Filter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
