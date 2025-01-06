import { useState } from "react";

import Header from "./components/header";
import UserControls from "./components/UserControls";
import Results from "./components/Results";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 1,
  });

  const inputIsValid = userInputs.duration >= 1;

  function handleInputChange(event) {
    setUserInputs((prevInputValues) => {
      return {
        ...prevInputValues,
        [event.target.name]: +event.target.value,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserControls onInputChange={handleInputChange} userInputs={userInputs} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results userInputs={userInputs} />}
    </div>
  );
}

export default App;
