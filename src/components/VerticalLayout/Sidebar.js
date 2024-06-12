import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {} from '../../store/actions';

//Simple bar
import SimpleBar from 'simplebar-react';

import SidebarContent from './SidebarContent';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  render() {
    return (
      <React.Fragment>
        <Drawer
          open={this.props.type !== 'condensed'}
          onClose={this.toggleMenu}
          direction="left"
          zIndex={1002}>
          <SimpleBar style={{ maxHeight: '100%' }}>
            <SidebarContent />
          </SimpleBar>
        </Drawer>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    layout: state.Layout
  };
};
export default connect(mapStatetoProps, {})(withRouter(Sidebar));
