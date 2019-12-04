import React from "react";

const Form = () => {
  return (
    <div className="form_wrapper">
      <form action="/hello" method="post">
        Enter Username
        <input className="form_input" type="text" name="username"/>
        <input className="form_submit" type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default Form;
