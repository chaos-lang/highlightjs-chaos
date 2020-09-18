/*
Language: Chaos
Author: M. Mert Yildiran <me@mertyildiran.com>
Description: Chaos is a purely functional programming language that achieves zero cyclomatic complexity.
Website: https://chaos-lang.org/
Category: common
*/

module.exports = function (hljs) {
  var KEYWORDS = {
    keyword:
      'exit quit print del return times do end foreach as def and or not default echo import from break continue',
    literal:
      'true false null void nan inf',
    type:
      'bool num str list dict any',
    built_in:
      'INFINITE pretty symbol_table function_table'
  };
  var PROMPT = {
    className: 'meta',  begin: /^(kaos>|\.\.\.\.) /,
    relevance: 10
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: '"', end: '"',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        begin: '\'', end: '\'',
        contains: [hljs.BACKSLASH_ESCAPE],
      }
    ]
  };
  var DOCTAG = {
    className: 'doctag',
    begin: '@[A-Za-z]+'
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS
  };
  var NUMBER = {
    className: 'number',
    begin: hljs.C_NUMBER_RE + 'n?',
    relevance: 0
  };

  return {
    name: 'Chaos',
    aliases: ['chaos', 'kaos'],
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [
      PROMPT,
      NUMBER,
      STRING,
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$'),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [DOCTAG]
        }
      ),
      {
        className: 'function',
        beginKeywords: 'def', end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          PARAMS
        ]
      }
    ],
    disableAutodetect: false
  }
}
