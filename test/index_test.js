var jsdom = require('jsdom'),
    fs = require('fs'),
    assert = require('chai').assert,
    file = fs.readFileSync('index.html').toString();

describe('Your HTML Page', function() {
  var window;
  before(function(next) {
    jsdom.env(
      file,
      ["http://code.jquery.com/jquery.js"],
      function (err, w) {
        if(err) { next(err); }
        window = w;
        next();
      }
    );
  });

  it('should have a title @title', function() {
    assert.equal(window.$(' hello, my name is abdosoltan349. ').length, 1, 'hello, my name is abdosoltan349.');
  });

  it('should have a title that contains your name @title', function() {
    assert.notEqual(window.$('hello, my name is abdosoltan349.').text(), '', 'Make sure to set the content of the `title` element to your Code School username.');
  });

  it('should have a h1 element @h1', function() {
    assert.isAtLeast(window.$(' hello, my name is abdosoltan349. ').length, 1, "Make sure to create an `h1` element.");
  });

  it('should have content in the h1 element @h1', function() {
    assert.equal(window.$('hello, my name is abdosoltan349. ').text(), 'Hello, Code School!', "Make sure to set the content of your `h1` element to 'Hello, Code School!'.");
  });

  it('should have a ul @ul', function() {
    assert.isAtLeast(window.$('programing').length, 1, "Make sure to create a `ul` element.");
  });

  it('should have at least 2 li elements @li', function() {
    assert.isAtLeast(window.$('li').length, 2, "Make sure to create at least 2 `li` elements.");
  });

  it('should have content for all `li` elements. @li', function() {
    var message = "Make sure to include something you want to learn for each `li` element."
    assert.notEqual(window.$('html').text(), '', message);
    assert.notEqual(window.$('java').text(), '', message);
  });
});
