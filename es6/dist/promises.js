'use strict';

function applyForVisa(documents) {
  console.log('Processing');
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > 0 ? resolve({}) : reject('Rejected');
    }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info('Visa acquired');
  return new Promise(function (resolve, reject) {
    resolve(visa);
  });
}

function bookHotel(visa) {
  console.log(visa);
  console.log('Booking hotel');
  return Promise.resolve({});
}

function buyTickets(booking) {
  console.log('Buying hotel');
  console.log(booking);
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (reason) {
  return console.error(reason);
});