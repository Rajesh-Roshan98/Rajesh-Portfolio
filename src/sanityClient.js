import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // fast, edge-cached responses for free tier
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => (source ? builder.image(source) : null);