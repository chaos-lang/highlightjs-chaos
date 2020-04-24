# Chaos language grammar for highlight.js

![version](https://badgen.net/npm/v/highlightjs-chaos) ![license](https://badgen.net/badge/license/MIT/blue)
![install size](https://badgen.net/packagephobia/install/highlightjs-chaos)

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-chaos/dist/chaos.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-chaos@0.0.1/dist/chaos.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsChaos = require('highlightjs-chaos');

hljs.registerLanguage("chaos", hljsChaos);
hljs.initHighlightingOnLoad();
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### Author

M. Mert Yildiran <me@mertyildiran.com>
