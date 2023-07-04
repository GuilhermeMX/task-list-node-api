import fs from 'node:fs/promises';

const databasePath = new URL('../db.json', import.meta.url);

export function database() {
  const tasks = [
    {
      title,
      description,
      completedAt,
      createdAt,
      id
    }
  ]
}