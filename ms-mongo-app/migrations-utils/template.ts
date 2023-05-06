import { getDb } from '../migrations-utils/db';

export const firstQuery = async () => {
  const db = await getDb();
};

export const secondQuery = async () => {
  const db = await getDb();
};
