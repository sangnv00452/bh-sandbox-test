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

  it('collapses runs of separators into a single hyphen', () => {
    expect(slugify('a -- b')).toBe('a-b');
  });

  it('does not keep leading or trailing hyphens', () => {
    expect(slugify('  Hello, World!  ')).toBe('hello-world');
    expect(slugify('!Hello')).toBe('hello');
    expect(slugify('World!')).toBe('world');
  });

  it('returns an empty string when there is nothing to slug', () => {
    expect(slugify('---')).toBe('');
    expect(slugify('')).toBe('');
    expect(slugify('   ')).toBe('');
  });
});

describe('slugifyPath', () => {
  it('joins segments with hyphens', () => {
    expect(slugifyPath(['docs', 'guide'])).toBe('docs-guide');
  });

  it('does not double hyphens when segments start or end with a separator', () => {
    expect(slugifyPath(['docs/', '/guide'])).toBe('docs-guide');
    expect(slugifyPath([' Hello, World! ', ' Again '])).toBe('hello-world-again');
  });

  it('drops segments that slug to nothing', () => {
    expect(slugifyPath(['docs', '---', 'guide'])).toBe('docs-guide');
    expect(slugifyPath(['', 'guide'])).toBe('guide');
    expect(slugifyPath([])).toBe('');
  });
});
