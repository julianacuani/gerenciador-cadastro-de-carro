import React from "react";

function FormField({ label, type, name, value, onChange, validation, errors, validatiomesseger }) {

  const handleErrors = () =>{
    console.log(errors)
    if(errors){
      if(errors.ref.id === name){
        const msg= validatiomesseger[errors.type]
        return(
          <div className="error">
            {msg}
          </div>
        )
      }
    }
  }
  return (
    <div>
      <div className="form-group">
        <label for={label}>{label}</label>
        <input type={type}
         className="form-control"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          ref={validation} />

         {handleErrors}
      </div>
    </div>
  )
}

export default FormField;