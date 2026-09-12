/**
 * Turns a title into a URL slug: lower-case ASCII letters and digits separated by single
 * hyphens, with no leading or trailing hyphen.
 *
 * @example slugify('Hello, World!') === 'hello-world'
 */
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Joins path segments into a slug, keeping segment boundaries as single hyphens. */
export function slugifyPath(segments: string[]): string {
  return segments
    .map(slugify)
    .filter((segment) => segment !== '')
    .join('-');
}
