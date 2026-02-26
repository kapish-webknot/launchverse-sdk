import createClient from 'openapi-fetch';
import type { paths } from './schema';

export const createLaunchVerseClient = (baseUrl = 'http://localhost:3000') => {
  return createClient<paths>({ baseUrl });
};

export type LaunchVerseClient = ReturnType<typeof createLaunchVerseClient>;
export * from './schema';
