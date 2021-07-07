import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import CalcScreen from "./CalcScreen";
import DataContext from "../Data";

const data = {
  output: "",
  input: "0",
};
function Calculator(props) {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");

  return (
    <DataContext.Provider value={data}>
      <Phone>
        <PhoneScreen>
          <CalcScreen user={input} result={output} />
          <br />
          <img src="" alt="" />
          <Keys>
            <Button
              clear
              value="C"
              className="button clear"
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="DEL"
              className="button clear"
              clear
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="%"
              className="button operator"
              operator
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="/"
              className="button operator"
              operator
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />

            <Button
              value="7"
              className="button  "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="8"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="9"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="*"
              className="button operator"
              operator
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />

            <Button
              value="4"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="5"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="6"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="-"
              className="button operator"
              operator
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />

            <Button
              value="1"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="2"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="3"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="+"
              className="button operator"
              operator
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />

            <Button
              value="0"
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="."
              className="button "
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
            <Button
              value="="
              className="button operator grow"
              operator
              setInput={setInput}
              input={input}
              setOutput={setOutput}
              output={output}
            />
          </Keys>
        </PhoneScreen>
        <Home>
          <HomeButton></HomeButton>
        </Home>
      </Phone>
    </DataContext.Provider>
  );
}
const Phone = styled.div`
  width: 276px;
  height: 555px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const PhoneScreen = styled.div`
  width: 256px;
  height: 430px;
  background-color: #226;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const Keys = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 85%;
  width: 100%;
  .grow {
    grid-column: span 2;
  }
  /* :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .1);
    transform: skewX(-5deg);
  } */
`;
const Home = styled.div`
  height: 62.5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #cecece;
  box-sizing: border-box;
  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.1);
`;

export default Calculator;
