import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ThirdwebProvider, embeddedWallet } from '@thirdweb-dev/react';

const app = (
  <React.StrictMode>
    <ThirdwebProvider
      clientId={'6b7a78460bec6ea91792088b9fcec4d9'}
      supportedWallets={[embeddedWallet()]}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

serviceWorker.unregister();
