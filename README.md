# Split-after: Splits a string at a certain number

## Install: `npm i split-after`

```js
const splitnth = require('split-after')

const str = 'HEY|THERE|BUDDY!';

console.log(splitnth(str, '|', 2)) // [ 'HEY|THERE', 'BUDDY!' ]
```