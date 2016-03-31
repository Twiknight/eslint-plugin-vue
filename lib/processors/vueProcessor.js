'use strict'

const parse5 = require('parse5')

let offset = 0

module.exports = {
  preprocess: function (text, filename) {
    const fragments = parse5.parseFragment(text, {locationInfo: true}).childNodes
    for (let i = 0; i < fragments.length; i++) {
      let frag = fragments[i]
      if (frag.tagName === 'script') {
        offset = frag.__location.line - 1
        return [frag.childNodes[0].value]
      }
    }
    return ['']
  },
  postprocess: function (messages, filename) {
    messages[0].forEach(function (m) {
      m.line += offset
    })
    return messages[0]
  }
}
