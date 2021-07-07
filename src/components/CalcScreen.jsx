import React from "react";
import Output from "./Output";
import styled from "styled-components";
function CalcScreen({ user, result }) {
  return (
    <div>
      <Output value={result} />
      <Output value={user} />
    </div>
  );
}
const CalcScreenStyle = styled(CalcScreen)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default CalcScreenStyle;
