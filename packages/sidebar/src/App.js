import React from 'react';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'custom-prefix',
  prepend: true,
});

export default () => {
  return (
    <CacheProvider value={cache}>
      <h2>This is sidebar</h2>
    </CacheProvider>
  );
};
