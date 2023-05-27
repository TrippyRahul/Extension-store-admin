import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
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
    <div >
      <div style={{padding:"10px 0px 10px 0px",display:"flex",justifyContent:"end"}}><Button color="primary"
variant="contained" onClick={allSWTurnOff}   style={{ marginRight: 10, padding: "10px 41px 10px 41px" }}>Turn Off All Switches</Button></div>
      <div>
        <div className="switchesButton">
          <div style={{padding:"10px 0px 10px 0px",display:"flex",justifyContent:"space-between"}}>
            <span>switch One status :{switchOne.toString()}</span>
            <Button style={{ marginRight: 10, padding: "10px 10px 10px 10px" }} color="secondary"
                  variant="contained" onClick={toggleSwitchOne}> Toggle switch one</Button>
          </div>
          <div style={{padding:"10px 0px 10px 0px",display:"flex",justifyContent:"space-between"}}>
            <span>switch Two status :{switchTwo.toString()}</span>
      <Button style={{ marginRight: 10, padding: "10px 10px 10px 10px" }} color="secondary"
                  variant="contained" onClick={toggleSwitchTwo}> Toggle switch Two</Button></div>
     
          <div style={{padding:"10px 0px 10px 0px",display:"flex",justifyContent:"space-between"}}>
            <span>switch Three status :{switchThree.toString()}</span>
            <Button style={{ marginRight: 10, padding: "10px 10px 10px 10px" }} color="secondary"
                  variant="contained" onClick={toggleSwitchThree}> Toggle switch Three</Button>
          </div>
          <div style={{padding:"10px 0px 10px 0px",display:"flex",justifyContent:"space-between"}}>
            <span>switch Four status :{switchFour.toString()}</span>
            <Button style={{ marginRight: 10, padding: "10px 10px 10px 10px" }} color="secondary"
                  variant="contained" onClick={toggleSwitchFour}> Toggle switch Four</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switches;
