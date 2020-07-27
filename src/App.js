import React from 'react';

import './App.css';
import './components/CardPhilosophy/CardPhilosophy.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import SearchJobs from './pages/SearchJobs';
import DetailBlog from './pages/DetailBlog';

function App() {

  return (
    <>
      <Header home={Home} search={SearchJobs} detailBlog={DetailBlog} />
    </>
  );
}

export default App;







