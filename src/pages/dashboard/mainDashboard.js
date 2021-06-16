import React, { useState } from 'react';
import Layout from "./Layout";
import { makeStyles, Grid, Card, TextField, Typography } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    height: `${window.screen.availHeight}px`,
    backgroundSize: 40,
    backgroundImage: "url(/logo5.svg)",
    [theme.breakpoints.up("md")]: {
      marginLeft: "25%",
      width: "75%"
    }
  }
}));

export default function MainDashboard(props) {

  const classes = useStyles();
  const [val, setVal] = useState();
  const [loading, setLoading] = useState(0);
  const [socket, setSocket] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket && loading === 0) {
      setSocket(new WebSocket("ws://localhost:8000/ws/chat/global/"));
      setLoading(1);
    }
  });


  const sendMessage = () => {
    if (socket) {
      socket.send(JSON.stringify(val));
    }
  }

  if(socket)
    socket.onmessage = (msg) => {
      var data = JSON.parse(msg.data);
      var arr = [...messages].concat(data);
      setMessages(arr);
    }

  return (
    <React.Fragment>
      <Layout />
      <Grid container className={classes.content} justify="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <Card>

            {messages.length ? messages.map((v, i) => (
              <Typography variant="h5">{v}</Typography>
              )) : null}
            <TextField label="Enter" variant="outlined" value={val} fullWidth onChange={(e) => setVal(e.target.value)} onBlur={sendMessage} />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
    )
}