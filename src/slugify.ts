/**
 * Turns a title into a URL slug: lower-case ASCII letters and digits separated by single
 * hyphens, with no leading or trailing hyphen.
 *
 * @example slugify('Hello, World!') === 'hello-world'
 */
export function slugify(input: string): string {
  const words = input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .match(/[a-z0-9]+/g);
  return words?.join('-') ?? '';
}

/** Joins path segments into a slug, keeping segment boundaries as hyphens. */
export function slugifyPath(segments: string[]): string {
  return slugify(segments.join('-'));
}
