import React from "react";

class FormField extends React.Component{

    handleErrors() {
      console.log(this.props.validationMsg)
      console.log(this.props.errors)
      if(this.props.errors){
      if(this.props.errors.ref.id === this.props.name){
        const msg= this.props.validationMsg[this.props.errors.type]
        return(
          <div className="error">
            {msg}
          </div>
        )
      }
    }
  }
  render(){
  return (
    <div>
      <div className="form-group">
        <label for={this.props.label}>{this.props.label}</label>
        <input type={this.props.type}
         className="form-control"
          name={this.props.name}
          id={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          ref={this.props.validation} />

         {this.handleErrors()}
      </div>
    </div>
  )
  }
}

export default FormField;