import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


//router navigation goes here instead of 'HomePage' in the future

function App() {
  return (
    <div className='App' style={{backgroundColor: '#'}}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>

    </div>
  );
}

export default App;
