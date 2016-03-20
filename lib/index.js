/**
 * @fileoverview eslint plugin for vue component
 * @author Twiknight
 * @copyright 2016 Twiknight. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
// const Path = require('path')
// const requireIndex = require('requireindex')
const processor = require('./processors/vueProcessor')
// ------------------------------------------------------------------------------
// Plugin Definition
// -----------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(Path.join(__dirname, 'rules'))

// import processors
module.exports.processors = {
  '.vue': processor
}
