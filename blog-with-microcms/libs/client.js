import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'sampleblog-tutorial-nextjs',
  apiKey: process.env.API_KEY,
});
