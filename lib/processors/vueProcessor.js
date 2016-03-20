'use strict'

const parser = require('parse5')

let offset = 0

module.exports = {
  preprocess: function (text, filename) {
    const fragments = parser.parseFragment(text).childNodes
    for (let i = 0; i < fragments.length; i++) {
      let frag = fragments[i]
      if (frag.tagName === 'script') {
        return [frag.childNodes[0].value]
      }
    }
    return []
  },
  postprocess: function (messages, filename) {
    messages[0].forEach(function (m) {
      m.line += offset
    })
    return messages[0]
  }
}
