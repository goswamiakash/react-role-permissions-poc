import React from "react";
import TesterMenu from "../../Menu/TesterMenu";
import OemTestMenubar from "../../Menu/OemTestMenubar";

const OEMTestEngineer = () => {
  return (
    <>
    {/* <TesterMenu/> */}
  <OemTestMenubar/>
      <div
        style={{
          margin: "15%",
          width: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome To Oem Test Engineer!</h1>
      </div>
    </>
  );
};

export default OEMTestEngineer;
