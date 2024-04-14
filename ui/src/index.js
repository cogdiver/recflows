import React from 'react';
import ReactDOM from 'react-dom/client';
import { Pages } from './Pages';
import { ProviderContext } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderContext>
      <Pages />
    </ProviderContext>
  </React.StrictMode>
);
