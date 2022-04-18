import "./Form.css";
import Result from "./Result";
import { useState } from "react";
import WrongResult from "./WrongResult";
import InputElement from "./InputElement";

var cdf = require("@stdlib/stats-base-dists-poisson-cdf");

const Form = () => {
  let [submissionFlag, setSubmissionFlag] = useState(0);
  let [out, setOut] = useState(0);

  const submitHandler = (props) => {
    props.preventDefault();

    for (let i = 0; i < 4; i++) {
      if (props.target.form[i].value === "") {
        setSubmissionFlag(1);
        return;
      }
    }
    const mean = parseFloat(props.target.form[0].value);
    const std_dev = parseFloat(props.target.form[1].value);
    const enter = parseFloat(props.target.form[2].value);
    const exit = parseFloat(props.target.form[3].value);
    const lambda = parseFloat(mean / std_dev ** 2);
    const time = exit - enter;
    setOut(1 - cdf((lambda * mean), lambda * time));
    setSubmissionFlag(2);
  };
  const inputChangeHandler = (props) => {
    setSubmissionFlag(0);
  };
  return (
    <div className="input_container">
      <form action="">
        <InputElement
          exit={"ExitHour"}
          mean={"Mean"}
          std={"StdDev"}
          enter={"EnteranceHour"}
          onInputChange={inputChangeHandler}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-secondary "
        >
          Calculate
        </button>
      </form>
      <div>{submissionFlag === 2 && <Result out={out} />}</div>
      <div>{submissionFlag === 1 && <WrongResult out={out} />}</div>
    </div>
  );
};

export default Form;
