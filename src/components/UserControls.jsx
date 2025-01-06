import Input from "./Input";

export default function UserControls({ onInputChange, userInputs }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <Input
            inputLabel="INITIAL INVESTMENT"
            value={userInputs.initialInvestment}
            name="initialInvestment"
            onChangeHandler={onInputChange}
          />
          <Input
            inputLabel="ANNUAL INVESTMENT"
            value={userInputs.annualInvestment}
            name="annualInvestment"
            onChangeHandler={onInputChange}
          />
        </div>
        <div className="input-group">
          <Input
            inputLabel="EXPECTED RETURN"
            value={userInputs.expectedReturn}
            name="expectedReturn"
            onChangeHandler={onInputChange}
          />
          <Input
            inputLabel="DURATION"
            value={userInputs.duration}
            name="duration"
            onChangeHandler={onInputChange}
          />
        </div>
      </section>
    </>
  );
}
