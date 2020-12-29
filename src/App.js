import logo from './logo.svg';
import './App.scss';
import '../src/Components/scss/_custom.scss';
import { GreetingSection } from './Components/Work/Greet.js';
import { NavBar } from './Components/NavBar/NavBar';
import { ApplicationViews } from './Components/ApplicationView';

function App() {
  return (
    <>
    <ApplicationViews />
    </>
  );
}

export default App;
