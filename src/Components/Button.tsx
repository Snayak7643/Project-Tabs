import React from "react";

const Button = () => {
  return (
    <button
      className="btn"
      onClick={() => {
        const name = prompt("Enter Your Name");
        if (name !== null) {
          alert("Congrats! " + name);
        }
      }}
    >
      Apply
    </button>
  );
};

export default Button;
