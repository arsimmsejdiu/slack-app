import React from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./user-panel.component";
import Channels from "./channels.component";
import DirectMessages from "./direct-messages.component";
import Starred from "./starred.component";

class SidePanel extends React.Component {
  render() {
    const { currentUser , primaryColor } = this.props;
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: primaryColor, fontSize: "1.2rem" }}
      >
        <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
        <Starred currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
