# issue-babel-plugin-istanbul-fn-name

This demonstrates that due to how babel-plugin-istanbul wraps functions, the name of the function is lost

This is a bug and should be fixed.

## Why?

This is causing issues with Jest snapshot testing of React components

## Reproduce:

See the npm scripts, or just run things manually:

```
node test.js
```

Everything passes fine

```
babel-node --plugins istanbul test.js
```

You get two failures. One for the `Foobar` function:

```js
const Foobar = function() {}
```

And the other for the `Bar` function:

```js
const Bar = () => {}
```

The istanbul-transformed (`babel --plugins istanbul index.js`) version of these functions looks like this:

```js
const Bar = (++cov_1788vtfzzh.s[0], () => {
  ++cov_1788vtfzzh.f[1];
});

const Foobar = (++cov_1788vtfzzh.s[2], function () {
  ++cov_1788vtfzzh.f[3];
});
```

This makes it so the JS engine can't do function name inference which causes the issue.

I'm not sure what the babel plugin can do about arrow functions... Can't really give those a name. Definitely possible, but you'd have to do some fancy work to make things work.

But for the function expression that's simple enough.

