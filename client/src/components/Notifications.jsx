import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} Arıyor:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Cevapla
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
