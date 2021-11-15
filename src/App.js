import './App.css';
import Card from './components/Card';
import Logo from './assets/Logo.png';

function App() {
  return (
    <>
     <div className='MainContainer'>
        <img src={Logo} className="NavLogo" alt='Logo'/>
        <Card/>
      </div>
    </>
  );
}

export default App;
