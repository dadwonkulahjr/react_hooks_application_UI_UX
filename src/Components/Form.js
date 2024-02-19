import { useState } from "react";

const Form = (props) => {
  const textString = "Hi, my name is Dad S. Wonkulah Jr";
  const [textColor, setTextColor] = useState(() => {
    return "text-success";
  });
  const handleTextColor = () => {
    setTextColor(
      textColor === "text-success" ? "text-warning" : "text-success"
    );
  };

  return (
    <div className="col-12">
      {<h2 className={textColor}>{textString}</h2>}
      <button onClick={handleTextColor} className="btn btn-success">
        Change Text color
      </button>
    </div>
  );
};
export default Form;
