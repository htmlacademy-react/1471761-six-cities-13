import React from 'react';
import ReactDOM from 'react-dom/client';
import {offersMocks} from './mocks/offers';

import App from './components/app/app';
import { fullOffersMocks } from './mocks/fullOffer';
import { commentsMocks } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offersMocks} fullOffers={fullOffersMocks} comments={commentsMocks}/>

  </React.StrictMode>
);
