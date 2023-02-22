import './assets/CSS/App.css';
import { Form } from './components/Form';
import { NavBar } from './components/NavBar';
import { WeatherPanel } from './components/WeatherPanel';


function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <WeatherPanel />
    </div>
  );
}

export default App;
