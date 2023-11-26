import Dashboard from "./Dashboard/index.js";
import Bar from "./Bar/index.js"
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Bar/>
           <Dashboard/>
      </header>
    </div>
  );
}

export default App;
