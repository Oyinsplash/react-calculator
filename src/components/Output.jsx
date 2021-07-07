import React from 'react'
import styled from 'styled-components'
function Output(props) {
    return (
      <OutputStyle>
        <input type="text" className="screen" value={props.value} readOnly />
      </OutputStyle>
    );
}
const OutputStyle = styled.div`
  width: 100%;
  input {
    font-size: 14px;
    color: #bbe;
    background: none;
    border: none;
    text-align: right;
    width: 100%;
  }
`;

// const OutputStyle = styled(Output)`
//   width: 100%;
//   input {
//     font-size: ${(props) => (props.large ? "20px" : "16px")};
//     color: red;
//     text-align: right;
//     width: 100%;
//   }

export default Output;
