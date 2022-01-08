import React from "react";
import ReactSpinnerTimer from "react-spinner-timer";
 
function Loading() {
  const handleChange = (lap) => {
    if (lap.isFinish) console.log("Finished!!");
    else console.log("Running!! Lap:", lap.actualLap);
  };
  return (
    <ReactSpinnerTimer
      timeInSeconds={1}
      totalLaps={1}
      isRefresh={false}
      onLapInteraction={handleChange}
    />
  );
}
export default Loading;