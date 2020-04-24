/*
Language: Chaos
Author: M. Mert Yildiran <me@mertyildiran.com>
Description: Chaos is a purely functional programming language that achieves zero cyclomatic complexity.
Website: https://chaos-lang.org/
Category: common
*/

export default function(hljs) {
  var KEYWORDS = {
    keyword:
      'exit quit print del return times do end foreach as def and or not default echo import',
    literal:
      'true false null nil void nan inf',
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
  var COMMENT_MODES = [
    hljs.COMMENT(
      '#',
      '\n',
      {
        contains: [DOCTAG]
      }
    ),
    hljs.COMMENT(
      '//',
      '\n',
      {
        contains: [DOCTAG]
      }
    ),
    hljs.COMMENT(
      '/\\*', // begin
      '\\*/', // end
      {
        contains: [DOCTAG]
      }
    )
  ];

  return {
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [
      PROMPT,
      STRING,
      COMMENT_MODES
    ],
    disableAutodetect: false
  }
}
