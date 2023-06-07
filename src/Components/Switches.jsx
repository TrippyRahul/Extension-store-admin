import React, { useState, useEffect, Suspense } from "react";
import { Button, circularProgressClasses } from "@mui/material";
import {
  getAddSwitches,
  turnOffAllSwicthes,
  TgswitchOne,
  TgswitchTwo,
  TgswitchThree,
  TgswitchFour,
  offAllSwTrueAdblocker,
  toggleSwOneTADB,
  toggleSwTwoTADB,
  toggleSwThreeTADB,
  toggleSwFourTADB,
  offAllSwOttParty,
  toggleSwOneOttParty,
  toggleSwTwoOttParty,
  toggleSwThreeOttParty,
  toggleSwFourOttParty,
} from "../Service/api";


//////////////////////NPDSwitches///////////////////////////
const Switches = () => {
    useEffect(() => {
    const getSwitches = async () => {
      const response = await getAddSwitches();
      setAllSwitches(response.data);

    };
    getSwitches();
  }, []);
  const [allSwitches, setAllSwitches] = useState([]);
  const [NpdSw, setTrueAdblockerSw] = useState({
    sw1: allSwitches[0]?.switchOne,
    sw2: allSwitches[0]?.switchTwo,
    sw3: allSwitches[0]?.switchThree,
    sw4: allSwitches[0]?.switchFour,
  });

  useEffect(() => {
    setTrueAdblockerSw({
      sw1: allSwitches[0]?.switchOne,
      sw2: allSwitches[0]?.switchTwo,
      sw3: allSwitches[0]?.switchThree,
      sw4: allSwitches[0]?.switchFour,
    });
  }, [allSwitches]);

  const toggleSwitch = (switchName) => {
    setTrueAdblockerSw((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));

    switch (switchName) {
      case 'sw1':
        TgswitchOne();
        break;
      case 'sw2':
        TgswitchTwo();
        break;
      case 'sw3':
        TgswitchThree();
        break;
      case 'sw4':
        TgswitchFour();
        break;
      default:
        break;
    }
  };

  const toggleAllSwitches = () => {
    setTrueAdblockerSw({
      sw1: false,
      sw2: false,
      sw3: false,
      sw4: false,
    });
    turnOffAllSwicthes()
  };

  return (
<>
<div style={{padding: "0px 10px 0px 10px"}}>
      <h1>True adblocker switches</h1>
      <div
        style={{
          padding: "10px 0px 10px 0px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={toggleAllSwitches}
          color="primary"
          variant="contained"
          style={{ marginRight: 10, padding: "10px 41px 10px 41px" }}
        >
          Turn off all
        </Button>
      </div>
      <div>
        <div className="switchesButton">
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch One status: {NpdSw?.sw1?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw1')}
            >
              Toggle switch one
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch Two status: {NpdSw?.sw2?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw2')}
            >
              Toggle switch Two
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch Three status: {NpdSw?.sw3?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw3')}
            >
              Toggle switch Three
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch Four status: {NpdSw?.sw4?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw4')}
            >
              Toggle switch Four
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Suspense fallback="Loading ...">
    <TureAdblockerSw allSwitches={allSwitches} />
  </Suspense>
  <Suspense fallback="Loading ...">
    <OttWatchParty allSwitches={allSwitches} />
  </Suspense></>
  );
};
///////////////////////TureAdblockerSw///////////////////////

const TureAdblockerSw = ({ allSwitches }) => {
console.log(allSwitches,"all")
  const [trueAdblockerSw, setTrueAdblockerSw] = useState({
    sw1: allSwitches[1]?.switchOne,
    sw2: allSwitches[1]?.switchTwo,
    sw3: allSwitches[1]?.switchThree,
    sw4: allSwitches[1]?.switchFour,
  });

  useEffect(() => {
    setTrueAdblockerSw({
      sw1: allSwitches[1]?.switchOne,
      sw2: allSwitches[1]?.switchTwo,
      sw3: allSwitches[1]?.switchThree,
      sw4: allSwitches[1]?.switchFour,
    });
  }, [allSwitches]);

  const toggleSwitch = (switchName) => {
    setTrueAdblockerSw((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));

    switch (switchName) {
      case 'sw1':
        toggleSwOneTADB();
        break;
      case 'sw2':
        toggleSwTwoTADB();
        break;
      case 'sw3':
        toggleSwThreeTADB();
        break;
      case 'sw4':
        toggleSwFourTADB();
        break;
      default:
        break;
    }
  };

  const toggleAllSwitches = () => {
    setTrueAdblockerSw({
      sw1: false,
      sw2: false,
      sw3: false,
      sw4: false,
    });
    offAllSwTrueAdblocker()
  };

  return (
    <div style={{padding: "0px 10px 0px 10px"}}>
      <h1>True adblocker switches</h1>
      <div
        style={{
          padding: "10px 0px 10px 0px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={toggleAllSwitches}
          color="primary"
          variant="contained"
          style={{ marginRight: 10, padding: "10px 41px 10px 41px" }}
        >
          Turn off all
        </Button>
      </div>
      <div>
        <div className="switchesButton">
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch One status: {trueAdblockerSw?.sw1?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw1')}
            >
              Toggle switch one
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch Two status: {trueAdblockerSw?.sw2?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw2')}
            >
              Toggle switch Two
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch Three status: {trueAdblockerSw?.sw3?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw3')}
            >
              Toggle switch Three
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>switch Four status: {trueAdblockerSw?.sw4?.toString()}</span>
            <Button
              style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
              color="secondary"
              variant="contained"
              onClick={() => toggleSwitch('sw4')}
            >
              Toggle switch Four
            </Button>
          </div>
        </div>
      </div>
    </divc>
  );
};
///////////////////////OttWatchParty///////////////////////
const OttWatchParty = ({ allSwitches }) => {
  const [trueAdblockerSw, setTrueAdblockerSw] = useState({
    sw1: allSwitches[2]?.switchOne,
    sw2: allSwitches[2]?.switchTwo,
    sw3: allSwitches[2]?.switchThree,
    sw4: allSwitches[2]?.switchFour,
  });

  useEffect(() => {
    setTrueAdblockerSw({
      sw1: allSwitches[2]?.switchOne,
      sw2: allSwitches[2]?.switchTwo,
      sw3: allSwitches[2]?.switchThree,
      sw4: allSwitches[2]?.switchFour,
    });
  }, [allSwitches]);

  const toggleSwitch = (switchName) => {
    setTrueAdblockerSw((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));

    switch (switchName) {
      case 'sw1':
        toggleSwOneOttParty();
        break;
      case 'sw2':
        toggleSwTwoOttParty();
        break;
      case 'sw3':
        toggleSwThreeOttParty();
        break;
      case 'sw4':
        toggleSwFourOttParty();
        break;
      default:
        break;
    }
  };

  const toggleAllSwitches = () => {
    setTrueAdblockerSw({
      sw1: false,
      sw2: false,
      sw3: false,
      sw4: false,
    });
    offAllSwOttParty()
  };

  return (
<div style={{padding: "0px 10px 0px 10px"}}>
    <h1>Ott WatchParty</h1>
    <div
      style={{
        padding: "10px 0px 10px 0px",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button
        onClick={toggleAllSwitches}
        color="primary"
        variant="contained"
        style={{ marginRight: 10, padding: "10px 41px 10px 41px" }}
      >
        Turn off all
      </Button>
    </div>
    <div>
      <div className="switchesButton">
        <div
          style={{
            padding: "10px 0px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>switch One status: {trueAdblockerSw?.sw1?.toString()}</span>
          <Button
            style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
            color="secondary"
            variant="contained"
            onClick={() => toggleSwitch('sw1')}
          >
            Toggle switch one
          </Button>
        </div>
        <div
          style={{
            padding: "10px 0px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>switch Two status: {trueAdblockerSw?.sw2?.toString()}</span>
          <Button
            style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
            color="secondary"
            variant="contained"
            onClick={() => toggleSwitch('sw2')}
          >
            Toggle switch Two
          </Button>
        </div>
        <div
          style={{
            padding: "10px 0px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>switch Three status: {trueAdblockerSw?.sw3?.toString()}</span>
          <Button
            style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
            color="secondary"
            variant="contained"
            onClick={() => toggleSwitch('sw3')}
          >
            Toggle switch Three
          </Button>
        </div>
        <div
          style={{
            padding: "10px 0px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>switch Four status: {trueAdblockerSw?.sw4?.toString()}</span>
          <Button
            style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
            color="secondary"
            variant="contained"
            onClick={() => toggleSwitch('sw4')}
          >
            Toggle switch Four
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Switches;
