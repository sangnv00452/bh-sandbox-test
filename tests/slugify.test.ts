import { describe, expect, it } from 'vitest';
import { slugify, slugifyPath } from '../src/slugify.js';

describe('slugify', () => {
  it('lower-cases and replaces separators with hyphens', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Fix the Bug')).toBe('fix-the-bug');
  });
  it('strips accents', () => {
    expect(slugify('Café Déjà')).toBe('cafe-deja');
  });
});

describe('slugifyPath', () => {
  it('joins segments with hyphens', () => {
    expect(slugifyPath(['docs', 'guide'])).toBe('docs-guide');
  });
});
