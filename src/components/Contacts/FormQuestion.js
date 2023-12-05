import React from "react";

const FormQuestion = ({ name, type }) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <input name={name} placeholder={`Enter ${name}`} type={type} />
    </div>
  );
};

export default FormQuestion;
