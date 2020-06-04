import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import "./App.css";
import ColorPanel from "./color-panel/color-panel.component";
import SidePanel from "./side-panel/side-panel.component";
import Messages from "./messages/messages.component";
import MetaPanel from "./meta-panel/meta-panel.component";

const App = ({
  currentUser,
  currentChannel,
  isPrivateChannel,
  userPosts,
  primaryColor,
  secondaryColor,
}) => (
  <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
    <ColorPanel
      currentUser={currentUser}
      key={currentUser && currentUser.name}
    />
    <SidePanel 
      key={currentUser && currentUser.id} 
      currentUser={currentUser}
      primaryColor={primaryColor} 
    />
    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <MetaPanel
        key={currentChannel && currentChannel.name}
        isPrivateChannel={isPrivateChannel}
        userPosts={userPosts}
        currentChannel={currentChannel}
      />
    </Grid.Column>
  </Grid>
);

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor,
});

export default connect(mapStatetoProps)(App);

// 15. Change and Edit User Avatar Images
