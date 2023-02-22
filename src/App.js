import './assets/CSS/App.css';
import { Form } from './assets/CSS/components/Form';
import { NavBar } from './assets/CSS/components/NavBar';
import { WeatherPanel } from './assets/CSS/components/WeatherPanel';


function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <WeatherPanel />
    </div>
  );
}

export default App;
