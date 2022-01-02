import stringify from 'fast-safe-stringify';

import { TypePost } from './types';

export const parsePage = (page: unknown): TypePost => {
  // Kill circular references
  return JSON.parse(stringify(page)) as TypePost;
};