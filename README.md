Reproduce the issue described in https://github.com/vitejs/vite/issues/19929 causing vitest to fail on tests

Run vitest to see the issue.

Run `npm i` then `npm run test` to see the issue.

If you revert to vit@6.3.2 (`npm i -D vite@6.3.2`), the test passes.