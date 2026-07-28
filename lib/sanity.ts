import { createClient } from 'next-sanity';
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
