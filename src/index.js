import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Example from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Example />
  </StrictMode>
);
