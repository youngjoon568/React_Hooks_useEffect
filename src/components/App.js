import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StartTimer from './view/StartTimer';
import UpCount from './view/UpCount';
import "./css/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/upcount">upcount</Link>
      <Link to="/starttimer">starttimer</Link>
      <Routes>
        <Route path='/upcount' element={<UpCount />} />
        <Route path='/starttimer' element={<StartTimer />} />
      </Routes>
    </BrowserRouter>
  );
};