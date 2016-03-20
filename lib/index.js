/**
 * @fileoverview eslint plugin for vue component
 * @author Twiknight
 * @copyright 2016 Twiknight. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

const processor = require('./processors/vueProcessor')

module.exports.processors = {
  '.vue': processor
}
