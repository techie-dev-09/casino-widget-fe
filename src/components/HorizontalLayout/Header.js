import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, Button } from "reactstrap";
import { withNamespaces } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
// import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
// import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import logoSmLight from "../../assets/images/logo-sm-light.png";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoSmDark from "../../assets/images/logo-sm-dark.png";

import { toggleRightSidebar } from "../../store/actions";
import Divider from "./Divider";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isMegaMenu: false,
      isProfile: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoSmDark} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="20" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoSmLight} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="20" />
                  </span>
                </Link>
              </div>
              <Divider />
              <Dropdown
                isOpen={this.state.isMegaMenu}
                toggle={() =>
                  this.setState({ isMegaMenu: !this.state.isMegaMenu })
                }
                className="dropdown-mega d-none d-lg-block ml-2"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  className="btn header-item waves-effect"
                >
                  {this.props.t("Crypto")}{" "}
                  <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
              </Dropdown>
              <Divider />

              {/* <Form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={this.props.t("Search")}
                  />
                  <span className="ri-search-line"></span>
                </div>
              </Form> */}
              <Dropdown
                isOpen={this.state.isMegaMenu}
                toggle={() =>
                  this.setState({ isMegaMenu: !this.state.isMegaMenu })
                }
                className="dropdown-mega d-none d-lg-block ml-2"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  className="btn header-item waves-effect"
                >
                  {this.props.t("Payment Method")}{" "}
                  <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
              </Dropdown>
              <Divider />

              <Dropdown
                isOpen={this.state.isMegaMenu}
                toggle={() =>
                  this.setState({ isMegaMenu: !this.state.isMegaMenu })
                }
                className="dropdown-mega d-none d-lg-block ml-2"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  className="btn header-item waves-effect"
                >
                  {this.props.t("Network")}{" "}
                  <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
              </Dropdown>
              <Divider />
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  type="button"
                  color="none"
                  //   onClick={this.toggleFullscreen}
                  className="noti-icon waves-effect"
                  //   data-toggle="fullscreen"
                  style={{
                    background: "rgba(240, 241, 242, 0.429332)",
                    border: "1px solid #EDEEF0",
                    borderRadius: "10px",
                  }}
                >
                  <span className="text-black">
                    <i className="ri-search-line"></i>
                  </span>
                </Button>
              </div>
              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  type="button"
                  color="none"
                  //   onClick={this.toggleFullscreen}
                  className="noti-icon waves-effect"
                  //   data-toggle="fullscreen"
                  style={{
                    background: "rgba(240, 241, 242, 0.429332)",
                    border: "1px solid #EDEEF0",
                    borderRadius: "10px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-black">
                      {this.props.t("Download")}{" "}
                    </span>
                    <span className="text-black">
                      <i className="ri-arrow-down-line ml-3"></i>
                    </span>
                  </div>
                </Button>
              </div>
              {/* <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  type="button"
                  color="none"
                  onClick={this.toggleFullscreen}
                  className="header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="ri-fullscreen-line"></i>
                </Button>
              </div> */}

              {/* <NotificationDropdown /> */}

              {/* <ProfileMenu /> */}

              {/* <div
                onClick={this.toggleRightbar}
                className="dropdown d-inline-block"
              >
                <Button
                  type="button"
                  color="none"
                  className="header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className="ri-settings-2-line"></i>
                </Button>
              </div> */}
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withNamespaces()(Header)
);
