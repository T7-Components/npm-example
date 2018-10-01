```js
import { ButtonPlus } from '@t7/npm-example'
```

This is an example component. It increments a number, and returns the new value.

It accepts the following props.

```js
// Default: 0
const count = 9

// Event callback.
const handleClick = (count) => {
  /*
    `count` = The incremented value.
  */
}
```

```jsx
<ButtonPlus
  count={count}
  handleClick={handleClick}
/>
```
