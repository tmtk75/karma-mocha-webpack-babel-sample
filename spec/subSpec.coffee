$ = require "jquery"

describe "sub", ->

  it "should be Array", ->

    expect([]).to.be.Array

  it "should be ok", ->

    assert.isDefined $
