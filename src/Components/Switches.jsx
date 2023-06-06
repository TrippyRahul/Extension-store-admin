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
const Switches = () => {
  const [allSwitches, setAllSwitches] = useState([]);
  //NPD Swtiches
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
    <>
      <div>
        <div
          style={{
            padding: "10px 0px 10px 0px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={allSWTurnOff}
            style={{ marginRight: 10, padding: "10px 41px 10px 41px" }}
          >
            Turn Off All Switches
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
              <span>switch One status :{switchOne.toString()}</span>
              <Button
                style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
                color="secondary"
                variant="contained"
                onClick={toggleSwitchOne}
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
              <span>switch Two status :{switchTwo.toString()}</span>
              <Button
                style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
                color="secondary"
                variant="contained"
                onClick={toggleSwitchTwo}
              >
                {" "}
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
              <span>switch Three status :{switchThree.toString()}</span>
              <Button
                style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
                color="secondary"
                variant="contained"
                onClick={toggleSwitchThree}
              >
                {" "}
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
              <span>switch Four status :{switchFour.toString()}</span>
              <Button
                style={{ marginRight: 10, padding: "10px 10px 10px 10px" }}
                color="secondary"
                variant="contained"
                onClick={toggleSwitchFour}
              >
                {" "}
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
      </Suspense>
    </>
  );
};

const TureAdblockerSw = ({ allSwitches }) => {
  const [trueAdblockerSw, setTrueAdblockerSw] = useState({});
  const [tdbState, setTdbState] = useState(false);
  useEffect(() => {
    setTrueAdblockerSw({
      ...trueAdblockerSw,
      sw1: allSwitches[1]?.switchOne,
      sw2: allSwitches[1]?.switchTwo,
      sw3: allSwitches[1]?.switchThree,
      sw4: allSwitches[1]?.switchFour,
    });
  }, [allSwitches]);

  return (
    <div>
      <h1>True adblocker switches</h1>
      <button
        onClick={() => {
          offAllSwTrueAdblocker();
        }}
      >
        Turn off all
      </button>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw1?.toString()}</p>
        <button
          onClick={() => {
            toggleSwOneTADB();
          }}
        >
          Toggle sw one
        </button>
      </div>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw2?.toString()}</p>
        <button
          onClick={() => {
            toggleSwTwoTADB();
          }}
        >
          Toggle sw Two
        </button>
      </div>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw3?.toString()}</p>
        <button
          onClick={() => {
            toggleSwThreeTADB();
          }}
        >
          Toggle sw Three
        </button>
      </div>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw4?.toString()}</p>
        <button
          onClick={() => {
            toggleSwFourTADB();
          }}
        >
          Toggle sw four
        </button>
      </div>
    </div>
  );
};

const OttWatchParty = ({ allSwitches }) => {
  const [trueAdblockerSw, setTrueAdblockerSw] = useState({});
  const [tdbState, setTdbState] = useState(false);
  useEffect(() => {
    setTrueAdblockerSw({
      ...trueAdblockerSw,
      sw1: allSwitches[1]?.switchOne,
      sw2: allSwitches[1]?.switchTwo,
      sw3: allSwitches[1]?.switchThree,
      sw4: allSwitches[1]?.switchFour,
    });
  }, [allSwitches]);

  return (
    <div>
      <h1>OTTWatchParty switches</h1>
      <button
        onClick={() => {
          offAllSwOttParty();
        }}
      >
        Turn off all
      </button>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw1?.toString()}</p>
        <button
          onClick={() => {
            toggleSwOneOttParty();
          }}
        >
          Toggle sw one
        </button>
      </div>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw2?.toString()}</p>
        <button
          onClick={() => {
            toggleSwTwoOttParty();
          }}
        >
          Toggle sw Two
        </button>
      </div>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw3?.toString()}</p>
        <button
          onClick={() => {
            toggleSwThreeOttParty();
          }}
        >
          Toggle sw Three
        </button>
      </div>
      <div>
        <p>sw1 : {trueAdblockerSw?.sw4?.toString()}</p>
        <button
          onClick={() => {
            toggleSwFourOttParty();
          }}
        >
          Toggle sw four
        </button>
      </div>
    </div>
  );
};

export default Switches;
