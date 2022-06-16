import './App.css';
import { Home, Welcome } from './Pages';

function App() {
  let user = localStorage.getItem("userName");
  return (
    <div className="App">
      {
        !user ? <Welcome/> : <Home/> 
      }
    </div>
  );
}

export default App;
