"use strict";
import Component from "can-component";
import DefineMap from "can-define/map/map";
import './simple-ajax.less!';
import view from './simple-ajax.stache!';
import fixture from "can-fixture";
import $ from 'jquery';

export const ViewModel = DefineMap.extend({
	messagePromise: {
		get() {
			return $.ajax("/api/simple-ajax");
		}
	},
	message: {
		get(lastValue, resolve) {
			this.messagePromise.then(resolve);
		}
	}
});

fixture("GET /api/simple-ajax", function() {
	return "The simple ajax call returned this.";
});

export default Component.extend({
  tag: 'simple-ajax',
  viewModel: ViewModel,
  view
});
