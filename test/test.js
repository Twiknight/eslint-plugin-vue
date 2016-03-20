'use strict'

const expect = require('chai').expect
const CLIEngine = require('eslint').CLIEngine
const plugin = require('../lib/index')
const Path = require('path')

describe('should work with vue', function (done) {
  it('should work with vue', function (done) {
    const cli = new CLIEngine({
      envs: ['es6'],
      useEslintrc: false,
      rules: {semi: [2, 'never']},
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
      }
    })
    cli.addPlugin('eslint-plugin-vue', plugin)
    const filename = Path.join(__dirname, 'fixture.vue')

    const report = cli.executeOnFiles([filename])
    const errors = report.results

    // console.log(JSON.stringify(errors))
    expect(errors).to.have.lengthOf(1)
    done()
  })
})
