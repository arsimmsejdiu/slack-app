import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import "./App.css";
import ColorPanel from "./color-panel/color-panel.component";
import SidePanel from "./side-panel/side-panel.component";
import Messages from "./messages/messages.component";
import MetaPanel from "./meta-panel/meta-panel.component";

const App = ({ currentUser, currentChannel , isPrivateChannel }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel key={currentUser && currentUser.id} currentUser={currentUser} />
    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
});

export default connect(mapStatetoProps)(App);
