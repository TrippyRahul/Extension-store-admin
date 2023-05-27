import React, { useState, useEffect } from "react";
import {
  getAddSwitches,
  turnOffAllSwicthes,
  TgswitchOne,
  TgswitchTwo,
  TgswitchThree,
  TgswitchFour,
} from "../Service/api";
const Switches = () => {
  const [allSwitches, setAllSwitches] = useState([]);
  const [switchOne, setSwitchOne] = useState("");
  const [switchTwo, setSwitchTwo] = useState("");
  const [switchThree, setSwitchThree] = useState("");
  const [switchFour, setSwitchFour] = useState("");
  const [switchChanged, setSwitchChanged] = useState(false);
  useEffect(() => {
    const getSwitches = async () => {
      const response = await getAddSwitches();
      setAllSwitches(response.data);
      setSwitchOne(response.data[0].switchOne);
      setSwitchTwo(response.data[0].switchTwo);
      setSwitchThree(response.data[0].switchThree);
      setSwitchFour(response.data[0].switchFour);
    };
    getSwitches();
    console.log("jello");
  }, [switchChanged]);

  const allSWTurnOff = async () => {
    await turnOffAllSwicthes();
    setSwitchChanged((prevState) => !prevState);
  };

  const toggleSwitchOne = async () => {
    await TgswitchOne();
    setSwitchChanged((prevState) => !prevState);
  };
  const toggleSwitchTwo = async () => {
    await TgswitchTwo();
    setSwitchChanged((prevState) => !prevState);
  };
  const toggleSwitchThree = async () => {
    await TgswitchThree();
    setSwitchChanged((prevState) => !prevState);
  };
  const toggleSwitchFour = async () => {
    await TgswitchFour();
    setSwitchChanged((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={allSWTurnOff}>Turn Off All Switches</button>
      <div>
        <div className="switchesButton">
          <div>
            <span>switch One status :{switchOne.toString()}</span>
            <button onClick={toggleSwitchOne}> Toggle switch one</button>
          </div>
          <div>
            <span>switch Two status :{switchTwo.toString()}</span>
            <button onClick={toggleSwitchTwo}> Toggle switch Two</button>
          </div>
          <div>
            <span>switch Three status :{switchThree.toString()}</span>
            <button onClick={toggleSwitchThree}> Toggle switch Three</button>
          </div>
          <div>
            <span>switch Four status :{switchFour.toString()}</span>
            <button onClick={toggleSwitchFour}> Toggle switch Four</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switches;
