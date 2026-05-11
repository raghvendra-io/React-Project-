import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      
      <Sidebar />

      <div className="main-content">
        <Header />
      </div>
    </div>
  );
}

export default App;