import { describe, expect, it } from 'vitest';
import { slugify, slugifyPath } from '../src/slugify.js';

describe('slugify', () => {
  it.each([
    ['Hello World', 'hello-world'],
    ['Fix the Bug', 'fix-the-bug'],
    ['Café Déjà', 'cafe-deja'],
    ['  Hello, World!  ', 'hello-world'],
    ['a -- b', 'a-b'],
    ['---', ''],
    ['', ''],
    ['  /__  ', ''],
    ['  Crème brûlée / v2! ', 'creme-brulee-v2'],
  ])('normalizes %j to %j', (input, expected) => {
    expect(slugify(input)).toBe(expected);
  });
});

describe('slugifyPath', () => {
  it.each([
    { segments: ['docs', 'guide'], expected: 'docs-guide' },
    { segments: ['docs/', '/guide'], expected: 'docs-guide' },
    { segments: ['', 'docs', '---', 'guide', ''], expected: 'docs-guide' },
    { segments: ['', '---', '  '], expected: '' },
    { segments: [], expected: '' },
    { segments: [' /Café/ ', '__Déjà__'], expected: 'cafe-deja' },
  ])('normalizes $segments', ({ segments, expected }) => {
    expect(slugifyPath(segments)).toBe(expected);
  });

  it('preserves slug format and idempotence across segment combinations', () => {
    const parts = ['', 'docs/', '/guide', '---', 'Café', '  ', 'v2'];
    for (const a of parts) {
      for (const b of parts) {
        for (const c of parts) {
          const result = slugifyPath([a, b, c]);
          expect(result).toMatch(/^(?:[a-z0-9]+(?:-[a-z0-9]+)*)?$/);
          expect(slugify(result)).toBe(result);
          expect(slugifyPath([result])).toBe(result);
        }
      }
    }
  });
});
