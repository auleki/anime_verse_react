import './assets/scss/main.css'
import Sidebar from './components/Sidebar';
import AnimeListing from './components/AnimeListing';

function App() {
  return (
    <div className="app__container">
      <Sidebar />
      <AnimeListing />
    </div>
  );
}

export default App;
