import React from "react";

import styled from "styled-components";
// import DataContext from "../Data";

function Button(props) {

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "=") {
      if (props.input !== "") {
        let res = "";
        try {
          res = eval(props.input);
        } catch (error) {
          props.setOutput("Math Error");
        }
        if (res === undefined) {
          props.setOutput("Math Error");
        } else {
          props.setOutput(props.input + "=");
          console.log(props.input);
          console.log(res, "==> =");
          props.setInput(res);
        }
      }
    } else if (value === "C") {
      props.setInput("0");
      props.setOutput("");
    } else if (value === "DEL") {
      let string = props.input;
      string = string.substr(0, string.length - 1);
      props.setInput(string);
    } else if (props.input === "0") {
      props.setInput(value);
    } else {
      console.log(props.input);
      props.setInput(props.input + value);
    }
    // e.preventDefault();
  };
  return (
    <input
      type="button"
      value={props.value}
      className={props.className}
      onClick={handleClick}
    />
  );
}

const ButtonStyle = styled(Button)`
  background: ${(props) =>
    props.clear ? "transparent" : props.operator ? "#f47" : "#44b"};
  color: ${(props) =>
    props.clear ? "#bbe" : props.operator ? "#bbe" : "#8be"};
  margin: auto;
  font-size: 1rem;
  width: calc(100%);
  height: 100%;
  cursor: pointer;
  /* box-shadow: -2px -2px 10px rgb(127, 115, 201); */
  input {
    background: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
  border: 1px solid #87d;
  /* border: 1px solid #226; */
  box-sizing: border-box;
  /* :hover {
    animation: press 1s;
  } */
  :focus {
    animation: press 1s;
  }
  @keyframes press {
    0% {
      border: 1px solid #87d;
    }
    50% {
      border: 3px solid #87d;
    }
    100% {
      border: 1px solid #87d;
    }
  }
`;
export default ButtonStyle;
