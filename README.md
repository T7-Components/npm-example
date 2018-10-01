# @t7/npm-example

This is a dummy repo, to explain how to publish T7's React packages to NPM.

```sh
# Install via NPM.
npm install @t7/npm-example --save-dev
```

To use the CSS, be sure to import it into your project.

```js
// Example: In a root JS file.
import '@t7/npm-example/dist/index.css'
```

```css
/* Example: In a root CSS file. */
@import "./node_modules/@t7/npm-example/dist/index.css";
```

---

View on NPM:

[https://www.npmjs.com/package/@t7/npm-example](https://www.npmjs.com/package/@t7/npm-example)

---

Demo page:

[https://t7-components.github.io/npm-example/build/](https://t7-components.github.io/npm-example/build/)

---

Test coverage:

[https://t7-components.github.io/npm-example/coverage/lcov-report/](https://t7-components.github.io/npm-example/coverage/lcov-report/)

---

Component documentation:

- [ButtonMinus](https://github.com/t7-components/npm-example/tree/master/source/button_minus/README.md)

- [ButtonPlus](https://github.com/t7-components/npm-example/tree/master/source/button_plus/README.md)

---

**▲ NOTE:**

All the lines above are typical of what we would expect to have within our "root level" `README.md` file. This includes:

- NPM install
- CSS usage
- Demo page link
- Test coverage link
- Individual component docs

For this repo specifically, here are further instructions on how to publish to NPM, and which steps to take in order to run unit tests and generate the demo page…

- [README_PUBLISH.md](https://github.com/t7-components/npm-example/tree/master/README_PUBLISH.md)
