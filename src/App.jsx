import "./App.css";
import { useState } from "react";

import logo from "./assets/images/logo.svg";
function App() {
  const [bill, setBill] = useState();
  const [people, setPeople] = useState();
  const [tip, setTip] = useState(15);
  const [billerror,setBillerror]=useState(false);
  const [peopleerror,setPeopleerror]=useState(false);
  function handle(e) {
    const value = e.target.value; // Get the current input value
    setBill(value); // Update state
  
    if (value === "" || Number(value) === 0) { // Check the new value
      setBillerror(true);
    } else {
      setBillerror(false);
    }
  }
  function handlepeople(e) {
    const value = e.target.value; // Get the current input value
    setPeople(value); // Update state
  
    if (value === "" || Number(value) === 0) { // Check the new value
      setPeopleerror(true);
    } else {
      setPeopleerror(false);
    }
  }

  
  return (
    <main>
      <img src={logo} alt="logo" />
      <div className="container">
        <div className="left">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Bill</p>
            {billerror && <p style={{ color: "red" }}>Can't be empty</p>}
          </div>
          <input
            className="inp"
            type="number"
            pattern="\d*"
            placeholder="0"
            value={bill || ""}
            onChange={handle}
            style={{borderColor: billerror? "red":""}}
            
          />
          <p>Select Tip %</p>
          <div className="tipbox">
            <button
              key={tip}
              onClick={() => setTip(5)}
              style={{
                backgroundColor:
                  tip === 5 ? "rgb(38, 192, 171)" : "hsl(183,100%,15%)",
              }}
            >
              5%
            </button>
            <button
              onClick={() => setTip(10)}
              style={{
                backgroundColor:
                  tip === 10 ? "rgb(38, 192, 171)" : "hsl(183,100%,15%)",
              }}
            >
              10%
            </button>
            <button
              onClick={() => setTip(15)}
              style={{
                backgroundColor:
                  tip === 15 ? "rgb(38, 192, 171)" : "hsl(183,100%,15%)",
              }}
            >
              15%
            </button>
            <button
              onClick={() => setTip(25)}
              style={{
                backgroundColor:
                  tip === 25 ? "rgb(38, 192, 171)" : "hsl(183,100%,15%)",
              }}
            >
              25%
            </button>
            <button
              onClick={() => setTip(50)}
              style={{
                backgroundColor:
                  tip === 50 ? "rgb(38, 192, 171)" : "hsl(183,100%,15%)",
              }}
            >
              50%
            </button>
            <button>
              <input
                type="number"
                id="custom"
                placeholder="Custom"
                onChange={(e) => setTip(e.target.value)}
              />
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Number of people</p>
            {peopleerror && <p style={{ color: "red" }}>Can't be zero</p>}
          </div>
          <input
            className="inp"
            type="number"
            pattern="\d*"
            placeholder="0"
            value={people || ""}
            onChange={handlepeople}
            style={{borderColor: peopleerror? "red":""}}
          />
        </div>
        <div className="right">
          <div className="tip">
            <div className="amount">
              <div className="perperson">
                <div>
                  <p>Tip Amount</p>
                  <p>/ person</p>
                </div>
                <div>
                  $
                  {bill > 0 && people > 0
                    ? (
                        (Number(bill) * 0.01 * Number(tip)) /
                        Number(people)
                      ).toFixed(2)
                    : "0.00"}
                </div>
              </div>
              <div className="total">
                <div>
                  <p>Total</p>
                  <p>/ person</p>
                </div>
                <div>
                  $
                  {bill > 0 && people > 0
                    ? ((Number(bill) + Number(tip)) / Number(people)).toFixed(2)
                    : "0.00"}
                </div>
              </div>
            </div>
            <div className="reset-container">
              <button
                className="reset"
                onClick={() => {
                  setBill(0);
                  setTip(15);
                  setPeople(0);
                }}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
