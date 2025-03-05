import "./App.css";
import logo from "./assets/images/logo.svg";
function App() {
  return (
    <main>
      <img src={logo} alt="logo" />
      <div className="container">
        <div className="left">
            <p>Bill</p>
            <input type="number" pattern="\d*" placeholder="0" />
            <p>Select Tip %</p>
            <div className="tipbox">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <button><input type="text" id="custom" placeholder="Custom"/></button>
            </div>
            <p>Number of people</p>
            <input type="number" pattern="\d*" placeholder="0" />
        </div>
        <div className="right">
            Kunl
        </div>
      </div>
    </main>
  );
}

export default App;
