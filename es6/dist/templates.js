'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ' ', ' ', ' ', ''], ['Hello ', ' ', ' ', ' ', '']),
    _templateObject2 = _taggedTemplateLiteral(['<b>', ' says</b>: "', '"'], ['<b>', ' says</b>: "', '"']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name, name2) {
  console.log('Hello ' + name + ', ' + name2);
}

var name = 'Bill';
var name2 = 'Bill';
var name3 = 'Bill';
var name4 = 'Bill';
console.log(upperName(_templateObject, name, name2, name3, name4));

function upperName(literals) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return literals[0] + values.toString();
}

// Task 2
function print(name) {
  var reversed = name.split('').reverse().join('');
  var result = '' + reversed[0].toUpperCase() + reversed.slice(1).toLowerCase();

  return '\n\u041F\u0440\u0438\u0432\u0435\u0442! ' + name + '!\n\u0422\u0432\u043E\u0435 \u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 "' + result + '"!\n';
}

console.log(print('Александр'));

// Task 3
var comments = [["Muad'Dib", "The power to destroy a thing is the absolute control over it."], ["Edd Dumbill", "HTML isn't a very good language for making Web pages. However, it has been a very good language for making the Web."], ["Ian Hickson", "Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day."], ["l33t haxor", "<script>alert(\"pwned!\")</script>"], ["jsninja", "It's kind of hard to find quotes with &s in them!"]];

function escape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

function html(strings) {
  var result = strings[0];

  for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  for (var i = 0; i < values.length; ++i) {
    result += escape(values[i]) + strings[i + 1];
  }
  console.log(result);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var comment = _step.value;

    var result = html(_templateObject2, comment[0], comment[1]);
    console.log(result);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}