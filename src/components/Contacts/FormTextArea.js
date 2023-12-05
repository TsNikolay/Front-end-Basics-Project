import React from "react";

const FormTextArea = ({ name, placeholder, rows, required }) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
