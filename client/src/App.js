import logo from './components/Images/Logo.png';
import FlagNP from './components/Images/FlagNP.gif'
import './App.css';
import EMICalculator from './components/EMICalulator/EMICalculator';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME <br /> EMI Calculator<br />BY : USHAL SHRESTHA
          <img src={FlagNP} alt='flag' className='flag' />
        </p>
        <EMICalculator />
      </header>
    </div>
  );
}

export default App;
