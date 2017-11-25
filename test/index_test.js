+var jsdom = require('jsdom'),
 +    fs = require('fs'),
 +    assert = require('chai').assert,
 +    file = fs.readFileSync('index.html').toString();
 +
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
 
   it('should have a different title', function() {
     assert.notEqual(window.$('title').text(), 'Hello Code School');
   });
 
   it('should have a different h1', function() {
     assert.notEqual(window.$('h1').length, 0);
   });
 
   it('should have a ul', function() {
     assert.notEqual(window.$('ul').length, 0);
   });
 
   it('should have at least 2 li elements', function() {
     assert.isAtLeast(window.$('li').length, 2);
   });
 });
  it('should have a ul @ul', function() {
    assert.isAtLeast(window.$('ul').length, 1, "Make sure to create a `ul` element.");
  });

  it('should have at least 2 li elements @li', function() {
    assert.isAtLeast(window.$('li').length, 2, "Make sure to create at least 2 `li` elements.");
  });

  it('should have content for all `li` elements. @li', function() {
    var message = "Make sure to include something you want to learn for each `li` element."
    assert.notEqual(window.$('li:first').text(), '', message);
    assert.notEqual(window.$('li:last').text(), '', message);
  });
});
