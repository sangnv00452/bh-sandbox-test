# bh-sandbox-test

A tiny TypeScript utility library that exists to exercise an automated open-source
contribution pipeline end to end (issue → patch → pull request). It is not a product.

`slugify(title)` returns a URL slug: lower-case ASCII letters and digits separated by single
hyphens, with no leading or trailing hyphen.

## Develop

```bash
npm install
npm test
npm run typecheck
npm run lint
```

## Contributing

Pull requests are welcome, including ones prepared with AI assistance, as long as a human
is accountable for them and tests cover the change. Keep diffs small and focused.
