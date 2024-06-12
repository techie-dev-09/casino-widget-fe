import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withQueryParams, StringParam } from 'use-query-params';

// Import menuDropdown
// eslint-disable-next-line no-unused-vars
import LanguageDropdown from '../CommonForBoth/TopbarDropdown/LanguageDropdown';

//Import i18n
import { withNamespaces } from 'react-i18next';

import { toggleRightSidebar } from '../../store/actions';
import { ReactComponent as DownloadIcon } from '../../assets/images/icons/download.svg';

import logoSmLight from '../../assets/images/logo-sm-light.png';
import logoLight from '../../assets/images/logo-light.png';
import logoDark from '../../assets/images/logo-dark.png';
import logoSmDark from '../../assets/images/logo-sm-dark.png';

import Divider from './Divider';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isSocialPf: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
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
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
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
    const {
      history,
      query: { search }
    } = this.props;
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header d-flex justify-content-between align-item-center px-4">
            <div className="d-flex">
              <Button
                size="sm"
                color="none"
                type="button"
                onClick={this.toggleMenu}
                className="pl-0 pr-4 font-size-24 header-item waves-effect"
                id="vertical-menu-btn">
                <i className="ri-menu-2-line align-middle"></i>
              </Button>
              <div className="pr-4">
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
              <Divider className="d-none d-lg-block mx-5" />
              {/*<Dropdown
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
              <Divider /> */}
            </div>
            <div className="d-flex d-lg-none align-items-center justify-content-center">
              <Link to="/business-search" className="btn btn-light font-size-20">
                <i className="ri-search-line"></i>
              </Link>
            </div>
            <div className="d-none d-lg-flex align-items-center justify-content-center">
              <input
                type="text"
                className="form-control form-control-search mr-3"
                placeholder="Search"
                defaultValue={search}
                onKeyPress={(event) => {
                  if (event.key === 'Enter' && event.target.value) {
                    history.push(`/business-search?search=${event.target.value}`);
                  }
                }}
                style={{ width: 368, maxWidth: '100%' }}
              />
              <button
                type="button"
                className="btn btn-light"
                style={{
                  padding: '0.7rem'
                }}>
                <DownloadIcon height={24} className="text-black" />
              </button>
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
  withNamespaces()(
    withRouter(
      withQueryParams(
        {
          search: StringParam
        },
        Header
      )
    )
  )
);
