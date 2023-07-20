import React from 'react';
import ReactDOM from 'react-dom/client';
import {Setting} from './const';
import {offersMocks} from './mocks/offers';

import App from './components/app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
      offers={offersMocks}
    />

  </React.StrictMode>
);
