"use strict";
import Component from "can-component";
import DefineMap from "can-define/map/map";
import './simple-ajax.less!';
import view from './simple-ajax.stache!';
import fixture from "can-fixture";
import ajax from 'can-ajax';

export const ViewModel = DefineMap.extend({
	// have the async request as one prop of the viewModel
	messagePromise: {
		get() {
			return ajax({
				url: "/api/simple-ajax"
			});
		}
	},
	// store the response in another prop for easy access
	message: {
		get(lastValue, resolve) {
			this.messagePromise.then(resolve);
		}
	},
	// here we modify the message before insertion into the view model
	modMessage: {
		get(lastValue, resolve) {
			this.messagePromise.then((response)=>{
				resolve(response.message + " And we modified the response.");
			}, resolve);
		}
	},
});

// we use a fake API endpoint to simulate this ajax call using can-fixture
fixture("GET /api/simple-ajax", function() {
	return {
		message: "The simple ajax call returned this."
	};
});

export default Component.extend({
  tag: 'simple-ajax',
  viewModel: ViewModel,
  view
});
