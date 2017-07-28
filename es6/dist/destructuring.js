'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var scores = [3, [4, 5]];

//let [low, ...rest] = scores;
//let [low, [high, higher]] = scores;

function compureScore(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      low = _ref2[0],
      mid = _ref2[1];

  console.log(low, mid);
}

compureScore([3, 4]);

function getScores() {
  return [3, 4, 5];
}

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2];

var person = {
  firstname: 'john',
  lastname: 'Doe',
  social: {
    facebook: 'johndoe',
    twitter: 'jdoe'
  }
};

//let {firstname, lastname} = person;
//let {firstname: first, lastname: last} = person;

console.log(first, last);

var first = person.firstname,
    last = person.lastname,
    fb = person.social.facebook,
    _person$age = person.age,
    age = _person$age === undefined ? 25 : _person$age;


console.log(first, last, fb, age);

function post(url, _ref3) {
  var _ref3$data = _ref3.data,
      firstname = _ref3$data.firstname,
      lastname = _ref3$data.lastname,
      cache = _ref3.cache;

  console.log(firstname, lastname, cache);
}

var result = post('api/users', { data: user, cache: false });