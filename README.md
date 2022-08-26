# windicss-plugin-font-size

`class="font-size-0"` `->` `.font-size-0 { font-size: 0; }`

`class="font-size-16px"` `->` `.font-size-16px { font-size: 16px; }`

`class="font-size-80%"` `->` `.font-size-80\% { font-size: 80%; }`

`class="font-size-1.5rem"` `->` `.font-size-1\.5rem { font-size: 1.5rem; }`

`class="font-size-$my-var"` `->` `.font-size-\$-my-var { font-size: var(--my-var); }`

`class="font-size-large"` `->` `.font-size-large { font-size: large; }`

`class="font-size-inherit"` `->` `.font-size-inherit { font-size: inherit; }`

`class="font-size-[calc(10vh+5px)]"` `->` `.font-size-\[calc\(10vh\+5px\)\] { font-size: calc(10vh + 5px); }`


## Usage

```bash
npm i windicss-plugin-font-size -D
```

```js
// windi.config.js

module.exports = {
  plugins: [
    require('windicss-plugin-font-size'),
  ],
};
```
