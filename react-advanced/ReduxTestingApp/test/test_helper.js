import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from  '../src/reducers'
import chaiJquery from 'chai-jquery';


// Set up testing env to run like a browser in CLI
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(window);

// build 'renderComponent' helper to render React class.
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // producers HTML
}

// Build helper for simulation events.
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery.
chaiJquery(chai, chai.util, $);

export {renderComponent, expect}