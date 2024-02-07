import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/aboutPage';
import Footer from './components/footer';
import Header from './components/header';
import MainPage from './components/mainPage';
import ProfilePage from './components/profilePage';


function App() {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path='/' Component={MainPage}/>
          <Route path='/profile' Component={ProfilePage}/>
          <Route path='/about' Component={AboutPage}/>
        </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
