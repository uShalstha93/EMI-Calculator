import logo from './components/Images/Logo.png';
import FlagNP from './components/Images/FlagNP.gif'
import './App.css';
import EMICalculator from './components/EMICalulator/EMICalculator';
// import KistaSchedule from './components/KistaSchedule/KistaSchedule';
// import { useState } from 'react';

const App = () => {

  // const [EMIValue, setEMIValue] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME <br /> EMI Calculator<br />BY : USHAL SHRESTHA
          <img src={FlagNP} alt='flag' className='flag' />
        </p>
        <div className='modals'>
          <div className='emicalc'>
            {/* <EMICalculator setEMI={setEMIValue} /> */}
            <EMICalculator />
          </div>
          {/* <div className='kista'>
            <KistaSchedule EMI={EMIValue} />
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;
