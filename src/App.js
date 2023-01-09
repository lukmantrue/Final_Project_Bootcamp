import React from 'react';

// import './App.css';
// import logo from './presentation.png';

// import Coba from './Coba';
// import HeaderNavbar from './Components/Header/Navbar';
import Header from './Components/Header';
import Main from './Components/Main/index';
import Footer from './Components/Footer/index';



// function onClick(nama){
//   alert(nama)
// }

function App() {
  return (
    <>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Header/>
      <Main/>
      <Footer/>

    </>
  );
}

export default App;
