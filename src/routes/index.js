import React from 'react';
import { Redirect } from 'react-router-dom';

import Widget from '../pages/Widget';
// import BuySellWidget from '../pages/BuySellWidget';
import Hello from '../pages/BuySellWidget/Hello';
import Login from '../pages/BuySellWidget/Auth/Login';
import Verification from '../pages/BuySellWidget/Auth/Verification';
import withConditionalContainer from '../pages/BuySellWidget/withConditionalContainer';
import BuyNFT from '../pages/BuySellWidget/NFT/BuyNFT';
import Casino from '../pages/BuySellWidget/NFT/Casino';

// import Error404 from "../pages/Utility/Error404";
// import Error500 from "../pages/Utility/Error500";

const authProtectedRoutes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: () => <Redirect to="/buy-sell/buy-nft" />
  // },
  { path: '/buy-nft', component: withConditionalContainer(BuyNFT) },
  { path: '/buy-sell/buy-nft', component: withConditionalContainer(BuyNFT) },
  { path: '/casino', component: withConditionalContainer(Casino) },
  { path: '/buy-sell/casino', component: withConditionalContainer(Casino) }
  // {
  //   path: '/buy-sell/login',
  //   exact: true,
  //   component: () => <Redirect to="/buy-sell/login" />
  // },
  // {
  //   path: '/buy-sell/hello',
  //   exact: true,
  //   component: () => <Redirect to="/hello" />
  // },
  // { path: '/buy-nft', exact: true, component: () => <Redirect to="/buy-nft" /> },
  // {
  //   path: '/buy-sell/buy-nft',
  //   exact: true,
  //   component: () => <Redirect to="/buy-sell/buy-nft" />
  // }
];

const nftRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/buy-sell/casino" />
  },
  { path: '/buy-nft', component: withConditionalContainer(BuyNFT) },
  { path: '/buy-sell/buy-nft', component: withConditionalContainer(BuyNFT) },
  { path: '/casino', component: withConditionalContainer(Casino) },
  { path: '/buy-sell/casino', component: withConditionalContainer(Casino) }
];

const publicRoutes = [
  { path: '/login', component: withConditionalContainer(Login) },
  { path: '/buy-sell/login', component: withConditionalContainer(Login) },

  { path: '/verification', component: withConditionalContainer(Verification) },
  {
    path: '/buy-sell/verification',
    component: withConditionalContainer(Verification)
  },

  { path: '/hello', component: withConditionalContainer(Hello) },
  { path: '/widget/hello', component: withConditionalContainer(Hello) }
];
export { authProtectedRoutes, publicRoutes, nftRoutes };
