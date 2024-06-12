import React, { Component } from 'react';

// MetisMenu
import MetisMenu from 'metismenujs';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

//i18n
import { withNamespaces } from 'react-i18next';

import { connect } from 'react-redux';
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader
} from '../../store/actions';
import { constants as STORAGEKEY } from '../../constants/constant';

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu('#side-menu');

    var matchingMenuItem = null;
    var ul = document.getElementById('side-menu');
    var items = ul.getElementsByTagName('a');
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add('active');
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add('mm-active');
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add('mm-show');

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add('mm-active'); // li
          parent3.childNodes[0].classList.add('mm-active'); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add('mm-active');
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    const accountType = localStorage.getItem(STORAGEKEY.ACCOUNT_TYPE);

    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{this.props.t('Menu')}</li>

            <li>
              <Link to="/business-dashboard" className="waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="ml-1">{this.props.t('Dashboard')}</span>
              </Link>
            </li>

            <li>
              <Link to="/countries" className="waves-effect">
                <i className="ri-earth-line"></i>
                <span className="ml-1">{this.props.t('All countries')}</span>
              </Link>
            </li>

            <li>
              <Link to="/all-crypto" className="waves-effect">
                <i className="fab fa-bitcoin"></i>
                <span className="ml-1">{this.props.t('All Cryptocurrencies ')}</span>
              </Link>
            </li>

            <li>
              <Link to="/notifications" className="waves-effect">
                <i className="fas fa-envelope"></i>
                <span className="ml-1">{this.props.t('Notifications')}</span>
              </Link>
            </li>
            {accountType === '2' && (
              <li>
                <Link to="/application" className="waves-effect">
                  <i className="fab fa-wpforms"></i>
                  <span className="ml-1">{this.props.t('Application')}</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/application/create">
                      {this.props.t('Create Application')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/applications">{this.props.t('View Applications')}</Link>
                  </li>
                </ul>
              </li>
            )}
            {accountType === '1' && (
              <>
                <li>
                  <Link to="/applications" className="waves-effect">
                    <i className="fab fa-wpforms"></i>
                    <span className="ml-1">{this.props.t('Application')}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="waves-effect">
                    <i className="fa fa-cog"></i>
                    <span className="ml-1">{this.props.t('Settings')}</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader
  })(withNamespaces()(SidebarContent))
);
