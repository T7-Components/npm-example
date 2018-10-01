```js
import { ButtonMinus } from '@t7/npm-example'
```

This is an example component. It decrements a counter, and returns its value.

It accepts the following props.

```js
// Default: 0
const count = 9

// Event callback.
const handleClick = (count) => {
  /*
    `count` = The decremented value.
  */
}
```

```jsx
<ButtonMinus
  count={count}
  handleClick={handleClick}
/>
```
